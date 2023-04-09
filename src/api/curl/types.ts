import type { AxiosRequestConfig, CreateAxiosDefaults } from 'axios'

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data: T
}

export type DefaultConfig = CreateAxiosDefaults

export type CurlOptions = AxiosRequestConfig & {
  adapter?: 'axios' | 'native'
}
