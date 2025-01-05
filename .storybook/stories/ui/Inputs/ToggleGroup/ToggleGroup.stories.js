import { Toaster } from '~/components/ui/toast'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

/**
 * A set of two-state buttons that can be toggled on or off.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/toggle-group.html
 */
export default {
  title: 'Data Entry/Toggle Group',
  component: ToggleGroup,
  subcomponents: {
    ToggleGroupItem,
  },
  tags: ['autodocs'],

  args: {
    defaultValue: 'italic',
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      description: 'The button variant',
    },

    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
      description: 'The button orientation',
    },
  },
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
      const value = ref(args.defaultValue)

      return { args, value }
    },

    template: `
      <DefaultStory
        v-bind="args"
        @update:model-value="value = $event"
      />
      <div class="mt-4">
        value: {{ value }}
      </div>
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

export const Single = {
  ...Default,
  args: {
    type: 'single',
  },
}

export const Vertical = {
  ...Default,
  args: {
    type: 'single',
    orientation: 'vertical',
  },
}
