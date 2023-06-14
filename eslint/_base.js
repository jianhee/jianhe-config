/**
 * ESLint Config
 * 其它所有配置都需要引用的基础配置
 *
 * 安装 ESLint
 * npm install -D eslint
 *
 * 安装 Standard 配置
 * npm install -D eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise
 *
 * 文档
 * https://eslint.org/
 * https://www.npmjs.com/package/eslint-config-standard
 */

module.exports = {
  // 是否是顶级目录
  // ESLint 会自动在文件目录中查找配置文件，从直系父目录开始，沿着目录结构依次向上，直到项目根目录或指定 `root: true` 时停止
  root: true,

  // 脚本的运行环境提供的预定义的全局变量
  // 默认都是关闭的，常用的有以下几种
  env: {
    // 是否启用浏览器全局变量
    browser: true,
    // 是否启用 Node.js 全局变量和作用域
    node: true,
    // 是否启用除 modules 以外的所有 ECMAScript 6 特性
    es6: true,
    // 是否启用 jQuery 全局变量
    jquery: true
  },

  // 脚本在执行期间访问的自定义的全局变量
  // 默认为空，添加的变量可以设置为以下三种值
  globals: {
    // var1: "off",       // 禁用
    // var2: "readonly",  // 只读
    // var3: "writable",  // 可读写
  },

  // 可共享配置
  // 默认为空，添加可共享配置可以继承另一个配置文件的所有特征（包括规则、插件和语言选项）并修改所有选项
  // 可选的值有以下三种，数组中后一项的优先级大于前一项，后一项的规则会覆盖前一项
  extends: [
    // 1.官方配置的名称：可选的值有 1.'recommended'（推荐规则）2.'all'（全部规则）
    'eslint:recommended',
    // 2.第三方配置的名称
    'standard'
    // 3.本地配置文件的路径
    // './_base.js'
  ],

  // 解析器
  // 默认为 'Espree'，添加第三方解析器可以解析特定的语法，同时需要配置 `parserOptions` 字段
  parser: '',

  // 解析器选项
  parserOptions: {
    // ECMAScript 版本：默认为 '3,5'，可设置为一个版本或一个年份
    ecmaVersion: 'latest',
    // ECMAScript 模式：可选的值有 1.'script'（默认）2.'module'（如果代码是 ECMAScript 模块）
    sourceType: 'module',
    // 额外的语言特性：默认都是关闭的
    ecmaFeatures: {
      // 是否允许在全局作用域下使用 return 语句
      globalReturn: false,
      // 是否开启全局 script 模式
      impliedStrict: true,
      // 是否支持 JSX 语法
      jsx: true
    },
    // 使用 @babel/eslint-parser 解析时，是否需要 .babelrc 配置文件
    requireConfigFile: false,
    // 是否允许 import 和 export 语句出现在模块顶层以外的任意位置
    allowImportExportEverywhere: false
  },

  // 插件
  // 默认为空，只能检测 .js 文件中的代码
  // 添加第三方插件可以提供额外的环境、配置和规则，或者提供额外的处理器从特定的文件中提取或转换 JavaScript 代码
  plugins: [
    // html
    // vue
    // ...
  ],

  // 启用或覆盖的规则及其各自的错误级别
  // 默认所有规则都是禁用的，添加的规则可以设置为以下三种值
  // 0/'off'    关闭规则
  // 1/'warn'   启用并警告，不会导致程序退出
  // 2/'error'  启用并报错，触发时会导致程序退出
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
