/**
 * StyleLint Config For SCSS + HTML/Vue
 *
 * 安装 SCSS 插件
 * npm install -D stylelint-config-standard-scss
 *
 * 文档
 * https://www.npmjs.com/package/stylelint-config-standard-scss
 */

module.exports = {
  // 可共享配置
  extends: [
    // 1.扩展 Standard 规则并为 SCSS 提供语法支持
    // 2.扩展 recommended-scss 规则
    'stylelint-config-standard-scss',
    // 本地配置
    require.resolve('./modules/common')
  ]
};
