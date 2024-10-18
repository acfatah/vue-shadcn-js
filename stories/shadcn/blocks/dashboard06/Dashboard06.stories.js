import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import Dashboard06 from './Dashboard06.vue?raw'
import routes from './routes.js'

/**
 * An products dashboard with a sidebar navigation. The sidebar has icon navigation.
 * The content area has a breadcrumb and search in the header. It displays a list
 * of products in a table with actions.
 */
export default {
  title: 'shadcn/Blocks/Dashboard06',
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
        code: Dashboard06,
      },
    },
  },
}
