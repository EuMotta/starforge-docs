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
  filePathForErrors = 'registry-ui.ts'
) {
  const sourceFile = ts.createSourceFile(
    filePathForErrors,
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  let uiArray;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const isExported = (statement.modifiers || []).some(
      (m) => m.kind === ts.SyntaxKind.ExportKeyword
    );
    if (!isExported) continue;

    for (const decl of statement.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== 'ui') continue;
      if (!decl.initializer || !ts.isArrayLiteralExpression(decl.initializer))
        continue;
      uiArray = decl.initializer;
    }
  }

  if (!uiArray) {
    throw new Error('Export `ui` not found or not an array literal.');
  }

  const items = [];
  for (const el of uiArray.elements) {
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
    console.log('🔧 Generating registry.json from registry-ui.ts...');

    const registryUiPath = path.join(
      __dirname,
      '../src/registry/registry-ui.ts'
    );
    const registryJsonPath = path.join(__dirname, '../registry.json');

    if (!fs.existsSync(registryUiPath)) {
      throw new Error(`File not found: ${registryUiPath}`);
    }

    const content = fs.readFileSync(registryUiPath, 'utf-8');
    const items = parseRegistryItemsFromTsSource(content, registryUiPath);

    console.log(`📦 Found ${items.length} components`);

    const registry = {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      name: 'star-forge',
      homepage: 'https://www.starforge-docs.com',
      items: items
    };

    const jsonContent = JSON.stringify(registry, null, 2);
    fs.writeFileSync(registryJsonPath, jsonContent, 'utf-8');

    console.log('✅ registry.json generated successfully!');
    console.log(`📍 Saved to: ${registryJsonPath}`);
    console.log(`📊 Total items: ${items.length}`);

    const withDeps = items.filter((item) => item.dependencies?.length).length;
    const withRegDeps = items.filter(
      (item) => item.registryDependencies?.length
    ).length;
    const withFiles = items.filter((item) => item.files?.length).length;

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
