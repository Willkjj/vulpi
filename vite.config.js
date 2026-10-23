import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  root: 'client',
  server: {
    port: 5173,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:5173',
        ws: true,
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
})
