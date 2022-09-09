---
title: 泛型的使用
category:
  - TypeScript
---

## 认识泛型

```typescript
// 类型的参数化

// 在定义这个函数时, 我不决定这些参数的类型
// 而是让调用者以参数的形式告知,我这里的函数参数应该是什么类型
function sum<Type>(num: Type): Type {
  return num
}

// 1.调用方式一: 明确的传入类型
sum<number>(20)
sum<{name: string}>({name: "why"})
sum<any[]>(["abc"])

// 2.调用方式二: 类型推到
sum(50)
sum("abc")
```

## 泛型接受类型参数

```typescript
function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]) {

}

foo<number, string, boolean>(10, "abc", true)
```

## 泛型接口

```typescript
interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const p: IPerson = {
  name: "why",
  age: 18
}
```

## 泛型类

```typescript
class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = y
  }
}

const p1 = new Point("1.33.2", "2.22.3", "4.22.1")
const p2 = new Point<string>("1.33.2", "2.22.3", "4.22.1")
const p3: Point<string> = new Point("1.33.2", "2.22.3", "4.22.1")

const names1: string[] = ["abc", "cba", "nba"]
const names2: Array<string> = ["abc", "cba", "nba"] // 不推荐(react jsx <>)
```

## 类型约束

```typescript
interface ILength {
  length: number
}

// <T extends ILength>限制参数化类型
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength("abc")
getLength(["abc", "cba"])
getLength({length: 100})
```

## 非空判断运算符

```typescript
const flag = "" ?? true
console.log(flag)
```
