---
  title: CSS 三角形
---

使用 CSS 实现三角形

## border-color

如果想实现其中的任一个三角形，把其他方向上的 `border-color` 都设置成透明即可。

```css:no-line-numbers
.triangle {
  height:0;
  width:0;
  border-color:red transparent transparent transparent;
  border-style:solid;
  border-width:30px;
}
```

## clip-path

`MDN` 上的介绍：[chip-path](https://link.segmentfault.com/?enc=%2BEoKGNFcwABTwKK7f9p%2FdA%3D%3D.tW69nYL28m3%2Bt%2Fj9PyCiE5bXQzeBwag4yByKPf6OpByWPDqiwV6Zi6wTlcE3%2FwuEa5KOgX6Kef0s1uIoArSPyg%3D%3D)

```css:no-line-numbers
.triangle {
  width: 30px;
  height: 30px;
  background: red;
  clip-path: polygon(0px 0px, 0px 30px, 30px 0px); // 将坐标(0,0),(0,30),(30,0)连成一个三角形
  transform: rotate(225deg); // 旋转225，变成下三角
}
```
