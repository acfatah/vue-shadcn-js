import { UseImage } from '@vueuse/components'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * We are using [UseImage][1] renderless component to load images.
 *
 * Read more about Vueuse renderless component at https://vueuse.org/guide/components.
 *
 * [1]: https://vueuse.org/core/useImage/#useimage
 */
export default {
  title: 'Graphic Elements/Image',
  component: DefaultStory,
  subcomponents: { UseImage },
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
    src: 'https://placehold.co/320x240',
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
