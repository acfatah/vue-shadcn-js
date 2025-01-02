import Authentication03 from './Authentication03.vue'
import Authentication03Source from './Authentication03.vue?raw'

/**
 * A sign up form with first name, last name, email and password inside a card.
 * There's an option to sign up with GitHub and a link to login if you already have
 * an account.
 */
export default {
  title: 'shadcn/Blocks/Authentication03',
  component: Authentication03,
  tags: ['autodocs'],

  parameters: {
    docs: {
      source: {
        code: Authentication03Source,
      },
    },
  },
}

export const Default = {}
