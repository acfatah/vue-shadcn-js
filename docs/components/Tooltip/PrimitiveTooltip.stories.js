import Example from './Example.vue'
import ExampleSource from './Example.vue?raw'

/**
 * When more customization is required, we can use the primitive tooltip components.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tooltip
 */
export default {
  title: 'Overlays/Tooltip/Primitive',
  component: Example,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: ExampleSource,
      },
    },
  },
}

export const Default = {
  parameters: {
    height: 400,
  },

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'top' },
      },
    },
  },

  render: args => ({
    components: { Example },

    setup() {
      return { args }
    },

    template: `
      <div class="flex justify-center items-center h-[140px]">
        <Example v-bind="args" />
      </div>
    `,
  }),
}
