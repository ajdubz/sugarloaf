import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxyTarget = env.VITE_PROXY_TARGET || 'http://localhost:3000'
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // Dev-time reverse proxy: forward /api to your backend to avoid CORS
    // and to share same-origin cookies. Adjust target to your backend.
    server: {
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    // Vitest config. Note: Vitest v1 does not read a tsconfig
    // path from here. Editor types for tests come from
    // `tests/tsconfig.json` (which extends `tsconfig.vitest.json`).
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './vitest.setup.ts',
    },
  }
})
