import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Search button that shows modal search window.
 */
export default {
  title: 'Extras/Search Button',
  component: DefaultStory,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },

      // story: {
      //   height: '1024px',
      // },
    },
  },

  // argTypes: {
  //   variant: {
  //     control: { type: 'select' },
  //     options: ['default', 'xs', 'sm', 'lg', 'icon'],
  //     table: {
  //       type: { summary: 'string' },
  //       defaultValue: { summary: 'default' },
  //     },
  //     description: 'The size variant'
  //   },
  // },

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
