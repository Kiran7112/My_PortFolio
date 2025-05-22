import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove the external option for @mui/icons-material
    },
  },
});