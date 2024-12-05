import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'woff': 'font/woff',
      'woff2': 'font/woff2',
      'ttf': 'font/ttf',
    }
  }
})
