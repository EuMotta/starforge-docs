#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateInstallCommand() {
  try {
    console.log(
      '🔧 Gerando comando de instalação para todos os componentes...'
    );

    const rDir = path.join(__dirname, '../public/r');
    if (!fs.existsSync(rDir)) {
      throw new Error(`Diretório não encontrado: ${rDir}`);
    }

    const files = fs
      .readdirSync(rDir)
      .filter((f) => f.endsWith('.json') && f !== 'registry.json');
    console.log(`📦 Encontrados ${files.length} arquivos JSON`);

    files.sort();

    const urls = files.map((file) => `http://localhost:3000/r/${file}`);
    const command = urls
      .map((url) => `npx shadcn@latest add ${url}`)
      .join('\n');

    console.log('\n🚀 Comando de instalação:');
    console.log(command);
  } catch (error) {
    console.error('❌ Erro ao gerar comando de instalação:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

generateInstallCommand();
