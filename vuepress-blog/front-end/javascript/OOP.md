---
title: 面向对象编程
---

JavaScript 支持多种编程范式，包括函数式编程和面向对象编程

除了 string、number、boolean、null、undefined、symbol 之外的其他数据是对象：**数组**、日期，甚至**函数**等等。故可以对它们使用 `.` 访问其属性，获取属性值。

在 JavaScript 中，对象是拥有属性和方法的数据，是无序的数据集合，是键值对的集合。

## 创建单个对象的两种方式

```js:no-line-numbers
// 1. new Object()
const obj1 = new Object()
obj1.name = 'obj1'
obj1.foo = function () {
  console.log(this.name)
}

// 2. 字面量形式
const obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this.name)
  },
}
```

## 对象的属性（键）与属性值（值）

属性名（键名）是字符串，不是标识符（变量）

获取对象的属性（键）的 2 种方式：

```js:no-line-numbers
// 通过字面量定义对象
let obj = {
  name: 'never',
  age: 23,
}
// 1.for in
for (let key in obj) {
  console.log(key) // 'name'  'age'
}
// 2.Object.keys() 得到属性组成的数组
console.log(Object.keys(obj)) // ['name', 'age']
```

获取对象的属性值（值）的2种方式：

```js:no-line-numbers
// 通过字面量定义对象
let obj = {
  name: 'never',
  age: 23,
}
// 1.obj.key
console.log(obj.name) // 'never'

// 2.obj['key']
console.log(obj['name']) // 'never'
```

变量作为属性名：

```js:no-line-numbers
let obj = {
  name: 'never',
  age: 23,
}

let keyName = 'name'
console.log(obj[keyName]) // 'never'
```

## 定义单个属性

在某个对象上定义一个新属性，或修改该对象的现有属性，并返回该对象。

`Object.defineProperty(obj, prop, descriptor)`

```js:no-line-numbers
let obj = {
  name: 'never',
}
// descriptor（属性描述符）是一个对象
Object.defineProperty(obj, 'age', {
  value: 23,
}) // 自动返回 { name: 'never', age: 23 }
```

属性描述符分为两种，下表展示了它们可拥有的键值：

||`configurable`|`enumerable`|`value`|`writable`|`get`|`set`|
|-|-|-|-|-|-|-|
|数据描述符|✅|✅|✅|✅|❌|❌|
|存取描述符|✅|✅|❌|❌|✅|✅|

- `configurable` ：可配置（删除、重新定义属性描述符），默认值 false
- `enumerable` ：可枚举（可以获取到对象的属性），默认值 false
- `value` ：属性值，默认值 undefined
- `writable` ：可写（修改属性），默认值 false
- `get` ：getter 方法
- `set` ：setter 方法

注意：

- `enumerable` 为 false 表示该属性不可遍历输出，但仍可以使用 `.` 访问到属性。在控制台，可以看到不可枚举到的属性会变浅色。
- 如果一个描述符同时拥有 `value` 或 `writable` 和 `get` 或 `set` 键，则会产生一个异常。即 `value` 与 `get` 互斥，`writable` 与 `set` 互斥。

### 数据描述符

```js:no-line-numbers
// 通过字面量定义的对象，configurable、enumerable、writable 均为 true
let obj = {
  name: 'never',
}
Object.defineProperty(obj, 'age', {
  configurable: true,
  enumerable: true,
  value: 23,
  writable: true,
})

// 测试
delete obj.age // age 可删除
console.log(obj) // {name: 'never'}
Object.defineProperty(obj, 'age', {
  value: 2333,
  writable: false, // age 可重新定义属性描述符，改为不可写
})
console.log(obj) // {name: 'never', age: 2333}
obj.age = 1 // 修改 age 失败
console.log(obj) // {name: 'never', age: 2333}
```

### 存取描述符

```js:no-line-numbers
// 作用：
// 1.隐藏私有属性
// 2.截获属性的访问和赋值过程
let obj = {
  name: 'never',
  // 开发约定使用 _ 开头表示私有属性
  _age: 23,
}
// 外部通过 age 修改私有属性 _age
Object.defineProperty(obj, 'age', {
  configurable: true,
  enumerable: true,
  get: function () {
    interceptGet()
    return this._age
  },
  set: function (value) {
    interceptSet()
    this._age = value
  },
})
// 拦截 get
function interceptGet() {
  console.log('检测到 age 的值被获取')
}
// 拦截 set
function interceptSet() {
  console.log('检测到 age 的值被设置')
}
// 测试
console.log(obj.age) // 检测到 age 的值被获取  23
obj.age = 2333 // 检测到 age 的值被设置
console.log(obj) // 浏览器环境下：{name: 'never', _age: 2333}
// node 环境下：
// { name: 'never', _age: 2333, age: [Getter/Setter] }
```

getter、setter 简洁写法

```js:no-line-numbers
// 简洁写法
let obj1 = {
  set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  },
}
// 等价于
let obj2 = {}
Object.defineProperty(obj2, 'age', {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._age
  },
  set: function (value) {
    this._age = value
  },
})
// 测试
obj1.age = 23
console.log(obj1) // { _age: 23 }
obj2.age = 23
console.log(obj2) // { _age: 23 }
```

## 定义多个属性

`Object.defineProperties(obj, {prop1: {descriptor}, prop2: {descriptor}})`

```js:no-line-numbers
let obj = {}
Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'never',
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this._age
    },
    set: function (value) {
      this._age = value
    },
  },
})
obj.age = 23
console.log(obj) // {name: 'never', _age: 23}
```

## 获取属性描述符

```js:no-line-numbers
let obj = {
  _age: 23,
}
Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'never',
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this._age
    },
    set: function (value) {
      this._age = value
    },
  },
})
obj.age = 2333

// 1.获取单个属性的属性描述符：Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {value: 'never', writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))
// {enumerable: true, configurable: true, get: ƒ, set: ƒ}

// 2.获取对象的所有属性描述符：Object.getOwnPropertyDescriptors
console.log(Object.getOwnPropertyDescriptors(obj))
// age: {enumerable: true, configurable: true, get: ƒ, set: ƒ}
// name: {value: 'never', writable: true, enumerable: true, configurable: true}
// _age: {value: 2333, writable: true, enumerable: true, configurable: true}
```

## 限制对象

```js:no-line-numbers
// 1.阻止扩展：禁止对象添加属性
let obj1 = {
  name: 'never',
}
Object.preventExtensions(obj1)
obj1.age = 23 // 无法添加属性
console.log(obj1) // {name: 'never'}

// 2.密封：禁止添加属性，并将现有属性改为不可配置，相当于 preventExtensions + configurable:false
let obj2 = {
  name: 'never',
}
Object.seal(obj2)
delete obj2.name // 无法删除属性
obj2.age = 23 // 无法添加属性
obj2.name = 'nevermore' // `可以`修改现有属性
console.log(obj2) // {name: 'nevermore'}

// 3.冻结：禁止添加属性，并将现有属性改为不可配置、不可修改，相当于 preventExtensions + configurable:false + writable:false
let obj3 = {
  name: 'never',
}
Object.freeze(obj3)
delete obj2.name // 无法删除属性
obj3.age = 23 // 无法添加属性
obj3.name = 'nevermore' // 无法修改属性
console.log(obj3) // {name: 'never'}
```

## 创建多个对象的方式

详见《JavaScript高级程序设计第四版》8.2 创建对象章节

### 工厂模式

```js:no-line-numbers
// 工厂函数
function createPerson(name, age) {
  let p = {}
  p.name = name
  p.age = age
  p.sayName = function () {
    console.log(this.name)
  }
  return p
}

let p1 = createPerson('Tom', 10)
let p2 = createPerson('Mary', 20)

// 优点：快速创建大量相似对象
// 缺点：创建的实例对象属于 Object，无法区分实例对象类型
console.log(p1, p2)
// {name: 'Tom', age: 10, sayName: ƒ}
// {name: 'Mary', age: 20, sayName: ƒ}
```

### 构造函数模式

```js:no-line-numbers
function Person(name, age, height, address) {
  this.name = name
  this.age = age

  this.sayName = function () {
    console.log(this.name)
  }
  // 等价于 
  // this.sayName = new Function('console.log(this.name)')
}

let p1 = new Person('Tom', 18)
let p2 = new Person('Mary', 20)
// Person {name: 'Tom', age: 18, sayName: ƒ}
// Person {name: 'Mary', age: 20, sayName: ƒ}
```

> `[[Prototype]]` 是 ECMA 标准，`__proto__` 是浏览器对标准的实现

构造函数模式的缺点：如果构造函数里有方法，每次创建一个实例对象，都会创建一个函数，浪费内存。可以通过把方法定义在构造函数外部解决这个缺点，但又引入了另一个缺点：共有的方法都在全局作用可以域，难以管理。这个缺点可以通过原型模式解决。

### 原型模式（原型 + 构造函数）

将共有的属性、方法添加到原型上。因为是添加，所以原型的构造函数仍保留：

```js:no-line-numbers
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  console.log(this.name)
}

let p1 = new Person('Tom', 18)
let p2 = new Person('Mary', 20)

p1.sayName() // Tom
p2.sayName() // Mary
console.log(Person.prototype) // {sayName: ƒ, constructor: ƒ}
```

直接赋值整个 prototype 对象。因为是赋值，所以原型的构造函数需要自己手动加上：

```js:no-line-numbers
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype = {
  constructor: Person,
  kind: 'human',
  sayName: function () {
    console.log(this.name)
  },
}

let p1 = new Person('Tom', 18)
let p2 = new Person('Mary', 20)
console.log(Person.prototype) // {kind: 'human', constructor: ƒ, sayName: ƒ}
console.log(p1) // Person {name: 'Tom', age: 18}
console.log(p2) // Person {name: 'Mary', age: 20}
```

## new 操作符执行的操作

1. 在内存中创建一个空的临时对象
2. 将这个临时对象的隐式原型 `[[Prototype]]` 指向构造函数显式原型 `prototype`
3. 绑定 `this` 到这个临时对象上
4. 执行构造函数内部的代码（给新对象添加属性）
5. 返回这个临时对象

```js:no-line-numbers
new Person()

// new 相当于执行以下操作：
function Person(name) {
  // 1.在内存中创建一个空的临时对象
  let obj = {}
  // 2.将这个临时对象的隐式原型指向构造函数的显式原型
  obj.__proto__ = Person.prototype
  // 3.绑定 this 到这个临时对象上
  Person.call(obj)
  // 4.执行构造函数内部的代码（给新对象添加属性）
  this.name = 'never'
  // 5.返回这个临时对象
  return this
}
```
