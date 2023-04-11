import { useState } from '@/hooks'
import type { Userinfo } from '@/types'
import { defineStore } from 'pinia'
import { withOut } from './withOut'
import { withToRefs } from './withToRefs'

export const useUserinfoStore = withToRefs(
  withOut(
    defineStore(
      '$$USER_INFO',
      () => {
        const [userinfo, setUserinfo] = useState<Userinfo>()
        return { userinfo, setUserinfo }
      },
      {
        persist: true,
      },
    ),
  ),
)
