/**
 * StyleLint Config For SCSS
 * 适用于 SCSS  的配置
 *
 * 安装
 * npm install -D stylelint-config-standard-scss
 *
 * 文档
 * https://www.npmjs.com/package/stylelint-config-standard-scss
 */

module.exports = {
  // 可共享配置
  extends: [
    // 扩展 standard 配置并添加 SCSS 支持
    // 扩展 recommended-scss 配置
    'stylelint-config-standard-scss',
    // 自定义的基础配置
    './_base.js'
  ]
};
