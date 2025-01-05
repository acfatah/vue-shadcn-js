import SidebarLayout from './layouts/SidebarLayout.vue'
import MainView from './views/MainView.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: MainView,
    meta: {
      layout: SidebarLayout,
    },
  },
]
