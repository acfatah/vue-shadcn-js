import Example from './Example.vue'
import ExampleSource from './Example.vue?raw'

/**
 * A popup that displays information related to an element when the element
 * receives keyboard focus or the mouse hovers over it.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tooltip
 */
export default {
  title: 'Overlays/Tooltip',
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

export const Default = {}
