# 基本语法

# 快速开始

### 第一步：初始化项目

首先，新建一个`react-demo`目录，并运行初始化命令生成`package.json`

```
# 初始化项目
npm init -y
```

接着，还需要安装开发react必备的一些开发工具。

```
# 安装webpack 和 webpack-cli
npm i webpack webpack-cli -D
```

::: warning 注意

cnpm 是从国内下载镜像的，建议通过cnpm完成安装

:::

接着，在 `package.json` 里添加打包脚本:

```shell
"scripts": {
    "dev": "webpack"
 },
```

然后，新建`webpack.config.js`文件：

```shell
module.exports = {
    mode:'development' // development   production
}
```

最后，还需要补全项目的目录结构

```
├── dist    产品部署目录
│   ├── main.js    
├── src     源代码目录
│   ├── index.js    默认打包入口文件，必须新建
├── .gitignore
├── package.json
├── webpack.config.js
```

至此，运行`npm run dev`即可测试编译效果。



### 第二步：配置项目运行环境

##### webpack-dev-server -D



2、



### 第三步：HelloWord程序

（1）index.html代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页</title>
    <!--这个配置的需要是产品目录里面的入口文件-->
    <script src="../dist/main.js"></script>
</head>
<body>
    <h1>这是首页</h1>
</body>
</html>
```

ps：此处需要引入打包成功的js文件，不可引用源码中的js文件

（2）index.js 代码

```js
console.log('HelloWord！')
```





## 核心概念

### 虚拟DOM

​        DOM是**浏览器**中的概念，用JS对象来表示 页面上的元素，并提供了操作 DOM 对象的API；React中的虚拟DOM（Virtual Document Object Model）是**框架**中的概念，是程序员为了**实现页面中DOM 元素的高效更新**，手动**用JS对象来模拟 页面上的 DOM 和 DOM嵌套关系**。

**1、虚拟DOM如何实现页面的高效更新？**

​        采用虚拟DOM和DOM进行页面初始加载的效率一样的。但是若浏览器中内存中的数据发生变更，使用DOM重新渲染页面的时候会存在性能问题；虚拟DOM在更新页面的时候，会先获取内存中新旧两颗虚拟DOM树，然后根据Diff算法进行对比，只重新渲染发生变更的元素或者组件（**按需渲染**），从而减少不必要的DOM操作，实现页面中DOM 元素的高效更新。

**2、只有对比算法的高效，才能实现页面的高效更新**

​       逐层对比新旧两棵虚拟DOM树，称为**Tree Diff**， 当整颗DOM逐层对比完毕，则所有需要被按需更新的元素，必然能够找到。

​       每一层中进行组件级别的对比，称为 **Component Diff**，如果对比前后，组件的类型相同，则**暂时**认为此组件不需要被更新；如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上。

​       在进行组件对比的时候，如果两个组件类型相同，则需要进行 元素级别的对比，这叫做 **Element Diff**。

### 库和框架

- library（库）：小而巧的是库，只提供了特定的API；优点就是 船小好掉头，可以很方便的从一个库切换到另外的库；但是代码几乎不会改变；
- Framework（框架）：大而全的是框架；框架提供了一整套的解决方案；所以，如果在项目中间，想切换到另外的框架，是比较困难的；

### 组件化方面

​       模块化是指从**代码**的角度来进行分析的，把一些可复用的代码，抽离为单个的模块，便于项目的维护和开发；组件化是指从 **UI 界面**的角度 来进行分析的，组件由样式、结构、行为三者构成，可以把一些可复用的UI元素，抽离为单独的组件，随着项目规模的增大，手里的组件越来越多，很方便就能把现有的组件拼接为一个完整的页面；

​       React中有组件化的概念，但是并没有像vue一样可以通过 组件模板文件创建组件，React中样式、结构、行为都是以JS来表现的，因此要学习React，JS要合格；ES6 和 ES7 （async  和 await） 要会用；

### Webpack 新特性

-----此处需要画一个图-----

​        webpack是基于Node构建的，所以webpack支持所以Node API和语法，对于Node不支持的语法，webpack也不支持，而NodeJS是一个基于Chrome V8引擎的JavaScript运行环境，所以只需要检查该语法是否在Chrome支持，就可判断能不能在webpack中运行。

​      Node并不能支持es6所有的语法，对于Node未支持的语法，可以通过Bable来进行转换。





# Config配置

​        webpack 4.x 不仅打包性能有所提升，还提供了约定大于配置的概念，目的是为了尽量减少 配置文件的体积。

## package.json

​        文件package.json位于根目录下，用于配置项目相关配置的

```shell
# package.json在项目中的位置
├── package.json
```

### scripts

#### dev

​        `dev`选项用于配置react项目的启动脚本，

```shell
"scripts": {
    "dev": "webpack" 
 },
```

### devDependencies

​        在npm安装插件完成后，会在devDependencies中自动添加相关插件的信息，如`"webpack": "^4.43.0"。

```shell
"devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
}
```



## webpack.config.js

​       文件webpack.config.js位于根目录下，用于完成webpack相关配置的

```shell
# webpack.config.js在项目中的位置
├── webpack.config.js
```

### 打包出入口

​        webpack  4.x中 默认打包的入口是`src -> index.js`，默认打包的输出文件是`dist -> main.js`，但也可以使用entry来手动设置入口文件为main.js。

```js
module.exports = {
    entry: 'main.js'
}
```

### mode 选项

​        webpack  4.x 中 新增了 mode 选项(为必选项)，可选的值为：development 和 production，development表示开发环境，production表示生产环境，配置生产环境可以自动去除多余空格、换行符等字符来压缩代码

```js
module.exports = {
    mode:'development'
}
```



# Plugin插件

## npm

```shell
# 示例命令
npm i webpack webpack-cli -D
# 参数说明
i :  install 
D：
```

​      npm 是从国外下载镜像的，速度会比较慢，建议通过cnpm完成相关插件的安装，cnpm的使用方法和npm一样，可以使用如下命令进行安装：

```shell
#cnpm 安装命令
npm i cnpm -g
```

## webpack

```shell
# 安装webpack
npm i webpack -D
```

webpack4.X后，不能直接使用webpack进行打包，需要直接使用npx webpack进行打包，或者通过在 `package.json` 里添加打包脚本，然后执行npm run dev进行打包。

```shell
"scripts": {
    "dev": "webpack"
 },
```

## webpack-cli

```shell
# 安装webpack-cli
npm i webpack-cli -D
```

## webpack-dev-server

```shell
# 安装webpack-dev-server
npm i webpack-dev-server -D
```



```shell
"scripts": {
    "dev": "webpack-dev-server"
 },
```



## html-webpack-plugin

```shell
# 安装html-webpack-plugin
npm i html-webpack-plugin -D
```





## 附录

### VS快捷键

① !+tab ：快速生成html基本网页

② html标签 + tab：补全标签，如h1+tab，a+tab

