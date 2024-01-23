# 进阶知识

## React 对数据管理和界面渲染的流程解析

当数据需要发送变化时，通过调用组件的`setState`方法来更新状态（无数据劫持）。这会触发`render`函数重新渲染流程。当数据没有变化时，只要调用了`setState`方法也会重新渲染。可在`shouldComponentUpdate`和`PureComponent`中判断是否数据没有变化时重新渲染。

```jsx
this.state = {
  message = ""
}
this.setState({
  message = ""
})
shouldComponentUpdate(){
  if(prevState.message === this.state.message) return false
  else return true
}
PureComponent(){ ... }
```

如果直接修改`state`的状态，如下：

```jsx
changeText() {
    this.state.message = "你好啊,李银河";
}

```

我们会发现页面并不会有任何反应，但是`state`的状态是已经发生了改变

这是因为`React`并不像`vue2`中调用`Object.defineProperty`数据响应式或者`Vue3`调用`Proxy`通过数据劫持来监听数据的变化，而必须通过`setState`方法来告知`react`组件`state`已经发生了改变。

关于`state`方法的定义是从`React.Component`中继承，定义的源码如下：

```jsx
Component.prototype.setState = function(partialState, callback) {

  invariant(

    typeof partialState === 'object' ||

      typeof partialState === 'function' ||

      partialState == null,

    'setState(...): takes an object of state variables to update or a ' +

      'function which returns an object of state variables.',

  );

  this.updater.enqueueSetState(this, partialState, callback, 'setState');

};
```

从上面可以看到`setState`第一个参数可以是一个对象，或者是一个函数，而第二个参数是一个回调函数，用于可以实时的获取到更新之后的数据。

## setState 的进阶知识

1.  `setState`普通用法

从以下可以看到，最终打印结果为`Hello world`，并不能在执行完`setState`之后立马拿到最新的`state`的结果。

```jsx
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }
  changeText() {
    this.setState({
      message: "你好啊"
    })
    console.log(this.state.message); // Hello World
  }
}
```

1.  `setState`可以传入一个回调函数
    - 优点 1：可以在回调函数中编写新的`state`的逻辑
    - 有点 2：当前的回调函数会将之前的`state`和`props`传递进来

```jsx
  changeText() {
    this.setState((state, props) => {
      // 1.编写一些对新的state处理逻辑
      // 2.可以获取之前的state和props值
      console.log(this.state.message, this.props) //hello World

      return {
        message: "你好啊, 李银河"
      }
  })

```

1. ‼️`setState`异步更新

   如果希望在数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码，那么可以在`setState`中传入第二个参数: `callback`

```jsx
  changeText() {
    // 如果希望在数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码，那么可以在setState中传入第二个参数: callback
    this.setState({ message: "你好啊, 李银河" }, () => {
      console.log("++++++:", this.state.message)
    })
    // 优先执行
    console.log("------:", this.state.message)
  }
  // 结果：
  // ------：Hello World
  // ++++++：你好啊, 李银河
```

### 为什么在 react18 之后，setState 要设计成异步调用

> 1\. `setState`设计为异步，可以显著的提升性能；如果每次调用 `setState`都进行一次更新，那么意味着`render`函数会被频繁调用，界面重新渲染，这样效率是很低的；最好的办法应该是获取到多个更新，之后进行批量更新（队列）。
> 2\. 如果同步更新了`state`，但是还没有执行`render`函数，那么`state`和`props`不能保持同步；`state`和`props`在父子组件中不能保持数据的一致性，会在开发中产生很多的问题。

### React18 之前，在`setTimeout`、`Promise`或者原生`dom`事件中，`setState`是同步的

- 在 react18 之前, `setTimeout`中`setState`操作, 是同步操作
- 在 react18 之后, `setTimeout`中`setState`异步操作(批处理)

```jsx
// setTimeout
changeText() {
  setTimeout(() => {
    this.setState({
      message: "你好啊
    });
    console.log(this.state.message); // 你好啊
  }, 0);
}

// 原生DOM事件
componentDidMount() {
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener('click', () => {
    this.setState({
      message: "你好啊,李银河"
    });
    console.log(this.state.message); // 你好啊,李银河
  })
}
```

#### 批量异步更新

```jsx
handleClick = () => {
  this.setState({

    count: this.state.count + 1,

  })
  console.log(this.state.count) // 1

  this.setState({

    count: this.state.count + 1,

  })
  console.log(this.state.count) // 1

  this.setState({

    count: this.state.count + 1,

  })
  console.log(this.state.count) // 1
}
```

点击按钮触发事件，打印的都是 1，页面显示 `count` 的值为 2

对同一个值进行多次 `setState`， `setState` 的批量更新策略会对其进行覆盖，取最后一次的执行结果

上述的例子，实际等价于如下：

```jsx
Object.assign(
  previousState,
  {index: state.count+ 1},

  {index: state.count+ 1},
  ...
)
```

由于后面的数据会覆盖前面的更改，所以最终只加了一次

如果是下一个`state`依赖前一个`state`的话，推荐给`setState`一个参数传入一个`function`，如下：

```jsx
onClick = () => {
  this.setState((prevState, props) => {
    return {count: prevState.count + 1};
  });

  this.setState((prevState, props) => {
    return {count: prevState.count + 1};
  });
}
```

而在`setTimeout`或者原生`dom`事件中，由于是同步的操作，所以并不会进行覆盖现象

#### 同步更新

执行特殊的`flushSync`操作。

```jsx
import { flushSync } from 'react-dom'

flushSync(() => {
  this.setState({ message: "你好啊, 李银河" })
})
console.log(this.state.message) // 你好啊, 李银河

```

### React 更新机制

> 根据`JSX`代码生成对应的`ReactElement`对象，也就是常说的`VDOM`, 在依照内部的`DIFF`算法来进行新旧 DOM 的对比，随后在界面上渲染出`真实DOM`

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_FbnbOr7hAS.png)

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_DOgwvnOLxD.png)

### 组件渲染性能优化

如何避免不必要的`render`。

**方法**

- `shouldComponentUpdate`（SCU 优化）
- `PureComponent`（类组件中使用）
- `React.memo`（函数式组件中使用）

#### **`shouldComponentUpdate`**

通过`shouldComponentUpdate`生命周期函数来比对 `state`和 `props`，确定是否要重新渲染

默认情况下返回`true`表示重新渲染，如果不希望组件重新渲染，返回 `false` 即可

```jsx
/*
 * nextProps: 修改之后，最新的props属性
 * nextState: 修改之后，最新的state属性
 * 返回值: boolean
 */
shouldComponentUpdate(nextProps, newState) {
    // 对组件性能优化的点
    if (this.state.message !== newState.message || this.props.count !== newProps.count) {
      return true
    }
    return false
  }
```

**‼️ 弊端：所有的类，都需要手动来实现 \*\***`shouldComponentUpdate`\***\*，那么会增加非常多的工作量。**

#### **`PureComponent`**

跟`shouldComponentUpdate`原理基本一致，通过对 `props` 和 `state`的**浅比较**结果来实现 `shouldComponentUpdate`，使用时将`class`继承自`PureComponent`。

```jsx
import React, { PureComponent } from 'react'
export class App extends PureComponent {
  render() { return ( ... ) }
}
```

当对象包含复杂的数据结构时，对象深层的数据已改变却没有触发 `render`

**‼️ 注意：在\*\***`react`\***\*中，是不建议使用深层次结构的数据，建议赋值一份新的变量, 在新的变量中修改，以下是一个简单例子（数据不可变的力量）。**

```jsx
  addNewBook() {
    const newBook = { name: "Angular高级设计", price: 88, count: 1 }

    // 1.直接修改原有的state, 重新设置一遍
    // 在PureComponent是不能引起重新渲染(re-render)
    this.state.books.push(newBook)
    this.setState({ books: this.state.books })

    // 2.赋值一份books, 在新的books中修改, 设置新的books
    const books = [...this.state.books]
    books.push(newBook)

    this.setState({ books: books })
  }
```

**源码**

```jsx
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * is 方法来判断两个值是否是相等的值，为何这么写可以移步 MDN 的文档
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
// 以上例子中this.state.books.push(newBook)是同一个对象，即返回true，导致不重新渲染
function is(x: mixed, y: mixed): boolean {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA: mixed, objB: mixed): boolean {
  // 首先对基本类型进行比较
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 长度不相等直接返回false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // key相等的情况下，再去循环比较
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}
```

#### **`React.memo`**

`React.memo`用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 `PureComponent` 十分类似。但不同的是， `React.memo` 只能用于函数组件。

`memo`高阶组件包裹起来的组件有对应的特点: 只有`props`发生改变时, 才会重新渲染。

```jsx
import { memo } from "react"

const Children = memo(function(props) {
  console.log("Children render")
  return <h2>Children: {props.message}</h2>
})

export default Children
```

如果需要深层次比较，这时候可以给`memo`第二个参数传递比较函数

```jsx
function arePropsEqual(prevProps, nextProps) {
  // your code
  return prevProps === nextProps;
}

export default memo(Button, arePropsEqual);
```

### Ref 获取原生 Dom 的方式

创建`ref`的形式：

- 传入字符串，使用时通过 `this.refs`传入的字符串的格式获取对应的元素
- 传入对象，对象是通过 `React.createRef()` 方式创建出来，使用时获取到创建的对象中存在 `current` 属性就是对应的元素（`Dom`元素或者类组件挂载实例）（常用‼️）
- 传入函数，该函数会在 `DOM` 被挂载时进行回调，这个函数会传入一个元素对象，可以自己保存，使用时，直接拿到之前保存的元素对象即可
- 通过`forwardRef`高阶函数获取函数式组件中某个元素的`DOM`（函数式组件时使用）
- 传入`hook`，`hook`是通过 `useRef()` 方式创建，使用时通过生成`hook`对象的 `current` 属性就是对应的元素

```jsx
import React, { PureComponent, createRef, forwardRef } from 'react'
// 函数式组件通过forwardRef高阶组件获取函数式组件中某个元素的DOM。
const Children = forwardRef(function(props, ref) {
  return (
    <div>
      <h1 ref={ref}>函数式组件h1</h1>
    </div>
  )
})

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}
    // 方式二
    this.titleRef = createRef()

    this.titleEl = null

    this.myRef = createRef()
  }

  getNativeDOM() {
    // 1.方式一: 在React元素上绑定一个ref字符串
    console.log(this.refs.aaa)

    // 2.方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素
    console.log(this.titleRef.current)

    // 3.方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    console.log(this.titleEl)

    // 4.方式四: 通过forwardRef高阶函数获取函数式组件中某个元素的DOM
    console.log(this.myRef.current)
  }

  render() {
    return (
      <div>
        {/* 方式一 */}
        <h2 ref="aaa">通过字符串创建Ref</h2>
        {/* 方式二 */}
        <h2 ref={this.titleRef}>通过createRef创建Ref</h2>
        {/* 方式三 */}
        <h2 ref={el => this.titleEl = el}>通过回调函数创建Ref</h2>
        {/* 方式四 */}
        <Children ref={this.myRef}/>

        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

```

**‼️ 注意不能在函数组件上使用\*\***`ref`\***\*属性，因为他们并没有实例**

**应用场景**

- 对`Dom`元素的焦点控制、内容选择、控制
- 对`Dom`元素的内容设置及媒体播放
- 对`Dom`元素的操作和对组件实例的操作
- 集成第三方 `DOM` 库

## [受控组件和非受控组件](https://juejin.cn/post/6858276396968951822#heading-7 "受控组件和非受控组件")

### 受控组件

在`React`中定义了一个`input`输入框的话，它并没有类似于`Vue`里`v-model`的这种双向绑定功能。也就是说，我们并没有一个指令能够将数据和输入框结合起来，用户在输入框中输入内容，然后数据同步更新。**设置了\*\***`Value`\***\*属性就变成受控组件**。

```jsx
class TestComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: 'coderxmy' };
  }
  render () {
    return (
      {/* 受控组件(绑定了state中的值) */}
      <input name="username" value={this.state.username} />
      {/* 非受控组件 */}
      <input type="text" />
    )
  }
}
```

这时候当我们在输入框输入内容的时候，会发现输入的内容并无法显示出来，也就是`input`标签是一个可读的状态，这是因为`value`被`this.state.username`所控制住。当用户输入新的内容时，`this.state.username`并不会自动更新，这样的话`input`内的内容也就不会变了。

如果想要解除被控制，可以为`input`标签设置`onChange`事件，输入的时候触发事件函数，在函数内部实现`state`的更新，从而导致`input`框的内容页发现改变。

```jsx
class TestComponent extends PureComponent {
  constructor() {
    super()
    this.state = { username: 'coderxmy' };
  }

  inputChange(event) {
    console.log("inputChange:", event.target.value)
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div>
        {/* 受控组件 */}
        <input type="checkbox" value={this.state.username}  onChange ={e => this.inputChange(e)}/>
      </div>
    )
  }
}
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_MTSXpsLH5x.png)

#### **`input`\*\***受控组件\*\*

```jsx
class App extends PureComponent {

  constructor() {
    super()

    this.state = {
      username: ""
    }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为（防止表单提交跳转）不加这个获取不到表达数据
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容")
    console.log(this.state.username)

    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value })
  // }

  handleInputChange(event) {
    // 官方做法：用一个函数封装处理多个表达内容如用户名和密码。注意event.target.name这中写法可以获取input里面的name属性
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username } = this.state

    return (
      <div>
        <form  onSubmit ={e => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户:
            <input id='username' type="text" name='username' value={username}
            onChange={e => this.handleInputChange(e)}/>
          </label>
          <label htmlFor="password">
            密码:
            <input id='password' type="password" name='password' value={password}
              onChange={e => this.handleInputChange(e)}/>
          </label>

          <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}
```

‼️ 注意：当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，并让处理函数根据 `event.target.name` 的值选择要执行的操作（处理多个输入）

#### **`checkbox`\*\***单选和多选\*\*

```jsx
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isAgree: false,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "rap", isChecked: false }
      ],
      fruit: "orange"
    }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    const hobbies = this.state.hobbies.filter(item => item.isChecked).map(item => item.value)
    console.log("获取爱好: ", hobbies)
  }

  // 类似双向绑定
  // checkbox单选
  handleAgreeChange(event) {
    this.setState({ isAgree: event.target.checked })
  }

  // checkbox多选
  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({ hobbies })
  }

  render() {
    const { isAgree, hobbies, fruit } = this.state

    return (
      <div>
          {/* checkbox单选 */}
          <label htmlFor="agree">
            <input id='agree' type="checkbox" checked={isAgree}
              onChange={e => this.handleAgreeChange(e)}
            />
            同意协议
          </label>

          {/* checkbox多选 */}
          <div>
            您的爱好:
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input
                      type="checkbox"
                      id={item.value}
                      checked={item.isChecked}
                      onChange={e => this.handleHobbiesChange(e, index)}
                    />
                    <span>{item.text}</span>
                  </label>
                )
              })
            }
          </div>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}
```

#### **`select`\*\***单选和多选\*\*

```jsx
export class App extends PureComponent {

  constructor() {
    super()
    this.state = { fruit: ["orange"] }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault()
  }

  handleFruitChange(event) {
    // 单选
    this.setState({ fruit: event.target.value})

    // 多选（selectedOptions为类数组对象）
    // 方法一
    const options = Array.from(event.target.selectedOptions)
    const values = options.map(item => item.value)
    this.setState({ fruit: values })

    // 额外补充: Array.from(可迭代对象转化为数组)
    // 方法二
    const values2 = Array.from(event.target.selectedOptions, item => item.value)
    this.setState({ fruit: values2 })
  }

  render() {
    const { fruit } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          {/* select（加了multiple变为多选） */}
          <select value={fruit} onChange={e => this.handleFruitChange(e)}  multiple >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>
          <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}
```

### 非受控组件

> 一个受控组件中，表单数据是由 React 组件来管理的，另一种替代方案是使用非受控组件，这时表单数据将交由 `DOM` 节点来处理；如果要使用非受控组件中的数据，那么我们需要使用 `ref` 来从`DOM`节点中获取表单数据的值。

> 在 React 渲染生命周期时，表单元素上的 `value` 将会覆盖 DOM 节点中的值。在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 `defaultValue` 属性，而不是 `value`。在一个组件已经挂载之后去更新 `defaultValue` 属性的值，不会造成 DOM 上值的任何更新。

```jsx
export class UnControll extends Component {
  constructor (props) {
    super(props);
    this.state = { info: "Nevermore" }
    this.inputRef = React.createRef();
  }
  handleSubmit = (e) => {
    console.log('我们可以获得input内的值为', this.inputRef.current.value);
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input defaultValue={ info } ref={this.inputRef} />
        <input type="submit" value="提交" />
      </form>
    )
  }
}
```

## 高阶组件

高阶函数（Higher-order function），至少满足下列一个条件的函数

- 接受一个或多个函数作为输入
- 输出一个函数

在`React`中，高阶组件即接受一个或多个组件作为参数并且返回一个组件，本质也就是一个函数，并不是一个组件

```jsx
const EnhancedComponent = highOrderComponent(WrappedComponent);
```

上述代码中，该函数接受一个组件`WrappedComponent`作为参数，返回加工过的新组件`EnhancedComponent`（组件增强：将组件拦截后增加其它功能）

高阶组件的这种实现方式，本质上是一个装饰者设计模式（常用于封装组件的通用逻辑）。

### 使用模版

```jsx
export default (WrappedComponent) => {
  return class EnhancedComponent extends PureComponent {
    // do something
    render() {
      return <WrappedComponent />;
    }
  }
}
```

### 应用场景

#### `props`的增强

封装高阶组件

```jsx
// 定义组件: 给一些需要特殊数据的组件, 注入props
function enhancedUserInfo(OriginComponent) {
  return class NewComponent extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        userInfo: {
          // 特殊数据
          name: "nevermore",
          level: 100
        }
      }
    }

    render() {
      return <OriginComponent  {...this.props}  {...this.state.userInfo}/>
    }
  }
}
export default enhancedUserInfo
```

调用高阶组件，获取特色数据

```jsx
// 子函数式组件
const Home = enhancedUserInfo(function(props) {
  return <h1>Home: {props.name}-{props.level}-{props.banners}</h1>
})
// 父类组件
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={["轮播1", "轮播2"]}/>
      </div>
    )
  }
}
```

#### `Context`共享

多个组件使用同一个公共`context`时，利用高阶组件对`context`进行封装抽取。

定义`context`

```jsx
import { createContext } from "react"

const ThemeContext = createContext()

export default ThemeContext

```

高阶组件封装`context`

```jsx
export function withTheme(OriginComponment) {
  // function NewComponent(props) { ... }
  // return NewComponent

  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <OriginComponment {...value} {...props}/>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
```

使用`context`

```jsx
class Father extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: "red", size: 30}}>
          < Son />
        </ThemeContext.Provider>
      </div>
    )
  }
}
```

```jsx
export class Son extends PureComponent {
  render() {
    const { color, size } = this.props
    return (
      <div>
        <h2>Product: {color}-{size}</h2>
      </div>
    )
  }
}
export default withTheme(Son)

// 替换以下代码
// export class Son extends PureComponent {
//   render() {
//     return (
//       <div>
//         Son:
//         <ThemeContext.Consumer>
//           {
//             value => {
//               return <h2>theme:{value.color}-{value.size}</h2>
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }
```

#### 渲染判断登录鉴权

需求：有登录`token`就渲染`Cart`组件，否则不渲染

高阶组件登录鉴权逻辑

```jsx
export function loginAuth(OriginComponent) {
  return props => {
    // 从localStorage中获取token
    const token = localStorage.getItem("token")

    if (token) {
      return <OriginComponent {...props}/>
    } else {
      return <h2>请先登录, 再进行跳转到对应的页面中</h2>
    }
  }
}

```

组件使用

```jsx
import React, { PureComponent } from 'react'
import loginAuth from '../hoc/login_auth'

export class Cart extends PureComponent {
  render() {
    return (
      <h2>Cart Page</h2>
    )
  }
}

export default loginAuth(Cart)
```

```jsx
import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
       isLogin: false
    }
  }

  loginClick() {
    localStorage.setItem("token", "NevermoreYu")

    this.setState({ isLogin: true })
    // 强制重新渲染
    // this.forceUpdate()
  }

  render() {
    return (
      <div>
        App
        <button onClick={e => this.loginClick()}>登录</button>
        < Cart />
      </div>
    )
  }
}
```

#### 生命周期性能监控

需求：获得组件的生命周期时间

```jsx
function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }

    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(`当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`)
    }

    render() {
      return <OriginComponent {...this.props}/>
    }
  }
}
// 组件使用
export default logRenderTime(Detail)

```

## Portals 的使用

与`vue`中的`teleport`类似，将渲染的内容独立于父组件，甚至是独立于当前挂载到的 DOM 元素中（默认都是挂载到`id`为`root`的 DOM 元素上的）

API：`ReactDOM.createPortal(child,container)`

**使用**

```jsx
import { createPortal } from "react-dom"

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>App H1</h1>
        {/* 1.基本使用 */}
        {
          createPortal(<h2>App H2</h2>, document.querySelector("#why"))
        }

        {/* 2.Modal组件使用portals */}
        < Modal >
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </ Modal >
      </div>
    )
  }
}

// 通过组件使用portals
import { createPortal } from "react-dom"

export class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector("#modal"))
  }
}
```

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_rjA5pDfX0T.png)

## Fragment 的使用

在`render`中组件返回的内容总是需要包裹一个`div`的根元素，如果不希望渲染这个`div`，可以使用`Fragment`来替代，无需向 DOM 添加额外节点，不会渲染任何可见的 UI。

‼️`<>...</>`是`Fragment`的语法糖。若需要在`Fragment`中添加`key`，那么就不能使用语法糖写法。

```jsx
 render() {
    return (
      {/* 1.div原本写法 */}
      < div >
        <h2>我是App的标题</h2>
        <p>我是App的内容, 哈哈哈哈</p>
      < div />
      {/* 2.Fragment替代div写法 */}
      < Fragment >
        <h2>我是App的标题</h2>
        <p>我是App的内容, 哈哈哈哈</p>
      < Fragment />
      {/* 3.Fragment的语法糖写法 */}
      <>
        <h2>我是App的标题</h2>
        <p>我是App的内容, 哈哈哈哈</p>
      </>
    )
  }
}
```

## StrictMode 严格模式的使用

1.  识别不安全的生命周期。
2.  使用过时的`ref` API。
3.  检查意外的副作用。
    1.  这个组件的`constructor`会被调用两次。
    2.  这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用。
    3.  在生产环境中，是不会被调用两次的。
4.  使用废弃的`findDOMNode`方法。
5.  检测过时的`context` API。
    1.  早期的`Context`是通过`static`属性声明`Context`对象属性，通过`getChildContext`返回`Context`对象等方式来使用`Context`的。
