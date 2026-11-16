飞尔康 Decap 文章功能更新包

这是增量源码更新包，不是可直接拖入 Netlify Drop 的成品网站。
请上传到 GitHub 仓库根目录，不能放在 admin 文件夹，也不要上传整个 ZIP。
保留仓库现有的 HTML、图片、PDF、main.js、style.css、content/articles。

包含功能
- 构建时读取 content/articles/*.md，生成 /articles/ 列表和独立静态详情页。
- 保持现有 Decap GitHub 账号、仓库和登录配置。没有包含登录密钥。
- 标题/摘要搜索、封面、Markdown 正文/参数表、带文章标题的邮件咨询。
- 独立标题、描述、canonical、Article 结构化数据和 Sitemap。
- 在已有页面的 nav-list 导航中增加技术文章入口。
- 草稿、未来日期内容、标题为“后台发布测试”的文章不进入公开页面。
- 不把原始 content 目录部署到前台。源仓库目前公开，因此草稿并不等于保密资料。
- 构建时为已知的旧 assets 路径补齐根目录资源的副本，不修改现有 HTML 源文件。

首次上线（建议先预览）
1. 下载并解压此包，确认能看到 package.json、netlify.toml、scripts、admin 等。
2. GitHub 仓库顶部 main 分支下拉框，输入 cms-articles，创建新分支。
3. 在 cms-articles 分支根目录点击 Add file > Upload files。
4. 拖入解压得到的文件与文件夹本身，不要拖外层总文件夹。
   admin/config.yml 是本次后台配置更新；若你后来又改了后台配置，先比较后合并。
5. Commit changes 保存到 cms-articles 分支。
6. 在 GitHub 创建从 cms-articles 到 main 的 Pull request。
7. 等待 Netlify Deploy Preview。如果没有自动预览，需要在 Netlify 为 PR 启用预览构建。
   此更新包未替你操作 Netlify，也未替你开启预览设置。
8. 预览设置：Build command = npm ci && npm run build；Publish directory = dist；Node 22。
   netlify.toml 已声明这些值；如果后台已有 Base directory，确认根目录（留空）。
9. 先看预览首页/产品页，再访问预览域名/articles/。暂无正式文章时显示空状态，属正常。
10. 确认后将 PR 合并到 main，Netlify 才会更新正式站。

上传代码的边界
- 原压缩包里的首页和多份页面是英文 HTML，且依赖不存在的 assets 路径。
  本包不会把这些源文件改成中文版；资源副本只能修复已存在根目录文件的引用。
- 自定义域名 firecomms-cn.com/admin/ 曾返回首页；这与文章构建不是同一问题。
  当前先继续使用已验证可登录的默认域名后台：
  https://resonant-banoffee-249bac.netlify.app/admin/index.html
  此包不会修改域名 DNS，也不保证解决自定义域名问题。
- 如果线上版本与仓库不同，请先核对预览，不要整站覆盖。

以后发布文章
- 打开默认域名后台 > 技术文章 > 新增。
- 填标题、发布时间、摘要、正文；封面可选。
- 草稿开启：不会生成公开文章；草稿关闭且时间不晚于构建时：会生成。
- 点击发布，等待 Netlify 构建完成，再访问 https://firecomms-cn.com/articles/。
- 首次请发布一篇已审核的真实文章验证；测试标题“后台发布测试”会自动排除。
- 发布时间填未来不会主动定时触发部署；到时间后还需一次新部署。
- 修改与删除会在下一次成功部署时同步。
- 文件名决定文章稳定网址；修改标题不会改网址，重命名文件会改网址。
- 构建失败时，查看 Netlify 日志。失败的构建通常不会替换上一个成功版本。

本地验证
npm ci
npm test
npm run build
输出在 dist。不要把 node_modules、dist 上传到 GitHub；由 Netlify 自动构建。

范围
本次完成文章发布展示；产品后台、询盘管理、邮件实际收取统计仍未包含。
已做自动化构建检查；尚未在你的 Netlify 账号进行实际部署和线上验收。
