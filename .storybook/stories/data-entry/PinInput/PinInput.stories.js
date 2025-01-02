import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from '~/components/ui/pin-input'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import SeparatorStory from './SeparatorStory.vue'
import SeparatorSource from './SeparatorStory.vue?raw'

/**
 * Allows users to input a sequence of one-character alphanumeric inputs.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/pin-input.html
 */
export default {
  title: 'Data Entry/PIN Input',
  component: DefaultStory,
  subcomponents: {
    PinInput,
    PinInputGroup,
    PinInputInput,
    PinInputSeparator,
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

  args: {
    disabled: false,
  },

  render: args => ({
    components: { DefaultStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
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

export const Separator = {
  parameters: {
    docs: {
      source: {
        code: SeparatorSource,
      },
    },
  },

  render: args => ({
    components: { SeparatorStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <SeparatorStory v-bind="args" />
    `,
  }),
}
