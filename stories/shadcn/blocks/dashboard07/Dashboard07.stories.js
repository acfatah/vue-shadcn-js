import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import Dashboard07 from './Dashboard07.vue?raw'
import routes from './routes.js'

/**
 * A product edit page. The product edit page has a form to edit the product details,
 * stock, product category, product status, and product images. The product edit
 * page has a sidebar navigation and a main content area. The main content area has
 * a form to edit the product details, stock, product category, product status, and
 * product images. The sidebar navigation has links to product details, stock, product
 * category, product status, and product images.
 */
export default {
  title: 'shadcn/Blocks/Dashboard07',
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
        code: Dashboard07,
      },
    },
  },
}
