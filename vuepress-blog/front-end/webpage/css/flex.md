---
title: Flex 布局
---


![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220424174635.png)

容器即父元素，项目即子元素

## Flex container容器

`display: flex | inline-flex;` 分别生成一个块状或行内的 flex 容器盒子。简单说来，如果你使用块元素如 div，你就可以使用 flex，而如果你使用行内元素，你可以使用 inline-flex。

有下面六种属性可以设置在容器上：

1. `flex-direction` 主轴的方向 （默认：row 水平）
2. `flex-wrap` 容器内项目是否可换行 (默认：nowrap 不换行 常用：wrap)
3. `flex-flow` flex-direction 和 flex-wrap 的简写形式 （没用）
4. `justify-content` 项目在主轴的对齐方式。（默认: flex-start 左对齐）

![justify-content属性](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119183329.png)

5. `align-items` 项目在交叉轴上的对齐方式（默认：stretch 即如果项目未设置高度或者设为 auto，将占满整个容器的高度。）

![align-items属性](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119185222.png)

6. `align-content` 多根轴线的对齐方式，如果项目只有一根轴线，即`flex-wrap: nowrap` 不换行，那么该属性将不起作用（默认值为 stretch）

![align-content属性](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119190026.png)

## Flex item项目

有下面六种属性可以设置在项目上：

1. `order` 项目在容器中的排列顺序，数值越小，排列越靠前（默认值为 0）
2. `flex-basis` 项目在主轴上占据的空间（默认值：auto，即项目本来的大小，优先级高于 weight、height）
3. `flex-grow` 项目的放大拉伸比例（默认值为 0，即如果存在多余空间，也不放大）
    - 如果所有项目的`flex-grow`属性都为 1，则它们将等分剩余空间（如果有的话）。
    - 当flex container在主轴方向上有剩余size时，才生效。
4. `flex-shrink` 项目的缩小比例（默认值: 1，即如果空间不足，该项目将缩小，负值对该属性无效）
5. `flex` flex-grow, flex-shrink 和 flex-basis的简写（默认值是 0 1 auto）
有关快捷值：`auto (1 1 auto)` 、 `none (0 0 auto)` 、`1`
建议优先使用这个属性，而不是单独写三个分离的属性。
6. `align-self` 单个项目在交叉轴的对齐方式 (center、flex-end)

![align-self属性](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119205617.png)

## 参考资料

- [30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)
- [20分钟掌握CSS Flex布局](https://www.bilibili.com/video/BV1oK4y1j7pa?p=1&share_medium=iphone&share_plat=ios&share_source=COPY&share_tag=s_i&timestamp=1610808415&unique_k=jqCDwC)
