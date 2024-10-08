import { Toaster } from '~/components/ui/toast'
import Example from './Example.vue'

/**
 * Toasts are used to display short messages to the user.
 *
 * We are using Radix Toast components.
 * Read more at [https://www.radix-vue.com/components/toast](https://www.radix-vue.com/components/toast)
 */
export default {
  title: 'Overlays/Toast',
  component: Example,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    height: 400,
  },

  render: args => ({
    components: { Example, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Example v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}
