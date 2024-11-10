import { UseImage } from '@vueuse/components'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * We are using [UseImage][1] renderless component to load images.
 *
 * Read more about Vueuse renderless component at https://vueuse.org/guide/components.
 *
 * [1]: https://vueuse.org/core/useImage/#useimage
 */
export default {
  title: 'Graphic Elements/Image',
  component: DefaultComponent,
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
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}
