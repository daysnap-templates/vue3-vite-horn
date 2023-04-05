/// <reference types="vite/client" />
import 'vue-router'

// meta
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

// fix postcss-pxtorem not types
declare module 'postcss-pxtorem' {
  const postCssPxToRem: any
  export default postCssPxToRem
}

// fix eruda
declare const eruda: any
