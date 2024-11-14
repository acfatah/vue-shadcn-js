import { DataTable } from '~/components/ui/data-table'
import CustomFilterAndPaginationComponent from './CustomFilterAndPagination/CustomFilterAndPagination.vue'
import CustomFilterAndPaginationSource from './CustomFilterAndPagination/CustomFilterAndPagination.vue?raw'
import DefaultStory from './DefaultDataTable/DefaultDataTable.vue'
import DefaultSource from './DefaultDataTable/DefaultDataTable.vue?raw'
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
  component: DataTable,
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
