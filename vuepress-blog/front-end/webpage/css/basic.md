---
  title: 基础知识
---

## css文本的属性

`text-decoration`

设置文字装饰线

* none：无任何装饰线（可以去除a元素下划线）
* underline：下划线
* overline：上划线
* line-through：中划线（删除线）

`text-transform`

设置文字大小写转换

* capitalize：每个单词首字符变为大写
* uppercase：每个单词所有字符变为大写
* lowecase：每个单词所有字符变为小写
* none

`text-indent`

设置第一行内容缩进

* 2em：缩进2个文字

`text-align`（重要）

设置行内级元素（文本、图片等）对齐

* left
* right
* center
* justify：两端对齐

## css字体的属性

`font-size`

设置字体大小

`font-family`

设置字体名称

* @font-face：加载自定义字体

```html:no-line-numbers
@font-face {
  font-family: 'myFont';
  src: url('./fonts/AaJianHaoTi-2.ttf'); // 下载指定字体导入本地
}
```

`font-weight`

设置字体粗细

* normal：等于400
* bold：等于700

`font-style`

设置字体样式

* normal：正常
* italic：斜体（字体本身支持斜体时，显示的斜体）
* oblique：倾斜（文本进行倾斜）

`font-variant`

可以设置字体的小型大写字母

* normal：正常
* small-caps：小型大写字母

`line-hight`（重点）

设置文本行高（实质：两行文字基线之间的距离）

* 让line-height的值等于div的高heght，即可实现文本在div内部垂直居中。

`font缩写属性`

font: font-style font-variant font-weight font-size/line-height font-family

规则

* 1. font-size和font-family是必须的。
* 2. font-size和line-height之间用/分隔（/line-height可省略且必须跟在font-size后面）。
* 3. font-style、font-variant、font-weight的顺序可以任意，也可以省略。

## css常见选择器

`通配符选择器`

`简单选择器`

* 元素选择器：选择元素
* 类选择器：.class
* id选择器：#id

`属性选择器`

* [attr]：选择具有attr属性的元素
* [attr=val]：选择具有attr属性且值为val的元素
* [attr~=val]：选择具有attr属性且值为val的元素
* [attr|=val]：选择具有attr属性且值为val或以val-开头的元素
* [attr^=val]：选择具有attr属性且值以val开头的元素
* [attr$=val]：选择具有attr属性且值以val结尾的元素
* [attr*=val]：选择具有attr属性且值包含val的元素
* [attr1][attr2]：选择具有attr1和attr2属性的元素

`后代选择器`

* 选择器1 选择器2：选择器1所有后代中的选择器2（以空格分隔）
* 选择器1>选择器2：选择器1直接子代中的选择器2（以>分隔）

`兄弟选择器`

* 选择器1+选择器2：选择器1后面紧跟的兄弟选择器2（以+分隔）
* 选择器1~选择器2：选择器1后面所有的兄弟选择器2（以~分隔）

`交集选择器&并集选择器`

* 选择器1,选择器2：选择器1和选择器2的并集（以,分隔）
* 选择器1选择器2：选择器1和选择器2的交集（不分隔）

`伪类选择器`

动态伪类（固定顺序）

* :link：未访问的链接（只能用在a元素）
* :visited：已访问的链接（只能用在a元素）
* :focus：元素获得焦点
* :hover：鼠标悬停在元素上
* :active：鼠标点击元素

目标伪类

* :target：当前活动的目标元素

语言伪类

* :lang()：选择lang属性值为指定值（如：en）的元素

结构伪类

* :nth-child(n)：选择父元素的第n个子元素,当为n时，选择所有子元素
* :nth-last-child(n)：选择父元素的倒数第n个子元素
* :nth-of-type(n)：选择父元素的第n个同类型子元素
* :nth-last-of-type(n)：选择父元素的倒数第n个同类型子元素
* :first-child：选择父元素的第一个子元素
* :last-child：选择父元素的最后一个子元素
* :first-of-type：选择父元素的第一个同类型子元素
* :last-of-type：选择父元素的最后一个同类型子元素
* :only-child：选择父元素的唯一子元素
* :only-of-type：选择父元素的唯一同类型子元素
* :empty：选择没有子元素的元素（如用在小程序默认插槽）
* :root：选择文档的根元素

否定伪类

* :not(选择器)：选择不符合选择器的元素

`伪元素选择器`（行内非替换）

* ::first-line：选择元素的第一行
* ::first-letter：选择元素的第一个字母
* ::before（重要）：在元素之前插入内容
* ::after（重要）：在元素之后插入内容（不要将content省略）

## display特性

* block：块级元素（独占一行，可设置宽度和高度）
* inline：行内元素（和其它行内元素在同一行，不可以设置宽度和高度）
* inline-block：行内块元素（和其它行内元素在同一行，可设置宽度和高度）
* none：隐藏元素（不占据空间）

元素隐藏技巧

* display:none：隐藏元素，不占据空间
* visibility:hidden：隐藏元素，占据空间
* opacity:0：设置透明度隐藏元素及其所有子元素，占据空间
* rgba(0,0,0,0)：设置透明度隐藏元素不会影响子元素，占据空间

## 内容溢出处理

`overflow`

* visible（默认值）：内容不会被修剪，会呈现在元素框之外
* hidden：内容会被修剪，并且其余内容是不可见的
* scroll：内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容
* auto：如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容

## margin上下传递

如果块级元素的顶部线和父元素的顶部线重叠，那么块级元素的margin-top值会传递给父元素。

防止传递问题

* 父元素设置padding-top\padding-bottom
* 父元素设置border
* 触发BFC：设置overflow:hidden

## background属性

`background-color`：背景颜色

`background-image`：背景图片

`background-repeat`：背景图片平铺

* repeat：默认值，背景图片在水平和垂直方向平铺。
* repeat-x：背景图片在水平方向平铺。
* repeat-y：背景图片在垂直方向平铺。
* no-repeat：背景图片不平铺。

`background-position`：背景图片位置

* 水平方向：left、center、right、具体数值
* 垂直方向：top、center、bottom、具体数值
* 如果只设置一个值，那么另一个值默认为center（通常用来实现背景图片响应式）

`background-size`：背景图片大小

* auto：默认值，背景图片保持原始大小
* cover：背景图片缩放到填充整个容器，可能会导致图片部分看不见
* contain：缩放背景图片，宽度或高度铺满容器，保持图片的宽高比不变

`background-attachment`：背景图片是否固定

* scroll：默认值，相对于元素本身固定，而不是随着它的内容滚动
* local：相对于元素的内容固定，如果一个元素拥有滚动机制，背景将会随着元素的内容滚动
* fixed：相对于浏览器窗口固定，即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动（类似于视差滚动）

`background`：简写属性

* background：#fff url(../img/bg.jpg) no-repeat center center/cover fixed

## 表单元素

`input`

* type：`text、password、radio、checkbox、button、submit、reset、file、hidden、image、email、url、number、range、date、month、week、time、datetime、datetime-local、search、tel、color`

input和label的关联

* label可以跟某个input绑定，点击label时，input会自动获得焦点。
* 在类型为radio的input中，如果name相同，那么两个radio才能变为一组就会互斥即二选一。

```html:no-line-numbers
<label for="username">
  用户名：<input type="text" id="username">
</label>
<label for="password">
  密码：<input type="password" id="password">
</label>
<label for="male">
  <input type="radio" id="male" name="sex" value="male">男
</label>
<label for="female">
  <input type="radio" id="female" name="sex" value="female">女
</label>
```

## 定位

`position`

* static：默认值，元素在文档流中正常显示，top、right、bottom、left、z-index属性在static下无效。
* relative（一般用于对当前元素微调）：相对于自己原来的位置进行定位，不脱离标准流。
* absolute：相对于**最邻近**的一个**非static定位**的祖先元素进行定位；若没有这样的祖先，则相对于视口进行定位，脱离标准流（子绝父相）。
* fixed：相对于浏览器窗口（视口：当画面滚动时，固定不动）进行定位，脱离标准流（常用）。
* sticky（最新）：它的行为就像 `position:relative`; 而当页面滚动超出阈值（top、right、bottom、left）时，它的表现就像 `position:fixed`，它会固定在目标位置，是相对于最近的滚动祖先包含的滚动视口。

![定位总结](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230117230021.png)

`将position设置为absolute和fixed元素的特点`

* 可以随意设置宽高，块级、行内级、行内块级元素的**特性消失**（如行内级元素可以设置宽高）。
* 宽高默认由内容决定。
* 不再给父元素汇报宽高数据（如父元素的高度由子元素撑开，子元素设置为绝对定位后，父元素高度不再由子元素撑开）。
* 脱标元素内部默认还是按照标准流布局。

定位参照对象的宽度（父元素） = left + right + margin-left + margin-right +绝对定位元素的宽度（子元素）

定位参照对象的高度（父元素） = top + bottom + margin-top + margin-bottom +绝对定位元素的高度（子元素）

```css:no-line-numbers
/* 子元素在父级元素里面水平垂直居中 */
.child{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

`width:auto`

* 行内非替换元素：width包裹内容
* 块级元素：width包含块的宽度
* 绝对定位元素：width包含内容

## 浮动规则

* 只能向左浮动或者向右浮动，不能超出本行高度。
* 不能超出包含块。
* 浮动元素不能层叠。
* 浮动元素会将行内级元素内容推出。

`clear属性`

指定一个元素是否必须移动（清除浮动后）到在它之前的浮动元素下面，用于清除浮动，解决浮动产生的高度塌陷问题。

```css:no-line-numbers
/* 给父元素增加::after伪元素 */
.clear-fix::after {
  content: "";
  display: block; /* 伪元素为行内非替换元素，没有高度 */
  clear: both; /* 值:left、right、both、none */

  /* 浏览器兼容性 */
  visibility: hidden;
  height: 0;
}

/* IE6/7兼容性 */
.clear-fix {
  *zoom: 1;
}
```

## 形变动画

`transform形变`

* 2D形变：`translate`（平移）、`scale`（缩放）、`rotate`（旋转）、`skew`（倾斜）、`transform-origin`（形变坐标原点）
* 3D形变：`translate3d`、`scale3d`、`rotate3d`、`skew3d`

`transition过渡`

* `transition-property`：过渡属性
* `transition-duration`：过渡时间
* `transition-timing-function`：过渡函数
  - `linear`：匀速
  - `ease`：缓冲
  - `ease-in`：加速
  - `ease-out`：减速
  - `ease-in-out`：先加速后减速
* `transition-delay`：过渡延迟时间

`animation动画`

* `animation-name`：动画名称（与@Keyframes的标识符要对应）
* `animation-duration`：动画时间（常用）
* `animation-timing-function`：动画函数（常用）
* `animation-delay`：动画延迟
* `animation-iteration-count`：动画次数
* `animation-direction`：动画方向
  - `normal`：正常方向
  - `reverse`：反向
  - `alternate`：交替
  - `alternate-reverse`：交替反向
* `animation-fill-mode`：元素停留在动画的哪个位置
  - `none`：动画结束后，元素恢复到初始状态
  - `forwards`：动画结束后，元素保持动画最后一帧的状态（常用）
  - `backwards`：动画结束后，元素保持动画第一帧的状态
* `animation-play-state`：动画状态（JavaScript中使用）
  - `paused`：暂停（音乐播放器常用）
  - `running`：运行
* `animation`：简写属性
  - `animation: name duration timing-function delay iteration-count direction fill-mode play-state`;
* `@keyframes`：定义每一帧的属性

```css:no-line-numbers
  @keyframes name {
    from {
      /* 起始状态 */
    }
    to {
      /* 结束状态 */
    }
  }

  @keyframes name {
    0% {
      /* 起始状态 */
    }
    50% {
      /* 中间状态 */
    }
    100% {
      /* 结束状态 */
    }
  }
```

## Emmet语法

!：生成html文档

+：兄弟 >：子代

* `div>ul>li+li+li`

*：多个 ^：父级

* `div>ul>li*3`
* `div+div>p>span^h1`

()：分组 $：迭代个数

* `(header>div>p+span)+footer>p`
* `ul>li.item$*3`

属性(id属性、class属性等)

* `div#id.class1.class2`

css Emmet

* w100：`width：100px`
* h100：`height：100px`
* m10：`margin：10px`
* p10：`padding：10px`

## 其它

`outline`

外轮廓线，不占据空间，用于去除a元素和input元素的默认focus轮廓效果。

* outline：none：隐藏外轮廓线（常用）

`单行显示省略号`

* white-space：nowrap（单行显示，合并空白）
* overflow：hidden（超出部分隐藏）
* text-overflow：ellipsis（超出部分用省略号显示）、clip（超出部分直接裁剪）

`referrerpolicy`

在获取资源（如图片等）时使用来源地址，用于防止盗链。

* no-referrer：不发送来源地址，一般用于获取来源图片

`border-collapse`

* collapse：合并单元格边框
* separate：不合并单元格边框

`精灵图`

* [精灵图快速定位工具网站](http://www.spritecow.com/)

优点：减少http请求，减少图片大小，提高页面加载速度

缺点：不利于SEO，不利于维护，不利于修改

`vertical-align`

* 默认值：baseline（在行盒中以基线对齐）
  - 文本的baseline是字母x的下方。
  - inline-block默认的baseline是margin-bottom的底部（没有就是盒子的底部）。
  - inline-block有文本时，baseline是最后一行文本的x的下方。
* top：把行内级盒子的顶端与行盒的顶端对齐
* bottom：把行内级盒子的底端与行盒的底端对齐
* middle：行内级盒子的中心点与父盒基线加上x字母高度一半的线对齐

`flex布局中justify-content最后一行布局问题`

![flex布局常见问题](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119222811.png)

```html:no-line-numbers
<!-- 解决方案：加跟item宽度相等的空标签填充 -->
.container > i {
  <!-- 与iten宽度相等 -->
  width: 110px 
}

<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <!-- 添加i的个数是列数-2 -->
  <i></i>
  <i></i>
</div>
```

`CSS常用函数`

rgb()/rgba()/translate()/rotate()/scale()

* var()：变量

```css:no-line-numbers
html {
  --main-color: #f00;
}

.box {
  background-color: var(--main-color);
}

span {
  color: var(--main-color);
}
```

* calc()：计算
  - 如`calc(100% - 20px)`（运算符两边必须要有空白字符）
* blur()：毛玻璃
  - `filter: blur(10px)`
  - `backdrop-filter: blur(10px)` + `background-color: rgba(255, 255, 255, 0.5)`
* gradient()：颜色渐变
  - `background-image: linear-gradient(45deg, blue, red)`

`媒体查询`

1. `@import url(../css) (max-width: 800px)`
2. `<link rel="stylesheet" media="screen and (max-width: 800px)" href="../css">`
3. `@media screen and (max-width: 800px) and (min-width: 500px) { ... }`
4. 使用`Window.matchMedia()`和`MediaQueryList.addListener()`来测试和监控媒体状态

```css:no-line-numbers
/* 利用了CSS的层叠性 */
@media screen and (min-width: 320px) {
  /* 320~375 */
  .box { font-size: 15px;}
}
@media screen and (min-width: 375px) {
  /* 375~414 */
  .box { font-size: 18px;}
}
@media screen and (min-width: 414px) {
  /* 414~480 */
  .box { font-size: 21px;}
}
@media screen and (min-width: 480px) {
  /* >480 */
  .box { font-size: 24px;}
}
```
