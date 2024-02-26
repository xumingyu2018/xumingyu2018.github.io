---
title: Vue3进阶
category:
  - Vue3
---

## Vue3 与 Vue2 的对比

# Vue3进阶

`template`模板不如`jsx`灵活，但是template相比jsx的固定性，可以在编译时获取许多信息，编译出可以在运行时执行尽可能少，性能尽可能好的代码。Vue3性能优化的一个重要体现在编译优化，利用新的渲染器，编译出了相比vue2更小，更快的代码

# Tree Shaking - 优化体积

Vue3 源码中采用函数编写API，更加有利于Tree Shaking，而Tree Shaking的原理是 利用ES6 Module的编译时加载，编译时就能确定模块的依赖关系，没有使用到的代码最终会被 webpack 或者 vite这样的构建工具删掉，js体积减小，网络传输就更快，js引擎解析也会更快，代码执行更快

## vue2项目打包体积对比

```jsx
// App.vue 1
<template>
  <div>test vue2 tree-shaking</div>
</template>

<script>export default {
  data() {
    return {
      name: "App",
    };
  },
};
</script>// App.vue 2 

<template>
  <div>test vue2 tree-shaking</div>
</template>

<script>export default {
  data() {
    return {
      name: "App",
    };
  },
  computed: {
    fullName() {
      return this.name + "vue2";
    },
  },
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>
```

打包后vue文件大小没有变化

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db877ea2e73c48a594175a454fbf86bb~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=965&h=372&s=32642&e=png&b=23272e)

## Vue3项目打包体积对比

```jsx
// App.vue 1
<template>
  <div>test vue3 tree-shaking</div>  {{ fullName }}
</template>

<script setup>
import { ref, computed, watch, nextTick, reactive } from "vue";
const name = ref("App");

const obj = reactive({
  item: "tree-shaking",
});

const fullName = computed(() => name.value + "vue3");

watch(
  () => name.value,
  async (newVal, oldVal) => {
    console.log(newVal, oldVal);
    await nextTick();
    obj.item = "vue3 tree-shaking";
  }
);
</script>
```

打包vue文件大小有变化

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/390a2b88910b45fc865e4815cde16584~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=914&h=233&s=19552&e=png&b=23272e)

# Poxy - 优化数据劫持

`vue2`的数据劫持使用的是 `Object.defineProperty`，它的缺点也是众所周知，只能监听对象中已有的属性，不能监听对象的`增加`和`删除`，所以如果有一个嵌套层级很深的响应式对象数据，vue2无法知道代码运行时具体会访问哪个属性，所以在初始化这个对象的时候，vue2只能采取递归遍历的方式把对象的每一层每一个属性都变成响应式，这就会影响页面的初始化渲染速度；

而vue3就不一样了，它使用proxy进行数据劫持，对于多层嵌套的对象，由于`proxy只能代理一层`，所以vue3在真正访问到对象属性的时候，才去判断递归，而不是在初始化的时候就一股脑的递归。

下面看一下vue2和vue3在源码中的实现

## vue2源码实现

在之前写的一篇关于vue2的文章中， [vue2响应式原理（1）--初始化响应式对象data](https://juejin.cn/post/7152066753453883423) 比较详细的介绍了数据的初始化，这里简化一下源码

```jsx
function initData(vm: Component) {
  let data: any = vm.$options.data  // 观测 data  observe(data)
}

export function observe(  value: any,
  shallow?: boolean,
): Observer | void {
   new Observer(value, shallow)
}

export class Observer {
  constructor(    public value: any,
    public shallow = false // 默认深层响应
      ) {
    const keys = Object.keys(value);
    // 遍历每一个属性变成响应式
        for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      defineReactive(value, key, NO_INIITIAL_VALUE, undefined, shallow);
    }
  }
}

export function defineReactive(  obj: object,
  key: string,
  val?: any,
  customSetter?: Function | null,
  shallow?: boolean,
) {
  val = obj[key]
  // 递归遍历，嵌套过深，性能损失
    !shallow && observe(val, false, mock)
  //...
  }
```

## vue3源码实现

```jsx
// 简化版源码
// ref()  ref也是包装过后的reactive 
export function ref(value?: unknown) {
  return createRef(value)
}

function createRef(rawValue: unknown) {
  return new RefImpl(rawValue)
}

class RefImpl<T> {
  private _value: T

  constructor(value: T) {
    this._value = reactive(value)
  }
  get value() {
    return this._value  }
  set value(newVal) {
    this._value = reactive(newVal)
  }
}

// reactive()
export function reactive(target: object) {
  return createReactiveObject(target)
}

function createReactiveObject(target: Target) {
  const proxy = new Proxy(target, {
    get(target: Target, key: string | symbol) {
      const res = Reflect.get(target, key);
      if (isObject(res)) {
        // 对象属性被访问的时候才递归执行下一步 reactive，
        // 优化数据初始化时性能
        return reactive(res);
      }
      return res;
    },
  });
  return proxy;
}
```

# vue2静态标记

在vue2的编译中，有一个`optimize`过程，会对一些不会变化的DOM做静态标记，节点如果被标记为为静态根节点，会生成一个`staticRenderFns`来缓存它，而且它生成的vnode会带有`isStatic:true`的属性，以便在diff中跳过它们的对比。

```jsx
// App.vue
<template>
  <div>
    <h1>2222</h1>
    <p>ddd</p>
  </div>
</template>
```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc759057a517461f9a44a0830f1fe3c7~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1150&h=475&s=63672&e=png&b=fefefe)

```jsx
// \src\compiler\optimizer.ts
export function optimize(root,option) {
  // 标记静态节点
  markStatic(root)
  // 标记静态根节点
  markStaticRoots(root, false)
}

function markStaticRoots(node) {
// 标记为静态根节点的条件：
// 本身是一个静态节点，有children，children不能只是一个文本节点
// 避免过度优化，还不如重新渲染
 if (
      node.static &&
      node.children.length &&
      !(node.children.length === 1 && node.children[0].type === 3)
    ) {
      node.staticRoot = true
      return
    }
}

// \src\core\instance\render-helpers\render-static.ts
function markStaticNode(node) {
  node.isStatic = true
}
```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95fb50111a59457ba4d1ffce30a7290b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=972&h=525&s=81821&e=png&b=fefdfd)

```jsx
  // \src\core\vdom\patch.ts
  function patchVnode(oldVnode，vnode){
   // reuse element for static trees.
   // 复用静态节点，跳过详细对比
   if (
      isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance
      return
    }
  }

```

# vue3编译优化

## 静态提升

vue3将模版中的`静态节点和属性`提取到render函数外面，在组件更新的时候，减少vnode的创建带来的性能损耗

```jsx
// App.vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const msg = ref("vue hosited");
    return { msg };
  },
};
</script>

<template>
  <div>
    <h1>静态提升测试</h1>
    <span>{{ msg }}</span>
  </div>
</template>
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e64a36b535df48b293345c173a7cdf2d~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2876&h=788&s=339958&e=png&b=ffffff)

## 预字符串化

当有大量连续的静态节点时，通过转化为字符串，既减少vnode创建过程，也可以减少代码体积

```jsx
// App.vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const msg = ref("vue hosited");
    return { msg };
  },
};
</script>

<template>
  <div>
    <h1>静态提升测试</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <span>{{ msg }}</span>
  </div>
</template>
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fb74417470544aaac5c0fd5ab6d6db3~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2630&h=626&s=256212&e=png&b=ffffff)

## 缓存事件处理函数

每次render函数执行过后，生成新的vnode，对vnode的props中事件属性进行patch的时候，就直接取上一次缓存的函数，如果没有缓存，每次函数都是新的，引用不一致，会造成组件的更新

```jsx
<template>
  <div>
    <h1 @click="msg = 'cache'">静态提升测试</h1>
    <span @dblclick="msg = 'cache1'">{{ msg }}</span>
  </div>
</template>
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27b5e1bd09aa48a08fd7063a1a585ea8~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2154&h=796&s=309897&e=png&b=ffffff)

## Block Tree

Block是vue3在编译模板过程中做的优化，收集动态子节点，能够在`diff`过程中根据动态子节点数量更新。

```jsx
<script setup>
import { ref } from "vue";
const msg = ref("vue");
</script>

<template>
  <div class="block">
    <h1>Block</h1>
    <span>{{ msg }}</span>
  </div>
</template>
```

在浏览器控制台`Network`中可以看到模板被编译后

```jsx
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "/node_modules/.vite/deps/vue.js?v=6f26e7ed";

const _hoisted_1 = { class: "block" };
const _hoisted_2 = /*#__PURE__*/ _createElementVNode(
  "h1",
  null,
  "Block",
  -1 /* HOISTED */);

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock("div", _hoisted_1, [
      _hoisted_2,
      _createElementVNode(
        "span",
        null,
        _toDisplayString($setup.msg),
        1 /* TEXT */
      ),
    ])
  );
}
```

在`render`函数中调用了3个函数，`openBlock，createElementBlock，createElementVNode`，通过这个三个函数收集动态子节点

```jsx
// /packages/runtime-core/src/vnode.ts
// 存储currentBlock数组
export const blockStack: (VNode[] | null)[] = []
// 当前block
export let currentBlock: VNode[] | null = null
// 向blockStack推入currentBlock
export function openBlock(disableTracking = false) {
  blockStack.push((currentBlock = disableTracking ? null : []))
}

export function createElementBlock(  type: string | typeof Fragment,
  props?: Record<string, any> | null,
  children?: any,
  patchFlag?: number,
  dynamicProps?: string[],
  shapeFlag?: number
) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true /* isBlock */    )
  )
}

function createBaseVNode(type, props = null, children = null,patchFlag = 0) {
  const vnode = {
    type,
    props,
    children,
    patchFlag,
    // ...  };
  return vnode;
}

function setupBlock(vnode: VNode) {
  // 在vnode上保留当前Block收集的动态子节点
  vnode.dynamicChildren =
    isBlockTreeEnabled > 0
    ? currentBlock || (EMPTY_ARR as any) : null
  return vnode
}

```

例子中的render函数执行后返回一个vnode对象，如下，有`type，children，dynamicChildren，props`等属性

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c69e310272624aa39f7a7332bbfdc92d~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2424&h=1204&s=528504&e=png&b=ffffff)

将图中的vnode对象简化一下，

```jsx
{
  type: "div",
  props: {
    class: "block",
  },
  children: [
    {
      type: "h1",
      children: "Block",
    },
    {
      type: "span",
      children: "vue",
    },
  ],
  dynamicChildren: [
    {
      type: "span",
      children: "vue",
    },
  ],
};
```

更新的时候，就会根据vnode中的数据进行diff， 在 [vue3组件更新](https://juejin.cn/post/7282587833596805179#heading-3) 这篇文章中，在组件更新逻辑中，组件的更新最终还是会走到对普通 DOM 元素的更新，

```jsx
// /packages/runtime-core/src/renderer.ts
const patch = (n1, n2, container, anchor = null, parentComponent = null) => {
  const { type, ref, shapeFlag } = n2;
  switch (type) {
      if (shapeFlag & ShapeFlags.ELEMENT) {
        // 更新普通 DOM 元素
        processElement(n1, n2, container, anchor, parentComponent);
      } else if (shapeFlag & ShapeFlags.COMPONENT) {
        // 更新组件
        processComponent(n1, n2, container, anchor, parentComponent);
      }
  }
};

const processElement = (n1, n2, container, anchor, parentComponent) => {
  if (n1 == null) {
    // 挂载
  } else {
   // 更新
    patchElement(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);
  }
};
```

组件是抽象的普通Dom元素的集合，更新最终都会走到 `patchElement` 这个函数，

```jsx
// /packages/runtime-core/src/renderer.ts
const patchElement = (  n1: VNode,
  n2: VNode,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  slotScopeIds: string[] | null,
  optimized: boolean
) => {
  const el = (n2.el = n1.el!);
  let { patchFlag, dynamicChildren, dirs } = n2;

  if (dynamicChildren) {
    // 如果有dynamicChildren，只更新动态子节点
      } else if (!optimized) {
    // 全量更新所有子节点
    }
```

## PatchFlag

vue2 对比节点时，不知道这个节点哪些信息发生了变化，只能依次对比这些信息，vue3中，收集了`dynamicChildren`，已经减少对比静态子节点了，但是，动态子节点有许多属性，配合使用`patchFlag`，就可以知道哪些属性需要更新，就可以实现`靶向更新`。

vue3中`patchFlag`是包含一系列二进制操作值的枚举类型，

```jsx
// /packages/shared/src/patchFlags.ts
export const enum PatchFlags {
  // 动态文本的元素
  TEXT = 1,             //0b0000001  1
  // 动态 class 的元素
  CLASS = 1 << 1,       //0b0000010  2
  // 动态 style 的元素
  STYLE = 1 << 2,       //0b0000100  4
  // 动态 props 的元素
  PROPS = 1 << 3,       //0b0001000  8
  // 动态props和有key值绑定的元素
  FULL_PROPS = 1 << 4,  //0b0010000  16
  // 静态节点
   HOISTED = -1,
  //...}
```

认识一下跟二进制相关的几个操作符：

[左移操作符 (<<)](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FLeft_shift)，是将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零

[按位与（ &）](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FBitwise_AND)运算符在两个操作数对应的二进位都为 `1` 时，该位的结果值才为 `1`；

[按位或（| ）](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FBitwise_OR)运算符在其中一个或两个操作数对应的二进制位为 `1` 时，该位的结果值为 `1`。

patchFlag是在创建vnode的时候作为第四个参数传入，如下图

```jsx
<template>
  <div class="block">
    <h1>Block</h1>
    <span>{{ msg }}</span>
  </div>
</template>
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b322365b688a4f6e94ee13f656015c78~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1990&h=328&s=135159&e=png&b=ffffff)

在 `patchElement` 对普通Dom元素进行更新的时候，就可以做到只对动态有变化的属性更新