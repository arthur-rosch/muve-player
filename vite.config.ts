import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/player.tsx',  // Ponto de entrada do seu player
      name: 'VideoPlayer',      // Nome global para exportação
      fileName: 'player',       // Nome do arquivo de saída
      formats: ['umd', 'es'],   // Formatos compatíveis com o navegador
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
