import Dashboard02 from './Dashboard02.vue'
import SidebarLayout from './layouts/SidebarLayout.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard02,
    meta: {
      layout: SidebarLayout,
    },
  },
]
