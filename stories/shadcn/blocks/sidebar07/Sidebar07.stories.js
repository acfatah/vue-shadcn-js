import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import routes from './routes.js'
import DefaultSource from './Sidebar07.vue?raw'

/**
 * A sidebar that collapses to icons.
 */
export default {
  title: 'shadcn/Blocks/Sidebar07',
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
