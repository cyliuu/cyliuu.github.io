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

课程门户位于 [source/courses/cpp/](source/courses/cpp/)，当前展示 V1.02。更新时复制真实资源文件，使用站内相对路径，保留相对目录结构后执行构建检查。

网站保存的是课程资源副本，原始文件的修改不会自动同步。发布副本为 V1.02 裁剪版：仅保留项目 1 的完整材料（任务、案例、知识点、机制页、操作与思政）及课堂门户全部工单，项目 2–8 只保留任务名与案例名，未被引用的素材一并清理。本地 `V1.02视觉样稿/dist` 是完整原稿，请勿用它直接覆盖发布副本。

**视觉样稿只读**：`V1.02视觉样稿/dist` 正文中指向本机 iCloud `配图_V1.09` 的配图引用一律保持原样，同步不会改写原稿，本地用 `file://` 打开原稿时配图仍按原路径显示。脚本会把这些配图的真实文件复制到发布副本的 `assets/knowledge-figures/`，并且只把**发布副本**的 `knowledge-content.js`、`reading-data.js` 里的 `<img src>` 改写为站内相对路径。

维护裁剪版请使用 `--figures-only`：它按发布副本中实际出现的引用工作，不会用完整原稿覆盖裁剪版，也不会带入项目 2–8 的未引用素材。

```sh
python3 tools/sync-course.py "/你的/V1.02视觉样稿/dist" \
  --target source/courses/cpp --figures-only --check
python3 tools/sync-course.py "/你的/V1.02视觉样稿/dist" \
  --target source/courses/cpp --figures-only
```

使用 [增量同步脚本](tools/sync-course.py) 可完成资源复制、本机引用转换与按内容比对；只有显式传入 `--delete-obsolete` 才清理过期文件，`--preserve` 可保护指定目录。需要 Python 3.11 或更高版本，且目标目录必须显式指定：

```sh
# 先预检，不修改任何文件
python3 tools/sync-course.py "/你的/V1.02视觉样稿/dist" --check \
  --target source/courses/cpp
# 确认后同步，仅写入内容变化的文件
python3 tools/sync-course.py "/你的/V1.02视觉样稿/dist" \
  --target source/courses/cpp
```

没有内容变化时无需提交或重新部署。同步后仍应执行构建与必要的页面检查。

### 更新智能座舱系统应用开发课程门户

课程门户位于 [source/courses/smart-cockpit/](source/courses/smart-cockpit/)，当前发布 V1.03，按静态资源原样发布。课程首页与课堂门户共用 `portal.css` 和 `portal.js`，`assets/task-01-03/` 保存课堂任务中的硬件辨认图片，站内引用均为相对路径。

页面由「数字教材/智能座舱系统应用开发/V1.03视觉样稿」的 `build.mjs` 从备课材料生成，发布只取生成后的 `dist/`；样稿目录只读，任何内容修改须先重新生成 `dist/`，再执行发布。

同步与全量校验使用个人博客根目录的 `发布工具/publish.py`，`--target` 与 `--build-target` 均为 `courses/smart-cockpit`，线上地址为 https://cyliuu.github.io/courses/smart-cockpit/ 。具体命令见个人博客根目录 README。

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
