---
sidebar: auto
---

# 第一个Log4j日志文件

## JavaSE

### 引入Jar包

​	　首先，在`pom.xml`文件中引入log4j所需的`slf4j-log4j12`包。

```xml
 <dependency>
     <groupId>org.slf4j</groupId>
     <artifactId>slf4j-log4j12</artifactId>
     <version>1.7.25</version>
</dependency>
```



### log4j.properties

​	　然后，在`resources`在目录下新建`log4j.properties` 配置文件。

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



### 测试用例

​	最后，创建一个测试类，并测试日志输出效果，代码如下：

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyTest {
	//采用饿汉式单例模式，再系统启动时，必须将所有类的日志全部初始化完成
    public static final Logger logger = LoggerFactory.getLogger(MyTest.class);

    public static void main(String[] args) {
        logger.info("slf4j for info");
        logger.debug("slf4j for debug");
        logger.error("slf4j for error");
        logger.warn("slf4j for warn");

        String message = "Hello SLF4J";
        logger.info("slf4j message is : {}", message);
    }
}
```

​	项目运行成功后，项目根目录下出现出 `logs/log.log` 文件，控制台显示为：

```
2020-09-26 23:52:21,570 INFO [MyTest] - slf4j for info
2020-09-26 23:52:21,570 ERROR [MyTest] - slf4j for error
2020-09-26 23:52:21,570 WARN [MyTest] - slf4j for warn
2020-09-26 23:52:21,570 INFO [MyTest] - slf4j message is : Hello SLF4J
```



## Web容器

### 引入Jar包

​	　在JavaSE项目中，打印日志只需装载`slf4j-log4j12`，**但是在web容器中，还需要装载所有slf4相关的jar包才行**。

```xml
<!--Log4j-->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.25</version>
</dependency>
```

​	　或者，可以参考如下Log的Jar包。

```xml
 <!-- Log Begin -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>jcl-over-slf4j</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>jul-to-slf4j</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
<!-- Log End -->
```



### log4j.properties

​	　在`resources`资源目录下，新建`log4j.properties`日志配置文件。`log4j.appender.file.File`在JavaSE中默认当前路径是**当前项目主目录**，在Web容器中默认路径是**Tomcat下面的`bin`目录**，所以在Web中需要自定义该目录。

```properties
log4j.rootLogger=INFO, console, file

log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n

log4j.appender.file=org.apache.log4j.DailyRollingFileAppender
log4j.appender.file.File=E:/WorkPlace/funtl/myshop/logs/log.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.A3.MaxFileSize=1024KB
log4j.appender.A3.MaxBackupIndex=10
log4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n
```



### 打印日志

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public void test(String email, String passWord) {
	    logger.info("email：{} passWord:{}",email,passWord);
    }
}
```

