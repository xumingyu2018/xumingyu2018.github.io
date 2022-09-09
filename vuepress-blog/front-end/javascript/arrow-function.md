---
  title: 箭头函数
---

## 1.没有原型

1.没有`prototype`(原型)，所以箭头函数本身没有 `this`、`super`

```js:no-line-numbers
let arrow = () =>{}
console.log(arrow.prototype) // undefined
```

## 2.this 指向定义时的上层作用域

`this` 指向 **定义时所在** 的上层作用域：

- 如果箭头函数被非箭头函数包含：`this` 指向 **定义时所在的** 最近一层**非箭头函数**的 `this` 值
- 如果箭头函数外层没有普通函数：`this` 指向全局作用域

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

**普通函数的 this 值只有在函数执行时才能确定调用者，而不是在函数定义时确定**，箭头函数就是要打破这一规则，方便开发，比如在 setTimeout 中使用箭头函数：

```js:no-line-numbers
var name = 'window' // 挂载到 window 上

// 默认绑定
const obj1 = {
  name: 'obj1',
  delay() {
    setTimeout(function() {
      console.log(this.name)
    }, 0) // setTimeout 传入普通函数，则是独立函数调用，指向 window
  }
}
obj1.delay() // 'window'

// 箭头函数外层有普通函数
const obj2 = {
  name: 'obj2',
  delay() {
    setTimeout(() => {
      console.log(this.name)
    }, 0)
  }
}
obj2.delay() // 'obj2'

// 箭头函数外层没有普通函数
const fn = () => console.log(this.name)
fn() // 'window'
```

::: warning
块语句，如 `if(){}`、字面量对象 `let obj = {}` 等不会产生作用域

作用域有：全局、函数、块、eval 作用域
:::

## 3.没有参数列表

没有 `arguments`，可以使用 `rest参数…` 获取参数列表

```js:no-line-numbers
// 普通函数
function fn1(args){
  console.log(arguments)
}
fn1(1,2,3)// [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// rest参数...
let fn2 = (num1, num2, ...args) => {
  console.log(args)
}
fn2(1,2,3,4,5) // [3,4,5]
```

## 4.不能指定 this 指向

不能通过 `call、apply、bind` 改变 `this` 指向

## 5.不能 new 调用

不能通过 `new` 调用，箭头函数不能作为构造函数使用，所以也没有 `new.target`

`new.target`是ES6新引入的属性，普通函数如果通过`new`调用，`new.target`会返回该函数的引用。此属性主要：用于确定构造函数是否为new调用的。

## 6.不能重命名函数参数

普通函数的函数参数支持重命名，后面出现的会覆盖前面的，箭头函数会抛出错误：

```js:no-line-numbers
function fn1(a, a) {
  console.log(a, arguments) // 2 [1,2]
}

let fn2 = (a, a) => {
  console.log(a) // 报错：在此上下文中不允许重复参数名称
}
fn1(1, 2)
fn2(1, 2)
```

## 参考资料

- [详解箭头函数和普通函数的区别以及箭头函数的注意事项、不适用场景](https://juejin.cn/post/6844903801799835655)
- [ES6 系列之箭头函数](https://juejin.cn/post/6844903616231260174)
