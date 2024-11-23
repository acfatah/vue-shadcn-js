import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '~/components/ui/tooltip'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * When more customization is required, we can use the primitive tooltip components.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tooltip
 *
 * See also:
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Overlays/Tooltip/Primitive',
  component: DefaultStory,
  subcomponents: {
    TooltipArrow,
    TooltipContent,
    TooltipProvider,
    TooltipRoot,
    TooltipTrigger,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },
}

export const Default = {
  args: {
    side: 'top',
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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <div class="flex justify-center items-center h-[140px]">
        <DefaultStory v-bind="args" />
      </div>
    `,
  }),
}
