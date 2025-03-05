/**
 * ESLint Config For Vue2
 *
 */

module.exports = {
  // 可共享配置
  extends: [
    // Vue 插件提供的配置
    'plugin:vue/recommended',
    // 本地配置
    require.resolve('./_common'),
    require.resolve('./_vue')
  ]
};
