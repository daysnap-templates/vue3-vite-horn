import type { RouteRecordRaw } from 'vue-router'

// 模板范例
export default [
  {
    path: '/todo',
    name: 'todo',
    meta: {
      title: 'TODO 范例',
      requiresAuth: 1, // 需要登录
    },
  },
] as RouteRecordRaw[]
