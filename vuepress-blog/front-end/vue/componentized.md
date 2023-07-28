---
title: 组件化开发
category:
  - Vue2
---

## 注册组件基本步骤

- 调用`Vue.extend()`方法创建组件构造器
- 调用`Vue.component()`方法注册组件
- 在 Vue 实例的作用范围内使用组件`<my-cpn></my-cpn>`

```vue
  // Vue1.0
  <div id="app">
    <!--3.使用组件-->
    <my-cpn></my-cpn>  // 放入实例挂载
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
  </div>

  // 1.创建组件构造器对象
  const cpnC = Vue.extend({
    template: `
      <div>
        <h2>我是标题</h2>
        <p>我是内容, 哈哈哈哈</p>
        <p>我是内容, 呵呵呵呵</p>
      </div>`
  })

  // 2.注册组件（全局组件，意味着可以在多个Vue的实例下面使用）
  Vue.component('my-cpn', cpnC)

  const app = new Vue({
    el: '#app',
    components: {
      my-cpn: cpnC  // id为app实例下的局部组件
    }
  })

```

- Vue2.0 注册全局组件语法糖

```vue
  // 直接注册组件（包含了Vue.extend的步骤）
  Vue.component('cpn1', {
    template: `
      <div>
        <h2>我是标题1</h2>
        <p>我是内容, 哈哈哈哈</p>
      </div>
    `
  })
```

- Vue2.0 注册局部组件语法糖

```vue
  //const cpn = {
  //  template: `<div> ... </div>`,
  //  data() { return {} },
  //  methods: {}
  //}

  const app = new Vue({
      el: '#app',
      components: {
        'cpn2': {  // 'cpn': cpn
          template: `
            <div>
              <h2>我是标题2</h2>
              <p>我是内容, 呵呵呵</p>
            </div>
      `
        }
      }
  })
```

## 组件模板分离写法

- script

```vue
  // 1.script标签, 注意:类型必须是text/x-template
  <script type="text/x-template" id="cpn">
    <div>
      // ...
    </div>
  </script>
```

- template

```vue
  // 2.template标签
  <template id = "cpn">
    <div>
       // ...
    </div>
  </template>

  // 1.全局组件写法
  Vue.component('cpn', {
    template: '#cpn'
  })

  // 2.局部组件写法
  new Vue({
    // ...
    components: {
      'cpn':{
         template: '#cpn'
       }
  })
```

## 组件数据存放

注意：

- 子组件不能直接访问父组件（组件变量访问不到 Vue 实例的数据）
- 组件中的 data 必须是一个函数（**面试题：**正因为 data 是函数,函数在每次执行时都会在栈空间创建新的变量，所以每个组件实例对象都有自己的 data 数据, 互不影响，每次函数 return 的都是一个新的对象；若是对象的话就会返回同一个内存地址，产生相互影响）

```vue
  // 注册一个全局组件
  Vue.component('cpn', {
    template: '#cpn',
    // 组件data不能是一个对象，必须是一个函数且返回一个对象
    // data: { // 不能这么写
    //   title: 'abc'
    // },
    data() {
      return {
        title: 'abc'
      }
    }
  })
```

## 父子组件通信

![](https://secure2.wostatic.cn/static/kqDPGndaFwFtR51Nz71qxP/image.png?auth_key=1690560475-j4eKvswHUVJb9BGiXRDCDj-0-c61a36ec49ada44a8321260337d86464)

### 父传子：`props`

- **字符串数组**，数组中的字符串就是 attribute 的名称
- **对象类型**，对象类型我们可以在指定 attribute 名称的同时，指定它需要传递的类型、是否是必须的、默认值等等
  - type 的类型：`String` `Number` `Boolean` `Array` `Object` `Date` `Function` `Symbol`

```vue
props: {
  messageInfo: String,
  // 基础的类型检查（null和undefined会通过任何类型验证）
  propA: Number,
  // 多个可能的类型
  propB: [String, Number],
  // 必填的字符串
  propC: {
    type: String,
    required: true
  },
  // 带有默认值的数字
  propD: {
    type: Number,
    default: 100
  },
  // 带有默认值的对象
  propE: {
    type: Object
    // 对象或数组默认值必须从一个工厂函数获取
    default() {
      return { message: "hello"}
    }
  },
  // 自定义验证函数
  propF: {
    validator(value) {
      // 这个值必须匹配下列字符串中的一个
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 具有默认值的函数
  propG: {
    type: Function,
    // 与对象或数组默认值不同，这不是一个工厂函数--这是一个用作默认值的函数
    default() {
      return 'Default function'
    }
  }
}
```

注意：

- HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符，当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名)命名
- **非 Prop（没有定义 props）的 attribute 将自动添加到根节点的 Attribute 中（如 class、style、id 属性、点击事件）—attribute 继承，通过\*\***`$attrs`\***\*来访问**

**使用**

```vue
  <div id="app">
    <cpn :cmessage="message" :cmovies="movies"></cpn>
  </div>

  <template id="cpn">
    // 每个组件必须只有一个根元素
    <div>
      <li v-for="item in cmovies">{{item}}</li>
      <h2>{{cmessage}}</h2>
    </div>
  </template>

  const cpn = {
    template: '#cpn',
    // props: ['cmovies', 'cmessage'], // 数组用法
    props: {
      // 1.类型限制
      // cmovies: Array,
      // cmessage: String,

      // 2.提供一些默认值default, 以及必传值required  // 对象用法
      cmessage: {
        type: String,
        default: 'aaaaaaaa',
        required: true
      },
      // 类型是对象或者数组时, 默认值必须是一个函数
      cmovies: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }

  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      movies: ['海王', '海贼王', '海尔兄弟']
    },
    components: {
      cpn
    }
  })
```

![](https://secure2.wostatic.cn/static/dbePw2wws55UF6HPjpKfKT/image.png?auth_key=1690560475-mrRN8K59ay63tHdDsM6p9h-0-7455e11c4b6ecc876dcfab553cae9576)

### 子传父：`$emit`

**使用**

```vue
  // 父组件模板
  <div id="app">
    // 不能写驼峰@itemClick，父组件cpnClick方法接收子组件发射过来的item-click自定义事件
    // 这里cpnClick没有参数会默认把item传过去，而不是event事件
    <cpn @item-click="cpnClick"></cpn>
  </div>

  // 子组件模板
  <template id="cpn">
    <div>
      <button v-for="item in categories" @click="btnClick(item)">
        {{item.name}}
      </button>
    </div>
  </template>
  // 1.子组件
  const cpn = {
    template: '#cpn',
    data() {
      return {
        categories: [
          {id: 'aaa', name: '热门推荐'},
          {id: 'bbb', name: '手机数码'},
          {id: 'ccc', name: '家用家电'},
          {id: 'ddd', name: '电脑办公'},
        ]
      }
    },
    methods: {
      btnClick(item) {
        // 发射事件: 自定义事件(将带参数的点击按钮事件发送给父组件)
        this.$emit('item-click', item)
      }
    }
  }

  // 2.父组件
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      cpn
    },
    methods: {
      cpnClick(item) {
        console.log('cpnClick', item);
      }
    }
  })

```

![](https://secure2.wostatic.cn/static/nZ59EyWG9P8kg7PhddySGZ/image.png?auth_key=1690560475-pcBNLbEwhCRuZYUu6ZiJkE-0-b288cce342c8cea9e8b1638ed489c8dc)

## 非父子组件通信

### 全局事件总线

使用第三方库`mitt` 或 `tiny-emitter`

### `Provide`/`Inject`

> 用于非父子组件之间共享数据，比如有一些深度嵌套的组件，子组件想要获取父组件的部分内容，在这种情况下，如果我们仍然将 props 沿着组件链逐级传递下去，就会非常的麻烦。对于这种情况下，我们可以使用 Provide 和 Inject，无论层级结构有多深，父组件都可以作为其所有子组件的依赖提供者，父组件有一个 provide 选项来提供数据，子组件有一个 inject 选项来开始使用这些数据，父组件不需要知道哪些子组件使用它 provide 的 property，子组件不需要知道 inject 的 property 来自哪里（可用 vuex 或 pinia 代替）

![](https://secure2.wostatic.cn/static/vw5eeeYjHfuXBYMa8K9Z1A/image.png?auth_key=1690560475-f21ZsETQvM3JRXjRDXM8TK-0-c07b092a624024a3950b47073372c2c0)

## 父子组件访问

### 父访问子：`$children` `$refs(常用)`

`$children`的缺陷：（Vue3 中移除）

- 通过`$children`访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值。
- 但是当子组件过多，我们需要拿到其中一个时，往往不能确定它的索引值，甚至还可能会发生变化。解决方法：依赖注入`provide` 和 `inject`。

  示例：`provide() { return { getMap: this.getMap } } ` `inject: [ 'getMap' ]`

`$refs`的使用：

- 用于明确获取其中的一个特定的组件。
- `$refs`和`ref`指令通常是一起使用的。
- 首先，我们通过`ref`给某一个子组件绑定一个特定的 ID。
- 其次，通过`this.$refs.ID`就可以访问到该组件了。

```vue
  <child-cpn></child-cpn>
  <child-cpn ref="cpn"></child-cpn>
  <child-cpn></child-cpn>

  // 父methods
  methods: {
    showRefsCpn() {
      // 打印第二个children-cpn组件的name
      console.log(this.$children[1].name)
      // 打印ref指定的children-cpn组件的name
      console.log(this.$refs.cpn.name)
    }
  },
  components: {
    child-cpn: {
      template: '#child-cpn',
      data() {
        return {
          name: '我是子组件的name'
        }
      }
    }
  }
```

### 子访问父：`$parent` `$root`

```vue
new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      cpn: {
        template: '#cpn',
        data() {
          return {
            name: '我是cpn组件的name'
          }
        },
        components: {
          ccpn: {
            template: '#ccpn',
            methods: {
              btnClick() {
                // 1.访问父组件$parent
                console.log(this.$parent);
                console.log(this.$parent.name);

                // 2.访问根组件$root
                console.log(this.$root);
                console.log(this.$root.message);
              }
            }}} } }})
```

**补充**：`$el`：获取组件根元素

## 动态组件

- 通过使用保留的 `<component>` 元素，动态地绑定到它的 `is` 特性，可以实现动态组件
- `<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

### 基本使用

```HTML
<template>
  <div>
    <button v-for="tab in tabs"
            :key="tab"
            :class="{active: currentTab === tab}"
            @click="tabClick(tab)">
      {{tab}}
    </button>

    <component :is="currentTab"></commponent>
  </div>
</template>

```

```vue
<template>
  <!-- home和about页面的切换 -->
  <button @click="currentPage = 'home'">home</button>
  <button @click="currentPage = 'about'">about</button>

  <component :is="currentPage"></component>
</template>

setup() {
  const currentPage = ref("home")
  return {
    currentPage
  }
}

```

### 动态组件传值和监听

```HTML
<component :is="currentTab"
           name="never"
           :age="18"
           @pageClick="pageClick">
</commponent>
```

### keep-alive 的使用

- `include` - `string | RegExp | Array`。只有名称匹配的组件会被缓存
- `exclude` - `string | RegExp | Array`。任何名称匹配的组件都不会被缓存
- `max` - `number | string`。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁

```HTML
<keep-alive include="home,about"> <!-- 组件的name值 -->
  <component :is="currentTab"
             name="never"
             :age="18"
             @pageClick="pageClick">
  </commponent>
</keep-alive>
```

> 对于缓存的组件来说，再次进入时，我们是不会执行 created 或者 mounted 等生命周期函数的：但是有时候我们确实希望监听到何时重新进入到了组件，何时离开了组件； 这个时候我们可以使用`activated` 和 `deactivated` 这两个生命周期钩子函数来监听。

## 异步组件

> 如果我们的项目过大了，对于某些组件我们希望通过异步的方式来进行加载（目的是可以对其进行分包处理）

```vue
defineAsyncComponent(() => import("./xxx.vue"))
```

参数类型：

- 类型一：**工厂函数**，该工厂函数需要返回一个 Promise 对象。
- 类型二：接受一个**对象类型**，对异步函数进行配置。

![](https://secure2.wostatic.cn/static/jTC2mNSpSHNHunBb82Sdjy/image.png?auth_key=1690560476-uxm9iuGQVM7zgL1UoK5d4G-0-83ac2afde4b0dcc40af908931fba65c3)

## Mixin

> 组件和组件之间有时候会存在相同的代码逻辑，我们希望对相同的代码逻辑进行抽取。Mixin 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能，一个 Mixin 对象可以包含任何组件选项，当组件使用 Mixin 对象时，所有 Mixin 对象的选项将被混合进入该组件本身的选项中

![](https://secure2.wostatic.cn/static/sszuKmwMAsEcwS8ABDXgLB/image.png?auth_key=1690560476-ex2VErJUmTre3nKzm5S6ck-0-51ea3da62707674ce6ea83d1e5e05d1a)

## :deep()和:global()

父组件能直接访问子组件的根元素，当需要访问子组件根元素以外的元素需要用`:deep()`；当访问的是同级组件的元素时，只能用`:global()`

## 注意

所有的组件都继承 Vue 的源型（如`Vue.prototype.shareObj=shareObj`即所有的组件都可访问该变量）
