import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import DefaultStory from './DefaultStory.vue'

import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays rich content in a portal, triggered by a button.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/popover.html
 */
export default {
  title: 'Overlays/Popover',
  component: DefaultStory,
  subcomponents: {
    Popover,
    PopoverContent,
    PopoverTrigger,
  },
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
