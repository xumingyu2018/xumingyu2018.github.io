---
title: 原型与原型链
---

原型（prototype）是存放**共有属性、方法**的**对象** （prototype 是对象）

```js:no-line-numbers
[] instanceof Array // true
[] instanceof Object // true
{} instanceof Object // true

// class 类声明
class People{}
class Student extends People{}
const stu1 = new Student()
stu1 instanceof Student // true
stu1 instanceof People  // true
stu1 instanceof Object  // true

// class 类 实际上是函数，可见是语法糖
typeof People  // 'function'
typeof Student // 'function'
```

## 原型的六个规则

隐式原型 `[[Prototype]]` 是 ECMA 标准，`__proto__` 是浏览器对标准的实现。

可以简单地认为显式原型是用来存放共有属性、方法，constructor、**proto** 的地方。

定义 `__proto__` 为隐式原型，`prototype` 为显式原型，有以下规则：

1. 对象（包括数组、函数）的隐式原型 === 其构造函数的显式原型
2. 函数（普通、箭头、构造函数）的隐式原型 === `Function` 的显式原型
3. 普通函数、构造函数都有显式原型，箭头函数没有显式原型
4. 构造函数 === 构造函数的显式原型的 `constructor`，两者循环引用
5. 对象的显式原型是原型链的根，在所有对象（包括数组、函数）的原型链上。除了使用 Object.create(null) 以 null 为原型创建的新对象
6. 对象的显式原型是原型链的最顶层，不指向更上一层，所以为 null

代码示例：

```js:no-line-numbers
const arr = [] // 等价于 new Array([])
const obj = {} // 等价于 new Object({})
const fn = function(){} // 等价于 new Function('')
const arrow = () => {} 
class Person{} // Person 构造函数

// 1.对象（包括数组、函数）的隐式原型 === 其构造函数的显式原型
arr.__proto__ === Array.prototype
obj.__proto__ === Object.prototype
fn.__proto__ === Function.prototype
arrow.__proto__ === Function.prototype
Person.__proto__ === Function.prototype

// 2.函数（普通、箭头、构造函数）的隐式原型 === Function 的显式原型
fn.__proto__ === Function.prototype
arrow.__proto__ === Function.prototype
Person.__proto__ === Function.prototype
Array.__proto__ === Function.prototype
Object.__proto__ === Function.prototype
Function.__proto__ === Function.prototype

// 3.普通函数、构造函数都有显式原型，箭头函数没有显式原型
fn.prototype.__proto__ === Object.prototype
Person.prototype.__proto__ === Object.prototype
Function.prototype.__proto__ === Object.prototype
arrow.prototype === undefined

// 4.构造函数 === 构造函数的显式原型的 constructor，两者循环引用
Person === Person.prototype.constructor
Array === Array.prototype.constructor
Function === Function.prototype.constructor
Object === Object.prototype.constructor

// 5.对象的显式原型是原型链的根，在所有对象（包括数组、函数）的原型链上
// 除了使用 Object.create(null) 以 null 为原型创建的新对象！
arr instanceof Object // true
obj instanceof Object // true
fn instanceof Object  // true
let parent = {}
let child = Object.create(parent)
child instanceof Object // true
Object.create(null) instanceof Object // false

// 6.对象的显式原型是原型链的最顶层，不指向更上一层，所以为空。
Object.prototype.__proto__ === null
```

## class 继承图解

```js:no-line-numbers
// 父类
class Person {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} is eating`)
  }
}
// 子类
class Student extends Person {
  constructor(name, id) {
    super(name)
    this.id = id
  }
  sayHi() {
    console.log(`I'm ${this.name}, ID is ${this.id}`)
  }
}
let stu1 = new Student('Tom', '001')
stu1.sayHi()

console.log(stu1) // Student {name: "Tom", id: "001"}
console.log(Student.prototype) // Person {constructor: ƒ, sayHi: ƒ}
console.log(Person.prototype) // {constructor: ƒ, eat: ƒ}
```

![原型链图解](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/原型链（第2版）.png)

## 属性和方法的执行规则

获取实例的属性或方法时，先在实例自身找，找不到再去隐式原型所指向的地址找，找不到再往上找，直到找到 或 直至 `Object.prototype` 也找不到就报错。

- ES5 通过原型链实现继承，不支持私有属性
- ES6 通过 class 实现继承，使用 `#` 指定私有属性

## 设置原型

```js:no-line-numbers
// ES5：new 构造函数()
function Parent() {}
let child1 = new Parent()
console.log(child1.__proto__ === Parent.prototype) // true

// ES6：Object.create(原型对象)
let parent = {}
// Object.create() 以传入的对象为原型，创建新对象
let child2 = Object.create(parent)
console.log(child2.__proto__ === parent) // true，注意不是 parent.prototype
```

## 原型常用 API

```js:no-line-numbers
let parent = {
  name: 'parent',
}
// Object.create() 以传入的对象为原型，创建新对象
let child = Object.create(parent, {
  address: {
    value: 'Earth',
    // child 原型链上的 address 属性不可枚举
    enumerable: false,
  },
})
console.log(child.__proto__ === parent) // true
console.log(child.__proto__) // { name: 'parent'}

// 1.Object.getPrototypeOf：获取对象的原型
console.log(Object.getPrototypeOf(child)) // { name: 'parent' }

// 2.hasOwnProperty：判断属性是否是对象自身的属性，而不是原型链上的属性
console.log(parent.hasOwnProperty('address')) // false
console.log(parent.hasOwnProperty('name')) // true

// 3.in: 判断属性是否在对象及其原型链上
console.log('address' in child) // true
console.log('name' in child) // true

// 4.for in：循环遍历对象自身的和原型链上的可枚举属性
for (let key in child) {
  console.log(key) // name
}

// 5.isPrototypeOf：判断对象是否是另一个对象的原型
// console.log(child instanceof parent) 报错：parent 没有 prototype 属性
console.log(parent.isPrototypeOf(child)) // true
```

## typeof 与 instanceof

### typeof

判断数据类型，返回值为数据类型的字符串（如 `'number'`）

几种特殊情况：

```js:no-line-numbers
typeof NAN === 'number'

typeof function(){} === 'function'

typeof null === 'object'
typeof {} === 'object'
typeof [] === 'object'
```

typeof null === 'object' 原因：

这个 bug 是第一版 Javascript 留下来的。在这个版本，数值是以 32 位存储的，由标志位（1~3 位）和数值组成。null 的二进制表示全都是 0，自然前三位也是 0，所以执行 typeof 时会返回 'object'。

有五种标志位：

- 000：对象
- 1：整型，数据是 31 位带符号整数
- 010：双精度浮点型
- 100：字符串
- 110：布尔型

### instanceof

判断构造函数的显式原型 `prototype` 是否出现在某个实例对象的原型链上，返回值为 true 或 false。

```js:no-line-numbers
obj1 instanceof constructor
实例对象 instanceof 构造函数
```

```js:no-line-numbers
class People{}
class Student extends People{}
const stu1 = new Student()
stu1 instanceof Student // true
stu1 instanceof People  // true
stu1 instanceof Object  // true
```
