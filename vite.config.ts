import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Gera o bundle para o script
    lib: {
      entry: './src/main.tsx', // Seu arquivo de entrada principal do React
      name: 'player',      // Nome global do seu script
      fileName: (format) => `player.js`, // Nome do arquivo de saída
    },
    outDir: 'dist',  // Diretório de saída
    sourcemap: true,  // Gera source maps para depuração
  },
});
