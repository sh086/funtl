---
sidebar: auto
---

# 第一个BootStrap页面

​	　编写一个简单的BootStrap静态页面，支持`手机`和`PC`访问。首先，新建一个`bootstrap目录`，然后在该目录下新建`helloWord.html`文件。

## 引入BootStrap

​	　在`helloWord.html`中引入 `jquery.js`、`bootstrap.min.js` 和 `bootstrap.min.css` 等已编译文件，可以将**常规的 HTML 文件使用Bootstrap模板**进行渲染，这些已编译文件的引入方式有 本地引用 和 通过[CDN](https://www.bootcdn.cn/)(内容分发网络)加载 两种方式。

### 本地引入资源

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

​	　然后，在`helloWord.html`中引入`bootstrap.min.css`、`bootstrap-theme.min.css`、`jquery-3.3.1.min.js`、`bootstrap.min.js`等文件，即可完成Bootstrap框架的引入。

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



​	　最后，即可通过浏览器打开`helloWord.html`。此时，`Hello world!`字样已经采用了BootStrap样式进行渲染显示了。



### CDN加载

​	　通过[CDN](https://www.bootcdn.cn/)(内容分发网络)加载 `jquery.js`、`bootstrap.min.js` 和 `bootstrap.min.css` 等已编译文件，原理和效果 是与本地引入是相同的。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bootstrap 模板</title>
    <!-- meta自适应屏幕:缩小浏览器宽、高时，里面的元素会自动适应屏幕排列显示-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入 Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
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
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <!-- 包括所有已编译的插件 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
</body>
</html>
```



## 编写网页

​	　此处，我们采用通过**CDN加载**资源的方式，编写一个简单的使用BootStrap渲染的网页。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bootstrap 模板</title>
    <!-- meta自适应屏幕:缩小浏览器宽、高时，里面的元素会自动适应屏幕排列显示-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入 Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
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
    <div class="container">
    <div class="row">
        <div class="col-md-10 col-xs-6">
            <h1>WelCome!</h1>
        </div>
        <div class="col-md-2 col-xs-6">
            <span class="glyphicon glyphicon-search"></span> 搜索
        </div>
    </div>
    <!-- 支持在台式电脑中展示两个相等的列的布局 -->
    <div class="row">
        <div class="col-md-3 col-xs-3">首页</div>
        <div class="col-md-3 col-xs-3">新闻资源</div>
        <div class="col-md-3 col-xs-3">本地生活</div>
        <div class="col-md-3 col-xs-3">我的</div>
    </div>
</div>

<div class="container">
    <table class="table active">
        <caption>网址访问统计</caption>
        <thead>
            <tr>
                <th>日期</th>
                <th>次数</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2021-01-18</td>
                <td>100次</td>
            </tr>
            <tr>
                <td>2021-01-19</td>
                <td>200次</td>
            </tr>
        </tbody>
    </table>
</div>

    <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <!-- 包括所有已编译的插件 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
</body>
</html>
```

