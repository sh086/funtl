---
sidebar: auto
---

# 第一个SpringWeb应用

## Spring整合Web

启动容器时需要自动装载 `ApplicationContext`，Spring 提供的 `ContextLoaderListener` 就是为了自动装配 `ApplicationContext` 的配置信息

### 引入Jar包

```xml
<!-- Spring Web -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>4.3.17.RELEASE</version>
</dependency>
```



### web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">

    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring-context*.xml</param-value>
    </context-param>
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
</web-app>
```



## Bean装配方式

### SpringWeb配置



#### spring-context.xml

　在resource目录下新建Spring的配置文件`spring-context.xml`，将类的实例化工作交给 Spring 容器管理（`IoC`）。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--SpringContext必须在第一行，否则调用getBean时，applicationContext仍为空-->
    <bean id = "springContext" class="com.shooter.funtl.common.context.SpringContext"/>

    <!--DAO-->
    <bean id = "userDao" class="com.shooter.funtl.module.dao.impl.UserDaoImpl"/>

    <!--Service-->
    <bean id = "userService" class="com.shooter.funtl.module.service.impl.UserServiceImpl"/>

</beans>
```



#### SpringContext

 　　在`common.context`中新建`SpringContext`工具类，通过实现`ApplicationContextAware`接口的`setApplicationContext`方法初始化`ApplicationContext`，通过实现`DisposableBean`接口的`destroy`方法销毁`ApplicationContext`。

 　我们可以通过`类名`或者`beanId`调用`getBean`方法获取Spring容器中已经实例化的对象。

```java
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringContext implements ApplicationContextAware,DisposableBean{
    
    private static ApplicationContext applicationContext;

    /**
     * 容器停止时调用
     * */
    public void destroy() throws Exception {
        applicationContext = null;
    }

    /**
     * 将web.xml生成的ApplicationContext实例装载到applicationContext中
     * */
    public void setApplicationContext(ApplicationContext applicationContext) 
        							throws BeansException {
        SpringContext.applicationContext = applicationContext;
    }

    /**
     * 根据类获取实例
     * */
    public static <T> T getBean(Class<T> clazz){
        return applicationContext.getBean(clazz);
    }

    /**
     * 根据beanId获取实例
     * */
    public static <T> T getBean(String beanId){
        return (T)applicationContext.getBean(beanId);
    }
}
```



#### 装载Bean

 　接着，需要采用`SpringContext.getBean`方法，修改`LoginController`和`UserServiceImpl`中实例化对象的方式。以下分别展示了根据类获取实例 和 根据beanId获取实例的两种写法。特别的：项目已经使用`Spring-Web`修改了Bean的装配方式，原先`new`的方式已经不能正常使用了的。

```java
/**
* 根据类获取实例
* */
private UserService userService = SpringContext.getBean(UserServiceImpl.class);

/**
* 根据beanId获取实例
* */
 private UserDao userDao = SpringContext.getBean("userDao");
```



### SpringWeb注解