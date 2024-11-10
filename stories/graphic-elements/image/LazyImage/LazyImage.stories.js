import { UseLazyImage } from '~/components/ui/image'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

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
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}
