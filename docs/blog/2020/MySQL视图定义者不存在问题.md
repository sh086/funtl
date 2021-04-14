# MySQL视图定义者不存在问题

## 问题描述

​        今天测试环境数据库的用户名密码做了变更，在运行程序的时候，出现视图的定义者不存在的问题：

```
Error querying database.CauseLjava,sql,SQLException:The user specified as a definer('root'@'%') does not exist
```



## 解决方案

​        这个是项目中SQL采用了视图，而视图中配置了定义者为旧的root用户名的原因，需要更新一下定义者。在数据库中 `右击视图 -> 设计视图 -> 高级` 页面里面，修改**定义者**如下内容即可：

```
`user`@`%`
```

