import axios from 'axios'
import { DEFAULT_CONFIG } from './config'
import type { ApiResponse } from './types'

export const instance = axios.create(DEFAULT_CONFIG)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { data: respData } = response

    const { success, data } = respData as ApiResponse
    if (!success) {
      return Promise.reject(respData)
    }

    return data
  },
  (error) => {
    // TODO
    return Promise.reject(error)
  },
)
