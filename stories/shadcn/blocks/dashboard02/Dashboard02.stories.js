import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './Dashboard02.vue?raw'
import routes from './routes.js'

/**
 * A products dashboard with a sidebar navigation and a main content area. The dashboard
 * has a header with a search input and a user menu. The sidebar has a logo, navigation
 * links, and a card with a call to action. The main content area shows an empty
 * state with a call to action.
 */
export default {
  title: 'shadcn/Blocks/Dashboard02',
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
