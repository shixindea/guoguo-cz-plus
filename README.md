## 袁果锅生态

用于 git cz 提交规范

## TIP
```json
// 引用 @shixinde/guoguo-cz 的配置
const config = require('@shixinde/guoguo-cz-plus/commitlint.config.js');

// 导出完整配置，包括 prompt 部分
module.exports = {
  ...config,
  extends: ['@shixinde/guoguo-cz-plus'],
  useEmoji: true,
};
```