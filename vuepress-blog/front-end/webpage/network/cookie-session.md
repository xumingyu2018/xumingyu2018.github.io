---
  title: Cookie、Session、LocalStorage、SessionStorage
---

HTTP 是无状态的协议，无法记录历史状态，服务端无法确认当前访问者的身份信息，无法分辨上一次的请求发送者和这一次的发送者是不是同一个人。`Cookie` 和 `Session` 是常用的会话跟踪技术。

## Cookie

客户端向服务端发送首次请求，服务端返回包含 `Set-Cookie` 头部的响应通知客户端保存 `Cookie`。在后续的请求中，客户端每次都在请求头携带上 `Cookie` 发送给服务端。

缺点：不安全，存储量小

## Session

1. 客户端向服务端发送首次请求，服务端会创建一个`Session` 保存客户端信息，同时生成一个唯一的 `SessionID`，并保存在服务端，再返回包含 `SessionID` 的响应给客户端。
2. 客户端收到后，将 `SessionID` 存入 `Cookie` 中。
3. 在后续的请求中，客户端每次都在请求头携带记录有 `SessionID` 的 `Cookie` 发送给服务端，服务端根据 `SessionID` 匹配对应的 `Session` 获取客户端状态。

如果浏览器禁用了 `Cookie`，可以通过将 `SessionID` 写入 URL 的方式发送给服务端。

<img class="medium-img" src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220516022111.png"/>

缺点：服务器内存消耗大

## Cookie 与 Session 区别

||存储容量|生命周期|存储位置|安全性|
|:-:|:-:|:-:|:-:|:-:|
|Cookie|4KB|无过期时间：关闭浏览器后被清除<br>有过期时间：在过期时间后失效|客户端|低|
|Session|5MB|关闭页面或浏览器失效|服务端|高|

比喻：

- Session 像用户档案表，里面包含了用户的认证信息和登录状态等信息，保存在服务端。
- Cookie 像用户通行证，保存在客户端。

## LocalStorage

`LocalStorage` 是 HTML5 新增的存储对象，用于在浏览器本地长久保存数据。

## SessionStorage

`SessionStorage` 是 HTML5 新增的存储对象，用于在浏览器本地临时保存数据。

打开多个相同的 URL 的标签页，会创建各自的 `SessionStorage`

## Cookie、LocalStorage 与 SessionStorage 的区别

||存储容量|生命周期|存储位置|
|:-:|:-:|:-:|:-:|
|Cookie|4KB|无过期时间：关闭浏览器后被清除<br>有过期时间：在过期时间后失效|客户端，每次请求都会携带|
|LocalStorage|5MB（视浏览器而定）|不会自动过期，除非用户手动清除|客户端|
|SessionStorage|5MB|仅在当前网页会话下有效，关闭页面或浏览器后会被清除|客户端|

## Token

JWT(JSON Web Token) 一种基于 `token` 的跨域认证方案

1. 客户端携带用户的登录凭证（一般为用户名和密码）向服务端发送首次请求
2. 服务端查询数据库验证用户有效性，如果有效会根据储存在服务端秘钥对登录凭证进行签名生成 `token`，并返回给客户端
3. 客户端收到 `token` 信息，可以保存在`cookie`或者 `localStorage`
4. 后续请求中，客户端都在请求头的 `Authorization` 字段写上`token`信息，服务端再对 `token` 解密取得用户登录凭证，根据登录凭证再去数据库中对相应的用户数据进行操作。

## 参考资料

- [JSON Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
- [彻底弄懂session，cookie，token](https://segmentfault.com/a/1190000017831088)
