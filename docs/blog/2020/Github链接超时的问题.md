# Github链接超时的问题

## 问题描述

​        今天提交代码的时候，IDEA提示`github.com`**连接超时**，并且也无法更新项目代码；在sourcetree中也是这样的情况。但是**github.com网址确实可以通过浏览器正常访问**。

```
github.com[52.74.223.119:443] connect time out
```

​        在cmd中运行`ping  github.com`，提示连接超时。

```
正在 Ping github.com [52.74.223.119] 具有 32 字节的数据:
请求超时。
请求超时。
```



## 解决方案

**1、在hosts文件中配置github.com相关的IP**

​        查询[github.com](https://github.com.ipaddress.com/)和[github.global.ssl.fastly.net](https://fastly.net.ipaddress.com/github.global.ssl.fastly.net)的IP，然后打开`C:\Windows\System32\drivers\etc`目录下的hosts文件，并将这两个IP追加到文件末尾，如：

```shell
140.82.113.3     github.com
199.232.69.194     github.global.ssl.fastly.net
```

​        然后保存hosts文件，执行如下命令刷新DNS缓存：

```shell
//Windows下终端执行 
ipconfig /flushdns
```

​        完成后`ping github.com`可以得到数据相应，在IDEA中也可以正常拉取代码了，**但是推送代码仍会报错**。

```shell
正在 Ping github.com [140.82.113.3] 具有 32 字节的数据:
来自 140.82.113.3 的回复: 字节=32 时间=389ms TTL=40
来自 140.82.113.3 的回复: 字节=32 时间=285ms TTL=40
```

**参考文章：**

- [ping github.com请求超时及git clone下载速度慢问题](https://www.jianshu.com/p/63a44def184c)



**2、更新SSH配置中的known_hosts文件**

​        后来发现，应该是`C:\Users\用户名\.ssh`目录下的`known_hosts`文件中配置的github.com的IP有问题，github.com被固定执向了52.74.223.119，所以更改hosts中github.com中的IP，也无法正常的提交代码。

```
github.com,52.74.223.119 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
```

​        接着，我**删除**`C:\Users\用户名\.ssh`目录下`known_hosts`、`id_rsa`、`id_rsa.pub`文件，然后运行`git-bash.exe`程序，并输入以下命令**重新生成了秘钥**。

```ssh
//重新生成秘钥(输入注册GitHub的邮箱)
ssh-keygen -t rsa -C "suheforvip@gmail.com"
```

​        然后在Github中`Settings -> SSH and GPG keys`中`New SSH key`，Title自定义，Key是刚才生成的公钥文件id_rsa.pub里面的内容。配置完成后在git bash里输入下面的命令，验证是否按照成功：

```shell
ssh -T git@github.com
```

如果初次设置的话，会出现如下界面，输入yes 同意即可。

```shell
$ ssh -T git@github.com
The authenticity of host 'github.com (140.82.113.3)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,140.82.113.3' (RSA) to the list of known hosts.
Hi sh086! You've successfully authenticated, but GitHub does not provide shell access.
```

​        重新配置完成后，发现已经可以正常拉取、更新、推送项目代码了，known_hosts文件中github.com配置的IP也更新为140.82.113.3了。

```
github.com,140.82.113.3 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
```

**参考文章：**

- [gitbash连接github拉取代码](https://blog.csdn.net/weixin_40951298/article/details/81204194)



## 后续更新

​        后来发现，其实隔天后即使不做任何更改，拉取、更新、推送GitHub的代码也会正常了的，盲猜应该是当时**Github的DNS解析被污染造成的临时状况**。

