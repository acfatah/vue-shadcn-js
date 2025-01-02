import Authentication04 from './Authentication04.vue'
import Authentication04Source from './Authentication04.vue?raw'

/**
 * A login page with two columns. The first column has the login form with email
 * and password. There's a Forgot your passwork link and a link to sign up if you
 * do not have an account. The second column has a cover image.
 */
export default {
  title: 'shadcn/Blocks/Authentication04',
  component: Authentication04,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',

    docs: {
      source: {
        code: Authentication04Source,
      },
    },
  },
}

export const Default = {}
