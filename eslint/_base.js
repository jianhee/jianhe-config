/**
 * ESLint Config
 * 所有其它配置都需要引用的基础配置
 *
 * 安装
 * npm install -D eslint
 * npm install -D eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise
 *
 * 文档
 * https://eslint.org/
 * https://www.npmjs.com/package/eslint-config-standard
 */

module.exports = {
  // 是否顶级目录
  // 默认会自动在所有父级目录里查找配置文件，如果配置文件中指定了 `root: true` 或者到了项目根目录，则停止查找
  root: true,

  // 脚本的运行环境：每种环境都有一组特定的预定义的全局变量
  // 默认所有环境都是未启用的，常用的环境有以下几种
  env: {
    // 启用 modules 以外的所有 ECMAScript 6 特性
    es6: true,
    // 启用浏览器环境中的全局变量
    browser: true,
    // 启用 Node.js 全局变量和作用域
    node: true,
    // 启用 jQuery 全局变量
    jquery: true
  },

  // 脚本在执行期间访问的额外的全局变量
  // 默认只有 env 中启用的环境变量不会报错，可选的值有以下三种
  globals: {
    // var1: "off",       // 禁用
    // var2: "readonly",  // 只读
    // var3: "writable",  // 可读写
  },

  // 插件：提供额外的规则、环境、配置，或者提供额外的处理器从特定的文件中提取或转换 JavaScript 代码
  // 默认为空，只能检测 .js 文件中的代码，可选的值为已安装的第三方插件的名称
  plugins: [
    // html
    // vue
    // ...
  ],

  // 解析器：解析特定的语法
  // 默认为 'Espree', 可选的值为已安装的第三方解析器的名称，同时需要在下面的解析器选项中添加相应的配置
  parser: '',

  // 解析器选项
  parserOptions: {
    // ECMAScript 版本：默认为 '3,5', 可选的值为一个版本或年份
    ecmaVersion: 2022,
    // ECMAScript 模式：默认为 'script', 可选的值有 'module'
    sourceType: 'module',
    // 额外的语言特性：默认都是 false
    ecmaFeatures: {
      // 是否允许在全局作用域下使用 return 语句
      globalReturn: false,
      // 是否开启全局 script 模式
      impliedStrict: true,
      // 是否支持 jsx 语法
      jsx: true
    },
    // 使用 @babel/eslint-parser 解析时，是否需要 babelrc 配置文件
    requireConfigFile: false,
    // 是否允许 import 和 export 语句出现在模块的任意位置：false 表示只能出现在顶层
    allowImportExportEverywhere: false
  },

  // 可共享配置
  // 默认为空，可选的值有以下三种，数组中后一项的规则会覆盖前一项
  extends: [
    // 1. 官方配置的名称：recommended-启用推荐规则，all-启用全部规则
    'eslint:recommended',
    // 2. 已安装的第三方可共享配置的名称
    'standard'
    // 3 本地配置文件的路径
    // './_base.js'
  ],

  // 启用或覆盖的规则及其各自的错误级别
  // 默认所有规则都是禁用的，可选的值有以下三种
  // 'off'/0   关闭规则
  // 'warn'/1  开启规则，使用警告级别错误，不会导致程序退出
  // 'error'/2 开启规则，使用错误级别错误，触发时会导致程序退出
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
