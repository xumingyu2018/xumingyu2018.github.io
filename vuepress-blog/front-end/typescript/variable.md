---
title: 变量的定义
category:
  - TypeScript
---

## 变量的定义格式

```typescript
// 1.类型注解
// 2.var/let/const
// 3.string和String的区别
// 4.类型推导
var name: string = "why"
let age: number = 18
const height: number = 1.88

// string: TypeScript中的字符串类型
// String: JavaScript的字符串包装类的类型
const message: string = "Hello World"

// 默认情况下进行赋值时, 会将赋值的值的类型, 作为前面标识符的类型
// 这个过程称之为类型推导/推断
// foo没有添加类型注解
let foo = "foo"
// foo = 123

export {}
```

## number类型

```typescript
let num: number = 123
num = 222

// num = "123"

// 十进制
let num1: number = 100 
// 二进制
let num2: number = 0b100
// 八进制
let num3: number = 0o100
// 十六进制
let num4: number = 0x100

console.log(num1, num2, num3, num4)
```

## boolean类型

```typescript
let flag: boolean = true
flag = 20 > 30
```

## string类型

```typescript
let message1: string = 'hello world'
let message2: string = "Hello World"


// 个人习惯: 默认情况下, 如果可以推导出对应的标识符的类型时, 一般情况下是不加
const name = "why"
const age = 18
const height = 1.88

let message3 = `name:${name} age:${age} height:${height}`
console.log(message3)

export {}
```

## array类型

```typescript
// 确定一个事实: names是一个数组类型, 但是数组中存放的是什么类型的元素呢?
// 不好的习惯: 一个数组中在TypeScript开发中, 最好存放的数据类型是固定的(string)
// 类型注解: type annotation
const names1: Array<string> = [] // 不推荐(react jsx中是有冲突   <div></div>)
const names2: string[] = [] // 推荐

// 在数组中存放不同的类型是不好的习惯
// names.push("abc")
// // names.push(123)
```

## object类型

```typescript
const info = {
  name: "why",
  age: 18
}

console.log(info.name)
```

## null和undefined类型

```typescript
let n1: null = null
let n2: undefined = undefined
```

## symbol类型

```typescript
const title1 = Symbol("title")
const title2 = Symbol('title')

const info = {
  [title1]: "程序员",
  [title2]: "老师"
}

export {}
```