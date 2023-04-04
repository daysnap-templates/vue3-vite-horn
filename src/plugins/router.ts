import type { Plugin } from 'vue'
import router from '@/router'

export default {
  install(app) {
    app.use(router)
  },
} as Plugin
