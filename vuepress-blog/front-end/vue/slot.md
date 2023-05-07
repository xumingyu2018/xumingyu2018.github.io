---
title: slot插槽
category:
  - Vue2
---

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

## 具名插槽

`v-slot:`→`#`（缩写）

注意 ：**`v-slot`只能添加在****`<template>`**** 上** (只有[一种例外情况](https://v2.cn.vuejs.org/v2/guide/components-slots.html#独占默认插槽的缩写语法 "一种例外情况"))，这一点和已经废弃的 [slot](https://v2.cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法 "slot")[ attribute](https://v2.cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法 " attribute") 不同（`slot`可以用在`<template>`上也可以用在普通元素上）。

```html
  <div id = "app">
    <!-- 在中插槽指定位置插入 -->
    <!-- 2.6.0以下的写法 -->
    <cpn><span slot="center">标题</span></cpn>
    <!-- 2.6.0以上的写法 -->
    <template v-slot:center>
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

父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。如：

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

## 作用域插槽

父组件替换插槽的标签，但是内容由子组件来提供。

```html
  <!-- 父组件 -->
  <cpn>
    <!-- 目的是获取子组件中的pLanguages数据内容 -->
    <!-- 不加slot-scope的话，访问不到子组件的pLanguages数据，因为编译作用域 -->
    <template slot-scope="slot">
      <span v-for="item in slot.data"> - {{item}}</span>
    </template>
  </cpn>
  
  <template id="cpn">
    <div>
      <slot :data="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{item}}</li>
        </ul>
      </slot>
    </div>
  </template>
  
  new Vue({
    <!-- ... -->
    components: {
      cpn: {
        template: #cpn,
        data() {
          return { pLanguages: ['JavaScript', 'C++', 'Java', 'C#', 'Python', 'Go', 'Swift'] }
        }
      }  
    }
  })

```
