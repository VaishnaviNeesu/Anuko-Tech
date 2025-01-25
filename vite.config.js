import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for assets
  build: {
    outDir: 'dist', // Specifies the output directory for built files
  },
});
