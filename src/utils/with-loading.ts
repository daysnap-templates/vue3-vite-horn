import { isBoolean } from '@daysnap/utils'
import { showLoadingToast, type ToastOptions } from 'vant'

export function withLoading<T extends (...args: any[]) => Promise<any>>(fn: T) {
  return async (params: Parameters<T>, options: boolean | string | ToastOptions = true) => {
    if (isBoolean(options) && options) {
      options = { duration: 0 }
    }
    const toast = options ? showLoadingToast(options) : null
    try {
      const result = await fn(params)
      toast?.close()
      return result
    } catch (error) {
      toast?.close()
      return Promise.reject(error)
    }
  }
}
