# 我的前端配置

## 安装

在当前仓库根目录下运行，创建全局软链

```shell
npm i -g yalc
yalc publish --push
```

在目标项目根目录下运行，通过全局软链获取到自定义配置

```shell
yalc add @jianhe/config
```

## VS Code

把 `.vscode` 文件夹复制到项目根目录下即可

## EditorConfig

把 `.editorconfig` 文件复制到项目根目录下即可

## Prettier

安装依赖

```shell
npm install -D prettier
```

添加配置

```js
module.exports = require('@jianhe/config/prettier/index.js');
```

## ESlint

安装依赖

```shell
# ES6 + Standard + Babel + HTML
npm install -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise @babel/eslint-parser @babel/core eslint-plugin-html

# ES6 + Standard + Babel + Vue2/Vue3
npm install -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise @babel/eslint-parser @babel/core eslint-plugin-vue
```

添加配置

```js
module.exports = {
  // HTML
  extends: ['@jianhe/config/eslint/html.js']

  // Vue2
  extends: ['@jianhe/config/eslint/vue2.js']

  // Vue3
  extends: ['@jianhe/config/eslint/vue3.js']
};
```

## StyleLint

安装依赖

```shell
# CSS + HTML/Vue + Order + Standard
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard

# SCSS + HTML/Vue + Order + Standard
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard-scss
```

添加配置

```js
module.exports = {
  // CSS
  extends: ['@jianhe/config/stylelint/css.js']

  // SCSS
  extends: ['@jianhe/config/stylelint/scss.js']
};
```
