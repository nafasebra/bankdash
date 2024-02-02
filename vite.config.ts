import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

process.env = Object.assign(process.env, loadEnv('production', process.cwd(), ''));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src/'
    },
  },
})
