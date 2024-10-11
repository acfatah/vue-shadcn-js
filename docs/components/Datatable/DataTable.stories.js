import DefaultComponent from './Default/Default.vue'
import DefaultSource from './Default/Default.vue?raw'

/**
 * Table and datagrids built using TanStack Table.
 *
 * Read about component detail at https://www.shadcn-vue.com/docs/components/data-table.<br>
 * Read about TanStack Table API at https://tanstack.com/table/v8/docs/introduction.
 */
export default {
  title: 'Data Display/Data Table',
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
