import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A date field component that allows users to enter and edit date.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/calendar.html
 *
 * See also:
 * - [Forms/Datepicker](?path=/docs/data-display-calendar--docs) component
 * - [Forms/Range Calendar](?path=/docs/data-display-range-calendar--docs) component
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Forms/Datepicker',
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
      <DefaultStory v-bind="args" />
    `,
  }),
}
