/**
 * ESLint Config For Vue3
 *
 */

module.exports = {
  // 可共享配置
  extends: [
    // Vue 插件提供的配置
    'plugin:vue/vue3-essential',
    // 本地配置
    './_base.js'
  ]
};
