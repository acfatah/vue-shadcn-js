import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DropdownMenuStory from './DropdownMenuStory.vue'
import DropdownMenuSource from './DropdownMenuStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import PopoverStory from './PopoverStory.vue'
import PopoverSource from './PopoverStory.vue?raw'
import ResponsiveStory from './ResponsiveStory.vue'
import ResponsiveSource from './ResponsiveStory.vue?raw'

/**
 * Autocomplete input and command palette with a list of suggestions.
 *
 * The Combobox is built using a composition of the `Popover` and the `Command` components.
 */
export default {
  title: 'Forms/Combobox',
  component: DefaultStory,
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

export const Popover = {
  parameters: {
    docs: {
      source: {
        code: PopoverSource,
      },
    },
  },

  render: args => ({
    components: { PopoverStory },

    setup() {
      return { args }
    },

    template: `
      <PopoverStory v-bind="args" />
    `,
  }),
}

export const DropdownMenu = {
  parameters: {
    docs: {
      source: {
        code: DropdownMenuSource,
      },
    },
  },

  render: args => ({
    components: { DropdownMenuStory },

    setup() {
      return { args }
    },

    template: `
      <DropdownMenuStory v-bind="args" />
    `,
  }),
}

export const Responsive = {
  parameters: {
    docs: {
      source: {
        code: ResponsiveSource,
      },
    },
  },

  render: args => ({
    components: { ResponsiveStory },

    setup() {
      return { args }
    },

    template: `
      <ResponsiveStory v-bind="args" />
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
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),

}
