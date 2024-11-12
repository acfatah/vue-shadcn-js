import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 */
export default {
  title: 'Overlays/AlertDialog',
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
