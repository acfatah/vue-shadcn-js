import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A carousel with motion and swipe built using Embla.
 *
 * Primitive API Reference: https://www.embla-carousel.com/api
 */
export default {
  title: 'Data Display/Carousel',
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
      <div class="flex w-full justify-center">
        <DefaultStory v-bind="args" />
      </div>
    `,
  }),
}
