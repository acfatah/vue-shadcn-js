import { Menu as IconMenu } from 'lucide-vue-next'
import ExampleComponent from './Example.vue'
import ExampleSource from './Example.vue?raw'

/**
 * Automatically import lucide icon as component. Simply postfix `Icon` to lucide icon name.
 *
 * Browse Lucide icons at https://lucide.dev/icons.<br>
 * Read more about Lucide icons at https://lucide.dev/guide/packages/lucide-vue-next.
 */
export default {
  title: 'Graphic Elements/Lucide Icon',
  component: ExampleComponent,
  tags: ['autodocs'],
}

export const Default = {
  component: IconMenu,
  parameters: {

    docs: {
      source: {
        code: ExampleSource,
      },
    },
  },

  args: {
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
    absoluteStrokeWidth: false,
    defaultClass: 'lucide-icon',
  },

  render: args => ({
    components: { ExampleComponent },

    setup() {
      return { args }
    },

    template: '<ExampleComponent v-bind="args" />',
  }),
}
