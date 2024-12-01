import lucideIconResolver from './resolvers/lucide-icon-resolver.js'
import nonDeepResolver from './resolvers/non-deep-resolver.js'
import radixVueResolver from './resolvers/radix-vue-resolver.js'
import veeValidateResolver from './resolvers/vee-validate-resolver.js'
import vueuseComponentsResolver from './resolvers/vueuse-components-resolver.js'

export const componentResolvers = [
  nonDeepResolver,
  lucideIconResolver,
  radixVueResolver,
  veeValidateResolver,
  vueuseComponentsResolver,
]

export const deepSearchDirs = [
  'src/components/ui',
  'src/components/extras',
  'src/components/page',
  'src/layouts',
]

export const searchDirs = [
  'src/components',
]
