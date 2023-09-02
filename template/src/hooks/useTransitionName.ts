import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export interface UseTransitionNameOptions {
  enterClass: string
  leaveClass: string
  deep?: boolean
}

interface UseTransitionNameState {
  position: number
  fullPath: string
}

const KEY = '$$useTransitionName__state'
const get = () => {
  let res: UseTransitionNameState | undefined
  try {
    res = JSON.parse(window.sessionStorage.getItem(KEY) as string)
  } catch {
    //
  }
  return res
}
const set = (state: UseTransitionNameState) => {
  window.sessionStorage.setItem(KEY, JSON.stringify(state))
}

export function useTransitionName(options: UseTransitionNameOptions) {
  const { enterClass, leaveClass, deep } = options
  const name = ref('')
  const route = useRoute()

  watch(
    () => ({ ...route }),
    (to, from) => {
      const { position } = history.state || {}
      const prevState = get()

      if (prevState && prevState.fullPath !== to.fullPath) {
        if (position >= prevState.position) {
          name.value = to.query.transition === 'disabled' ? '' : enterClass
        } else {
          name.value = from.query.transition === 'disabled' ? '' : leaveClass
        }
      } else {
        name.value = ''
      }

      set({ fullPath: to.fullPath, position })
    },
    {
      deep,
    },
  )

  return name
}
