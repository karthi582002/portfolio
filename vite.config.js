import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './tailwind.config.js',
  },
  build: {
    chunkSizeWarningLimit: 10000 // Increase the limit to 1 MB (1000 KB)
  }

})
