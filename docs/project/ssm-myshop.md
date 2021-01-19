# MyShop实战

::: tip 技术栈

开发环境：JDK8、Tomcat8

前端框架：AdminLTE模板

后台框架：Servlet + MVC

:::

## 项目初始化

​	　首先在IDEA的`File` -> `New Project`中选择`Maven`，然后根据提示新建`ssm-myshop`项目 。新建完成后，接着需要完成**配置文件初始化**，以及引入**前端框架`AdminLT`**。

```text
----src：源码目录
--------main
-------------java：Java代码
-------------------com.shooter.myshop
----------------------common   公共组件
----------------------dao  	   数据模型层
----------------------service  业务逻辑层
----------------------web      前端控制器
-------------resources：资源目录
-------------------application.properties   SpringBoot配置文件
-------------------log4j.properties         日志配置文件
-------------------spring-context.xml       Spring配置文件
--------webapp
-------------assets: AdminLTE模板
-------------------bower_components
-------------------plugins
-------------------css
-------------------img
-------------------js
-------------WEB-INF
-------------------web.xml:web配置
-------------index.html:欢迎页面
--------test
-------------java：测试用例
----pom.xml：pom配置文件
----.gitignore：git忽略名单
----工程名.iml
```



### pom

#### spring

```xml
 <dependency>
     <groupId>org.springframework</groupId>
     <artifactId>spring-context</artifactId>
     <version>4.3.17.RELEASE</version>
 </dependency>
 <dependency>
     <groupId>javax.servlet</groupId>
     <artifactId>javax.servlet-api</artifactId>
     <version>4.0.1</version>
     <scope>provided</scope>
 </dependency>
```



#### mybatis

```xml

```



#### common

```xml
 <dependency>
     <groupId>junit</groupId>
     <artifactId>junit</artifactId>
     <version>4.12</version>
     <scope>test</scope>
 </dependency>
 <dependency>
     <groupId>org.slf4j</groupId>
     <artifactId>slf4j-log4j12</artifactId>
     <version>1.7.25</version>
 </dependency>
```



### resources

​	　在`resource`资源目录中，新建`web.xml`配置文件 、日志文件 `log4j.properties` 、Spring配置文件`spring-context.xml`。

#### log4j.properties

```properties
log4j.rootLogger=INFO, console, file

log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n

log4j.appender.file=org.apache.log4j.DailyRollingFileAppender
log4j.appender.file.File=logs/log.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.A3.MaxFileSize=1024KB
log4j.appender.A3.MaxBackupIndex=10
log4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n
```



#### spring-context.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

</beans>
```



### webapp

​	　在`src/main`目录下新建`webapp`目录，用于存放网络资源。`webapp`具体目录结构如下：

```
webapp
---assets
---WEB-INF
------web.xml
```



#### web.xml

​	　新建`web.xml`完成后，还需要再设置`Web Resource Directory`（参考[这里](https://sh086.github.io/funtl/guide/quickstart.html#project-struct)的`Modules`中的第(2)点）。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    
</web-app>
```



#### AdminLTE

​	**AdminLTE**是一个基于BootStrap的管理模板，首先[下载](https://github.com/ColorlibHQ/AdminLTE/releases)`AdminLTE-2.4.18`版本，下载完成后解压文件，得到如下目录：

```
bower_components 浏览器组件(需引入到项目）
dist 源码
-----css(需引入到项目）
-----img(需引入到项目）
-----js (需引入到项目）
documentation 文档
pages demo示例
plugins 插件(需引入到项目）
```

​	将`bower_components`、`plugins` 和 dist目录下面的`css`、`img`、`js`共5个目录，全部复制到项目的`assets`目录下，即可完成AdminLTE的安装。

**参考资料：**

- [GitHub仓库](https://github.com/ColorlibHQ/AdminLTE/)
- [AdminLTE文档](https://adminlte.io/)
- [Google Fonts加速](https://sb.sb/blog/css-cdn/)
- [Google 字体库](https://cdn.baomitu.com/index/fonts)




## 用户登录

### 登录页面

​	模仿AdminLTE中Examples的Login页面，编写登录页面。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>我的商城 | 登录</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="assets/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="assets/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="assets/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="assets/css/AdminLTE.min.css">
  <!-- iCheck checkbox样式-->
  <link rel="stylesheet" href="assets/plugins/iCheck/square/blue.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.loli.net/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="">我的商城</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">欢迎管理员登录</p>

    <form action="#" method="post">
      <div class="form-group has-feedback">
        <input type="email" class="form-control" placeholder="邮箱">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="密码">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox"> 记住我
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">登入</button>
        </div>
        <!-- /.col -->
      </div>
    </form>
    <a href="#">忘记密码？</a><br>

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<!-- jQuery 3 -->
<script src="assets/bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- iCheck -->
<script src="assets/plugins/iCheck/icheck.min.js"></script>
<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  });
</script>
</body>
</html>
```


