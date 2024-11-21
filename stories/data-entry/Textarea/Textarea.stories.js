import { Textarea } from '~/components/ui/textarea'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithLabelStory from './WithLabel.vue'
import WithLabelSource from './WithLabel.vue?raw'
import WithTextStory from './WithText.vue'
import WithTextSource from './WithText.vue?raw'

/**
 * Displays a form textarea or a component that looks like a textarea.
 */
export default {
  title: 'Data Entry/Textarea',
  component: Textarea,
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

export const WithLabel = {
  parameters: {
    docs: {
      source: {
        code: WithLabelSource,
      },
    },
  },

  render: args => ({
    components: { WithLabelStory },

    setup() {
      return { args }
    },

    template: `
      <WithLabelStory v-bind="args" />
    `,
  }),
}

export const WithText = {
  parameters: {
    docs: {
      source: {
        code: WithTextSource,
      },
    },
  },

  render: args => ({
    components: { WithTextStory },

    setup() {
      return { args }
    },

    template: `
      <WithTextStory v-bind="args" />
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
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}
