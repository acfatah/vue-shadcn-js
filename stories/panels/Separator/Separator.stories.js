import { Separator } from '~/components/ui/separator'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Visually or semantically separates content.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/separator.html
 */
export default {
  title: 'Panels/Separator',
  component: Separator,
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
