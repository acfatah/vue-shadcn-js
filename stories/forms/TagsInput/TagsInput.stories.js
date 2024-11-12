import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '~/components/ui/tags-input'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithComboboxComponent from './WithCombobox.vue'

/**
 * Tag inputs render tags inside an input, followed by an actual text input.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tags-input
 */
export default {
  title: 'Forms/Tags Input',
  component: DefaultStory,
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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const WithCombobox = {
  render: args => ({
    components: { WithComboboxComponent },

    setup() {
      return { args }
    },

    template: `
      <WithComboboxComponent v-bind="args" />
    `,
  }),
}
