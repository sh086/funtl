# BootStrap

​	　Bootstrap是由Twitter开发的一个 `CSS/HTML` 框架。Bootstrap 不仅提供**网格系统**布局，还提供了**移动设备优先**、**响应式设计**的 CSS 样式，使Bootstrap 能够**自适应**于台式机、平板电脑和手机。

**参考资料：**

- [BootStrap中文网](https://www.bootcss.com/)
- [Bootstrap | 菜鸟教程](https://www.runoob.com/bootstrap/bootstrap-tutorial.html)
- [BootCdn资源](https://www.bootcdn.cn/)




## 快速入门

​	　首先在[BootStrap官网](https://v3.bootcss.com/getting-started/#download)上下载Bootstrap 的**已编译版本**和在[JQuery官网](https://jquery.com/download/)下载JQuery**已编译版本**。由于Bootstrap4及以上不支持IE8，最低支持IE9，考虑到国内行情，我们下载`bootstrap-3.3.7`版本以支持IE8。

​	　接着，将下载好的预编译的`bootstrap `和`jquery-3.3.1.min.js`放入到`asserts`目录下的`plugins`中，其中CSS和JS目录存放的是**已编译**的CSS和JS（`bootstrap.*`）*以及**已编译压缩**的CSS和JS*（`bootstrap.min.*`）； font目录里面存放的是Glyphicons 字体图标(`.ttf`微软字体、`.woff`苹果字体)，这是一个可选的 Bootstrap 主题。

```html
BootStrap
------asserts
---------css			css目录
---------images			图片目录
---------js				js目录
---------plugins
------------bootstrap            下载的BootStrap文件
------------jquery-3.3.1.min.js  下载的JQuey文件
------helloWord.html	欢迎页
```

​	　最后，在`helloWord.html`中引入 `jquery.js`、`bootstrap.min.js` 和 `bootstrap.min.css` 文件，用于让一个**常规的 HTML 文件变为使用了 Bootstrap 的模板**。
::: tip 提示
也可通过[CDN](https://www.bootcdn.cn/)(内容分发网络)加载线上的bootstrap与jquery已编译文件
:::

​	　至此，BootStrap已经安装完毕，通过`Chrome`打开，即可看到带有浏览器中带BootStrap主题的`HelloWord`字样。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bootstrap 模板</title>
    <!-- meta自适应屏幕:缩小浏览器宽、高时，里面的元素会自动适应屏幕排列显示-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入 Bootstrap -->
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/plugins/bootstrap/css/bootstrap-theme.min.css"
          type="text/css" rel="stylesheet">

    <!-- HTML5 Shiv 和 Respond.js 用于让 低于IE9的(IE8) 支持 HTML5元素和媒体查询 -->
    <!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js">
    </script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js">
    </script>
    <![endif]-->
</head>
<body>
    <h1>Hello world!</h1>

    <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
    <script src="assets/plugins/jquery-3.3.1.min.js"></script>
    <!-- 包括所有已编译的插件 -->
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
```

> 说明 ： `<!--[if lt IE 9]><![endif]-->`这个不是注释



## 网格系统

​	　在传统的网页布局方式中，`table 表格布局`可以快速的定位元素位置，但是必须表格里的内容全部加载完才能显示，不利于用户体验。 `div+css布局`解决了**从上至下、按需加载**的问题，但是不利于编写复杂页面。

​	　Bootstrap 包含了一个**响应式**的、**移动设备优先**的、不固定的**流式网格系统**（Grid System）。`网格`既可以用于组织内容，又可以**让网站易于浏览，并降低用户端的负载**，是一种用于快速创建一致的布局和有效地使用 HTML 和 CSS 的方法。



### 移动设备优先

​	　Bootstrap 采用**移动设备优先**策略，布局使用**渐进增强、向上兼容**的方式，从小屏幕设备（比如移动设备、平板电脑）开始，然后扩展到大屏幕设备（比如笔记本电脑、台式电脑）上的**组件**和**网格**。

::: warning 设备布局兼容方式

① 渐进增强，向上兼容：先完整的加载内容，再根据内核版本，逐层增强特效

② 优雅降级，向下兼容：先满足最新的浏览器需求，在逐层降低

:::

（1）优先展示内容

​	　Bootstrap 优先展示内容，在保障内容可以正确显示的情况下，再根据**浏览器对Bootstrap 样式的支持情况**，引入所需的样式进行展示。

**（2）优先设计更小的宽度**

​	　Bootstrap 基础的 CSS 是移动设备优先，**媒体查询** 是针对于平板电脑、台式电脑设计的。

**（3）随着屏幕大小的增加而添加元素**

​	　响应式网格系统随着`屏幕`或`视口`（viewport）尺寸的增加，系统会自动分为**最多 12 列**，但是可以少于12列的。

![1](./images/monolith/21_bootstrap_1.png)



### 网格系统布局

​	　网格系统不仅包含了用于**简单的布局选项**的`预定义类`，还包含了用于生成更多语义布局的功能强大的`LESS混合类`。

（1）基本的网格结构

​	　网格系统通过一系列**包含内容的行和列**来创建页面布局，通常使用`行`来创建列的水平组，行必须放置在 `.container` class 内，以便获得适当的对齐（alignment）和内边距（padding），否则将占据页面一整行。`内容`应该放置在`列`内，且唯有列可以是行的直接子元素。

```html
<div class="container">
    <!-- 支持在台式电脑中展示两个相等的列的布局 -->
    <div class="row">
        <div class="col-md-6" style="border: 1px solid red">左 </div>
        <div class="col-md-6" style="border: 1px solid red">右 </div>
    </div>
    <!-- 支持在台式电脑中展示两个不相等的列的布局 -->
    <div class="row">
        <div class="col-md-6" style="border: 1px solid yellow">左 </div>
        <div class="col-md-4" style="border: 1px solid yellow">右 </div>
    </div>
</div>
```

​	　Bootstrap可以针对**不同的设备**自适应支持**相同的样式**，如下代码支持在台式电脑(`col-md-`)和手机(`col-xs-`)中展示两个相等的列的布局。

```html
<div class="container">
    <div class="row">
        <div class="col-md-6 col-xs-6" style="border: 1px solid red">左 </div>
        <div class="col-md-6 col-xs-6" style="border: 1px solid red">右 </div>
    </div>
</div>
```



（2）网格选项

​	　Bootstrap 支持的屏幕设备有手机、笔记本电脑、台式电脑等，可以配合简单的布局选项的`预定义类` 和 `媒体查询`，展示自定义样式。下表总结了 Bootstrap 网格系统如何跨多个设备工作：

| 说明         | 超小设备手机（< 768px）       | 小型设备平板电脑（≥ 768px）   | 中型设备台式电脑（≥ 992px）   | 大型设备台式电脑（≥ 1200px）  |
| ------------ | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| 网格行为     | 一直是水平的                  | 以折叠开始，断点以上是水平的  | 以折叠开始，断点以上是水平的  | 以折叠开始，断点以上是水平的  |
| 最大容器宽度 | None (auto)                   | 750px                         | 970px                         | 1170px                        |
| Class 前缀   | `.col-xs-`                    | `.col-sm-`                    | `.col-md-`                    | `.col-lg-`                    |
| 列数量和     | 12                            | 12                            | 12                            | 12                            |
| 最大列宽     | Auto                          | 60px                          | 78px                          | 95px                          |
| 间隙宽度     | 30px（一个列的每边分别 15px） | 30px（一个列的每边分别 15px） | 30px（一个列的每边分别 15px） | 30px（一个列的每边分别 15px） |



### 媒体查询

​	　Bootstrap中`@media`媒体查询能在**不同的条件**下使用**不同的样式**，使页面在**不同在终端设备**下达到**不同的渲染效果**。

```css
@media 媒体类型 and (媒体特性) {你的样式}
```

#### 媒体类型与特性

​	　媒体类型在 CSS2 中是一个常见属性，可以通过**媒体类型**对不同设备**指定不同样式**。**Screen**、**All**、**Print** 为最常见的三种媒体类型。

```
- ALL：所有设备
- Braille：盲人用点子法触觉回馈设备
- Embossed：盲文打印机
- Handheld：便携设备
- Print：打印用纸或打印预览视图
- Projection：各种投影设备
- Screen：电脑显示器
- Speech：语音或音频合成器
- Tv：电视机类型设备
- Tty：使用固定密度字母栅格的媒介，比如电传打字机和终端
```

​	　媒体查询中的大部分接受 `min/max` 前缀，用来表达其逻辑关系，表示应用大于等于或小于等于某个值的情况。没有特殊说明都支持 `min/max`。

```
- width：Length 渲染界面的宽度
- height：Length 渲染界面的高度
- color：整数，表示色彩的字节数
- color-index：整数， 色彩表中的色彩数
- device-aspct-ratio：整数/整数，宽高比例
- device-height：Length 设备屏幕的输出高度
- device-width：Length 设备屏幕的输出宽度
- grid（不支持 `min/max` 前缀）：整数，是否基于栅格的设备
- monochrome：整数，单色帧缓冲器中每像素字节数
- resolution：分辨率（dpi/dpcm）分辨率
- scan（不支持 `min/max` 前缀）：Progressive interlaced，Tv 媒体类型的扫描方式
- orientation（不支持 `min/max` 前缀）：Portrait//landscape 横屏或竖屏
```



#### 使用媒体查询

（1）最大宽度

​	　`max-width` 是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。如：

```css
<!--当屏幕小于或等于 480px 时，页面中包含类样式 `.ads` 的元素都将被隐藏-->
@media screen and (max-width:480px) {
 .ads {
   display:none;
  }
}
```

（2） 最小宽度

​	　`min-width` 与 `max-width` 相反，指的是媒体类型大于或等于指定宽度时，样式生效。

```css
<!--当屏幕大于或等于 900px 时，页面中包含类样式 `.wrapper` 元素的宽度为 980px。-->
@media screen and (min-width: 900px) {
    .wrapper {width: 980px;}
}
```



#### 多个媒体特性的使用

​	　媒体查询可以使用关键词 `and` 将多个媒体特性结合在一起。也就是说，一个媒体查询中可以包含 0 到多个表达式，表达式又可以包含 0 到多个关键字，以及一种媒体类型。

```css
<!--当屏幕在 600px~900px 之间时，`body` 的背景色渲染为 `#F5F5F5` ，如下所示：-->
@media screen and (min-width:600px) and (max-width:900px) {
  body {background-color:#F5F5F5;}
}
```



> 备注：CSS引入的优先级采用**就近原则**，依次是行内样式、内联样式、外联样式，`@import`可以强制将样式生效。



## 布局组件

### 表格

（1）表格元素

​	　Bootstrap 提供了一个清晰的创建表格的布局。下表列出了 Bootstrap 支持的一些表格元素：

| 标签        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| `<table>`   | 为表格添加基础样式                                           |
| `<thead>`   | 表格标题行的容器元素（`<tr>`），用来标识表格列               |
| `<tbody>`   | 表格主体中的表格行的容器元素（`<tr>`）                       |
| `<tr>`      | 一组出现在单行上的表格单元格的容器元素（`<td>` 或 `<th>`）   |
| `<td>`      | 默认的表格单元格                                             |
| `<th>`      | 特殊的表格单元格，用来标识列或行（取决于范围和位置）。必须在 `<thead>` 内使用 |
| `<caption>` | 关于表格存储内容的描述或总结                                 |

> 说明：书写表格的时候一定采用包含`<thead>`和`<tbody>`的标准的表格，才能使插件生效



（2） 基本的表格

​	　如果您想要一个只带有内边距（padding）和水平分割的基本表格，请添加 class样式 `.table`即可。如下面实例所示：

```html
<div class="container">
    <table class="table">
        <caption>基本的表格布局</caption>
        <thead>
        <tr>
            <th>名称</th>
            <th>城市</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Tanmay</td>
            <td>Bangalore</td>
        </tr>
        <tr>
            <td>Sachin</td>
            <td>Mumbai</td>
        </tr>
        </tbody>
    </table>
</div>
```



（3）表格样式

​	　除了 `.table`基本表格样式，BootStrap还提供了各式各样的用于**表格**、**行**或者**单元格**的样式，具体样式如下所示：

① 下表样式可用于表格中

| 类                 | 描述                                              |
| ------------------ | ------------------------------------------------- |
| `.table`           | 为任意 `<table>` 添加基本样式 (只有横向分隔线)    |
| `.table-striped`   | 在 `<tbody>` 内添加斑马线形式的条纹 ( IE8 不支持) |
| `.table-bordered`  | 为所有表格的单元格添加边框                        |
| `.table-hover`     | 在 `<tbody>` 内的任一行启用鼠标悬停状态           |
| `.table-condensed` | 让表格更加紧凑                                    |



② 下表的类可用于表格的行或者单元格

| 类         | 描述                             |
| ---------- | -------------------------------- |
| `.active`  | 将悬停的颜色应用在行或者单元格上 |
| `.success` | 表示成功的操作                   |
| `.info`    | 表示信息变化的操作               |
| `.warning` | 表示一个警告的操作               |
| `.danger`  | 表示一个危险的操作               |



### 字体图标

​	　字体图标是使用**字体格式**的字形做成了图标。Bootstrap 捆绑了 200 多种字体格式的字形，在 fonts 文件夹内可以找到字体图标。除此之外，还可以使用如下其它字体图标库：

- [阿里巴巴矢量图标库](http://www.iconfont.cn/)

- [SocialIcons](http://www.socicon.com/chart.php)

- [LineAwesome](https://icons8.com/line-awesome)

- [FontAwesome](http://fontawesome.dashgame.com/)


​	　字体图标是矢量图标，用于形象展示功能的含义，增强用户体验，放大和缩写都不会使字体图标失真。字体图标分为**线性图标**和**填充图标**。

```css
<span class="glyphicon glyphicon-search"></span>
```


