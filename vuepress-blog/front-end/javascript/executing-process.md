--- 
  title: JS 代码执行过程
---

## 全局代码执行过程

### 初始化全局对象

js引擎会在执行代码之前，会在堆内存创建一个全局对象：Global Object(GO)

- 该对象所有的作用域都可以访问;
- 里面包含`Date`、`Array`、`String`、`Number`、`setTimeout`、`setInterval`等;
- 其中还有一个window属性指向自己;

### 执行上下文栈

1. v8引擎为了执行代码, v8引擎内部会有一个执行上下文栈(Execution Context Stack, ECStack)(函数调用栈)
2. 因为我们执行的是全局代码, 为了全局代码能够正常的执行, 需要创建 全局执行上下文(Global Execution Context)(全局代码需要被执行时才会创建)

GEC被放入到ECS中里面包含两部分内容：

- 第一部分：在代码执行前，在parser转成AST的过程中，会将全局定义的变量、函数等加入到`GlobalObject`中，但是并不会赋值;这个过程也称之为变量的作用域提升

- 第二部分：在代码执行中，对变量赋值，或者执行其他的函数

GEC被放入到ECS中:

![全局代码执行过程1](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914171411.png)
 GEC开始执行代码:

![全局代码执行过程2](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914171612.png)

## 函数代码执行过程

在执行的过程中执行到一个函数时，就会根据函数体创建一个函数执行上下文（Functional Execution Context，简称FEC），并且压入到ECStack中。

FEC中包含三部分内容:

- 第一部分：在解析函数成为AST树结构时，会创建一个Activation Object（AO）(AO中包含形参、arguments、函数定义和指向函数对象、定义的变量)
- 第二部分：作用域链：由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找
- 第三部分：this绑定的值

FEC被放入到ECS中:

![函数代码执行过程1](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914173128.png)
FEC开始执行代码:

![函数代码执行过程2](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914173615.png)
![函数代码执行过程3](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914173936.png)

注意：

- 当我们查找一个变量时,真实的查找路径是沿着作用域链来查找
- 函数的父级作用于跟它定义的位置有关,与调用位置没有关系

## 嵌套函数代码执行过程

```js:no-line-numbers
// 示例代码
foo(123)
function foo(num) {
  console.log(m)
  var m = 10
  var n = 20

  function bar() {
    console.log(name)
  }

  bar()
}
```

![嵌套函数代码执行过程](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914180240.png)

## 函数调用函数执行过程

```js:no-line-numbers
// 示例代码
var message = "hello,global"

function foo() {
  console.log(message);
}

function bar() {
  var message = "hello,bar"
  foo()
}

bar()
```

![函数调用函数执行过程](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914180649.png)

## 作用域提升面试题

![面试题1](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914194704.png)

![面试题2](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/微信图片_20220914194916.png)

![面试题3](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/1.png)

![面试题4](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/2.png)

![面试题5](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/3.png)

## JS内存管理及垃圾回收

- JS对于基本数据类型内存的分配会在执行时，直接在栈空间进行分配
- JS对于复杂数据类型内存的分配会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用

常见的GC算法

- 引用计数法：当一个对象有一个引用指向它时，那么这个对象的引用就+1，当一个对象的引用为0时，这个对象就可以被销毁掉

![引用计数法](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/1.PNG)

- 标记清除法：这个算法是设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于哪些没有引用到的对象，就认为是不可用的对象

![标记清除法](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220914202146.png)

## 总结

- GEC(global excution context)全局执行上下文：执行全局代码
- FEC(function excution context)函数执行上下文：执行函数代码

- 全局：VO:GO(es5之前)
- 函数：VO:AO(es5之前)
