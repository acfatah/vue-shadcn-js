import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '~/components/ui/tags-input'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * Tag inputs render tags inside an input, followed by an actual text input.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tags-input
 */
export default {
  title: 'Forms/Tags Input',
  component: DefaultComponent,
  subcomponents: {
    TagsInput,
    TagsInputInput,
    TagsInputItem,
    TagsInputItemDelete,
    TagsInputItemText,
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
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}
