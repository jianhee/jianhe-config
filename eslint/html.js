/**
 * ESLint Config For ES6 + HTML
 *
 * 安装 Babel 解析器
 * npm install -D @babel/core @babel/eslint-parser
 *
 * 安装 HTML 插件
 * npm install -D eslint-plugin-html
 *
 *
 * 文档
 * https://www.npmjs.com/package/@babel/eslint-parser
 * https://www.npmjs.com/package/eslint-plugin-html
 */

module.exports = {
  // Babel 解析器
  parser: '@babel/eslint-parser',

  // HTML 插件：它可以从 .html 文件的 <script> 标签中提取代码
  plugins: ['html'],

  // 可共享配置
  extends: [require.resolve('./modules/common')]
};
