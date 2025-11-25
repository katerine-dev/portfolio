import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.BASE_URL || '/portfolio/',
  plugins: [react()],
  build: {
    sourcemap: mode === 'development'
  }
}))