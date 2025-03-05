# 我的前端配置

## 安装

在当前仓库根目录下运行

```shell
npm i -g yalc
yalc publish --push
```

在项目仓库根目录下运行

```shell
yalc add @jianhe/linter-configs
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
  "prettier": "@jianhe/linter-configs/prettier"
}
```

2. `.prettierrc`
3. `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, or `.prettierrc.json5`
4. `.prettierrc.js`, `prettier.config.js`, `.prettierrc.ts`, or `prettier.config.ts`
5. `.prettierrc.mjs`, `prettier.config.mjs`, `.prettierrc.mts`, or `prettier.config.mts`
6. `.prettierrc.cjs`, `prettier.config.cjs`, `.prettierrc.cts`, or `prettier.config.cts`
7. `.prettierrc.toml`

```js
module.exports = require('@jianhe/linter-configs/prettier');
```

## ESlint

安装依赖

```shell
# 必需：ES6 + Standard + Babel
npm install -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise @babel/eslint-parser @babel/core

# 可选：使用 HTML
npm install -D eslint-plugin-html

# 可选：使用 Vue2/Vue3
npm install -D eslint-plugin-vue
```

配置文件优先级

1. `.eslintrc.js`, `.eslintrc.cjs`

```js
module.exports = {
  extends: ['./node_moules/@jianhe/linter-configs/eslint/es6|html|vue2|vue3']
};
```

2. `.eslintrc.js`, `.eslintrc.cjs`
3. `.eslintrc.yaml`, `.eslintrc.yml`
4. `.eslintrc.json`
5. `package.json` 的 `eslintConfig` 字段

```json
{
  "eslintConfig": {
    "extends": ["./node_moules/@jianhe/linter-configs/eslint/es6|html|vue2|vue3"]
  }
}
```

## StyleLint

安装依赖

```shell
# 必需：HTML/Vue + Order + Standard
npm install stylelint stylelint-config-html postcss-html stylelint-config-recess-order

# 可选：使用 CSS
npm install stylelint-config-standard

# 可选：使用 SCSS
npm install stylelint-config-standard-scss
```

配置文件优先级

1. `stylelint.config.js`, `stylelint.config.mjs`, `stylelint.config.cjs`

```js
module.exports = {
  extends: ['@jianhe/linter-configs/stylelint/css|scss']
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
    "extends": ["@jianhe/linter-configs/stylelint/css|scss"]
  }
}
```
