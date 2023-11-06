import { defineRoutes } from '@/router/defineRoutes'

export default defineRoutes([
  {
    path: '/demo/hooks',
    name: 'HooksView',
    component: () => import('@/views/demo/hooks/HooksView.vue'),
    meta: { title: 'Hooks', requiresAuth: 0 },
  },
  {
    path: '/demo/hooks/use-trigger',
    name: 'UseTriggerView',
    component: () => import('@/views/demo/hooks/UseTriggerView.vue'),
    meta: { title: 'UseTrigger', requiresAuth: 0 },
  },
  {
    path: '/demo/hooks/use-keep-alive',
    name: 'UseKeepAliveView',
    component: () => import('@/views/demo/UseKeepAliveView.vue'),
    meta: { title: 'Hooks', requiresAuth: 0 },
  },
])
