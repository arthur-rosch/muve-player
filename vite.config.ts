import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/player.tsx',
      name: 'VideoPlayer',
      fileName: 'player', // Aqui você pode escolher o nome do arquivo
      formats: ['umd'],   // Gerar formato UMD, que é mais compatível com navegadores
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
