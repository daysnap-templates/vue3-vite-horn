import { isBoolean, isFunction, isObject, isString } from '@daysnap/utils'

export interface UsePagingStatus {
  pagingIndex: number
  pagingSize: number
  pagingTotal: number
  pagingError: string
}

export interface UsePagingTaskResult<T = any> {
  pagingList: T[]
  pagingTotal: number
}

export interface UsePagingTaskOptions {
  loading?: boolean // 是否需要 loading
  toast?: boolean // 是否需要 弱提示
}

export interface UsePagingTask<T = any> {
  (status: UsePagingStatus, options: UsePagingTaskOptions): Promise<UsePagingTaskResult<T>>
}

export interface UsePagingOptions {
  initialStatus?: Partial<UsePagingStatus>
  immediate?: boolean
}

export type UsePagingTriggerOptions = ((...args: any[]) => any) | boolean | UsePagingTaskOptions

export function usePaging<T = any>(task: UsePagingTask<T>, options: UsePagingOptions = {}) {
  const { initialStatus, immediate } = options
  const pagingStatus = reactive<UsePagingStatus>(
    Object.assign(
      {
        pagingIndex: 0,
        pagingSize: 10,
        pagingTotal: -1,
        pagingError: '',
      },
      initialStatus,
    ),
  )
  const pagingData = ref([]) as Ref<T[]>

  // 请求数据
  const pagingTrigger = (pagingIndex: number, options?: UsePagingTriggerOptions) => {
    const opt: UsePagingTaskOptions = { loading: false, toast: false }
    if (isBoolean(options)) {
      opt.loading = options
      opt.toast = options
    } else if (isObject(options)) {
      Object.assign(opt, options)
    }

    // fetch data
    const promise = task({ ...pagingStatus, pagingIndex }, opt).then((res) => {
      const { pagingList, pagingTotal } = res
      pagingStatus.pagingIndex = pagingIndex
      pagingStatus.pagingError = ''
      pagingStatus.pagingTotal = pagingTotal
      pagingData.value = pagingIndex === 1 ? pagingList : [...pagingData.value, ...pagingList]
    })

    // 处理 error
    ;(promise.toast
      ? promise.toast((_, msg) => {
          pagingStatus.pagingError = msg
          return opt.toast
        })
      : promise.catch((err) => {
          pagingStatus.pagingError = isString(err) ? err : JSON.stringify(err)
        })
    ).finally(() => {
      if (isFunction(options)) {
        options(pagingStatus.pagingError)
      }
    })
  }

  // 刷新
  const pagingRefresh = (options?: UsePagingTriggerOptions) => {
    pagingTrigger(1, options)
  }

  // 加载
  const pagingLoad = (options?: UsePagingTriggerOptions) => {
    if (pagingFinished.value) {
      return console.log('没有更多了')
    }
    pagingTrigger(pagingStatus.pagingIndex + 1, options)
  }

  // 是否加载完毕
  const pagingFinished = computed(() => {
    return pagingStatus.pagingTotal !== -1 && pagingData.value.length >= pagingStatus.pagingTotal
  })

  // 初始加载
  if (immediate) {
    pagingRefresh()
  }

  return {
    pagingFinished,
    pagingData,
    pagingTrigger,
    pagingRefresh,
    pagingLoad,
    pagingStatus,
  }
}
