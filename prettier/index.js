/**
 * Prettier Config
 *
 * 安装
 * npm install -D prettier
 *
 * 文档
 * https://prettier.io/
 */

module.exports = {
  // 每行最大字符数
  printWidth: Infinity,
  // 每个缩进使用的空格数
  tabWidth: 2,
  // 是否使用缩进符：false-使用空格
  useTabs: false,
  // 是否在语句末尾使用分号
  semi: true,
  // 是否使用单引号
  singleQuote: true,
  // 对象属性的引号：consistent-如果有一个属性需要使用引号，那就全部都使用引号
  quoteProps: 'consistent',
  // 是否在 jsx 中使用单引号
  jsxSingleQuote: false,
  // 对象和数组中的拖尾逗号：none-不使用
  trailingComma: 'none',
  // 是否在大括号内首尾添加空格
  bracketSpacing: true,
  // 是否将标签的反尖括号放在最后一行的末尾：false-需要换行
  bracketSameLine: false,
  // 箭头函数的参数圆括号：avoid-只有一个参数时不使用括号
  arrowParens: 'avoid',
  // 文件格式化的范围：全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 是否在文件开头写特殊注释 @prettier
  requirePragma: false,
  // 是否在文件开头自动插入特殊注释 @prettier
  insertPragma: false,
  // markdown 文件中的折行标准：preserve-使用默认标准
  proseWrap: 'preserve',
  // html 文件中的空格格式：css-根据显示样式, strict-保留空格, ignore-忽略空格
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 标签是否缩进
  vueIndentScriptAndStyle: false,
  // 换行风格
  endOfLine: 'lf',
  // 是否自动识别并格式化内嵌代码
  embeddedLanguageFormatting: 'auto',
  // 是否给属性换行
  singleAttributePerLine: false,
  // 针对特殊文件
  overrides: [
    // css 相关
    {
      files: ['*.css', '*.scss', '*.less'],
      options: {
        // 是否使用单引号
        singleQuote: false
      }
    },
    // vue 相关
    {
      files: '*.vue',
      options: {
        // 是否给属性换行
        singleAttributePerLine: true
      }
    }
  ]
};
