import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'
import pkg from './package.json'
import { pascalCase } from 'change-case'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      tsconfigPath: 'tsconfig.app.json',
      entryRoot: 'src/lib',
      include: ['src/lib/**/*'],
      exclude: [],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    copyPublicDir: false,
    minify: 'terser',
    lib: {
      name: pascalCase(pkg.name),
      entry: {
        [pkg.name]: './src/lib/index.ts',
      },
      formats: ['es', 'cjs'],
      fileName: (formats, entryName) => `${entryName}.${formats}.js`,
    },
  },
})
