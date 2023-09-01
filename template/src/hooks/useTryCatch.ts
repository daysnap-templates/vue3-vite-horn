import { isBoolean, isFunction, isObject, isString } from '@daysnap/utils'

export interface UseTryCatchOptions {
  immediate?: boolean
  initialValue?: any
}

export interface UseTryCatchTaskOptions {
  loading?: boolean // 是否需要 loading
  toast?: boolean // 是否需要 弱提示
}

export interface UseTryCatchTask<T = any> {
  (options: UseTryCatchTaskOptions): Promise<T>
}

export type UseTryCatchTriggerOptions = ((...args: any[]) => any) | boolean | UseTryCatchTaskOptions

export function useTryCatch<T extends UseTryCatchTask>(task: T, options: UseTryCatchOptions = {}) {
  const error = ref('')
  const result = ref(options.initialValue) as Ref<Awaited<ReturnType<T>>>

  const trigger = (options?: UseTryCatchTriggerOptions) => {
    const opt: UseTryCatchTaskOptions = { loading: false, toast: false }
    if (isBoolean(options)) {
      opt.loading = options
      opt.toast = options
    } else if (isObject(options)) {
      Object.assign(opt, options)
    }
    const promise = task(opt).then((res) => {
      result.value = res
    })

    ;(promise.toast
      ? promise.toast((_, msg) => {
          error.value = msg
          return opt.toast
        })
      : promise.catch((err) => {
          error.value = isString(err) ? err : JSON.stringify(err)
        })
    ).finally(() => {
      if (isFunction(options)) {
        options(error.value)
      }
    })
  }

  // 初始加载
  onBeforeMount(() => {
    if (options.immediate) {
      trigger()
    }
  })

  return [error, result, trigger] as const
}
