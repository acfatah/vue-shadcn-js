import { vueRouter } from 'storybook-vue3-router'
import FormsComponent from './Forms.vue'
import FormsSource from './Forms.vue?raw'

import routes from './routes.js'

export default {
  title: 'Blocks/Forms',
  component: FormsComponent,
  tags: ['autodocs'],
  layout: 'fullscreen',
  decorators: [vueRouter(routes)],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: FormsSource,
      },
    },
  },
}
