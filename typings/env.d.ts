/// <reference types="vite/client" />

// fix postcss-pxtorem not types
declare module 'postcss-pxtorem' {
  const postCssPxToRem: any
  export default postCssPxToRem
}

// fix eruda
declare const eruda: any
