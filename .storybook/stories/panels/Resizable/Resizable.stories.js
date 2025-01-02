import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import VerticalStory from './VerticalStory.vue'
import VerticalSource from './VerticalStory.vue?raw'
import WithHandleStory from './WithHandleStory.vue'
import WithHandleSource from './WithHandleStory.vue?raw'

/**
 * Accessible resizable panel groups and layouts with keyboard support.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/splitter.html
 */
export default {
  title: 'Panels/Resizable',
  component: DefaultStory,
  tags: ['autodocs'],
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

export const Vertical = {
  parameters: {
    docs: {
      source: {
        code: VerticalSource,
      },
    },
  },

  render: args => ({
    components: { VerticalStory },

    setup() {
      return { args }
    },

    template: `
      <VerticalStory v-bind="args" />
    `,
  }),
}

export const WithHandle = {
  parameters: {
    docs: {
      source: {
        code: WithHandleSource,
      },
    },
  },

  render: args => ({
    components: { WithHandleStory },

    setup() {
      return { args }
    },

    template: `
      <WithHandleStory v-bind="args" />
    `,
  }),
}
