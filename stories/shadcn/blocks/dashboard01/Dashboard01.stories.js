import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './Dashboard01.vue?raw'
import routes from './routes.js'

/**
 * An application shell with a header and main content area. The header has a navbar,
 * a search input and and a user nav dropdown. The user nav is toggled by a button
 * with an avatar image. The main content area is divided into two rows. The first
 * row has a grid of cards with statistics. The second row has a grid of cards with
 * a table of recent transactions and a list of recent sales.
 */
export default {
  title: 'shadcn/Blocks/Dashboard01',
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
