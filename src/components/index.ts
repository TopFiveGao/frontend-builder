import {defineAsyncComponent} from 'vue'

const TestA = defineAsyncComponent(() => import('./TestA.vue'))
const TestB = defineAsyncComponent(() => import('./TestB.vue'))

export { anyResolver} from '@/components/resolver'
export { TestA, TestB }
