import Dashboard from './Dashboard.vue'
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
