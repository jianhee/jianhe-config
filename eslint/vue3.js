// ESLint Config For ES6 + Vue3

module.exports = {
  extends: [
    // ...
    'plugin:vue/vue3-recommended',
    require.resolve('./modules/extends-standard'),
    require.resolve('./modules/plugins-vue'),
    require.resolve('./modules/common')
  ]
};
