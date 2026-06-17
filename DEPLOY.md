# 长期部署说明

这是一个纯静态站点，可直接部署到 GitHub Pages、Netlify 或 Vercel。

## 推荐方案

1. GitHub Pages
   - 把 `interactive_public` 作为仓库根目录或单独站点目录。
   - 推送到 GitHub 后，在仓库设置里开启 Pages。

2. Netlify
   - 直接拖拽 `interactive_public` 文件夹到 Netlify 部署页面。
   - 或使用 Git 集成自动部署。

3. Vercel
   - 导入 Git 仓库后选择静态站点。
   - 不需要额外构建步骤。

## 注意

- 站点根目录应是 `interactive_public`。
- `index.html`、`app.js`、`topic.js`、`styles.css`、`topic.css` 都在根目录。
- `textbooks/` 保存教材 PDF。
- `assets/textbook-covers/` 保存封面图。
