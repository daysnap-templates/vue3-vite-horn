import { __DEV__ } from '@/utils'
import { insertScript } from '@daysnap/utils'

// 用于移动端 debug
// 先暂时关闭
if (!__DEV__) {
  insertScript('//cdn.bootcss.com/eruda/1.5.2/eruda.min.js').then(() => {
    eruda.init()
  })
}
