import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/select.html
 */
export default {
  title: 'Data Entry/Select',
  component: DefaultStory,
  subcomponents: {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  },
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: `
<Select>
  <SelectTrigger class="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">
        Apple
      </SelectItem>
      <SelectItem value="banana">
        Banana
      </SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
`,
      },
    },
  },

  args: {
    disabled: false,
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
