# Jenkisn参数化构建

​       使用Jenkins进行项目自动部署的时候，默认方式只能对应一个git分支来构建，通过`git Parameter`插件可以实现自动获取Git所有分支、Tag的信息，在构建前**手动选择分支或Tag构建**，可以动态的选择来发布我们自己的**Tag标签** 或者 **分支** ，便于我们对版本进行管理和恢复。



**参考文档：**

- [Jenkins插件之——git Parameter插件](https://my.oschina.net/u/3493518/blog/1510531)
- [jenkisn 简单的 参数化构建](https://blog.csdn.net/Natura_l/article/details/107846104)




## 安装插件

​        在Jenkins中点击`Manage Jenkins`->`Manage Plugins`，进入插件管理页面，在`Available`标签中分别输入`git Parameter`和`Active Choices`查询并勾选可用插件，完成后点击`Install without restar`安装插件并重启Jenkisns即可。

​        `Git Parameter Plug-in`实现自动获取Git的所有分支或Tag标签信息，在构建前可以手动选择分支或Tag标签构建；`Active Choices Plug-in`可以自定义一些变量（groovy脚本），在构建前可以选择不同的选项来控制整个构建过程，如选择发送到哪个服务器，目标是构建还是回滚等。

​        特别的：有时候直接安装会安装失败，需要尝试[手动安装](http://updates.jenkins-ci.org/download/plugins/git-parameter/)一下。若安装途中发生错误，可参考如下文章进行修复：

- [解决Jenkins 安装插件重启后, 部分项目或 Job丢失](https://blog.csdn.net/weixin_38399962/article/details/106439220)
- [解决jenkins不能自动下载安装插件](https://blog.csdn.net/linux_yyp/article/details/107229172)
- [解决Jenkins插件下载超时的问题](https://www.jianshu.com/p/1aa87248810e)




## Git Parameter插件

### 参数化构建过程

​        首先，打开项目的`Configure`，在`General`中勾选`This project is parameterized`(参数化构建过程)，勾选后会弹出`Git Parameter`配置项。

**1 基本配置**

```
Name : 自定义的名称，如TAG
Description：描述信息
Parameter Type: 参数类型，包含Tag、Branch、Branch or Tag、Revison、Pull Request
Default Value：构建不选择时，默认 branch = 填写的默认值
```

​        若选择的`Parameter Type`为`Tag`，则会拉取项目中所有的TAG标签展示；若`Parameter Type`为`Branch`则会拉取项目中所有的分支展示；若`Parameter Type`为`Branch or Tag`，则会拉取项目中所有的TAG标签或Branch展示。



**2 Advanced配置**

​        点击`Advanced`按钮，可以完成`Git Parameter`的高级配置。

（1）Sort Mode排序类型

​        当选择智能排序时，将会把数字序列视为单个字符来比较，常使用`DESCENING_SMART`值。

| 值              | 说明             |
| --------------- | ---------------- |
| NONE            | 默认值，无序显示 |
| ASCENDING_SMART | 上升智能排序     |
| DESCENING_SMART | 下降智能排序     |
| ASCENDING       | 上升排序         |
| DESCENING       | 下降排序         |



### 源码管理

​        在`Source Code Management`(源码管理)的`Branches to build` ->`Branch Specifier (blank for 'any')`中输入刚刚**自定义的名称**，前面要加$。

```shell
//配置示例
${tag} 或 $tag
```



### 验证配置结果

​        部署项目的时候，选择`Build with Parameters`进行部署，会弹出选择要部署的`分支或tag`构建的窗口，选择需要部署的窗口后，点击部署即可部署对应的分支或者TAG。

![img](https://static.oschina.net/uploads/space/2017/0815/160622_nmCa_3493518.png)



## Active Choices插件