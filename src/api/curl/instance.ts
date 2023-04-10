import axios from 'axios'
import { DEFAULT_CONFIG } from './config'
import type { ApiResponse } from './types'
import { log } from './log'

export const instance = axios.create(DEFAULT_CONFIG)

// 请求拦截器 设置公共参数
instance.interceptors.request.use(
  async (config) => {
    const { data, params } = config

    // 设置 token
    // todo
    log(config, `请求参数 =>`, data || params)

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { data: respData, config } = response
    log(config, '请求返回 => ', respData)

    const { success, data } = respData as ApiResponse
    if (!success) {
      return Promise.reject(respData)
    }

    return data
  },
  (error) => {
    log(error.config, '请求错误 => ', error)

    return Promise.reject(error)
  },
)
