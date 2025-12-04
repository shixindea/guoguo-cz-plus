const theTypes = [
  {
    value: "✨  feat",
    name: "✨  feat:            新功能",
  },
  {
    value: "🐞  fix",
    name: "🐞  fix:             bug 修复",
  },
  {
    value: "🎯  wip",
    name: "🎯  wip:             正在进行的工作",
  },
  {
    value: "⚙️  config",
    name: "⚙️   config:          各种项目配置",
  },
  {
    value: "🛠  refactor",
    name: "🛠   refactor:        代码重构",
  },
  {
    value: "🔎  style",
    name: "🔎  style:           修改样式",
  },
  {
    value: "🩺  type",
    name: "🩺  type:            TypeScript 定义更新，类型更新",
  },
  {
    value: "♻️  update",
    name: "♻️   update:          更新代码，处理冲突",
  },
  {
    value: "🩴  trivia",
    name: "🩴   trivia:          琐事，如改个文案，换个图片等",
  },
  {
    value: "📚  docs",
    name: "📚  docs:            仅文档更改",
  },
  {
    value: "🇨🇳  site",
    name: "🇨🇳   site:            站点或官网的改进",
  },
  {
    value: "🏁  test",
    name: "🏁  test:            添加缺少的测试或更正现有测试",
  },
  {
    value: "🗯  chore",
    name: "🗯   chore:           不修改项目代码。例如更新生成任务、包管理器、项目配置等",
  },
  {
    value: "🪛  lint",
    name: "🪛   lint:            代码规范修改",
  },
  {
    value: "📦  release",
    name: "📦  release:         发布新包",
  },
  {
    value: "⏪  revert",
    name: "⏪  revert:          恢复到提交",
  },
  {
    value: "🚗  follow",
    name: "🚗  follow:          追随上一个的提交",
  },
  {
    value: "📝  others",
    name: "📝  others:          其他改动",
  },
];
module.exports = {
  rules: {
    "type-enum": [2, "always", theTypes.map(({ value }) => value)],
  },
  prompt: {
    types: theTypes,
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择一种你的提交类型:",
      customScope: "请输入修改范围(可选):",
      subject: "短说明:",
      body: '长说明，使用"|"换行(可选)：',
      breaking: "列出任何BREAKING CHANGES (可选):",
      footer: "关联关闭的issue，例如：#31, #34(可选):",
      confirmCommit: "确定提交说明?",
    },
    scopes: [],
    allowCustomScopes: true,
    skipQuestions: ["scope", "breaking", "footer"],
    defaultScope: "___CUSTOM___:",

  },
}
