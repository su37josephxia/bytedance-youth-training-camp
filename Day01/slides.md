---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
---

# Node答疑直播
- 20：50 ~ 22:00

---


# 字节跳动青训营 Day01

NodeJS与服务器


---

# 课程安排

| 10月20日      |                                 |          |
| ------------- | ------------------------------- | -------- |
| 09:00 ~ 09:20 | 开班仪式                        | winter   |
| 09:25 ~ 12:00 | Node基础Api与CLI实战            | 全栈然叔 |
| 13:30 ~ 15:00 | 持久化mysql/mongodb/Restful实战 | 全栈然叔 |
| 15:00 ~ 17:00 | 鉴权session/token/Oauth2.0实战  | 全栈然叔 |
| 17:00 ~ 18:00 | rpc/cdn/log/监控                | 全栈然叔 |

---

# 练习到 11：45

搭建cli基础环境



---

# 教学形式

- 讲解 50% + 实战 50 %
  

# 课程评分

- 阶段成果提交代码仓库 - ***Winter负责检查***


---

# Part01   Node基础
- fs与异步IO
- buffer与字符集
- http
- stream

- 实战：手写cli工具

---

# 基础API
> 官方文档 http://nodejs.cn/api/
## 核心API - 无需require
- buffer
- module
- process
## 内置API - 需要require 无需install
- os
- fs
- path
- http
- event

---

# fs文件系统

- 同步读取
- 异步读取
- promisify


---

# Buffer缓冲区

  Buffer - 用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。	八位字节组成的数组，可以有效的在JS中存储二进制数据


---

# http服务
- 静态页面
- JSON数据
- 图片

---

# stream流

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

data - 当有数据可读时触发。

end - 没有更多的数据可读时触发。

error - 在接收和写入过程中发生错误时触发。

finish - 所有数据已被写入到底层系统时触发。

---

# Part02   持久化技术

“数据持久化就是将内存中的数据模型转换为存储模型,以及将存储模型转换为内存中的数据模型的统称. 数据模型可以是任何数据结构或对象模型,存储模型可以是关系模型、XML、二进制流等。

- mysql
- mongodb
- 通过模型自动映射Restful服务

---

# Restful服务
### RESTful API

- Representational State Transfer翻译过来是"表现层状态转化"，它是一种互联网软件的架构原则。因此复合REST风格的Web API设计，就称它为RESTful API

- RESTful特征：

  - 每一个URI代表一种资源(Resources)，比如：`http://kaikeba.com/courses`；

  - 客户端和服务器之间，传递这种资源的某种表现层，比如：`http://kaikeba.com/courses/web`；

  - 客户端通过HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"，比如：

    `POST http://kaikeba.com/courses`

---



# HTTP动词：表示一个动作

  - GET：读取（Read）
  - POST：新建（Create）
  - PUT：更新（Update）
  - PATCH：更新（Update），部分更新
  - DELETE：删除（Delete）

---

# 宾语：表示动作的目标对象

  - 是一个名词

    ```js
    // 推荐
    GET /users
    // 不推荐
    GET /getUsers
    ```

    

  - 通常是复数

    ```js
    // 推荐
    GET /users
    GET /users/1
    // 不推荐
    GET /user
    GET /user/1
    ```

---

# 宾语：表示动作的目标对象

  - 避免多级

    ```js
    // 推荐
    GET /authors/12?categories=2
    // 不推荐
    GET /authors/12/categories/2
    ```

---


# Part03   鉴权
- cookie与session
- jwt token
- Oauth2.0实战


---

# cookie与session


![Snip20210919_1](https://gitee.com/josephxia/picgo/raw/master/juejin/Snip20210919_1.png)


---

# JWT TOKEN


---



# Part04   服务器端常识
- CDN
- RPC
- 日志与监控

---

# CDN服务

## 概述

`CDN` 全称 `Content Delivery Network`，即内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

![image-20210917104545072](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210917104545072.png)

<style>
img {

  max-width:50%;
}
</style>

---

<iframe src="//player.bilibili.com/player.html?aid=928946745&bvid=BV12T4y1P7Fh&cid=289779003&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
>
 </iframe>
<style>
  iframe {
    width:100%;
    height:100%;
  }
</style>


---
## 历史

CDN 诞生于二十多年前，为解决内容源服务器和传输`骨干网`络压力过大的问题，在 `1995` 年，麻省理工学院教授，互联网发明者之一 `Tom Leighton` 带领着研究生 Danny Lewin 和其他几位顶级研究人员一起尝试用数学问题解决网络拥堵问题。

他们使用数学算法，处理内容的动态路由安排，并最终解决了困扰 Internet 使用者的难题。后来，史隆管理学院的 MBA 学生 Jonathan Seelig 加入了 Leighton 的队伍中，从那以后他们开始实施自己的商业计划，最终于 1998 年 8 月 20 日正式成立公司，命名为 Akamai。`Akamai` 公司通过智能化的互联网分发，结束了 “World Wide Wait” 的尴尬局面。

同年 1998 年，中国第一家 CDN 公司 `ChinaCache` 成立

---


# 重要概念

## CDN运作原理

本地缓存的数据，通过`key-value` 的形式，将url 和本地缓存进行映射,存储结构与 `Map`相似，采用 `hash+链表形式`进行缓存。



## CDN命中率

衡量我们CDN服务质量的一个核心标准，当用户访问的资源恰好在缓存系统里，可以直接返回给用户，说明CDN命中；如果CDN缓存中，没有命中资源，那么会触发`回源`动作

---

# 重要概念

## CDN回源

- `一级缓存` 访问`二级缓存`是否有相关数据，如果有，返回一级缓存。
- `二级缓存` Miss，触发 二级缓存 回源请求，请求源站对应数据。获取结果后，缓存到本地缓存，返回数据到一级缓存。
- `一级缓存` 获取数据，缓存本地后，返回给用户


## CDN预热数据

上面说的访问模式，都是基于`Pull模式`，由用户决策哪部分热点数据会最终存留在CDN缓存中；对于大促场景，我们往往需要预先将活动相关资源`预热` 到 `边缘节点（L1）`,避免大促开启后，大量用户访问，造成源站压力过大。这时候采用的是 `Push模式`。


---

# RPC 远程过程调用

## 概念

**RPC**：Remote Procedure Call，远程过程调用。是指计算机程序使过程在不同的地址空间（通常在共享网络的另一台计算机上）执行时，其编码方式就像是正常的（本地）过程调用，而无需程序员明确为远程交互编码细节。

RPC是一种服务器-客户端（Client/Server）模式，经典实现是一个通过**发送请求-接受回应**进行信息交互的系统。



![image-20210917145408333](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210917145408333.png)

<style>
img {

  max-width:50%;
}
</style>

---

## RPC的诞生

其实早在1982年左右RPC就被人用来做分布式系统的通信，最早发明『远程过程调用』这个词语的人是『布鲁斯·杰伊·尼尔森 (Bruce Jay Nelson)』大约是在1981年。

我们所熟知的Java在1.1版本提供了Java版本的RPC框架（RMI），此时在1990年后，基本上RPC被广泛用于系统之间的调用。但是只在后端方向熟知，对于大众更多的还是接触HTTP等协议，也因此RPC更晚让大众了解认知

---

## RPC与HTTP

HTTP：**Hypertext Transfer Protocol**即超文本传输协议。

HTTP协议在1990年才开始作为主流协议出现；之所以被我们所熟知，是因为通常HTTP用于web端，也就是web浏览器和web服务器交互。当ajax和json在前端大行其道的时候，json也开始发挥其自身能力，简洁易用的特性让json成为前后端数据传输主流选择。HTTP协议中以Restful规范为代表，其优势很大。它**可读性好**，且**可以得到防火墙的支持、跨语言的支持**。

HTTP的缺点也很快暴露：

1. **有用信息占比少**，HTTP在OSI的第七层，包含了大量的HTTP头等信息
2. **效率低**，因为第七层的缘故，中间有很多层传递
3. HTTP协议**调用远程方法复杂**，需要封装各种参数名和参数值以及加密通讯等


---

### 所以RPC好在哪？

1. **都是有用信息**
2. **效率高**
3. **调用简单**
4. **无需关心网络传输或者通讯问题**

### HTTP和RPC其实有联系

**http也是rpc实现的一种方式。**

---

## RPC的应用场景

在**微服务、分布式**已经成为日常的今天，服务通常都部署在不同的服务器，服务器也在不同地区，这时候就存在跨地域跨服务器调用问题，**RPC即用于这样类似的情况**。

RPC适用于公司内部使用，性能消耗低，传输效率高，服务治理方便，但是不建议传输较大的文本、视频等。

RPC主要来解决三件事情：

- 进程间通讯
- 提供和本地方法调用一样的调用机制
- 屏蔽程序员对远程调用的细节实现

---

## 微服务与RPC

微服务 (Microservices) 就是一些协同工作小而自治的服务。

![image-20210917150458708](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210917150458708.png)

---

## 微服务与RPC

`RPC`和微服务框架的关系我的理解，微服务框架一般都包含了`RPC`的实现和一系列「服务治理」能力，是一套软件开发框架。我们可以基于这个框架之上实现自己的微服务，方便的利用微服务框架提供的「服务治理」能力和`RPC能力`，所以微服务框架也被有些人称作`RPC框架`。

![image-20210917150753033](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210917150753033.png)

---


##### 实施微服务

- 有开源的微服务基础设施全家桶，例如，Spring Cloud项目，涵盖了服务发现、服务路由、网关、配置中心等功能
- 如果微服务的数量并不是很多的话，并不是每个基础设施都是必须的

###### 按优先级来搭建基础设施

- 1. 服务发现、服务路由、服务容错：这是最基本的微服务基础设施
- 1. 接口框架、API网关：主要是为了提升开发效率，接口框架是提升内部服务的开发效率，API网关是为了提升与外部服务对接的效率
- 1. 自动化部署、自动化测试、配置中心：主要是为了提升测试和运维效率
- 1. 服务监控、服务跟踪、服务安全：主要是为了进一步提升运维效率
- 以上3和4两类基础设施，其重要性会随着微服务节点数量增加而越来越重要，但在微服务节点数量较少的时候，可以通过人工的方式支撑，虽然效率不高，但也基本能够顶住