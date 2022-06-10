/**
 * StyleLint Config For Less
 *
 * 安装
 * npm i -D stylelint
 * npm i -D stylelint-config-recess-order
 * npm i -D stylelint-config-standard
 * npm i -D stylelint-less
 * npm i -D stylelint-config-html postcss-html
 *
 * 文档
 * https://stylelint.io/
 * https://www.npmjs.com/package/stylelint-config-recess-order
 * https://www.npmjs.com/package/stylelint-config-standard
 * https://www.npmjs.com/package/stylelint-less
 * https://www.npmjs.com/package/stylelint-config-html
 */

module.exports = {
  // 插件
  plugins: [
    // less 支持
    'stylelint-less'
  ],

  // 可共享配置
  extends: [
    // stylelint-order 插件
    // Recess 和 Bootstrap 的排序规则
    'stylelint-config-recess-order',

    // standard 配置
    'stylelint-config-standard',

    // html 支持
    'stylelint-config-html',

    // 自定义的基础配置和规则
    './_base.js'
  ]
};
