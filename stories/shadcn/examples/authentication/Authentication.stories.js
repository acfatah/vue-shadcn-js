import Authentication from './Authentication.vue'
import AuthenticationSource from './Authentication.vue?raw'

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
