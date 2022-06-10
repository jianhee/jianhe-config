/**
 * ESLint Config For ES6
 *
 * 安装
 * npm i -D eslint
 * npm i -D @babel/eslint-parser @babel/core
 * npm i -D eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise
 * npm i -D eslint-plugin-html
 *
 * 文档
 * https://eslint.org/
 * https://www.npmjs.com/package/@babel/eslint-parser
 * https://www.npmjs.com/package/eslint-config-standard
 * https://www.npmjs.com/package/eslint-plugin-html
 */

module.exports = {
  // 解析器
  parser: '@babel/eslint-parser',

  // html 支持
  plugins: ['html'],

  // 可共享配置
  extends: [
    // standard 配置
    'standard',

    // 自定义的基础配置和规则
    './_base.js'
  ]
};
