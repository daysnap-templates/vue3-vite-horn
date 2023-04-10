import { registerAdapter } from '@/api'

registerAdapter('mock', async (config) => {
  const { headers, mockUrl } = config as any
  try {
    const { default: data } = await import(`./modules/${mockUrl.replace(/\//g, '_')}.json`)
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
