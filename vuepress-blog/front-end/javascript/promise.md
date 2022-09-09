--- 
  title: Promise 
---

## 异步编程

因为 JS 是单线程语言，同步会阻塞代码执行，网页加载需要等待，异步不会阻塞代码执行

JS 采用单线程的事件循环方式管理异步任务，优点是简化编程模型，缺点是无法发挥 CPU 的全部性能（但前端目前不需要太高性能）

同步：一定要等任务执行完了，得到结果，才执行下一个任务。会有阻塞

异步：不等任务执行完，直接执行下一个任务。任务完成后，再通知程序员任务的结果。

如果几个任务互相独立，其中一个执行时间较长，那么一般就用异步地方式做这件事。

JS 异步编程进化史：callback → promise → generator → async + await。**async/await可以说是异步终极解决方案了。**

[JS 异步编程的六种方式](https://juejin.cn/post/6844903760280420366)：

1. 回调函数
2. 事件监听
3. 发布订阅者模式
4. Promise
5. Generator 生成器（ES6 语法）
6. async/await

### 什么是回调

**函数作为参数传给另一个函数，在未来特定的时间调用。这个作为参数的函数就是回调函数。**

「回调」经常用于获取「异步任务」的结果。

```js:no-line-numbers
function getA(fn) {
  setTimeout(() => {
    fn('A')
  }, 500)
}
getA((data) => {
  console.log(data)
})
```

Promise 的由来：

```js:no-line-numbers
// 1.同步代码无法取得异步结果
function requestData1(url) {
  // 模拟网络请求
  setTimeout(() => {
    // 传入的是正确的 URL，则请求成功
    if (url === 'rightURL') {
      // 成功
      let result = '成功结果'
      // 这样拿不到异步结果
      // 为了拿到异步结果，早期是使用回调函数的方式
      // 后来为了规范，使用Promise
      return result
    } else {
      let errMessage = 'url 错误'
      return errMessage
    }
  }, 1000)
}
requestData1('rightURL') // 没有结果

// 2.同步代码只能取得同步结果
function requestData2(url) {
  if (url === 'rightURL') {
    let result = '同步成功结果'
    return result
  } else {
    let errMessage = 'url 错误'
    return errMessage
  }
}
requestData2('rightURL') //'同步成功结果'

// 3.回调函数能传回异步结果，但不够统一规范
function requestData3(url, successCallback, failureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    if (url === 'rightURL') {
      let result = '回调函数成功结果'
      successCallback(result)
    } else {
      let errMessage = 'url 错误'
      failureCallback(errMessage)
    }
  }, 1000)
}
requestData3(
  'rightURL',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
) // '回调函数成功结果'

// 4.使用 Promise 规范异步请求，传回异步结果
function requestData4(url) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    console.log('开始网络请求')
    setTimeout(() => {
      if (url === 'rightURL') {
        let result = 'Promise 成功结果'
        resolve(result)
      } else {
        let errMessage = 'url 错误'
        reject(errMessage)
      }
    }, 1000)
  })
}

requestData4('rightURL').then(
  // 打印：开始网络请求
  (res) => {
    console.log(res) // 'Promise 成功结果'
  },
  (err) => {
    console.log(err)
  }
)
```

### 什么是回调地狱

Promise 解决了回调地狱的问题

**上一个函数的输出是下一个函数的输入，像是接力一样，就会嵌套，形成回调地狱。**

```js:no-line-numbers
function getA(fn) {
  setTimeout(() => {
    fn('A')
  }, 500)
}
function getB(fn) {
  setTimeout(() => {
    fn('B')
  }, 1000)
}
function getC(fn) {
  setTimeout(() => {
    fn('C')
  }, 1500)
}

getB((data) => {
  console.log(data)
  getA((data) => {
    console.log(data)
    getC((data) => {
      console.log(data)
    })
  })
})
// B A C
```

表现：一个函数作为参数需要依赖另一个函数执行调用，这另一个函数又依赖另一个函数，层层嵌套。

## 概述

Promise 通过 .then、catch 链式调用解决回调地狱（即回调函数嵌套过多）的问题，但本质还是基于回调函数

async、await 通过同步语法的方式解决回调函数不直观的问题

Promise 有三种状态：等待态（pending）、成功态（fulfilled）、失败态（rejected）

只有两种转变：等待 → 成功、等待 → 失败。转变不可逆

语法：

- 通过 new 创建 Promise 对象时，需要传入一个回调函数称为 executor
- executor 会被立即执行，并且可以传入另外两个回调函数 resolve、reject
- 当调用 resolve 回调函数时，状态由 pending → fulfilled，会执行 Promise 对象的 then 方法传入的回调函数
- 当调用 reject 回调函数时，状态由 pending → rejected，会执行 Promise 对象的 catch 方法传入的回调函数

状态：

- 等待状态：不会触发 then、catch
- 成功状态：会触发后续 then 的回调函数
- 失败状态：会触发后续 catch 的回调函数
- then 正常返回 fulfilled，里面有报错则返回 rejected
- catch 正常返回 fulfilled，里面有报错则返回 rejected
- 总之：无论 then 还是 catch，触发后只要无报错就 fulfilled，只要有报错 throw new Error 就 rejected（没报错就算成功！）

## Promise 对象方法

查看 Promise 对象方法

```js:no-line-numbers
console.log(Object.getOwnPropertyDescriptors(Promise.prototype))
```

ES5：实例对象共有的方法放到原型上

ES6：

1. 类中定义的方法，都会被实例继承
2. 类特有的方法，使用 static 定义为静态方法，不被实例继承，只能通过类来调用

### then

then 接收两个回调函数作为参数，一个是成功回调，另一个是失败回调。当Promise状态为`fulfilled` 执行成功回调，为`rejected` 执行失败回调

多次调用：

同一个 Promise 对象可以多次调用 then 方法

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  resolve('p resolve')
})
p.then((res) => {
  console.log('res1:', res) // res1: p resolve
})
p.then((res) => {
  console.log('res2:', res) // res2: p resolve
})
p.then((res) => {
  console.log('res3:', res) // res3: p resolve
})
console.log(p) // Promise {<fulfilled>: 'p resolve'}
```

返回值：

then 方法传入的回调函数本身有返回值，返回一个为成功状态的 Promise 对象

1.如果返回的是一个值或普通对象，那么这个值会被新的 Promise 对象的 resolve() 包裹。

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  resolve('p resolve')
})
p
  .then((res) => {
    console.log('res1:', res) // res1: p resolve
    return 'then1 resolve' 
    // 等价于 return new Promise(resolve => { resolve("then1 resolve") })
  })
  .then((res) => {
    console.log('res2:', res) // res2: then1 resolve
    // 没有返回值等价于 return new Promise(resolve => { resolve(undefined) })
  })
  .then((res) => {
    console.log('res3:', res) // res3: undefined
  })
```

2.如果返回新的 Promise 对象

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  resolve('p resolve')
})
p.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('newPromise resolve')
    }, 1000)
  })
}).then((res) => {
  console.log('res:', res) // 1秒后打印 res: newPromise resolve
})
```

3.如果返回含有 then 方法的对象

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  resolve('p resolve')
})
p.then((res) => {
  return {
    then: function (resolve, reject) {
      resolve('thenable resolve')
    },
  }
}).then((res) => {
  console.log('res:', res) // res: thenable resolve
})
```

### catch

then 方法的第二个参数即第二个回调函数可以捕获异常和拒绝状态，但语法不太明晰。可以使用 ES6 提供的 catch 替代，捕获异常和拒绝状态。

catch 优先捕获顶层 Promise 对象的拒绝或异常，顶层 Promise 对象为成功状态才捕获 then 中的拒绝或异常

```js:no-line-numbers
const p1 = new Promise((resolve, reject) => {
  // catch 优先捕获顶层 Promise 对象拒绝或抛出异常
  reject('p reject')
})
p1.then((res) => {
  throw new Error('p1 then error')
}).catch((err) => {
  console.log('err:', err) // err: p1 reject
})


const p2 = new Promise((resolve, reject) => {
  // 顶层 Promise 对象为成功状态才捕获 then 中的拒绝或异常
  resolve('p2 resolve')
})
p2.then((res) => {
  throw new Error('p2 then error')
}).catch((err) => {
  console.log('err:', err) // err: p2 then error
})

```

多次调用：

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  reject('rejected status') // reject 后边代码会执行
  console.log('reject 后边代码会执行')
  throw new Error('throw error') // throw 相当于 return，后边代码不执行 
  console.log('throw 后边代码不执行')
})
p.catch((err) => {
  console.log('err1:', err) // err1: rejected status
})
p.catch((err) => {
  console.log('err2:', err) // err2: rejected status
})
```

返回值：

与 then 方法一样，返回一个为成功状态的 Promise 对象

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  reject('p reject')
})

p.then((res) => {
  console.log('res:', res)
})
  // 进入 catch
  .catch((err) => {
    console.log('err:', err) // err: p reject
    return 'catch return value'
  })
  // 进入 then
  .then((res) => {
    console.log('res:', res) // res: catch return value
  })
  .catch((err) => {
    console.log('err:', err)
  })
```

### finally

finally 方法是 ES9 新增的特性：表示无论 Promise 对象的状态，都会被执行的代码。

finally 方法不接受参数，返回新的 Promise 对象

```js:no-line-numbers
const p = new Promise((resolve, reject) => {
  // resolve('p resolve')
  reject('p reject')
})

p.then((res) => {
  console.log('res:', res)
})
  .catch((err) => {
    console.log('err:', err)
  })
  .finally(() => {
    console.log('finally 代码执行')
  })
// err: p reject
// finally 代码执行
```

## Promise 类方法

## resolve

```js:no-line-numbers
const p1 = Promise.resolve('p1 resolve')
// 相当于
const p2 = new Promise((resolve, reject) => {
  resolve('p2 resolve')
})
```

### resolve 的三种参数

1.传入值或普通对象

由 pending 变为 fulfilled

```js:no-line-numbers
new Promise((resolve, reject) => {
  resolve('值或普通对象')
})
  .then((res) => {
  console.log('res:', res) // res: 值或普通对象
})
```

2.传入 Promise 对象

当前 Promise 对象的状态由传入 resolve 的 Promise 对象的状态决定，相当于状态的交接。

```js:no-line-numbers
const p1 = new Promise((resolve, reject) => {
  reject('p1 reject')
})
new Promise((resolve, reject) => {
  resolve(p1)
})
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err) // err: p1 reject
  })
```

3.传入含有 then 方法的（thenable）对象

会执行该对象的 then 方法，并由该 then 方法决定状态。（含有某个 x 方法的对象，称为 xable）

```js:no-line-numbers
new Promise((resolve, reject) => {
  const obj = {
    then: function (resolve, reject) {
      console.log('obj then called')
      reject('obj reject')
    },
  }
  resolve(obj)
})
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err) // err: obj reject
  })

```

## reject

```js:no-line-numbers
const p1 = Promise.reject('p1 reject')
// 相当于
const p2 = new Promise((resolve, reject) => {
  reject('p2 reject')
})
```

### reject 参数不受影响

```js:no-line-numbers
// 无论传入 reject 的值，都会被 catch 捕获。不会出现状态的交接，不受 thenable 对象的影响
const p = Promise.reject(
  new Promise((resolve, reject) => {
    resolve('newPromise resolve')
  })
)

p.then((res) => {
  console.log('res:', res)
}).catch((err) => {
  console.log('err:', err) // err: Promise {<fulfilled>: 'newPromise resolve'}
})
```

## all

将多个 Promise 对象包裹在一起形成一个新的 Promise 对象，其状态由包裹的所有 Promise 对象共同决定，等待所有 Promise 对象**都完成**则为成功状态、或等待**任意一个失败**则为失败状态

```js:no-line-numbers
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolve')
  }, 100)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 resolve')
    // reject('p2 reject')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolve')
  }, 300)
})

// 注意顺序
Promise.all([p2, p1, p3])
  .then((res) => {
    console.log(res) // ['p2 resolve', 'p1 resolve', 'p3 resolve']
  })
  .catch((err) => {
    // 如果任意一个 reject，则会被 catch 捕获
    // 如上 p2 reject，则会打印 err: p2 reject
    console.log('err:', err)
  })
```

## allSettled

all 的缺点：当其中一个 Promise 对象为失败状态时，则新 Promise 对象为失败状态。这样无法获得成功状态、等待状态的 Promise 对象的结果。

ES11 新增 allSettled，会在所有的 Promise 对象都有结果（settled）时，无论是成功状态，还是失败状态，新的 Promise 对象才会有最终的状态，且这个最终状态始终为**成功状态**。

```js:no-line-numbers
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolve')
  }, 100)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 reject')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolve')
  }, 300)
})

Promise.allSettled([p2, p1, p3])
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err)
  })
/**
  res: [
    { status: 'rejected', reason: 'p2 reject' },
    { status: 'fulfilled', value: 'p1 resolve' },
    { status: 'fulfilled', value: 'p3 resolve' },
  ]
*/
```

## race

多个 Promise 对象进行比赛，谁先有结果，即为最终结果

测试效果：

```js:no-line-numbers
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolve')
  }, 300)
})

// p2 先有结果
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 reject')
  }, 100)
})

MyPromise.race([p1, p2])
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err) // err: p2 reject
  })

MyPromise.race([])

```

## any

ES12 新增 any，等待第一个成功状态

```js:no-line-numbers
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolve')
  }, 200)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 reject')
  }, 100)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolve')
  }, 300)
})

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log('res:', res) // res: p1 resolve
  })
  .catch((err) => {
    console.log('err:', err.errors)
  })

```

如果所有 Promise 对象均为失败状态，则报 AggregateError 的错误。可通过 .errors 取得所有失败结果。

```js:no-line-numbers
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p1 reject')
  }, 100)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 reject')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3 reject')
  }, 300)
})

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log('res:', res) 
  })
  .catch((err) => {
    console.log('err:', err) // err: AggregateError: All promises were rejected
    console.log('err:', err.errors) // err: ['p1 reject', 'p2 reject', 'p3 reject']
  })

```

## Promise 加载图片

[在线预览](http://js.jirengu.com/moxobomemu/1/edit?js,console,output)

```js:no-line-numbers
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.src = src
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`加载地址为 ${src} 的图片失败`)
      reject(err)
    }
  })
}

const url1 =
  'https://p6-passport.byteacctimg.com/img/user-avatar/c2ff47a1390407c1a16b5e5fc3aa5e1f~300x300.image'
const url2 =
  'https://avatars.githubusercontent.com/u/39004291?s=400&u=eb0d02f850acaf334bdb14611a7d6d2e50591c57&v=4'

loadImg(url1)
  .then((img1) => {
    document.body.appendChild(img1)
    return loadImg(url2) // promise 实例
  })
  .then((img2) => {
    document.body.appendChild(img2)
    return img2 // 普通对象
  })
  .then((img2) => {
    console.log(img2.width)
  })
  .catch((err) => console.error(err))
```

## 练习

then、catch 改变 Promise 的状态

题目一：

```js:no-line-numbers
Promise.resolve().then(() => {
  console.log(1)
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3)
})
// 1 3
```

题目二：

```js:no-line-numbers
// 易错
Promise.resolve().then(() => { // 成功进入 then
  console.log(1)
  throw new Error('err') // 报错则失败
}).catch(() => {   // 失败则进入 catch
  console.log(2)  // 无报错则成功
}).then(() => {   // 成功则进入 then
  console.log(3)
})
// 1 2 3
```

题目三：

```js:no-line-numbers
Promise.resolve().then(() => { // 成功进入 then
  console.log(1)
  throw new Error('err') // 报错则失败
}).catch(() => {   // 失败则进入 catch
  console.log(2)  // 无报错则成功
}).catch(() => {
  console.log(3)
})
// 1 2
```
