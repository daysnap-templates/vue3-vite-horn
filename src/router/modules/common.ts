import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  // 404
  { path: '/:catchAll(.*)*', name: '404', redirect: '/' },
] as Array<RouteRecordRaw>
