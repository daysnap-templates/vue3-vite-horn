import { registerAdapter } from '@/api'
import { isFunction } from '@daysnap/utils'

// 注册 api mock 适配器
registerAdapter('mock', async (config) => {
  const { headers, mockUrl } = config as any
  try {
    // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    const modules = import.meta.glob(`./modules/**/*.{json,ts}`)
    const key = `./modules/${mockUrl.replace(/\//g, '_')}`

    const module = modules[`${key}.ts`] || modules[`${key}.json`]
    let { default: data } = (await module()) as any
    if (isFunction(data)) {
      data = data(config)
    }

    return {
      data,
      status: 200,
      statusText: '请求成功',
      headers,
      config,
      request: {},
    }
  } catch (error: any) {
    error.config = config
    return Promise.reject(error)
  }
})
