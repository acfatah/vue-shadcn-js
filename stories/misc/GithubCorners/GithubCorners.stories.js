import GithubCorner from '~/components/extras/GithubCorner/GithubCorner.vue'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}
