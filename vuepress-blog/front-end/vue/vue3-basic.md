---
title: Vue3基础
category:
  - Vue3
---

## 自定义指令

自定义自动聚焦指令`v-focus`

- 自定义局部指令：组件中通过 `directives` 选项，只能在当前组件中使用；
- 自定义全局指令：app 的 `directive` 方法，可以在任意组件中被使用

### 局部指令

**选项式 API**

在`mounted`元素挂载后执行

```vue
<input type="text" v-focus>

<script>
  export default {
    directives: {
      focus: {
        // 生命周期的函数(自定义指令)
        mounted(el) {
          // console.log("v-focus应用的元素被挂载了", el)
          el?.focus()
        }
      }
    }
  }
</script>
```

**组合式 API**

必须要以 v 开头且不能为 v-命名

```vue
const vFocus = {
  // 生命周期的函数(自定义指令)
  mounted(el) {
    // console.log("v-focus应用的元素被挂载了", el)
    el?.focus()
  }
}
```

### 全局指令

```vue
// App.vue
const app = createApp(App)
app.directive("focus", {
  mounted(el) {
    el?.focus()
  }
})

```

### 自定义指令的生命周期

- `created`：在绑定元素的属性（如 class 属性）或事件监听器被应用之前调用；
- `beforeMount`：当指令第一次绑定到元素并且在挂载父组件之前调用；
- `mounted`：在绑定元素的父组件被挂载后调用；
- `beforeUpdate`：在更新包含组件的 `VNode` 之前调用；
- `updated`：在包含组件的 `VNode` 及其子组件的 `VNode` 更新后调用；
- `beforeUnmount`：在卸载绑定元素的父组件之前调用；（`v-if`卸载）
- `unmounted`：当指令与元素解除绑定且父组件已卸载时，只调用一次；

### 自定义指令的参数和修饰符

通过 `bindings` 获取

```vue
// 1.参数:xmy-修饰符:abc.cba-值:message
<h2 v-never:xmy.abc.cba="message">哈哈哈哈</h2>
```

```vue
const vNever = {
  mounted(el, bindings){
    // console.log(bindings)
    el.textContent = bindings.value
  }
}
```

### 综合练习（自定义时间格式化指令）

```vue
<h2 v-ftime="'YYYY/MM/DD'">{{ timestamp }}</h2>
<h2 v-ftime>{{ timestamp }}</h2>

const timestamp = 1231355453

```

```vue
app.directive("ftime", {
  mounted(el, bindings) {
    // 1.获取时间, 并且转化成毫秒
    let timestamp = el.textContent
    if(timestamp.length === 10) {
      timestamp = timestamp * 1000
    }
    timestamp = Number(timestamp)

    // 2.获取传入的参数
    let value = bindings.value
    if(!value) {
      // 默认参数
      value = "YYYY-MM-DD HH:mm:ss"
    }

    // 3.使用dayjs对时间进行格式化
    const formatTime = dayjs(timestamp).format(value)
    el.textContent = formatTime
  }
})
```

## 内置组件 Teleport

> `Teleport` 是一个内置组件，用于在组件的模板中将内容渲染到指定的 `DOM` 节点位置，而不受组件层次结构的限制；可以实现将组件的内容渲染到任意的 `DOM` 节点中，而不一定是组件自身的父级或祖先元素。这在某些情况下非常有用，比如在组件内部创建一个全局的弹出窗口或者将组件渲染到任意位置。类似于`react`的`Portals`

- `to`：指定将其中的内容移动到的目标元素，可以可以接受 `CSS` 选择器字符串或 `DOM` 引用；
- `disabled`：是否禁用 `teleport` 的功能；

![](https://secure2.wostatic.cn/static/ojBbTVsrHVwNyCuGyrDxUs/image.png?auth_key=1690559919-akf1MVjcBHc9zYkH6Qpi7U-0-0eb8d718dcb6c28088dc050504d43762)

## 异步组件和 Suspense

`Suspense`是一个内置的全局组件，该组件有两个插槽：

- `default`：如果`default`可以显示，那么显示`default`的内容；
- `fallback`：如果`default`无法显示，那么会显示`fallback`插槽的内容；

```vue
<template>
  <div class="app">
    <suspense>
      <template #default>
        <async-home/>
      </template>
      <template #fallback>
        <h2>Loading</h2>
      </template>
    </suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"))

</script>
```

## 内置组件 transition

**原理**

通过`<transition></transition>`包裹给单元素或者组件实现过渡动画

- 自动嗅探目标元素是否应用了`CSS`过渡或者动画，如果有，那么在恰当的时机添加/删除 `CSS`类名；
- 如果 `transition` 组件提供了`JavaScript`钩子函数，这些钩子函数将在恰当的时机被调用；
- 如果没有找到`JavaScript`钩子并且也没有检测到`CSS`过渡/动画，`DOM`插入、删除操作将会立即执行；

![](https://secure2.wostatic.cn/static/d7vfRAtyQKMMk3cieeh4Dd/image.png?auth_key=1690559920-kb6nSQAM4j957VdQYrWTMQ-0-0bba3ed12969e1e047dcd1852e1ca03f)

- `duration`
  - `number`类型：同时设置进入和离开的过渡时间；
  - `object`类型：分别设置进入和离开的过渡时间
- `mode`过渡模式
  - `in-out`: 新元素先进行过渡，完成之后当前元素过渡离开
  - `out-in`: 当前元素先进行过渡，完成之后新元素过渡进入

```vue
<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    // transition包裹，可自定义名称
    // 如果个没有name的transition，那么所有的class是以 v- 作为默认前缀
    <transition name="my" :duration="1000" mode="out-in">
      <h2 v-if="isShow">哈哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)
</script>

<style scoped>
/* 进入离开时动画 */
.my-enter-from,
.my-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.my-enter-to,
.my-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* 进入离开时动画过程 */
.my-enter-active,
.my-leave-active {
  transition: all 2s ease;
}


// 设置动画animation
.my-enter-active {
  animation: myAnim 2s ease;
}
.my-leave-active {
  animation: myAnim 2s ease reverse;
}
@keyframes myAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
```

### 动态组件切换动画

`appear`：首次渲染

```vue
<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <transition name="why" mode="out-in" appear="">
      <component :is=" isShow ? 'home': 'about'"></component>
    </transition>
  </div>
</template>
```

### 列表过渡动画

![](https://secure2.wostatic.cn/static/6Rnonsq8Tq9kTJWDNJh1a/image.png?auth_key=1690559919-uGkQCfEG5nAEHWaTVymGEF-0-2cc7b9842210d0b78643f124b7417ada)

`<transition-group>`渲染一个列表执行动画

- 默认情况下，它不会渲染一个元素的包裹器，但是你可以指定一个元素并以 `tag` 属性进行渲染；
- 过渡模式不可用，因为我们不再相互切换特有的元素；
- 内部元素总是需要提供唯一的 `key` 属性值；
- `CSS` 过渡的类将会应用在内部的元素中，而不是这个组/容器本身

```vue
<template>
  <div class="app">
    <button @click="addNumber">添加数字</button>
    <button @click="removeNumber">删除数字</button>
    <button @click="shuffleNumber">打乱数字</button>

    <transition-group tag="div" name="why">
      <template v-for="item in nums" :key="item">
        <span>{{ item }}</span>
      </template>
    </transition-group>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { shuffle } from "underscore";

const nums = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

const addNumber = () => {
  nums.value.splice(randomIndex(), 0, nums.value.length)
}

const removeNumber = () => {
  nums.value.splice(randomIndex(), 1)
}
// 打乱数字
const shuffleNumber = () => {
  nums.value = shuffle(nums.value)
}

const randomIndex = () => {
  return Math.floor(Math.random() * nums.value.length)
}
</script>

<style scoped>

span {
  margin-right: 10px;
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.why-enter-active,
.why-leave-active {
  transition: all 2s ease;
}

.why-leave-active {
  position: absolute;
}

/* 针对其他移动的阶段需要的动画 */
.why-move {
  transition: all 2s ease;
}
</style>

```

## Vue 插件本质

即`app.use(插件).use(pinia)`，可以传入对象或者函数

- 对象类型：必须包含一个 `install` 的函数，该函数会在安装插件时执行；
- 函数类型：函数会在安装插件时自动执行；

```vue
// MyPlugin.js
const MyPlugin = {
  install(app) {
    // 在 install 方法中扩展 Vue 功能
    app.config.globalProperties.$myMethod = function() {
      console.log('My method called');
    };
    app.directive('my-directive', {
      // 自定义指令的配置
    });
    app.component('my-component', {
      // 自定义组件的配置
    });
    // 例如router的<router-view>全局注册
    app.component('RouterView', RouterView)
    // ...
  }
};

export default MyPlugin;
```

```vue
// App.vue
import { createApp } from 'vue';
import MyPlugin from './CustomPlugin.js';
import App from './App.vue';

createApp(App).use(MyPlugin).mount('#app');

```

上述实例中，`MyPlugin` 是一个包含 `install` 方法的插件对象。在 `install` 方法中，我们可以通过 `app` 参数访问 `Vue` 实例，并使用 `app.config` 和 `app.xxx` 方法来扩展 `Vue` 功能。例如，我们可以通过 `app.config.globalProperties` 添加全局方法或属性，通过 `app.directive()` 注册自定义指令，通过 `app.component()` 注册自定义全局组件等。

## jsx 语法

#### 概念

如果我们希望在项目中使用`jsx`，那么我们需要添加对`jsx`的支持：

- `jsx`我们通常会通过`Babel`来进行转换（`React`编写的`jsx`就是通过`babel`转换的）；
- 对于`Vue`来说，我们只需要在`Babel`中配置对应的插件即可

#### 安装 Babel 支持 Vue 的 jsx 插件

webpack 环境：`npm install @vue/babel-plugin-jsx -D`

Vite 环境：`npm install @vitejs/plugin-vue-jsx -D`

#### 配置插件

webpack 环境

```vue
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    '@vue/babel-plugin-jsx'
  ]
}
```

Vite 环境

```vue
import jsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [
    vue(),
    jsx()
  ]
})

```

#### 简单使用

**vue2 选项式 API**

```vue
<script lang="jsx">
  import About from './About.vue'

  export default {
    data() {
      return {
        counter: 0
      }
    },

    render() {
      return (
        <div class="app">
          <h2>当前计数: { this.counter }</h2>
          <button onClick={ this.increment }>+1</button>
          <button onClick={ this.decrement }>-1</button>
          <About/>
        </div>
      )
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      }
    }
  }
</script>

```

**vue3 组合式 API**

```vue
<script lang="jsx">
  import { ref } from 'vue'
  import About from './About.vue'

  export default {
    setup() {
      const counter = ref(0)

      const increment = () => {
        counter.value++
      }
      const decrement = () => {
        counter.value--
      }
      return () => (
        <div class="app">
          <h2>当前计数: { counter.value }</h2>
          <button onClick={ increment }>+1</button>
          <button onClick={ decrement }>-1</button>
          <About/>
        </div>
      )
    }
  }
</script>
```

setup 语法糖

```vue
<template>
  <jsx/>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import About from "./About.vue"

const counter = ref(0)

const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}

const jsx = () => (
  <div class="app">
    <h2>当前计数: { counter.value }</h2>
    <button onClick={ increment }>+1</button>
    <button onClick={ decrement }>-1</button>
    <About/>
  </div>
)
</script>
```

## 源码相关

### Vue 的工作过程

![](https://secure2.wostatic.cn/static/tRuuGMjijtP6szSi85gvdi/image.png?auth_key=1690559993-q7ccv6DXXn5XJg1Bs26Zjc-0-2bacd2a50d94d76a1d6f8777a34014a0)

### VNode 和 VDom 概念

> VNode（虚拟节点）： VNode 是 Vue 中的一个数据对象，用于描述组件在虚拟 DOM 中的状态。每个 VNode 对象都表示一个特定的 DOM 元素或组件，包含了该元素或组件的标签名、属性、子节点等信息。VNode 对象是轻量级的，可以在渲染过程中高效地创建、比较和更新。 VNode 对象的创建和更新是通过 Vue.js 的编译器或**渲染函数**生成的，它们构成了组件树的结构，用于描述组件在虚拟 DOM 中的层次关系和状态。

> VDOM（虚拟 DOM）： VDOM 是 Vue 中用于高效渲染的一种技术。它是一个虚拟的 DOM 树，与实际的 DOM 结构相对应。当组件的状态发生变化时，Vue 会通过比较新旧 VNode 对象，生成一系列的 DOM 操作来更新实际的 DOM，从而实现页面的重新渲染。VDOM 的优势在于，它可以在内存中进行 DOM 操作，而不需要直接操作实际的 DOM，从而提高渲染性能。Vue 会将真实 DOM 的操作优化为最小，并批量执行，减少了对实际 DOM 的频繁访问和操作，从而提升了应用的性能和响应速度。VDOM 的实现方式是通过将组件树转换为 VNode 对象，并将其与之前的 VNode 对象进行比较，找出差异（Diff 算法），并生成相应的 DOM 操作。这样可以避免直接操作实际 DOM 导致的性能问题，并实现更高效的页面渲染。

> Vue 在生成真实的 DOM 之前，会将我们的节点转换成 VNode，而 VNode 组合在一起形成一颗树结构，就是虚拟 DOM。

![](https://secure2.wostatic.cn/static/kY3CpzuTwVa1RKXtM1KmS5/image.png?auth_key=1690559993-cUdUqqjiLCnGebFF9qugJF-0-5cb772b3679f15620b0e5f02dcbe156d)

![](https://secure2.wostatic.cn/static/tZiQz2nAtzMp7rbcvQqcRk/image.png?auth_key=1690559993-8Jtttu1CnMNVx5ViXndPpL-0-d9374eac1576fc1c36dac97682e0f37b)

`dom`变虚拟`dom`属于模板编译原理（`mustache`）

`patch(container, vnode)`函数让虚拟节点上树（即把虚拟`dom`转化成`dom`）

### h 函数

`h()`函数是一个用于创建 `vnode`（虚拟节点）的一个渲染函数，是`createVNode()`简化

#### h 函数接收参数列表

- `tag`：表示节点的标签名，如 `div`、`p` 等
- `props`：表示节点的属性，如类名、样式、事件等。
- `children`：表示节点的子节点，可以是一个 `VNode` 对象的**数组**或**字符串**等。

#### h 函数的使用（vue2）

注意：`render()`函数是在组件里面的选项式 API，`h()`函数是真正创建 VNode 的

```vue
<script>
  import { h } from 'vue'

  export default {
    render() {
      return h("div", { className: "app" }, [
        h("h2", { className: "title" }, "我是标题"),
        h("p", { className: "content" }, "我是内容, 哈哈哈"),
      ])
    }
  }
</script>

<style scoped>
</style>
```

#### h 函数计数器案例

**vue2 选项式 API**

```vue
<script>
  import { h } from 'vue'
  import Home from "./Home.vue"

  export default {
    data() {
      return {
        counter: 0
      }
    },

    render() {
      return h("div", { className: "app" }, [
        h("h2", null, `当前计数: ${this.counter}`),
        h("button", { onClick: this.increment }, "+1"),
        h("button", { onClick: this.decrement }, "-1"),
        // 渲染组件
        h(Home)
      ])
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      }
    }
  }
</script>

<style scoped>
</style>

```

**vue3 组合式 API**

直接返回一个函数

```vue
<script>
  import { h, ref } from 'vue'
  import Home from "./Home.vue"

  export default {
    setup() {
      const counter = ref(0)

      const increment = () => {
        counter.value++
      }
      const decrement = () => {
        counter.value--
      }

      return () => h("div", { className: "app" }, [
        h("h2", null, `当前计数: ${counter.value}`),
        h("button", { onClick: increment }, "+1"),
        h("button", { onClick: decrement }, "-1"),
        h(Home)
      ])
    }
  }
</script>
```

setup 语法糖

```vue
<template>
  <render/>
</template>

<script setup>
import { ref, h } from 'vue';
import Home from './Home.vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}

const render = () => h("div", { className: "app" }, [
  h("h2", null, `当前计数: ${counter.value}`),
  h("button", { onClick: increment }, "+1"),
  h("button", { onClick: decrement }, "-1"),
  h(Home)
])
</script>
```

### 响应式原理

#### 阶段一：手动收集依赖（使用数组-无论是否存在依赖）

**思想**：设置一个**响应式数组**，手动将依赖函数存入数组且默认执行一次，当数据发生变化时，通过遍历响应式数组再执行依赖函数

**弊端**：非自动依赖收集且当一个对象的数据发生变化时，数组会遍历所有对象（即所有的对象都放在一个数组里面）

```vue
const obj = {
  name: "why",
  age: 18
}

// 设置一个专门执行响应式函数的一个函数
const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
  console.log("foo function")
})


watchFn(function bar() {
  console.log("bar:", obj.name + " hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

// 修改obj的属性
console.log("name发生变化-----------------------")
obj.name = "kobe"
reactiveFns.forEach(fn => {
  fn()
})

```

#### 阶段二：手动收集依赖（使用类）

**思想**：将响应式数组（数组添加、数组遍历）封装到`Depend`类中；不同对象就可以有不同的`Depend`类（即不同对象存放在各自对应的响应式数组中）

**弊端**：每次数据修改时，都需要手动调用`notify()`且该对象中未依赖的函数也会执行

**解决点**：未依赖的其他对象不会被执行（如：`obj.name`发生变化时，依赖`user.name`的函数不会被执行【区分不同对象同一属性】）

```vue
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const obj = {
  name: "why",
  age: 18
}

// 设置一个专门执行响应式函数的一个函数
// （objDep = new Depend; userDep = new Depend; productDep = new Depend）
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
  console.log("foo function")
})

watchFn(function bar() {
  console.log("bar:", obj.name + " hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

// 修改obj的属性
console.log("name发生变化-----------------------")
obj.name = "kobe"
dep.notify()

console.log("age发生变化-----------------------")
// 每次都要手动调用notify函数
dep.notify()

console.log("name发生变化-----------------------")
obj.name = "james"

```

#### 阶段三：监听属性变化（这里使用的是 Vue2）

**原理**：遍历对象中的每一个`key`，使用`set`对数据进行劫持，对发生变化的`value`进行重新赋值，并调用`notify()`，实现数据变化时，自动调用`notify()`

**解决点**：不用每次手动调用`notify()`

```vue
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const obj = {
  name: "why",
  age: 18
}

// 设置一个专门执行响应式函数的一个函数
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

// 方案一: Object.defineProperty() -> Vue2
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    // 使用set劫持，对发生变化的value进行重新赋值，并调用notify函数
    set: function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})

watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
  console.log("foo function")
})

watchFn(function bar() {
  console.log("bar:", obj.name + " hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

// 修改obj的属性
console.log("name发生变化-----------------------")
obj.name = "kobe"

console.log("age发生变化-----------------------")
obj.age = 20

console.log("name发生变化-----------------------")
obj.name = "james"
```

#### 阶段四：自动收集依赖（精准收集属性的依赖）

**原理**

1. `dep`对象数据结构的管理
   - 每一个对象的每一个属性都会对应一个`dep`对象
   - 同一个对象的多个属性的`dep`对象是存放一个`map`对象中
   - 多个对象的`map`对象, 会被存放到一个`objMap`的对象中
2. 依赖收集
   - 当执行 get 函数, 自动的添加 fn 函数

![](https://secure2.wostatic.cn/static/kqQWhkMSyxHCdWf8yA7nsT/image.png)

![](https://secure2.wostatic.cn/static/8RjLTEeSnabbV7x8cj51n5/image.png)

**解决点**：对于同一`Dep`对象中未依赖的数据不被执行，只执行同一个对象中发生变化的数据（如：`user.name`变化时，不执行只依赖`user.age`的函数【区分同一对象不同属性】）

**弊端**：仅仅是单个对象的响应式

```vue
class Depend {
  constructor() {
    // 防止添加重复的dep
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const obj = {
  name: "why",
  age: 18
}

// 设置一个专门执行响应式函数的一个函数
let reactiveFn = null
function watchFn(fn) {
  // 不能 dep.addDepend(Fn)
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 封装一个函数: 负责通过obj的key获取对应的Depend对象（核心）
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.根据key-->name/age, 找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}


Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get: function() {
      // get函数能拿到obj -> key
      // console.log("get函数中:", obj, key)
      // 找到对应的obj对象的key对应的dep对象
      const dep = getDepend(obj, key)
      dep.addDepend(reactiveFn)

      return value
    }
  })
})

// 业务代码
watchFn(function foo() {
  console.log("foo function")
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
})

watchFn(function bar() {
  console.log("bar function")
  console.log("bar:", obj.age + 10)
})

// 修改obj的属性
console.log("name发生变化-----------------------")
obj.name = "kobe"

console.log("age发生变化-----------------------")
obj.age = 20

```

#### 阶段五：多个对象的响应式

**原理**：将`Object.keys(obj).forEach(...)`封装在一个带参数的函数中`function reactive(obj) {...}`

```vue
class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.add(fn)
    }
  }

  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 设置一个专门执行响应式函数的一个函数
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 封装一个函数: 负责通过obj的key获取对应的Depend对象(核心)
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.根据key, 找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}

function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]

    Object.defineProperty(obj, key, {
      set: function(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      },
      get: function() {
        // 拿到obj -> key
        // console.log("get函数中:", obj, key)
        // 找到对应的obj对象的key对应的dep对象
        const dep = getDepend(obj, key)
        // dep.addDepend(reactiveFn)
        dep.depend()

        return value
      }
    })
  })
  return obj
}

const user = reative({
  name: "nevermore",
  age: 23
})
```

#### Vue2 和 Vue3 的监听属性变化

Vue2：`Object.defineProperty()`

```vue
function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]

    Object.defineProperty(obj, key, {
      set: function(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      },
      get: function() {
        const dep = getDepend(obj, key)
        dep.depend()
        return value
      }
    })
  })
  return obj
}
```

Vue3：`new proxy()`

```vue
function reactive(obj) {
  const objProxy = new Proxy(obj, {
    set: function(target, key, newValue, receiver) {
      // target[key] = newValue
      Reflect.set(target, key, newValue, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    },
    get: function(target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()
      // return target[key]
      return Reflect.get(target, key, receiver)
    }
  })
  return objProxy
}
```

### Diff 算法

diff 发生在虚拟 dom 上的

#### 第一步的操作是从头开始进行遍历、比较

- a 和 b 是一致的会继续进行比较
- c 和 f 因为 key 不一致，所以就会 break 跳出循环

  ![](https://secure2.wostatic.cn/static/2b62e5BGMf6KQn7VZch61A/image.png)

#### 第二步的操作是从尾部开始进行遍历、比较

![](https://secure2.wostatic.cn/static/kYntgN3t8fhrhSBnsTtoAm/image.png)

#### 第三步是如果旧节点遍历完毕，但是依然有新的节点，那么就新增节点

![](https://secure2.wostatic.cn/static/i77tqonHEyEJ6wbQ1akspN/image.png)

#### 第四步是如果新的节点遍历完毕，但是依然有旧的节点，那么就移除旧节点

![](https://secure2.wostatic.cn/static/uYDCx3Kh7DCtiGrswmeg6v/image.png)

#### 第五步是最特色的情况，中间还有很多未知的或者乱序的节点

![](https://secure2.wostatic.cn/static/6kzuXtceQRPejn9xc1mwp5/image.png)
