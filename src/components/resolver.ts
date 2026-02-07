import type { ComponentResolver } from 'unplugin-vue-components'
import { name as pkgName } from '../../package.json'

export function anyResolver(): ComponentResolver {
  const componentsMap: Record<string, string> = {
    TestA: 'TestA',
    TestB: 'TestB',
  }
  return {
    type: 'component',
    resolve: (name: string) => {
      if (!(name in componentsMap)) {
        return null
      }
      return {
        name: componentsMap[name],
        from: pkgName,
        sideEffects: [`${pkgName}/${componentsMap[name]}.css`],
      }
    },
  }
}
