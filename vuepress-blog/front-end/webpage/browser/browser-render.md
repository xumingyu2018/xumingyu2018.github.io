---
  title: 浏览器渲染机制
---

## 从输入 URL 到页面渲染的过程

加载过程：  

1. `DNS` 解析域名成 `IP` 地址
2. 浏览器向 `IP` 地址所在的服务器发起 `HTTP` 请求
3. 服务器处理 `HTTP` 请求，并返回给浏览器。

渲染过程：

1. 根据 `HTML` 代码生成 `DOM` 树
2. 根据 `CSS` 代码生成 `CSSOM`
3. 将 `DOM` 树与 `CSSOM` 合并成渲染树 `Render Tree`
4. 遍历渲染树，进行布局与绘制

渲染阻塞：若遇到 `<script>` 则暂停渲染，优先执行 `JS` 代码，直至渲染完成。

所以建议：

- `<style>` 放在 `<head>`  里：避免页面结构渲染完成，而样式还没开始渲染。
- `<script>` 放在 `<body>` 的最后：优先渲染页面，避免执行 JS 代码时暂停渲染。

### script 标签中的 defer 和 async

`<script>`：阻断 `HTML` 解析，只有下载好并执行完脚本才会继续解析 `HTML`。
`<script async>`：解析 `HTML` 过程中，异步下载脚本，下载成功立马执行，会阻断 `HTML` 的解析。
`<script defer>`：完全不会阻断 `HTML` 的解析，解析完成后再执行脚本。

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220728232104.png)

## SPA、CSR 与 SSR

SPA（Single Page Application）单页面应用程序，是前后端分离时提出的一种解决方案。在一个应用中，只有一个完整的HTML页面，页面中有一个根节点容器。由 JS 代码把需要加载的 DOM 片段插入到该容器中。  
SPA 工作原理：使用前端路由，通过改变页面的URL，在不重新请求页面的情况下，实现局部更新页面视图。

CSR（Client Side Render）客户端渲染：客户端请求页面 URL 时，服务端返回带有根节点容器的 HTML。再次请求得到 JS，向根节点容器插入 DOM 片段并进行事件绑定等操作。动态数据则通过 AJAX 请求。**普通的 SPA 是 CSR**。

SSR（Server Side Render）服务端渲染：客户端请求页面 URL 时，服务端返回带有数据的 HTML，客户端只需要解析HTML，直接构建 DOM 树。

SEO（Search Engine Optimization ） 搜索引擎优化：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。搜索引擎爬虫会爬取服务器返回的 HTML 文档，网页内容能被搜索到。

可以通过在网页中右键显示网页源代码能否查看到完整页面内容判断是否为服务端渲染。  
可以通过服务端渲染框架 Nuxt、Next 分别将 SPA 的 Vue 网页、React 网页改造为 SSR。

### SSR 与 CSR 对比

||SSR|CSR|
|-|-|-|
|优点|1. 首屏加载速度快：客户端直接解析服务端返回的 HTML<br>2. SEO 友好，爬虫可直接爬取返回的 HTML 页面数据|1. 前后端分离<br>2. 用户体验好：页面局部改变，无需请求完整页面<br>3. 节省服务器性能|
|缺点|1. 前后端耦合<br>2. 用户体验差：页面局部改变，需要请求完整页面<br>3. 耗费服务器性能|1. 首屏加载速度慢：客户端等待 JS 加载完成才能渲染页面<br>2. SEO 不友好：通过 JS 渲染页面，爬虫爬不到页面数据|

参考资料

- [谈谈我对服务端渲染(SSR)的理解](https://juejin.cn/post/6890810591968477191)

### window.onload 与 DOMContentLoaded

```js:no-line-numbers
window.addEventListener('load', function(){
  // 页面的全部资源加载完才执行，包括图片视频
})
document.addEventListener('DOMContentLoaded', function(){
  // DOM 渲染完成就执行，图片视频可能还没加载完（优先使用这个）
})
```

## 回流与重绘

**回流比重绘的性能代价高。  回流一定引起重绘，重绘不一定引起回流。**

### 回流

回流（reflow）：当 DOM 元素的内容、尺寸、结构、位置发生改变，浏览器重新渲染部分或全部文档。

::: tip

文档流（又称标准流、正常流，英文：Normal flow）是指在不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式 —— 引自 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Introduction#normal_flow)

:::

会导致回流的操作：

- 浏览器窗口大小发生改变
- 元素尺寸、位置发生改变
- 元素内容变化（文字大小、文字数量、图片大小等）
- 添加或者删除**可见**的 `DOM` 元素
- 激活 `CSS` 伪类（例如：`:hover`）

### 重绘

重绘（repaint）：当 DOM 元素的样式（背景色、边框颜色、文字颜色等）发生改变，浏览器重新绘制该 DOM 元素。
