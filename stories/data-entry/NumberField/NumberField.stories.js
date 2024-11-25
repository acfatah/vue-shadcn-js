import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '~/components/ui/number-field'
import { Toaster } from '~/components/ui/toast'
import CurrencyStory from './CurrencyStory.vue'
import CurrencySource from './CurrencyStory.vue?raw'
import DecimalStory from './DecimalStory.vue'
import DecimalSource from './DecimalStory.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import PercentageStory from './PercentageStory.vue'
import PercentageSource from './PercentageStory.vue?raw'

/**
 * A number field allows a user to enter a number and increment or decrement the
 * value using stepper buttons.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/number-field.html
 */
export default {
  title: 'Data Entry/Number Field',
  component: DefaultStory,
  subcomponents: {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
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

  args: {
    disabled: false,
  },

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <div class="w-32">
        <DefaultStory v-bind="args" />
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

export const Decimal = {
  parameters: {
    docs: {
      source: {
        code: DecimalSource,
      },
    },
  },

  render: args => ({
    components: { DecimalStory },

    setup() {
      return { args }
    },

    template: `
      <div class="w-32">
        <DecimalStory v-bind="args" />
      </div>
    `,
  }),
}

export const Percentage = {
  parameters: {
    docs: {
      source: {
        code: PercentageSource,
      },
    },
  },

  render: args => ({
    components: { PercentageStory },

    setup() {
      return { args }
    },

    template: `
      <div class="w-32">
        <PercentageStory v-bind="args" />
      </div>
    `,
  }),
}

export const Currency = {
  parameters: {
    docs: {
      source: {
        code: CurrencySource,
      },
    },
  },

  render: args => ({
    components: { CurrencyStory },

    setup() {
      return { args }
    },

    template: `
      <div class="w-40">
        <CurrencyStory v-bind="args" />
      </div>
    `,
  }),
}
