import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    // https://vue-macros.sxzz.moe/zh-CN/macros/define-options.html
    DefineOptions(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'typings/components.d.ts',
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
  },
})
