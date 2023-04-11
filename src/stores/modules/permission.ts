import { defineStore } from 'pinia'
import { useState } from '@/hooks'
import { __DEV__ } from '@/utils'
import { withToRefs } from '../withToRefs'

// 用于判断权限相关问题
// 指令使用起来会有不完美的情况，权限指令加在自定义组件上，
// 虽然组件不会在页面上显示，但是组件的实例还是初始化执行了
// 这样会造成组件内部逻辑代码的执行，可能会调取接口之类的
export const usePermissionStore = withToRefs(
  defineStore(
    '$$PERMISSION_INFO',
    () => {
      const [permissions, setPermissions] = useState<Record<string, any>>()
      const has = (key: string) => {
        // 开发环境下，默认权限全部打开，方便调试代码
        if (__DEV__) {
          return true
        }
        return !!permissions.value?.[key]
      }
      return { permissions, setPermissions, has }
    },
    {
      persist: true,
    },
  ),
)
