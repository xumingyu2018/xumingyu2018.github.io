---
  title: HTTP 缓存
---

HTTP 缓存是浏览器对之前请求过的文件进行缓存，以便下次访问时重复使用，减少网络请求次数，提高页面加载速度，缓解服务端的压力。  
HTTP 缓存分为：强制缓存与协商缓存

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220506030900.png)

## 强制缓存

### 定义与过程

定义：客户端向服务端发送首次请求，服务端返回带有 `Cache-Control` 或 `Expires` 字段控制资源过期时间的响应。在过期时间内客户端不再重复发送请求，直接读取客户端本地缓存。

过程：  

- 客户端向服务端发送首次请求，服务端返回带有 `Cache-Control` 或 `Expires` 字段的资源。
- 后续请求时，如果资源没有过期（强制缓存生效）：直接从浏览器本地缓存中获取资源，状态码 `200 OK (from memory cache)`。
- 后续请求时，如果资源过期（强制缓存失效）：在没有使用协商缓存的情况下会重复首次请求的步骤。所以一般会搭配使用协商缓存。

控制强制缓存的字段有：

- `Pragma`（不推荐使用）
- `Expires`（HTTP/1.0）
- `Cache-Control`（HTTP/1.1）

### Expires 与 Cache-Control

`Expires` 过期时间。缺点在于该日期依赖的是用户的系统时间，如果用户系统时间不准确，缓存有效期就不准确。

`Cache-Control` 缓存控制。在请求头和响应头中都可以使用，常用的属性有：

- max-age： 最大缓存时间（秒）
- no-cache：不使用强缓存，需要向服务器验证缓存是否是最新的
- no-store：禁止使用缓存（包括协商缓存），每次都向服务器请求最新的资源
- public：响应可以被中间代理、CDN 等缓存
- private：仅客户端可以缓存数据，代理服务器、CDN 不可缓存
- must-revalidate：在缓存过期前可以使用，过期后必须向服务器验证

优先级：`Cache-Control` 的优先级比 `Expires` 高。

## 协商缓存（对比缓存）

### 定义与过程

定义：强制缓存失效后，客户端携带资源标识向服务端发送请求。服务端根据资源标识判断缓存资源与最新资源是否相同，告诉客户端是否使用缓存资源。

过程：

- 客户端向服务端发送首次请求时，服务端返回资源文件和资源标识（携带有 `Last-Modified` 或 `Etag` 的响应）。
- 后续请求时，客户端发送携带 `If-Modified-Since` 或 `If-None-Match` 的请求。（值分别与首次请求的 `Last-Modified` 或 `Etag` 相等）
- 服务端根据两者是否相等判断资源是否没有更新：
如果相等（协商缓存生效），则返回 304 状态码，告诉客户端使用本地缓存。
如果不相等（协商缓存失效），则返回 200 状态码，并返回最新的资源文件和资源标识。

控制协商缓存的字段有：

- `Last-Modified/If-Modified-Since`（HTTP/1.0）
- `Etag/If-None-Match`（HTTP/1.1）

### Etag 与 Last-Modified

`Last-Modified/If-Modified-Since` 最后修改时间，某个资源文件在服务器最后被修改时间。缺点在于精度只到秒级，1 秒内的多次修改无法判断资源是否更新。

`Etag/If-None-Match` 资源标识，服务端根据资源文件的内容生成的唯一资源标识。

优先级：`Etag/If-None-Match`优先级比`Last-Modified/If-Modified-Since`高。

## 三种刷新操作对缓存的影响

- 正常操作（**强制缓存有效，协商缓存有效**）：地址栏输入 `URL`，跳转链接，前进后退等
- 手动刷新（**强制缓存失效，协商缓存有效**）：`F5`，点击工具栏中的刷新按钮，右键菜单重新加载
- 强制刷新（**强制缓存失效，协商缓存失效**）：`Ctrl+F5`，`Shift+Command+R`

||强制缓存|协商缓存|
|:-:|:-:|:-:|
|正常操作|✅|✅|
|手动刷新|❌|✅|
|强制刷新|❌|❌|

## 参考资料

- [Cache-Control —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
- [HTTP缓存之协商缓存和强制缓存](https://zhuanlan.zhihu.com/p/143064070)
- [http面试必会的：强制缓存和协商缓存](https://juejin.cn/post/6844903838768431118)
- [HTTP 缓存【JS面试题小合集】](https://www.bilibili.com/video/BV17Q4y127We?p=1)
