import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './Dashboard.vue?raw'
import routes from './routes.js'

/**
 * An orders dashboard with a sidebar navigation. The sidebar has icon navigation.
 * The content area has a breadcrumb and search in the header. The main area has
 * a list of recent orders with a filter and export button. The main area also has
 * a detailed view of a single order with order details, shipping information, billing
 * information, customer information, and payment information.
 */
export default {
  title: 'shadcn/Blocks/Dashboard05',
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
