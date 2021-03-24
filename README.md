# 学习笔记

## 快速开始

​	　项目采用[VuePress](https://vuepress.vuejs.org/zh/)框架编写[在线文档](https://sh086.github.io/funtl/)，首先，请确保你的 `Node.js 版本 >= 8.6`，并已经安装[Yarn](https://yarnpkg.com/)工具，最后执行如下命令即可完成项目**安装**并**启动**。

```shell
# 初始化项目文档
./startup.bat -init
# 启动命令
yarn dev
```

​	　启动完成后，即可通过<a>http://localhost:8001/funtl/</a>访问本项目。若想终止运行，请输入`ctrl + c` 。最后，您可以参考[这里](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)对文档的默认主题（包括导航栏、侧边栏）进行修改。修改完成后，可以通过如下命令，将修改结果部署到`GitHub Pages`上，部署原理请参照[这里](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)。

```shell
# 推送文件到GitHub Pages中
# -push :固定参数 
# git@github.com:sh086 :仓库的SSH地址
startup.bat -push git@github.com:sh086
```



​	　**特别注意**：项目中`repository`目录是练习代码，可以通过WebStom的`Make as Directory As` 为`Excluded`，这样就可以避免被IDEA索引该目录了。



## 参考资料

- [funtl在线文档](https://sh086.github.io/funtl/)
- [笔记Pdf文档]()

