import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/player.tsx', // Entrada para o player
      name: 'VideoPlayer', // Nome global da biblioteca para acesso no navegador
      fileName: 'player', // Nome do arquivo de saída
      formats: ['es', 'umd'], // Gerar tanto em formato ESM quanto UMD
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Excluir react e react-dom do pacote final
      output: {
        globals: {
          react: 'React', // Definir o React como global
          'react-dom': 'ReactDOM', // Definir o ReactDOM como global
        },
      },
    },
  },
  define: {
    // Definir a variável process.env.NODE_ENV para produção, já que é a versão de build
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
