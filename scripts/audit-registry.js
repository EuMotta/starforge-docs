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

const primitives = r.filter((i) =>
  /^(radix-|base-|avatar|badge|button|collapsible|dialog|label|popover|select|tabs)$/.test(
    i.name
  )
);

const baseVariants = r.filter(
  (i) => i.name.endsWith('-base') && !/^(radix|base)/.test(i.name)
);

const withRegistryDeps = r.filter(
  (i) => i.registryDependencies && i.registryDependencies.length > 0
);

const allNames = new Set(r.map((i) => i.name));
const orphanDeps = [];

for (const item of withRegistryDeps) {
  for (const dep of item.registryDependencies) {
    if (dep.startsWith('http')) continue;
    if (!allNames.has(dep)) {
      orphanDeps.push({ item: item.name, missing: dep });
    }
  }
}

console.log('=== REGISTRY AUDIT ===\n');
console.log('Total items:', r.length);
console.log('Primitives:', primitives.length);
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
