import { RadialProgress } from '~/components/ui/progress'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Radial progress implementation using VisDonut.
 *
 * VisDonut API Reference: https://unovis.dev/docs/misc/Donut
 */
export default {
  title: 'Feedback/Radial Progress',
  component: RadialProgress,
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

  args: {
    size: 100,
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
