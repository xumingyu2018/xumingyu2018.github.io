---
  title: HTML5
---

自 1999 年以后 HTML 4.01 已经改变了很多。今天，在 HTML 4.01 中的几个已经被废弃，这些元素在 HTML5 中已经被删除或重新定义。

为了更好地处理今天的互联网应用，HTML5 添加了很多新元素及功能，比如: 图形的绘制，多媒体内容，应用程序缓存，存储，网络工作者等。

## 语义化标签

**使用恰当语义的 HTML 标签、CSS 类名，让页面具有良好的语义和结构，从而方便人类和机器都能快速理解网页内容**

* 文章：`<article>`
* 边栏：`<aside>`
* 主要内容：`<main>`
* 导航：`<nav>`
* 区域：`<section>`
* 网页页眉或 `<section>` 的头部：`<header>`
* 网页页脚或 `<section>` 的脚部：`<footer>`
* 段落：`<p>`
* 标题：`<h1>~<h6>`
* 标题组：`<hgroup>`，包住多个 `<h1>~<h6>`
* 时间：`<time>` `<time>9:00</time>`、`<time datetime="2021-07-17">日期</time>`

`<b>`、`<strong>`、`<i>`、`<em>` 的异同点：

同：`<b>` 和 `<strong>` 会让文本变粗；`<i>` 和 `<em>` 会让文本斜体。

异：

* `<b>` 定义粗体的文本。
* `<strong>` 把文本定义为粗体语气更强的强调的内容。
* `<i>` 定义斜体的文本。
* `<em>` 把文本定义为斜体强调的内容。

![v2-a99aec34ad154369ecc31954c1b9d036_r](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06543674002f42edbf2f4fec9a7bcebd~tplv-k3u1fbpfcp-zoom-1.image)

## 语义化好处

对人：

* 便于团队的开发和维护。
* 在没有加载 CSS 的情况下也能呈现较好的内容结构与代码结构，易于阅读。

对机器：

* 有利于 SEO（搜索引擎优化），搜索引擎的爬虫依赖于标签来确定上下文和各个关键字的权重。
* 方便其他设备的解析（如屏幕阅读器、盲人阅读器等），利于无障碍阅读，提高可访问性。

## 多媒体标签

```html:no-line-numbers
<audio controls autoplay loop='true'>
  <source src="./source/audio.mp3"/>
</audio>

<video controls poster='imgs/poster.jpg'>
  <source src="./source/video.mp4">
</video>
```

属性：

* controls：展示多媒体控制面板
* autoplay：是否自动播放
* loop：是否循环播放
* poster：指定视频封面
* source：指定音视频源

## Canvas 标签

1. 首先获取 `canvas`  
   `let canvas = document.getElementById('canvas')`
2. 获取 canvas 2d 上下文  
   `let ctx = canvas.getContent('2d')`
3. 设置笔刷样式、绘制形状，开始绘制
