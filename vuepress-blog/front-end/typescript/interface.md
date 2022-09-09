---
title: 接口的使用
category:
  - TypeScript
---

## 声明对象类型

```typescript
// 通过类型(type)别名来声明对象类型
// type InfoType = {name: string, age: number}

// 另外一种方式声明对象类型: 接口interface
// 在其中可以定义可选类型
// 也可以定义只读属性
interface IInfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: "why",
  age: 18,
  friend: {
    name: "kobe"
  }
}

console.log(info.friend?.name)
console.log(info.name)
// info.name = "123"
info.age = 20
```

## 索引类型

```typescript
// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue"
}


interface ILanguageYear {
  [name: string]: number
}

const languageYear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
```

## 函数类型

```typescript
// type CalcFn = (n1: number, n2: number) => number
// 可调用的接口
interface CalcFn {
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

calc(20, 30, add)
```

## 接口的继承

```typescript
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {

  },
  flying() {
    
  }
}
```

## 交叉类型

```typescript
// 一种组合类型的方式: 联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"


// 另一种组件类型的方式: 交叉类型
type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() {

  }
}

const obj2: MyType2 = {
  swimming() {

  },
  flying() {
    
  }
}

export {}
```

## 接口的实现

```typescript
interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {
  
}

// 继承: 只能实现单继承
// 实现: 实现接口, 类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish Swmming")
  }

  eating() {
    console.log("Fish Eating")
  }
}


class Person implements ISwim {
  swimming() {
    console.log("Person Swimming")
  }
}


// 编写一些公共的API: 面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

// 1.所有实现了接口的类对应的对象, 都是可以传入
swimAction(new Fish())
swimAction(new Person())


swimAction({swimming: function() {}})
```

## interface和type的区别

```typescript
// 用于扩展
// interface IFoo {
//   name: string
// }

// interface IFoo {
//   age: number
// }

// const foo: IFoo = {
//   name: "why",
//   age: 18
// }

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// interface Window {
//   age: number
// }
// window.age = 19
// console.log(window.age)


// type IBar = {
//   name: string
//   age: number
// }

// type IBar = {
// }

// 建议使用interface
interface IPerson {
  
}
```

## 字面量赋值

```typescript
interface IPerson {
  name: string
  age: number
  height: number
}

// const p: IPerson ={
//   name: "why",
//   age: 18,
//   height: 1.88,
//   // 这样会报错
//   address: "广州市"
// }

// const info = {
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// }

// // freshness擦除
// const p: IPerson = info

// console.log(info)
// console.log(p)


function printInfo(person: IPerson) {
  console.log(person)
}

// 代码会报错
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// })

const info = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "广州市"
}

printInfo(info)

export {}
```

## 枚举类型的使用

```typescript
// type Direction = "left" | "Right" | "Top" | "Bottom"

enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}


function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左")
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右")
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上")
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下")
      break;
    default:
      // 穷举所有类型完后才会
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)
```

## 枚举类型的值

```typescript
// type Direction = "left" | "Right" | "Top" | "Bottom"

enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM"
}

let name: string = "abc"
let d: Direction = Direction.BOTTOM

function turnDirection(direction: Direction) {
  console.log(direction)
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左")
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右")
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上")
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下")
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)

export {}
```
