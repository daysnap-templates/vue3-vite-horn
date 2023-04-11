import { useState } from '@/hooks'
import type { Userinfo } from '@/types'
import { defineStore } from 'pinia'
import { withOut } from './withOut'

export const useUserinfoStore = defineStore(
  '$$USER_INFO',
  () => {
    // const userinfo = ref<Userinfo>({ x: 1 } as any)
    // const setUserinfo = (val: Userinfo) => {
    // userinfo.value = val
    //
    const [userinfo, setUserinfo] = useState<Userinfo>({ token: 1 } as any)
    return { userinfo, setUserinfo }
  },
  {
    persist: true,
  },
)
