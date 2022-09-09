---
  title: 事件循环
---

## 浏览器事件循环

JS 是单线程的、非阻塞的。通过事件循环解决了单线程会阻塞的问题。**JS 实现异步的核心就是事件循环**。（进程是线程的容器。比喻：操作系统是工厂，进程是车间，线程是工人）

早期的 JS 作为浏览器脚本语言，为了防止 DOM 渲染冲突的问题、简化编程，被设计为单线程语言。

如今，为了充分发挥 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JS 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM，所以 Web Worker 本质上仍是通过单线程模拟多线程。

总结：优点是简化编程，缺点是无法发挥 CPU 的全部性能（可以使用 HTML5 新标准 Web Worker实现多线程）

### 微任务与宏任务分类

浏览器、Node 环境下的微任务与宏任务分类：

微任务（microTask）：promise then、async/await、MutationObserver（H5 新特性）、queueMicrotask、process.nextTick

宏任务（macroTask）：main script(主线程代码)、setTimeout、setInterval、setImmediate、requestAnimationFrame、I/O 事件、DOM 监听事件、AJAX 请求、UI 页面渲染

### 执行顺序

1. main script主线程代码首先执行
2. 执行微任务
3. DOM 渲染（若有则渲染，无则跳过）（微任务会阻塞页面的渲染，宏任务不会）
4. 执行宏任务：在此之前，先查看微任务队列是否为空，不为空则继续执行微任务（**先微后宏**）即：若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮微任务队列。

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220705015157.png)

### 例题一

```js:no-line-numbers
setTimeout(() => { // 宏1
  console.log('3')
  Promise.resolve().then(() => {
    console.log('4') // 产生了新的微任务，放入第二轮微任务
  })
})
console.log('1')
Promise.resolve().then(() => { // 第一轮 微任务
  console.log('2') // 先微后宏
  setTimeout(() => {
    console.log('5') // 宏2，在执行宏任务前，先查看微任务队列是否为空，不为空则继续执行微任务
  })
})
```

### 例题二

```js:no-line-numbers
async function async1() {
  console.log('async1 start') // 2
  await async2() // 同步执行 async2
  console.log('async1 end') // await 的下边代码进入微任务队列 （微1） 6
}

async function async2() {
  console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(function () { //（宏1） 8
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  // 初始化 Promise，传入的函数同步执行
  console.log('promise1') // 4
  resolve()
}).then(function () { // （微2） 7 （微任务执行完毕，接着执行宏任务）
  console.log('promise2')
})

console.log('script end') // 5 （同步代码执行完毕，接着执行微任务）
```

await 与 Promise 的等价替换：

```js:no-line-numbers
async function async1() {
  console.log('1')
  await async2()
  console.log('3')
}
async function async2() {
  console.log('2')
}
// 等价于
function async1() {
  console.log('1')
  Promise.resolve(async2()).then(() => {
    // 执行 async2 的返回值放入 resolve 里
    console.log('3')
  })
}
// 紧跟着 await 后面的语句相当于放在了 new Promise 中
// 下一行及之后的语句相当于放在于 Promise.then 中
```

### 例题三

```js:no-line-numbers
// 整个 setTimeout 的回调函数放入宏任务队列（宏1），微任务结束再执行
setTimeout(() => {
  console.log('setTimeout1') // 7
  new Promise((resolve) => {
    resolve()
  }).then(() => {
    // 宏1 引入了新的微任务，放入第二轮的微任务队列中，先把微任务队列执行完后，再执行宏2
    new Promise(function (resolve) {
      resolve()
    }).then(() => {
      // 放入第三轮微任务队列中
      console.log('then4') // 9
    })
    console.log('then3') // 8 同步执行
  })
})

new Promise((resolve) => {
  console.log('promise1') // 1
  resolve()
}).then(() => {
  console.log('then1') // （微1）4
})

setTimeout(() => {
  console.log('setTimeout2') // 10
}) // （宏2）

console.log(2) // 2

queueMicrotask(() => {
  console.log('queueMicrotask') // （微2）5
})

new Promise((resolve) => {
  console.log('promise2') // 3
  resolve()
}).then(() => {
  console.log('then2') // （微3）6 （第一轮微任务执行完毕，执行宏1）
})

// promise1
// 2
// promise2
// then1
// queueMicrotask
// then2
// setTimeout1
// then3
// then4
// setTimeout2
```

图解：

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/事件循环例题.png)

## Node 事件循环

Nodejs 事件循环机制分为 6 个阶段：

1. timers（定时器阶段）：执行 `setTimeout`、`setInterval` 的回调
2. pending callbacks（待定回调阶段）：执行延迟到下一个循环迭代的 I/O 回调（执行系统操作的回调）
3. idle, prepare（闲置阶段）：仅 Node 内部使用
4. poll（轮询阶段）：检索新的 I/O 事件
5. check（检查阶段）：执行 `setImmediate` 的回调
6. close callbacks（关闭事件回调阶段）：执行关闭事件的回调，如 `socket.on('close', ...)`

重点阶段为：

1. timers：执行 `setTimeout`、`setInterval` 的回调
2. poll：处理轮询队列的事件，当有已超时的 timer，执行它的回调函数（若没有异步任务，则停留在此阶段）
3. check：立即执行 `setImmediate` 的回调

### 执行顺序

微任务队列：

- next tick microtask queue：`process.nextTick`
- other microtask queue：`Promise then 回调`、`queueMicrotask`

宏任务队列：

- timer queue：`setTimeout`、`setInterval`
- poll queue：I/O 事件
- check queue：`setImmediate`
- close queue：close 事件

在每一次事件循环的tick中，代码执行顺序：

1. next tick microtask queue
2. other microtask queue
3. timer queue
4. poll queue
5. check queue
6. close queue

### 例题

```js:no-line-numbers
async function async1() {
  console.log('2')
  await async2()
  console.log('9')
}

async function async2() {
  console.log('3')
}

console.log('1')

setTimeout(() => {
  console.log('11')
}, 0)

setTimeout(() => {
  console.log('13')
}, 500)

setImmediate(() => console.log('12'))

process.nextTick(() => console.log('7'))

async1()

process.nextTick(() => console.log('8'))

new Promise((resolve) => {
  console.log('4')
  resolve()
  console.log('5')
}).then(() => {
  console.log('10')
})

console.log('6')
```

图解：

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/node事件循环例题.png)
