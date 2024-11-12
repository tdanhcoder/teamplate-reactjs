import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      '#': path.resolve(__dirname, 'src'),
      '#icons': path.resolve(__dirname, 'src/assets/icons'),
      '#styles': path.resolve(__dirname, 'src/assets/styles'),

      '#pages': path.resolve(__dirname, 'src/pages'),
      '#features': path.resolve(__dirname, 'src/features'),
      '#layouts': path.resolve(__dirname, 'src/layouts'),
      '#constants': path.resolve(__dirname, 'src/constants'),
    },
  },
});
