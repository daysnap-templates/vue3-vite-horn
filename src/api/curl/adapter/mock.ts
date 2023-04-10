import type { AxiosAdapter } from 'axios'

// mock adapter
const mockAdapter: AxiosAdapter = async (config) => {
  return null as any
}

export default mockAdapter
