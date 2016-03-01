---
title: 使用Github+Hexo+Next搭建个人博客
date: 2016-01-28 21:40:00
category: 
- 技术
tags: 
- Github
---
# 配置开发环境
依次下载安装：
* [Node.js](https://nodejs.org/en/download/)
* [Git](http://git-scm.com/download/)

# 注册Github新建个人项目
1. 新建一个Repository，将Repository name改为yourname.github.io，然后点击Create repository
2. 在本地目标文件夹中右键选择Git Bash Here开始配置SSH-Key
``` bash
$ cd ~/.ssh
$ ssh-keygen -t rsa -C "your e-mail"
$ clip < ~/.ssh/id_rsa.pub
```
3. 然后将其添加到Github的Settings-SSH keys中，之后就可以暂时关掉Github的网页了

# 通过Hexo框架部署网站
1. 使用 git clone git@github.com:cyliuu/cyliuu.github.io.git 拷贝Repository到本地，然后在克隆后的本地文件夹内右键选择Git Bash Here开始初始化Hexo框架
``` bash
$ npm install -g hexo-cli
$ npm install
$ npm install hexo-deployer-git --save
```
2. 将_config.yml中倒数第二行的repo替换成你的
3. 做完以上的步骤，你的博客其实已经搭建好了，你只需要把一些个人信息替换掉就行了

# 更换Next主题
1. 由于我的模版里已经帮你下载好了，所以你的主要操作就是将theme/next/_config.yml中的个人信息替换成你的就行了
1. 你可以像我一样引入多说评论接口，便于和网友们交流
3. 接着再开启RSS订阅
``` bash
$ npm install hexo-generator-feed --save
```
4. 然后是生成本地网页
``` bash
$ hexo generate
$ hexo server
```
5. 通过 http://localhost:4000 本地接口访问网页，如果没有问题就可以发布了

# 使用Git上传和发布项目
1. 上传项目到缓存区
在本地文件夹内右键选择Git Bash Here，依次执行：
``` bash
$ echo "# yourname.github.io" >> README.md
$ git init
$ git add .
$ git commit -m "initial commit"
$ git remote add origin https://github.com/yourname/yourname.github.io.git
```
2. 新建分支，将项目由缓存区上传到Github中
``` bash
$ git branch hexo
$ git checkout hexo
$ git push -u origin hexo
```
3. 部署网站
``` bash
$ hexo deploy
```
4. 现在你可以通过 http://yourname.github.io/ 访问你的个人博客了
5. 日常管理
``` bash
$ git add .
$ git commit -m "..."
$ git push origin hexo
$ hexo generate --deploy
```
6. 本地数据丢失
``` bash
$ git clone git@github.com:yourname/yourname.github.io.git
$ npm install -g hexo-cli
$ npm install
$ npm install hexo-deployer-git
$ npm install hexo-generator-feed
```

# 参考资料
* [GitHub Pages + Hexo搭建博客](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/)
* [我的第一篇博客：GitHub+Hexo搭建博客过程](http://moyatao.github.io/2015/11/04/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E7%AF%87%E5%8D%9A%E5%AE%A2%EF%BC%9AGitHub-Hexo%E6%90%AD%E5%BB%BA%E8%BF%87%E7%A8%8B/#more)
* [Next主题](http://theme-next.iissnan.com/)