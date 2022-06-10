/**
 * ESLint Config For Vue2.x
 *
 * 安装
 * npm i -D eslint
 * npm i -D @babel/eslint-parser @babel/core
 * npm i -D eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise
 * npm i -D eslint-plugin-vue
 *
 * 文档
 * https://eslint.org/
 * https://www.npmjs.com/package/@babel/eslint-parser
 * https://www.npmjs.com/package/eslint-config-standard
 * https://eslint.vuejs.org/
 */

module.exports = {
  // 解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  // vue 支持
  plugins: ['vue'],

  // 可共享配置
  extends: [
    // vue 配置
    'plugin:vue/recommended',

    // standard 配置
    'standard',

    // 自定义的基础配置和规则
    './_base.js'
  ],

  // 自定义的 vue 规则
  rules: {
    // 使用 === 而不是 ==
    'vue/eqeqeq': ['error', 'always'],
    // 使用模板字面量而非字符串连接
    'vue/prefer-template': 'error',
    // 组件名称在模板中的样式：使用中划线写法
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // html 元素中的内容是否换行：多行时换行，单行时关闭校验
    'vue/multiline-html-element-content-newline': 'error',
    'vue/singleline-html-element-content-newline': 'off'
  }
};
