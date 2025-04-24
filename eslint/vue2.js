// ESLint Config For ES6 + Vue2

module.exports = {
  extends: [
    // ...
    'plugin:vue/recommended',
    require.resolve('./modules/extends-standard'),
    require.resolve('./modules/plugins-vue'),
    require.resolve('./modules/common')
  ]
};
