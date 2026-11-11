# Cyliuu's Learning Blog

记录学习、技术探索与实践的个人博客，也汇集课程入口和学习资源。

**[访问网站](https://cyliuu.github.io/)** · [博客](https://cyliuu.github.io/blog/) · [我的课程](https://cyliuu.github.io/courses/) · [学习资源](https://cyliuu.github.io/resources/)

## 网站内容

- **博客**：机器学习、计算机视觉与工程实践笔记，保留旧文章的发布日期和访问地址。
- **我的课程**：C++语言程序设计、智能座舱系统应用开发。
- **学习资源**：cppreference 中文、OpenCV、Scikit-learn 等参考资料。
- **关于**：个人介绍及社交链接。

## 本地运行

推荐 Node.js 22；最低版本为 20.19.0。

```sh
git clone --branch hexo https://github.com/cyliuu/cyliuu.github.io.git
cd cyliuu.github.io
npm ci
npm run server
```

浏览器打开 http://127.0.0.1:4000/。

| 命令 | 用途 |
| --- | --- |
| `npm run server` | 启动本地预览 |
| `npm run build` | 构建静态网站，输出至 `public/` |
| `npm run clean` | 清理构建缓存与生成文件 |

## 内容维护

| 内容 | 位置 |
| --- | --- |
| 首页 | [source/index.md](source/index.md) |
| 博客文章 | [source/_posts/](source/_posts/) |
| 我的课程 | [source/courses/index.md](source/courses/index.md) |
| 学习资源 | [source/resources/index.md](source/resources/index.md) |
| 关于 | [source/about/index.md](source/about/index.md) |
| 文章图片 | [source/uploads/](source/uploads/) |
| 站点配置 | [_config.yml](_config.yml) |
| 主题配置 | [_config.volantis.yml](_config.volantis.yml) |

文章使用 Markdown 编写，头部的 `date` 保存原始发布日期。普通换行会保留；编号内容使用标准有序列表，代码块和图片按所属列表项缩进。

数学公式支持行内 `$...$` 和独立公式 `$$...$$`，构建时通过 MathJax 转换为 SVG。

### 更新 C++ 课程门户

课程门户位于 [source/courses/cpp/](source/courses/cpp/)，默认展示 V1.02；V1.01 保存在其 V1.01 子目录。更新时复制真实资源文件，使用站内相对路径，保留相对目录结构后执行构建检查。

网站保存的是课程资源副本，原始文件的修改不会自动同步。该课程目录按静态资源原样发布，保留原有页面设计与交互。

使用 [增量同步脚本](tools/sync-course.py) 可一次完成资源复制、本机引用转换和过期文件清理，V1.01 归档不会被修改。需要 Python 3.11 或更高版本：

```sh
# 先预检，不修改任何文件
python3 tools/sync-course.py "/你的/V1.02视觉样稿/dist" --check
# 确认后同步，仅写入内容变化的文件
python3 tools/sync-course.py "/你的/V1.02视觉样稿/dist"
```

没有内容变化时无需提交或重新部署。同步后仍应执行构建与必要的页面检查。

## 发布流程

源代码维护在 `hexo` 分支。仅修改 README、docs 或 tools 不触发部署，必要时可在 Actions 页面手动运行。构建与部署使用独立任务，复用 npm 下载缓存；部署失败时只重试 Deploy，复用已验证的构建产物。涉及网站内容的推送后，[GitHub Actions](https://github.com/cyliuu/cyliuu.github.io/actions) 自动安装依赖、构建并部署至 GitHub Pages。

```sh
npm run build
git add .
git commit -m "说明本次修改"
git push origin hexo
```

部署配置见 [.github/workflows/pages.yml](.github/workflows/pages.yml)。仓库 **Settings → Pages → Source** 使用 **GitHub Actions**。版本信息写入 commit，无需单独创建 tag 或 Release。

## 技术基础

- Hexo 8.1.2
- Volantis 6.8.3
- Markdown-it 与 MathJax SVG 数学排版
- GitHub Actions 与 GitHub Pages
