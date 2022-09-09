--- 
  title: 实现 Promise 
---

## A+ Promise 最终实现

```js:no-line-numbers
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 等待状态时保存成功回调和失败回调数组
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      // 判断是否处于等待状态，是则改变状态（注意 queueMicrotask 包裹 if，否则状态不能锁定）
      queueMicrotask(() => {
        if (this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.FULFILLED
          this.PromiseResult = result
          // 遍历成功回调数组，执行回调
          this.onFulfilledCallbacks.forEach((callback) => {
            callback(result)
          })
        }
      })
    }
    const reject = (reason) => {
      // 判断是否处于等待状态，是则改变状态（注意 queueMicrotask 包裹 if，否则状态不能锁定）
      queueMicrotask(() => {
        if (this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.REJECTED
          this.PromiseResult = reason
          // 遍历失败回调数组，执行回调
          this.onRejectedCallbacks.forEach((callback) => {
            callback(reason)
          })
        }
      })
    }
    // 抛出异常相当于执行 reject
    try {
      // 传入 executor 函数后立即执行（注意这里不用加 this.）
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  // 实现 then 方法
  then(onFulfilled, onRejected) {
    // 参数校验：对于成功回调是函数则执行，不是则接收传入值作为输出值，对于失败回调是函数则执行，不是则抛出传入值作为错误
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    // 创建一个新的 Promise 对象，最后返回
    let promise2 = new MyPromise((resolve, reject) => {
      // 成功状态、失败状态分别执行 then 的第一个、第二个回调
      if (this.PromiseState === MyPromise.FULFILLED) {
        queueMicrotask(() => {
          try {
            let x = onFulfilled(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.PromiseState === MyPromise.REJECTED) {
        queueMicrotask(() => {
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.PromiseState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
    })
    return promise2
  }
}
/**
 * 对resolve()、reject() 进行增强
 * @param  {promise} promise2 promise1.then 方法返回的新的 Promise 对象
 * @param  {[type]} x         promise1 的结果值
 * @param  {[type]} resolve   promise2 的 resolve 方法
 * @param  {[type]} reject    promise2 的 reject 方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 情况1：自身引用
  if (x === promise2) {
    reject(new TypeError('循环引用'))
  }
  // 情况2：MyPromise 对象
  if (x instanceof MyPromise) {
    x.then(
      (y) => {
        resolvePromise(promise2, y, resolve, reject)
      },
      (r) => reject(r)
    )
  }
  // 情况3：对象或函数（需排除 typeof null === 'object' 干扰）
  else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false
    try {
      // 如果 then 是函数，则 x 是 thenable 对象
      // 如果 then 不是函数，则 x 是非 thenable 对象 或 函数
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            // 方法不能重复调用
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x) // 非 thenable 对象 或 函数，则直接 resolve
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x) // 不是对象或函数，即值类型，则直接 resolve
  }
}
```

## A+ Promise 实现过程

### resolve 与 reject

#### 1. 初步实现

三种状态、this 指向、传入立即执行

```js
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      this.PromiseState = MyPromise.FULFILLED
      this.PromiseResult = result
    }
    const reject = (reason) => {
      this.PromiseState = MyPromise.REJECTED
      this.PromiseResult = reason
    }
    // 传入 executor 函数后立即执行（注意这里不用加 this.）
    executor(resolve, reject)
  }
}

// 测试代码
const p1 = new MyPromise((resolve, reject) => {
  resolve('成功')
})
console.log(p1)
// MyPromise {PromiseState: 'fulfilled', PromiseResult: '成功'}
const p2 = new MyPromise((resolve, reject) => {
  reject('失败')
})
console.log(p2)
// MyPromise {PromiseState: 'rejected', PromiseResult: '失败'}
```

#### 2. 状态不可变

Promise 状态只以首先 `resolve` 或 `reject` 的为准，后续状态不可变

```js{11,12,15,18,19,22}
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      // 判断是否处于等待状态，是则改变状态
      if (this.PromiseState === MyPromise.PENDING) {
        this.PromiseState = MyPromise.FULFILLED
        this.PromiseResult = result
      }
    }
    const reject = (reason) => {
      // 判断是否处于等待状态，是则改变状态
      if (this.PromiseState === MyPromise.PENDING) {
        this.PromiseState = MyPromise.REJECTED
        this.PromiseResult = reason
      }
    }
    // 传入 executor 函数后立即执行（注意这里不用加 this.）
    executor(resolve, reject)
  }
}

// 测试代码
const p = new MyPromise((resolve, reject) => {
  resolve('成功')
  // 后续状态不可变
  reject('失败')
})
console.log(p)
// MyPromise {PromiseState: 'fulfilled', PromiseResult: '成功'}
```

#### 3. 抛出异常

Promise 中抛出异常相当于执行 `reject`

```js{24,25,28,29,30}
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      // 判断是否处于等待状态，是则改变状态
      if (this.PromiseState === MyPromise.PENDING) {
        this.PromiseState = MyPromise.FULFILLED
        this.PromiseResult = result
      }
    }
    const reject = (reason) => {
      // 判断是否处于等待状态，是则改变状态
      if (this.PromiseState === MyPromise.PENDING) {
        this.PromiseState = MyPromise.REJECTED
        this.PromiseResult = reason
      }
    }
    // 抛出异常相当于执行 reject
    try {
      // 传入 executor 函数后立即执行（注意这里不用加 this.）
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
}

// 测试代码
const p = new MyPromise((resolve, reject) => {
  throw new Error('失败')
})
console.log(p)
// MyPromise {PromiseState: 'rejected', PromiseResult: Error: 失败}
```

### then 方法

#### 1. 初步实现

then 接收两个回调函数作为参数，一个是成功回调，另一个是失败回调。当Promise状态为`fulfilled` 执行成功回调，为`rejected` 执行失败回调

```js
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      // 判断是否处于等待状态，是则改变状态
      if (this.PromiseState === MyPromise.PENDING) {
        this.PromiseState = MyPromise.FULFILLED
        this.PromiseResult = result
      }
    }
    const reject = (reason) => {
      // 判断是否处于等待状态，是则改变状态
      if (this.PromiseState === MyPromise.PENDING) {
        this.PromiseState = MyPromise.REJECTED
        this.PromiseResult = reason
      }
    }
    // 抛出异常相当于执行 reject
    try {
      // 传入 executor 函数后立即执行（注意这里不用加 this.）
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  // 实现 then 方法
  then(onFulfilled, onRejected) {
    // 参数校验：对于成功回调是函数则执行，不是则接收传入值作为输出值，对于失败回调是函数则执行，不是则抛出传入值作为错误
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    // 成功状态、失败状态分别执行 then 的第一个、第二个回调
    if (this.PromiseState === MyPromise.FULFILLED) {
      onFulfilled(this.PromiseResult)
    }
    if (this.PromiseState === MyPromise.REJECTED) {
      onRejected(this.PromiseResult)
    }
  }
}

// 测试代码
new MyPromise((resolve, reject) => {
  resolve('成功')
}).then(
  (res) => console.log(res),
  (err) => console.log(err)
)
// 成功
```

#### 2. then 是异步（微任务）

异步任务分为微任务与宏任务

```js
// 原生 Promise 的 then 方法是异步执行的
console.log(1)
new Promise((resolve, reject) => {
  console.log(2)
  resolve('成功')
}).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
)
console.log(3)
// 1 2 3 成功

// 但是目前的 MyPromise 的 then 方法是同步执行的
console.log(1)
new MyPromise((resolve, reject) => {
  console.log(2)
  resolve('成功')
  reject('失败')
}).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
)
console.log(3)
// 1 2 成功 3
```

使用 `queueMicrotask` 包裹成功回调和失败回调

```js{16,18,21,23}
class MyPromise {
  // ...
  
  // 实现 then 方法
  then(onFulfilled, onRejected) {
    // 参数校验：对于成功回调是函数则执行，不是则接收传入值作为输出值，对于失败回调是函数则执行，不是则抛出传入值作为错误
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    // 成功状态、失败状态分别执行 then 的第一个、第二个回调
    if (this.PromiseState === MyPromise.FULFILLED) {
      queueMicrotask(() => {
        onFulfilled(this.PromiseResult)
      })
    }
    if (this.PromiseState === MyPromise.REJECTED) {
      queueMicrotask(() => {
        onRejected(this.PromiseResult)
      })
    }
  }
}
```

#### 3. 定时器

因为 JS 执行机制是先微后宏，`then` 先于 `setTimeout`，在定时器到时之前状态仍为等待状态，所以遇到等待状态时，将成功和失败回调保存到数组里，等定时器到时之后再遍历执行数组里的函数。

另外 `resolve`、`reject` 也是微任务，如果定时器内有 `resolve`、`reject` 和 同步代码，同步代码先执行：

```js
// 原生 Promise：定时器内有 resolve、reject 和 同步代码
console.log(1)
new Promise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    resolve('成功')
    console.log('4')
  }, 1000)
}).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
)
console.log(3)
// 1 2 3 
// 1秒后打印： 4 成功
```

使用 `queueMicrotask` 包裹 `resolve`、`reject`，并在等待状态时保存回调

```js{9-11,14,15,19-22,24,27,28,32-35,37,59,61,64,66,68-71}
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 等待状态时保存成功回调和失败回调数组
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      // 判断是否处于等待状态，是则改变状态（注意 queueMicrotask 包裹 if，否则状态不能锁定）
      queueMicrotask(() => {
        if (this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.FULFILLED
          this.PromiseResult = result
          // 遍历成功回调数组，执行回调
          this.onFulfilledCallbacks.forEach((callback) => {
            callback(result)
          })
        }
      })
    }
    const reject = (reason) => {
      // 判断是否处于等待状态，是则改变状态（注意 queueMicrotask 包裹 if，否则状态不能锁定）
      queueMicrotask(() => {
        if (this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.REJECTED
          this.PromiseResult = reason
          // 遍历失败回调数组，执行回调
          this.onRejectedCallbacks.forEach((callback) => {
            callback(reason)
          })
        }
      })
    }
    // 抛出异常相当于执行 reject
    try {
      // 传入 executor 函数后立即执行（注意这里不用加 this.）
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  // 实现 then 方法
  then(onFulfilled, onRejected) {
    // 参数校验：对于成功回调是函数则执行，不是则接收传入值作为输出值，对于失败回调是函数则执行，不是则抛出传入值作为错误
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    // 成功状态、失败状态分别执行 then 的第一个、第二个回调
    if (this.PromiseState === MyPromise.FULFILLED) {
      queueMicrotask(() => {
        onFulfilled(this.PromiseResult)
      })
    }
    if (this.PromiseState === MyPromise.REJECTED) {
      queueMicrotask(() => {
        onRejected(this.PromiseResult)
      })
    }
    if (this.PromiseState === MyPromise.PENDING) {
      this.onFulfilledCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
  }
}

// 测试代码
console.log(1)
new MyPromise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    resolve('成功')
    reject('失败')
    console.log('4')
  }, 1000)
}).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
)
console.log(3)
// 1 2 3
// 1秒后打印： 4 成功
```

#### 4. 链式调用

`then` 返回新的 Promise 对象。通过函数 resolvePromise 增强 `resolve`、`reject`

A+ Promise 完整代码如下：

```js
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.PromiseState = MyPromise.PENDING
    this.PromiseResult = undefined
    // 等待状态时保存成功回调和失败回调数组
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    // 在 constructor 中使用箭头函数，不会出现 this 指向错误问题
    const resolve = (result) => {
      // 判断是否处于等待状态，是则改变状态（注意 queueMicrotask 包裹 if，否则状态不能锁定）
      queueMicrotask(() => {
        if (this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.FULFILLED
          this.PromiseResult = result
          // 遍历成功回调数组，执行回调
          this.onFulfilledCallbacks.forEach((callback) => {
            callback(result)
          })
        }
      })
    }
    const reject = (reason) => {
      // 判断是否处于等待状态，是则改变状态（注意 queueMicrotask 包裹 if，否则状态不能锁定）
      queueMicrotask(() => {
        if (this.PromiseState === MyPromise.PENDING) {
          this.PromiseState = MyPromise.REJECTED
          this.PromiseResult = reason
          // 遍历失败回调数组，执行回调
          this.onRejectedCallbacks.forEach((callback) => {
            callback(reason)
          })
        }
      })
    }
    // 抛出异常相当于执行 reject
    try {
      // 传入 executor 函数后立即执行（注意这里不用加 this.）
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  // 实现 then 方法
  then(onFulfilled, onRejected) {
    // 参数校验：对于成功回调是函数则执行，不是则接收传入值作为输出值，对于失败回调是函数则执行，不是则抛出传入值作为错误
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    // 创建一个新的 Promise 对象，最后返回
    let promise2 = new MyPromise((resolve, reject) => {
      // 成功状态、失败状态分别执行 then 的第一个、第二个回调
      if (this.PromiseState === MyPromise.FULFILLED) {
        queueMicrotask(() => {
          try {
            let x = onFulfilled(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.PromiseState === MyPromise.REJECTED) {
        queueMicrotask(() => {
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.PromiseState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
    })
    return promise2
  }
}
/**
 * 对resolve()、reject() 进行增强
 * @param  {promise} promise2 promise1.then 方法返回的新的 Promise 对象
 * @param  {[type]} x         promise1 的结果值
 * @param  {[type]} resolve   promise2 的 resolve 方法
 * @param  {[type]} reject    promise2 的 reject 方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 情况1：自身引用
  if (x === promise2) {
    reject(new TypeError('循环引用'))
  }
  // 情况2：MyPromise 对象
  if (x instanceof MyPromise) {
    x.then(
      (y) => {
        resolvePromise(promise2, y, resolve, reject)
      },
      (r) => reject(r)
    )
  }
  // 情况3：对象或函数（需排除 typeof null === 'object' 干扰）
  else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false
    try {
      // 如果 then 是函数，则 x 是 thenable 对象
      // 如果 then 不是函数，则 x 是非 thenable 对象 或 函数
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            // 方法不能重复调用
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x) // 非 thenable 对象 或 函数，则直接 resolve
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x) // 不是对象或函数，即值类型，则直接 resolve
  }
}
```

## Promise A+ 测试

安装 Promises A+ 官方测试工具 `promises-aplus-tests`：

```bash
npm install promises-aplus-tests -D
```

在 `MyPromise.js` 下实现 `deferred` 方法，并导出

```js
MyPromise.deferred = function () {
  let result = {}
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

module.exports = MyPromise
```

在 `package.json` 文件中 `devDependencies` 下添加 `scripts` ：

```js
{
  "devDependencies": {
    "promises-aplus-tests": "^2.1.2"
  },
  "scripts": {
    "test": "promises-aplus-tests MyPromise"
  }
}
```

最后运行 `npm run test` 所有872 测试用例均通过

## Promise.prototype.catch

`Promise.prototype.catch()`是 `.then(undefined, rejection)`的别名用于指定发生错误时的回调函数。`catch` 返回新的 Promise 对象

```js
class MyPromise {
  
  // ...

  // 实现 then 方法
  then(onFulfilled, onRejected) {
    // ...
  }
  // 实现 catch 方法
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
}
```

测试效果：

```js
new MyPromise(function (resolve, reject) {
  resolve('成功')
})
  .then((res) => {
    console.log(res)
    throw 'then 抛出异常'
  })
  .catch((err) => {
    console.log(err)
  })
  .then(
    () => {
      console.log('执行成功回调')
    },
    () => {
      console.log('不会执行失败回调')
    }
  )
// 成功
// then 抛出异常
// 执行成功回调
```

## Promise.prototype.finally

`finally` 方法不是表示最终都会执行，而是任何时候任何状态都会执行。

网上常见的 `finally` 是下面这样的，但是错误的

```js
finally(callback) {
  return this.then(callback, callback)
}
```

如果 `finally` 接收的是 Promise 对象，会等待这个 Promise 执行完毕。如果返回的是成功的 Promise，会采用上一次的结果；如果返回的是失败的 Promise，会被 `catch` 捕获。

```js
// 原生 Promise
new Promise(function (resolve, reject) {
  resolve('成功')
})
  .finally(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('新的 Promise 成功') // 成功，则使用上一次的结果
        // reject('新的 Promise 失败') // 失败，则会被 catch 捕获
      }, 1000)
    })
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => console.log('结束'))
// 成功
// 结束
```

实现：

```js
class MyPromise {
  // ...

  // 实现 finally 方法
  finally(callback) {
    return this.then(
      (value) => {
        return Promise.resolve(callback()).then(() => value)
      },
      (reason) => {
        return Promise.resolve(callback()).then(() => {
          throw reason
        })
      }
    )
  }
}
```

## Promise.resolve

```js
class MyPromise {
  // ...

  // 实现 resolve 类方法
  static resolve(value) {
    // MyPromise 对象
    if (value instanceof MyPromise) {
      return value
    }
    // thenable 对象
    if (value instanceof Object && 'then' in value) {
      return new MyPromise((resolve, reject) => {
        value.then(resolve, reject)
      })
    }
    // 普通值或普通对象
    return new MyPromise((resolve) => {
      resolve(value)
    })
  }
}
```

测试效果：

```js
let thenable = {
  then: function (resolve) {
    console.log('then 中同步代码')
    resolve('then 成功')
  },
}

MyPromise.resolve(thenable).then(
  (res) => console.log(res),
  (err) => console.log(err)
)
// then 中同步代码
// then 成功
```

## Promise.reject

```js
class MyPromise {
  // ...

  // 实现 reject 类方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }
}
```

测试效果：

```js
MyPromise.reject(new Error('报错')).catch((err) => {
  console.log(err)
})
// Error: 报错
```

## Promise.all

将多个 Promise 对象包裹在一起形成一个新的 Promise 对象，其状态由包裹的所有 Promise 对象共同决定，等待所有 Promise 对象**都完成**则为成功状态、或等待**任意一个失败**则为失败状态

```js
class MyPromise {
  // ...

  // 实现 all 类方法
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let results = []
        let count = 0
        // 如果传入的是空数组，则返回成功状态的 Promise
        if (promises.length === 0) {
          return resolve(promises)
        }
        promises.forEach((item, index) => {
          MyPromise.resolve(item).then((result) => {
            // 如果不使用 count，会出现数组提前输出，异步元素为空白的情况
            count++
            results[index] = result
            if (count === promises.length) {
              resolve(results)
            }
          }, reject)
        })
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
```

测试效果：

```js
const p1 = MyPromise.resolve(1)
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // reject('任意一个失败，都会被catch捕获，拿不到所有结果')
    resolve(2)
  }, 1000)
})
const p3 = 3

MyPromise.all([p1, p2, p3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// [1, 2, 3]
MyPromise.all(1)
// TypeError: argument is not iterable

const p4 = MyPromise.all([])
console.log(p4)
```

如果不使用计数器，会出现异步元素为空白的情况：

```js
static all(promises) {
  return new HYPromise((resolve, reject) => {
    const values = []
    promises.forEach(promise => {
      promise.then(result => {
        values.push(result)
        if (values.length === promises.length) {
          resolve(values)
        }
      }, err => {
        reject(err)
      })
    })
  })
}
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220618173421.png)

## Promise.allSettled

allSettled 包裹多个 Promise 对象，等待所有 Promise 完成（无论是成功状态，还是失败状态），新的 Promise 对象才会有最终的状态，且这个最终状态始终为**成功状态**。

```js
class MyPromise {
  // ...

  // 实现 allSettled 类方法
  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        let results = []
        let count = 0

        // 如果传入的是空数组，则返回成功状态的 Promise
        if (promises.length === 0) return resolve(promises)

        promises.forEach((item, index) => {
          MyPromise.resolve(item).then(
            (value) => {
              count++
              results[index] = {
                status: 'fulfilled',
                value,
              }
              count === promises.length && resolve(results)
            },
            (reason) => {
              count++
              results[index] = {
                status: 'rejected',
                reason,
              }
              count === promises.length && resolve(results)
            }
          )
        })
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
```

测试效果：

```js
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolve')
  }, 100)
})

const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 reject')
  }, 200)
})

const p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolve')
  }, 300)
})

MyPromise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log('res:', res)
  })
/**
  res: [
    { status: 'fulfilled', value: 'p1 resolve' },
    { status: 'rejected', reason: 'p2 reject' },
    { status: 'fulfilled', value: 'p3 resolve' },
  ]
*/
```

## Promise.race

```js
class MyPromise {
  // ...

  // 实现 race 类方法
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        // 如果传入的是空数组，则返回的 Promise 将永远处于等待状态
        // 如果传入的不为空数组，则返回首先有结果的 Promise
        if (promises.length > 0) {
          promises.forEach((item) => {
            MyPromise.resolve(item).then(resolve, reject)
          })
        }
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
```

测试效果：

```js
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

## Promise.any

等待第一个成功状态的 Promise，保存失败状态 Promise 到 errors 数组

```js
class MyPromise {
  // ...

  // 实现 any 类方法
  static any(promises) {
    return new MyPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        let errors = []
        let count = 0

        // 如果传入的是空数组，则返回一个失败状态的 Promise
        if (promises.length === 0)
          return reject(new AggregateError([], 'All promises were rejected'))

        promises.forEach((item) => {
          MyPromise.resolve(item).then(
            (value) => {
              // 只要任意一个 Promise 成功，就返回
              resolve(value)
            },
            (reason) => {
              count++
              errors.push(reason)
              count === promises.length &&
                reject(new AggregateError(errors, 'All promises were rejected'))
            }
          )
        })
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
```

测试效果：

```js
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolve')
  }, 2000)
})

// p2 先有结果，但是失败结果
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 reject')
  }, 1000)
})

const p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p3 reject')
  }, 3000)
})

MyPromise.any([p1, p2]).then((res) => {
  console.log('res:', res) // res: p1 resolve
})

MyPromise.any([p2, p3]).catch((err) => {
  console.log('err:', err) // err: AggregateError: All promises were rejected
  console.log('err:', err.errors) // err: ['p2 reject', 'p3 reject']
})
```

完整代码存放于 [Github仓库](https://github.com/Nevermore98/MyPromise)

## 参考资料

- [看了就会，手写Promise原理，最通俗易懂的版本！！！](https://juejin.cn/post/6994594642280857630)
- [手把手一行一行代码教你“手写Promise“，完美通过 Promises/A+ 官方872个测试用例](https://juejin.cn/post/7043758954496655397)
- [面试官：“你能手写一个 Promise 吗”](https://juejin.cn/post/6850037281206566919)
- [手写Promise核心代码 - JavaScript前端Web工程师](https://www.bilibili.com/video/BV1RR4y1p7my/?spm_id_from=333.788&vd_source=52ead4154487921c1aa0ebd68f12bebf)
- [手写一个Promise/A+,完美通过官方872个测试用例](https://segmentfault.com/a/1190000023157856)
- [看了就会，手写 Promise 全部 API 教程，包括处于 TC39 第四阶段草案的 Promise.any()](https://juejin.cn/post/7044088065874198536)
