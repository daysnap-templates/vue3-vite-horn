import type { Plugin } from 'vue'
import { createPinia } from 'pinia'

export default {
  install(app) {
    app.use(createPinia())
  },
} as Plugin
