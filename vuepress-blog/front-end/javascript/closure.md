---
title: 闭包
---

## 前言

### 各权威资料对闭包的定义

- 现在的 MDN：一个函数和对其周围状态（词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包。
  - 闭包让你可以在一个内层函数中访问到其外层函数的作用域。
  - 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。
- 以前的 MDN：闭包是指那些能够访问自由变量的函数。
- JavaScript 高级程序设计（第 4 版）：闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。
- JavaScript权威指南（第 7 版）：JavaScript 函数对象的内部状态不仅要包括函数代
码，还要包括对函数定义所在作用域的引用。这种函数对象与作用域（即一组变量绑定）组合起来解析函数变量的机制，在计算机科学文献中被称作闭包。**严格来讲，所有 JavaScript 函数都是闭包。但由于多数函数调用与函数定义都在同一作用域内，所以闭包的存在无关紧要。闭包真正值得关注的时候，是定义函数与调用函数的作用域不同的时候。最常见的情形就是一个函数返回了在它内部定义的嵌套函数。**

### 变量的分类

1. 全局变量：在全局作用域定义的变量，所有作用域都可以访问
2. 局部（本地）变量：在块级或函数作用域定义的变量，只能在当前作用域及其子作用域访问
3. 自由变量：在某个**作用域外定义**但在该**作用域内使用**的变量（全局变量、局部变量被别的作用域引用，就同时成为了自由变量）

### 词法作用域

因为 JS 采用的是词法作用域（又称静态作用域），函数的作用域在函数定义的时候就决定了。

而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

在JS里，自由变量的查找会从本级作用域依次向外部作用域，直到查到最近的一个。又因为词法作用域，自由变量的绑定在函数定义时就已经确定。如下所示：

```js:no-line-numbers
// 作用域链：foo、bar -> Script({n: 'global n'}) -> Global(window)
let n = 'global n'
// 在预编译阶段，即在函数执行之前，foo 函数的作用链就指定好了
// 所以自由变量 n 的查找在 Script 作用域中找到
function foo() {
  console.log(n)
}

function bar(fn) {
  let n = 'bar n'
  fn()
}

bar(foo) // global n
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220723035134.png)

注意：在全局下使用 `let` 会在`Global` 作用域下生成一级 `Script` 作用域，使用 `var n = 'global n'` ，就只有一级 `Global` 作用域。

### 高阶函数与嵌套调用

定义外层函数为父函数，内层函数为子函数。

高阶函数：

1.函数作为参数

```js:no-line-numbers
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2))
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

let x = 10
let y = 20

calc(x, y, add) // 30
calc(x, y, sub) // -10
```

2. 函数作为返回值

父函数嵌套（包裹）子函数：在父函数定义并返回子函数

```js:no-line-numbers
function makeAdder(count) {
  function add(num) {
    return count + num
  }

  return add
}

let add5 = makeAdder(5)
let add10 = makeAdder(10)
console.log(add5(1)) // 6 等价于 makeAdder(5)(1)
console.log(add10(1)) // 11 等价于 makeAdder(10)(1)
```

嵌套调用：

父函数嵌套（包裹）子函数：在父函数中定义并调用子函数。

每当外部函数被调用时，内部函数都会在内存中开辟新的空间。

引用到的变量沿着作用域链逐级向上查找，同名变量使用最近的值。如果找到全局作用域还没找到，则报变量未定义的错误。

```js:no-line-numbers
// 作用域链：foo3 -> foo2 -> foo1 -> 全局
let n = 'global n'
function foo1() {
  let n = 'foo1 n'

  function foo2() {
    // let n = 'foo2 n'
    
    function foo3() {
      console.log(n)
      debugger // 闭包 (foo1)
    }
    foo3()
  }
  foo2()
}
foo1() // foo1 n
```

## 定义

不严谨：闭包是能够访问**外层函数作用域**中的自由变量的**函数**。

广义（理论）：闭包是能够访问**外层作用域**中的自由变量的函数与这个**自由变量**组成的**词法环境**。

狭义（实践）：闭包是有访问**外层函数作用域**中的自由变量的函数与这个**自由变量**组成的**词法环境**。

**闭包最大的作用是可以在内层函数中访问到其外层函数的作用域。**

每个函数在预编译阶段都会生成一个空的闭包对象，无论这个闭包是否被使用。当函数执行完毕，函数实例被销毁，如果函数内部引用了外部自由变量，将自由变量加入到闭包对象中，闭包会被内层函数的作用域链引用，不会被回收；否则空的闭包没有被引用，会被释放回收。

### 广义

从理论（广义）角度，所有函数在创建时都会创建闭包，无论这个闭包是否被使用。函数执行完毕，没有被使用到的闭包会被回收。

```js:no-line-numbers
var a = 1
function foo() {
  console.log(a)
}
foo()
```

`foo` 引用了外层全局作用域的变量 `a`，创建了闭包，但因为全局作用域是长久存在的，所以该闭包多此一举，函数执行完毕也就被回收了。

### 狭义

从实践（狭义）角度，我们只关注：因为内层函数引用外层函数作用域的自由变量，依然存在、不被回收的闭包，即使创建这个闭包的外层函数（作用域）都已销毁。

```js:no-line-numbers
function foo() {
  let n = 'foo n'
  function bar() {
    console.log(n)
    debugger // 闭包 (foo){ n: "foo n" }
  }
  return bar
}
let tmp = foo()
tmp() // foo n
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220725220741.png)

内层函数 `bar` 引用了外层函数作用域的变量 `a`，外层函数 `foo` 创建了闭包，但因为函数作用域是随着函数执行完毕就被销毁的，为了内层函数能够引用外层函数的变量，该闭包是必须存在、不能被回收的。

## 为什么需要闭包

函数在函数调用栈上的执行流程：

- 函数在栈上运行，且会使用**栈内存**。
- 函数在栈内存上，保存**局部变量**等数据。
- 函数执行完后，出栈，函数作用域销毁。

函数出栈后，栈上保存的数据也就不存在了，为了保存该函数中被引用的自由变量，将变量名、变量值组成一个闭包对象保存在堆内存中，再将其他函数的作用域链引用这个闭包，也就能访问到该函数的自由变量了。

从语言的角度：闭包是一种可以让函数内部访问到外部自由变量的技术或语法特性，在支持头等函数的编程语言中都存在。

头等函数即函数是第一公民：函数可以赋值给变量、可以作为其他函数的参数或返回值，便于写出高阶函数和闭包

## 闭包创建过程

推荐阅读：[一文颠覆大众对闭包的认知]([https://juejin.cn/post/7079995358624874509](https://juejin.cn/post/7079995358624874509))

创建过程：

1. `V8` 引擎在每个函数执行前都会进行预编译，都会创建一个闭包对象 `Closure`，无论这个闭包是否被使用。
2. 发现子函数引用到父函数的变量，则给闭包对象 `Closure` 添加键值对（变量名：变量值），同时子函数的作用域链 `[[Scopres]]` 引用这个闭包对象（ `Scopes` 数组）
3. 执行子函数时，自由变量会在其作用域链上查找，可以查找到 `Closure` 对象里的值。
4. 函数执行完毕，函数实例被销毁，空的闭包被释放回收，被引用到的闭包不会被回收。

如下代码：

```js:no-line-numbers
// 1: Script.LE = {n, father}
let n = 'n'
// 2: father.[[Scopes]] = [Script.LE, Global.LE]
function father() {
  // 3: father.LE = {x, y, z, son1, son2}，并创建空的闭包对象 father.Closure = {}
  let x = 'x'
  let y = 'y'
  let z = 'z' // 没有子函数引用 z，所以 father.Closure 中无 z
  // 4: 发现 son1 引用了父函数的变量 x，令闭包对象 father.Closure = {x: "x"}
  // 5: son1.[[Scopes]] = [father.Closure, Script.LE, global.LE]
  function son1() {
    console.log(x)
    debugger // 闭包 (father){x: "x", y: "y"}
  }
  // 6: 发现 son2 引用了父函数的变量 y，令闭包对象 father.Closure = {x: "x", y: "y"}
  // 7: son2.[[Scopes]] = [father.Closure, Script.LE, global.LE]
  function son2() {
    console.log(y)
  }
  return son1
}
let foo = father()
foo()
// 执行完毕，函数实例销毁，但因为函数内部引用外部变量，闭包不会销毁
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220724034456.png)

foo 作用域链：`foo.LE(local)` → `foo.Closure{x: 'x', y: 'y'}` → `Script{n: 'n', foo: ƒ}` → `Global`

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220724035832.png)

每当 V8 引擎预编译函数时，遇到其内部子函数声明，会快速地扫描内部函数使用了当前父函数中的哪些自由变量，将这些变量加入到父函数的闭包对象中，最终这个闭包对象将作为这些内部子函数作用域链中的一员。

多个子函数使用同一个闭包对象，只有当所有子函数的作用域链都被释放才会释放父函数的闭包对象

## 闭包创建场景

1.父函数返回子函数，且子函数引用父函数的变量。

执行父函数得到的返回值（即子函数）赋值给中间变量 `tmp`，在执行 `tmp`。

```js:no-line-numbers
function father() {
  let n = 'father n'
  
  function son() {
    console.log(n)
    debugger // 闭包 (father) n: "father n"
  }
  
  return son
}
let tmp = father()
tmp() // father n
```

son 作用域链：`son.LE(local)` → `son.Closure{n: "father n"}` → `Script` → `Global`

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220723044039.png)

或删去中间变量 foo

```js:no-line-numbers
function father() {
  let n = 'father n'

  function son() {
    console.log(n)
    debugger // 闭包 (father) n: "father n"
  }

  return son
}
father()()
```

2.父函数返回子函数，且子函数引用父函数的变量，执行父函数得到的返回值作为同级函数的参数

```js:no-line-numbers
function father() {
  let n = 'father n'
  
  function son() {
    console.log(n)
    debugger // 闭包 (father) n: "father n"
  }
  
  return son
}

function foo(fn) {
  let n = 'foo n'
  fn()
}

foo(father()) // father n
```

3.父函数嵌套包裹子函数，父函数调用子函数，且子函数引用父函数的变量

```js:no-line-numbers
function father() {
  let n = 'father n'
  
  function son() {
    console.log(n)
    debugger // 闭包 (father) n: "father n"
  }
  
  son()
}
father() // father n
```

4.父函数嵌套包裹多个子函数

`Closure` 会被所有子函数的作用域链 `[[Scopes]]` 引用，所以想要 `Closure` 不被引用就需要使所有子函数都被销毁，避免内存泄漏。

```js:no-line-numbers
function father() {
  let n = 'father n'
  function son1() {
    console.log(n) // son1 引用父函数的变量 n
  }
  function son2() {
    // son2 不引用父函数的变量
    debugger // 闭包 (father) n: "father n"
  }

  son2() // 只调用 son2
}
father()
```

5.函数赋值

`foo` 创建的闭包对象被 `Script` 作用域的 `bar` 引用

```js:no-line-numbers
let bar = null
function foo() {
  let n = 'foo n'

  bar = function () {
    console.log(n)
    debugger // 闭包 (foo) n: "foo n"
  }
}
foo()
bar() // foo n
```

6.循环赋值

```js:no-line-numbers
// 不使用闭包
for (var i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} // 6 6 6 6 6 6

// 使用闭包
// 作用域链：setTimeout 的回调函数 -> 匿名立即执行函数 -> 全局
for (var i = 0; i < 6; i++) {
  ;(function (j) {
    setTimeout(() => {
      console.log(j)
      debugger // 闭包 j: 0、1、2、3、4、5
    }, 0)
  })(i)
} // 0 1 2 3 4 5

// ES6：let
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} // 0 1 2 3 4 5
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220723010835.png)

- 不使用闭包：异步任务 `setTimeout` 放到任务队列，等到同步任务执行完毕再执行任务队列。同步任务 `for` 每次循环过程中`i` 自增并将 `console.log(i)` 放到任务队列，同步任务结束时 `i` 为 6，任务队列中有 6 个 `console.log(i)`，依次执行任务队列，最后输出 6 个 6
- 使用闭包：作用域链：`setTimeout` 的回调函数 -> 匿名立即执行函数 -> 全局。回调函数引用了自由变量 `j`，向上查找，找到立即执行函数的形参 `j`，形参 `j` 接收实参 `i` 传入的值。回调函数内部使用了外部立即执行函数作用域的形参 `j`，形成了 6 个互不干扰的闭包。
- 使用 `let`：形成 6 个互不干扰的块级作用域

立即执行函数 `IIFE`(Immediately Invoked Function Expression)

定义：声明一个匿名函数，并立即调用这个函数。

作用：创建一个独立作用域，使得外部访问不了内部变量，同时避免全局污染。

**块级作用域的引入使得 ES5 常用的立即执行函数不再需要了。**

7.回调函数

使用回调函数就是在使用闭包

```js:no-line-numbers
function father() {
  let n = 'father n'
  setTimeout(() => {
    console.log(n)
    debugger // 闭包 (father) n: "father n"
  }, 0)
}
father() // father n
```

`setTimeout` 的回调函数引用了上级 `father` 作用域的变量 `n`

8.getter、setter

```js:no-line-numbers
function createCache() {
  const data = {} // 闭包中被隐藏的数据，外界无法访问
  // 返回一个有 getter 和 setter 的对象
  return {
    set: (key, val) {
      data[key] = val
    },
    get: function (key) {
      return data[key]
    }
  }
}

const cache = createCache()
cache.set('age', 22)
console.log(cache.get('age')) // 22
```

## 闭包的特性

被内层函数使用到的闭包对象不是空的，其中的变量是私有的，不会污染全局。

被内层函数使用到的闭包对象不会被垃圾回收机制回收，其中的变量不会被销毁。

## 闭包的应用

闭包最大的作用是可以在其他的执行上下文中，访问到函数内部的变量。

### 模块

闭包与立即执行函数实现模块，解决了**命名空间污染**的问题。

```js:no-line-numbers
var moduleA = (function () {
  var dataA = 'dataA'
  function getA() {
    return dataA
  }
  return {
    getA: getA,
    dataA: dataA
  }
})()

moduleA.getA() // dataA
```

JS 模块化发展历程：闭包 → AMD、CMD → CommonJS → ES Module

### 模拟私有属性

隐藏数据，实现私有属性成员（变量或方法），只提供对外的接口。ES6 可以通过 `#` 定义类的私有成员。

```js:no-line-numbers
function createCache() {
  let _data = {} // 闭包中被隐藏的数据，外界无法访问
  // 返回一个有 getter 和 setter 的对象
  return {
    set: (key, val) => {
      _data[key] = val
    },
    get: (key) => {
      return _data[key]
    }
  }
}

let cache = createCache()
cache.set('name', 'nevermore')
console.log(cache.get('name')) // nevermore
// 无法访问私有属性
console.log(cache._data) // undefined
```

### 函数式编程

实现高阶函数，如柯里化、节流防抖：

```js:no-line-numbers
// 普通函数形式的柯里化
function sum1(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
console.log(sum1(10)(20)(30)) // 60

// 箭头函数形式的柯里化
const sum2 = (x) => (y) => (z) => {
  return x + y + z
}
console.log(sum2(10)(20)(30)) // 60

// 再省略 return
const sum3 = (x) => (y) => (z) => x + y + z
console.log(sum3(10)(20)(30)) // 60
```

节流：

```js:no-line-numbers
function throttle(fn, delay) {
  let timer = null
  return function() {
    if (!timer) {
      fn.apply(this, arguments) // 注意在定时器外
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}
window.onscroll = throttle(() => console.log('hi'), 1000) // 业务代码
```

## 闭包的缺点

使用不当、滥用闭包才会造成内存泄漏，因为闭包包含外层函数的作用域，内存占用大，引用的内容多了，就会造成内存泄漏。应当在函数执行结束后主动清除被引用的自由变量。

正确使用闭包不会造成内存泄漏，由于老浏览器（主要是 IE6）的垃圾回收机制的 bug，导致容易出现内存泄漏。

内存泄漏：系统进程不再用到的内存，没有及时释放或被回收。

以下代码会发生内存泄漏：

```js:no-line-numbers
function fun() {
  let arr = Array(10000000)
  function fun1() {
    // arr 加入 Closure
    console.log(arr)
  }
  return function fun2() {}
}
window.f = fun() // 长久持有 fun2 的引用
```

原因：父函数的闭包对象 `Closure` 被所有子函数的作用域链引用，只要有一个子函数没有被销毁，`Closure` 就无法销毁，闭包中的变量也无法销毁，就发生了内存泄漏。

## 总结

定义：

- 不严谨：闭包是能够访问**外层函数作用域**中的自由变量的**函数**。
- 广义（理论）：闭包是能够访问**外层作用域**中的自由变量的函数与这个**自由变量**组成的**词法环境**。
- 狭义（实践）：闭包是能够访问**外层函数作用域**中的自由变量的函数与这个**自由变量**组成的**词法环境**。

创建过程：

每个函数在预编译阶段都会生成一个空的闭包对象，无论这个闭包是否被使用。当函数执行完毕，函数实例被销毁，如果函数内部引用了外部自由变量，将自由变量加入到闭包对象中，闭包会被内层函数的作用域链引用，不会被回收；否则空的闭包没有被引用，会被释放回收。

作用：

**闭包最大的作用是可以在内层函数中访问到其外层函数的作用域。**

特性：

- 变量私有：不会污染全局
- 变量生命周期长：不会随着函数执行结束而被回收

应用：

- 模块
- 私有属性
- 函数式编程：实现高阶函数，如柯里化、防抖节流

缺点：

使用不当、滥用闭包才会造成内存泄漏。因为闭包包含外层函数的作用域，内存占用大，引用的内容多了，就会造成内存泄漏。

## 参考资料

- [闭包——MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
- [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/blog/issues/3)
- [JavaScript深入之闭包](https://github.com/mqyqingfeng/Blog/issues/9)
- [头等函数——维基百科]([https://zh.wikipedia.org/wiki/头等函数](https://zh.wikipedia.org/wiki/头等函数))
- [闭包是什么？从为什么会有闭包讲起！]([https://juejin.cn/post/7084549768067678245](https://juejin.cn/post/7084549768067678245))
- [一文颠覆大众对闭包的认知]([https://juejin.cn/post/7079995358624874509](https://juejin.cn/post/7079995358624874509))
- [前端基础进阶（四）：详细图解作用域链与闭包]([https://segmentfault.com/a/1190000012646221](https://segmentfault.com/a/1190000012646221))
- [一篇文章看懂JS闭包，都要2020年了，你怎么能还不懂闭包？]([https://www.cnblogs.com/echolun/p/11897004.html](https://www.cnblogs.com/echolun/p/11897004.html))
- [JS 闭包经典使用场景和含闭包必刷题](https://juejin.cn/post/6937469222251560990)
