import DefaultLayout from '~/layouts/DefaultLayout.vue'
import Dashboard from './Sidebar01.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: DefaultLayout,
    },
  },
]
