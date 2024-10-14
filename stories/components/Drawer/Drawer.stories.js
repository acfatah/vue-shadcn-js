import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * Drawer is built on top of [Vaul Vue](https://github.com/radix-vue/vaul-vue).
 *
 * Primitive API Reference: https://github.com/radix-vue/vaul-vue
 */
export default {
  title: 'Overlays/Drawer',
  component: DefaultComponent,
  tags: ['autodocs'],
}

export const Default = {
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

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}
