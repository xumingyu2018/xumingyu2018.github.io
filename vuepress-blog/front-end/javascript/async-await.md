---
title: async、await
---

Promise 通过链式调用解决回调地狱的问题，但本质还是基于回调函数

async、await 通过同步语法的方式解决回调函数不直观的问题

## 与 Promise 的关系

1. 执行 async 函数返回的是 Promise 对象

如果直接返回一个值，则封装成 Promise 对象；如果返回一个 Promise，则直接返回

```js:no-line-numbers
// 直接返回一个值
async function fn1() {
  return 1
}
// 等价于
function fn1() {
  return new Promise((resolve) => {
    resolve(1)
  })
}
console.log(fn1())

// 返回一个 Promise
async function fn2() {
  return Promise.resolve(2)
}
console.log(fn2())
// 两者等价，均为成功状态
```

2. await 相当于 Promise 的 `.then`，捕获成功状态 Promise 对象的结果

```js:no-line-numbers
// await 后接 普通值，得到该值
;(async function () {
  console.log(await 1) // 1
})()

// await 后接 Promise，捕获成功状态对象的结果
;(async function () {
  console.log(await Promise.resolve('成功')) // 成功
})()

// await 后接 async 函数的执行结果，捕获成功状态对象的结果
async function fn1() {
  return '成功'
}
;(async function () {
  console.log(await fn1()) // 成功
})()
```

3. `try...catch` 相当于 Promise 的 `.catch`

```js:no-line-numbers
;(async function () {
  const p = Promise.reject('报错')
  try {
    const res = await p
    console.log(res)
  } catch (err) {
    console.error(err)
  }
})()
// 报错
```

总结：

- `async` 等价于 `return new Promise` 封装 Promise
- `await` 等价于 `.then` 处理 Promise 成功
- `try...catch` 等价于 `.catch` 处理 Promise 失败

练习：

```js:no-line-numbers
async function fn() {
  return 1
}
;(async function () {
  console.log(fn())        // Promise {<fulfilled>: 1}
  console.log(await fn())  // 1
})()
```

## 异步函数的返回值

异步函数返回值是一个 Promise 对象：

```js:no-line-numbers
async function foo() {
  // 1.返回普通值
  return 'foo 完成'

  // 2.返回 thenable 对象
  // return {
  //   then: function(resolve, reject) {
  //     resolve("thenable 完成")
  //   }
  // }

  // 3.返回 Promise
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Promise 完成')
  //   }, 1000)
  // })
}

foo().then((res) => {
  console.log('res:', res)
})
```

## 异步函数中的异常

异步函数中的异常，会作为 Promise 的 reject 值被捕获到：

```js:no-line-numbers
async function foo() {
  throw new Error('报错')
}

foo().catch((err) => {
  console.log(err)
})

console.log('异步函数中报错，后续代码仍会执行')

function bar() {
  throw new Error('报错')
}
bar()
console.log('同步函数中报错，后续代码不执行')
```

## 执行顺序

只要遇到了 `await` ：

- 紧跟着 `await` 同一行的代码相当于放在了 `new Promise` 的 `executor` 中，同步执行
- 下一行及之后的代码相当于放在于 `.then()` 中，异步执行。

```js:no-line-numbers
async function async1() {
  console.log("1")
  await async2()
  console.log("3")
}
async function async2() {
  console.log("2")
}
async1()
// 1 2 3

// 等价于
function async1() {
  console.log('1')
  Promise.resolve(async2()).then(() => {
    // 执行完 async2 的返回值放入 resolve() 转化为成功状态 Promise，再 then
    console.log('3')
  })
}
async1()
```

例一：await 同一行同步执行，下面所有行放到微任务里

```js:no-line-numbers
// 注释序号为执行顺序
async function async1 () {
  console.log('async1 start') // 2
  await async2() // 同步执行函数 async2
  // 只要遇到了 await ，后面的代码都相当于放在 then（微任务）里
  console.log('async1 end') // 5 微任务执行完毕
}

async function async2 () {
  console.log('async2') // 3
}

console.log('script start') // 1
async1()
console.log('script end') // 4 同步代码结束，开始执行微任务
```

例二：await 后接 reject，会报错

```js:no-line-numbers
;(async function () {
  console.log('start')
  const a = await 1
  console.log('a:', a)
  const b = await Promise.resolve(2)
  console.log('b:', b)
  const c = await Promise.reject(3)
  // await 后接 reject()，会报错，后边不再执行
  console.log('c:', c)
  console.log('end')
})()

// start
// a: 1
// b: 2
// Uncaught(in promise) 3

// 用 try catch 改写
;(async function () {
  try {
    console.log('start')
    const a = await 1
    console.log('a:', a)
    const b = await Promise.resolve(2)
    console.log('b:', b)
    const c = await Promise.reject(3)
    // 后边不再执行
    console.log('c:', c)
    console.log('end')
  } catch (err) {
    // 报错被 catch 捕获
    console.log('err:', err)
  }
})()

// start
// a: 1
// b: 2
// err: 3
```

## async、await 加载图片

[在线预览](http://js.jirengu.com/jaxurotole/1/edit?js,output)

```js:no-line-numbers
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`加载地址为 ${src} 的图片失败`)
      reject(err)
    }
    img.src = src
  })
}

const url1 =
  'https://p6-passport.byteacctimg.com/img/user-avatar/c2ff47a1390407c1a16b5e5fc3aa5e1f~300x300.image'
const url2 =
  'https://avatars.githubusercontent.com/u/39004291?s=400&u=eb0d02f850acaf334bdb14611a7d6d2e50591c57&v=4'

// 立即执行匿名函数
async function load () {
  // 注意：await 必须放在 async 函数中，否则会报错
  try {
    const img1 = await loadImg(url1)
    document.body.appendChild(img1)

    const img2 = await loadImg(url2)
    document.body.appendChild(img2)
  } catch (err) {
    console.error(err)
  }
}
load()
```
