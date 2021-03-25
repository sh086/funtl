# SkyWalking



## 简介

## 快速开始

1、部署elasticsearch

```shell
# 拉取elasticsearch镜像
docker pull docker.elastic.co/elasticsearch/elasticsearch
# 运行elasticsearch
docker run --name elasticsearch \
-p 9200:9200 -p 9300:9300 \ 
-e "discovery.type=single-node" \
-e ES_JAVA_OPTS="-Xms512m -Xmx512m" \
-d docker.elastic.co/elasticsearch/elasticsearch
```

特别说明：

```
-e "discovery.type=single-node" ：设置为单节点
-e ES_JAVA_OPTS="-Xms512m -Xmx512m" ：测试环境下，设置ES的初始内存和最大内存，否则导致过大启动不了ES
```



2、部署skywalking

```shell
# 拉取镜像
docker pull apache/skywalking-base 
docker pull apache/skywalking-oap-server 
docker pull apache/skywalking-ui

#启动SkyWalking Server
docker run --name skywalking-oap --restart always \
-p 1234:1234 -p 11800:11800 -p 12800:12800 -d \
--link elasticsearch:elasticsearch \
-e SW_STORAGE=elasticsearch \
-e SW_STORAGE_ES_CLUSTER_NODES=elasticsearch:9200 \
apache/skywalking-oap-server

#启动SkyWalking UI
docker run --name skywalking-ui -d \
-p 9898:8080 --restart always \
--link skywalking-oap:skywalking-oap  \
-e SW_OAP_ADDRESS=skywalking-oap:12800 \
--security.user.admin.password=admin \
apache/skywalking-ui
```



3、应用接入

​	　去[官网](https://skywalking.apache.org/downloads/)下载skywalking的完整tar包解压，把里面的`agent文件夹`整个传到被监控应用所在的服务器上，并配置被监控应用的启动参数，如：

```shell
# -javaagent：agent路径，/home/crm-api/agent/skywalking-agent.jar
# -service_name：被监控应用名称,CRM测试
# -backend_service：SkyWalking Server地址，172.16.205.117:11800
-javaagent:/home/crm-api/agent/skywalking-agent.jar -Dskywalking.agent.service_name=CRM测试 -Dskywalking.collector.backend_service=172.16.205.117:11800
```



```sh
nohup java -javaagent:/opt/apps/skywalking/apache-skywalking-apm-bin/agent/skywalking-agent.jar -Dskywalking.agent.service_name=syncorder -Dskywalking.collector.backend_service=117.50.30.96:11800 -jar sync-order-server.jar &
```



​	　若项目采用Tomcat部署，需要修改catalina.sh

```sh
CATALINA_OPTS="$CATALINA_OPTS -javaagent:/home/crm-api/agent/skywalking-agent.jar -Dskywalking.agent.service_name=CRM测试 -Dskywalking.collector.backend_service=172.17.0.4:11800"
export CATALINA_OPTS
```



## 使用教程