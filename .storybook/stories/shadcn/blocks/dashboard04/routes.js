import Dashboard04 from './Dashboard04.vue'
import FixedHeaderLayout from './layouts/FixedHeaderLayout.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard04,
    meta: {
      layout: FixedHeaderLayout,
    },
  },
]
