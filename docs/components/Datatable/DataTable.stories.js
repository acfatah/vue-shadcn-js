import CustomFilterAndPaginationComponent from './CustomFilterAndPagination/CustomFilterAndPagination.vue'
import CustomFilterAndPaginationSource from './CustomFilterAndPagination/CustomFilterAndPagination.vue?raw'
import DefaultComponent from './Default/Default.vue'
import DefaultSource from './Default/Default.vue?raw'
import SimplifiedComponent from './PaymentDataTable/PaymentDataTable.vue'
import SimplifiedSource from './PaymentDataTable/PaymentDataTable.vue?raw'

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

export const Simplified = {
  parameters: {
    docs: {
      source: {
        code: SimplifiedSource,
      },
    },
  },

  render: args => ({
    components: { SimplifiedComponent },

    setup() {
      return { args }
    },

    template: `
      <SimplifiedComponent v-bind="args" />
    `,
  }),
}

export const CustomFilterAndPagination = {
  parameters: {
    docs: {
      source: {
        code: CustomFilterAndPaginationSource,
      },
    },
  },

  render: args => ({
    components: { CustomFilterAndPaginationComponent },

    setup() {
      return { args }
    },

    template: `
      <CustomFilterAndPaginationComponent v-bind="args" />
    `,
  }),

}
