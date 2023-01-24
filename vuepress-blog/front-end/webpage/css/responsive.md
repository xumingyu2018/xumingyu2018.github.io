---
  title: 响应式
---

媒体查询

`@media only screen and (min-width: 375px) and (max-width: 413px) {}`

em 相对于自己的 font-size（不常用）

rem 相对于根元素 html 的 font-size（常用）

- 动态设置html的font-size（font-size：视口的宽度 / 10，可引入lib-flexible）
- 换算成rem的单位（webpack、pxtorem插件、Less混入）

vh 相对于视口高度的百分比（100vh）

vw 相对于视口宽度百分比（100vw）

vmax、vmin 获取视口高度与宽度相比的最大、最小值（手机横竖旋转视口宽高会对调）

window.screen.height 显示屏高度

window.innerHeight 视口高度（除去浏览器导航栏等浏览器自带功能键的高度）

document.body.clientHeight 网页文档 body 高度

**vw相比于rem的优势**（1rem = 10vw）：

- 不需要去计算html的font-size，也不需要给html设置font-size；
- 不会因为设置html的font-size，而必须给body再设置一个font-size，防止继承；
- 因为不依赖font-size的尺寸，所以不用担心某些原因html的font-size尺寸被篡改，导致页面尺寸混乱；
- 更加语义化，1vw刚好是百分之一的viewport的大小；
- 具备rem之前所有的优点；
