# SSLSocketFactory不支持于JDK 9+

# 问题描述

​        需要在新机器上部署预发布环境，首先使用`yum install java-1.8.0-openjdk*`命令自动安装JDK，安装成功后查询JDK版本：

```
[user@iZbp129lc2zntsce6uucvxZ ~]# java -version
openjdk version "1.8.0_262"
OpenJDK Runtime Environment (build 1.8.0_262-b10)
OpenJDK 64-Bit Server VM (build 25.262-b10, mixed mode)
```

​        接着，继续安装Tomcat，然后启动Tomcat，发现项目可以正常启动，最后调用HTTPS接口进行测试时，报如下错误：

```
java.lang.RuntimeException: java.lang.UnsupportedOperationException: clientBuilder.sslSocketFactory(SSLSocketFactory) not supported on JDK 9+
```



# 解决方案

**参考文章：**

- [clientBuilder.sslSocketFactory(SSLSocketFactory) not supported on JDK 9+](https://stackoverflow.com/questions/61458197/clientbuilder-sslsocketfactorysslsocketfactory-not-supported-on-jdk-9)

​        这个是因为代码中跳过HTTPS验证的语句在JDK9中已经不支持了，但是openjdk的8.0高版本会被错误的辨识为9.0，这个应该是openjdk8的一个BUG，所以造成了这个错误（但是JDK Oracle 8.x版本不会）。

```java{6}
public void init() {
		client = new OkHttpClient.Builder()
				.readTimeout(readTimeout, TimeUnit.SECONDS)
				.writeTimeout(writeTimeout, TimeUnit.SECONDS)
				.connectTimeout(connectTimeout, TimeUnit.SECONDS)
				.sslSocketFactory(SSLSocketClientUtils.getSSLSocketFactory())
				.hostnameVerifier(SSLSocketClientUtils.getHostnameVerifier())
				.build();
	}
```

​        只需降**低安装的openjdk8.x版本号**或者**使用JDK Oracle 8.x版本**就可以了。

```
[user@iZbp129lc2zntsce6uucvxZ bin]# ./java -version
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

