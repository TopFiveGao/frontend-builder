import { type BuildEnvironmentOptions } from 'vite'
import pkg from '../../../package.json'
import { pascalCase } from 'change-case'

export function createBuilder(): BuildEnvironmentOptions {
  return {
    outDir: 'dist',
    minify: 'terser',
    copyPublicDir: false,
    lib: {
      name: pascalCase(pkg.name),
      formats: ['es'],
      entry: {
        [pkg.name]: 'src/components/index.ts',
      },
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  }
}
