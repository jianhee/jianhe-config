/**
 * ESLint Config
 *
 * 安装
 * npm i -D eslint
 *
 * 文档
 * https://eslint.org/
 */

module.exports = {
  // 是否顶级目录
  root: true,

  // 指定脚本的运行环境：每种环境都有一组特定的预定义的全局变量
  env: {
    // 启用 modules 以外的所有 ECMAScript 6 特性
    es6: true,
    // 启用浏览器全局变量
    browser: true,
    // 启用 Node.js 全局变量和作用域
    node: true,
    // 启用 jQuery 全局变量
    jquery: true
  },

  // 自定义的全局变量
  globals: {
    // global1: "writable",  // 可读写
    // global2: "readonly",  // 只读
    // global3: "off",       // 关闭
  },

  // 解析器：默认为 'Espree'
  // 安装第三方解析器后，为了避免出现兼容性错误，需要在下面的解析器选项中添加相应的配置
  parser: '',

  // 解析器选项
  parserOptions: {
    // ECMAScript 版本：默认为 '3,5'，可以指定一个版本或年份
    ecmaVersion: 2022,
    // ECMAScript 模式：默认为 'script'
    sourceType: 'module',
    // ECMAScript 额外的特性
    ecmaFeatures: {
      // 是否允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 是否开启全局 script 模式
      impliedStrict: true,
      // 是否支持 jsx 语法
      jsx: true
    },
    // 使用 @babel/eslint-parser 解析时，是否需要 babelrc 配置文件
    requireConfigFile: false,
    // 是否允许 import 和 export 语句出现在模块的任意位置：false-只能出现在顶层
    allowImportExportEverywhere: false
  },

  // 插件：默认为空，只能检测 .js 文件中的代码
  // 安装的第三方插件可以提供处理器，从其它类型的文件中提取或转换 JavaScript 代码
  plugins: [],

  // 可共享配置：数组中后一项的优先级要大于前一项，后一项的规则会覆盖前一项
  extends: [
    // 'eslint:recommended' // 官方配置的名称：官方推荐的核心规则
    // 'standard'           // 可共享配置的名称：standard 规则
    // './_base.js'          // 配置文件的路径：自定义的基础规则
  ],

  // 额外的规则：默认情况下，所有的规则都是禁用的
  // 'off'/0   关闭规则
  // 'warn'/1  开启规则，使用警告级别的提示
  // 'error'/2 开启规则，使用错误级别的提示
  rules: {
    // 风格相关
    // 对象属性的引号：如果有一个属性需要使用引号，那就全部都使用引号
    'quote-props': ['error', 'consistent-as-needed'],
    // 函数左括号之前的空格：禁止使用
    'space-before-function-paren': ['error', 'never'],
    // 语句末尾的分号：必须使用
    'semi': ['error', 'always'],
    // 换行风格
    'linebreak-style': ['error', 'unix'],

    // ES6 语法
    // 使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 使用箭头函数作为回调
    'prefer-arrow-callback': 'error',
    // 箭头函数的参数圆括号：只有一个参数时不使用括号
    'arrow-parens': ['error', 'as-needed'],

    // 建议
    // console/debugger：生产环境禁用
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
