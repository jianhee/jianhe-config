/**
 * ESLint Config For ES6 + Vue
 *
 * 安装 Babel 解析器
 * npm install -D @babel/core @babel/eslint-parser
 *
 * 安装 Vue 插件
 * npm install -D eslint-plugin-vue
 *
 * 文档
 * https://www.npmjs.com/package/@babel/eslint-parser
 * https://eslint.vuejs.org/
 */

module.exports = {
  // Vue 插件提供的解析器
  // 1.Vue 插件使用 `vue-eslint-parser` 解析器检查模板
  // 2.如果在 `parser` 字段中使用了其它解析器，需要移入 `parserOptions` 字段中以避免两个解析器产生冲突
  parser: 'vue-eslint-parser',

  // Babel 解析器移入这里
  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  // Vue 插件
  // 1.它可以从 .vue 文件的 <script> 标签和 <template> 标签中提取代码，并针对 Vue 语法提供了更多的规则
  // 2.它和 HTML 插件都会从 <script> 标签中提取代码，所以需要在 `plugins` 字段中移除 'html' 以避免两个插件产生冲突
  plugins: ['vue'],

  // Vue 插件提供的规则
  rules: {
    // 目录和文件名：必须使用 kebab-case 写法
    // 组件的命名：必须使用两个以上的单词
    'vue/multi-word-component-names': 'off',
    // 组件名称的写法：在单文件组件和字符串模板中使用 PascalCase 写法，在 DOM 模板中使用 kebab-case 写法
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 使用 === 而不是 ==
    'vue/eqeqeq': ['error', 'always'],
    // 使用模板字面量而非字符串连接
    'vue/prefer-template': 'error',
    // HTML 元素中的内容是否换行：多行时换行，单行时关闭校验
    'vue/multiline-html-element-content-newline': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    // HTML 闭合元素
    'vue/html-self-closing': ['error', { html: { void: 'always' } }]
  }
};
