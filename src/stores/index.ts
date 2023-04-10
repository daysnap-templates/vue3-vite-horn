import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const pinia = createPinia()

// 持久化
pinia.use(piniaPluginPersistedstate)
