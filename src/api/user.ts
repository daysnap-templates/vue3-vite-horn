import { curl } from './curl'

// 登录
export const doUserLogin = (data: { username: string; password: string }) => {
  return curl('api/user/section', data, { method: 'post' })
}

// 获取用户信息
export const reqUserInfo = () => {
  return curl('api/user/info')
}
