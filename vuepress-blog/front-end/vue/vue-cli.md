---
title: vue脚手架
category:
  - Vue2
---

## Vue CLI2

- 初始化项目：`vue init webpack my-project`

![Vue CLI2初始化配置](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_JKmoMaOB7b.png)

![Vue CLI2项目结构](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_X5myd6D0LH.png)

## Vue CLI3

- 初始化项目：`vue create my-project`

![Vue CLI3初始化配置](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_OhkEllHrlu.png)

![Vue CLI3项目结构](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_O7X0NRDwpm.png)

Runtime-Compiler 和 Runtime-only

- 如何在开发中使用template，选择Runtime-Compiler。
- 如何在开发中使用的是.vue文件夹开发，那么可以选择Runtime-only

```javascript
// 一下两者等价
// 这种情况需要编译器
new Vue({
  el: '#app',
  components: { App },
  template: '<App>'
})

// 这种情况不需要
new Vue({
  el: '#app',
  render: h => h(App)
})
```

## Vue程序运行过程

- `template` → `ast `（Runtime-Compiler）→ `render `→ `vdom `→ `真实dom`

![Vue程序运行过程](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_vJpkJt2w7m.png)
