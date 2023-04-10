import jssdk from '@daysnap/horn-jssdk'
import type { AxiosAdapter } from 'axios'

// native adapter
export const nativeAdapter: AxiosAdapter = async (config) => {
  // eslint-disable-next-line prefer-const
  let { method = 'GET', baseURL = '', url = '', params, data, headers } = config

  if (!url.startsWith('http')) {
    url = `${baseURL}${url}`
  }

  const reslut = await jssdk.request({
    method: method as any,
    url,
    data: data || params,
  })

  return {
    data: reslut,
    status: 200,
    statusText: '请求成功',
    headers,
    config,
    request: {},
  }
}
