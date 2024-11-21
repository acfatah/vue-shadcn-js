import { InputPassword } from '~/components/ui/input'
import { Toaster } from '~/components/ui/toast'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import InputPasswordFormField from './InputPasswordFormField.vue?raw'

export default {
  title: 'Data Entry/Password Input',
  component: InputPassword,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: InputPasswordFormField,
      },
    },
  },

  render: args => ({
    components: { InputPassword },

    setup() {
      const password = 'mY$eRcR3tP@ssw0rd'

      return { args, password }
    },

    template: `
      <InputPassword v-bind="args" v-model="password" />
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
      const password = 'mY$eRcR3tP@ssw0rd'

      return { args, password }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}
