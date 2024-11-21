import { Toaster } from '~/components/ui/toast'
import { Toggle } from '~/components/ui/toggle'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithTextStory from './WithText.vue'
import WithTextSource from './WithText.vue?raw'

/**
 * A two-state button that can be either on or off.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/toggle.html
 */
export default {
  title: 'Data Entry/Toggle',
  component: Toggle,
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

  args: {
    disabled: false,
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

export const Outline = {
  ...Default,
  args: {
    variant: 'outline',
  },
}

export const Small = {
  ...Default,
  args: {
    size: 'sm',
  },
}

export const Large = {
  ...Default,
  args: {
    size: 'lg',
  },
}
