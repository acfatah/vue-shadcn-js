import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 */
export default {
  title: 'Overlays/AlertDialog',
  component: DefaultComponent,
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
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}
