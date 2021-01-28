##### Spring生态

## Spring

​	　Spring 是一个分层的 `Java SE/EE full-stack`(一站式)轻量级开源框架，主要作用就是降低企业应用开发的复杂性问题（**解耦**）。Spring 的核心是**控制反转**（`IoC`）和**面向切面编程**（`AOP`）。



**参考资料：**

- [第一个Spring应用程序](../demo/第一个Spring应用程序.md)




### Spring简介

​	　Spring 由 20 多个模块组成，它们可以分为 **数据访问/集成**（Data Access/Integration）、**Web**、**面向切面编程**（AOP, Aspects）、**应用服务器设备管理**（Instrumentation）、**消息发送**（Messaging）、核心容器（Core Container）和**测试**（Test）。

![2_spring_01](./images/monolith/2_spring_01.png)

​	　Spring具有**非侵入式**的特性，Spring 框架的 API 不会在业务逻辑上出现，即业务逻辑是 POJO。由于业务逻辑中没有 Spring 的 API，所以**业务逻辑可以从 Spring 框架快速的移植到其他框架**， 即与环境无关。

​	　Spring 作为一个**容器**，可以管理对象的生命周期、对象与对象之间的依赖关系。可以通过配置文件，来定义对象，以及设置与其他对象的依赖关系。



### 面向切面编程AOP

​	　**面向切面编程**（`AOP`，`Aspect Orient Programming`），是对面向对象编程思想 （`OOP`）的补充。Spring 提供了面向切面编程的丰富支持，允许通过分离应用的**业务逻辑**与**系统级服务**进行开发。**应用对象只完成业务逻辑**，并不负责系统级服务。

​	　根据功能的不同，系统中的代码可以分为 **主业务逻辑** 与 **系统级业务逻辑** 两类。`主业务代码`间逻辑联系紧密，有具体的专业业务应用场景，复用性相对较低；`系统级业务`相对功能独立，没有具体的专业业务应用场景，主要是为主业务提供系统级服务，如日志、安全、事务、数据库连接等，**复用性强**。

```
如：JDBC来链接数据库：
	1、加载去掉（系统级业务逻辑）
	2、创建连接（系统级业务逻辑）
	3、开启事务（系统级业务逻辑）
	4、SQL操作 （主业务逻辑：银行业务、保险业务、电商业务、物流业务）
	5、提交事务（系统级业务逻辑）
	6、释放连接（系统级业务逻辑）
```

​	　我们可以把日志、安全、事务管理、数据库连接等服务理解成一个“**切面**”，那么以前这些服务一直是直接写在业务逻辑的代码当中的，这有两点不好：首先**业务逻辑不纯净**；其次这些服务被很多**业务逻辑反复使用**，完全可以剥离出来做到复用。 **AOP 可以把这些服务剥离出来形成一个“切面”**，然后将“切面”由 Spring 容器统一动态的“织入”到业务逻辑中，让业务逻辑能够享受到此“切面”的服务。



### 控制反转IoC

​	　**控制反转**（`IoC`，`Inversion of Control`）就是将**对象控制权**由`程序代码`**反转**到`外部容器`，创建被调用者的实例不是由调用者（程序代码）完成，而是由 `外部容器` 实现对对象的统一装配和管理。IoC 思想实现方式有 **依赖注入**和 **依赖查找** 两种。

​	　**依赖查找**（Dependency Lookup，`DL`），容器提供回调接口和上下文环境给组件，程序代码则需要提供具体的查找方式。比较典型的是依赖于 JNDI 系统的查找。

​	　**依赖注入** (Dependency Injection，`DI`) 是指在对象初始化时不等对象请求，Spring容器就主动创建对象实例，并将依赖注入到调用者中。

​	　依赖注入和 依赖查找 两种方法都是将对象控制权交于外部容器统一装配和管理，区别在于当对象初始化时，依赖查找需要**程序主动调用**容器提供的回调接口，从容器中查找所需要的依赖。

​	　而依赖注入在对象初始化时不等对象请求，Spring容器就主动创建对象实例，并将依赖注入到调用者中。**Spring 依赖对调用者与被调用者几乎没有任何要求**，完全支持 POJO 之间依赖关系的管理。**依赖注入是目前最优秀的解耦方式**。



## SpringWeb

​	　Spring中装配JavaBean的方式有两类，第一类通过**Spring在JavaSE容器中装配JavaBean**，这一类不常用；第二类是通过**SpringWeb在Web容器中装配JavaBean**，该类型有两种方法，第一种是通过**XML配置**的方式，第二种是通过**注解**的方式，目流行的是**通过SpringWeb注解的方式装配JavaBean**。

​	　注解方式 **配置方便、直观**，但以硬编码的方式写入到了 Java 代码中，其修改是需要重新编译代码的。XML 配置方式的最大好处是，对其所做修改**无需编译代码**，只需重启服务器即可将新的配置加载。若注解与 XML 同用，**XML 的优先级要高于注解**。



**实战：**

- [v1.4 SpringWeb]()




### Spring整合Web

​	　在JavaSE中是通过`main`方法完成`ApplicationContext`初始化的，参见[这里](../demo/第一个Spring应用程序.md)。但是在Web容器中，入口是`web.xml`，所以，要将`ApplicationContext`的初始化工作交于`web.xml`。

```xml
<!--spring-context*.xml配置了JavaBean与Class的对应关系-->
<context-param>
   <param-name>contextConfigLocation</param-name>
   <param-value>classpath:spring-context*.xml</param-value>
</context-param>
<!--Spring提供的ContextLoaderListener在启动容器时会自动装配ApplicationContext的配置信息-->
<listener>
   <listener-class>
       org.springframework.web.context.ContextLoaderListener
    </listener-class>
</listener>
```



### 基于配置装配

#### spring-context.xml

​	　在Spring的配置文件`spring-context.xml`中配置bean与class之间的对应关系，将类的实例化工作交给 Spring 容器管理（`IoC`）。特别的，class不能是抽象类或者接口。

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
    
</beans>
```

​	　`<bean/>`元素用于定义一个实例对象，**一个实例对应一个 bean 元素**；`id`属性是 Bean 实例的**唯一标识**，程序通过 id 属性访问 Bean，Bean 与 Bean 间的依赖关系也是通过 id 属性关联的；`class`属性指定该 Bean 所属的类，注意这里**只能是类**，不能是接口。



#### SpringContext 

 　　`SpringContext`工具类通过实现`ApplicationContextAware`接口的`setApplicationContext`方法初始化`ApplicationContext`，通过实现`DisposableBean`接口的`destroy`方法销毁`ApplicationContext`。 

 　　Bean 的装配方式可以通过`类名`或者`beanId`调用`getBean`的方式从容器获取指定的 Bean 实例，容器首先会调用 Bean 类的无参构造器，创建空值的实例对象。

```java
package com.shooter.funtl.common.context;

import org.apache.commons.lang3.Validate;
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
        Validate.validState(applicationContext != null,"ApplicationContext 未被成功加载！");
        return applicationContext.getBean(clazz);
    }

    /**
     * 根据beanId获取实例
     * */
    public static <T> T getBean(String beanId){
        Validate.validState(applicationContext != null,"ApplicationContext 未被成功加载！");
        return (T)applicationContext.getBean(beanId);
    }
}
```



### 基于注解装配

#### spring-context.xml

​	　采用SpringWeb注解的方式装配JavaBean，无需每次当Class新增的时候就在`spring-context.xml`中新增一个bean的XML配置，而是采用了**自动扫描目录下注解**的方式装配JavaBean。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

    <!--开始Spring注解-->
    <context:annotation-config />
    <!--配置组件扫描器，用于在指定的基本包中扫描注解-->
    <context:component-scan base-package="com.shooter.funtl"/>

</beans>
```



#### bean实例装配注解

（1）指定class与bean之间关系的注解

```
- @Component：用于 Component 或者 class 实现类进行注解
- @Repository：用于对 DAO 实现类进行注解
- @Service：用于对 Service 实现类进行注解
- @Controller：用于对 Controller 实现类进行注解

- @Scope：该注解的 value 属性用于指定作用域，默认为 singleton。
```

​	　Spring 提供的这个四个注解除语义外，功能上是等效注解，只有例如SpringDataJpa等会对不同的注解做出区别。特别的，这些注解都具有默认属性 `value` 用于指定该 bean 的 id 值。

```java
/**
* 相当于
* <bean id = "userDao" 
*    class="com.shooter.funtl.module.dao.impl.UserDaoImpl" scope="singleton"/>
* */
@Scope("singleton")
@Repository
public class UserDaoImpl implements UserDao {}


/**
* 相当于
* <bean id = "userDaoTest" 
*    class="com.shooter.funtl.module.dao.impl.UserDaoImpl" scope="prototype"/>
* */
@Scope("prototype")
@Repository(value = "userDaoTest")
public class UserDaoImpl implements UserDao {}
```



（2）Bean 的实例化注入

```java
- @Autowired: 按类型自动装配，可用于属性、方法或者构造器。
- @Resource: 按beanId(可由name属性指定)自动装配，可用于属性、方法或者构造器。
- @Value：该注解的 value 属性用于指定要注入的值，可用于属性、方法或者构造器。
- @PostConstruct：在方法上使用 @PostConstruct 相当于初始化，会在构造器之前调用。
```

​	　`@Autowired`和`@Resource`用于属性的**自动装配**，`@Value`和`@PostConstruct`用于**属性的初始化**。示例代码如下：

```java
/**
* 根据类型装配
*/
@Autowired
private Student student;

/**
* 根据beanId装配
*/
@Resource(name="student")
private Student student;

/**
* 初始化student类的userName和passWd属性
*/
@Component
public class Student implements Serializable{

    @Value("userName")
    private String userName;
    
    private String passWd;
    
    @Value("passWd")
    public void setPassWd(String passWd) {
        this.passWd = passWd;
    }
}
```



### 容器中 Bean的作用域

​	　当通过 Spring 容器创建一个 Bean 实例时，不仅可以完成 Bean 的实例化，还可以通过 scope 属性，为 Bean 指定特定的作用域。

#### Bean 5 种作用域

- `singleton`：**单态模式（默认）**，Bean 实例在容器被创建时即被装配好了。
- `prototype`：**原型模式**，Bean 实例在代码中使用该 Bean 实例时才进行装配的。
- `request`：对于每次 HTTP 请求，都将会产生一个不同的 Bean 实例。
- `session`：对于每个不同的 HTTP session，都将产生一个不同的 Bean 实例。
- `global session`：每个全局的 HTTP session 对应一个 Bean 实例。典型情况下，仅在使用 portlet 集群时有效，多个 Web 应用共享一个 session。一般应用中，global-session 与 session 是等同的。

**注意事项**：对于 scope 的值 request、session 与 global session，只有在 Web 应用中使用 Spring 时，该作用域才有效。



#### 作用域实现方式

​	　需要在类上使用注解 `@Scope`，其 value 属性用于指定作用域。默认为 singleton。

```java
/**
* 方式一 ：基于配置的装配方式可以通过 scope属性 指定
*/
<bean id = "userDao" 
    class="com.shooter.funtl.module.dao.impl.UserDaoImpl" scope="prototype"/>

/**
* 方式二 ：基于注解的装配方式可以通过 @Scope注解 指定
*/
@Scope("singleton")
public class Student{
}
```





## SpringMvc



## Mybatis

## Spring事物管理