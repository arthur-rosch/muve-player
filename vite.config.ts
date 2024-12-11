import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
    entry: 'src/player.tsx',
    name: 'VideoPlayer',
    fileName: 'player.umd',  // Geração do arquivo player.umd.js
    formats: ['umd'],
  },
    rollupOptions: {
      external: ['react', 'react-dom'], // Excluindo dependências do pacote
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
