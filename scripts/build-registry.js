#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getStringFromLiteral(node) {
  if (!node) return undefined;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return undefined;
}

function getStringArrayFromArrayLiteral(node) {
  if (!node || !ts.isArrayLiteralExpression(node)) return [];

  return node.elements
    .map((el) => getStringFromLiteral(el))
    .filter((v) => typeof v === 'string')
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
}

function getFilesFromArrayLiteral(node) {
  if (!node || !ts.isArrayLiteralExpression(node)) return [];

  const files = [];
  for (const el of node.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;

    let filePath;
    let fileType;

    for (const prop of el.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key =
        prop.name && ts.isIdentifier(prop.name) ? prop.name.text : undefined;

      if (key === 'path') filePath = getStringFromLiteral(prop.initializer);
      if (key === 'type') fileType = getStringFromLiteral(prop.initializer);
    }

    if (filePath) {
      files.push({
        path: filePath,
        type: fileType || 'registry:ui'
      });
    }
  }

  return files;
}

function findExportedArray(sourceFile, exportName) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;

    const isExported = (statement.modifiers || []).some(
      (m) => m.kind === ts.SyntaxKind.ExportKeyword
    );
    if (!isExported) continue;

    for (const decl of statement.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== exportName) {
        continue;
      }
      if (!decl.initializer || !ts.isArrayLiteralExpression(decl.initializer)) {
        continue;
      }
      return decl.initializer;
    }
  }

  return undefined;
}

function getPropertyInitializer(objLiteral, keyName) {
  for (const prop of objLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;

    const key =
      prop.name && ts.isIdentifier(prop.name) ? prop.name.text : undefined;
    if (key === keyName) return prop.initializer;
  }

  return undefined;
}

const REGISTRY_BASE_URL = 'https://starforge-docs.com/r';

function resolveRegistryDependencies(deps) {
  return deps.map((dep) => {
    if (dep.startsWith('http')) return dep;
    return `${REGISTRY_BASE_URL}/${dep}.json`;
  });
}

function parseRegistryItem(el) {
  if (!ts.isObjectLiteralExpression(el)) return null;

  const name = getStringFromLiteral(getPropertyInitializer(el, 'name'));
  const type = getStringFromLiteral(getPropertyInitializer(el, 'type'));

  if (!name || !type) return null;

  const dependencies = getStringArrayFromArrayLiteral(
    getPropertyInitializer(el, 'dependencies')
  );
  const rawRegistryDependencies = getStringArrayFromArrayLiteral(
    getPropertyInitializer(el, 'registryDependencies')
  );
  const registryDependencies = resolveRegistryDependencies(
    rawRegistryDependencies
  );
  const files = getFilesFromArrayLiteral(getPropertyInitializer(el, 'files'));

  return {
    name,
    type,
    dependencies,
    registryDependencies,
    files
  };
}

function parseRegistryItemsFromTsSource(
  content,
  filePathForErrors = 'registry-ui.ts',
  exportName = 'ui'
) {
  const sourceFile = ts.createSourceFile(
    filePathForErrors,
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  const targetArray = findExportedArray(sourceFile, exportName);

  if (!targetArray) {
    throw new Error(
      `Export \`${exportName}\` not found or not an array literal in ${filePathForErrors}.`
    );
  }

  const items = [];
  for (const el of targetArray.elements) {
    const item = parseRegistryItem(el);
    if (item) items.push(item);
  }

  return items;
}

function generateRegistry() {
  try {
    console.log('🔧 Generating registry.json...');

    const registryUiPath = path.join(
      __dirname,
      '../src/registry/registry-ui.ts'
    );
    const registryPrimitivesPath = path.join(
      __dirname,
      '../src/registry/registry-primitives.ts'
    );
    const registryJsonPath = path.join(__dirname, '../registry.json');

    let allItems = [];

    if (fs.existsSync(registryUiPath)) {
      const uiContent = fs.readFileSync(registryUiPath, 'utf-8');
      const uiItems = parseRegistryItemsFromTsSource(
        uiContent,
        registryUiPath,
        'ui'
      );
      allItems = allItems.concat(uiItems);
      console.log(`📦 Found ${uiItems.length} UI items from registry-ui.ts`);
    } else {
      console.warn(`⚠️ File not found: ${registryUiPath}`);
    }

    if (fs.existsSync(registryPrimitivesPath)) {
      const primitivesContent = fs.readFileSync(
        registryPrimitivesPath,
        'utf-8'
      );
      const primitiveItems = parseRegistryItemsFromTsSource(
        primitivesContent,
        registryPrimitivesPath,
        'primitives'
      );
      allItems = allItems.concat(primitiveItems);
      console.log(
        `📦 Found ${primitiveItems.length} primitive items from registry-primitives.ts`
      );
    } else {
      console.warn(`⚠️ File not found: ${registryPrimitivesPath}`);
    }

    const registry = {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      name: 'star-forge',
      homepage: 'https://www.starforge-docs.com',
      items: allItems
    };

    const jsonContent = JSON.stringify(registry, null, 2);
    fs.writeFileSync(registryJsonPath, jsonContent, 'utf-8');

    console.log('✅ registry.json generated successfully!');
    console.log(`📍 Saved to: ${registryJsonPath}`);
    console.log(`📊 Total items: ${allItems.length}`);

    const withDeps = allItems.filter(
      (item) => item.dependencies?.length
    ).length;
    const withRegDeps = allItems.filter(
      (item) => item.registryDependencies?.length
    ).length;
    const withFiles = allItems.filter((item) => item.files?.length).length;

    console.log('\n📈 Statistics:');
    console.log(`  • With dependencies: ${withDeps}`);
    console.log(`  • With registryDependencies: ${withRegDeps}`);
    console.log(`  • With files: ${withFiles}`);
  } catch (error) {
    console.error('❌ Error generating registry.json:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
  }
}

generateRegistry();
