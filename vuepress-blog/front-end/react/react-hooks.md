# React Hooks

## 为什么需要 hooks?

首先需要分别讲述 hooks 之前类组件和函数式组件存在的缺陷。

### 函数式组件缺陷

1.  class 组件可以定义自己的 state，用来保存组件自己内部的状态
    - 函数式组件不可以，因为函数每次调用都会产生新的临时变量；
2.  &#x20;class 组件有自己的生命周期，我们可以在对应的生命周期中完成自己的逻辑
    - 比如在 componentDidMount 中发送网络请求，并且该生命周期函数只会执行一次
    - 函数式组件在学习 hooks 之前，如果在函数中发送网络请求，意味着每次重新渲染都会重新发送一次网络请求
3.  class 组件可以在状态改变时只会重新执行 render 函数以及我们希望重新调用的生命周期函数 componentDidUpdate 等
    - 函数式组件在重新渲染时，整个函数都会被执行，似乎没有什么地方可以只让它们调用一次

### 类组件缺陷

1.  复杂组件变得难以理解
    - 我们在最初编写一个 class 组件时，往往逻辑比较简单，并不会非常复杂。但是随着业务的增多，我们的 class 组件会变得越来越复杂
    - 比如 componentDidMount 中，可能就会包含大量的逻辑代码：包括网络请求、一些事件的监听（还需要在 componentWillUnmount 中移除）
    - 而对于这样的 class 实际上非常难以拆分：因为它们的逻辑往往混在一起，强行拆分反而会造成过度设计，增加代码的复杂度
2.  难以理解的 class
    - 很多人发现学习 ES6 的 class 是学习 React 的一个障碍
    - 比如在 class 中，我们必须搞清楚 this 的指向到底是谁，所以需要花很多的精力去学习 this
    - 虽然我认为前端开发人员必须掌握 this，但是依然处理起来非常麻烦
3.  组件复用状态很难
    - 在前面为了一些状态的复用我们需要通过高阶组件像我们之前学习的 redux 中 connect 或者 react-router 中的 withRouter，这些高阶组件设计的目的就是为了状态的复用
    - 或者类似于 Provider、Consumer 来共享一些状态，但是多次使用 Consumer 时，我们的代码就会存在很多嵌套，这些代码让我们不管是编写和设计上来说，都变得非常困难

`Hook` 是 React 16.8 的新增特性。它可以让你在不编写 `class` 的情况下使用 `state` 以及其他的 `React` 特性，它可以完全向下兼容。

## 类组件和函数式组件对比

**类组件**

```js
import React, { PureComponent } from 'react'

export class CounterClass extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>当前计数: {counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.decrement()}>-1</button>
      </div>
    )
  }
}

export default CounterClass
```

**使用\*\***`hook`\***\*的函数式组件**

```js
import { memo, useState } from "react";

// 普通的函数, 里面不能使用hooks
// 在自定义的hooks中, 可以使用react提供的其他hooks: 必须使用use开头
// function useFoo() {
//   const [ message ] = useState("Hello World")
//   return message
// }

function CounterHook(props) {
  // useState返回的是一个数组（第一个参数：状态；第二个参数：函数），当使用第二个参数改变状态时，组件会保存改变后的状态并重新渲染
  // 数组的解构
  // 只能在函数最外层调用Hook，不要在循环、条件判断或者子函数中调用
  const [counter, setCounter] = useState(0)
  const [name] = useState("why")
  console.log(name)

  // const message = useFoo()

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(counter+1)}>+1</button>
      <button onClick={e => setCounter(counter-1)}>-1</button>
    </div>
  )
}

export default memo(CounterHook)

```

## hooks API

[**官方文档**](https://zh-hans.legacy.reactjs.org/docs/hooks-reference.html "官方文档")

`Hook` 就是 `JavaScript` 函数，这个函数可以帮助你钩入（hook into） `React State`以及生命周期等特性

⚠️**注意**

1.  只能在函数最外层调用 `Hook`。不要在循环、条件判断或者子函数中调用
2.  只能在 `React` 的函数组件中调用 `Hook`。不要在其他 `JavaScript` 函数中调用

### `useState`

```js
function CounterHook(props) {
  // useState返回的是一个数组（第一个参数：状态；第二个参数：函数），当使用第二个参数改变状态时，组件会保存改变后的状态并重新渲染
  // 数组的解构
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(counter+1)}>+1</button>
    </div>
  )
}

export default memo(CounterHook)

```

在函数组件中通过`useState`实现函数内部维护`state`，参数为`state`默认的值，如果不设置为`undefined`，返回值是一个数组包含两个元素，第一个值为当前状态的值`state`，第二个值为更新`state`的函数。

点击`button`按钮后，会完成两件事情

- 调用`setCount`，设置一个新的值
- 组件重新渲染，并且根据新的值返回 DOM 结构

该函数组件等价于的类组件如下：

```js
export class CounterHook extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>当前计数：{this.state.count}</p >
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
      </div>
    );
  }
}
```

从上述两种代码分析，可以看出两者区别：

- `state`声明方式：在函数组件中通过 `useState` 直接获取，类组件通过`constructor` 构造函数中设置
- `state`读取方式：在函数组件中直接使用变量，类组件通过`this.state.count`的方式获取
- `state`更新方式：在函数组件中通过 `setCount` 更新，类组件通过`this.setState()`

总的来讲，`useState` 使用起来更为简洁，减少了`this`指向不明确的情况

### `useEffect`

- 参数一：执行的回调函数
- 参数二：该`useEffect`在哪些`state`发生变化时，才重新执行（受谁的影响）

`useEffect`可以让我们完成一些类似于`class`中生命周期的功能。事实上，类似于网络请求、手动更新 DOM、一些事件的监听，都是 React 更新 DOM 的一些副作用，所以它可以让我们在函数组件中进行一些带有副作用的操作。

```js
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }

    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p >
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
        </div>
      );
    }
  }

```

从上面可以看见，组件在加载和更新阶段都执行同样操作

而如果使用`useEffect`后，则能够将相同的逻辑抽离出来，这是类组件不具备的方法

对应的`useEffect`示例如下：

```js
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
      // 当前传入的回调函数会在组件被渲染完成后, 自动执行
      // 网络请求/DOM操作(修改标题)/事件监听（副作用）
      document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p >
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );

}
```

`useEffect`第一个参数接受一个**回调函数**，默认情况下，无论是第一次渲染之后，还是每次更新之后，都会执行这个回调函数，相当于在`componentDidMount`和`componentDidUpdate`两个生命周期函数中执行回调、

#### ⚠️**清除机制**

回调函数中可以返回一个清除函数（回调函数），这是`effect`可选的清除机制，相当于类组件中`componentwillUnmount`生命周期函数，可做一些清除副作用的操作，如下：

```js
  // 可以使用多个Effect进行逻辑分离
  useEffect(() => {
    // 订阅事件
    // const unsubscribe = store.subscribe(() => {
    // })
    console.log("监听redux中数据变化, 监听eventBus中的why事件")

    // 返回值: 回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
      // 取消订阅
      // ununsubscribe()
      console.log("取消监听redux中数据变化, 取消监听eventBus中的why事件")
    }
  })
```

#### ⚠️**性能优化**

如果某些特定值在两次重渲染之间没有发生变化，你可以跳过对 effect 的调用，这时候只需要传入第二个参数，如下：

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新

useEffect(() => {
  console.log("发送网络请求, 从服务器获取数据")

  return () => {
    console.log("会在组件被卸载时, 才会执行一次")
  }
}, []) // 谁的影响都不受，仅执行一次

```

上述传入第二个参数后，如果 `count` 的值是 `5`，而且我们的组件重渲染的时候 `count` 还是等于 `5`，React 将对前一次渲染的 `[5]` 和后一次渲染的 `[5]` 进行比较，如果是相等则跳过`effects`执行

所以， `useEffect`相当于`componentDidMount`，`componentDidUpdate` 和`componentWillUnmount` 这三个生命周期函数的组合

### `useContext`

在之前的开发中，我们要在组件中使用共享的 Context 有两种方式

1.  类组件可以通过 `类名.contextType = MyContext`方式，在类中获取`this.context`
2.  多个`Context`或者在函数式组件中通过 `MyContext.Consumer` 方式共享`context`

现在，在函数式组件中可以通过`useContext()`直接获取到`context`

下面是之前的方式获取`context`：

```js
root.render(
  <UserContext.Provider value={{name: "never", level: 99}}>
    <ThemeContext.Provider value={{color: "red", size: 30}}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContext.Provider>
  </UserContext.Provider>
);
```

```js
function App() {
  return <div>
    {/* 函数式组件中使用Context共享的数据 */}
    <ThemeContext.Consumer>
      {
        value => {
          return
            <h2 style={{color: value.color, fontSize: value.size}}>
              <UserContext.Consumer>
               {
                  value => {
                    return ...
                  }
               }
              </UserContext..Consumer>
            </h2>
        }
      }
    </ThemeContext.Consumer>
  </div>
}
```

使用`useContext`获取的方式如下：

```js
import React, { memo, useContext } from 'react'
import { UserContext, ThemeContext } from "./context"

const App = memo(() => {
  // 使用Context
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2>User: {user.name}-{user.level}</h2>
      <h2 style={{color: theme.color, fontSize: theme.size}}>Theme</h2>
    </div>
  )
})
```

### `useReducer`

`useReducer`仅仅是`useState`的一种替代方案

在某些场景下，如果`state`的处理逻辑比较复杂，我们可以通过`useReducer`来对其进行拆分，或者这次修改的`state`需要依赖之前的`state`时，也可以使用

使用方式

```js
import React, { memo, useReducer } from 'react'

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 }
    case "decrement":
      return { ...state, counter: state.counter - 1 }
    case "add_number":
      return { ...state, counter: state.counter + action.num }
    case "sub_number":
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

// useReducer+Context => redux

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, friends: [], user: {} })

  // useReducer替代以下
  // const [counter, setCounter] = useState()
  // const [friends, setFriends] = useState()
  // const [user, setUser] = useState()

  return (
    <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
      <button onClick={e => dispatch({type: "add_number", num: 5})}>+5</button>
      <button onClick={e => dispatch({type: "sub_number", num: 5})}>-5</button>
      <button onClick={e => dispatch({type: "add_number", num: 100})}>+100</button>
    </div>
  )
})
```

所以，`useReducer`只是`useState`的一种替代品，并不能替代`Redux`

### `useCallback`

**性能优化**

`useCallback`会返回一个回调**函数**的记忆值（这点与`useMemo`不同），在依赖不变的情况下，多次定义的时候，返回的值是相同的。当需要将一个函数传递给子组件时, 最好使用`useCallback`进行优化, 将优化之后的函数, 传递给子组件（**使用\*\***`useCallback`\***\*定义一个函数传递给子组件时才能带来性能优化**）

使用方法

```js
const Home = memo(function(props) {
  const { increment } = props
  console.log("Home被渲染")
  return (
    <div>
      <button onClick={increment}>increment+1</button>
      {/* 100个子组件 */}
    </div>
  )
})

const App = memo(function() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("hello")

  // 缺陷一：闭包陷阱: useCallback（虽然不重新渲染了，但是count值不会变化）
  const increment1 = useCallback(function foo() {
    console.log("increment")
    setCount(count+1)
  }, [])

  // 缺陷二：只有当父组件的count发生改变后，函数foo就会重新定义，子组件就要重新渲染
  const increment2 = useCallback(function foo() {
    console.log("increment1")
    setCount(count+1)
  }, [count])

  // 普通函数缺陷：父组件count没变化，只改变message，Home子组件还是会重新渲染，因为increment3函数被重新定义
  const increment3 = () => {
    setCount(count+1)
  }

  return (
    <div>
      <h2>计数: {count}</h2>
      <button onClick={increment}>+1</button>

      {/* 当父组件app的message变化时，父组件重新渲染，increment重新定义，若不是用useCallback，Home组件中props发生变化，因此也会重新渲染 */}
      <Home increment={increment}/>

      <h2>message:{message}</h2>
      <button onClick={e => setMessage(Math.random())}>修改message</button>
    </div>
  )
})
```

结合`useRef`可以解决缺陷一闭包陷阱问题

```js
  // 进一步的优化: 当count发生改变时, 也使用同一个函数(了解)
  // 做法一: 将count依赖移除掉, 缺点: 闭包陷阱
  // 做法二: useRef, 在组件多次渲染时, 返回的是同一个值
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(function foo() {
    console.log("increment")
    setCount(countRef.current + 1)
  }, [])
```

### `useMemo`

**性能优化**

`useMemo`返回的是函数**值**的记忆值，在依赖不变的情况下，多次定义的时候，返回的值是相同的。

使用方法

```js
// 子组件
const Child = memo(function(props) {
  console.log("Child被渲染~")
  return <h2>Hello World</h2>
})


// 目标：优化复杂计算逻辑
function calcNumTotal(num) {
  console.log("calcNumTotal的计算过程被调用~")
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 0.普通使用，无优化（count变化时，组件重新渲染，calcNumTotal重新计算）
  const result = calcNumTotal(50)

  // 1.进行大量计算操作且不依赖任何值时，使用useMemo进行优化（calcNumTotal不会重新计算）
  const result = useMemo(() => {
    return calcNumTotal(50)
  }, [])

  // 2.依赖count（count发生变化重新渲染）
  const result = useMemo(() => {
    return calcNumTotal(count*2)
  }, [count])

  // 3.使用useMemo对子组件传递相同的对象（非对象的话是没有优化的）时进行优化
  // 改变count时，子组件传递的对象依旧会重新渲染
  const info = { name: "why", age: 18 }
  // 改变count时，子组件传递的对象不会重新渲染
  const info = useMemo(() => ({name: "why", age: 18}), [])

  return (
    <div>
      <h2>计算结果: {result}</h2>
      <h2>计数器: {count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>

      <Child result={result} info={info} />
    </div>
  )
})
```

因此，`useCallback(fn, [])`等于`useMemo(() => fn, [])`

### `useRef`

`useRef`返回一个`ref`对象，返回的`ref`对象再组件的整个生命周期保持不变

- 用法一：引入 DOM（或者组件，但是需要是 class 组件）元素

```js
import React, { memo, useRef } from 'react'

const App = memo(() => {
  const inputRef = useRef()

  function handleDom() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleDom}>input的dom聚焦</button>
    </div>
  )
})

```

- 用法二：保存一个数据，这个对象在整个生命周期中可以保存不变（可以解决闭包陷阱），如上 useCallback 中的优化

```js
 // 通过useRef解决闭包陷阱
  const countRef = useRef()
  countRef.current = count

  const increment = useCallback(() => {
    setCount(countRef.current + 1)
  }, [])
```

### `useImperativeHandle`

应用场景

在通过`forwardRef`可以将`ref`转发到子组件，子组件拿到父组件中创建的`ref`，绑定到自己的某一个元素中，虽然`forwardRef`的做法本身没有什么问题，但是我们是将子组件的 DOM 直接暴露给了父组件父组件可以拿到 DOM 后进行任意的操作，我们只是希望父组件可以操作的`focus`，其他并不希望它随意操作。如下所示

```js
import React, { memo, useRef, forwardRef } from 'react'

const Child = memo(forwardRef((props, ref) => {
  return <input type="text" ref={inputRef}/>
}))


const App = memo(() => {
  const inputRef = useRef()

  function handleDOM() {
    inputRef.current.focus()
    // 操作了除了focus以外的其他操作
    inputRef.current.value = ""
  }

  return (
    <div>
      <Child ref={inputRef}/>
      <button onClick={handleDOM}>DOM操作</button>
    </div>
  )
})
```

使用`useImperativeHandle`方法对其进行限制

```js
import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'

const Child = memo(forwardRef((props, ref) => {
  const inputRef = useRef()

  // 子组件对父组件传入的ref进行处理（父组件只能调用子组件暴露的操作Dom的方法）
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus()
      },
    }
  })

  return <input type="text" ref={inputRef}/>
}))


const App = memo(() => {
  const inputRef = useRef()

  function handleDOM() {
    inputRef.current.focus()
    // 调用不了，只能调用子组件暴露的方法（通常在封装一些库时使用）
    inputRef.current.value = ""
  }

  return (
    <div>
      <Child ref={inputRef}/>
      <button onClick={handleDOM}>DOM操作</button>
    </div>
  )
})

```

### `useLayoutEffect`

`useLayoutEffect`看起来和`useEffect`非常的相似，事实上他们也只有一点区别而已：

- `useEffect`会在渲染的内容更新到 DOM 上后执行，不会阻塞 DOM 的更新
- `useLayoutEffect`会在渲染的内容更新到 DOM 上**之前**执行，会阻塞 DOM 的更新

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_UF0jjh4DQs.png)

```js
const App = memo(() => {
  const [count, setCount] = useState(0)

  // 第三步
  useEffect(() => {
    console.log("useEffect")
  })

  // 第二步
  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })

  // 第一步
  console.log("App render")

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})
```

### `useId`

`useId` 是一个用于生成横跨服务端和客户端的稳定的唯一 `ID` 的同时避免 `hydration` 不匹配的 `hook`

- `useId`是用于`react`的`SSR`同构应用开发的，前端的`SPA`页面并不需要使用它
- `useId`可以保证应用程序在客户端和服务器端生成唯一的`ID`，这样可以有效的避免通过一些手段生成的`Id`不一致，造成 `hydration` `mismatch`（详情看其它里的`SSR`同构应用）

```js
const App = memo(() => {
  const [count, setCount] = useState(0)
  const id = useId()

  return (
    <div>
      <button onClick={e => setCount(count+1)}>count+1:{count}</button>
      <label htmlFor={id}>
        用户名:<input id={id} type="text" />
      </label>
    </div>
  )
})
```

### `useTransition`

告诉 react 对于某部分任务的更新优先级较低，可以稍后进行更新。

需求：输入或者删除输入框（更新优先级高）中文本后进行列表渲染（更新优先级低）

```js
import React, { memo, useState, useTransition } from 'react'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  const [ pending, startTransition ] = useTransition()

  function valueChangeHandle(event) {
    // 延迟处理
    startTransition(() => {
      const keyword = event.target.value
      const filterShowNames = namesArray.filter(item => item.includes(keyword))
      setShowNames(filterShowNames)
    })
  }

  return (
    <div>
      {/* 先处理输入框的变化 */}
      <input type="text" onInput={valueChangeHandle}/>
      <h2>用户名列表: {pending && <span>data loading</span>} </h2>
      <ul>
        {
          showNames.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App

```

### `useDeferredValue`

接受一个值，并返回该值的新副本，该副本将推迟到更紧急地更新之后，与`useTransition`相似，但没有`loading`。

```js
import React, { memo, useState, useDeferredValue } from 'react'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  const deferedShowNames = useDeferredValue(showNames)

  function valueChangeHandle(event) {
    const keyword = event.target.value
    const filterShowNames = namesArray.filter(item => item.includes(keyword))
    setShowNames(filterShowNames)
  }

  return (
    <div>
      <input type="text" onInput={valueChangeHandle}/>
      <h2>用户名列表: </h2>
      <ul>
        {
          deferedShowNames.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})
```

## 自定义 hook

> 自定义`Hooks`在形式上其实非常简单，就是声明一个名字以`use`开头的函数，比如`useCounter`。这个函数在形式上和普通函数没有区别，你可以传递任意参数给这个`Hooks`。但是要注意，`Hooks`和普通函数在语义化上是由区别的，就在于函数没有用到其他`Hooks`。什么意思呢？就是说如果你创建了一个 `useXXX` 的函数，但是内部并没有用任何其它 `Hooks`，那么这个函数就不是一个 `Hook`，而只是一个普通的函数。但是如果用了其它 `Hooks` ，那么它就是一个 `Hook`。

```js
import { useState, useCallback }from 'react';

function useCounter() {
  // 定义 count 这个 state 用于保存当前数值
  const [count, setCount] = useState(0);
  // 实现加 1 的操作
  const increment = useCallback(() => setCount(count + 1), [count]);
  // 实现减 1 的操作
  const decrement = useCallback(() => setCount(count - 1), [count]);
  // 重置计数器
  const reset = useCallback(() => setCount(0), []);

  // 将业务逻辑的操作 export 出去供调用者使用
  return { count, increment, decrement, reset };
}
```

```js
import React from 'react';

function Counter() {
  // 调用自定义 Hook
  const { count, increment, decrement, reset } = useCounter();

  // 渲染 UI
  return (
    <div>
      <button onClick={decrement}> - </button>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={reset}> reset </button>
    </div>
  );
}
```

**应用场景**

1.  抽离业务逻辑层
2.  封装通用逻辑
3.  监听浏览器状态
4.  拆分复杂组件

## Redux 中的 hooks

在之前的`redux`开发中，为了让组件和`redux`结合起来，我们使用了`react-redux`中的`connect`，但是这种方式必须使用高阶函数结合返回的高阶组件，并且必须编写：`mapStateToProps`和 `mapDispatchToProps`映射的函数。

⚠️ 现在可以使用`redux`中的`hooks`，分别是`useSelector`和`useDispatch`替代`mapStateToProps`和`mapDispatchToProps`。

### `useSelector`

从`redux`的`store`对象中提取数据(`state`)

- 参数一：将`state`映射到需要的数据中
- 参数二（**性能优化**）：可以使用`shallowEqual`进行比较来决定是否组件重新渲染（默认监听的是整个`state`，只要一个发生变化，就得重新渲染）

```js
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }),  shallowEqual )
```

### `useDispatch`

返回`Redux` `store`中对`dispatch`函数的引用，可以直接派发`action`

**使用方法**

计算器案例（详细看 redux 中的笔记）

```js
import React, { memo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo((props) => {
  // 1.使用useSelector将redux中store的数据映射到组件内
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }))

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()

  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(6)}>+6</button>
      <button onClick={e => addNumberHandle(6, false)}>-6</button>
    </div>
  )
})

export default App

```

以下是与类组件中使用`connect`高阶组件的区别

```js
import React, { memo } from 'react'
import { connect } from "react-redux"
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo((props) => {
  const { count, addNumber, subNumber } = props

  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      addNumber(num)
    } else {
      subNumber(num)
    }
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(6)}>+6</button>
      <button onClick={e => addNumberHandle(6, false)}>-6</button>
    </div>
  )
})

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  },
  subNumber(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

```
