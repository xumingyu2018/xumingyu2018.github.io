--- 
  title: 迭代器与生成器
---

## 迭代器

迭代器是一个符合迭代器协议的对象。**迭代器协议**规定了产生一系列值的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

迭代器协议要求实现 `next` 方法，`next` 是一个无参数或接受一个参数的函数，返回一个有 `done` 和 `value` 属性的对象：

- done：如果迭代器可以产生序列中的下一个值，则为 `false`。如果迭代器已将序列迭代完毕，则为 `true`。
- value：迭代器返回的属性值，`done` 为 `true` 时可省略。

```js:no-line-numbers
const array = [1, 2, 3]

// 创建数组迭代器的函数
function createArrayIterator(arr) {
  let index = 0
  return {
    next: function () {
      if (index < arr.length) {
        return { value: arr[index++], done: false }
      } else {
        return { value: undefined, done: true }
      }
    },
  }
}

const arrayIterator = createArrayIterator(array)
console.log(arrayIterator.next()) // { value: 1, done: false }
console.log(arrayIterator.next()) // { value: 2, done: false }
console.log(arrayIterator.next()) // { value: 3, done: false }
console.log(arrayIterator.next()) // { value: undefined, done: true }
console.log(arrayIterator.next()) // { value: undefined, done: true }
```

### 可迭代对象

可迭代对象时一个符合**可迭代协议**的对象，可迭代协议允许对象自定义它们的迭代行为。

要成为可迭代对象， 一个对象必须实现 `@@iterator` 方法。这意味着对象（或者它[原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)上的某个对象）必须有一个键为 `@@iterator` 的属性，可通过常量 [`Symbol.iterator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 访问该属性。

可迭代协议要求 `[Symbol.iterator]` 是一个无参数函数，返回一个符合迭代器协议的对象。

```js:no-line-numbers
// 自定义数组迭代器
const iterableObj = {
  array: [1, 2, 3],
  // 可计算属性
  [Symbol.iterator]: function () {
    let index = 0
    return {
      // 使用箭头函数，this 指向 iterableObj，否则 this 指向 return 的这个对象
      next: () => {
        if (index < this.array.length) {
          return { value: this.array[index++], done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
    }
  },
}

const arrayIterator = iterableObj[Symbol.iterator]()
console.log(arrayIterator.next()) // { value: 1, done: false }
console.log(arrayIterator.next()) // { value: 2, done: false }
console.log(arrayIterator.next()) // { value: 3, done: false }
console.log(arrayIterator.next()) // { value: undefined, done: true }

// 数组原生迭代器
const array = [1, 2, 3]
const NativeArrayIterator = array[Symbol.iterator]()
console.log(NativeArrayIterator.next()) // { value: 1, done: false }
console.log(NativeArrayIterator.next()) // { value: 2, done: false }
console.log(NativeArrayIterator.next()) // { value: 3, done: false }
console.log(NativeArrayIterator.next()) // { value: undefined, done: true }

for (const item of iterableObj) {
  console.log(item) // 1, 2, 3
}
```

Array、String、Set、Map、argumetns、NodeList 均是可迭代对象

应用：

- for ...of、展开运算符、yield*、解构赋值
- new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])
- Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)

### for in 与 for of

for in 遍历的是普通对象的可枚举属性（键名），for of 遍历的是可迭代对象的可迭代元素（值）：

```js:no-line-numbers
Object.prototype.objCustom = function () {}
Array.prototype.arrCustom = function () {}

let arr = ['a', 'b']
arr.foo = 'hello'

// for in 遍历键名
for (let i in arr) {
  console.log(i) // 打印：0 1 foo arrCustom objCustom
}

// for of 遍历键值，不遍历 objCustom、arrCustom 和实例属性 foo
for (let i of arr) {
  console.log(i) // 打印：a b
}
```

### 自定义类的迭代

```js:no-line-numbers
// 定义一个班级类, 创建出来的对象是可迭代对象
class Class {
  constructor(classNum, students) {
    this.classNum = classNum
    this.students = students
  }

  addStudent(newStudent) {
    this.students.push(newStudent)
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { value: this.students[index++], done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
      // 迭代器的中断
      return: () => {
        console.log('迭代器提前终止')
        return { value: undefined, done: true }
      },
    }
  }
}

const class1 = new Class('1班', ['小明', '小红', '小王'])
class1.addStudent('小刚')

for (const stu of class1) {
  console.log(stu)
  if (stu === '小王') break
}
```

## 生成器

生成器是特殊的迭代器，可以控制函数的执行与暂停。

一般地，函数终止条件是返回值或发生异常。使用生成器控制函数的执行与暂停。

通过 `function*`  定义生成器函数，执行生成器函数会返回一个生成器对象，执行生成器对象的 `next` 方法，会依次执行生成器函数里被 `yield` 分割的段代码，并返回 `{value: undefined, done: false}`，结束则 `done: true` ：

```js:no-line-numbers
function* foo() {
  // 第一段代码
  console.log('函数开始执行')
  const value1 = 1
  console.log('第一段代码：', value1)
  yield
  // 第二段代码
  const value2 = 2
  console.log('第二段代码：', value2)
  yield
  // 第三段代码
  console.log('函数执行结束')
}

// 执行生成器函数会返回一个生成器对象
const generator = foo()

// 执行第一段代码
generator.next() // 函数开始执行 第一段代码： 1
// 执行第二段代码
generator.next() // 第二段代码： 2
// 执行第三段代码
generator.next() // 函数执行结束
```

### next 方法传递参数

```js:no-line-numbers
function* foo(initial) {
  console.log('函数开始执行')
  const value1 = yield initial + 1
  const value2 = yield value1 + 2
  const value3 = yield value2 + 3
  console.log('函数执行结束')
}

// 生成器上的next方法可以传递参数
const generator = foo(0)

const result1 = generator.next()
console.log('result1: ', result1) // result1:  {value: 1, done: false}

// 上一段代码的返回值的 value 作为这一段代码的 next 函数的参数
const result2 = generator.next(result1.value)
console.log('result2: ', result2) // result2:  {value: 3, done: false}

const result3 = generator.next(result2.value)
console.log('result3: ', result3) // result3:  {value: 6, done: true}

generator.next()
```

### return 方法提前终止函数

yield：暂停函数的执行

return：终止函数的执行

```js:no-line-numbers
function* foo(initial) {
  console.log('函数开始执行')
  const value1 = yield initial + 1
  const value2 = yield value1 + 2
  const value3 = yield value2 + 3
  console.log('函数执行结束')
}

const generator = foo(0)

console.log(generator.next()) // {value: 1, done: false}
// 使用 return 方法，则终止生成器函数的执行
console.log(generator.return('终止')) // {value: '终止', done: true}
console.log(generator.next()) // {value: undefined, done: true}
console.log(generator.next()) // {value: undefined, done: true}
```

### throw 方法抛出异常

`throw`方法被捕获以后，会附带执行一次`next`方法。

```js:no-line-numbers
function* foo() {
  try {
    yield console.log('第一段')
  } catch (e) {
    console.log('捕获错误：', e)
  }
  yield console.log('第二段')
  yield console.log('第三段')
}

const generator = foo()
generator.next() // 第一段
generator.throw('错误') // 捕获错误：错误  第二段
generator.next() // 第三段
```

## 生成器替代迭代器

在迭代器那节，通过 return 一个带有 next 方法的对象创建迭代器

```js:no-line-numbers
const array = [1, 2, 3]

// 创建数组迭代器的函数
function* createArrayIterator(array) {
  // 1.第一种写法，function 不加 *
  // let index = 0
  // return {
  //   next: function () {
  //     if (index < arr.length) {
  //       return { value: arr[index++], done: false }
  //     } else {
  //       return { value: undefined, done: true }
  //     }
  //   },
  // }

  // 2.第二种写法
  // for (const item of arr) {
  //   yield item
  // }

  // 3.最简洁写法，function 需要加 *
  yield* array
}

const arrayIterator = createArrayIterator(array)
console.log(arrayIterator.next()) // { value: 1, done: false }
console.log(arrayIterator.next()) // { value: 2, done: false }
console.log(arrayIterator.next()) // { value: 3, done: false }
console.log(arrayIterator.next()) // { value: undefined, done: true }
console.log(arrayIterator.next()) // { value: undefined, done: true }
```

迭代指定范围的函数：

```js:no-line-numbers
// 创建一个迭代指定范围的函数
function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }
}

const rangeIterator = createRangeIterator(1, 10)
console.log(rangeIterator.next()) // { value: 1, done: false }
console.log(rangeIterator.next()) // { value: 2, done: false }
console.log(rangeIterator.next()) // { value: 3, done: false }
console.log(rangeIterator.next()) // { value: 4, done: false }
console.log(rangeIterator.next()) // { value: 5, done: false }
```

自定义类的迭代——生成器实现：

```js:no-line-numbers
// 定义一个班级类, 创建出来的对象是可迭代对象
class Class {
  constructor(classNum, students) {
    this.classNum = classNum
    this.students = students
  }

  addStudent(newStudent) {
    this.students.push(newStudent)
  }

  // [Symbol.iterator]() {
  //   let index = 0
  //   return {
  //     next: () => {
  //       if (index < this.students.length) {
  //         return { value: this.students[index++], done: false }
  //       } else {
  //         return { value: undefined, done: true }
  //       }
  //     },
  //     return: () => {
  //       console.log('迭代器提前终止')
  //       return { value: undefined, done: true }
  //     },
  //   }
  // }
  
  *[Symbol.iterator]() {
    yield* this.students
  }
}

const class1 = new Class('1班', ['小明', '小红', '小王'])
class1.addStudent('小刚')

for (const stu of class1) {
  console.log(stu)
}
```

## async、await 的由来

async、await 是 Promise 和生成器的语法糖

```js:no-line-numbers
function requestData(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}
// 上一个请求接口返回的数据作为下一个请求的参数
// 1. 多次回调，依然会出现回调地狱的问题
requestData(1).then((res1) => {
  console.log('res1:', res1) // 1秒后输出 res1: 2

  requestData(res1).then((res2) => {
    console.log('res2:', res2) // 2秒后输出 res2: 4

    requestData(res2).then((res3) => {
      console.log('res3:', res3) // 3秒后输出 res3: 8
    })
  })
})

// 2. Promise 中 then 返回以上一次请求结果为参数的新请求
requestData(1)
  .then((res1) => {
    console.log('res1:', res1) // 1秒后输出 res1: 2
    return requestData(res1)
  })
  .then((res2) => {
    console.log('res2:', res2) // 2秒后输出 res2: 4
    return requestData(res2)
  })
  .then((res3) => {
    console.log('res3:', res3) // 3秒后输出 res3: 8
  })

// 3. Promise + 生成器
function* getDataByGenerator() {
  const res1 = yield requestData(1)
  console.log('res1:', res1) // 1秒后输出 res1: 2
  const res2 = yield requestData(res1)
  console.log('res2:', res2) // 2秒后输出 res2: 4
  const res3 = yield requestData(res2)
  console.log('res3:', res3) // 3秒后输出 res3: 8
}
// 3.1 手动执行生成器
const generator = getDataByGenerator()
generator.next().value.then((res1) => {
  generator.next(res1).value.then((res2) => {
    generator.next(res2).value.then((res3) => {
      generator.next(res3)
    })
  })
})
// 3.2 封装一个自动执行的生成器
function execGenerator(genFn) {
  const generator = genFn()
  function exec(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }
    result.value.then((res) => {
      exec(res)
    })
  }
  exec()
}
execGenerator(getDataByGenerator)
// 3.3 引入第三方包：co（TJ 写的）
const co = require('co')
co(getDataByGenerator)

// 4. 最优方式：async、await
async function getDataByAsync() {
  const res1 = await requestData(1)
  console.log('res1:', res1) // 1秒后输出 res1: 2
  const res2 = await requestData(res1)
  console.log('res2:', res2) // 2秒后输出 res2: 4
  const res3 = await requestData(res2)
  console.log('res3:', res3) // 3秒后输出 res3: 8
}

getDataByAsync()
```
