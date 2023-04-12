import type { AxiosRequestConfig } from 'axios'

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data: T
}

export type CurlOptions = Omit<AxiosRequestConfig, 'adapter'> & {
  adapterName?: string
  adapter?: string
  mockUrl?: string
}

// 扩展类型
declare module 'axios' {
  interface InternalAxiosRequestConfig {
    adapterName?: string
    adapter?: string
    mockUrl?: string
  }
}
