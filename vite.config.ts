import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    deps: {
      inline: [/solid-js/],
    },
    passWithNoTests: true,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
