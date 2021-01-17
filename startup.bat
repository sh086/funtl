
@echo off

if  "%1"=="-init" (
  ::全局修改yarn的修改镜像源（可忽略）
  yarn config set registry https://registry.npm.taobao.org/
  ::根据package.json安装文档运行需要的插件
  yarn install
) else if  "%1"=="-push" (
   echo file is push
)  else (
    yarn dev
)