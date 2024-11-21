import { Input } from '~/components/ui/input'
import { Toaster } from '~/components/ui/toast'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import InputTextStory from './InputText.vue'
import InputTextSource from './InputText.vue?raw'
import WithButtonStory from './WithButton.vue'
import WithButtonSource from './WithButton.vue?raw'
import WithIconStory from './WithIcon.vue'
import WithIconSource from './WithIcon.vue?raw'
import WithLabelStory from './WithLabel.vue'
import WithLabelSource from './WithLabel.vue?raw'

export default {
  title: 'Data Entry/Text Input',
  component: Input,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: InputTextSource,
      },
    },
  },

  args: {
    placeholder: 'Username',
    disabled: false,
  },

  render: args => ({
    components: { InputTextStory },

    setup() {
      return { args }
    },

    template: `
      <InputTextStory v-bind="args" />
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

export const Disabled = {
  parameters: {
    docs: {
      source: {
        code: `
<Input disabled />
        `,
      },
    },
  },

  render: args => ({
    components: { Input },

    setup() {
      return { args }
    },

    template: `
      <Input v-bind="args" disabled placeholder="email@example.com" />
    `,
  }),
}

export const WithLabel = {
  parameters: {
    docs: {
      source: {
        code: WithLabelSource,
      },
    },
  },

  render: args => ({
    components: { WithLabelStory },

    setup() {
      return { args }
    },

    template: `
      <WithLabelStory v-bind="args" />
    `,
  }),
}

export const WithButton = {
  parameters: {
    docs: {
      source: {
        code: WithButtonSource,
      },
    },
  },

  render: args => ({
    components: { WithButtonStory },

    setup() {
      return { args }
    },

    template: `
      <WithButtonStory v-bind="args" />
    `,
  }),
}

export const WithIcon = {
  parameters: {
    docs: {
      source: {
        code: WithIconSource,
      },
    },
  },

  render: args => ({
    components: { WithIconStory },

    setup() {
      return { args }
    },

    template: `
      <WithIconStory v-bind="args" />
    `,
  }),
}
