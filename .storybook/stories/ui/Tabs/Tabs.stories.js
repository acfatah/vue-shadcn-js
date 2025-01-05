import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import DefaultStory from './DefaultStory.vue'
import Snippet from './Snippet.vue?raw'
import UnderlineTabsStory from './UnderlineTabs.vue'
import UnderlineTabsSource from './UnderlineTabs.vue?raw'

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/tabs.html
 */
export default {
  title: 'Panels/Tabs',
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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const UnderlineTabs = {
  parameters: {
    docs: {
      source: {
        code: UnderlineTabsSource,
      },
    },
  },

  render: args => ({
    components: { UnderlineTabsStory },

    setup() {
      return { args }
    },

    template: `
      <UnderlineTabsStory v-bind="args" />
    `,
  }),
}
