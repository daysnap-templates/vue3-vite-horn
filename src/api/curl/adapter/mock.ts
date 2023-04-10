import type { AxiosAdapter } from 'axios'

// mock adapter
export const mockAdapter: AxiosAdapter = async (config) => {
  const { url } = config
  return null as any
}
