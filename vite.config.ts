import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueJsx(),

    // https://vue-macros.sxzz.moe/zh-CN/macros/define-options.html
    DefineOptions({
      // include: [/\.vue$/, /\.vue\?vue/, /[/\\]node_modules[/\\][@\\]daysnap[/\\]/],
      // exclude: [],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'typings/auto-imports.d.ts',
      resolvers: [VantResolver()],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'typings/components.d.ts',
      extensions: ['ts', 'jsx', 'tsx', 'js', 'vue'],
      resolvers: [
        // https://vant-ui.github.io/vant/#/zh-CN/quickstart
        VantResolver(),

        // (componentName) => {
        //   if (componentName.startsWith('Hor')) {
        //     return { name: componentName, from: '@daysnap/horn-ui' }
        //   }
        // },
      ],
      // include: [/\.vue$/, /\.vue\?vue/, /[/\\]node_modules[/\\][@\\]daysnap[/\\]/],
      // exclude: [],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: {
      plugins: [
        // https://www.npmjs.com/package/postcss-pxtorem
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
  },
})
