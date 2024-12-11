import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/player.tsx',
      name: 'VideoPlayer',
      fileName: 'player',  // Usando o nome do arquivo como 'player.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
