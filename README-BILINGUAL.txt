飞尔康中英文恢复包

目标：恢复原部署中的中英文网页，同时保留当前 Decap 后台及文章构建。
尚未上传到 GitHub 或部署到正式站；请先建立新分支 bilingual-restore 再上传。

文件放置（必须保持目录层级）
- 根目录：8 个 HTML 页面、main.js、article-style.css、site-nav-fix.css。
- en 文件夹：8 个英文 HTML 页面。
- assets 文件夹：原站的 css、js、img、pdf。
- scripts 文件夹：build.mjs 和 test-bilingual.mjs。

不含 admin、content、package.json、package-lock.json、netlify.toml，保留仓库现有文件。
本包不是完整独立仓库，也不是 Netlify Drop 成品；不能删除原仓库后只上传本包。
不要将旧 Netlify 下载包直接覆盖正式站，否则会丢失新的后台与文章功能。

建议上传顺序
1. 在 GitHub 从最新 main 建立 bilingual-restore 分支。
2. 在根目录上传8个HTML、main.js与两个CSS文件，提交到该分支。
3. 在根目录拖入完整 en 文件夹。确认上传列表为 en/index.html 等，而非根目录 index.html。
4. 同样上传完整 assets 文件夹；确认路径为 assets/css/style.css 等。
5. 进入仓库现有 scripts 文件夹，仅上传本包 scripts 里的两个文件。
   确认路径为 scripts/build.mjs，不是 scripts/scripts/build.mjs。
6. 创建 PR：main ← bilingual-restore。先等待 Netlify 预览成功，再检查双语页面。
7. 预览确认后合并。正式站部署成功后再检查自定义域名。

检查清单
- 首页首次为中文；English打开 /en/index.html；中文返回 /index.html。
- 产品、关于、联系、方案、替代查询、型号检索页面可双向切换。
- 产品详情切换保留 model 参数；产品详情语言参数同步。
- 中文与英文页均有技术文章入口。
- /articles/沿用中文页头，后台登录与文章源目录继续保留。
- 文章本身仍按后台实际输入语言展示，没有自动翻译成英文。
  文章页的语言按钮返回对应语言首页，不会伪造英文版文章。
- 规格书的大小写路径已修正，旧assets资源路径恢复。

本地检查
npm ci
npm test
npm run build
node scripts/test-bilingual.mjs

已通过文章构建测试、8组页面32次语言切换模拟、本地链接检查。
浏览器实测：首页中文→英文→中文、产品详情携带型号切换、文章列表中文页头。
旧页面文案和产品参数按原部署恢复，本次未对其中技术参数作原厂规格书复核。
