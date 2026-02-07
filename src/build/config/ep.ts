import type {PluginOption} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export function createElementPlusPlugins(): PluginOption[] {
  return [
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'css'
        })
      ]
    }),
    Components({
      dts: 'src/types/components.d.ts',
      dirs: ['src/components'],
      directoryAsNamespace: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'css'
        })
      ]
    }),
    ElementPlus({
      useSource: false
    })
  ]
}
