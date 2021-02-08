---
sidebar: auto
---

# 第一个BootStrap页面

## 快速开始

​	　编写一个简单的BootStrap静态页面，支持`手机`和`PC`访问。为了简便起见，本项目中`BootStrap预编译文件`和`JQuey预编译文件`均通过`CDN`采用线上资源。若您想采用本地加载的方式，可以参考[这里](https://sh086.github.io/funtl/guide/bootstrap.html#%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8)。

​	　首先，新建一个`bootstrap目录`，然后在该目录下新建`helloWord.html`文件，我们只需在`helloWord.html`中引入 `jquery.js`、`bootstrap.min.js` 和 `bootstrap.min.css` 的CDN地址，即可将**常规的 HTML 文件使用Bootstrap 的模板**。

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

​	　然后，即可通过浏览器打开`helloWord.html`。此时，`Hello world!`字样已经采用了BootStrap样式进行渲染显示了。



## 编写网址代码

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

