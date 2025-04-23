// StyleLint 基础配置
// 文档：https://stylelint.io/
// 安装：npm install -D stylelint
// 说明：和 ESLint 规则类似

module.exports = {
  // 插件
  plugins: [],

  // 可共享配置
  extends: [],

  // 规则
  rules: {
    // 规则块前的空行：不使用
    'rule-empty-line-before': 'never',
    // 字体列表中是否缺少通用系列：不校验
    'font-family-no-missing-generic-family-keyword': null,
    // 是否允许特异性较低的选择器在特异性较高的选择器之后出现：不校验
    'no-descending-specificity': null
  }
};
