---
sidebar: auto
---

# Mybatis

MyBatis是基于 Java 的数据持久层框架，内部封装了 JDBC，使开发者只需关注 SQL 语句本身，而不用再花费精力去处理诸如注册驱动、创建 Connection、配置 Statement 等繁杂过程。

Hibernate 框架是提供了全面的数据库封装机制的 **“全自动”** ORM，即实现了 POJO 和数据库表之间的映射，以及 SQL 的自动生成和执行。

相对于此，MyBatis 只能算作是 **“半自动”** ORM。其着力点，是在 POJO 类与 SQL 语句之间的映射关系。也就是说，MyBatis 并不会为程序员自动生成 SQL 语句。具体的 SQL 需要程序员自己编写，然后通过 SQL 语句映射文件，将 SQL 所需的参数，以及返回的结果字段映射到指定 POJO。因此，MyBatis 成为了“全自动”ORM 的一种有益补充。



## Spring整合Druid

​	　Druid 是阿里巴巴开源平台上的一个项目，主要是为了扩展 JDBC 的一些限制，如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等。

### 引入Jar包

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.6</version>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.46</version>
</dependency>
```



### 数据库连接配置

​	　在`myshop.properties`中引入数据库连接配置。

```properties{3-6,9-11,14}
# JDBC
# MySQL 8.x: com.mysql.cj.jdbc.Driver
jdbc.driverClass=com.mysql.jdbc.Driver
jdbc.connectionURL=jdbc:mysql://56.56.56.165:3306/myshop?useUnicode=true&characterEncoding=utf-8&useSSL=false
jdbc.username=ywwl
jdbc.password=T#UsF4vXHq6GIhJ$

# JDBC Pool
jdbc.pool.init=1
jdbc.pool.minIdle=3
jdbc.pool.maxActive=20

# JDBC Test
jdbc.testSql=SELECT 'x' FROM DUAL

web.view.prefix=/WEB-INF/views/
web.view.suffix=.jsp
```



### spring-context-druid.xml

​	　新建`spring-context-druid.xml`配置文件，完成Spring和druid的整合。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 加载配置属性文件 -->
    <context:property-placeholder ignore-unresolvable="true" location="classpath:myshop.properties"/>

    <!-- 数据源配置, 使用 Druid 数据库连接池 -->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
        <!-- 数据源驱动类可不写，Druid默认会自动根据URL识别DriverClass -->
        <property name="driverClassName" value="${jdbc.driverClass}"/>

        <!-- 基本属性 url、user、password -->
        <property name="url" value="${jdbc.connectionURL}"/>
        <property name="username" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>

        <!-- 配置初始化大小、最小、最大 -->
        <property name="initialSize" value="${jdbc.pool.init}"/>
        <property name="minIdle" value="${jdbc.pool.minIdle}"/>
        <property name="maxActive" value="${jdbc.pool.maxActive}"/>

        <!-- 配置获取连接等待超时的时间 -->
        <property name="maxWait" value="60000"/>

        <!-- 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 -->
        <property name="timeBetweenEvictionRunsMillis" value="60000"/>

        <!-- 配置一个连接在池中最小生存的时间，单位是毫秒 -->
        <property name="minEvictableIdleTimeMillis" value="300000"/>

        <property name="validationQuery" value="${jdbc.testSql}"/>
        <property name="testWhileIdle" value="true"/>
        <property name="testOnBorrow" value="false"/>
        <property name="testOnReturn" value="false"/>

        <!-- 配置监控统计拦截的filters -->
        <property name="filters" value="stat"/>
    </bean>
</beans>
```



### 配置 Druid 监控中心

​	　在 `web.xml` 中配置 Druid 提供的 Servlet，可以通过http://localhost:8080/druid/index.html 查看Druid 提供的监控数据。

```xml
<!--配置 Druid 监控中心 -->
<servlet>
    <servlet-name>DruidStatView</servlet-name>
    <servlet-class>com.alibaba.druid.support.http.StatViewServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>DruidStatView</servlet-name>
    <url-pattern>/druid/*</url-pattern>
</servlet-mapping>
```



## Spring整合Mybatis

### 引入Jar包

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.2.8</version>
</dependency>
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.1</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>4.3.17.RELEASE</version>
</dependency>
```

### mybatis-config.xml

​	　新建`mybatis-config.xml`MyBatis 配置文件。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 全局参数 -->
    <settings>
        <!-- 打印 SQL 语句 -->
        <setting name="logImpl" value="STDOUT_LOGGING" />

        <!-- 使全局的映射器启用或禁用缓存。 -->
        <setting name="cacheEnabled" value="false"/>

        <!-- 全局启用或禁用延迟加载。当禁用时，所有关联对象都会即时加载。 -->
        <setting name="lazyLoadingEnabled" value="true"/>

        <!-- 当启用时，有延迟加载属性的对象在被调用时将会完全加载任意属性。否则，每种属性将会按需要加载。 -->
        <setting name="aggressiveLazyLoading" value="true"/>

        <!-- 是否允许单条 SQL 返回多个数据集 (取决于驱动的兼容性) default:true -->
        <setting name="multipleResultSetsEnabled" value="true"/>

        <!-- 是否可以使用列的别名 (取决于驱动的兼容性) default:true -->
        <setting name="useColumnLabel" value="true"/>

        <!-- 允许 JDBC 生成主键。需要驱动器支持。如果设为了 true，这个设置将强制使用被生成的主键，有一些驱动器不兼容不过仍然可以执行。 default:false  -->
        <setting name="useGeneratedKeys" value="false"/>

        <!-- 指定 MyBatis 如何自动映射 数据基表的列 NONE：不映射 PARTIAL：部分 FULL:全部  -->
        <setting name="autoMappingBehavior" value="PARTIAL"/>

        <!-- 这是默认的执行类型 （SIMPLE: 简单； REUSE: 执行器可能重复使用prepared statements语句；BATCH: 执行器可以重复执行语句和批量更新） -->
        <setting name="defaultExecutorType" value="SIMPLE"/>

        <!-- 使用驼峰命名法转换字段。 -->
        <setting name="mapUnderscoreToCamelCase" value="true"/>

        <!-- 设置本地缓存范围 session:就会有数据的共享 statement:语句范围 (这样就不会有数据的共享 ) defalut:session -->
        <setting name="localCacheScope" value="SESSION"/>

        <!-- 设置 JDBC 类型为空时,某些驱动程序 要指定值, default:OTHER，插入空值时不需要指定类型 -->
        <setting name="jdbcTypeForNull" value="NULL"/>
    </settings>
</configuration>
```



### spring-context-mybatis.xml

​	　新建`spring-context-mybatis.xml`配置文件，完成Spring和mybatis的整合。`ref="dataSource"`指的是**mybatis实例是从druid获取**的。

```xml{7}
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">

    <!-- 配置 SqlSession -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <!-- 用于配置对应实体类所在的包，多个 package 之间可以用 ',' 号分割 -->
        <property name="typeAliasesPackage" value="com.shooter.funtl.module.entity"/>
        <!-- 用于配置对象关系映射配置文件所在目录 -->
        <property name="mapperLocations" value="classpath:/mapper/**/*.xml"/>
        <property name="configLocation" value="classpath:/mybatis-config.xml"></property>
    </bean>

    <!-- 扫描 Mapper -->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.shooter.funtl.module.dao" />
    </bean>
</beans>
```





## 单表CURD操作

### INSERT新增

```java
/**新增用户信息**/
void insert(User user);
```

对应的Mapper：

```xml
<insert id="insert">
    INSERT INTO tb_user (username, password) VALUES (#{username},#{password})
</insert>
```



### DELETE删除

```java
/**删除用户信息**/
void deleteById(Long id);
```

对应的Mapper：

```xml
<delete id="delete">
    DELETE FROM tb_user WHERE id = #{id}
</delete>
```



### SELECT查询

#### 按条件查询

```java
/**按条件查询用户信息**/
User selectUserById(Long id);
```

对应的Mapper：

```java
<select id="selectUserById" resultType="User">
        SELECT
            user.id,
            user.username as userName,
            user.password as passWord
        FROM
            tb_user AS user
        <where>
            <if test="id != null and id != ''">
                AND user.id =  #{id}
            </if>
        </where>
</select>
```



#### 模糊查询

```java
/**按条件查询用户信息**/
List<User> selectUserByUserNameLike(String userNameLike);
```

对应的Mapper：

```xml
<select id="selectUserByUserNameLike" resultType="User">
    SELECT
    <include refid="userSelect" />
    FROM
    tb_user AS user
    <where>
        AND username LIKE CONCAT ('%', #{userNameLike}, '%')
    </where>
</select>
```



### UPDATE更新

```java
/**更新用户信息**/
void updateById(User user);
```

对应的Mapper：

```xml
<update id="updateById">
    UPDATE
   		tb_user
    SET
        username = #{userName},
        password = #{passWord}
    WHERE id = #{id}
</update>
```



## 动态SQL

