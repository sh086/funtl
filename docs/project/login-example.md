---
sidebar: auto
---

# 简单的登录功能

**目录：**

- v1.0 使用Servlet + JSP实现简单的登录功能

- v1.1 使用BootStrap重写登录页面

- v1.2 引入基础框架

  - v1.2.1 加入Junit测试单元
  - v1.2.2 加入Log4j测试代码

- v1.3 使用Spring全家桶

  - v1.3.1 通过Spring配置实例化对象
  - v1.3.2 通过Spring注解实例化对象

  ​

## v1.0 Servlet + JSP

### 新建Maven项目

#### 目录结构

​	　在IDEA中选择`File` -> `New Project`中选择`Maven`，然后根据提示新建Maven项目，并完成如下文件结构的建立：

```text
src\main 目录
--java：Java代码
----com.shooter.funtl                           _
------common                 ---公共组件          |
------config                 ---配置模块          |-→ 代码目录
------module                 ---业务逻辑         _⌋
---------entiry                        ---数据实体
----------User.java
--------dao                            ---数据访问层
----------UserDao.java
----------impl
------------UserDaoImpl.java
--------service                        ---业务逻辑层
----------UserService.java
----------impl
------------UserServiceImpl.java
--------web                            ---前端控制层
----------controller
------------LoginController.java

--webapp： 视图层
----WEB-INF
------web.xml         ---请求路径映射
----index.jsp         ---登录页面
----fail.jsp          ---登录失败页面
----success.jsp       ---登录成功页面
```



#### 引入Jar包

```xml
<!--引入servlet包-->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope>
</dependency>
<!--引入lombok包-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <scope>provided</scope>
    <version>1.16.18</version>
</dependency>
```



### 编写业务代码

#### 数据模型

```java
@Data
public class User {
    /**登录ID*/
    private String loginId;
    /**登录密码*/
    private String loginPwd;
    /**用户名*/
    private String userName;
}
```



#### 数据访问层

（1）UserDao

```java
public interface UserDao {
    User login(String loginId, String loginPwd);
}
```

（2）UserDaoImpl

```java
public class UserDaoImpl implements UserDao {
    public User login(String loginId, String loginPwd) {
        User user = null;
        //先根据loginId查询出用户信息，再比对loginPwd
        //不可直接根据loginId和loginPwd直接查询，防止SQL注入
        if("admin@qq.com".equals(loginId)){
            if("admin".equals(loginPwd)){
                user = new User();
                user.setLoginId("admin@qq.com");
                user.setLoginPwd("admin");
                user.setUserName("TEST");
            }
        }
        return user;
    }
}
```



#### 业务逻辑层

（1）UserService

```java
public interface UserService {
    User login(String loginId, String loginPwd);
}
```

（2）UserServiceImpl

```java
public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();
    //调用数据访问层中login的实现
    public User login(String loginId, String loginPwd) {
        return userDao.login(loginId,loginPwd);
    }
}
```



#### 前端控制层

（1）LoginController

```java
public class LoginController extends HttpServlet {

    private UserService userService = new UserServiceImpl();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
        			throws ServletException, IOException {
        String loginId = req.getParameter("loginId");
        String loginPwd = req.getParameter("loginPwd");
		//验证用户名、密码是否正确
        User user = userService.login(loginId, loginPwd);
        //登录失败的处理
        if(user == null){
            req.getRequestDispatcher("/fail.jsp").forward(req,resp);
        }
        //登录成功的处理
        else {
            req.getRequestDispatcher("/success.jsp").forward(req,resp);
        }
    }
}
```



（2）配置web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee 
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <display-name>login-demo</display-name>

    <servlet>
        <servlet-name>LoginController</servlet-name>
        <servlet-class>
            com.shooter.funtl.web.controller.LoginController
        </servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>LoginController</servlet-name>
        <url-pattern>/login</url-pattern>
    </servlet-mapping>
</web-app>
```

​	　**特别注意**：配置`web.xml`完成后，还需要再设置`Web Resource Directory`（参考[这里](https://sh086.github.io/funtl/guide/quickstart.html#project-struct)的`Modules`中的第(2)点）。

### JSP登录页面

#### 欢迎页面

​	　`index.jsp`是Servlet项目默认的欢迎页面，无需在`web.xml`中显示配置，项目部署成功后，访问根路径会直接跳转到`index.jsp`页面。

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录</title>
</head>
<body>
    <form action="/login" method="post">
        用户名：<input name="loginId" type="text"/><br/>
        密码：<input name="loginPwd" type="password"/><br/>
        <input type="submit" value="登录"/>
    </form>
</body>
</html>
```



#### 调转页面

​	　success.jsp 和 fail.jsp登录跳转页面，登录失败的页面和这个是一样的，这里略过。

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录</title>
</head>
<body>
    登录成功
</body>
</html>
```



### 测试运行

​	　最后，参考[Tomcat部署](https://sh086.github.io/funtl/guide/quickstart.html#tomcat%E9%83%A8%E7%BD%B2)笔记，完成Tomcat的项目配置后，即可打开浏览器访问 <a href ="http://localhost:8080" target="view_window"> http://localhost:8080</a>

![login_1](./images/login_1.png)



## v1.1 BootStrap

### 引入AdminLTE模板

​	　**AdminLTE**是一个基于BootStrap的管理模板，首先[下载](https://github.com/ColorlibHQ/AdminLTE/releases)`AdminLTE-2.4.18`版本，下载完成后解压文件，得到如下目录：

```
bower_components 浏览器组件(需引入到项目）
dist 源码
-----css(需引入到项目）
-----img(需引入到项目）
-----js (需引入到项目）
documentation 文档
pages demo 示例
plugins 插件(需引入到项目）
```

​	　接着在`webapp`目录下新建`assets`目录，然后将AdminLTE`需引入到项目`的5个目录，全部复制到项目的`assets`目录下，即可使用AdminLTE模板。



### 编写登录页面

​	接着，我们需要模仿AdminLTE中`pages\examples\login.html`页面，编写登录页面，测试AdminLTE 模板是否引入成功 。特别注意，修改Google Font的地址请参考[这里](https://sb.sb/blog/css-cdn/)。

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

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

        <form action="/login" method="post">
            <div class="form-group has-feedback">
                <input type="email" class="form-control" name="loginId" placeholder="邮箱">
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" name="loginPwd" placeholder="密码">
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



### 测试运行

![login_2](./images/login_2.png)



## v1.2 引入基础框架

### Junit单元测试

### Log4j日志文件



## v1.3 Spring生态

### Spring配置版

### Spring注解版

### SpringWeb



