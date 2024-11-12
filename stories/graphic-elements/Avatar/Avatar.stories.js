import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/components/ui/avatar'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * An image element with a fallback for representing the user.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/avatar.html
 */
export default {
  title: 'Graphic Elements/Avatar',
  component: DefaultStory,
  subcomponents: {
    Avatar,
    AvatarFallback,
    AvatarImage,
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
