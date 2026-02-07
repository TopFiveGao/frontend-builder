import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { envHelper } from 'vite-plugin-env-helper'


export function createPlugins(): PluginOption[] {
  return [
    vue(),
    vueJsx(),
    vueDevTools(),
    envHelper()
  ]
}
