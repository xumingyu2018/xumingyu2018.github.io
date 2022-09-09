---
  title: 引用赋值、深浅拷贝
---

- 引用赋值（又称引用传址）：某个变量或常量存放了指向引用类型（对象、数组、函数）字面量的地址。

- 传值赋值：某个变量或常量存放了基本类型的字面量

- 浅拷贝：在堆中创建新的内存保存拷贝后的对象，拷贝前后对象的基本类型数据互不影响；但拷贝前后对象的引用类型数据因为指向同一个内存地址，相互影响。

- 深拷贝：在堆中创建新的内存保存拷贝后的对象，拷贝前后对象的基本类型、引用类型数据互不影响。

||和**原对象字面量**是否指向同一地址|**原对象字面量**第一层为基本类型是否相互影响|**原对象字面量**包含子对象是否相互影响|
|:-:|:-:|:-:|:-:|
|引用赋值|✅|✅|✅|
|浅拷贝|❌|❌|✅|
|深拷贝|❌|❌|❌|

## 引用赋值

引用赋值（又称引用传址）：某个变量或常量存放了指向引用类型（对象、数组、函数）字面量的地址，修改该变量或常量的属性、方法即修改字面量的内容。

::: details

在计算机科学中，对象是指内存中的可以被标识符引用的一块区域。 ——引用自 MDN [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#%E5%AF%B9%E8%B1%A1)

在软件系统中，对象具有唯一的标识符，对象包括属性（Properties）和方法（Methods），属性就是需要记忆的信息，方法就是对象能够提供的服务 ——引用自 [维基百科](https://zh.wikipedia.org/zh-my/%E5%AF%B9%E8%B1%A1_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))

标识符（identifier）可以标识变量名、常量名、类名、方法名、接口名等，标识符有其命名规则。

字面量：没有用标识符封装起来的数据原始值

:::
引用类型字面量引用赋值给某个变量后，再将该变量引用赋值给另一个变量，两个变量指向同一个字面量。修改该变量的属性、方法即修改字面量的内容。

```js:no-line-numbers
let obj1 = { name: 'obj1' }
let obj2 = obj1
obj1.name = 'obj1 changed'
console.log(obj2) // { name: 'obj1 changed' }

let arr1 = ['arr1']
let arr2 = arr1
arr1[0] = ['arr1 changed']
console.log(arr2) // ['arr1 changed']

let fun1 = () => { console.log('fun1') }
let fun2 = fun1
fun1.n = 'fun1 changed' // 注意：函数的 name 属性不可改
console.log(fun2.n) // fun1 changed
```

引用类型字面量引用赋值给某个变量后，再将该变量引用赋值给另一个变量，再将新的字面量引用赋值给该变量，两个变量指向不同的字面量，两者不影响。

```js:no-line-numbers
let obj1 = { name: 'obj1' }
let obj2 = obj1
obj1 = { name: 'obj1 changed' }
console.log(obj2) // { name: 'obj1' }

let arr1 = ['arr1']
let arr2 = arr1
arr1 = ['arr1 changed']
console.log(arr2) // ['arr1']

let fun1 = () => { console.log('fun1') }
let fun2 = fun1
fun1 = () => { console.log('fun1 change') }
console.log(fun2()) // fun1
```

## 浅拷贝

原对象字面量第一层为基本类型，拷贝对象与原对象不相互影响。  
原对象字面量包含嵌套对象，拷贝对象与原对象相互影响。

### 对象的浅拷贝

`Object.assign()` 方法：

```js:no-line-numbers
let obj1 = { name: 'obj1', child: { name: 'child' } }
let obj2 = Object.assign({}, obj1)

obj2.name = 'name changed' // 原对象字面量第一层为基本类型不会被改变
obj2.child.name = 'child changed' // 原对象字面量包含嵌套对象会被改变
console.log(obj1) // { name: 'obj1', child: { name: 'child changed' } }
```

::: tip

`Object.assign()` 方法把源对象**自身的**、**可枚举**属性拷贝给目标对象，然后返回目标对象。

如果目标对象与源对象具有相同的键，则目标对象的属性会覆盖源对象。

```js:no-line-numbers
const target = { a: 1, b: 2 }
const source = { b: 3, c: 4 }

const returnedTarget = Object.assign(target, source)

console.log(target) // { a: 1, b: 3, c: 4 }
console.log(returnedTarget) // { a: 1, b: 3, c: 4 }
```

:::

展开运算符 `...` 同上：

```js:no-line-numbers
let obj1 = { name: 'obj1', child: { name: 'child' } }
let obj2 = {...obj1}
```

### 数组的浅拷贝

`concat()`：原数组不会改变

```js:no-line-numbers
let arr1 = ['arr1', { child: 'child' }]
let arr2 = arr1.concat()
arr1[0] = ['arr1 changed'] // 原数组字面量第一层为基本类型不会被改变
arr1[1].child = 'child changed' // 原数组字面量包含嵌套对象会被改变
console.log(arr2) // ['arr1', { child: 'child changed' }]
```

`slice()` 同上：原数组不会改变

```js:no-line-numbers
let arr1 = ['arr1', { child: 'child' }]
let arr2 = arr1.slice()
```

## 深拷贝

拷贝对象与原对象不相互影响。

### JSON 序列化再反序列化

JSON 序列化（字符串化）再反序列化（解析）

```js:no-line-numbers
const b = JSON.parse(JSON.stringify(a))
```

弊端：

- `undefined`、`symbol`、函数会丢失
- `NaN`、`Infinity`、`-Infinity` 会被序列化为 `null`
- 无法解决循环引用的问题

```js:no-line-numbers
const obj = {
  a: undefined,
  b: Symbol('b'),
  c: function () {},
  d: NaN,
  e: Infinity,
  f: -Infinity,
}
const copyObj1 = JSON.parse(JSON.stringify(obj))
console.log(copyObj1) // {d: null, e: null, f: null}

obj.self = obj
const copyObj2 = JSON.parse(JSON.stringify(obj)) // Uncaught TypeError: Converting circular structure to JSON
```

### 递归循环

功能：

- 支持对象、数组、日期、正则的深拷贝
- 基本类型、函数无需深拷贝（深拷贝函数意义不大）
- 使用 `WeakMap` 解决循环引用
- 此版本不支持 `Symbol` 作为键名的情况
- 没有拷贝 `DOM` 元素，具体实现见 [轻松拿下 JS 浅拷贝、深拷贝](https://juejin.cn/post/7072528644739956773#heading-6)

::: tip

解决循环引用：存储当前对象和拷贝对象的对应关系。每次拷贝当前对象前，都先看一下这个对象是不是已经拷贝过了，如果有的话直接返回。避免自身引用导致栈溢出。

`WeakMap` 弱引用映射与 `Map` 强引用映射不同点：

- 强引用需要自己手动置为 null 才能被回收，弱引用则由垃圾回收机制判断是否回收。
- `Map` 可以接受所有类型作为键名，`WeakMap` 只能接受对象（null 除外）作为键名。

:::

```js:no-line-numbers
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj // null 无需深拷贝，直接返回
  if (obj instanceof Date) return new Date(obj) // 日期对象
  if (obj instanceof RegExp) return new RegExp(obj) // 正则对象
  if (typeof obj !== 'object') return obj // 基本类型、函数无需深拷贝，直接返回

  // 对象、数组需要深拷贝
  if (hash.get(obj)) return hash.get(obj) // 拷贝前，先去存储空间中找，如果有的话直接返回
  let cloneObj = new obj.constructor() // 创建新的克隆对象或数组
  hash.set(obj, cloneObj) // 如果存储空间中没有就存进 hash 里
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash) // 递归深拷贝每层
    }
  }
  return cloneObj
}
```

测试：

```js:no-line-numbers
const a = {
  number: 1,
  bool: true,
  string: 'a',
  empty1: undefined,
  empty2: null,
  array1: [1, 2, 3],
  array2: [
    { name: 'never', age: 23 },
    { name: 'nevermore', age: 23 }
  ],
  date: new Date(2000, 0, 1, 1, 00, 00),
  regexp: /\.(j|t)sx/i,
  obj: { name: 'never', age: 23 },
  f1: (a, b) => a + b,
  f2: function (a, b) {
    return a + b
  }
}
a.self = a // 对象某个属性引用自身（循环引用）
const b = deepClone(a)

// 基本类型无需深拷贝
console.log(a.number === b.number) // true
console.log(a.bool === b.bool) // true
console.log(a.string === b.string) // true
console.log(a.empty1 === b.empty1) // true
console.log(a.empty2 === b.empty2) // true

// 函数无需深拷贝
console.log(a.f1 === b.f1) // true
console.log(a.f2 === b.f2) // true

// 对象、数组需要深拷贝
console.log(a.self === b.self) // false
console.log(a.array1 === b.array1) // false
console.log(a.array2 === b.array2) // false
console.log(a.date === b.date) // false
console.log(a.regexp === b.regexp) // false
console.log(a.obj === b.obj) // false
```

### structuredClone()

使用 Web API 的`structuredClone()` 结构化拷贝可以实现深拷贝，详见[MDN](https://link.juejin.cn/?target=https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

```js:no-line-numbers
const obj = {
  child: {
    name: 'child'
  }
}

const copyObj = structuredClone(obj) // 结构化拷贝（深拷贝）
obj.child.name = 'child changed' // 修改原对象

console.log(obj) // { child: { name: 'child changed' } }
console.log(copyObj) // { child: { name: 'child' } }
console.log(obj.child === copyObj.child) // false
```

## 参考资料

- [浅拷贝与深拷贝](https://juejin.cn/post/6844904197595332622)
- [JS 的引用赋值与传值赋值](https://www.cnblogs.com/cench/p/6019453.html)
- [轻松拿下 JS 浅拷贝、深拷贝](https://juejin.cn/post/7072528644739956773)
- [structuredClone()——MDN](https://link.juejin.cn/?target=https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
