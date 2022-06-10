/**
 * StyleLint Plugin For Order
 *
 * 安装
 * npm i -D stylelint stylelint-order
 *
 * 文档
 * https://stylelint.io/
 * https://www.npmjs.com/package/stylelint-order
 *
 * 此插件可以使用 stylelint-config-recess-order 代替
 * https://www.npmjs.com/package/stylelint-config-recess-order
 */

module.exports = {
  // 排序插件
  plugins: ['stylelint-order'],

  // 自定义的排序规则
  rules: {
    // 内容的顺序
    'order/order': ['custom-properties', 'declarations'],
    // 属性的顺序
    'order/properties-order': ['width', 'height'],
    // 属性的字母顺序
    'order/properties-alphabetical-order': true
  }
};
