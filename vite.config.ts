import { defineConfig } from './src/build/config'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  overrides: {
    plugins: [
      tailwindcss(),
      svgLoader()
    ]
  },
})
