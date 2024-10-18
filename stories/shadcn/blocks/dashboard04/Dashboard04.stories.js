import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './Dashboard04.vue?raw'
import routes from './routes.js'

/**
 * A settings page. The settings page has a sidebar navigation and a main content
 * area. The main content area has a form to update the store name and a form to
 * update the plugins directory. The sidebar navigation has links to general, security,
 * integrations, support, organizations, and advanced settings.
 */
export default {
  title: 'shadcn/Blocks/Dashboard04',
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
