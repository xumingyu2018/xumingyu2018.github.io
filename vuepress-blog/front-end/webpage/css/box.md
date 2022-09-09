---
  title: 盒模型
---

## 内容盒与边框盒

W3C 内容盒模型（content-box）：`width = content`

IE 边框盒模型（border-box）：`width = content + padding + border`

浏览器默认使用 W3C 内容盒模型，width = 内容，即 box-sizing 的默认属性为 content-box

**一般使用 IE 盒模型（border-box）**

## offsetWidth

`offsetWidth = content + padding + border`

`offsetWidth` 是一个 DHTML 对象模型中的属性，由微软 IE 浏览器首次引入。有时候它也可以称为一个元素的物理或图形尺寸，或者 border-box 的宽度。
