import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/player.tsx',
      name: 'VideoPlayer',
      fileName: 'player',
      formats: ['es', 'umd'], // Ambos os formatos: ES modules e UMD (para compatibilidade com CDN)
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
