import {
  defineConfig as defineAppConfig,
  mergeConfig,
  loadEnv,
  type UserConfig,
  type ConfigEnv,
} from 'vite'
import { createPlugins } from './plugins'
import { createBuilder } from './lib'
import { createElementPlusPlugins } from './ep'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'
import { transformerVariantGroup, transformerDirectives } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

interface ConfigOptions {
  overrides?: UserConfig
}

export function defineConfig<T extends ConfigOptions>(options: T) {
  const { overrides } = options
  return defineAppConfig((config: ConfigEnv): UserConfig => {
    const prefixes = ['VITE_']
    const env = loadEnv(config.mode, process.cwd(), prefixes)
    const commonConfig: UserConfig = {
      envPrefix: prefixes,
      root: process.cwd(),
      base: '/',
      publicDir: 'public',
      server: {
        host: '0.0.0.0',
        port: Number(env.VITE_APP_PORT),
        proxy: {
          [env.VITE_APP_BASE_URL!]: {
            target: env.VITE_APP_PROXY_URL,
            changeOrigin: true,
            rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_URL}`), ''),
          },
        },
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../../', import.meta.url)),
        },
      },
      plugins: [
        UnoCSS({
          mode: 'vue-scoped',
          presets: [presetWind3()],
          transformers: [transformerVariantGroup(), transformerDirectives()],
          content: {
            filesystem: ['src/components/*.vue'],
          },
        }),
        ...createPlugins(),
        ...createElementPlusPlugins(),
        dts({
          tsconfigPath: 'tsconfig.app.json',
          entryRoot: 'src/components',
          include: ['src/components/**/*', 'src/types/*'],
          exclude: ['src/components/**/*.vue'],
        }),
      ],
      build: createBuilder(),
    }
    return overrides ? mergeConfig(commonConfig, overrides) : commonConfig
  })
}
