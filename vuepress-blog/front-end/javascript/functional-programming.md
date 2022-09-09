---
  title: 函数式编程
---

表达式：运算过程，总是有返回值

语句：执行操作，没有返回值

函数式编程多用表达式，少用语句。

纯函数：

- 相同输入产生相同输出（没有依赖除了输入的外部环境）
- 无副作用（没有改变包括输入在内的外部环境）

数组的方法：

- slice 截取纯函数：返回新数组，不会修改原数组，纯函数
- splice 拼接非纯函数：返回被删的数组，会修改原数组，非纯函数

## 纯函数判断

```js:no-line-numbers
// 纯函数
function sum(num1, num2) {
  return num1 + num2 
}

// 非纯函数（依赖 dep）
let dep = 5
function add(num){
  return dep + num
}
console.log(add(5)) // 10
dep = 10
console.log(add(5)) // 15

// 非纯函数（修改了输入）
let person = { name: 'nevermore', age: 23 }

function modify(obj) {
  obj.age = 100
}
modify(person)
console.log(person)
```

## 柯里化

柯里化（Currying）：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。每次调用函数时，它只接受一部分参数，并返回一个函数，直到传递所有参数为止。

函数的单一职责原则：每个函数的处理逻辑单一

### 柯里化例子

```js:no-line-numbers
function sum1(x, y, z) {
  return x + y + z
}
console.log(sum1(10, 20, 30)) // 60

function sum2(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
console.log(sum2(10)(20)(30)) // 60

// 简化柯里化的代码
const sum3 = (x) => (y) => (z) => {
  return x + y + z
}
console.log(sum3(10)(20)(30)) // 60

// 再省略 return
const sum4 = (x) => (y) => (z) => x + y + z
console.log(sum4(10)(20)(30)) // 60
```

### 柯里化的作用

1. 参数复用：公共参数
2. 提前返回：只接收一部分参数，返回一个函数
3. 延迟执行：柯里化返回一个预置参数的新函数，并没有立即执行

参数复用例子：

```js:no-line-numbers
function log(date, type, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`
  )
}
// 柯里化实现了参数的复用
// log(new Date(), 'FIX', '修复某 bug')
// log(new Date(), 'FIX', '修复某某 bug')
// log(new Date(), 'FEATURE', '添加某功能')

let nowLog = log(new Date())
nowLog('FIX')('修复某 bug')
nowLog('FEATURE')('添加某功能')

let nowFixLog = log(new Date())('FIX')
nowFixLog('修复某 bug')

let nowFeatureLog = log(new Date())('FEATURE')
nowFeatureLog('添加某功能')
```

### 柯里化函数的实现

柯里化函数：将普通函数柯里化的一个工具函数

四行代码实现：

1. 判断当前传入函数的**实参**个数 `args.length` 是否大于等于需要柯里化的函数**形参**个数 `fn.length`
2. 是则结束执行 `fn(...args)`
3. 否则递归执行一个返回 `curry(fn, ...args, ..._args)`  函数的函数

```js:no-line-numbers
// 柯里化函数
const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args)

// 箭头函数转换成普通函数
const curry = function (fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    return function (..._args) {
      return curry(fn, ...args, ..._args)
    }
  }
}

// 验证
function sum(x, y, z) {
  return x + y + z
}
const curriedSum = curry(sum)

console.log(curriedSum(1, 2, 3)) // 6
console.log(curriedSum(1)(2)(3)) // 6
console.log(curriedSum(1, 2)(3)) // 6
console.log(curriedSum(1)(2, 3)) // 6
```

## 组合函数

组合函数：将一系列单一责任函数组合成一个复杂函数，自动化执行一系列函数。

```js:no-line-numbers
const add1 = (x) => x + 1
const mul2 = (x) => x * 2
const pow3 = (x) => x ** 3
const div4 = (x) => x / 4
// 数据流从右至左
div4(pow3(mul2(add1(0)))) // 2
```

compose可以把类似于`f(g(h(x)))`的写法简化成`compose(f, g, h)(x)`，提高代码可读性，数据流从左至右称为管道。

```js:no-line-numbers
// 组合函数（从左至右）
const compose = (...fns) => {
  return (x) => {
    return fns.reduce((arg, fn) => fn(arg), x)
  }
}

// 箭头函数转化为普通函数
function compose(...fns) {
  return function (x) {
    // 若要数据流从右至左，则可以用 reduceRight
    return fns.reduce(function (arg, fn) {
      return fn(arg)
    }, x)
  }
}

// 验证
const add1 = (x) => x + 1
const mul2 = (x) => x * 2
const pow3 = (x) => x ** 3
const div4 = (x) => x / 4

compose(add1, mul2, pow3, div4)(0) // 2
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220410025402.png)

## 参考资料

- [函数柯里化：三行代码实现 add(1)(2)(3)](https://juejin.cn/post/6844904093467541517)
- [「前端进阶」彻底弄懂函数组合](https://juejin.cn/post/6844903910834962446)
