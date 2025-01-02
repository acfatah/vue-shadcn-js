import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '~/components/ui/command'
import DefaultStory from './Default.vue'
import DefaultSource from './Default.vue?raw'
import CommandDialogStory from './Dialog.vue'
import CommandDialogSource from './Dialog.vue?raw'

/**
 * Fast, composable, unstyled command menu.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/combobox.html#command-menu
 */
export default {
  title: 'Overlays/Command',
  component: DefaultStory,
  subcomponents: {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
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

export const Dialog = {
  parameters: {
    docs: {
      source: {
        code: CommandDialogSource,
      },
    },
  },

  render: args => ({
    components: { CommandDialogStory },

    setup() {
      return { args }
    },

    template: `
      <CommandDialogStory v-bind="args" />
    `,
  }),
}
