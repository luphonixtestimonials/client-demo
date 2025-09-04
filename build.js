
import { build } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildApp() {
  try {
    console.log('Building client for production...');
    
    await build({
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist/public'),
        emptyOutDir: true,
      },
    });
    
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildApp();
