export interface UsePagingStatus {
  current: number
  size: number
  total: number
  loading: boolean
  error: string
}

export interface UsePagingTaskResult<T = any> {
  list: T[]
  total: number
}

export interface UsePagingTask<T = any> {
  (status: UsePagingStatus, loading?: boolean): Promise<UsePagingTaskResult<T>>
}

export interface UsePagingOptions {
  initialStatus?: Partial<UsePagingStatus>
  immediate?: boolean
}

export function usePaging<T = any>(task: UsePagingTask<T>, options: UsePagingOptions = {}) {
  const { initialStatus } = options
  const status = reactive<UsePagingStatus>(
    Object.assign(
      {
        current: 0,
        size: 10,
        total: -1,
        loading: false,
        error: '',
      },
      initialStatus,
    ),
  )
  const data = ref<T[]>([])

  const trigger = () => {
    //
  }

  return [data, trigger, status] as const
}
