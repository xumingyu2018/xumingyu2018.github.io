---
title: Pinia
category:
  - Vue3
---

> Pinia 开始于大概 2019 年，最初是作为一个实验为 Vue 重新设计状态管理，让它用起来像组合式 API（Composition API），从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容 Vue2、Vue3，也并不要求你使用 Composition API，Pinia 本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和 Vuex、Redux 一样）。

## Pinia 和 vuex 的区别

- Pinia 中 mutations 不再存在。
- 更友好的 TypeScript 支持，Vuex 之前对 TS 的支持很不友好。
- 不再有 modules 的嵌套结构。
- 不再有命名空间的概念，不需要记住它们的复杂关系。

## 简单使用

### 安装

`npm install pinia`

创建一个 pinia 并且将其传递给应用程序

```vue
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

### app 使用 pinia

```vue
import pinia from './store'

createApp(App).use(pinia).mount('#app')
```

### 定义 Store

Store 三个核心概念：`state`、`getters`、`actions`，等同于组件的`data`、`computed`、`methods`

```vue
import { defineStore } from 'pinia'

// 返回的是一个函数不是store，以useXXX命名
// defineStore第一个参数为唯一名称->id
const useCounter = defineStore("counter", {
  state: () => ({
    count=100
  }),
  getters: {
    ...
  },
  actions: {
    ...
  }
})

export default useCounter

```

### 使用 Store

- 使用 pinia 自带的`storeToRefs()`将数据变成响应式

注意：`storeToRefs`函数并不接受存储实例的属性作为参数，它期望接收的是整个存储实例对象（如：`storeToRefs(counterStore.count)`会有问题）

```vue
<template>
  <div class="home">
    <h2>doubleCount: {{ counterStore.count }}</h2>
    <h2>doubleCount: {{ count }}</h2>
  </div>
</template>

<script setup>
  import useCounter from '@/stores/counter';

  // 解构counterStore会失去响应式，但可以使用toRefs或storeToRefs进行转化
  const counterStore = useCounter()
  // const { count } = toRefs(counterStore)
  const { count } = storeToRefs(counterStore)
  // 注意：这样会有问题!!!!!!!!!!!
  const count = storeToRefs(counterStore.count)
</script>

<style scoped>
</style>
```

## State

### 修改 state

**使用 store 实例直接读取和写入**

`counterStore.attrubute = "xxx"`

**一次性修改多个**

```vue
counterStore.$patch({
  name: "never",
  age: "23",
  attrubute: "xxx"
})
```

### 重置 state

`counterStore.$reset()`

### 替换 state

`counterStore.$state = { ... }`

## Getters

### 基本使用

```vue
getters: {
  // 1.基本使用
  doubleCount(state) {
    return state.count * 2
  },

  // 2.一个getter引入另外一个getter
  doubleCountAddOne() {
    // this是store实例
    return this.doubleCount + 1
  },

  // 3.getters也支持返回一个函数
  getFriendById(state) {
    return function(id) {
      return state.friends.find(id)
    }
  },

  // 4.getters中用到别的store中的数据
  showMessage(state) {
    // 获取user信息
    const userStore = useUser()
    // 拼接信息
    return `name:${userStore.name}-count:${state.count}`
  }
},
```

## Action

### 同步 action

和 getters 一样，在 action 中可以通过 this 访问整个 store 实例的所有操作。

```javascript
actions: {
  increment() {
    this.counter++
  },
  incrementNum(num) {
    this.counte += num
  }
}
```

```vue
const counterStore = useCounter()

function changeState() {
  counterStore.increment()
  counterStore.incrementNum(10)
}
```

### 异步 action

```javascript
const useHome = defineStore("home", {
  state: () => ({
    banners: [],
    recommends: []
  }),
  actions: {
    async fetchHomeDataAction() {
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()

      this.banners = data.data.banner.list
      this.recommends = data.data.recommend.list

      return "aaa" // 等价于return Promise.resolve(aaa)默认返回undefined
    }
  }
})
```

```vue
// 调用
const counterStore = useCounter()

counterStore.fetchHomeDataAction().then(res => {
  console.log("fetchHomeMultidata的action已经完成了:", res)
})
```
