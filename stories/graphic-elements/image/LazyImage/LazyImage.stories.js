import { UseLazyImage } from '~/components/ui/image'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * `LazyImage` is built on top of [UseImage][1] renderless component to load images.
 *
 * Read more about Vueuse renderless component at https://vueuse.org/guide/components.
 *
 * [1]: https://vueuse.org/core/useImage/#useimage
 */
export default {
  title: 'Graphic Elements/Lazy Image',
  component: UseLazyImage,
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
    src: 'https://placehold.co/100x100',
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
