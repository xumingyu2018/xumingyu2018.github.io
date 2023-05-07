---
title: 组件化
category:
  - Vue2
---

## 注册组件基本步骤

- 调用`Vue.extend()`方法创建组件构造器
- 调用`Vue.component()`方法注册组件
- 在Vue实例的作用范围内使用组件`<my-cpn></my-cpn>`

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

- Vue2.0注册全局组件语法糖

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

- Vue2.0注册局部组件语法糖

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

- 子组件不能直接访问父组件（组件变量访问不到Vue实例的数据）
- 组件中的data必须是一个函数（**面试题：** 正因为data是函数,函数在每次执行时都会在栈空间创建新的变量，所以每个组件实例对象都有自己的data数据, 互不影响，每次函数return的都是一个新的对象；若是对象的话就会返回同一个内存地址，产生相互影响）

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

- 父传子：`props`

    注意：在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写

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
        // props: ['cmovies', 'cmessage'],
        props: {
          // 1.类型限制
          // cmovies: Array,
          // cmessage: String,

          // 2.提供一些默认值default, 以及必传值required
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

- 子传父：`$emit`

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
            // 发射事件: 自定义事件(将点击的按钮事件发送给父组件)
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

## 父子组件访问

- 父访问子：`$children` `$refs(常用)`

    `$children`的缺陷：

    -   通过`$children`访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值。
    -   但是当子组件过多，我们需要拿到其中一个时，往往不能确定它的索引值，甚至还可能会发生变化。解决方法：依赖注入`provide` 和 `inject`。

        示例：`provide() { return { getMap: this.getMap } } ` `inject: [ 'getMap' ]``$refs`的使用：
    -   用于明确获取其中的一个特定的组件。
    -   `$refs`和`ref`指令通常是一起使用的。
    -   首先，我们通过`ref`给某一个子组件绑定一个特定的ID。
    -   其次，通过`this.$refs.ID`就可以访问到该组件了。

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

- 子访问父：`$parent` `$root`

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

## 动态组件

- 通过使用保留的 `<component>` 元素，动态地绑定到它的 `is` 特性，可以实现动态组件
- `<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

    <https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html>

注意：

- 所有的组件都继承Vue的源型（如`Vue.prototype.shareObj=shareObj`即所有的组件都可访问该变量）
