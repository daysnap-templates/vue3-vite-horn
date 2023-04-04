import { setToastDefaultOptions } from 'vant'

// https://vant-ui.github.io/vant/#/zh-CN/quickstart#4.-yin-ru-han-shu-zu-jian-de-yang-shi
// Toast & Dialog
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

// 全局设置禁止背景点击
setToastDefaultOptions('loading', { forbidClick: true })
