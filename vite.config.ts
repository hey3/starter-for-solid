import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    passWithNoTests: true,
  },
})
