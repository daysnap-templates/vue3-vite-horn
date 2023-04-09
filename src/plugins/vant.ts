import { setToastDefaultOptions } from 'vant'

if (process.env.NODE_ENV === 'development') {
  // 引入组件样式
  import('vant/lib/index.css')
} else {
  // docs vant https://vant-ui.github.io/vant/#/zh-CN/home
  // Toast & Dialog
  // https://vant-ui.github.io/vant/#/zh-CN/quickstart#4.-yin-ru-han-shu-zu-jian-de-yang-shi
  import('vant/es/toast/style')
  import('vant/es/dialog/style')
  // import 'vant/es/toast/style'
  // import 'vant/es/dialog/style'
}

// 全局设置禁止背景点击
setToastDefaultOptions('loading', { forbidClick: true })
