---
  title: 常用标签
---

## a标签

属性：

* href
* target
* download

作用：

* 跳转外部页面
* 跳转内部锚点
* 跳转到邮箱或电话

### href 属性

* 网址

  <https://google.com>

  <http://google.com>

  //google.com

* 路径

  index.html

  ./index.html

* 伪协议

  `javascript:代码;`

  `mailto:邮箱`

  `tel:手机号`

* id

  `href = #xxx` 跳转内部锚点

### target 属性

* 内置名字

  _blank （在新页面打开）

  _top   （在最上层内联框架打开）

  _parent（在父级内联框架内打开）

  _self  （默认：在当前页面打开）

* 自定义名字

  window 的名字

  iframe 的名字

### download 属性

下载页面，不是所有浏览器都支持

## iframe 标签（不推荐使用）

## table 标签

* thead
* tbody
* tfoot
* tr
* td
* th

```html:no-line-numbers
<table>
  <thead>
    <tr>
      <th></th>
      <th>小明</th>
      <th>小红</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>数学</th>
      <td>100</td>
      <td>99</td>
    </tr>
    <tr>
      <th>语文</th>
      <td>100</td>
      <td>99</td>
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>
```

<img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image-20210326175514184.png" alt="image-20210326175514184" style="zoom:33%;" />

样式

* table-layout （ auto 与 fixed ）

清除 table 默认样式

```css:no-line-numbers

table {
 border-collapse: collapse;
 border-spacing: 0;
}
```

## img 标签

作用：

* 发出 get 请求，展示图片

属性：

* alt （图片加载失败时替换文本）
* height
* width
* src

事件：

* onload
* onerror

响应式：

* max-width: 100%

## form 标签

作用：

* 发出 get 和 post 请求，然后刷新页面

属性：

* action、autocomplete、method、target

事件：

* onsubmit

```html:no-line-numbers
<input type="submit" value="提交" />
<button type="submit">提交</button>
// 区别：button标签内可以加其他标签，如图片、加粗等。input不能
```

## input 标签

作用：

* 让用户输入内容

属性：

* type: button / checkbox / email / file / hidden / number / password / radio / search / submit / tel / text
* 其他 name/ autofocus/ checked/ disabled/ maxlength /pattern/value/placeholder

事件：

* onchange
* onfocus
* noblur

验证器：

* H5新增(required)

## 其他输入标签

* select + option
* textarea
* label

> 一般不监听 input的 click 事件
>
> form 标签中的 input 要有 name
>
> form 标签中必须有`type = submit`的按钮`input`或`button`，否则无法提交

* meta

```html:no-line-numbers
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

 让viewport的宽度等于物理设备上的真实分辨率，不允许用户缩放

|              | 是否独占一行 | width、height | padding、margin                                 | 默认宽高             |
| ------------ | ------------ | ------------- | ----------------------------------------------- | -------------------- |
| 块级元素     | 是           | 有效          | 有效                                            | 撑满父元素           |
| 行内元素     | 否           | 无效          | padding 有效；margin 水平方向有效，竖直方向无效 | 随内部元素的内容变化 |
| 行内块级元素 | 否           | 有效          | 有效                                            | 随内部元素的内容变化 |

* 常⽤的块级元素：`<div>`、`<p>`、`<h1>~<h6>`、`<ol>`、`<ul>`、`<dl>`、`<table>`、`<blockquote>`、`<form>`
* 常⽤的内联元素：`<a>`、`<span>`、`<br>`、`<i>`、`<em>`、`<strong>`、`<label>`、`<q>`、`<code>`
* 常⽤的内联元素：`<img>`、`<input>`、`<td>`、`<textarea>`、`<select>`
