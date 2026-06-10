#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import ts from 'typescript';
import { fileURLToPath } from 'url';

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

  let targetArray;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const isExported = (statement.modifiers || []).some(
      (m) => m.kind === ts.SyntaxKind.ExportKeyword
    );
    if (!isExported) continue;

    for (const decl of statement.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== exportName)
        continue;
      if (!decl.initializer || !ts.isArrayLiteralExpression(decl.initializer))
        continue;
      targetArray = decl.initializer;
    }
  }

  if (!targetArray) {
    throw new Error(
      `Export \`${exportName}\` not found or not an array literal in ${filePathForErrors}.`
    );
  }

  const items = [];
  for (const el of targetArray.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;

    let name;
    let type;
    let dependencies = [];
    let registryDependencies = [];
    let files = [];

    for (const prop of el.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key =
        prop.name && ts.isIdentifier(prop.name) ? prop.name.text : undefined;

      if (key === 'name') name = getStringFromLiteral(prop.initializer);
      if (key === 'type') type = getStringFromLiteral(prop.initializer);
      if (key === 'dependencies')
        dependencies = getStringArrayFromArrayLiteral(prop.initializer);
      if (key === 'registryDependencies') {
        registryDependencies = getStringArrayFromArrayLiteral(prop.initializer);
      }
      if (key === 'files') files = getFilesFromArrayLiteral(prop.initializer);
    }

    if (!name || !type) continue;

    items.push({
      name,
      type,
      dependencies,
      registryDependencies,
      files
    });
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
