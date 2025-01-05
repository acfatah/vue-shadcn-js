import { Checkbox } from '~/components/ui/checkbox'
import { Toaster } from '~/components/ui/toast'
import ArrayInputStory from './ArrayInput.vue'
import ArrayInputSource from './ArrayInput.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithTextStory from './WithTextStory.vue'
import WithTextSource from './WithTextStory.vue?raw'

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/checkbox.html
 */
export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
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

  args: {
    disabled: false,
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

export const ArrayInput = {
  parameters: {
    docs: {
      source: {
        code: ArrayInputSource,
      },
    },
  },

  render: args => ({
    components: { ArrayInputStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <ArrayInputStory v-bind="args" />
    `,
  }),
}

export const WithText = {
  parameters: {
    docs: {
      source: {
        code: WithTextSource,
      },
    },
  },

  render: args => ({
    components: { WithTextStory },

    setup() {
      return { args }
    },

    template: `
      <WithTextStory v-bind="args" />
    `,
  }),
}
