---
title: 数据类型
category:
  - TypeScript
---

## any类型

```typescript
// 当进行一些类型断言 as any
// 在不想给某些JavaScript添加具体的数据类型时(原生的JavaScript代码是一样)
let message: any = "Hello World"

message = 123
message = true
message = {

}

// message()
// message.split(" ")

console.log(message)
const arr: any[] = []
```

## unknown类型

```typescript
function foo() {
  return "abc"
}

function bar() {
  return 123
}

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型

let flag = true
let result: unknown // 最好不要使用any,防止乱用
if (flag) {
  result = foo()
} else {
  result = bar()
}

let message: string = result
let num1: number = result
let num2: unknown = result
console.log(result)

export {}
```

## void类型

```typescript
function sum1(num1: number, num2: number) {
  console.log(num1 + num2)
}

function sum2(num1: number, num2: number): void {
  console.log(num1 + num2)
  return undefined
}

sum1(20, 30)
// sum1("abc", "cba")
```

## never类型

```typescript
// function foo(): never {
//   // 死循环
//   while(true) {

//   }
// }

// function bar(): never {
//   throw new Error()
// }

// 提前
// 封装一个核心函数
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log("string处理方式处理message")
      break
    case 'number':
      console.log("number处理方式处理message")
      break
    case 'boolean':
      console.log("boolean处理方式处理message")
      break
    default:
      const check: never = message
  }
}

handleMessage("abc")
handleMessage(123)

// 张三
handleMessage(true)
```

## tuple类型

```typescript
// tuple元组: 多种元素的组合(有点像集合)
// "why" 18 1.88

// 1.数组的弊端
// const info: any[] = ["why", 18, 1.88]
// const infoObj = {
//   name: "why",
//   age: 18,
//   height: 1.88
// }

// const name = info[0]
// console.log(name.length)


// 2.元组的特点
const info: [string, number, number] = ["why", 18, 1.88]
const name = info[0]
console.log(name.length)
// const age = info[1]
// console.log(age.length)

export {}
```

## tuple类型的应用场景

```typescript
// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
  }

  const tuple: [any, (newState: any) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)

const [title, setTitle] = useState("abc")

export {}
```

```typescript
// tuple应用场景优化
// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
  }

  const tuple: [any, (newState: any) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)

const [title, setTitle] = useState("abc")

export {}
```

## 函数的参数和返回值类型

```typescript

// 给参数加上类型注解: num1: number, num2: number
// 给返回值加上类型注释: (): number
// 在开发中,通常情况下可以不写返回值的类型(自动推导)
function sum(num1: number, num2: number) {
  return num1 + num2
}

// sum(123, 321)
```

## 匿名函数的参数类型

```typescript
// 通常情况下, 在定义一个函数时, 都会给参数加上类型注解的
function foo(message: string) {

}

const names = ["abc", "cba", "nba"]
// item根据上下文的环境推导出来的, 这个时候可以不添加的类型注解
// 上下文中的函数: 可以不添加类型注解
names.forEach(function(item) {
  console.log(item.split(""))
})
```

## 对象类型

```typescript

// Point: x/y -> 对象类型
// {x: number, y: number}
function printPoint(point: {x: number, y: number}) {
  console.log(point.x);
  console.log(point.y)
}

printPoint({x: 123, y: 321})

export {}
```

## 可选类型

```typescript

// Point: x/y/z -> 对象类型
// {x: number, y: number, z?: number}
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

printPoint({x: 123, y: 321})
printPoint({x: 123, y: 321, z: 111})

export {}
```

## 联合类型

```typescript
// number|string 联合类型
function printID(id: number|string|boolean) {
  // 使用联合类型的值时, 需要特别的小心
  // narrow: 缩小
  if (typeof id === 'string') {
    // TypeScript帮助确定id一定是string类型
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printID(123)
printID("abc")
printID(true)
```

## 可选类型和联合类型的关系

```typescript
// 让一个参数本身是可选的
// 一个参数一个可选类型的时候, 它其实类似于是这个参数是 类型|undefined 的联合类型
// function foo(message?: string) {
//   console.log(message)
// }

function foo(message?: string) {
  console.log(message)
}

foo()
```

## 类型别名

```typescript
// type用于定义类型别名(type alias)
type IDType = string | number | boolean
type PointType = {
  x: number
  y: number
  z?: number
}

function printId(id: IDType) {

}

function printPoint(point: PointType) {
  
}
```

## 类型断言

```typescript
// <img id="why"/>

// 1.类型断言 as
const el = document.getElementById("why") as HTMLImageElement
el.src = "url地址"


// 2.另外案例: Person是Student的父类
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)


// 3.了解: as any/unknown
const message = "Hello World"
// const num: number = (message as unknown) as number
```

## 非空类型断言

```typescript
// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length)
  // }
  // vue3源码
  console.log(message!.length)
}

printMessageLength("aaaa")
printMessageLength("hello world")
```

## 可选链的使用

```typescript
type Person = {
  name: string
  friend?: {
    name: string
    age?: number,
    girlFriend?: {
      name: string
    }
  }
}

const info: Person = {
  name: "why",
  friend: {
    name: "kobe",
    girlFriend: {
      name: "lily"
    }
  }
}


// 另外一个文件中
console.log(info.name)
// console.log(info.friend!.name)
console.log(info.friend?.name)
console.log(info.friend?.age)
console.log(info.friend?.girlFriend?.name)
// if (info.friend) {
//   console.log(info.friend.name)

//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }
```

## 运算符

### ！！运算符

```typescript
const message = "Hello World"

// const flag = Boolean(message)
// console.log(flag)

const flag = !!message
console.log(flag)
```

### ？？运算符

```typescript
let message: string|null = "Hello World"
// 类似三目运算符
const content = message ?? "你好啊, 李银河"
// const content = message ? message: "你好啊, 李银河"
console.log(content)
```

## 字面量

### 字面量类型

```typescript

// "Hello World"也是可以作为类型的, 叫做字面量类型
const message: "Hello World" = "Hello World"

// let num: 123 = 123
// num = 321


// 字面量类型的意义, 就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center'

let align: Alignment = 'left'
align = 'right'
align = 'center'

// align = 'hehehehe'
export {}
```

### 字面量推理

```typescript
// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

// 

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

type Request = {
  url: string,
  method: Method
}

// const options1 :Request = {
//   url: "https://www.coderwhy.org/abc",
//   method: "POST"
// }

// as const字面量推理
const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST"
} as const

// String类型断言为字面量类型
// request(options.url, options.method as Method)
request(options.url, options.method)

export {}
```

## 类型缩小

```typescript
// 1.typeof的类型缩小
type IDType = number | string
function printID(id: IDType) {
  console.log(id)
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

// 2.平等的类型缩小(=== == !== !=/switch)
type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  // 1.if判断
  // if (direction === 'left') {
  //   console.log(direction)
  // } else if ()

  // 2.switch判断
  // switch (direction) {
  //   case 'left':
  //     console.log(direction)
  //     break;
  //   case ...
  // }
}

// 3.instanceof(实例对象)
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

const stu = new Student()
work(stu)

// 4. in(字面量)
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming")
  }
}

walk(fish)
```
