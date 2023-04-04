import { insertScript } from '@daysnap/utils'

// 用于移动端 debug
if (process.env.NODE_ENV === 'development') {
  insertScript('//cdn.bootcss.com/eruda/1.5.2/eruda.min.js').then(() => {
    eruda.init()
  })
}
