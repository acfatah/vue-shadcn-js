import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './Dashboard03.vue?raw'
import routes from './routes.js'

/**
 * An AI playground with a sidebar navigation and a main content area. The playground
 * has a header with a settings drawer and a share button. The sidebar has navigation
 * links and a user menu. The main content area shows a form to configure the model
 * and messages.
 */
export default {
  title: 'shadcn/Blocks/Dashboard03',
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
