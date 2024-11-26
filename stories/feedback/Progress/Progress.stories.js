import { Progress } from '~/components/ui/progress'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays an indicator showing the completion progress of a task, typically displayed
 * as a progress bar.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/progress.html
 */
export default {
  title: 'Feedback/Progress',
  component: Progress,
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
