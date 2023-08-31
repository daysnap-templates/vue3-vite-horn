import { useUserinfoStore } from '@/stores'
import { openIdStorage } from '@/utils'
import type { Router } from 'vue-router'

export function setupGuards(router: Router) {
  // 鉴定权限
  router.beforeEach((to) => {
    const { userinfo } = useUserinfoStore()
    const isLogin = !!userinfo?.access_token

    // 重置参数
    if (to.query.openId) {
      openIdStorage.setItem(to.query.openId.toString())
      return { path: to.path, replace: true }
    }

    // 是否需要授权，1 需要授权、-1 不需要登录、0 登录、不登录都可以 、2 需要用户openid
    const requiresAuth = to.meta.requiresAuth ?? 0
    // 没有授权进 可以认定不是扫码 或者 公众号进入的
    if (requiresAuth === 2 && !openIdStorage.getItem()) {
      return { path: '/unauthorized', replace: true }
    }
    // 已登录进入到不需要登录的页面，直接跳转回首页
    if (isLogin && requiresAuth === -1) {
      return { path: '/', replace: true }
    }
    // 未登录进入到需要登录的页面，直接跳转取登录
    if (!isLogin && requiresAuth === 1) {
      return { path: '/login', replace: true }
    }
  })

  // 设置标题
  router.afterEach((to) => {
    window.document.title = to.meta.title ?? ''
  })
}
