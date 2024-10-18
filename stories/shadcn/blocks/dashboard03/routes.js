import Dashboard03 from './Dashboard03.vue'
import SidebarLayout from './layouts/SidebarLayout.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard03,
    meta: {
      layout: SidebarLayout,
    },
  },
]
