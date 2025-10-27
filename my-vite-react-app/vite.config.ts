import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ReactProject/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // This enables listening on all addresses
    strictPort: true,
    open: true,
    cors: true,
    middlewareMode: false,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
});