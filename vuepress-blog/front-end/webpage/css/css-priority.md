---
  title: CSS 优先级
---

## 样式类型优先级

优先级递减顺序：

1. 行内样式：`style=""`
2. 内联样式与外联优先级相同，遵循后面覆盖前面原则：[在线示例](https://codesandbox.io/s/eloquent-https-qq30x)

- 内联样式：`<style></style>`
- 外联样式：`<link> 或 @import 引入`（@import 不建议使用）

## 选择器类型优先级

优先级递减顺序：

1. ID 选择器（`#example`）
2. 类（`.example`）、属性（`[type="radio"]`）、伪类（`:hover`）选择器
3. 标签（`h1`）、伪元素（`::before`）选择器
4. 通配符（`*`）、关系选择器（有相邻兄弟、子类、通用兄弟、后代、列合并选择器[`+`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator), [`>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator), [`~`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator), [''](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator), [`||`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Column_combinator)）、反选伪类（[`:not()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)在 `:not()` 内部声明的选择器会影响优先级）

## 权重计算规则

1. 最高优先级 `!important`
2. `1,0,0,0`  行内样式
3. `0,1,0,0`  ID 选择器
4. `0,0,1,0`  类、属性、伪类选择器
5. `0,0,0,1`  标签、伪元素选择器
6. `0,0,0,0`  通配符、子类、兄弟选择器
7. 继承的样式没有权值

> 权重的进制是 256 进制，越具体权重越高，后面覆盖前面。`!important`最高，但尽量少用，避免样式优先级内卷 :dog:
