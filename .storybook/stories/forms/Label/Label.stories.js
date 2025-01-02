import { Label } from '~/components/ui/label'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Renders an accessible label associated with controls.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/label.html
 */
export default {
  title: 'Forms/Label',
  component: Label,
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
