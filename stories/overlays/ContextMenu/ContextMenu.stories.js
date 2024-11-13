import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/context-menu.html
 */
export default {
  title: 'Overlays/ContextMenu',
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

