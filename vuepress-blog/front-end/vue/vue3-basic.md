---
title: Vue3基础
category:
  - Vue3
---

## Composition API

### Vue3 模板

```Vue
<script>
export default {
  props: {
    ...
  },
  emits: [],
  components: {
    ...
  }
  setup() {
    const variate1 = reactive({ ... })
    const variate2 = ref(...)
    const variate3 = readonly(...)
    const variate4 = computed({ set:()=>{...} , get:()=>{...}})
    watch(() => { ... })
    onMounted(() => { ... })

    return {
      variate1,
      variate2,
      variate3,
      variate4
    }
  }
}
</script>

```

#### 语法糖写法

顶层代码默认暴露给模板

```Vue
<template>
  <component1 :xxxProps="yyyProps"></component1>
  <component1 name="never" :age="22"></component1>// 相同组件之间都是独立的，不会相互影响
</template>

<script setup>
    // 不再需要使用component: { ... }
    import component1 from 'xxx'

    const props =defineProps({ yyyProps: { type: .., default: .. } }) // 父传子参数接收写法(子组件调用后可直接使用)
    const emits = defineEmits(["xxx"]) // 子传父
    defineExpose({ ... }) // 暴露property，一般和ref一起使用

    const variate1 = reactive({ ... })
    const variate2 = ref(...)
    const variate3 = readonly(...)
    const variate4 = computed({ set:()=>{...} , get:()=>{...}})
    watch(() => { ... })
    onMounted(() => { ... })
</script>
```

### setup 函数

- setup 的返回值可以在模板 template 中被使用，不需要在模板中追加`.value`，使用`return`替代 options API 中的`data()`
- setup 里面不能使用 this（原因：t**his 并没有指向当前组件实例，在 setup 被调用之前，data、computed、methods 等都没有被解析**）可用 context 代替（`context`包含`attrs`、`slots`、`emit`)。`setup(props, context){}`
- setup 函数是处于 Vue2 生命周期`beforeCreated`和`created`俩个钩子函数之前，相当于`setup`替代了`beforeCreated`和`created`
- setup 函数只能是同步的不能是异步的

#### `reactive({})`

使数据变成响应式，只能用于定义复杂类型的数据，如对象、数组，返回的是一个`Proxy`对象。

原因：

- 当我们使用 reactive 函数处理我们的数据之后，数据再次被使用时就会被**劫持**进行**依赖收集**，类似于`data(){ return {} }`
- 当数据发生改变时，所有收集到的依赖都是进行对应的响应式操作。
- `data()`也是在内部交给了 reactive 函数将其编程响应式对象的。

```Vue
import { reactive } from 'vue'

setup(){
  const account = reactive({
    username: "nevermore",
    password: "123456"
  })
  return { account }
}

```

应用场景： - reactive 应用于本地的数据 - 多个数据之间是有关系/联系(聚合的数据, 组织在一起会有特定的作用)，如 account 信息

#### `ref()`

使数据变成响应式，可用于定义基本/复杂数据类型。它的值由`ref().value`获取（使用更多）

注意：

- 模板中引入 ref 的值时，Vue 会自动帮助我们进行解包（**浅层解包**）操作，所以并不需要在模板中通过 `ref.value` 的方式来使用。
- 在 setup 函数内部，它依然是一个 ref 引用， 所以对其进行操作时，我们依然需要使用 `ref.value`的方式。

```Vue
// userCounter.js
import { ref } from 'vue'

export default function useCounter() {
  let counter = ref(100)
  const increment = () => {
    // 在setup() 中需要写成ref().value形式
    counter.value++
    console.log(counter.value)
  }
  const decrement = () => {
    counter.value--
  }
  // ref是浅层解包
  const info = {
    counter
  }

  return { counter, increment, decrement, info }
}

```

```Vue
// App.vue
<template>
  <div class="app">
    // template中ref对象自动解包，不需要写成counter.value形式
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    // ref浅层解包
    // 使用的时候不需要写.value
    <h2>当前计数: {{ info.counter }}</h2>
    // 修改的时候需要写.value
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import useCounter from './hooks/useCounter'

export default {
  setup() {
    // 1.定义counter的内容
    // 默认定义的数据都不是响应式数据
    // let counter = ref(100)
    // const increment = () => {
    //   counter.value++
    //   console.log(counter.value)
    // }
    // const decrement = () => {
    //   counter.value--
    // }
    // const { counter, increment, decrement } = useCounter()
    return {
      ...useCounter()
    }
  }
}
</script>

<style>
</style>

```

应用场景：

- 定义本地的一些**简单**数据
- 定义从**网络中**获取的数据
- 定义模板 ref，获取 dom 元素节点

```Vue JSX
// 定义从网络中获取的数据
const musics = ref([])
onMounted(() => {
  // 从axios获取数据
  const serverMusics = ["music1", "music2", "music3"]
  musics.value = serverMusics
})
```

```Vue
// 定义模板ref，获取dom元素节点
<template>
    <h2 ref="titleRef">我是标题</h2>
    <MyCompont ref="MyCompontRef">我是组件</MyCompont>
</template>

import { ref, onMounted } from 'vue'
setup() {
  const titleRef = ref()
  onMounted(() => {
    console.log(titleRef .value)
    // 可以对组件的方法进行访问
    MyCompontRef.value.method()
  })

}
```

ref 其他 API:

- `unref`：获取一个`ref`引用中的`value`，`val = isRef(val) ? val.value : val`的语法糖。
- `isRef`：判断值是否是一个 ref 对象。
- `shallowRef`：创建一个浅层的 ref 对象。
- `triggerRef`：手动触发和 shallowRef 相关联的副作用。

```Vue
const info = shallowRef({ name: 'nevermore'})
const changeInfo = () => {
  // 下面的修改不是响应式
  info.value.name = "never"
  // 使用triggerRef手动触发响应式
  triggerRef(info)
}
```

#### `readonly`

> reactive 或者 ref 可以获取到一个响应式的对象，但是某些情况下，我们传入给其他组件的这个响应式对象希望在另外一个组件被使用，但是不能被修改，这个时候 Vue3 为我们提供了 readonly 的方法。readonly 会返回原始对象的只读代理（也就是它依然是一个 Proxy，**本质是一个 proxy 的 set 方法被劫持**，并且不能对其进行修改），**符合单项数据流规范**。

- `readonly`返回的对象都是不允许修改的。
- 但`readonly`处理的**原来的**对象是允许被修改的。如`const info = readonly(obj)`，`info`不能被修改，`obj`可以修改，当`obj`被修改时，`readonly`返回的`info`对象也会被修改。

```Vue
// App.vue
<template>
  <h2>App: {{ info }}</h2>
  <show-info :roInfo="roInfo"
             @changeRoInfoName="changeRoInfoName">
  </show-info>
</template>

<script>
  import { readonly } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },
    setup() {
      // 本地定义多个数据, 都需要传递给子组件
      // name/age/height
      const info = reactive({
        name: "nevermore",
        age: 18,
        height: 1.88
      })

      // 使用readOnly包裹info
      const roInfo = readonly(info)
      function changeRoInfoName(payload) {
        info.name = payload
      }

      return {
        roInfo,
        changeRoInfoName
      }
    }
  }
</script>

```

```Vue
// ShowInfo.vue
<template>
  <div>
    //<!-- 使用readonly的数据 -->
    <h2>ShowInfo: {{ roInfo }}</h2>
    //<!-- 代码就会无效(报警告) -->
    //<!-- <button @click="roInfo.name = 'james'">ShowInfo按钮</button> -->
    //<!-- 正确的做法 -->
    <button @click="roInfoBtnClick">roInfo按钮</button>
  </div>
</template>

<script>
  export default {
    props: {
      // readonly数据
      roInfo: {
        type: Object,
        default: () => ({})
      }
    },
    // 子传父
    emits: ["changeRoInfoName"],
    setup(props, context) {
      function roInfoBtnClick() {
        context.emit("changeRoInfoName", "james")
      }

      return {
        roInfoBtnClick
      }
    }
  }
</script>

```

#### 其它函数

`isProxy`：检查对象是否是由 `reactive` 或 `readonly`创建的 `proxy`

`isReactive`：检查对象是否是由 `reactive`创建的响应式代理，如果该代理是 `readonly` 建的，但包裹了由 `reactive` 创建的另一个代理，它也会返回 true

`isReadonly`：检查对象是否是由 `readonly` 创建的只读代理

`toRaw`：返回 `reactive` 或 `readonly` 代理的原始对象

`shallowReactive`：不执行嵌套对象的深层响应式转换

`shallowReadonly`：不执行嵌套对象的深度只读转换

`toRefs`/`toRef`：`reactive()`返回的对象进行 es6 解构获取的值不是响应式的，需要用`toRefs()`将 reactive 返回的对象中的属性都转成 ref，从而将数据变成响应式。`toRef()`将一个 reactive 对象中的属性为 ref。

```Vue
const state = reactive({
  name: "nevermore",
  age: 18
})
// 解构出来的name和age不是响应式的
const { name, age } = state
// 使用toRefs()将name和age变成响应式
const { name, age } = toRefs(state)
// 使用toRef()将一个reactive对象中的属性变成响应式
const name = toRef(state, 'name')
```

#### Computed 函数

返回的是一个`ref`对象，所以需要使用`.value`获取值

```Vue
//默认接收getter函数
const fullName = computed(() => {
  return firstName.value + " " +lastName.value;
})

const fullName = computed({
  get: () => {
    return firstName.value + " " +lastName.value;
  },
  set: () => {
    const names = newValue.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
  }
})

```

#### 生命周期钩子函数

![](https://secure2.wostatic.cn/static/72r695vsw4TAea9cCojAN1/image.png?auth_key=1708937116-fH7nNxgszGjbiJEfTEBNi2-0-ccf244ed77b3cea1db3554ef4da569c4)

#### `provide()/inject()`

非父子组件通信，可用 vuex 或 pinia 替代。在 composition API 中不需要手动解包。定义的数据非响应式。

```Vue
// provide
setup() {
  provide("name", name)
  provide("age", 18)
}
// inject
<template>
  <div>ShowInfo: {{ name }}-{{ age }}-{{ height }} </div>
</template>

setup() {
  const name = inject("name")
  const age = inject("age")
  const height = inject("height", 1.88)

  return {
    name,
    age,
    height
  }
}

```

### 数据监听

- `watchEffect`：用于**自动收集**响应式数据的依赖；默认直接执行一次
- `watch`：需要**手动指定**侦听的数据源；可以拿到监听改变前后的值；不设置`immediate`第一次是不执行的

#### `watch()`

```Vue
import { watch } from 'vue'

<button @click="obj.friend.name = 'never'">修改info</button>

// 侦听单个数据源
// 监听reactive数据变化后, 获取对象类型是proxy
watch(obj, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  console.log(newValue === oldValue) // true
}, {
  // watch的选项immediate(默认惰性)和deep(默认是true)
  immediate: true
})

// 监听reactive数据变化后, 获取的是普通对象
watch(() => ({ ...obj }), (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, {
  immediate: true,
  deep: true
})

// 侦听多个数据源
watch([name, obj], (newValue, oldValue) => {
  console.log(newValue, oldValue)
})

```

#### `watchEffect`

- watchEffect 传入的函数会被立即执行一次，并且在执行的过程中会收集依赖
- 只有收集的依赖发生变化时，watchEffect 传入的函数才会再次执行
- 调用返回值来停止侦听

```Vue
const counter = ref(0)
const name = ref("why")

const stopWatch = watchEffect(() => {
  console.log("-------", counter.value, name.value)

  // 判断counter.value > 10
  if (counter.value >= 10) {
    stopWatch()
  }
})
```

### 组件通信

父传子：`defineProps()`

子传父(发送事件)：`defineEmits('handleClick')`，`emit('handleClick', data)`，`defineExpose()`（暴露子组件）
