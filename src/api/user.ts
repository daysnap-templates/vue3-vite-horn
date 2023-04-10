import { withLoading } from '@/utils'
import { curl } from './curl'
import type { Userinfo } from '@/types'

// 登录
export const doUserLogin = withLoading((data: { username: string; password: string }) => {
  return curl<Userinfo>('api/user/section', data, { method: 'post' })
}, false)

// 获取用户信息
export const reqUserInfo = () => {
  return curl('api/user/info')
}
