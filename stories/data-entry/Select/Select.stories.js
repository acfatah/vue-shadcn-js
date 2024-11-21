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
import ExampleComponent from './Example.vue'
import FormExampleComponent from './FormExample.vue'
import FormExampleSource from './FormExample.vue?raw'

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/select.html
 */
export default {
  title: 'Data Entry/Select',
  component: Select,
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

  render: args => ({
    components: { ExampleComponent },

    setup() {
      return { args }
    },

    template: `
      <ExampleComponent v-bind="args" />
    `,
  }),
}

export const FormExample = {
  parameters: {
    docs: {
      source: {
        code: FormExampleSource,
      },
    },
  },

  render: args => ({
    components: { FormExampleComponent, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <FormExampleComponent v-bind="args" />
    `,
  }),
}
