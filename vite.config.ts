import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import process from 'process';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'player',
      fileName: 'player', // A extensão ".js" será adicionada automaticamente.
    },
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    process: JSON.stringify(process),
  },
});
