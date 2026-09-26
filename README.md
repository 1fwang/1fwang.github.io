# Yifu Wang — Personal Website

视觉采用 [Astro Sphere / Mark Horn](https://github.com/markhorn-dev/astro-sphere) 的黑白主题、星空地平线和 Atkinson 字体，适配现有 Astro 学术主页。保留 Astro Sphere MIT 授权（LICENSE-ASTRO-SPHERE.txt）和原 DevPortfolio 工程授权（LICENSE.md）。内容来源：1fwang/1fwang.github.io。

## 本地运行

需要 Node.js 22。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`dist/` 为可直接托管的静态站点；搜索引擎无需执行 JavaScript 就能读取正文。论文搜索和主题切换使用少量 JavaScript；默认深色，支持浅色与本地偏好记忆，减少动态效果设置会关闭动画。

## 更新内容

- 首页与项目：`src/pages/index.astro`
- 论文和摘要：`src/data/publications.json`
- 新闻：`src/data/news.json`
- 简历 / 获奖 / 联系方式：`src/pages/cv.astro`、`awards.astro`、`contact.astro`
- 全站样式：`src/styles/global.css`
- SEO 与导航：`src/layouts/Layout.astro`
- 图片与论文文件：`public/images/`、`public/files/`

## 发布到原 GitHub Pages

1. 在原仓库创建改版分支，将本目录的源码文件（含 `.github`）放到仓库根目录。不要上传 `node_modules/`、`.astro/`、`dist/`。
2. 从原 Jekyll 工程移除冲突的旧构建配置；原版建议保留在旧分支。新版完整保留已有论文 PDF、BibTeX、图片及 原有 10 篇论文详情网址，并增加 15 篇 Scholar 研究条目。
3. 审核改版后合并至 `master` 或 `main`。
4. GitHub 仓库 Settings → Pages → Source 选择 **GitHub Actions**。
5. 已附 `deploy.yml`，推送后自动构建发布到 `https://1fwang.github.io/`。

发布目标：`https://1fwang.github.io/`。推送到 `master` 或 `main` 后，由 GitHub Actions 构建并部署。

## SEO

每页独立标题、描述、canonical、Open Graph、Twitter card；Person 和 ScholarlyArticle 结构化数据；论文 citation 元数据；sitemap.xml、robots.txt；静态 HTML、语义化标题、图片替代文本、移动端布局。SEO 基础已配置，搜索排名和收录时间无法保证。

## 内容修正与待核实

- 原简历 PDF 不存在，原 CV 页面是示例内容。新版根据真实首页信息重建 HTML 简历，可通过浏览器打印保存为 PDF。
- 原 SIGGRAPH Asia 2026 新闻链接与 RA-L 2025 链接相同；保留新闻文字，移除了疑似错误的 SIGGRAPH 链接，待提供正确链接。
- 原联系页的地址与当前工作经历不一致，新版只保留公开邮箱与学术/代码主页。
- 2026-09-26 已从 Google Scholar 导入全部 25 条记录（原有 10 条 + 新增 15 条），包含预印本、学位论文和技术报告。新增条目使用人工整理的研究概述，不冒充完整摘要。未提供的 PDF、BibTeX 和图片不显示空链接。
- 根据用户确认，当前身份改为 Vertex Lab / V2Fun.ai 创始成员兼 COO；腾讯作为过往经历，未猜测离职时间。
- TXR-SLAM 的年份来自挑战赛名称；Scholar 无出版日期，详情页明确说明。
- Scholar 数据为本次读取快照，没有配置自动同步。
- 首页 OpenGV 2.0 卡片已替换为 MAVIS。MAVIS、Sketch2Scene 使用原论文配图；v2fun.ai 保留品牌排版。
- 新增 14 张真实研究配图：13 张来自 arXiv，1 张来自 Hilti 技术报告。保留旧站 10 张论文图，共 24/25 条研究记录有配图。学位论文因 ANU 下载服务返回 503，暂保留文字封面。
- 图片经过 WebP 压缩，列表采用小图，详情页可打开大图，并附图注与来源；完整溯源见 FIGURE-SOURCES.md。

- Astro Sphere 视觉迁移保留全部研究网址、25 条研究记录、配图、新闻、SEO 与 GitHub Pages 流程。新增 V2Fun Research 项目，Maintainer 身份由本人确认。

## Visitor statistics

The original free Flag Counter map (IDql) is reused in the shared footer, preserving the same counter identity and existing service-side history. It now counts visits to all pages using the shared layout. Totals combine these pages; this is not a per-page analytics dashboard. Click the map to open https://info.flagcounter.com/IDql.

No GA4 ID, new account or paid Semrush service is required. The live counter image loads only on 1fwang.github.io, so localhost previews do not increment totals. Local preview displays a labeled placeholder and the statistics link. Image blocking or disabled JavaScript prevents counting. The free service may remove counters after 30 days without a new visitor; history remains subject to Flag Counter retention.
