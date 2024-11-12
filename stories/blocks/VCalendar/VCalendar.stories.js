import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * The Calendar component is built on top of [VCalendar](https://vcalendar.io/getting-started/installation.html).
 *
 * Read more about VCalendar at https://vcalendar.io.<br>
 * There is a risk that the project is abandoned. Read issue [#1503](https://github.com/nathanreyes/v-calendar/issues/1503)
 */
export default {
  title: 'Blocks/VCalendar',
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
      <div class="max-w-[278px]">
        <DefaultStory v-bind="args" />
      </div>
    `,
  }),
}
