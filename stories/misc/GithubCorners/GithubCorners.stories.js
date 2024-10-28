import GithubCorner from '~/components/GithubCorner/GithubCorner.vue'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * Inspired by https://github.com/tholman/github-corners
 */
export default {
  title: 'Misc/Github Corner Icon',
  component: GithubCorner,
  tags: ['autodocs'],

  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['right', 'left'],
    },
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: args => ({
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}
