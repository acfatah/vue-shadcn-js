import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithCheckboxesStory from './WithCheckboxes.vue'
import WithCheckboxesSource from './WithCheckboxes.vue?raw'
import WithRadioGroupStory from './WithRadioGroup.vue'

import WithRadioGroupSource from './WithRadioGroup.vue?raw'

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/dropdown-menu.html
 */
export default {
  title: 'Overlays/Dropdown Menu',
  component: DefaultStory,
  subcomponents: {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
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

export const WithCheckboxes = {
  parameters: {
    docs: {
      source: {
        code: WithCheckboxesSource,
      },
    },
  },

  render: args => ({
    components: { WithCheckboxesStory },

    setup() {
      return { args }
    },

    template: `
      <WithCheckboxesStory v-bind="args" />
    `,
  }
  ),
}

export const WithRadioGroup = {
  parameters: {
    docs: {
      source: {
        code: WithRadioGroupSource,
      },
    },
  },

  render: args => ({
    components: { WithRadioGroupStory },

    setup() {
      return { args }
    },

    template: `
      <WithRadioGroupStory v-bind="args" />
    `,
  }
  ),
}
