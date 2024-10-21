// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';  // Import the SVGR plugin

export default defineConfig({
  plugins: [
    react(),
    svgr(),  // Add the SVGR plugin to the Vite configuration
  ],
});

