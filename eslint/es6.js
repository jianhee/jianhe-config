/**
 * ESLint Config For ES6
 * 适用于 ES6 的配置
 *
 * 安装
 * npm install -D eslint-plugin-html
 * npm install -D @babel/eslint-parser @babel/core
 *
 * 文档
 * https://www.npmjs.com/package/eslint-plugin-html
 * https://www.npmjs.com/package/@babel/eslint-parser
 */

module.exports = {
  // html 插件：从 .html 文件的 <script> 标签中提取代码
  plugins: ['html'],

  // babel 解析器
  parser: '@babel/eslint-parser',

  // 可共享配置
  extends: [
    // 自定义的基础配置
    './_base.js'
  ]
};
