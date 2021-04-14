# PKIX构建失败导致SSLHandshake异常

> 问题描述

​        在本地启动Tomcat项目的时候，console中报如下错误，但是，使用Navicat连接MySQL数据库是可以连接上的。

```properties
2020-11-24 13:51:29.976 ERROR 6336 --- [reate-204484400] com.alibaba.druid.pool.DruidDataSource   : create connection SQLException, url: jdbc:mysql://56.56.56.165:3306/customerinfo?characterEncoding=utf8&useSSL=true, errorCode 0, state 08S01
com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure
The last packet successfully received from the server was 137 milliseconds ago.  The last packet sent successfully to the server was 128 milliseconds ago.

Caused by: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```



> 解决方案

​        将`&useSSL=true`去掉，重启Tomcat即可

```properties
# url: jdbc:mysql://56.56.56.165:3306/customerinfo?characterEncoding=utf8&useSSL=true
url: jdbc:mysql://56.56.56.165:3306/customerinfo?characterEncoding=utf8
```



> 原因分析

​        这个是因为是运维在中文作为MySQL升级，将MySQL从5.7.2升级到了5.7.3 