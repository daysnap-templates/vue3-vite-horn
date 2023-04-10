import type { Plugin } from 'vue'
import { pinia } from '@/stores'

// pinia docs https://pinia.vuejs.org/zh/
export default {
  install(app) {
    app.use(pinia)
  },
} as Plugin
