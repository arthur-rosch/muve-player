import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
