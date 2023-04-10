import { __DEV__, isApp } from '@/utils'
import type { AxiosAdapter } from 'axios'

// 适配器集合
export const adapters: Record<string, AxiosAdapter> = {}

// 注册适配器
export function registerAdapter(name: string, adapter: AxiosAdapter) {
  adapters[name] = adapter
}

// 获取适配器
// 这里需要根据环境进行判断
export function getAdapter(adapter: string) {
  if (__DEV__) {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const urlAdapter = urlSearchParams.get('adapter')
    if (urlAdapter) {
      adapter = urlAdapter
    }
  }
  if (!__DEV__) {
    // 生产环境 尽量走 原生
    if (!['xhr', 'native'].includes(adapter)) {
      // adapter = 'native'
    }
  }
  if (!isApp) {
    if (adapter === 'native') {
      adapter = 'xhr'
    }
  }

  return adapters[adapter]
}
