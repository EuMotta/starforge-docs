import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import {
  collectLocalGraph,
  contentExports,
  loadRegistry,
  simulateInstall
} from '../../scripts/registry-install/helpers.mjs';

const ROOT = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const { items, warnings } = loadRegistry(ROOT);

test('published catalog matches the root catalog', () => {
  assert.deepEqual(warnings, [], warnings.join('\n'));
});

test('published payloads are verbatim copies of current source files', () => {
  const sourceHashes = new Set();
  const collect = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) collect(path);
      else if (/\.[jt]sx?$/.test(entry.name)) {
        sourceHashes.add(
          createHash('sha256').update(readFileSync(path)).digest('hex')
        );
      }
    }
  };
  collect(join(ROOT, 'src'));
  for (const item of items.values()) {
    for (const file of item.files) {
      if (!/\.[jt]sx?$/.test(file.path)) continue;
      const hash = createHash('sha256').update(file.content).digest('hex');
      assert.ok(
        sourceHashes.has(hash),
        `${item.name}: stale payload for ${file.path} — run build:components`
      );
    }
  }
});

const PACKAGE_NAME = /^(?:@[^/@]+\/)?[^/@]+/;
const BARE_IMPORT = /from\s+['"]([^'"]+)['"]/g;
const PARITY_EXCEPTIONS = new Set(['TabsIndicator']);
const SINGLE_ENGINE = new Set(['combobox']);

test('declared npm dependencies are imported by item files', () => {
  const unused = [];
  for (const item of items.values()) {
    const imported = new Set();
    for (const file of item.files) {
      for (const match of file.content.matchAll(BARE_IMPORT)) {
        const specifier = match[1];
        if (!specifier.startsWith('@/') && !specifier.startsWith('.')) {
          imported.add(PACKAGE_NAME.exec(specifier)?.[0]);
        }
      }
    }
    for (const dep of [...item.dependencies, ...item.devDependencies]) {
      const name = PACKAGE_NAME.exec(dep)?.[0];
      if (!imported.has(name)) unused.push(`${item.name}: ${dep}`);
    }
  }
  assert.deepEqual(unused, [], unused.join('\n'));
});

test('radix and base variants of each file export the same API', () => {
  const drifts = [];
  const pairs = new Map();
  for (const item of items.values()) {
    const match = /^(radix|base)-(.+)$/.exec(item.name);
    if (!match) continue;
    const key = match[2];
    const pair = pairs.get(key) || {};
    pair[match[1]] = item;
    pairs.set(key, pair);
  }
  for (const [key, pair] of pairs) {
    if (SINGLE_ENGINE.has(key)) continue;
    if (!pair.radix || !pair.base) {
      drifts.push(`${key}: missing ${pair.radix ? 'base' : 'radix'} variant`);
      continue;
    }
    const byBase = new Map(
      pair.base.files.map((file) => [basename(file.path), file])
    );
    for (const file of pair.radix.files) {
      const twin = byBase.get(basename(file.path));
      if (!twin) continue;
      const onlyRadix = [...contentExports(file.content)]
        .filter((name) => !PARITY_EXCEPTIONS.has(name))
        .filter((name) => !contentExports(twin.content).has(name));
      const onlyBase = [...contentExports(twin.content)]
        .filter((name) => !PARITY_EXCEPTIONS.has(name))
        .filter((name) => !contentExports(file.content).has(name));
      if (onlyRadix.length || onlyBase.length) {
        drifts.push(
          `${key}: radix-only=[${onlyRadix}] base-only=[${onlyBase}]`
        );
      }
    }
  }
  assert.deepEqual(drifts, [], drifts.join('\n'));
});

test('registry example and lazy component paths resolve to real exports', () => {
  const sources = ['registry-ui.ts', 'registry-primitives.ts'].map((file) =>
    readFileSync(join(ROOT, 'src/registry', file), 'utf8')
  );
  const problems = [];
  for (const source of sources) {
    for (const match of source.matchAll(/example:\s*\n?\s*'([^']+)'/g)) {
      if (!existsSync(join(ROOT, match[1]))) {
        problems.push(`missing example file: ${match[1]}`);
      }
    }
    for (const match of source.matchAll(
      /name: '([a-z0-9-]+)',[\s\S]{0,3000}?import\('(@\/components\/[^']+)'\)\s*\.then\(\(mod\) => \(\{\s*default: mod\.([A-Za-z0-9_]+)/g
    )) {
      const [, itemName, specifier, exported] = match;
      const base = join(ROOT, specifier.replace('@/', 'src/'));
      const file = ['.tsx', '.ts', '/index.tsx', '/index.ts']
        .map((ext) => base + ext)
        .find((candidate) => existsSync(candidate));
      if (!file) {
        problems.push(`${itemName}: lazy import target ${specifier} missing`);
      } else if (
        exported !== 'default' &&
        !contentExports(readFileSync(file, 'utf8')).has(exported)
      ) {
        problems.push(`${itemName}: ${specifier} does not export ${exported}`);
      }
    }
  }
  assert.deepEqual(problems, [], problems.join('\n'));
});

for (const name of [...items.keys()].sort()) {
  test(`installs ${name}`, () => {
    const graph = collectLocalGraph(items, name);
    simulateInstall(graph);
    simulateInstall(graph, true);
  });
}
