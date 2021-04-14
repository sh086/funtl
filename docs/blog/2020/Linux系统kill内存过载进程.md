# Linux系统kill内存过载进程

## 问题描述

​        今天项目突然404了，立马执行`cat catalina.out`命令检查日志，但发现日志里面并没有错误信息。然后执行`ps -ef | grep 项目名`命令，**发现项目的进程已被kill**。

​       首先使用`history`命令，排查是否是人为kill，发现没有关闭项目的相关命令被执行。接着通过如下三种方法确认了**项目是因为内存过载而被Linux操作系统Kill掉了**。

① 执行`grep "Out of memory" /var/log/messages`，结果如下：

```
Jul 30 15:39:07 localhost Kernel: Out of memory: Kill process 23817 (java) score 473 or sacrifice child
Jul 30 15:39:07 localhost Kernel: Killed process 23817 (java) total-vm:8162620kB, anon-rss:3341684kB, file-rss:0kB, shmem-rss:0kB
```

② 运行 `egrep -i -r 'killed process' /var/log`，结果如下：

```
/var/log/messages-20200803:Jul 30 15:39:07 localhost kernel: Killed process 23817 (java) total-vm:8162620kB, anon-rss:3341684kB, file-rss:0kB, shmem-rss:0kB
```

③ 运行`dmesg`命令，结果如下：

```
[7909674.569288] Out of memory: Kill process 23817 (java) score 473 or sacrifice child
[7909674.569337] Killed process 23817 (java) total-vm:8162620kB, anon-rss:3341684kB, file-rss:0kB, shmem-rss:0kB
```



**参考文章：**

- [Linux OOM-killer 内存不足时kill高内存进程的策略](https://www.cnblogs.com/xibuhaohao/p/11082414.html)

  

## 解决方案

1、临时方案：**增加Linux内存**

2、搭建**OOM检测工具**，检测项目中内存溢出的地方，然后进行优化