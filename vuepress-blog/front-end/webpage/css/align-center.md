---
title: 水平垂直居中
---

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f74f5f6ec9946528a6ba8ccc305a812~tplv-k3u1fbpfcp-watermark.image)

## 基本代码

### 块级元素

注：把宽、高、边框、背景色作为内联样式，便于直观理解实现垂直和水平居中的 CSS 代码。

```html:no-line-numbers
<div style="width:200px; height:200px; border:1px solid black" class="parent">
  <div style="width:100px; height:100px; background:red" class="child">文字</div>
</div>
```

### 行内元素

行内元素不设置宽高

```html:no-line-numbers
<div style="width:200px; height:200px; border:1px solid black" class="parent">
  <span style="background:red" class="child">文字</span>
</div>
```

### CSS 代码

```css:no-line-numbers
* {
  box-sizing: border-box
}
```

## 水平居中

### 行内元素

#### 单行/多行文字

```css:no-line-numbers
.parent {
  text-align: center;
}
```

效果图：

<img class="small-img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a5e6355e359478ba60ab5593d2203dc~tplv-k3u1fbpfcp-watermark.image"/>

### 块级元素

#### 1. flex

```css:no-line-numbers
.parent { 
  display: flex; 
  justify-content: center;
}
```

效果图：

<img class="small-img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abece30e334341489e9b2fe8dd6fe8cc~tplv-k3u1fbpfcp-watermark.image"/>

#### 2. margin: auto

```css:no-line-numbers
.child {
  margin: auto; /* 盒子外水平居中 */
}
```

效果图：

<img class="small-img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abece30e334341489e9b2fe8dd6fe8cc~tplv-k3u1fbpfcp-watermark.image"/>

```css:no-line-numbers
.child {
  text-align: center; /* 盒子内水平居中 */
  margin: auto;
}
```

效果图：

<img class="small-img" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49322cec47244804b3ccf815e730fe54~tplv-k3u1fbpfcp-watermark.image"/>

#### 3. 绝对定位

> 需要提前知道 `child` 的尺寸

（1）left: 50% + margin-left: -宽度的一半

```css:no-line-numbers
.parent {
  position: relative;
}
.child {
    position: absolute;
    left: 50%;
    margin-left: -50px; 
}
```

（2）left/right: 0 + margin: auto

```css:no-line-numbers
.parent {
  position: relative;
}
.child {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}
```

（3）left: 50% + transform

```css:no-line-numbers
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
```

效果图均为：

<img class="small-img" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20e9d76e87934e2cb97b076fea181ba5~tplv-k3u1fbpfcp-watermark.image"/>

## 垂直居中

### 行内元素

#### 单行文字

`line-height: height` （行高=父高）

> 主要用于文字的排版，也可以用于图片元素居中

```css:no-line-numbers
.child {
  line-height: 200px;
}
```

效果图：

<img class="small-img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f6fe70741234365b72c016dbda80334~tplv-k3u1fbpfcp-watermark.image"/>

#### 多行文字

`table-cell` + `inline-block` + `vertical-align: middle`

```html:no-line-numbers
<div style="width:200px; height:200px; border:1px solid black" class="parent">
  <span style="background:red" class="child">多行文字<br>多行文字<br>多行文字<br>多行</span>
</div>
```

```css:no-line-numbers
.parent {
  display: table-cell;
  vertical-align: middle;
}
.child {
  display: inline-block;
  vertical-align: middle;
}
```

效果图：

<img class="small-img" src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7eaf0512f16344f8a6c094a8af70f657~tplv-k3u1fbpfcp-watermark.image"/>

### 块级元素

#### 1. flex

> 只要不考虑兼容 IE，flex 一把梭。

```css:no-line-numbers
.parent {
  display: flex;
  align-items: center;
}
```

#### 2. table-cell

```css:no-line-numbers
.parent {
  display: table-cell;
  vertical-align: middle;
}
```

#### 3. 绝对定位

> 需要提前知道 `child` 的尺寸

（1）top: 50% + margin-top: -高度的一半

```css:no-line-numbers
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    margin-top: -50px;
}
```

（2）top/bottom: 0 + margin: auto

```css:no-line-numbers
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

（3）top: 50% + transform

```css:no-line-numbers
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
```

效果图均为：

<img class="small-img" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcab55af9b304d4fb2f1b5f566a0b2b4~tplv-k3u1fbpfcp-watermark.image"/>

#### 4. 伪元素

>:before、:after 必须都写

```css:no-line-numbers
.parent {
    text-align: center;
}
.child {
    display: inline-block;
    vertical-align: middle;
}
.parent::before {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;            
}
.parent::after {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;            
}
```

效果图：

<img class="small-img" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3eaa2e6adda14bc4b89515313211234e~tplv-k3u1fbpfcp-watermark.image"/>

#### 5. table 标签

> 不推荐使用

```html:no-line-numbers
<table class="parent">
  <tr>
    <td class="child">
      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
    </td>
  </tr>
</table>
```

```css:no-line-numbers
.parent{
  border: 1px solid black;
  height: 200px;
  width: 200px;
}
.child{
  background: red
}
```

效果图：（table 标签自带 2px 空隙）

<img class="small-img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c71b25a1a3ab4466aea1efbfa12c21a5~tplv-k3u1fbpfcp-watermark.image"/>

## 总结

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f74f5f6ec9946528a6ba8ccc305a812~tplv-k3u1fbpfcp-watermark.image)

## 参考资料

- [CSS设置居中的方案总结-超全](https://juejin.cn/post/6844903560879013901)
- [一起搞懂 CSS 水平居中与垂直居中的16个方法](https://juejin.cn/post/6844903799446831117)
