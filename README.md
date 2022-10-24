# 我的前端配置

## 安装

在当前仓库根目录下运行，创建全局软链

```shell
npm link
```

在目标项目根目录下运行，就可以通过刚才创建的全局软链获取到当前仓库中的文件

```shell
npm link @jianhe/config
```

## VS Code

把 `.vscode` 文件夹复制到项目根目录下即可

## EditorConfig

把 `.editorconfig` 文件复制到项目根目录下即可

## Prettier

安装对应的依赖

```shell
npm install -D prettier

```

把 `.prettierrc.js` 文件复制到项目根目录下即可，文件中的配置如下

```js
module.exports = require('./node_modules/@jianhe/config/prettier/index.js');
```

## ESlint

安装对应的依赖

```shell
# ES6
npm install -D eslint @babel/eslint-parser @babel/core eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-html

# Vue2
npm install -D eslint @babel/eslint-parser @babel/core eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-vue
```

在 `.eslintrc.js` 文件中添加对应的配置

```js
module.exports = {
  // ES6
  extends: ['./node_modules/@jianhe/config/eslint/es6.js']

  // Vue2
  extends: ['./node_modules/@jianhe/config/eslint/vue2.js']
};
```

## StyleLint

安装对应的依赖

```shell
# CSS
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard

# SCSS
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard-scss

# Less
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard stylelint-less
```

在 `.stylelintrc.js` 文件中添加对应的配置

```js
module.exports = {
  // CSS
  extends: ['./node_modules/@jianhe/config/stylelint/css.js']

  // SCSS
  extends: ['./node_modules/@jianhe/config/stylelint/scss.js']

  // Less
  extends: ['./node_modules/@jianhe/config/stylelint/less.js']
};
```
