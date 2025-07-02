/**
 * Extrai o código-fonte de um componente registrado com base no seu nome.
 *
 * @param {string} componentName - Nome do componente a ser buscado no registro.
 * @returns {Promise<{ code: string }>} Um objeto contendo o código-fonte do componente ou uma mensagem de erro.
 * @throws {Error} Não lança erros diretamente, mas retorna mensagens de erro no objeto de retorno em caso de falha.
 * @remarks
 * - Utiliza o registro de componentes para localizar o arquivo correspondente.
 * - O caminho do arquivo é sanitizado para remover o prefixo '@' se presente.
 * - Em caso de erro (componente não encontrado, ausência de arquivos ou falha na leitura), retorna uma mensagem de erro formatada.
 * @example
 *
 * const result = await extractSourceCode('Button');
 * console.log(result.code); // Exibe o código-fonte ou uma mensagem de erro
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
