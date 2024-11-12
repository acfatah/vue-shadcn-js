import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Drawer is built on top of [Vaul Vue](https://github.com/radix-vue/vaul-vue).
 *
 * Primitive API Reference: https://github.com/radix-vue/vaul-vue
 */
export default {
  title: 'Overlays/Drawer',
  component: DefaultStory,
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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}
