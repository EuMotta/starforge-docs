#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function flattenPath(filePath) {
  return filePath
    .replace('src/components/ui/primitives/radix/', 'src/components/ui/radix/')
    .replace('src/components/ui/primitives/base/', 'src/components/ui/base/');
}

function flattenRegistryItemPaths(item) {
  if (!item.files || !Array.isArray(item.files)) return item;

  const files = item.files.map((file) => {
    if (!file.path) return file;
    return { ...file, path: flattenPath(file.path) };
  });

  return { ...item, files };
}

function processRegistryFiles() {
  try {
    let totalModified = 0;

    const registryJsonPath = path.join(__dirname, '../registry.json');
    if (fs.existsSync(registryJsonPath)) {
      const content = fs.readFileSync(registryJsonPath, 'utf-8');
      const registry = JSON.parse(content);

      if (registry.items && Array.isArray(registry.items)) {
        const flattenedItems = registry.items.map(flattenRegistryItemPaths);
        const needsUpdate = registry.items.some((item, i) =>
          item.files?.some(
            (f, j) => f.path !== flattenedItems[i]?.files?.[j]?.path
          )
        );

        if (needsUpdate) {
          registry.items = flattenedItems;
          fs.writeFileSync(
            registryJsonPath,
            JSON.stringify(registry, null, 2),
            'utf-8'
          );
          totalModified++;
          console.log('✏️  Flattened paths in registry.json');
        }
      }
    }

    const rDir = path.join(__dirname, '../public/r');
    if (!fs.existsSync(rDir)) {
      console.warn(`⚠️ Directory not found: ${rDir}`);
      return;
    }

    const files = fs.readdirSync(rDir).filter((f) => f.endsWith('.json'));

    for (const file of files) {
      const filePath = path.join(rDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const item = JSON.parse(content);

      const flattenedItem = flattenRegistryItemPaths(item);

      const needsUpdate = item.files?.some(
        (f, i) => f.path !== flattenedItem.files[i]?.path
      );

      if (needsUpdate) {
        fs.writeFileSync(
          filePath,
          JSON.stringify(flattenedItem, null, 2),
          'utf-8'
        );
        totalModified++;
        console.log(`✏️  Flattened paths in ${file}`);
      }
    }

    console.log(
      `🎉 Done. Modified ${totalModified} files (1 registry.json + ${files.length} public/r/*.json).`
    );
  } catch (error) {
    console.error('❌ Error flattening registry paths:', error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
}

processRegistryFiles();
