// StyleLint Config For SCSS + HTML/Vue

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/extends-recess-order'),
    require.resolve('./modules/extends-standard'),
    require.resolve('./modules/extends-html'),
    require.resolve('./modules/common')
  ]
};
