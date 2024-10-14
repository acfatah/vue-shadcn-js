import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './Dashboard.vue?raw'
import routes from './routes.js'

export default {
  title: 'shadcn/Blocks/Dashboard With Sidebar',
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
