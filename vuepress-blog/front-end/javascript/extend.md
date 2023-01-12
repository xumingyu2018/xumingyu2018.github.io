---
  title: 继承
---

## 原型链继承

```js:no-line-numbers
function Parent() {
  this.parentValue = 'parentValue'
  this.info = {
    name: 'parent',
    age: 23,
  }
  this.parentMethod = function () {
    console.log(this.parentValue)
  }
}

Parent.prototype.protoValue = 'protoValue'
Parent.prototype.protoMethod = function () {
  console.log(this.protoValue)
}

function Child() {
  this.childValue = 'childValue'
}

// Child.prototype.__proto__ === Parent.prototype
Child.prototype = new Parent()

// 缺点1：不能给父类构造函数传参
let child1 = new Child()
let child2 = new Child()
// 缺点2：子类实例继承到父类构造函数、原型链的属性和方法，但不可枚举
console.log(child1) // Child {childValue: 'childValue'}
console.log(child2) // Child {childValue: 'childValue'}

// 缺点3：父类的引用属性会被所有子类实例共享
child1.info.address = 'Earth'
// 可以访问父类构造函数、原型链的属性和方法
child1.protoMethod() // protoValue
child1.parentMethod() // parentValue
child1.protoValue // 'protoValue'
```

优点：父类方法可以复用

缺点：

1. 不能给父类构造函数传参
2. 子类实例可以继承父类构造函数、原型链上的属性和方法，但不可枚举
3. 父类的引用属性会被所有子类实例共享，修改某个子类实例继承的的引用类型属性，会影响到所有的子类实例

## 借用构造函数继承

```js:no-line-numbers
function Parent(name, age) {
  this.parentValue = 'parentValue'
  this.info = { name, age }
  this.parentMethod = function () {
    console.log(this.parentValue)
  }
}

Parent.prototype.protoValue = 'protoValue'
Parent.prototype.protoMethod = function () {
  console.log(this.protoValue)
}

function Child(name, age) {
  Parent.call(this, name, age)
  this.childValue = 'childValue'
}

let child1 = new Child('child1', 23)
let child2 = new Child('child2', 233)

// 可以继承父类构造函数的属性和方法，且可枚举
console.log(child1) // Child {parentValue: 'parentValue', info: {…}, childValue: 'childValue', parentMethod: ƒ}
console.log(child2) // Child {parentValue: 'parentValue', info: {…}, childValue: 'childValue', parentMethod: ƒ}

// 修改某个子类实例继承的的引用类型属性，不会影响到所有的子类实例
child1.info.address = 'Earth'
console.log(child1.info) // {name: 'child1', age: 23, address: 'Earth'}
console.log(child2.info) // {name: 'child2', age: 233}

// 缺点：无法继承到父类原型上的属性和方法
// child1.protoMethod() // 报错
// console.log(child1.protoValue) // undefined
```

优点：

1. 避免父类引用类型属性被所有实例共享
2. 子类可以向父类构造函数传参

缺点：

1. 只能继承父类构造函数的属性和方法，不能继承原型链上的属性和方法
2. 方法定义在构造函数中，每个子类实例都含有父类函数副本，无法实现父类函数复用

## 组合继承

将原型链继承与构造函数继承组合使用

```js:no-line-numbers
function Parent(name, age) {
  this.parentValue = 'parentValue'
  this.info = { name, age }
  this.parentMethod = function () {
    console.log(this.parentValue)
  }
}

Parent.prototype.protoValue = 'protoValue'
Parent.prototype.protoMethod = function () {
  console.log(this.protoValue)
}

function Child(name, age) {
  // 继承父类构造函数的属性和方法
  Parent.call(this, name, age)
  this.childValue = 'childValue'
}
// 继承原型链上的属性和方法
Child.prototype = new Parent()

let child1 = new Child('child1', 23)
let child2 = new Child('child2', 233)
// 可以继承父类构造函数的属性和方法，且可枚举
console.log(child1) // Child {parentValue: 'parentValue', info: {…}, childValue: 'childValue', parentMethod: ƒ}
console.log(child2) // Child {parentValue: 'parentValue', info: {…}, childValue: 'childValue', parentMethod: ƒ}

// 避免父类的引用类型属性被所有子类实例共享
child1.info.address = 'Earth'
console.log(child1.info) // {name: 'child1', age: 23, address: 'Earth'}
console.log(child2.info) // {name: 'child2', age: 233}

// 可以继承到父类原型链上的属性和方法，但不可枚举
child1.protoMethod() // protoValue
console.log(child1.protoValue) // 'protoValue'
```

优点：可以继承父类构造函数和原型链上的属性、方法

缺点：组合继承会调用两次父类构造函数，实例中会存在两份属性、方法

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220529003154.png)

## 原型式继承

对对象的浅拷贝，有三种等价方法，原型式继承的缺点与原型链继承是相同的

```js:no-line-numbers
let parent = {
  parentValue: 'parentValue',
  info: {
    name: 'parent',
    age: 23,
  },
  parentMethod: function () {
    console.log(this.parentValue)
  },
}

// 1.临时构造函数
function copyObject1(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}
// 缺点1：不能向父类传参
let child1 = copyObject1(parent)

// 2.Object.setPrototypeOf
function copyObject2(obj) {
  let newObj = {}
  Object.setPrototypeOf(newObj, obj)
  return newObj
}
let child2 = copyObject2(parent)

// 3.Object.create()
let child3 = Object.create(parent)

// 可以继承到父类的属性和方法，但不可枚举
console.log(child1) // Fn {}
console.log(child2) // {}
console.log(child3) // {}
console.log(child1.info) // { name: 'parent', age: 23 }
child1.parentMethod() // parentValue

// 缺点2：父类引用类型属性被所有子类共享
child1.info.address = 'Earth'
console.log(child2.info) // {name: 'parent', age: 23, address: 'Earth'}
```

优点：父类方法可复用

缺点：

1. 不能给父类构造函数传参
2. 父类的引用属性会被所有子类实例共享

## 寄生式继承

结合原型类继承和工厂模式：创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象

```js:no-line-numbers
function copyObject(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}

function createChild(original) {// 工厂函数
  let clone = copyObject(original)
  clone.parentMethod = function () {
    console.log(this.parentValue)
  }
  return clone
}

let parent = {
  parentValue: 'parentValue',
  info: {
    name: 'parent',
    age: 23,
  },
}

let child1 = createChild(parent)
let child2 = createChild(parent)
console.log(child1) // Fn {parentMethod: ƒ}
child1.parentMethod() // parentValue
console.log(child1.info) // {name: 'parent', age: 23}

// 父类的引用属性会被所有子类实例共享
child1.info.address = 'Earth'
console.log(child1.info) // {name: 'child1', age: 23, address: 'Earth'}
console.log(child2.info) // {name: 'child1', age: 23, address: 'Earth'}
```

缺点：

1. 无法实现父类函数复用
2. 父类的引用属性会被所有子类实例共享

## 寄生组合式继承

组合继承最大的缺点在于执行两次父类构造函数，寄生组合式继承解决了这个缺点

```js:no-line-numbers
function inheritPrototype(child, parent) {
  let prototype = Object.create(parent.prototype) // 创建对象
  prototype.constructor = child // 增强对象
  child.prototype = prototype // 赋值对象
}

function Parent(name, age) {
  this.parentValue = 'parentValue'
  this.info = { name, age }
  this.parentMethod = function () {
    console.log(this.parentValue)
  }
}

Parent.prototype.protoValue = 'protoValue'
Parent.prototype.protoMethod = function () {
  console.log(this.protoValue)
}

function Child(name, age) {
  // 继承父类构造函数的属性和方法
  Parent.call(this, name, age)
  this.childValue = 'childValue'
}

inheritPrototype(Child, Parent)

Child.prototype.childProtoMethod = function () {
  console.log(this.info)
}

let child1 = new Child('child1', 23) 
let child2 = new Child('child2', 233) 
console.log(child1) // Child {parentValue: 'parentValue', info: {…}, childValue: 'childValue', parentMethod: ƒ}
child1.parentMethod() // parentValue
child1.protoMethod() // protoValue
child1.childProtoMethod() // {name: 'child1', age: 23}

// 避免父类的引用类型属性被所有子类实例共享
child1.info.address = 'Earth'
console.log(child1.info) // {name: 'child1', age: 23, address: 'Earth'}
console.log(child2.info) // {name: 'child2', age: 233}

// 子类实例的构造函数是它本身
console.log(child1.constructor.name) // Child
```

优点：

1. 只调用一次父类构造函数
2. 可以向父类型的构造函数中传递参数
3. 父类方法可以复用
4. 避免父类引用类型属性被所有子类实例共享

## ES6 继承

`class + extends` 是实现继承的语法糖，基于寄生组合式继承实现

```js:no-line-numbers
class Parent {
  constructor(name, age) {
    this.parentValue = 'parentValue'
    this.info = { name, age }
  }
  parentMethod() {
    console.log(this.parentValue)
  }
}
class Child extends Parent {
  constructor(name, age, id) {
    super(name, age) // 通过 super() 调用父类构造函数
    this.id = id
  }
}
let child1 = new Child('child1', 23, '001')
let child2 = new Child('child2', 233, '002')

// 只有父类方法不可枚举
console.log(child1) // Child {parentValue: 'parentValue', info: {…}, id: '001'}
child1.parentMethod() // parentValue
console.log(child1.info) // {name: 'child1', age: 23}

// 避免父类的引用属性被所有子类实例共享
child1.info.address = 'Earth'
console.log(child1.info) // {name: 'child1', age: 23, address: 'Earth'}
console.log(child2.info) // {name: 'child2', age: 233}

// 子类实例的构造函数是它本身
console.log(child1.constructor.name) // Child
```

## 参考资料

- [JavaScript进阶之继承](https://juejin.cn/post/7054336238760755236)
- [JS继承](https://juejin.cn/post/6914216540468576263)
- JavaScript高级程序设计（第4版）
