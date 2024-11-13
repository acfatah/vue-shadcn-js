import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import ThumbnailsStory from './ThumbnailsStory.vue'
import ThumbnailsSource from './ThumbnailsStory.vue?raw'
import VerticalStory from './VerticalStory.vue'
import VerticalSource from './VerticalStory.vue?raw'

/**
 * A carousel with motion and swipe built using Embla.
 *
 * ## Sizes
 *
 * Sizes can be set using the basis utility class on the `<CarouselItem />`.
 *
 * ## Spacing
 *
 * To set the spacing between the items, we use a `pl-[VALUE]` utility on the
 * <CarouselItem /> and a negative `-ml-[VALUE]` on the `<CarouselContent />`.
 *
 * ## Options
 *
 * Pass options to the carousel using the `opts` prop.<br>
 * See: https://www.embla-carousel.com/api/options
 *
 * ## Plugins
 *
 * See: https://www.embla-carousel.com/plugins
 *
 * ## References
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
      <div class="flex w-full justify-center p-10">
        <DefaultStory v-bind="args" />
      </div>
    `,
  }),
}

export const Vertical = {
  parameters: {
    docs: {
      source: {
        code: VerticalSource,
      },
    },
  },

  render: args => ({
    components: { VerticalStory },

    setup() {
      return { args }
    },

    template: `
      <div class="flex w-full h-full items-center justify-center min-h-[350px] p-10">
        <VerticalStory v-bind="args" />
      </div>
    `,
  }),
}

export const Thumbnails = {
  parameters: {
    docs: {
      source: {
        code: ThumbnailsSource,
      },
    },
  },

  render: args => ({
    components: { ThumbnailsStory },

    setup() {
      return { args }
    },

    template: `
      <div class="flex w-full h-full items-center justify-center min-h-[350px] p-10">
        <ThumbnailsStory v-bind="args" />
      </div>
    `,
  }),
}
