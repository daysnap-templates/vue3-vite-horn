import type { AxiosRequestConfig } from 'axios'

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data: T
}

export type CurlOptions = Omit<AxiosRequestConfig, 'adapter'> & {
  adapter?: AdapterName
}

export type AdapterName = 'native' | 'mock' | 'xhr'
