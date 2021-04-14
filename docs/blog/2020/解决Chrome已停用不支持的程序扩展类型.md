# 解决Chrome已停用不支持的程序扩展类型

> 问题描述

​        在windows中，Chrome对于非来自Chrome网上应用店或安装时未经许可的扩展程序，为了安全起见，将会强制停止使用，已停用的扩展程序均显示为灰色，且无法重新启用。

> 解决方案

（1）加载已解压的扩展程序（建议）

​        首先把需要安装的第三方插件，后缀.crx 改成 .rar，然后解压。再打开chrome://extensions/谷歌扩展应用管理，点击右上角的开发者模式，并加载已解压的扩展程序。

（2）添加启动参数

​       在Chrome浏览器桌面快捷方式，右击 【属性 - 快捷方式】，在 【目标】框的最后添加参数 ，就可以正常安

装 Web Store 之外的第三方扩展程序。

```
--enable-easy-off-store-extension-install（ --前边有个空格的）
```

（3）更换Chrome浏览器环境

​        使用Windows Chrome开发者版、Chrome Canary版本或者在Mac、Linux上使用Chrome就不会出现这种情况。

**2、Chrome禁用6669等端口的访问**

> 问题复现

​	　使用Chrome的小程序Postman调试接口http://100.21.104.90:6669/jsonreq.action时，发现接口访问不通，但是反馈说接口是可以调通的并且已经配置了IP映射。

> 解决方案

​	　这个是因为Chrome限制了6669端口的访问，可以使用**postman客户端**或者在**Chrome启动的快捷方式**上点击属性，在目标值后面加上：

```java
--allow-file-access-from-files --explicitly-allowed-ports=6669
```

