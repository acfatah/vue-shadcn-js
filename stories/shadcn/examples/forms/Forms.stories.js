import { vueRouter } from 'storybook-vue3-router'
import FormsComponent from './Forms.vue'
import FormsSource from './Forms.vue?raw'

import routes from './routes.js'

export default {
  title: 'shadcn/Examples/Forms',
  component: FormsComponent,
  tags: ['autodocs'],
  decorators: [vueRouter(routes)],
}

export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: FormsSource,
      },
    },
  },
}
