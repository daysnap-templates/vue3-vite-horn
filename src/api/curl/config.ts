import type { CreateAxiosDefaults } from 'axios'

export const baseURL = 'http://www.baidu.com/'

export const DEFAULT_CONFIG: CreateAxiosDefaults = {
  baseURL,
  timeout: 60 * 1000,
  responseType: 'json',
  headers: {},
}
