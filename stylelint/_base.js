/**
 * StyleLint Config
 * 所有其它配置都需要引用的基础配置，和 ESLint 类似
 *
 * 安装
 * npm install -D stylelint
 * npm install -D stylelint-config-html postcss-html
 * npm install -D stylelint-config-recess-order
 *
 * 文档
 * https://stylelint.io/
 * https://www.npmjs.com/package/stylelint-config-html
 * https://www.npmjs.com/package/stylelint-config-recess-order
 */

module.exports = {
  // 插件
  plugins: [],

  // 可共享配置
  extends: [
    // 从 .html/.vue 等文件的 <style> 标签中提取代码
    'stylelint-config-html',
    // 使用 Recess 和 Bootstrap 的规则给属性排序
    'stylelint-config-recess-order'
  ],

  // 规则
  rules: {
    // 每行最大字符数：不限制
    'max-line-length': Infinity,
    // 规则块前的空行：不使用
    'rule-empty-line-before': 'never',
    // 属性值中小数前导0：不使用
    'number-leading-zero': 'never',
    // 字体列表中是否缺少通用系列：不校验
    'font-family-no-missing-generic-family-keyword': null,
    // 是否允许特异性较低的选择器在特异性较高的选择器之后出现：不校验
    'no-descending-specificity': null
  }
};
