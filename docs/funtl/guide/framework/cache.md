# 浏览器端存储技术

## Cookie

​	　**Cookie** 是指存储在用户**本地终端**上的数据（存储空间为 **4k**），同时它是与具体的 Web 页面或者站点相关的。Cookie 数据会自动在 Web 浏览器和 Web 服务器之间传输，也就是说 HTTP 请求发送时，会把保存在该请求**域名下的所有 Cookie 值发送给 Web 服务器**，服务器端脚本是可以**读、写**存储在客户端的 Cookie 的操作。



**实战：**

- [v1.5 记住我]()




## 其他存储类型

- LocalStorage：HTML5新特性，**解决了 Cookie 存储空间不足的问题**(一般浏览器支持5M)，可以永久存储
- SessionStorage：当**会话**结束的时候SessionStorage 中的键值对就会被清空
- userData ：是 **IE 浏览器专属**，它的容量可以达到 640K
- globalStorage： 适用于 **Firefox** 2+ 的浏览器，类似于 IE 的 userData
- google gear ：是**谷歌**开发出的一种本地存储技术，需要安装 Gear 组件
- Flash Cookie：可以**跨浏览器**，而且清楚缓存不能使其失效，但需要安装Flash 控件




