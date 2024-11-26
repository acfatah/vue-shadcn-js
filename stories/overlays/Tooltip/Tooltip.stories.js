import { CircleHelp as CircleHelpIcon } from 'lucide-vue-next'
import Button from '~/components/ui/button/Button.vue'
import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '~/components/ui/tooltip'
import Tooltip from '~/components/ui/tooltip/Tooltip.vue'
import PrimitiveStory from './PrimitiveStory.vue'
import PrimitiveSource from './PrimitiveStory.vue?raw'
import SimplifiedStory from './SimplifiedStory.vue'
import WithSlotStory from './WithSlotStory.vue'
import WithSlotSource from './WithSlotStory.vue?raw'

/**
 * A popup that displays information related to an element when the element receives
 * keyboard focus or the mouse hovers over it.
 *
 *
 * See also:
 * - Primitive API Reference: https://www.radix-vue.com/components/tooltip
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  subcomponents: {
    TooltipArrow,
    TooltipContent,
    TooltipProvider,
    TooltipRoot,
    TooltipTrigger,
  },
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: `
<Tooltip text="Tooltip text">
  <!-- tooltip trigger -->
</Tooltip>
`,
      },
    },
  },

  args: {
    disabled: false,
    text: 'Add to library',
  },

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'top',
        },
      },
    },

    text: {
      control: { type: 'text' },
    },
  },

  render: args => ({
    components: { SimplifiedStory, Button },

    setup() {
      return { args }
    },

    template: `
      <div class="flex h-[140px] flex-col items-center justify-center gap-4">
        <SimplifiedStory v-bind="args" />
        <p>Tooltip: {{ args.disabled ? 'disabled' : 'enabled' }}</p>
      </div>
    `,
  }),
}

/**
 * Omit the `text` prop and use a `v-slot:content` slot to display the tooltip content.
 */
export const WithContentSlot = {
  parameters: {
    docs: {
      source: {
        code: WithSlotSource,
      },
    },
  },

  render: args => ({
    components: { WithSlotStory, Button, CircleHelpIcon },

    setup() {
      return { args }
    },

    template: `
      <div class="flex justify-center items-center h-[140px]">
        <WithSlotStory v-bind="args" />
      </div>
    `,
  }),
}

/**
 * When more customization is required, we can use the primitive tooltip components.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tooltip
 */
export const Primitive = {
  parameters: {
    docs: {
      source: {
        code: PrimitiveSource,
      },
    },
  },

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
    components: { PrimitiveStory },

    setup() {
      return { args }
    },

    template: `
      <div class="flex justify-center items-center h-[140px]">
        <PrimitiveStory v-bind="args" />
      </div>
    `,
  }),
}
