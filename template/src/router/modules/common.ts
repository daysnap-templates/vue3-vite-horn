import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/home/HomeView.vue'),
    meta: { title: '首页', requiresAuth: 1 },
  },

  // 404
  // https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html
  { path: '/:pathMatch(.*)*', name: '404', redirect: '/' },
] as RouteRecordRaw[]
