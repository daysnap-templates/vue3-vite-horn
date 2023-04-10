import { formatPathParams } from '@daysnap/utils'
import type { CurlOptions } from './types'
import { instance as axiosInstance } from './axios'

const instance = {
  axios: axiosInstance,
  native: axiosInstance,
}

export function curl<T = any>(
  url: string,
  data: Record<string, any> = {},
  options: CurlOptions = {},
): Promise<T> {
  const { method, adapter = 'axios' } = (options = Object.assign(
    {
      method: 'get',
    },
    options,
  ))

  ;({ path: url, rest: data } = formatPathParams(url, data))

  options.url = url

  options[method === 'get' ? 'params' : 'data'] = data

  // return instance[adapter]
  return null as any
}
