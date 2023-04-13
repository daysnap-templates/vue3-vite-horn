import { registerAdapter } from '@/api'
import { isFunction } from '@daysnap/utils'

// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
const modules = import.meta.glob(`./modules/**/*.{json,ts}`)

// 注册 api mock 适配器
registerAdapter('mock', async (config) => {
  const { headers, mockUrl = '', method } = config
  try {
    const key = `./modules/${mockUrl.replace(/\//g, '_')}`

    const module = [`${key}_${method}.ts`, `${key}_${method}.json`, `${key}.ts`, `${key}.json`]
      .map((key) => modules[key])
      .find((item) => !!item)

    if (!module) {
      throw new Error(`${mockUrl} not found：${key}`)
    }

    let { default: data } = (await module()) as any
    if (isFunction(data)) {
      data = await data(config)
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
