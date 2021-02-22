---
sidebar: auto
---

# JSP

## 快速开始

```jsp
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



### 条件判断



### 时间格式转换



## SpringMVC表单标签库

​	　**在使用 SpringMVC 的时候，我们可以使用 Spring 封装的一系列表单标签**，这些标签都可以访问到 `ModelMap` 中的内容。我们需要**先在 JSP 中声明使用的标签**。

```xml
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
```

### 常用标签

​	　使用 Spring MVC 的 `<form:form />` 标签主要有两个作用，第一是它会**自动的绑定**来自 Model 中的一个属性值到当前 `form` 对应的实体对象，默认是 `command` 属性，可以通过`modelAttribute`属性指定绑定的对象名；第二是支持提交表单时使用除 GET 和 POST 之外的其他方法进行提交，包括 DELETE 和 PUT 等。

​	　常用的标签有表单标签`<form:form />`、文本框`<form:input />`、密码框`<form:password />`、文本域`<form:textarea />`、隐藏字段域`<form:hidden />`等。特别注意，**model模型中必须有User对象实例**。

```jsp
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

```jsp
<form:radiobutton path="gender" value="M" label="男" />
<form:radiobutton path="gender" value="F" label="女" />
```

等同于：

```jsp
<input id="gender1" name="gender" type="radio" value="M" checked="checked"/>
<label for="gender1">男</label>

<input id="gender2" name="gender" type="radio" value="F"/>
<label for="gender2">女</label>
```



##### 单选框组

```jsp
<form:radiobuttons path="favoriteNumber" items="${numbersList}" />
```

等同于：

```jsp
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

```jsp
<form:checkbox path="receivePaper" /> 
```

等同于：

```jsp
<input id="receivePaper1" name="receivePaper" type="checkbox" value="true"/>
<input type="hidden" name="_receivePaper" value="on"/>
```



##### 复选框组

```jsp
<form:checkboxes items="${webFrameworkList}" path="favoriteFrameworks" />
```

等同于：

```jsp
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

​	　使用 `<form:select />`, `<form:option />`，`<form:options />` 标签来可以渲染一个 HTML 下拉列表，接下来以 `<form:select />`为例。

##### 单个下拉列表

```jsp
<form:select path="country">
   <form:option value="NONE" label="Select"/>
   <form:options items="${countryList}" />
</form:select>
```

等同于：

```jsp
<select id="country" name="country">
   <option value="NONE">请选择...</option>
   <option value="US">United States</option>
   <option value="CH">China</option>
   <option value="MY">Malaysia</option>
   <option value="SG">Singapore</option>
</select>
```



##### 下拉列表组

```jsp
<form:select path="skills" items="${skillsList}" multiple="true" />
```

等同于：

```jsp
<select id="skills" name="skills" multiple="multiple">
   <option value="Struts">Struts</option>
   <option value="Hibernate">Hibernate</option>
   <option value="Apache Wicket">Apache Hadoop</option>
   <option value="Spring">Spring</option>
</select>
<input type="hidden" name="_skills" value="1"/>
```

