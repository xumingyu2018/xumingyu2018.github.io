---
title: slot插槽
category:
  - Vue2
---

## 插槽示例

> 插槽的使用过程其实是抽取共性、预留不同，将共同的元素、内容依然在组件内进行封装，将不同的元素使用 slot 作为占位，让外部决定到底显示什么样的元素

![](https://secure2.wostatic.cn/static/3yTrtgJxZwUpqCTur2g884/image.png?auth_key=1690560712-5Vx22jzUGMqF7Sb7k9YWkg-0-b8b8fe49f88d7000255e2799b6929da3)

![](https://secure2.wostatic.cn/static/wRiZFWdXsWfXT5GzLh6X72/image.png?auth_key=1690560711-5pEFsHewsaVFe8S95cmPmC-0-10b63ebb8df87dc28832da174c0853f3)

## 基本用法

```html
  <div id=#app>
    <cpn><button>具有按钮功能的cpn个性化组件</button></cpn>
    <cpn><p>带有p标签的cpn个性化组件</p></cpn>
    <cpn></cpn>
    <cpn>
      <i>呵呵呵</i>
      <div>我是div元素</div>
      <p>我是p元素</p>
    </cpn>
  </div>

  <template id="cpn">
    <div>
      <span>我是cpn组件</span>
      <p>slot的基本使用</p>
      <slot></slot>
      <!-- 插槽默认带按钮（后备内容） -->
      <!-- <slot><button>按钮</button></slot> -->
    </div>
  </template>
```

![](https://secure2.wostatic.cn/static/jtijsVdqAaxwJdEM3xqR4e/image.png?auth_key=1690560712-mQNF7wF5Ztvt1mJqRzydWC-0-74122af608c817cc62941cbd4c3797bb)

## 具名插槽

`v-slot:`→`#`（缩写）

注意 ：**`v-slot`\*\*** 只能添加在 \***\*`<template>`\*\*** 上\*\* (只有[一种例外情况](https://v2.cn.vuejs.org/v2/guide/components-slots.html#独占默认插槽的缩写语法))，这一点和已经废弃的 [`slot`](https://v2.cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法)[ attribute](https://v2.cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法) 不同（`slot`可以用在`<template>`上也可以用在普通元素上）。

```html
  <div id = "app">
    <!-- 在中插槽指定位置插入 -->
    <!-- 2.6.0以下的写法 -->
    <cpn><span slot="center">标题</span></cpn>

    <!-- 2.6.0以上的写法 -->
    <template v-slot:center>
      <cpn><span>标题</span></cpn>
    </template>

    <!-- 缩写 -->
    <template #center>
      <cpn><span>标题</span></cpn>
    </template>

    <!-- 动态插槽（name从data里面取出） -->
    <template v-slot:[name]>
      <cpn><span>标题</span></cpn>
    </template>
  </div>

  <template id="cpn">
    <div>
      <slot name="left"><span>左插槽</span></slot>
      <slot name="center"><span>中插槽</span></slot>
      <slot name="right"><span>右插槽</span></slot>
    </div>
  </template>
```

## 编译作用域

- 父组件模板的所有东西都会在父级作用域内编译
- 子组件模板的所有东西都会在子级作用域内编译

```html
  <div id="app">
    <cpn v-show="isShow"></cpn> <!-- true -->
    <cpn v-for="item in names"></cpn>
  </div>

  <template id="cpn">
    <div>
      <h2>我是子组件</h2>
      <button v-show="isShow">按钮</button> <!-- false -->
    </div>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        isShow: true
      },
      components: {
        cpn: {
          template: '#cpn',
          data() {
            return {
              isShow: false
            }
          }
        },
      }
    })
  </script>
```

![](https://secure2.wostatic.cn/static/2uGZppfZcj6DBzSH4foxyL/image.png?auth_key=1690560712-pTjWQqyk9oyfnnojVJF3XH-0-b9561c95ff38876e9a0a403a378c4aca)

## 作用域插槽

父组件替换插槽的标签，但是内容由子组件来提供。

作用域插槽：子组件提供内容（数据），在父组件中展示，延伸了子组件的作用域，用于定制化显示。（如`elementui`中的`table`表格数据定制）。

插槽：父组件提供内容，在子组件中展示。

```html
  <!-- 父组件 -->
  <cpn>
    <!-- 目的是获取子组件中的pLanguages数据内容 -->
    <!-- 不加slot-scope的话，访问不到子组件的pLanguages数据，因为编译作用域 -->
    <template slot-scope="slot">
      <span v-for="item in slot.data"> - {{item}}</span>
    </template>
  </cpn>

  <!-- 子组件 -->
  <template id="cpn">
    <div>
      <slot :data="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{item}}</li>
        </ul>
      </slot>
    </div>
  </template>

  <script>
    new Vue({
      // ...
      components: {
        cpn: {
          template: #cpn,
          data() {
            return { pLanguages: ['JavaScript', 'C++', 'Java', 'C#', 'Python', 'Go', 'Swift'] }
          }
        }
      }
    })
  </script>

```

![](https://secure2.wostatic.cn/static/vs8EuKneCbaAMMzfR1mqPs/image.png?auth_key=1690560713-p7zfXosRiK5bvWCuWZYFcR-0-3db92a3a4756d20e066423280e19c45f)

## 默认插槽和具名插槽混合

- 只有默认插槽时，组件的标签可以被当做插槽的模板来使用，v-slot 直接用在组件上

```html
<show-names :names="names" v-slot="slotProps">
  <span>{{slotPorps.item}}--{{slotProps.index}}</span>
</show-names>
```

- 若有默认插槽和具名插槽，则必须按照完整的 template 来编写，否则报错

```html
<show-names :names="names">
  <!-- 默认插槽（v-slot:default="slotProps"的缩写） -->
  <template v-slot="slotProps">
    <span>{{slotPorps.item}}--{{slotProps.index}}</span>
  </template>

  <!-- 具名插槽 -->
  <template v-slot:center>
    <h2>哈哈哈</h2>
  </template>
</show-names>
```
