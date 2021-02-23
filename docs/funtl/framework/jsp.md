---
sidebar: auto
---

# JSP

## 快速开始

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



## JSTL标签库



### 引入JSTL

```xml
<!-- 第一步： 需要引入JSTL的Jar包 -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>

<!-- 第二步： 需要在index.jsp的头部引入jstl表达式的支持。 -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```



### 条件判断

```xml
<c:if test="${message != null}">
   ${message}
</c:if>
```



### 时间格式转换

​	　使用JSTL标签库的时间格式转换，除了需要引入core标签外，还需要引入fmt标签。

```xml
<!-- 第一步： 需要继续引入JSTL的fmt标签库 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- 第二步： 指定时间格式 -->
<fmt:formatDate value="${user.createTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
```



## SpringMVC表单标签库

​	　**在使用 SpringMVC 的时候，我们可以使用 Spring 封装的一系列表单标签**，这些标签都可以访问到 `ModelMap` 中的内容。我们需要**先在 JSP 中声明使用的标签**。

```html
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
```



### 常用标签

​	　使用 Spring MVC 的 `<form:form />` 标签主要有两个作用，第一是它会**自动的绑定**来自 Model 中的一个属性值到当前 `form` 对应的实体对象，默认是 `command` 属性，可以通过`modelAttribute`属性指定绑定的对象名；第二是**支持 GET 、 POST  、DELETE 和 PUT 等方法提交表单**。

​	　常用的标签有表单标签`<form:form />`、文本框`<form:input />`、密码框`<form:password />`、文本域`<form:textarea />`、隐藏字段域`<form:hidden />`等。特别注意，**model模型中必须有User对象实例**。

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



### 复合标签

#### 单选框

##### 单个单选框

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



##### 单选框组

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



#### 复选框

##### 单个复选框

```html
<form:checkbox path="receivePaper" /> 
```

等同于：

```html
<input id="receivePaper1" name="receivePaper" type="checkbox" value="true"/>
<input type="hidden" name="_receivePaper" value="on"/>
```



##### 复选框组

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



#### 下拉列表

​	　使用 `<form:select />`, `<form:option />`，`<form:options />` 标签可以渲染一个 HTML 下拉列表，接下来以 `<form:select />`为例。

##### 单个下拉列表

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



##### 下拉列表组

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

