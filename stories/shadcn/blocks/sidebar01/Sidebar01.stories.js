import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import routes from './routes.js'
import DefaultSource from './Sidebar01.vue?raw'

/**
 * A simple sidebar with navigation grouped by section.
 */
export default {
  title: 'shadcn/Blocks/Sidebar01',
  component: App,
  tags: ['autodocs'],
  decorators: [vueRouter(routes)],
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },
}
