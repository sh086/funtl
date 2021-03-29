# SkyWalking



**参考资料：**

- [基于docker部署skywalking实现全链路监控](https://cloud.tencent.com/developer/article/1695427)
- [Docker 部署 SkyWalking OAP & UI(含登录页面)](https://www.jianshu.com/p/56bd580b3aa5)



## 简介

## 快速开始

1、部署elasticsearch

```shell
# 拉取elasticsearch镜像
docker pull elasticsearch:7.5.1
# 修改系统参数
vi /etc/sysctl.conf
vm.max_map_count=262144
sysctl -p
# 创建持久化目录
mkdir -p /home/docker/elasticsearch
# 运行elasticsearch
docker run --name elasticsearch \
--restart=always \
-p 9200:9200 -p 9300:9300 \
-v /data/elasticsearch/data:/home/docker/elasticsearch/data \
-v /data/elasticsearch/logs:/home/docker/elasticsearch/logs \
-e "discovery.type=single-node" \
-e ES_JAVA_OPTS="-Xms512m -Xmx512m" \
-d elasticsearch:7.5.1
# 等待30秒左右，查看docker日志，如果有出现如下日志，说明启动成功了
"publish_address {172.17.0.2:9300}, bound_addresses {0.0.0.0:9300}"
```

特别说明：

```
① 使用最新版本的elasticsearch和skywalking-oap-server镜像，启动会有问题的
② -e "discovery.type=single-node" ：设置为单节点
③ -e ES_JAVA_OPTS="-Xms512m -Xmx512m" ：测试环境下设置ES的初始内存和最大内存，否则导致过大启动不了
```



2、部署skywalking

```shell
# 拉取镜像
docker pull apache/skywalking-oap-server:6.6.0-es7
docker pull apache/skywalking-ui:6.6.0

#启动Skywalking-oap
docker run --name skywalking-oap --restart always \
-p 1234:1234 -p 11800:11800 -p 12800:12800 -d \
--link elasticsearch:elasticsearch \
-e TZ=Asia/Shanghai \
-e SW_STORAGE=elasticsearch \
-e SW_STORAGE_ES_CLUSTER_NODES=elasticsearch:9200 \
apache/skywalking-oap-server:6.6.0-es7

#启动SkyWalking UI
docker run --name skywalking-ui -d \
-p 9898:8080 --restart always \
--link skywalking-oap:skywalking-oap  \
-e TZ=Asia/Shanghai \
-e SW_OAP_ADDRESS=skywalking-oap:12800 \
apache/skywalking-ui:6.6.0
```



3、应用接入

​	　去[官网](https://archive.apache.org/dist/skywalking/6.6.0/apache-skywalking-apm-6.6.0.tar.gz)下载skywalking的完整tar包解压，把里面的`agent文件夹`整个传到被监控应用所在的服务器上，并配置被监控应用的启动参数，如：

```shell
# -javaagent: 指定agent包位置
# -Dskywalking.agent.service_name: 指定服务名
# -Dskywalking.collector.backend_service: 指定skywalking oap地址
-javaagent:/home/crm-api/agent/skywalking-agent.jar -Dskywalking.agent.service_name=CRM测试 -Dskywalking.collector.backend_service=172.16.205.117:11800
```

（1）若项目采用jar部署，需要采用如下示例命令：

```sh
java -javaagent:/home/crm-api/agent/skywalking-agent.jar -Dskywalking.agent.service_name=crmest -Dskywalking.collector.backend_service=172.16.205.117:11800 -jar spring-boot.jar
```

（2）若项目采用Tomcat部署，需要修改catalina.sh

```sh
CATALINA_OPTS="$CATALINA_OPTS -javaagent:/home/crm-api/agent/skywalking-agent.jar -Dskywalking.agent.service_name=CRM测试 -Dskywalking.collector.backend_service=172.17.0.4:11800"
export CATALINA_OPTS
```



4、验证安装

访问http://172.16.205.117:9898/即可看到kywalking

因为机制为懒加载，所以当只有你调用该java接口时，页面上才有显示。所以第一次访问时，数据是没有的。



## 使用教程

### 登录页面

​	　官网提供的skywalking-ui不具有登录页面，可以运行如下版本的镜像，使用有登录页面的skywalking，但是，该版本不是官网提供的版本，不建议使用。参考[这里](https://www.jianshu.com/p/56bd580b3aa5)。

```shell
docker run -d \
--name skywalking-ui \
--link skywalking-oap:skywalking-oap \
-p 8088:8080 \
-e TZ=Asia/Shanghai \
registry.cn-hangzhou.aliyuncs.com/anoy/skywalking-ui \
--collector.ribbon.listOfServers=skywalking-oap:12800 \
--security.user.admin.password=admin
```

