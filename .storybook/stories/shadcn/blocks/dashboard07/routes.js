import Dashboard from './Dashboard07.vue'
import SidebarLayout from './layouts/SidebarLayout.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: SidebarLayout,
    },
  },
]
