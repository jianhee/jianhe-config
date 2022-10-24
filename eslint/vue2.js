/**
 * ESLint Config For Vue2.x
 * 适用于 Vue2 的配置
 *
 * 安装
 * npm install -D eslint-plugin-vue
 * npm install -D @babel/eslint-parser @babel/core
 *
 * 文档
 * https://eslint.vuejs.org/
 * https://www.npmjs.com/package/@babel/eslint-parser
 */

module.exports = {
  // vue 插件
  // 1. 它可以从 .vue 文件的 <script> 标签和 <template> 标签中提取代码，并针对 vue 语法提供了更多的规则
  // 2. 它和 html 插件都会从 <script> 标签中提取代码，所以需要在 plugins 字段中移除 html 以避免两个插件产生冲突
  plugins: ['vue'],

  // vue 解析器
  // 1. vue 插件使用 vue-eslint-parser 解析器检查模板
  // 2. 如果在 parser 字段中使用了其它解析器，需要移入 parserOptions 字段中以避免两个解析器产生冲突
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  // 可共享配置
  extends: [
    // vue 配置
    'plugin:vue/recommended',
    // 自定义的基础配置
    './_base.js'
  ],

  // vue 规则
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
