import { type Ref } from 'vue'

export interface UseTriggerTask<T = any> {
  (): Promise<T>
}

export interface UseTriggerOptions {
  immediate?: boolean
  initialValue?: any
  isThrow?: boolean
}

export function useTrigger<T extends UseTriggerTask>(task: T, options: UseTriggerOptions) {
  const { immediate, initialValue, isThrow } = options

  const error = ref<any>()
  const loading = ref(false)
  const data = ref(initialValue) as Ref<Awaited<ReturnType<T>>>

  const trigger = async () => {
    try {
      error.value = ''
      loading.value = true
      await task()
    } catch (err) {
      error.value = err
      if (isThrow) {
        throw err
      }
    } finally {
      loading.value = false
    }
  }

  onBeforeMount(async () => {
    if (immediate) {
      await trigger()
    }
  })

  return {
    error,
    data,
    trigger,
  }
}
