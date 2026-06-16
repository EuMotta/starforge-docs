#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const raw = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../registry.json'), 'utf8')
);
const r = Array.isArray(raw) ? raw : raw.items || [];

const dualPrimitiveNames = [
  'avatar',
  'badge',
  'button',
  'collapsible',
  'dialog',
  'label',
  'popover',
  'select',
  'tabs'
];

const dualPrimitiveNameSet = new Set(dualPrimitiveNames);

const radixPrimitives = r.filter((i) => i.name.startsWith('radix-'));
const basePrimitives = r.filter((i) => i.name.startsWith('base-'));
const defaultPrimitiveAliases = r.filter((i) =>
  dualPrimitiveNameSet.has(i.name)
);
const primitives = [
  ...radixPrimitives,
  ...basePrimitives,
  ...defaultPrimitiveAliases
];

const baseVariants = r.filter(
  (i) => i.name.endsWith('-base') && !/^(radix|base)/.test(i.name)
);

const withRegistryDeps = r.filter(
  (i) => i.registryDependencies && i.registryDependencies.length > 0
);

const allNames = new Set(r.map((i) => i.name));
const orphanDeps = [];

function extractItemNameFromUrl(url) {
  try {
    const parsed = new URL(url);
    const match = /\/r\/(.+)\.json$/.exec(parsed.pathname);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

for (const item of withRegistryDeps) {
  for (const dep of item.registryDependencies) {
    if (dep.startsWith('http')) {
      const itemName = extractItemNameFromUrl(dep);
      if (itemName && !allNames.has(itemName)) {
        orphanDeps.push({
          item: item.name,
          missing: dep + ' (extracted: ' + itemName + ')'
        });
      }
      continue;
    }
    if (!allNames.has(dep)) {
      orphanDeps.push({ item: item.name, missing: dep });
    }
  }
}

console.log('=== REGISTRY AUDIT ===\n');
console.log('Total items:', r.length);
console.log('Primitives:', primitives.length);
console.log('  • Radix primitives:', radixPrimitives.length);
console.log('  • Base primitives:', basePrimitives.length);
console.log('  • Default primitive aliases:', defaultPrimitiveAliases.length);
console.log('Base block variants:', baseVariants.length);
console.log('Items with registryDependencies:', withRegistryDeps.length);

if (orphanDeps.length > 0) {
  console.log('\nORPHAN DEPENDENCIES (missing in registry):');
  for (const o of orphanDeps) {
    console.log(`  - ${o.item} depends on "${o.missing}" (NOT FOUND)`);
  }
  process.exit(1);
} else {
  console.log('\nNo orphan dependencies found.');
  process.exit(0);
}
