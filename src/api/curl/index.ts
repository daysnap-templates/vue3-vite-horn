import { formatPathParams } from '@daysnap/utils'
import type { CurlOptions } from './types'
import { instance } from './instance'
import { getAdapter, formatAdapter } from './adapter'

export * from './adapter'

export function curl<T = any>(
  url: string,
  data: Record<string, any> = {},
  options: CurlOptions = {},
): Promise<T> {
  const { method, adapter } = (options = Object.assign(
    {
      method: 'get',
      adapter: 'native',
    },
    options,
  ))

  // 用于mock
  if (!options.mockUrl) {
    options.mockUrl = url
  }

  ;({ path: url, rest: data } = formatPathParams(url, data))
  options.url = url
  options[method === 'get' ? 'params' : 'data'] = data

  const adapterName = formatAdapter(adapter)
  options.adapterName = adapterName

  return instance({
    ...options,
    adapter: getAdapter(adapterName),
  })
}
