import type { Dispatch, Userinfo } from '@/types'
import { isFunction } from '@daysnap/utils'
import { defineStore } from 'pinia'

export const useUserinfoStore = defineStore(
  '$$USER_INFO',
  () => {
    const userinfo = ref<Userinfo>()

    // const setUserinfo: Dispatch<Userinfo | undefined> = (value) => {
    //   userinfo.value = isFunction(value) ? value(userinfo?.value) : value
    // }

    return { userinfo }
  },
  {
    persist: true,
  },
)
