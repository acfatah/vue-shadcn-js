import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

import NotificationExampleComponent from './NotificationExample.vue'
import NotificationExampleSource from './NotificationExample.vue?raw'

/**
 * Displays a card with header, content, and footer.
 */
export default {
  title: 'Panels/Card',
  component: Card,
  subcomponents: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
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
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: `
      <DefaultComponent v-bind="args" />
    `,
  }),
}

export const NotificationExample = {
  parameters: {
    docs: {
      source: {
        code: NotificationExampleSource,
      },
    },
  },

  render: args => ({
    components: { NotificationExampleComponent },

    setup() {
      return { args }
    },

    template: `
      <NotificationExampleComponent v-bind="args" />
    `,
  }),
}
