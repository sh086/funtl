# OutOfMemoryError内存溢出

> 问题分析

​	　上海通关在申报时，网页突然打不开了，查看后台日志，发现报错：**nested exception is java. lang.OutOfMemoryError: Java heap space**，重启Tomcat再次申报时，仍回报这个错误。

> 解决方案

```java
//vi catalina.sh(旧的JAVA_OPTS配置)
JAVA_OPTS="-server -Xms2048m -Xmx4096m 
    -XX:PermSize=128M  -XX:MaxPermSize=1024m 
    -Djavax.servlet.request.encoding=UTF-8 
    -Dfile.encoding=UTF-8 -Duser.language=zh_CN -Dsun.jnu.encoding=UTF-8"
        
//springboot
nohup java -Xms512m -Xmx512m 
           -Dloader.path=lib/ -jar 
           -Dspring.profiles.active=pro 
           -Dserver.port=8090 ~/portal/cms-portal-*.jar 
           >~/portal/springboot.log 2>&1 &
```

​	　Xmx参数表示程序可以使用的最大内存容量为512m，在申报的时候使用的内存过大，GC来不及释放内存，导致内存空间不足而报错，将其调整为1024m或者2048m即可

​	　注：若重启Tomcat再次申报时，不再报错GC过载错误，这种情况说明内存是够的，需要做程序优化，及时将不再使用的类置为`null`，便于GC回收。

**参考资料：**

- [GC过载处理方式](https://www.cnblogs.com/yuhuameng/p/8288725.html)
- [JVM 堆内存和非堆内存](http://www.importnew.com/27645.html)

