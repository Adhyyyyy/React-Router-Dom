import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure assets are properly handled
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure proper file naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  // If deploying to a subdirectory, uncomment and set the base path
  // base: '/your-subdirectory/',
})
