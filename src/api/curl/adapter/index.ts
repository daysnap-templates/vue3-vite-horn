import { __DEV__, isApp } from '@/utils'
import { mockAdapter } from './mock'
import { nativeAdapter } from './native'
import type { AdapterName } from '../types'

// adapter 默认 'native'
// 不是 app 环境 直接走 xhr axios 默认
// 如果是 production adapter 不能 mock
// 如果是 development apapter 走配置
export function getAdapter(adapter: AdapterName = 'native') {
  if (!__DEV__) {
    if (adapter === 'mock') {
      adapter = 'native'
    }
  }
  if (!isApp) {
    if (adapter === 'native') {
      adapter = 'xhr'
    }
  }

  if (adapter === 'native') {
    return nativeAdapter
  }
  if (adapter === 'mock') {
    return mockAdapter
  }

  return
}
