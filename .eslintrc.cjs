/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  globals: {
    eruda: true,
    defineOptions: 'readonly',
  },
  rules: {
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',

    // https://github.com/antfu/unplugin-auto-import/issues/92
    'no-undef': 'off',
  },
}
