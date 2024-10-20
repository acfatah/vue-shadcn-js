import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import routes from './routes.js'
import DefaultSource from './Tasks.vue?raw'

export default {
  title: 'shadcn/Examples/Tasks',
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
