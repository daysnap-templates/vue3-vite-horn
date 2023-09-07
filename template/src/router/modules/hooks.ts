import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/hooks',
    name: 'HooksView',
    component: () => import('@/views/hooks/HooksView.vue'),
    meta: { title: 'Hooks', requiresAuth: 0 },
  },
  {
    path: '/hooks/use-trigger',
    name: 'UseTriggerView',
    component: () => import('@/views/hooks/UseTriggerView.vue'),
    meta: { title: 'UseTrigger', requiresAuth: 0 },
  },
] as RouteRecordRaw[]
