# Docker安装与卸载

**参考资料：**

- [Docker官网教程]



## 安装Docker

### 方法一：使用脚本安装



```shell
# 使用官方安装脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 或使用daocloud命令 
curl -sSL https://get.daocloud.io/docker | sh
```



### 方法二：手动安装



1、安装所需的软件包

```shell
# 安装所需的软件包
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# 设置稳定的仓库
sudo yum-config-manager --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装最新版本的 Docker Engine-Community 和 containerd
sudo yum install docker-ce docker-ce-cli containerd.io
```

2、列出并排序您存储库中可用的版本

```shell
yum list docker-ce --showduplicates | sort -r

docker-ce.x86_64  3:18.09.1-3.el7                     docker-ce-stable
docker-ce.x86_64  3:18.09.0-3.el7                     docker-ce-stable
docker-ce.x86_64  18.06.1.ce-3.el7                    docker-ce-stable
docker-ce.x86_64  18.06.0.ce-3.el7                    docker-ce-stable
```

3、安装Docker

```shell
# 语法格式
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
# 示例一：安装最新版

# 示例二：安装指定版本
sudo yum install docker-ce-18.09.1 docker-ce-cli-docker-ce-18.09.1 containerd.io
```



### 验证安装

```shell
# 启动 Docker
sudo systemctl start docker
# 运行hello-world镜像
sudo docker run hello-world
```



### 配置镜像加速



## Docker Comp



## 卸载Docker

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-io \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

