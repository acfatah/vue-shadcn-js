import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
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
