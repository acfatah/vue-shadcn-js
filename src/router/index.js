import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '~/components/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('~/views/HomeView/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: DefaultLayout },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('~/views/AboutView.vue'),
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('~/views/BlankView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('~/views/NotFoundView.vue'),
    },
  ],
})

export default router
