import Authentication02 from './Authentication02.vue'
import Authentication02Source from './Authentication02.vue?raw'

/**
 * A login form with email and password. There's an option to login with Google
 * and a link to sign up if you don't have an account.
 */
export default {
  title: 'shadcn/Blocks/Authentication02',
  component: Authentication02,
  tags: ['autodocs'],

  parameters: {
    docs: {
      source: {
        code: Authentication02Source,
      },
    },
  },
}

export const Default = {}
