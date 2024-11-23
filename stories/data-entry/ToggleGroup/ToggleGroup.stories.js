import { Toaster } from '~/components/ui/toast'
import { ToggleGroup } from '~/components/ui/toggle-group'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

/**
 * A set of two-state buttons that can be toggled on or off.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/toggle-group.html
 */
export default {
  title: '',
  component: ToggleGroup,
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

export const Form = {
  parameters: {
    docs: {
      source: {
        code: FormSource,
      },
    },
  },

  render: args => ({
    components: { FormStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}

export const Single = {
  ...Default,
  args: {
    type: 'single',
  },
}
