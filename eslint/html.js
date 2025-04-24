// ESLint Config For ES6 + HTML

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/plugins-html'),
    require.resolve('./modules/parser-babel'),
    require.resolve('./modules/extends-standard'),
    require.resolve('./modules/common')
  ]
};
