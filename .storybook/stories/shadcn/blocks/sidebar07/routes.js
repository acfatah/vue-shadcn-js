import DefaultLayout from '~/components/layouts/DefaultLayout.vue'
import Dashboard from './Sidebar07.vue'

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
