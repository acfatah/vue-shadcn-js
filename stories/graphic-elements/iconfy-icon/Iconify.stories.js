import { Icon as IconifyComponent } from '@iconify/vue'
import { Iconify } from '~/components/ui/icon'

/**
 * Icon component using Iconify library.
 *
 * It's recommended to use `size-*` utility class to size the icon. The default
 * size is `size-6` or  `24px`.
 *
 * Browse icons sets at https://icon-sets.iconify.design.<br>
 * Read more about Iconify at https://iconify.design/docs/icon-components/vue.
 */
export default {
  title: 'Graphic Elements/Iconify Icon',
  component: IconifyComponent,
  tags: ['autodocs'],

  args: {
    icon: 'mdi-light:menu',
  },

  argTypes: {
    icon: {
      control: 'text',
      type: { required: true },
      description: 'Icon name or icon data',
    },

    inline: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'Changes vertical alignment',
    },

    width: {
      control: 'text',
      type: 'string|number',
      defaultValue: '',
      description: 'Icon width',
    },

    height: {
      control: 'text',
      type: 'string|number',
      defaultValue: '',
      description: 'Icon height',
    },

    horizontalFlip: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'Flips icon horizontally',
    },

    verticalFlip: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'Flips icon vertically',
    },

    flip: {
      control: 'text',
      type: 'string',
      defaultValue: '',
      description: 'Alternative to horizontalFlip and verticalFlip',
    },

    rotate: {
      control: 'number',
      type: 'number|string',
      defaultValue: 0,
      description: 'Rotates icon',
    },

    color: {
      control: 'color',
      type: 'string',
      defaultValue: '',
      description: 'Changes icon color',
    },

    onLoad: {
      control: 'function',
      type: 'function',
      defaultValue: () => {},
      description: 'Callback that is called when icon data has been loaded',
    },
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: `<Iconify icon="mdi-light:menu" />`,
      },
    },
  },

  render: args => ({
    components: { Iconify },

    setup() {
      return { args }
    },

    template: '<Iconify v-bind="args" />',
  }),
}
