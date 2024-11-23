import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '~/components/ui/alert'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DestructiveAlertStory from './DestructiveAlert.vue'
import DestructiveAlertSource from './DestructiveAlert.vue?raw'

/**
 * Displays a callout for user attention.
 */
export default {
  title: 'Panels/Alert',
  component: DefaultStory,
  subcomponents: {
    Alert,
    AlertDescription,
    AlertTitle,
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

export const Destructive = {
  parameters: {
    docs: {
      source: {
        code: DestructiveAlertSource,
      },
    },
  },

  render: args => ({
    components: { DestructiveAlertStory },

    setup() {
      return { args }
    },

    template: `
      <DestructiveAlertStory v-bind="args" />
    `,
  }),
}
