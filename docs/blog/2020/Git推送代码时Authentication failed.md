# Git推送代码时Authentication failed

## 问题描述

​        在SourceTree推送代码的时候提示用户Authentication failed，错误信息如下：

```
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v --tags origin master:master
remote: Permission to camelliahub/filecloud.git denied to sh086.
fatal: unable to access 'https://github.com/camelliahub/filecloud.git/': The requested URL returned error: 403

Pushing to https://github.com/camelliahub/filecloud.git
完成时带有错误，见上文。
```

​         在IDEA中推送代码也是同样的问题，提示用户Authentication failed，错误信息如下：

![bugfix-20200809-001.png](https://github.com/camelliahub/filecloud/blob/master/blog/images/bugfix-20200809-001.png?raw=true)



## 解决方案

​        这个是因为Git仓库的用户名密码已经被修改了，导致**原来的认证凭据失效，需要删除旧的认证凭据，然后重新进行认证**，操作步骤如下：

1. win + R 打开 `运行`
2. 输入 `control keymgr.dll`，然后确定，打开**凭据管理器**。
3. 选择**windows凭据**下，然后在window凭据下方的**普通凭据**中找到需要**删除**的凭据进行删除。
4. 在SourceTree或者IDEA中农重新拉取代码，会弹出用户名密码的输入页面，在此处输入正确的用户名密码即可。

