---
  title: 同源策略与跨域
---

## 同源策略

同源策略：浏览器的安全策略，用于限制一个源如何与另一个源的资源进行交互，保障用户隐私、数据安全，避免 XSS、CSFR 等网络攻击。

浏览器默认开启了同源策略，向其他源发出的请求可以发出，但响应会被浏览器拦截，可以通过插件关闭（不建议）。另外，Postman 没有使用同源策略，才能随意前后端联调。

## 源

源 = 协议 + 域名+ 端口号  
URL = 协议 + 域名 + 端口号 + 资源路径 [+ 参数 + 查询 + 锚点]  
同源：**协议、域名、端口号**完全一致。即便两个不同的域名指向同一个ip地址，也非同源

`https://example.com` 与以下 URL 同源判断：

|URL|判断|说明|
|-|:-:|:-:|
|`http://example.com`|不同源|协议不同|
|`https://www.example.com`|不同源|子域名不同|
|`https://www.example.cn`|不同源|主域名不同|
|`https://example.com:443`|同源|https 默认端口443<br>http 默认端口 80|

<img class="medium-img" src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/域名.png"/>

顶级域有 `.com`、`.org`、`.edu`、`.cn`、`.us` 等  
`www.` 是互联网早期常用的子域名，表示提供网站服务，以与 `mail.` 邮件服务等作区分。  
顶级域名需要备案，而二级域名不需要单独备案，只要它所处的一级域名已经备案，就能直接解析。  
通过 `window.origin` 或 `location.origin` 可以得到当前网页源

## 跨域

跨域：绕开浏览器的同源策略限制，在不同域之间相互请求资源。实现跨域有三种常用方式：JSONP、CORS、服务器代理。

### JSONP

JSONP：**JSON** with **P**adding。利用 `script` 标签不受浏览器同源策略的限制，进行跨域 `GET` 请求。注意它不是 `AJAX` 请求。

```html:no-line-numbers
<!-- 前端 -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <script src="https://backend.com/data?callback=getName" type="text/javascript"></script>
  <script>
    function getName(data) {
      console.log(data)
    }
  </script>
</body>
</html>
```

```js:no-line-numbers
// 后端：将数据传入回调函数，再拼接为字符串返回。
// query.callback 即 getName
response.send(
  `${query.callback}({
    "name": "Nevermore"
  })`
)
```

过程：

1. 前端利用 `script` 标签的 `src` 属性可以请求外部的 JS 文件的特性，向后端发送  `GET` 请求
2. 后端将数据传入回调函数
3. 浏览器加载 `script` 标签，因为指定了类型 `type="text/javascript"`，于是执行服务端返回的函数

优缺点：

- 优点：使用简单，没有兼容性问题
- 缺点：只支持 GET 请求

### CORS

CORS：**C**ross-**O**rigin **R**esource **S**haring，跨源资源共享（又称跨域资源共享）

请求又分简单请求与复杂请求（非简单请求）：简单请求不会触发 CORS 的 `OPTIONS`预检请求，复杂请求一般会修改数据库数据，浏览器需要预先检查下服务器是否允许该请求。

简单请求主要满足以下两大条件：

条件 1：使用下列方法之一：

- GET
- HEAD
- POST

条件 2：`Content-Type` 的值仅限于下列三者之一：

- `text/plain`
- `multipart/form-data`
- `application/x-www-form-urlencoded`

POST 提交 JSON 数据是复杂请求，POST 提交 form 表单数据是简单请求。

如何通过 CORS 跨域：

- 对于简单请求：服务端在响应头设置

```http:no-line-numbers
Access-Control-Allow-Origin: https://server
// 或 * 允许所有源访问
Access-Control-Allow-Origin: * 
```

- 对于复杂请求：服务端在响应头设置

```http:no-line-numbers
Access-Control-Allow-Origin: https://client
Access-Control-Allow-Methods: GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

如果需要携带 `Cookie`：

- 客户端 AJAX 请求需要设置`xhr.withCredentials: true`
- 服务端响应头需要设置 `Access-Control-Allow-Credentials: true`

### 服务器代理

Nginx 反向代理，监听某个域名的，再转发到另一个域名。

## 参考资料

- [九种跨域方式实现原理（完整版）](https://juejin.cn/post/6844903767226351623)
