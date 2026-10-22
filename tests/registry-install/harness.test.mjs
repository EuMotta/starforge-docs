import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import {
  collectLocalGraph,
  destination,
  loadRegistry,
  simulateInstall,
  validateItem
} from '../../scripts/registry-install/helpers.mjs';

const ROOT = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const CONTENT = "export const value = 'ok';";

function item(name = 'button', overrides = {}) {
  return validateItem(
    {
      name,
      type: 'registry:ui',
      dependencies: [],
      registryDependencies: [],
      files: [
        {
          path: 'src/components/ui/radix/button.tsx',
          type: 'registry:ui',
          content: CONTENT
        }
      ],
      ...overrides
    },
    name
  );
}

test('catalog excludes the aggregate registry.json and loads every item', () => {
  const { items } = loadRegistry(ROOT);
  assert.ok(items.size > 0);
  assert.ok(!items.has('registry'));
  assert.ok(items.has('base-button'));
  assert.ok(items.has('button'));
});

test('schema rejects malformed and unsafe items', () => {
  assert.throws(() => validateItem(item(), 'wrong'), /Expected/);
  for (const override of [
    { type: 'registry:invented' },
    { files: [] },
    { dependencies: 'react' },
    {
      files: [{ path: '../outside.ts', type: 'registry:ui', content: CONTENT }]
    },
    { files: [{ path: 'a.ts', type: 'registry:ui' }] },
    { files: [{ path: 'C:\\abs.ts', type: 'registry:ui', content: CONTENT }] }
  ])
    assert.throws(() => item('button', override));
});

test('dependency cycles and missing items fail explicitly', () => {
  const items = new Map();
  assert.throws(() => collectLocalGraph(items, 'ghost'), /Missing/);
  items.set('self', item('self', { registryDependencies: ['self'] }));
  assert.throws(() => collectLocalGraph(items, 'self'), /cycle/);
  items.set('chain', item('chain', { registryDependencies: ['self'] }));
  assert.throws(() => collectLocalGraph(items, 'chain'), /cycle/);
});

test('destination maps each file type to the shadcn alias', () => {
  const uiFile = item().files[0];
  assert.equal(destination(uiFile), 'src/components/ui/radix/button.tsx');
  assert.equal(
    destination(uiFile, true),
    'src/design/primitives/radix/button.tsx'
  );
  assert.equal(
    destination({ path: 'helpers/slot.ts', type: 'registry:lib' }),
    'src/lib/slot.ts'
  );
  assert.equal(
    destination({ path: 'hooks/use-test.ts', type: 'registry:hook' }, true),
    'src/behavior/use-test.ts'
  );
  assert.equal(
    destination({ path: 'x.ts', type: 'registry:file', target: '~/lib/x.ts' }),
    'lib/x.ts'
  );
  assert.throws(
    () => destination({ path: 'x.ts', type: 'registry:file' }),
    /Explicit target/
  );
});

test('conflicting files in a graph fail instead of silently overwriting', () => {
  const other = item('other');
  other.files[0].content = 'export const different = true;';
  assert.throws(
    () =>
      simulateInstall(
        new Map([
          ['a', item()],
          ['b', other]
        ])
      ),
    /Conflicting/
  );
});

test('imports of undeclared registry files and packages fail', () => {
  const missing = item();
  missing.files[0].content = "export { x } from '@/components/ui/absent';";
  assert.throws(
    () => simulateInstall(new Map([['missing', missing]])),
    /Unresolved import/
  );
  const undeclared = item();
  undeclared.files[0].content = "export { x } from 'some-pkg';";
  assert.throws(
    () => simulateInstall(new Map([['undeclared', undeclared]])),
    /Undeclared package/
  );
});

test('imported symbols must exist in the resolved file', () => {
  const dep = item('dep', {
    files: [
      {
        path: 'src/components/ui/radix/dep.tsx',
        type: 'registry:ui',
        content: 'export const exists = 1;'
      }
    ]
  });
  const consumer = item('consumer', {
    registryDependencies: ['dep'],
    files: [
      {
        path: 'src/components/star-forge/consumer.tsx',
        type: 'registry:component',
        content: "import { missing } from '@/components/ui/dep';"
      }
    ]
  });
  const graph = collectLocalGraph(
    new Map([
      ['dep', dep],
      ['consumer', consumer]
    ]),
    'consumer'
  );
  assert.throws(() => simulateInstall(graph), /Missing export 'missing'/);
});

test('dynamic imports are resolved like static ones', () => {
  const lazy = item();
  lazy.files[0].content =
    "const Lazy = React.lazy(() => import('@/components/ui/absent'));";
  assert.throws(
    () => simulateInstall(new Map([['lazy', lazy]])),
    /Unresolved import/
  );
});

test('malformed file content fails on syntax diagnostics', () => {
  const broken = item();
  broken.files[0].content = 'export const = ;';
  assert.throws(
    () => simulateInstall(new Map([['broken', broken]])),
    /Malformed file content/
  );
});

test('dependency imports are rewritten to resolved destinations', () => {
  const dep = item('dep', {
    files: [
      {
        path: 'src/components/ui/radix/dep.tsx',
        type: 'registry:ui',
        content: 'export const x = 1;'
      }
    ]
  });
  const consumer = item('consumer', {
    registryDependencies: ['dep'],
    files: [
      {
        path: 'src/components/star-forge/consumer.tsx',
        type: 'registry:component',
        content: "import { x } from '@/components/ui/dep';\nexport { x };"
      }
    ]
  });
  const graph = collectLocalGraph(
    new Map([
      ['dep', dep],
      ['consumer', consumer]
    ]),
    'consumer'
  );
  const files = simulateInstall(graph);
  assert.ok(
    [...files.values()].some((content) =>
      content.includes('@/components/ui/radix/dep')
    )
  );
  const custom = simulateInstall(graph, true);
  assert.ok(
    [...custom.values()].some((content) =>
      content.includes('@/design/primitives/radix/dep')
    )
  );
});
