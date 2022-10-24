/**
 * StyleLint Config For CSS
 * 适用于 CSS 的配置
 *
 * 安装
 * npm install -D stylelint-config-standard
 *
 * 文档
 * https://www.npmjs.com/package/stylelint-config-standard
 */

module.exports = {
  // 可共享配置
  extends: [
    // standard 配置
    'stylelint-config-standard',
    // 自定义的基础配置
    './_base.js'
  ]
};
