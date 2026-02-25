/**
 * Extracts the source code of a registered component based on its name.
 *
 * @param {string} componentName - Name of the component to be searched in the registry.
 * @returns {Promise<{ code: string }>} An object containing the component's source code or an error message.
 * @throws {Error} Does not throw errors directly, but returns error messages in the return object in case of failure.
 * @remarks
 * - Uses the component registry to locate the corresponding file.
 * - The file path is sanitized to remove the '@' prefix if present.
 * - In case of error (component not found, missing files, or read failure), returns a formatted error message.
 * @example
 *
 * const result = await extractSourceCode('Button');
 * console.log(result.code); // Displays the source code or an error message
 *
 */

import { getComponentByName } from '@/registry';
import { promises as fs } from 'fs';
import path from 'path';
import '../registry/';

export async function extractSourceCode(
  componentName: string
): Promise<{ code: string; sourceCode: string }> {
  const basePath = path.join(process.cwd());

  const component = getComponentByName(componentName);

  if (!component) {
    const errorMsg = '// Example Component not found in registry';
    const sourceErrorMsg = '// Source Component not found in registry';
    return {
      code: errorMsg,
      sourceCode: sourceErrorMsg
    };
  }

  if (!component.files || component.files.length === 0) {
    const errorMsg = '// No example files defined for this component';

    const sourceErrorMsg = '// No source files defined for this component';

    return {
      code: errorMsg,
      sourceCode: sourceErrorMsg
    };
  }

  const exampleComponentFile = component.example;
  const sourceComponentFile = component.files[0].path;

  if (!exampleComponentFile) {
    const errorMsg = '// No valid source file found for this component';
    return {
      code: errorMsg,
      sourceCode: ''
    };
  }

  const exampleSanitizedFilePath = exampleComponentFile.replace(/^@/, '');
  const sourceSanitizedFilePath = sourceComponentFile.replace(/^@/, '');

  const fullExamplePath = path.join(basePath, exampleSanitizedFilePath);
  const fullSourcePath = path.join(basePath, sourceSanitizedFilePath);

  try {
    const code = await fs.readFile(fullExamplePath, 'utf8');
    const sourceCode = await fs.readFile(fullSourcePath, 'utf8');
    return { code, sourceCode };
  } catch (error) {
    const errorMsg = `// Failed to read source code for ${componentName}\n// Path attempted: ${fullExamplePath}\n// Error: ${
      error instanceof Error ? error.message : 'Unknown error'
    }`;
    return {
      code: errorMsg,
      sourceCode: ''
    };
  }
}
