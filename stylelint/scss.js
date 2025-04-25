// StyleLint Config For SCSS

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/extends-recess-order'),
    require.resolve('./modules/extends-standard-scss'),
    require.resolve('./modules/common')
  ]
};
