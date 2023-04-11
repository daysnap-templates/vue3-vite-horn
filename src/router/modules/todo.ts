import type { RouteRecordRaw } from 'vue-router'

// 模板范例
export default [
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/views/todo/index.vue'),
    meta: {
      title: 'TODO 列表',
      requiresAuth: 1, // 需要登录
    },
  },
  {
    path: '/todo/details',
    name: 'todoDetails',
    component: () => import('@/views/todo/details.vue'),
    meta: {
      title: 'TDDO 详情',
      requiresAuth: 1,
    },
  },
  {
    path: '/todo/form',
    name: 'todoForm',
    component: () => import('@/views/todo/form.vue'),
    meta: {
      title: 'TODO',
      requiresAuth: 1,
    },
  },
] as RouteRecordRaw[]
