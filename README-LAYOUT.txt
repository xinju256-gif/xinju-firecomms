导航及文章页排版修正（仅应用到 cms-articles 分支）

本包仅三个代码文件：
1. 仓库根目录 article-style.css：替换原文件。
2. 仓库根目录 site-nav-fix.css：新增文件。
3. scripts/build.mjs：替换 scripts 文件夹里面的 build.mjs。

注意 GitHub 文件选择器可能将目录里的文件平铺上传。
推荐分两次：先在仓库根目录上传两个 CSS；然后进入 scripts 文件夹，上传 build.mjs。
不要把 build.mjs 直接上传到根目录。不要修改 package.json 的构建命令。
每次直接提交到 cms-articles，原 PR 会自动更新。
等待最新 Netlify 预览成功后，核对首页和 /articles/，确认后再合并 main。

修正内容：
- 桌面导航不再被压成竖排。
- 使用首页已有页头，文章页沿用相同品牌、菜单和移动菜单。
- 较窄屏幕切换菜单按钮。
- 文章页标题横幅和搜索区留白缩小。
- 原包首页为英文，本次保留该版本，不进行全文翻译。

验证：本地构建测试通过；在浏览器检查了首页及文章列表页。
尚未上传到你的 GitHub 或部署到 Netlify。
