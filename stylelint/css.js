/**
 * StyleLint Config For CSS + HTML/Vue
 *
 * 安装 Standard 配置
 * npm install -D stylelint-config-standard
 *
 * 文档
 * https://www.npmjs.com/package/stylelint-config-standard
 */

module.exports = {
  // 可共享配置
  extends: [
    // Standard 配置
    'stylelint-config-standard',
    // 本地配置
    './_base.js'
  ]
};
