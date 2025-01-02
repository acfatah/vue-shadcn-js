import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A vertically stacked set of interactive headings that each reveal a section of content.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/accordion.html
 */
export default {
  title: 'Panels/Accordion',
  component: DefaultStory,
  subcomponents: {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  },
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

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      description: 'The size variant',
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
