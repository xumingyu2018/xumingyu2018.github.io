---
  title: with、eval、严格模式
---

## with 语句（了解，不要用）

作用：扩展作用域链，改变上下文

严格模式下无法使用 with

```js:no-line-numbers
const name = 'window name'
const obj = { name: 'obj name' }

const foo = () => {
  // 作用域链：AO(foo) -> GO
  console.log(name) // 'window name'
  with (obj) {
    // 作用域链：obj -> AO(foo) -> GO
    console.log(name) // 'obj name'
  }
}
foo()
```

## eval 函数（了解，不要用）

作用：将传入的字符串当做 JS 代码执行

严格模式下无法使用 eval

```js:no-line-numbers
const str = 'const msg = "Hello World"; console.log(msg);'
eval(str)
```

不使用的原因：

1. 可读性差
2. 传入的字符串可能在执行过程中被恶意篡改，存在安全风险
3. 无法被 JS 引擎优化

## 严格模式

### 严格模式常见语法限制

```js:no-line-numbers
'use strict'

// 1.禁止意外创建全局变量（不使用变量声明关键字，默认创建全局变量）
message = 'Hello window'
console.log(message) // 'Hello window'

function foo() {
  message = 'Hello foo'
}

foo()
console.log(message) // 'Hello foo'

// 2.不允许函数有相同的参数名称
function bar(x, y, x) {
  console.log(x, y, x)
}

bar(1, 2, 3)

// 3.消除静默错误
true.name = 'abc'
NaN = 123
let obj = {}
Object.defineProperty(obj, 'name', {
  configurable: false, // 不可配置
  writable: false, // 不可写
  value: 'nevermore',
})
console.log(obj.name)

obj.name = 'never'
delete obj.name

// 4.不允许使用原先的八进制格式 0123，应使用 0o123
let num1 = 0o123 // 八进制
let num2 = 0x123 // 十六进制
let num3 = 0b100 // 二进制
console.log(num1, num2, num3)

// 5.不允许使用with语句

// 6.eval 不再为上层范围引入新变量（即使是 var 也不会）
var str = "'use strict'; var info = 'Hello Eval'; console.log(info);" // 'Hello Eval'

eval(str)
console.log(info) // info is not defined
```

### 严格模式 this

```js:no-line-numbers
'use strict'

// 1.严格模式下，自执行函数（默认绑定）会指向 undefined
function foo() {
  console.log(this)
}
foo() // undefined

// 2.无论是否开启严格模式：
// 传入 setTimeout 的普通函数的 this 永远指向 window
// 传入 setTimeout 的箭头函数外层没有普通函数（即上层作用域为全局），this 永远指向 window
setTimeout(function () {
  console.log(this) // window
}, 1000)

setTimeout(() => console.log(this), 1000) // window

const obj1 = {
  message: 'Hello obj1',
  delay() {
    setTimeout(function () {
      console.log(this.message) // undefined
    }, 1000)
  },
}
obj1.delay() // undefined


// 3.传入 setTimeout 的箭头函数外层有普通函数
const obj2 = {
  message: 'Hello obj2',
  delay() {
    setTimeout(() => {
      console.log(this.message)
    }, 1000)
  },
}
obj2.delay() // 'Hello obj2'
```
