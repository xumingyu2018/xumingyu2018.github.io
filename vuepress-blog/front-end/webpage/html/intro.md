---
  title: 概述
---

**H**yper**T**ext **M**arkup **L**anguage，超文本标记语言，简称：**HTML**，是一种描述网页的，构建⽹⻚基本结构的标记语言，而非编程语言。

## HTML 结构

```html:no-line-numbers
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
  <title>网页标题</title>
  <style></style>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

1. 文档类型：`<!DOCTYPE>` 指定浏览器文档使用何种规范，有 HTML、XHTML 规范
2. 网页语言：`<html lang="">` 指定网页语言，常用的有 "zh-CN"、"en"
3. 根元素 `<html>`
4. head 元素：指定网页数据信息、样式表等，包括 `<link>`、`<meta>`、`<style>` 等
5. 元标签：`<meta>`
   1. 字符集（charset），常用的有 "UTF-8"、"GBK"
   2. IE 兼容 `<meta http-equiv="X-UA-Compatible" content="IE=edge">` 告诉 IE 使用最新的引擎渲染网页
   3. 视口 `<meta name="viewport">` 控制页面在移动端浏览器中的布局
      * 视口宽度：设备宽度
      * 初始缩放比例：1
      * 最小缩放比例：1
      * 最大缩放比例：1
      * 禁止用户缩放
      * 视口适配刘海屏：覆盖
6. 网页标题图标 `<link rel="icon" href="/favicon.ico" />`<br />
7. body 元素：包含了可见的页面内容

> 由于一开始的网页主要只是用于在 PC 上展示，所以开发者们并没有过多考虑关于移动端访问的问题，但随着移动端的兴起，越来越多的 Web 访问变成了通过移动端进行的。而由于 PC 端的 viewport 比移动端大，所以为了解决这个问题，浏览器只能的等比的缩小整个页面，导致页面的字体，图片等等都显得非常小，而由于 PC 端的 viewport 是横屏的（宽大大于高），而移动端是竖屏，所以用户放大网页之后还会出现横向的滚动条，这一系列都让用户体验相当不好。 所以为了解决上面的问题，最早由 Apple 在 Safari iOS 中引入了 viewport meta 标签，让 Web 开发人员控制视口的大小和比例。
>
> 引用自 [[ 面试系列 ] - 二：meta viewport 是做什么用的，怎么写？](https://juejin.cn/post/6844904110873919502)
