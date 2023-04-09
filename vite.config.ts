import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import postCssPxToRem from 'postcss-pxtorem'
import { kebabCase } from '@daysnap/utils'

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

    // 问题太多，就不使用了
    // https://vue-macros.sxzz.moe/zh-CN/macros/define-options.html
    // DefineOptions({
    // include: [/\.vue$/, /\.vue\?vue/, /[/\\]node_modules[/\\][@\\]daysnap[/\\]/],
    // exclude: [],
    // }),

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
        (name) => {
          // 处理 @daysnap/horn-ui
          if (name.startsWith('Hor')) {
            return {
              name,
              from: '@daysnap/horn-ui',
              sideEffects: `@daysnap/horn-ui/src/${kebabCase(name)}/style/index`,
            }
          }

          // https://vant-ui.github.io/vant/#/zh-CN/quickstart
          // VantResolver(),
          // 因为 vite dev 下会重复引入 样式，所以 dev 环境下，vant 样式全局导入
          // 所以这里就不直接使用 VantResolver 了
          // https://github.com/vitejs/vite/issues/4448
          if (name.startsWith('Van')) {
            const partialName = name.slice(3)
            return {
              name: partialName,
              from: `vant/es`,
              sideEffects:
                process.env.NODE_ENV === 'development'
                  ? undefined
                  : `vant/es/${kebabCase(partialName)}/style/index`,
            }
          }
        },
      ],
      // include: [/\.vue$/, /\.vue\?vue/, /[/\\]node_modules[/\\][@\\]daysnap[/\\]/],
      exclude: [],
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
