import type { DefaultConfig } from './types'

export const baseURL = 'http://www.baidu.com'

export const DEFAULT_CONFIG: DefaultConfig = {
  baseURL,
  timeout: 60 * 1000,
  responseType: 'json',
  headers: {},
}
