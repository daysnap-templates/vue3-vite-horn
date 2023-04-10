import jssdk from '@daysnap/horn-jssdk'

// 是否是开发环境
export const __DEV__ = process.env.NODE_ENV === 'development'

// 是否是app
export const isApp = jssdk.canIUse()
