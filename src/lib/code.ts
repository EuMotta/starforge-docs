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
): Promise<{ code: string }> {
  const basePath = path.join(process.cwd());

  const component = getComponentByName(componentName);

  if (!component) {
    const errorMsg = '// Component not found in registry';
    return {
      code: errorMsg
    };
  }

  if (!component.files || component.files.length === 0) {
    const errorMsg = '// No source files defined for this component';
    return {
      code: errorMsg
    };
  }

  const componentFile = component.example;

  if (!componentFile) {
    const errorMsg = '// No valid source file found for this component';
    return {
      code: errorMsg
    };
  }

  const sanitizedFilePath = componentFile.replace(/^@/, '');

  const fullPath = path.join(basePath, sanitizedFilePath);

  try {
    const code = await fs.readFile(fullPath, 'utf8');
    return { code };
  } catch (error) {
    const errorMsg = `// Failed to read source code for ${componentName}\n// Path attempted: ${fullPath}\n// Error: ${
      error instanceof Error ? error.message : 'Unknown error'
    }`;
    return {
      code: errorMsg
    };
  }
}
