import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithTextStory from './WithTextStory.vue'
import WithTextSource from './WithTextStory.vue?raw'

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/checkbox.html
 */
export default {
  title: 'Forms/Checkbox',
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

export const WithText = {
  parameters: {
    docs: {
      source: {
        code: WithTextSource,
      },
    },
  },

  render: args => ({
    components: { WithTextStory },

    setup() {
      return { args }
    },

    template: `
      <WithTextStory v-bind="args" />
    `,
  }),
}
