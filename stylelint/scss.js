/**
 * StyleLint Config For Scss
 *
 * 安装
 * npm i -D stylelint
 * npm i -D stylelint-config-recess-order
 * npm i -D stylelint-config-standard-scss
 * npm i -D stylelint-config-html postcss-html
 *
 * 文档
 * https://stylelint.io/
 * https://www.npmjs.com/package/stylelint-config-recess-order
 * https://www.npmjs.com/package/stylelint-config-standard-scss
 * https://www.npmjs.com/package/stylelint-config-html
 */

module.exports = {
  // 可共享配置
  extends: [
    // stylelint-order 插件
    // Recess 和 Bootstrap 的排序规则
    'stylelint-config-recess-order',

    // 扩展 stylelint-config-standard 并添加 SCSS 支持
    // 扩展 stylelint-config-recommended-scss
    'stylelint-config-standard-scss',

    // html 支持
    'stylelint-config-html',

    // 自定义的基础配置和规则
    './_base.js'
  ]
};
