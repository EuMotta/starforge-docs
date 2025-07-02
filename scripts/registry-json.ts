import { promises as fs } from 'fs';
import path from 'path';

import { registry } from '../src/registry/index.ts';

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = path.join(REGISTRY_BASE_PATH, 'public/r');
const COMPONENTS_BASE_PATH = path.join(
  REGISTRY_BASE_PATH,
  'src/components/star-forge'
);

interface RegistryFile {
  type: 'registry:block';
  content: string;
  path: string;
  target: string;
}

interface RegistryComponent {
  name: string;
  type: 'registry:block';
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

/**
 * Verifica se o arquivo precisa ser escrito comparando o conteúdo existente.
 */
async function shouldWriteFile(
  filePath: string,
  newContent: string
): Promise<boolean> {
  try {
    const existingContent = await fs.readFile(filePath, 'utf-8');
    return existingContent !== newContent;
  } catch {
    return true;
  }
}

/**
 * Escreve o arquivo recursivamente, criando diretórios se necessário.
 */
async function writeFileRecursive(
  filePath: string,
  data: string
): Promise<void> {
  const dir = path.dirname(filePath);

  try {
    if (await shouldWriteFile(filePath, data)) {
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, data, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
  }
}

/**
 * Lê o conteúdo do arquivo de um componente e gera um objeto de arquivo de registro.
 */
async function getComponentFile(componentName: string): Promise<RegistryFile> {
  const filePath = path.join(COMPONENTS_BASE_PATH, `${componentName}.tsx`);
  const normalizedPath = `/components/star-forge/${componentName}.tsx`;

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return {
      type: 'registry:block',
      content,
      path: normalizedPath,
      target: normalizedPath
    };
  } catch (error) {
    console.error(`Error reading file for component ${componentName}:`, error);
    throw new Error(`Failed to read component file: ${filePath}`);
  }
}

/**
 * Gera o objeto de registro para um componente.
 */
async function createRegistryComponent(doc: any): Promise<RegistryComponent> {
  const name = doc.name;
  const file = await getComponentFile(name);

  const dependencies: string[] = doc.dependencies ?? [];
  const registryDependencies: string[] = doc.registryDependencies ?? [];

  return {
    name,
    type: 'registry:block',
    dependencies,
    registryDependencies,
    files: [file]
  };
}

/**
 * Processa os componentes do tipo 'registry:component' e gera os arquivos JSON.
 */
async function buildRegistry(): Promise<number> {
  let changesCount = 0;

  const components = registry.filter(
    (doc) => doc.type === 'registry:component'
  );

  for (const doc of components) {
    try {
      const component = await createRegistryComponent(doc);
      const jsonContent = JSON.stringify(component, null, 2);
      const jsonPath = path.join(
        PUBLIC_FOLDER_BASE_PATH,
        `${component.name}.json`
      );

      const hasChanged = await shouldWriteFile(jsonPath, jsonContent);
      if (hasChanged) {
        await writeFileRecursive(jsonPath, jsonContent);
        changesCount++;
      }
    } catch (error) {
      console.error(`Error processing component :`, error);
    }
  }

  return changesCount;
}

/**
 * Executa o script de construção do registro.
 */
async function main(): Promise<void> {
  try {
    const changes = await buildRegistry();
    if (changes > 0) {
      console.log(`✅ Done - Updated ${changes} registry file(s)`);
    } else {
      console.log('✅ Done - No changes needed');
    }
  } catch (err) {
    console.error('❌ Error building registry:', err);
    process.exit(1);
  }
}

main();
