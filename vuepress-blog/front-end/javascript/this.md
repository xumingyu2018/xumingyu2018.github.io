---
title: this 指向
---

this 指向函数的调用者，其中有 5 种绑定规则：

![this 指向](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220712190005.png)

## 默认绑定

作为独立函数，被全局对象（window 或 global）调用

非严格模式下：

1. 浏览器环境：this 指向 window 对象
2. Node 环境：this 指向 global 对象

严格模式下：this 为 undefined

全局函数、函数赋值给变量再调用，调用者都是全局对象

案例一：

```js:no-line-numbers
function foo() {
  console.log(this)
}

foo() // window
```

案例二：

多个函数连环调用，依然是由全局对象调用

```js:no-line-numbers
// foo2 -> foo1
function foo1() {
  console.log(this) // window
}

function foo2() {
  console.log(this) // window
  foo1()
}

foo2()
```

案例三：

将字面量对象的方法的地址赋值给变量，再通过变量调用，依然是由全局对象调用

```js:no-line-numbers
let obj = {
  name: 'obj',
  foo: function() {
    console.log(this)
  },
}

let bar = obj.foo
bar() // window

```

案例四：

全局函数赋值给对象的方法

```js:no-line-numbers
function foo() {
  console.log(this)
}
let obj = {
  name: 'obj',
  objFoo: foo,
}

obj.objFoo()
let bar = obj.objFoo // {name: 'obj', objFoo: ƒ}
bar() // window
```

案例五：

高阶函数

```js:no-line-numbers
function foo() {
  function bar() {
    console.log(this)
  }
  return bar
}

let fn = foo()
fn() // window
```

案例六：

```js:no-line-numbers
function foo(func) {
  func()
}
let obj = {
  name: 'obj',
  bar: function () {
    console.log(this)
  },
}
foo(obj.bar) // window
```

## 隐式绑定

作为**字面量对象**的方法，隐式地被对象调用

案例一：

```js:no-line-numbers
let obj = {
  name: 'obj',
  foo: function() {
    console.log(this)
  }
}
obj.foo() // {name: 'obj', foo: ƒ}
```

案例二：

```js:no-line-numbers
let obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this)
  },
}

let obj2 = {
  name: 'obj2',
  bar: obj1.foo,
}

obj1.foo() // {name: 'obj1', foo: ƒ}
obj2.bar() // {name: 'obj2', bar: ƒ}

// bar 只是保存了 obj1.foo 函数的地址
// obj2 调用了这个地址上的函数
// 另见 特殊规则：间接函数引用
```

案例三：

```js:no-line-numbers
let obj = {
  foo: function(){
    console.log(this)
  }
}

let bar = obj.foo // bar 保存 obj.foo 函数的地址
obj.foo() // obj 隐式调用
bar() // window 独立函数调用
```

案例四：（刁钻）

JS 中数组也是对象，this 指向字面量数组

```js:no-line-numbers
let arr = [0, function(){console.log(this)}, 2]
arr[1]() // [0, ƒ, 2] 即 arr
```

## 显式绑定

使用 bind、call、apply 显式地指定被哪个调用者调用：

- bind 绑定 this，返回一个函数，但不执行函数
- call 绑定 this 并立即执行函数，参数为一个个值
- apply 绑定 this 并立即执行函数，参数为参数列表伪数组

```js:no-line-numbers
function foo() {
  console.log(this)
}

foo.bind(window)() // window
foo.bind({ name: 'obj' })() //{name: 'obj'}
foo.bind(123)() // Number {123}
foo.bind('123')() // String {'123'}
// 等价于
foo.call(window)
foo.call({ name: 'obj' })
foo.call(123)
foo.call('123')
// 等价于
foo.apply(window)
foo.apply({ name: 'obj' })
foo.apply(123)
foo.apply('123')
```

```js:no-line-numbers
// 解决了上面案例三的问题
const obj = {
  name: 'obj',
  add: function(x, y) {
    console.log(x + y, this)
  }
}

const myAdd = obj.add.bind(obj) // 中间变量指向这个函数，再显式绑定 obj
myAdd(1, 1) // 2 {name: 'obj', add: ƒ}
// 上面两句等价于下面一句
obj.add.bind(obj)(1, 1) // 立即执行函数

obj.add.call(obj, 2, 2) // 4 {name: 'obj', add: ƒ}

obj.add.apply(obj, [3, 3]) // 6 {name: 'obj', add: ƒ}
```

## new 绑定

作为类创建的实例对象方法被调用

:::warning

类创建的实例对象方法与类方法不同

- 实例对象方法通过 `this.foo` 定义
- 类方法通过 `static` 关键字定义

实例对象与字面量对象不同：

- 字面量对象是可以直接定义，对象的内容就是字面上的代码
- 实例对象是通过类创建而来的，对象的内容由构造函数构造
:::

注意：类创建的实例对象方法与类方法不同，类方法使用 static 关键字创建

```js:no-line-numbers
// ES5
function Person1(name) {
  // 实例特有属性、方法通过 this. 放在实例上
  this.name = name
  this.foo = function () {
    console.log(this)
  }
}
// 公有属性、方法放在原型上
Person1.prototype.bar = function () {
  console.log(this)
}
let p1 = new Person1('p1')
p1.foo() // Person1 {name: 'p1', foo: ƒ}
p1.bar() // Person1 {name: 'p1', foo: ƒ}
Person1.prototype.bar() // {bar: ƒ, constructor: ƒ}

// ES6
class Person2 {
  // 实例特有属性、方法放在 constructor 中
  constructor(name) {
    this.name = name
  }
  // 公有属性、方法放在 constructor 外
  foo() {
    console.log(this)
  }
  // 类方法可以不用实例化就可以调用
  static bar() {
    console.log(this)
  }
}
let p2 = new Person2('p2')
p2.foo() // Person2 {name: 'p2'} 注意：没有 foo
// p2.bar() 实例不能调用类方法
Person2.bar()
```

使用new关键字来调用函数是，会执行如下的操作：

1. 在内存中创建一个空的临时对象
2. 将这个临时对象的隐式原型 `[[Prototype]]` 指向构造函数显式原型 `prototype`
3. 绑定 `this` 到这个临时对象上
4. 执行构造函数内部的代码（给新对象添加属性）
5. 返回这个临时对象

new 操作符执行的操作：

```js:no-line-numbers
new Person()

// new 相当于执行以下操作：
function Person(name) {
  // 1.在内存中创建一个空的临时对象
  let obj = {}
  // 2.将这个临时对象的隐式原型指向构造函数的显式原型
  obj.__proto__ = Person.prototype
  // 3.绑定 this 到这个临时对象上
  Person.call(obj)
  // 4.执行构造函数内部的代码（给新对象添加属性）
  this.name = 'never'
  // 5.返回这个临时对象
  return this
}
```

## 箭头函数

箭头函数 `this` 指向 **定义时所在** 的上层作用域：

- 如果箭头函数被非箭头函数包含：`this` 指向 **定义时所在的** 最近一层**非箭头函数**的 `this` 值
- 如果箭头函数外层没有普通函数：`this` 指向全局作用域
- 箭头函数不绑定this

箭头函数的函数体是一层作用域，它的上层作用域即箭头函数定义所在的作用域

```js:no-line-numbers
let a // 声明全局变量 a 用于存放箭头函数的地址

let obj1 = { name: 'obj1' }
// obj1 调用 foo1，foo1 中将箭头函数赋值给 a
foo1.call(obj1)

let obj2 = { name: 'obj2' }
// obj2 调用 foo2，foo2 中调用全局变量 a 所指向的箭头函数
foo2.call(obj2)

function foo1() {
  // 箭头函数 this 指向函数定义时所在的最近一层非箭头函数的 this 值
  // 又通过 call 显式指定 foo1 调用者，所以 foo1 this 值指向 obj1
  a = () => {
    console.log(this.name)
  }
}

function foo2() {
  // 箭头函数 this 指向与调用位置无关
  a()
}
// 打印 obj1
```

```js:no-line-numbers
// 箭头函数场景应用
var obj = {
  data: [],
  getData: function() {
    setTimeout(() => {
      var result = ["abc"]
      this.data = result
    }, 2000);

    // 以前的写法
    // var _this = this
    // setTimeout(function() {
    //   var result = ["abc"]
    //   _this.data = result
    // })
  }
}
```

## 规则优先级

### 1.显式绑定高于隐式绑定

```js:no-line-numbers
function foo() {
  console.log(this)
}

let obj = {
  name: 'obj',
  foo: foo.bind('aa')
}

obj.foo() // String {'aa'}
```

### 2.new 绑定高于隐式绑定

```js:no-line-numbers
let obj = {
  foo: function () {
    console.log(this)
  }
}

let foo1 = new obj.foo() // foo {}
```

### 3.new 绑定高于 bind 绑定

new 不能与 apply/call 一起使用，只能与 bind 同时使用

```js:no-line-numbers
// new 的优先级高于 bind
function foo() {
  console.log(this)
}

let bar = foo.bind('aa')

let obj = new bar() // foo {}
```

### 4.bind 高于 call

有点反常理，理应后面覆盖前面。

bind 后就不能再更改绑定了。

```js:no-line-numbers
function foo() {
  console.log(this)
}
foo.bind('aa').call('bb') // String {'aa'}

// foo.call('aa').bind('bb') 报错：call 绑定后执行返回 undefined，无法 bind
```

## 特殊规则

### 1.内置函数的this

setTimeout，相当于独立函数调用，this 指向全局对象：

```js:no-line-numbers
setTimeout(function () {
  console.log(this) // window
}, 0)
```

监听点击，this 指向目标 DOM 元素

```js:no-line-numbers
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function () {
  console.log(this) // <div class="box"></div>
}

boxDiv.addEventListener('click', function () {
  console.log(this) // <div class="box"></div>
})
```

数组的方法forEach、map、filter，可以自己指定 this 指向：

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220402021324.png)

```js:no-line-numbers
let nums = [1, 2, 3]
let obj = { name: 'obj' }

nums.forEach(function (item) {
  console.log(item, this)
}, obj)
// 1 {name: 'obj'}
// 2 {name: 'obj'}
// 3 {name: 'obj'}

nums.map(function (item) {
  console.log(item, this)
}, obj)
// 1 {name: 'obj'}
// 2 {name: 'obj'}
// 3 {name: 'obj'}
```

### 2.显式绑定 null/undefined

给 bind、call、apply 传入 `null/undefined` 时，自动将 `this` 绑定成全局对象 `window`

```js:no-line-numbers
function foo() {
  console.log(this)
}
foo.apply('a') // String {'a'}

// 以下均输出 window
foo.bind(null)()
foo.bind(undefined)()

foo.call(null)
foo.call(undefined)

foo.apply(null)
foo.apply(undefined)
```

### 3.间接函数引用

```js:no-line-numbers
var name = 'window' // 挂载到 window 上

let obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)
  },
}

let obj2 = {
  name: 'obj2',
}

obj1.foo() // obj1

obj2.bar = obj1.foo // 将函数地址赋值给 obj2.bar，再调用这个地址上的函数，字面量对象的方法指向该对象
obj2.bar() // obj2

(obj2.bar = obj1.foo)() // window
// 赋值表达式 (obj2.foo = obj1.foo) 的结果是 obj1 的 foo 函数
// foo 函数被 window 直接调用，默认绑定
```

## 面试题

### 面试题一

```js:no-line-numbers
var name = 'window' // 挂载到 window 上

let person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  },
}

function sayName() {
  let foo = person.sayName
  foo() // window: 独立函数调用
  person.sayName() // person: 隐式调用
  (person.sayName)() // 等价于上行：person: 隐式调用
  (b = person.sayName)() // window: 赋值表达式(独立函数调用)
}

sayName()
```

### 面试题二

此题通过字面量定义字面量对象，有四个函数：

- foo1：普通函数
- foo2：箭头函数
- foo3：返回普通函数的普通函数
- foo4：返回箭头函数的普通函数

此题作用域链：全局 → foo1~4 函数 → foo3、foo4 返回的函数

```js:no-line-numbers
var name = 'window' // 挂载到 window 上

let person1 = {
  // this {name: 'person1', foo1: ƒ, foo2: ƒ, foo3: ƒ, foo4: ƒ}
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    console.log(this) // {name: 'person1', foo1: ƒ, foo2: ƒ, foo3: ƒ, foo4: ƒ}
    return () => {
      console.log(this.name)
    }
  },
}

let person2 = { name: 'person2' }

person1.foo1() // person1：隐式绑定
person1.foo1.call(person2) // person2：显示绑定优先级大于隐式绑定

person1.foo2() // window：上层作用域是全局，对象无作用域
person1.foo2.call(person2) // window：箭头函数无法通过 call 更改 this

person1.foo3()() // window：foo3()得到普通函数，再独立函数调用
person1.foo3.call(person2)() // window：foo3 绑定 person2 并执行得到普通函数，再独立函数调用
person1.foo3().call(person2) // person2：foo3()得到普通函数，再显式绑定

person1.foo4()() // person1：普通函数返回的箭头函数被字面量对象 person1 隐式绑定调用
person1.foo4.call(person2)() // person2：foo4 绑定 person2 并执行得到箭头函数
person1.foo4().call(person2) // person1：foo4()得到箭头函数无法通过 call 更改 this
```

### 面试题三

此题通过构造函数创建实例对象，有四个子函数，同面试题二

此题作用域链：全局 → Person 构造函数 → foo1~4 函数 → foo3、foo4 返回的函数

构造函数的 this 指向创建的实例对象
foo1~4 类的方法

相比于面试题二，只有 `person1.foo2()` 、`person1.foo2.call(person2)` 输出不同

```js:no-line-numbers
var name = 'window' // 挂载到 window 上

function Person (name) {
  console.log(this) // Person {}
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    console.log(this) // Person {}
    return () => {
      console.log(this.name)
    }
  }
}

let person1 = new Person('person1')
let person2 = new Person('person2')

person1.foo1() // person1：隐式绑定
person1.foo1.call(person2) // person2：显示绑定优先级大于隐式绑定

person1.foo2() // person1：上层作用域中是 person1，函数有作用域，对象无作用域
person1.foo2.call(person2) // person1：箭头函数无法通过 call 更改 this

person1.foo3()() // window：foo3()得到普通函数，再独立函数调用
person1.foo3.call(person2)() // window：foo3 绑定 person2 并执行得到普通函数，再独立函数调用
person1.foo3().call(person2) // person2：foo3()得到普通函数，再显式绑定

person1.foo4()() // person1：普通函数返回的箭头函数被 person1 调用
person1.foo4.call(person2)() // person2：foo4 绑定 person2 并执行得到箭头函数
person1.foo4().call(person2) // person1：foo4()得到箭头函数无法通过 call 更改 this
```

### 面试题四

此题作用域链：全局 → Person → obj（foo1、foo2所在）→ foo1、foo2返回函数

```js:no-line-numbers
var name = 'window' // 挂载到 window 上

function Person(name) {
  console.log(this) // Person{}
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      console.log(this) // {name: 'obj', foo1: ƒ, foo2: ƒ}
      return () => {
        console.log(this.name)
      }
    },
  }
}

let person1 = new Person('person1')
let person2 = new Person('person2')

person1.obj.foo1()() // window：foo1()得到普通函数，再独立函数调用
person1.obj.foo1.call(person2)() // window：foo1 绑定 person2 并执行得到普通函数，再独立函数调用
person1.obj.foo1().call(person2) // person2：foo1()得到普通函数，再显式绑定

person1.obj.foo2()() // obj：箭头函数 this 指向上层作用域 obj
person1.obj.foo2.call(person2)() // person2：该箭头函数的上层作用域被显式绑定了 person2
person1.obj.foo2().call(person2) // obj：foo2()得到箭头函数无法通过 call 更改 this
```

## 手写 bind

手写 bind

3 个要求：绑定 this、绑定参数、return 无误

```js:no-line-numbers
Function.prototype.myBind = function(caller, ...args) {
  // ES6 扩展运算符把伪数组变为一个个数值
  // 将显式调用者赋值给 fn
  const fn = this
  // 无参数则置空数组
  args = args ? args : []
  // newFnArgs 为 new 绑定的参数
  return function newFn(...newFnArgs) {
    // 因为 new 绑定优先级高于显式绑定，所以需要判断调用者是不是 new 出来的
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs)
    }
    return fn.apply(caller, [...args, ...newFnArgs])
  }
}

function fn1(a, b, c) {
  console.log(this)
  console.log(a, b, c)
  return 'fn1 返回值'
}

// bind 绑定后立即执行
const result = fn1.myBind({ x: 100 }, 10, 20, 30)()
console.log(result)
// { x: 100 }
// 10 20 30
// 'fn1 返回值'


// new 绑定
class People {
  constructor(name) {
    this.name = name
    this.age = age
  }
  fn() {
    console.log(this)
  }
}
const person = new People('nevermore', 23)
person.fn.myBind(person)()
// {name: 'nevermore', age: 23}
```
