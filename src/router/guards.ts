import type { Router } from 'vue-router'

export function setupGuards(router: Router) {
  //

  // 设置标题
  router.afterEach((to) => {
    window.document.title = to.meta?.title ?? ''
  })
}
