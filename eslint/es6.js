/**
 * ESLint Config For ES6
 *
 * 安装 Babel 解析器
 * npm install -D @babel/core @babel/eslint-parser
 *
 * 文档
 * https://www.npmjs.com/package/@babel/eslint-parser
 */

module.exports = {
  // Babel 解析器
  parser: '@babel/eslint-parser',

  // 可共享配置
  extends: [require.resolve('./modules/common')]
};
