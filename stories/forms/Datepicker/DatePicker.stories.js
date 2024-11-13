import { Toaster } from '~/components/ui/toast'
import DateRangePickerStory from './DateRangePickerStory.vue'
import DateRangePickerSource from './DateRangePickerStory.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithIndependentMonthsStory from './WithIndependentMonths.vue'
import WithIndependentMonthsSource from './WithIndependentMonths.vue?raw'
import WithPresetStory from './WithPresetStory.vue'
import WithPresetSource from './WithPresetStory.vue?raw'

/**
 * A date field component that allows users to enter and edit date.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/calendar.html
 *
 * See also:
 * - [Forms/Datepicker](?path=/docs/data-display-calendar--docs) component
 * - [Forms/Range Calendar](?path=/docs/data-display-range-calendar--docs) component
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Forms/Datepicker',
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

export const DateRangePicker = {
  parameters: {
    docs: {
      source: {
        code: DateRangePickerSource,
      },
    },
  },

  render: args => ({
    components: { DateRangePickerStory },

    setup() {
      return { args }
    },

    template: `
      <DateRangePickerStory v-bind="args" />
    `,
  }),
}

export const WithIndependentMonths = {
  parameters: {
    docs: {
      source: {
        code: WithIndependentMonthsSource,
      },
    },
  },

  render: args => ({
    components: { WithIndependentMonthsStory },

    setup() {
      return { args }
    },

    template: `
      <WithIndependentMonthsStory v-bind="args" />
    `,
  }),
}

export const WithPreset = {
  parameters: {
    docs: {
      source: {
        code: WithPresetSource,
      },
    },
  },

  render: args => ({
    components: { WithPresetStory },

    setup() {
      return { args }
    },

    template: `
      <WithPresetStory v-bind="args" />
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
