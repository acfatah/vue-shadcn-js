import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import LeftSidebarSource from './layouts/LeftSidebar.vue?raw'
import routes from './routes.js'

/**
 * Application sidebar example.
 */
export default {
  title: 'Blocks/Sidebar',
  component: App,
  decorators: [vueRouter(routes)],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: LeftSidebarSource,
      },
    },
  },
}
