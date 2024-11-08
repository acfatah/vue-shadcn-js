import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import DefaultComponent from './Default.vue'
import Snippet from './Snippet.vue?raw'

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tabs.html
 */
export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  subcomponents: {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
  },
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: Snippet,
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
