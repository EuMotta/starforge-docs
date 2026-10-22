import { readdirSync, readFileSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, sep } from 'node:path';
import ts from 'typescript';
import { z } from 'zod';

const NAME = /^[a-z0-9][a-z0-9-]*$/;
const PACKAGE_NAME = /^(?:@[^/@]+\/)?[^/@]+/;
const FILE_TYPES = [
  'registry:ui',
  'registry:component',
  'registry:lib',
  'registry:hook',
  'registry:file',
  'registry:style'
];
const safePath = z
  .string()
  .min(1)
  .refine(
    (value) =>
      !isAbsolute(value) &&
      !/^[a-z]:/i.test(value) &&
      !value.includes('\\') &&
      !value.split('/').includes('..'),
    'Unsafe registry path'
  );
const itemSchema = z
  .object({
    name: z.string().regex(NAME),
    type: z.enum([
      'registry:ui',
      'registry:component',
      'registry:block',
      'registry:lib',
      'registry:hook',
      'registry:file',
      'registry:style'
    ]),
    dependencies: z.array(z.string().min(1)).default([]),
    devDependencies: z.array(z.string().min(1)).default([]),
    registryDependencies: z.array(z.string().min(1)).default([]),
    files: z
      .array(
        z.object({
          path: safePath,
          target: safePath.optional(),
          type: z.enum(FILE_TYPES),
          content: z.string().min(1)
        })
      )
      .min(1)
  })
  .passthrough();

function json(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

export function validateItem(value, name) {
  const item = itemSchema.parse(value);
  if (item.name !== name) throw new Error(`Expected ${name}, got ${item.name}`);
  return item;
}

export function loadRegistry(root) {
  const items = new Map();
  const warnings = [];
  for (const file of readdirSync(join(root, 'public/r')).sort()) {
    if (!file.endsWith('.json') || file === 'registry.json') continue;
    const name = basename(file, '.json');
    items.set(name, validateItem(json(join(root, 'public/r', file)), name));
  }
  const catalog = json(join(root, 'registry.json'));
  const publishedCatalog = json(join(root, 'public/r/registry.json'));
  const publishedNames = new Set(
    publishedCatalog.items.map((item) => item.name)
  );
  for (const name of catalog.items.map((item) => item.name)) {
    if (!publishedNames.has(name)) {
      warnings.push(`Catalog item absent from published catalog: ${name}`);
    }
  }
  const names = new Set(catalog.items.map((item) => item.name));
  if (names.size !== catalog.items.length) {
    warnings.push('Catalog contains duplicate item names');
  }
  for (const item of catalog.items) {
    if (!items.has(item.name))
      throw new Error(`Missing published item: ${item.name}`);
    const published = items.get(item.name);
    for (const key of ['type', 'dependencies', 'registryDependencies']) {
      if (
        JSON.stringify(item[key] || []) !== JSON.stringify(published[key] || [])
      ) {
        throw new Error(`Catalog mismatch: ${item.name}.${key}`);
      }
    }

    const catalogFiles = (item.files || [])
      .map((file) => basename(file.path))
      .sort();
    const publishedFiles = published.files
      .map((file) => basename(file.path))
      .sort();
    if (JSON.stringify(catalogFiles) !== JSON.stringify(publishedFiles)) {
      throw new Error(`Catalog mismatch: ${item.name}.files`);
    }
  }
  for (const name of items.keys()) {
    if (!names.has(name))
      warnings.push(`Published item absent from catalog: ${name}`);
  }
  return { items, warnings };
}

const REGISTRY_ORIGIN = 'https://starforge-docs.com';

export function localDependencyName(dep) {
  if (!/^https?:/.test(dep)) return dep;
  const url = new URL(dep);
  const name = /\/r\/([\w-]+)\.json$/.exec(url.pathname)?.[1];
  if (name && url.origin !== REGISTRY_ORIGIN) {
    throw new Error(`External registry dependency: ${dep}`);
  }
  return name;
}

export function collectLocalGraph(
  items,
  name,
  graph = new Map(),
  active = new Set()
) {
  if (active.has(name)) throw new Error(`Registry dependency cycle: ${name}`);
  if (graph.has(name)) return graph;
  const item = items.get(name);
  if (!item) throw new Error(`Missing local registry item: ${name}`);
  graph.set(name, item);
  active.add(name);
  for (const dep of item.registryDependencies) {
    const depName = localDependencyName(dep);
    if (!depName) throw new Error(`Unsupported registry dependency: ${dep}`);
    collectLocalGraph(items, depName, graph, active);
  }
  active.delete(name);
  return graph;
}

function aliases(custom) {
  return {
    components: custom ? '@/design' : '@/components',
    ui: custom ? '@/design/primitives' : '@/components/ui',
    utils: '@/lib/utils',
    lib: '@/lib',
    hooks: custom ? '@/behavior' : '@/hooks'
  };
}

export function destination(file, custom = false) {
  if (file.target) return file.target.replace(/^~\//, '');
  const config = aliases(custom);
  if (file.type === 'registry:ui') {
    const suffix = file.path.includes('/ui/')
      ? file.path.split('/ui/')[1]
      : basename(file.path);
    return `src/${config.ui.slice(2)}/${suffix}`;
  }
  const alias = {
    'registry:lib': 'lib',
    'registry:hook': 'hooks',
    'registry:component': 'components'
  }[file.type];
  if (alias) return `src/${config[alias].slice(2)}/${basename(file.path)}`;
  throw new Error(`Explicit target required for ${file.type}: ${file.path}`);
}

function tokens(content) {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    true,
    ts.LanguageVariant.JSX,
    content
  );
  const result = [];
  for (
    let kind = scanner.scan();
    kind !== ts.SyntaxKind.EndOfFileToken;
    kind = scanner.scan()
  ) {
    result.push([
      kind,
      kind === ts.SyntaxKind.StringLiteral
        ? scanner.getTokenValue()
        : scanner.getTokenText()
    ]);
  }
  return JSON.stringify(result);
}

function transformedContent(content, custom) {
  if (!custom) return content;
  return content
    .replaceAll('@/components/ui', '@/design/primitives')
    .replaceAll('@/components/', '@/design/')
    .replaceAll('@/hooks/', '@/behavior/');
}

function specifierMap(graph, custom) {
  const map = new Map();
  const seen = new Map();
  for (const item of graph.values()) {
    for (const file of item.files) {
      const key = basename(file.path).replace(/\.[^.]+$/, '');
      const specifier = `@/${destination(file, custom)
        .slice(4)
        .replace(/\.[^.]+$/, '')}`;
      if (seen.has(key) && seen.get(key) !== specifier) map.delete(key);
      else {
        seen.set(key, specifier);
        map.set(key, specifier);
      }
    }
  }
  return map;
}

function rewriteDependencyImports(content, map) {
  return content.replace(
    /(from\s+|import\s*\(\s*)(['"])(@\/[\w./-]+)\2/g,
    (match, prefix, quote, specifier) => {
      const key = specifier.split('/').at(-1);
      const resolved = map.get(key);
      return resolved && resolved !== specifier
        ? `${prefix}${quote}${resolved}${quote}`
        : match;
    }
  );
}

const AMBIENT_PACKAGES = new Set([
  'react',
  'react-dom',
  'clsx',
  'tailwind-merge'
]);
const CODE_FILE = /\.[cm]?[jt]sx?$/;
const RESOLVE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

function declaredPackages(graph) {
  const declared = new Set(AMBIENT_PACKAGES);
  const ranges = new Map();
  for (const item of graph.values()) {
    for (const dep of [...item.dependencies, ...item.devDependencies]) {
      const name = PACKAGE_NAME.exec(dep)?.[0];
      const range = dep.slice(name?.length || 0).replace(/^@/, '') || '*';
      if (ranges.has(name) && ranges.get(name) !== range) {
        throw new Error(
          `Conflicting dependency ranges for ${name}: ${ranges.get(name)} vs ${range}`
        );
      }
      ranges.set(name, range);
      declared.add(name);
    }
  }
  return declared;
}

function virtualResolve(files, provided, base) {
  if (files.has(base)) return base;
  if (provided.has(base)) return 'provided';
  for (const ext of RESOLVE_EXTENSIONS) {
    const file = `${base}${ext}`;
    if (files.has(file)) return file;
    if (provided.has(file)) return 'provided';
    if (files.has(`${base}/index${ext}`)) return `${base}/index${ext}`;
  }
  return null;
}

export function contentExports(content) {
  return fileExports(
    ts.createSourceFile('module.tsx', content, ts.ScriptTarget.Latest, true)
  );
}

function fileExports(source) {
  const names = new Set();
  for (const stmt of source.statements) {
    if (ts.isExportDeclaration(stmt)) {
      if (stmt.exportClause && ts.isNamedExports(stmt.exportClause)) {
        for (const el of stmt.exportClause.elements) names.add(el.name.text);
      }
      continue;
    }
    if (ts.isExportAssignment(stmt) && !stmt.isExportEquals) {
      names.add('default');
      continue;
    }
    const mods = stmt.modifiers || [];
    if (mods.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
      if (mods.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword))
        names.add('default');
      if (stmt.name) names.add(stmt.name.text);
      else if (ts.isVariableStatement(stmt)) {
        for (const decl of stmt.declarationList.declarations)
          if (ts.isIdentifier(decl.name)) names.add(decl.name.text);
      }
    }
  }
  return names;
}

function assertImportClause(stmt, exports, specifier, target) {
  if (ts.isImportDeclaration(stmt)) {
    if (!stmt.importClause) return;
    if (stmt.importClause.name && !exports.has('default')) {
      throw new Error(
        `Missing default export for '${specifier}' imported by ${target}`
      );
    }
    const bindings = stmt.importClause.namedBindings;
    if (bindings && ts.isNamedImports(bindings)) {
      for (const el of bindings.elements) {
        const imported = el.propertyName ? el.propertyName.text : el.name.text;
        if (!exports.has(imported)) {
          throw new Error(
            `Missing export '${imported}' for '${specifier}' imported by ${target}`
          );
        }
      }
    }
    return;
  }
  if (stmt.exportClause && ts.isNamedExports(stmt.exportClause)) {
    for (const el of stmt.exportClause.elements) {
      const imported = el.propertyName ? el.propertyName.text : el.name.text;
      if (!exports.has(imported)) {
        throw new Error(
          `Missing export '${imported}' for '${specifier}' re-exported by ${target}`
        );
      }
    }
  }
}

function resolveSpecifier(specifier, target, files, provided, declared) {
  if (specifier.startsWith('node:')) return 'skipped';
  if (specifier.startsWith('@/')) {
    const resolved = virtualResolve(
      files,
      provided,
      `src/${specifier.slice(2)}`
    );
    if (!resolved)
      throw new Error(`Unresolved import: ${specifier} in ${target}`);
    return resolved;
  }
  if (specifier.startsWith('.')) {
    const resolved = virtualResolve(
      files,
      provided,
      join(dirname(target), specifier).replaceAll(sep, '/')
    );
    if (!resolved)
      throw new Error(`Unresolved import: ${specifier} in ${target}`);
    return resolved;
  }
  if (!declared.has(PACKAGE_NAME.exec(specifier)?.[0])) {
    throw new Error(`Undeclared package import: ${specifier} in ${target}`);
  }
  return 'package';
}

function exportsOf(files, cache, path) {
  if (!cache.has(path)) {
    cache.set(
      path,
      fileExports(
        ts.createSourceFile(path, files.get(path), ts.ScriptTarget.Latest, true)
      )
    );
  }
  return cache.get(path);
}

function dynamicImports(source) {
  const found = [];
  const visit = (node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword &&
      node.arguments[0] &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      found.push(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  return found;
}

function assertVirtualImports(files, declared) {
  const provided = new Set(['src/lib/utils.ts', 'src/app/globals.css']);
  const exportCache = new Map();
  for (const [target, content] of files) {
    if (!CODE_FILE.test(target)) continue;
    const source = ts.createSourceFile(
      target,
      content,
      ts.ScriptTarget.Latest,
      true
    );
    const [syntaxError] = source.parseDiagnostics;
    if (syntaxError) {
      throw new Error(
        `Malformed file content: ${target}: ${ts.flattenDiagnosticMessageText(syntaxError.messageText, ' ')}`
      );
    }
    for (const specifier of dynamicImports(source)) {
      resolveSpecifier(specifier, target, files, provided, declared);
    }
    for (const stmt of source.statements) {
      if (!ts.isImportDeclaration(stmt) && !ts.isExportDeclaration(stmt))
        continue;
      if (!stmt.moduleSpecifier) continue;
      const specifier = stmt.moduleSpecifier.text;
      const resolved = resolveSpecifier(
        specifier,
        target,
        files,
        provided,
        declared
      );
      if (
        resolved !== 'skipped' &&
        resolved !== 'provided' &&
        resolved !== 'package'
      ) {
        assertImportClause(
          stmt,
          exportsOf(files, exportCache, resolved),
          specifier,
          target
        );
      }
    }
  }
}

export function simulateInstall(graph, custom = false) {
  const specifiers = specifierMap(graph, custom);
  const files = new Map();
  for (const item of graph.values()) {
    for (const file of item.files) {
      const target = destination(file, custom);
      const content = transformedContent(
        rewriteDependencyImports(file.content, specifiers),
        custom
      );
      if (files.has(target) && tokens(files.get(target)) !== tokens(content)) {
        throw new Error(`Conflicting registry files: ${target}`);
      }
      files.set(target, content);
    }
  }
  assertVirtualImports(files, declaredPackages(graph));
  return files;
}
