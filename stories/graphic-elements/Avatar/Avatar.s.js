import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * An image element with a fallback for representing the user.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/avatar.html
 */
export default {
  title: 'Graphic Elements/Avatar',
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

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      description: 'The size variant',
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
