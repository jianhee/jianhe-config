# 我的前端配置

## 安装

在当前仓库根目录下运行，创建全局软链

```shell
npm i -g yalc
yalc publish --push
```

在目标项目根目录下运行，通过全局软链获取到自定义配置

```shell
yalc add @jianhe/configs
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

配置文件优先级

1. `package.json` 的 `prettier` 字段

```json
{
  "prettier": "./node_moules/@jianhe/configs/prettier/index.js"
}
```

2. `.prettierrc`
3. `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, or `.prettierrc.json5`
4. `.prettierrc.js`, `prettier.config.js`, `.prettierrc.ts`, or `prettier.config.ts`
5. `.prettierrc.mjs`, `prettier.config.mjs`, `.prettierrc.mts`, or `prettier.config.mts`
6. `.prettierrc.cjs`, `prettier.config.cjs`, `.prettierrc.cts`, or `prettier.config.cts`
7. `.prettierrc.toml`

```js
module.exports = require('./node_moules/@jianhe/configs/prettier/index.js');
```

## ESlint

安装依赖

```shell
# ES6 + Standard + Babel + HTML
npm install -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise @babel/eslint-parser @babel/core eslint-plugin-html

# ES6 + Standard + Babel + Vue2/Vue3
npm install -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise @babel/eslint-parser @babel/core eslint-plugin-vue
```

配置文件优先级

1. `.eslintrc.js`, `.eslintrc.cjs`

```js
module.exports = {
  extends: ['./node_moules/@jianhe/configs/eslint/html|vue2|vue3.js']
};
```

2. `.eslintrc.js`, `.eslintrc.cjs`
3. `.eslintrc.yaml`, `.eslintrc.yml`
4. `.eslintrc.json`
5. `package.json` 的 `eslintConfig` 字段

```json
{
  "eslintConfig": {
    "extends": ["./node_moules/@jianhe/configs/eslint/html|vue2|vue3.js"]
  }
}
```

## StyleLint

安装依赖

```shell
# CSS + HTML/Vue + Order + Standard
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard

# SCSS + HTML/Vue + Order + Standard
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order stylelint-config-standard-scss
```

配置文件优先级

1. `stylelint.config.js`, `stylelint.config.mjs`, `stylelint.config.cjs`

```js
module.exports = {
  extends: ['./node_moules/@jianhe/configs/stylelint/css|scss.js']
};
```

以下配置可能会被弃用

2. `.stylelintrc.js`, `.stylelintrc.mjs`, `.stylelintrc.cjs`
3. `.stylelintrc`
4. `.stylelintrc.yml`, `.stylelintrc.yaml`
5. `.stylelintrc.json`
6. `package.json` 的 `stylelint` 字段

```json
{
  "stylelint": {
    "extends": ["./node_moules/@jianhe/configs/stylelint/css|scss.js"]
  }
}
```
