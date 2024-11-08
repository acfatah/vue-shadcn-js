import { Menu as IconMenu } from 'lucide-vue-next'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * Automatically import lucide icon as component. Simply postfix `Icon` to lucide icon name.
 *
 * It's recommended to use `size-*` utility class to size the icon. The default
 * size is `size-6` or  `24px`.
 *
 * Browse Lucide icons at https://lucide.dev/icons.<br>
 * Read more about Lucide icons at https://lucide.dev/guide/packages/lucide-vue-next.
 */
export default {
  title: 'Graphic Elements/Lucide Icon',
  component: DefaultComponent,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
      description: 'Icon size',
    },

    color: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'currentColor' },
      },
      description: 'Icon color',
    },

    strokeWidth: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      description: 'Icon stroke width',
    },

    absoluteStrokeWidth: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Absolute stroke width',
    },

    defaultClass: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lucide-icon' },
      },
      description: 'Default class',
    },
  },
}

export const Default = {
  component: IconMenu,
  parameters: {

    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: args => ({
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: '<DefaultComponent v-bind="args" />',
  }),
}
