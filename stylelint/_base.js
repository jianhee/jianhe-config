/**
 * StyleLint Config
 *
 * 安装
 * npm i -D stylelint
 *
 * 文档
 * https://stylelint.io/
 */

module.exports = {
  // 插件
  plugins: [],

  // 可共享配置
  extends: [],

  // 规则
  // null   关闭规则
  // 单个值  开启规则
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
