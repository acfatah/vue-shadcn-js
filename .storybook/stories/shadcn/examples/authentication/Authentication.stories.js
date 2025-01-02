import Authentication from './Authentication.vue'
import AuthenticationSource from './Authentication.vue?raw'
import SignInForm from './components/SignInForm.vue'
import SignInFormSource from './components/SignInForm.vue?raw'

export default {
  title: 'shadcn/Examples/Authentication',
  component: Authentication,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',

    docs: {
      source: {
        code: AuthenticationSource,
      },
    },
  },
}

export const Default = {}

export const AuthenticationForm = {
  parameters: {
    docs: {
      source: {
        code: SignInFormSource,
      },
    },
  },

  render: () => ({
    components: {
      SignInForm,
    },

    template: `
      <SignInForm />
    `,
  }),
}
