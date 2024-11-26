import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * The Calendar component is built on top of [VCalendar](https://vcalendar.io/getting-started/installation.html).
 * It was the previous implementation of shadcn-vue calendar.
 *
 * VCalendar Component:https://www.shadcn-vue.com/docs/components/v-calendar.html<br>
 * Primitive API Reference: https://vcalendar.io.<br>
 * There is a risk that the project is `abandoned`. Read issue [#1503](https://github.com/nathanreyes/v-calendar/issues/1503)
 */
export default {
  title: 'Extras/VCalendar',
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

    // FIXME: the component fills the available space. We put some constraint
    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}
