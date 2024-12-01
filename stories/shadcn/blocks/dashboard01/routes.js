import DefaultLayout from '~/components/layouts/DefaultLayout.vue'
import Dashboard01 from './Dashboard01.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard01,
    meta: {
      layout: DefaultLayout,
    },
  },
]
