# shopping_buyer_end

利用 Taro 开发的购物小程序

# Taro

**Taro** 是一套遵循 [React](https://reactjs.org/) 语法规范的 **多端开发** 解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

## 项目运行

```

git clone git@github.com:EasyTuan/taro-msparis.git

# 国内镜像加速节点:git@gitee.com:easytuan/taro-msparis.git

cd taro-msparis

# 全局安装taro脚手架
npm install -g @tarojs/cli@1.2.2

# 项目依赖为1.2.2版本，如要升级，请同时升级项目依赖
# 如用1.2.2版本，请忽略这句
taro update project

# 安装项目依赖
npm install

# 微信小程序
npm run dev:weapp

# 支付宝小程序
npm run dev:alipay

# 百度小程序
npm run dev:swan

# 字节跳动小程序
npm run dev:tt

# H5
npm run dev:h5

# React Native
npm run dev:rn

# pages模版快速生成
npm run tep `文件名`

```
