---
sidebar: auto
---

# JSP

## 快速开始

### HelloWord

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>HelloWord</title>
    </head>
    <body>
        HelloWord
    </body>
</html>
```



### 模板页面

```xml
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
    <head>
        <title>我的商城 | 控制面板</title>
        <jsp:include page="../includes/header.jsp"/>
    </head>
    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">

            <jsp:include page="../includes/nav.jsp"/>

            <jsp:include page="../includes/menu.jsp"/>

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        控制面板
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
                        <li class="active">控制面板</li>
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">

                </section>
            </div>

            <jsp:include page="../includes/copyright.jsp"/>

        </div>
        <jsp:include page="../includes/foot.jsp"/>
    </body>
</html>
```



## JSTL标准标签库

```xml
<!-- 需要引入JSTL的Jar包 -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>
```



### 核心标签

```xml
<!-- 引入JSTL的core标签库 -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<!-- 使用案例 -->
<c:if test="${message != null}">
   ${message}
</c:if>
```



### 格式化标签

```xml
<!-- 引入JSTL的fmt标签库 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- 使用案例： 指定时间格式 -->
<fmt:formatDate value="${user.createTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
```



### 自定义标签



```
<%@ tag pageEncoding="UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ attribute name="title" type="java.lang.String" required="false" description="模态框的标题" %>
<%@ attribute name="message" type="java.lang.String" required="false" description="模态框的消息" %>
<%@ attribute name="opts" type="java.lang.String" required="true" description="操作类型：info 信息提示 confirm 确认对话框" %>
<%@ attribute name="url" type="java.lang.String" required="false" description="调转链接，主要用于确认对话框" %>

<div class="modal fade" id="modal-default">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">${title == null ? "提示" : title}</h4>
            </div>
            <div class="modal-body">
                <p id="modal-message">${message}&hellip;</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
                <button id="btnModalOk" type="button" class="btn btn-primary">确认</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script>
    $(function () {
        $("#btnModalOk").bind("click",function () {
            <c:if test="${opts != 'confirm'}">
                $("modal-default").modal("hide")
            </c:if>
            <c:if test="${opts == 'confirm'}">
                console.log("${url}")
            </c:if>
        })
    });
</script>
```



## SpringMVC表单标签库

​	　**在使用 SpringMVC 的时候，我们可以使用 Spring 封装的一系列表单标签**，这些标签都可以访问到 `ModelMap` 中的内容。我们需要**先在 JSP 中声明使用的标签**。

```html
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
```



### 文本标签

​	　使用 Spring MVC 的 `<form:form />` 标签主要有两个作用，第一是它会**自动的绑定**来自 Model 中的一个属性值到当前 `form` 对应的实体对象，默认是 `command` 属性，可以通过`modelAttribute`属性指定绑定的对象名；第二是**支持 GET 、 POST  、DELETE 和 PUT 等方法提交表单**。特别注意，**model模型中必须有user对象实例**。

```xml
<form:form action="form.do" method="post" modelAttribute="user">
  <table>
      <%--相当于<input id="id" name="id" type="hidden" value="1000"/>--%>
      <form:hidden path="id" value="1000"/>
      <tr>
       	   <%--相当于<input id="name" name="name" type="text" value="${user.name}"%>--%>
           <td>姓名:</td><td><form:input path="name"/></td>
      </tr>
      <tr>
            <%--相当于<input id="passWord" name="passWord" type="password" 
    											value="${user.passWord}"/>--%>
            <td>密码:</td><td><form:password path="passWord" />
      </tr>
      <tr>
          <%--相当于<textarea id="address" name="address" 
    								value="${user.address}" rows="5" cols="30">--%>
          <td>详细地址:</td><td><form:textarea path="address" rows="5" cols="30" />
      </tr>
   </table>
</form:form>
```



### 单选框

#### 单个单选框

```html
<form:radiobutton path="gender" value="M" label="男" />
<form:radiobutton path="gender" value="F" label="女" />
```

等同于：

```html
<input id="gender1" name="gender" type="radio" value="M" checked="checked"/>
<label for="gender1">男</label>

<input id="gender2" name="gender" type="radio" value="F"/>
<label for="gender2">女</label>
```



#### 单选框组

```html
<form:radiobuttons path="favoriteNumber" items="${numbersList}" />
```

等同于：

```html
<span>
    <input id="favoriteNumber1" name="favoriteNumber" type="radio" value="1"/>
    <label for="favoriteNumber1">1</label>
</span>
<span>
    <input id="favoriteNumber2" name="favoriteNumber" type="radio" value="2"/>
    <label for="favoriteNumber2">2</label>
</span>
```



### 复选框

#### 单个复选框

```html
<form:checkbox path="receivePaper" /> 
```

等同于：

```html
<input id="receivePaper1" name="receivePaper" type="checkbox" value="true"/>
<input type="hidden" name="_receivePaper" value="on"/>
```



#### 复选框组

```html
<form:checkboxes items="${webFrameworkList}" path="favoriteFrameworks" />
```

等同于：

```html
<span>
    <input id="favoriteFrameworks1" name="favoriteFrameworks" type="checkbox" value="Spring MVC" checked="checked"/>
    <label for="favoriteFrameworks1">Spring MVC</label>
</span>
<span>
    <input id="favoriteFrameworks2" name="favoriteFrameworks" type="checkbox" value="Struts 1"/>
    <label for="favoriteFrameworks2">Struts 1</label>
</span>
<input type="hidden" name="_favoriteFrameworks" value="on"/>
```



### 下拉列表

​	　使用 `<form:select />`, `<form:option />`，`<form:options />` 标签可以渲染一个 HTML 下拉列表，接下来以 `<form:select />`为例。

#### 单个下拉列表

```html
<form:select path="country">
   <form:option value="NONE" label="Select"/>
   <form:options items="${countryList}" />
</form:select>
```

等同于：

```html
<select id="country" name="country">
   <option value="NONE">请选择...</option>
   <option value="US">United States</option>
   <option value="CH">China</option>
   <option value="MY">Malaysia</option>
   <option value="SG">Singapore</option>
</select>
```



#### 下拉列表组

```html
<form:select path="skills" items="${skillsList}" multiple="true" />
```

等同于：

```html
<select id="skills" name="skills" multiple="multiple">
   <option value="Struts">Struts</option>
   <option value="Hibernate">Hibernate</option>
   <option value="Apache Wicket">Apache Hadoop</option>
   <option value="Spring">Spring</option>
</select>
<input type="hidden" name="_skills" value="1"/>
```

