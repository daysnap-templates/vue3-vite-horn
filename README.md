# vue3-vite-horn

基于 vue3 + vite + horn 原生容器，可以开发混合APP

## 使用

1. 全局安装 `@daysnap/cli` 脚手架

```bash
npm install @daysnap/cli
```

2. 在你的项目目录下执行

```bash 
dsc create my-project -t vue3-vite-horn
```

3. 更多命令可以执行 `dsc -h` 查看

```bash
dsc -h
```

## 搭建

```
# 初始化项目
npm create vue@latest

# 安装依赖
npm install

# 格式化
npm run format

# 开发
npm run dev

# 安装依赖包

npm install @daysnap/types -D
npm install @daysnap/define-sass -D

npm install unplugin-auto-import unplugin-vue-components -D

npm install cross-env -D

npm install sass
npm install postcss-pxtorem @types/postcss-pxtorem -D



npm install @daysnap/banana -S
npm install @daysnap/horn-ui -S
npm install @daysnap/horn-use -S
npm install @daysnap/utils -S

npm install vant -S

npm install pinia-plugin-persistedstate -S

npm install axios -S
npm install amfe-flexible -S

```



## 问题

- https://github.com/vuejs/router/issues/626