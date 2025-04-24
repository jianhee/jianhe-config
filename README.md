# FE Linter Configs

## 安装

在当前仓库根目录下运行

```shell
# 安装 yalc
npm i -g yalc
# 发布到本地
yalc publish --push
```

在项目仓库根目录下运行

```shell
# 安装 linter-configs
yalc add linter-configs
# 安装依赖
npm install
```

## 配置

### VS Code

把 `.vscode` 文件夹复制到项目根目录下

### EditorConfig

把 `.editorconfig` 文件复制到项目根目录下

### Prettier

配置文件优先级

1. `package.json` 的 `prettier` 字段

```json
{
  "prettier": "linter-configs/prettier"
}
```

2. `.prettierrc`
3. `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, or `.prettierrc.json5`
4. `.prettierrc.js`, `prettier.config.js`, `.prettierrc.ts`, or `prettier.config.ts`
5. `.prettierrc.mjs`, `prettier.config.mjs`, `.prettierrc.mts`, or `prettier.config.mts`
6. `.prettierrc.cjs`, `prettier.config.cjs`, `.prettierrc.cts`, or `prettier.config.cts`
7. `.prettierrc.toml`

```js
module.exports = require('linter-configs/prettier');
```

### ESlint

所需依赖

1. `es6.js` = `ESLint` + `Standard` + `Babel`
2. `html.js` = `ESLint` + `Standard` + `Babel` + `HTML`
3. `vue2.js/vue3.js` = `ESLint` + `Standard` + `Vue`

配置文件优先级

1. `.eslintrc.js`, `.eslintrc.cjs`

```js
module.exports = {
  extends: ['./node_moules/linter-configs/eslint/es6|html|vue2|vue3']
};
```

2. `.eslintrc.js`, `.eslintrc.cjs`
3. `.eslintrc.yaml`, `.eslintrc.yml`
4. `.eslintrc.json`
5. `package.json` 的 `eslintConfig` 字段

```json
{
  "eslintConfig": {
    "extends": ["./node_moules/linter-configs/eslint/es6|html|vue2|vue3"]
  }
}
```

## StyleLint

所需依赖

1. `css.js` = `StyleLint` + `Recess Order` + `Standard`
2. `scss.js` = `StyleLint` + `Recess Order` + `Standard Scss`
3. `html-css.js` = `StyleLint` + `Recess Order` + `Standard` + `HTML`
4. `html-scss.js` = `StyleLint` + `Recess Order` + `Standard` + `HTML`

配置文件优先级

1. `stylelint.config.js`, `stylelint.config.mjs`, `stylelint.config.cjs`

```js
module.exports = {
  extends: ['linter-configs/stylelint/css|scss|html-css|html-scss']
};
```

以下方式可能会被弃用

2. `.stylelintrc.js`, `.stylelintrc.mjs`, `.stylelintrc.cjs`
3. `.stylelintrc`
4. `.stylelintrc.yml`, `.stylelintrc.yaml`
5. `.stylelintrc.json`
6. `package.json` 的 `stylelint` 字段

```json
{
  "stylelint": {
    "extends": ["linter-configs/stylelint/css|scss|html-css|html-scss"]
  }
}
```
