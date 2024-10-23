import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import ExampleComponent from './Example.vue'
import ExampleSource from './ExampleSource.vue?raw'

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
        code: ExampleSource,
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
