---
  title: BFC
---

块级格式化上下文（简称 BFC），形成一个独立的渲染区域，内部元素的渲染不会影响到外部元素。

* 在BFC中，盒子会在垂直方向上一个挨着一个的排布。
* 垂直方向的间距由margin决定。
* 属于同一个BFC的两个相邻盒子的margin会发生重叠。
* 在BFC中，每个元素的左外边距（margin-left）会触碰到包含块的左边界（对于从左往右的格式化，否则就触碰右边界），即使浮动元素也是如此。

## 创建 BFC

下列（常见）方式会创建 BFC：

1. 根元素（html 标签）
2. 浮动元素（float 不是 none）
3. 绝对定位元素（position 是 absolute 或 fixed）
4. overflow 不是 visible 的块级元素
5. 行内块元素（display 是 inline-block）
6. 弹性元素（display 是 flex 或 inline-flex）
7. 网格元素（display 是 grid 或 inline-grid）
8. 表格单元格（display 是 table-cell）

以上是 CSS2.1 规范定义的 BFC 触发方式，在最新的 CSS3 规范中，弹性元素和网格元素会创建 F(Flex)FC 和 G(Grid)FC。

## 应用场景

常用上述第 2、3、4 方式创建 BFC：

### 1.解决外边距重叠

相邻盒子垂直外边距相遇时，它们将形成一个外边距。在相邻元素外分别**包裹 BFC 容器**，把元素放到不同BFC中。

::: normal-demo 演示

```html
<div class="bfc">
  <div class="box"></div>
</div>
<div class="bfc">
  <div class="box"></div>
</div>
```

```css
.box {
  width :100px;
  height: 100px;
  background: red;
  margin: 20px;
}
.bfc{
  overflow: hidden;
}
```

:::

### 2.解决父容器高度塌陷

子元素设置浮动，脱离文档流致使父元素高度塌陷，可以使用清除浮动技巧依据计算 BFC 的高度时，浮动元素也参与计算，**使父元素成为 BFC 容器**

BFC解决高度塌陷需满足的两个条件

1. 浮动元素的父元素触发BFC，形成独立的块级格式化上下文。
2. 浮动元素的父元素的高度是auto。

::: normal-demo 演示

```html
<div class="container bfc">
  <div class="box"></div>
</div>
```

```css
.box {
  width :100px;
  height: 100px;
  background: red;
  float: left;
}
.container{
  background: #ccc;
}
.bfc {
  overflow: hidden
}
```

:::

### 3.实现自适应两列布局

左侧元素浮动覆盖右侧元素，使右侧元素成为 BFC 容器）[在线示例](http://js.jirengu.com/taguvarupa/2/edit?html,css,output)

::: normal-demo 演示

```html
<div class="box1"></div>
<div class="box2 bfc"></div>
```

```css
.box1 {
  width :100px;
  height: 100px;
  background: red;
  float: left;
}
.box2 {
  width: 150px;
  height: 150px;
  background: skyblue;
}
.bfc {
  overflow: hidden
}
```

:::

## 清除浮动

清除浮动常用代码：使用伪元素 `::after`**（给末尾添加一个看不见的块元素来清除浮动）**

设置父元素 `class = "clearfix"` 并添加样式 `.clearfix::after` 如下：

```css:no-line-numbers
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

::: normal-demo 演示

```html
<div class="box clearfix">
  <img src="/demo-img/cat-wink.webp" />
  <p>right text</p>
</div>
```

```css
.box {
  background-color: #ccc;
  border: solid 1px black;
}

.box img {
  float: left;
}

.box p {
  float: right;
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

:::

`:before` 与 `::before` 的区别：

- `:before` 和 `:after` 是 CSS2 的写法，所以兼容性较好。
- `::before` 和 `::after` 是 CSS3 的写法，为了将伪类 `:` 和伪元素 `::` 区分开。但是平时为了兼容性，还是会用一个冒号的写法。

## 参考资料

- [带你用最简单的方式理解最全面的BFC（视频）](https://www.bilibili.com/video/BV1aZ4y1M7gW?from=search&seid=15595530134411248037)
