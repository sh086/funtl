
@echo off

if  "%1"=="-init" (
  ::全局修改yarn的修改镜像源（可忽略）
  yarn config set registry https://registry.npm.taobao.org/
  :: 安装vuepress命令
  yarn add -D vuepress
  ::根据package.json安装文档运行需要的插件
  yarn install
) else if  "%1"=="-push" (
   rd/s/q .\docs\.vuepress\dist
   ::生成静态文件
   npm run build
   ::进入生成的文件夹
   cd ./docs/.vuepress/dist/
   copy ..\bin\push.sh . /y
   push.sh %2
   cd ..\..\..\
)  else (cd
    yarn dev
)