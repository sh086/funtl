(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{471:function(s,t,e){"use strict";e.r(t);var a=e(25),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"github链接超时的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github链接超时的问题"}},[s._v("#")]),s._v(" Github链接超时的问题")]),s._v(" "),e("h2",{attrs:{id:"问题描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),e("p",[s._v("​        今天提交代码的时候，IDEA提示"),e("code",[s._v("github.com")]),e("strong",[s._v("连接超时")]),s._v("，并且也无法更新项目代码；在sourcetree中也是这样的情况。但是"),e("strong",[s._v("github.com网址确实可以通过浏览器正常访问")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("github.com[52.74.223.119:443] connect time out\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("​        在cmd中运行"),e("code",[s._v("ping github.com")]),s._v("，提示连接超时。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("正在 Ping github.com [52.74.223.119] 具有 32 字节的数据:\n请求超时。\n请求超时。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),e("p",[e("strong",[s._v("1、在hosts文件中配置github.com相关的IP")])]),s._v(" "),e("p",[s._v("​        查询"),e("a",{attrs:{href:"https://github.com.ipaddress.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("github.com"),e("OutboundLink")],1),s._v("和"),e("a",{attrs:{href:"https://fastly.net.ipaddress.com/github.global.ssl.fastly.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("github.global.ssl.fastly.net"),e("OutboundLink")],1),s._v("的IP，然后打开"),e("code",[s._v("C:\\Windows\\System32\\drivers\\etc")]),s._v("目录下的hosts文件，并将这两个IP追加到文件末尾，如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("140.82")]),s._v(".113.3     github.com\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("199.232")]),s._v(".69.194     github.global.ssl.fastly.net\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("​        然后保存hosts文件，执行如下命令刷新DNS缓存：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("//Windows下终端执行 \nipconfig /flushdns\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("​        完成后"),e("code",[s._v("ping github.com")]),s._v("可以得到数据相应，在IDEA中也可以正常拉取代码了，"),e("strong",[s._v("但是推送代码仍会报错")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("正在 Ping github.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("140.82")]),s._v(".113.3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 具有 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" 字节的数据:\n来自 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("140.82")]),s._v(".113.3 的回复: 字节"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" 时间"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("389ms "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TTL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("\n来自 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("140.82")]),s._v(".113.3 的回复: 字节"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" 时间"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("285ms "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TTL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("参考文章：")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/63a44def184c",target:"_blank",rel:"noopener noreferrer"}},[s._v("ping github.com请求超时及git clone下载速度慢问题"),e("OutboundLink")],1)])]),s._v(" "),e("p",[e("strong",[s._v("2、更新SSH配置中的known_hosts文件")])]),s._v(" "),e("p",[s._v("​        后来发现，应该是"),e("code",[s._v("C:\\Users\\用户名\\.ssh")]),s._v("目录下的"),e("code",[s._v("known_hosts")]),s._v("文件中配置的github.com的IP有问题，github.com被固定执向了52.74.223.119，所以更改hosts中github.com中的IP，也无法正常的提交代码。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("github.com,52.74.223.119 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("​        接着，我"),e("strong",[s._v("删除")]),e("code",[s._v("C:\\Users\\用户名\\.ssh")]),s._v("目录下"),e("code",[s._v("known_hosts")]),s._v("、"),e("code",[s._v("id_rsa")]),s._v("、"),e("code",[s._v("id_rsa.pub")]),s._v("文件，然后运行"),e("code",[s._v("git-bash.exe")]),s._v("程序，并输入以下命令"),e("strong",[s._v("重新生成了秘钥")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-ssh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//重新生成秘钥(输入注册GitHub的邮箱)\nssh-keygen -t rsa -C "suheforvip@gmail.com"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("​        然后在Github中"),e("code",[s._v("Settings -> SSH and GPG keys")]),s._v("中"),e("code",[s._v("New SSH key")]),s._v("，Title自定义，Key是刚才生成的公钥文件id_rsa.pub里面的内容。配置完成后在git bash里输入下面的命令，验证是否按照成功：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果初次设置的话，会出现如下界面，输入yes 同意即可。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\nThe authenticity of "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github.com (140.82.113.3)'")]),s._v(" can"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nRSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '")]),s._v("github.com,140.82.113.3"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (RSA) to the list of known hosts.\nHi sh086! You'")]),s._v("ve successfully authenticated, but GitHub does not provide shell access.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("​        重新配置完成后，发现已经可以正常拉取、更新、推送项目代码了，known_hosts文件中github.com配置的IP也更新为140.82.113.3了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("github.com,140.82.113.3 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("参考文章：")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_40951298/article/details/81204194",target:"_blank",rel:"noopener noreferrer"}},[s._v("gitbash连接github拉取代码"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"后续更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后续更新"}},[s._v("#")]),s._v(" 后续更新")]),s._v(" "),e("p",[s._v("​        后来发现，其实隔天后即使不做任何更改，拉取、更新、推送GitHub的代码也会正常了的，盲猜应该是当时"),e("strong",[s._v("Github的DNS解析被污染造成的临时状况")]),s._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);