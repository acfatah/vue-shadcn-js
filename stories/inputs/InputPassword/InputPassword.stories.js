import { InputPassword } from '~/components/ui/input'
import InputPasswordFormField from './InputPasswordFormField.vue?raw'

export default {
  title: 'Inputs/Password Input',
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
