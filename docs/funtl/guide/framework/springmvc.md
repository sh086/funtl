---
sidebar: auto
---

# SpringMVC



## SpringMVC简介

​	　**Spring MVC** (或称Spring Web MVC)属于**Spring**中的**展示层框架**，其提供了**MVC模式**使得Web应用在输入逻辑、业务逻辑和 UI 逻辑实现**松散耦合**。Spring MVC通过**DispatcherServlet组件类**处理所有的 HTTP 请求和响应， 具体的工作流如下图所示：

![ssm_dispatcherservlet](./images/ssm_dispatcherservlet.jpg)

​	　　`DispatcherServlet`分发器在接收到 HTTP 请求后，会先查询 `HandlerMapping` 调用相应的`Controller`。**Controller**根据请求的 `GET` 或 `POST` 方法调用相应的**服务方法**，服务方法将基于定义的业务逻辑设置模型数据，并将**模型**和**逻辑视图名称**返回给 DispatcherServlet。DispatcherServlet 通过**ViewResolver**（视图解析器） 获取请求的**定义视图**。最后，DispatcherServlet 将模型数据传递到最终的**视图**，并在浏览器上呈现。

​	　特别的， `HandlerMapping`，`Controller` 和 `ViewResolver` 是 `WebApplicationContext` 的一部分，它是普通 ApplicationContext 的扩展，带有 Web 应用程序所需的一些额外功能。



## Spring整合MVC

### 引入Jar包

```xml
<!--Spring MVC-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>4.3.17.RELEASE</version>
</dependency>
```

​	　特别的，`spring-webmvc`已经依赖了`spring-web` 、`spring-context`等Jar包。所以，被依赖的这些Jar包可以删除，但是为了表明所使用的框架，建议保留。

### web.xml



## SpringMVC控制器



## SpringMVC拦截器

