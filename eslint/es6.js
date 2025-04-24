// ESLint Config For ES6

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/parser-babel'),
    require.resolve('./modules/extends-standard'),
    require.resolve('./modules/common')
  ]
};
