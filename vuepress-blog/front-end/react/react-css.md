# React 引入 CSS 方式

组件式开发选择合适的`css`解决方案尤为重要

通常会遵循以下规则：

- 可以编写局部 css，不会随意污染其他组件内的原生；
- 可以编写动态的 css，可以获取当前组件的一些状态，根据状态的变化生成不同的 css 样式；
- 支持所有的 css 特性：伪类、动画、媒体查询等；
- 编写起来简洁方便、最好符合一贯的 css 风格特点

在这一方面，`vue`使用`css`起来更为简洁：

- 通过 style 标签编写样式
- scoped 属性决定编写的样式是否局部有效
- lang 属性设置预处理器
- 内联样式风格的方式来根据最新状态设置和改变 css

而在`react`中，引入`CSS`就不如`Vue`方便简洁，其引入`css`的方式有很多种，各有利弊

## 方式

- 在组件内联样式
- 组件中引入 .css 文件（全局 css，样式之间会相互影响）
- 组件中引入 .module.css 文件（局部 css）
- CSS in JS

### 内联样式

直接在组件中书写`css`样式，通过`style`属性直接引入。

```js
export class App extends PureComponent {
  constructor() {
    super()
    this.state = { titleSize: 30 }
  }

  addTitleSize() {
    this.setState({ titleSize: this.state.titleSize + 2 })
  }

  render() {
    const { titleSize } = this.state
    return (
      <div>
        <button onClick={e => this.addTitleSize()}>增加titleSize</button>
        <h2 style={{color: "red", fontSize: `${titleSize}px`}}>我是标题</h2>
        <p style={{color: "blue", fontSize: "20px"}}>我是内容, 哈哈哈</p>
      </div>
    )
  }
}
```

上面可以看到，`css`属性需要转换成驼峰写法

这种方式优点：

- 内联样式, 样式之间不会有冲突
- 可以动态获取当前`state`中的状态

缺点：

- 写法上都需要使用驼峰标识
- 某些样式没有提示
- 大量的样式, 代码混乱
- 某些样式无法编写(比如伪类/伪元素）

### 组件中引入 css 文件

```css
/* App.css */
.title {
  font-size: 32px;
  color: green;
}

.content {
  font-size: 22px;
  color: orange;
}
```

```js
import React, { PureComponent } from 'react'
import "./App.css"
import Home from './home/Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内容, 哈哈哈哈</p>

        <Home/>
      </div>
    )
  }
}
```

这种方式存在不好的地方在于样式是全局生效，样式之间会互相影响

### 组件中引入 css 模块化

`css modules`并不是`React`特有的解决方案，而是所有使用了类似于`webpack`配置的环境下都可以使用的，如果在其他项目中使用它，那么我们需要自己来进行配置，比如配置`webpack.config.js`中的`modules: true`等

```js
import React, { PureComponent } from 'react'
import Home from './home/Home'
import  appStyle  from "./App.module.css"

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={ appStyle .title}>我是标题</h2>
        <p className={ appStyle .content}>我是内容, 哈哈哈哈</p>

        <Home/>
      </div>
    )
  }
}

export default App
```

这种方式能够解决局部作用域问题，但也有一定的缺陷：

- 引用的类名，不能使用连接符(.xxx-xx 如.home-title)，在 JavaScript 中是不识别的
- 所有的 className 都必须使用 {style.className} 的形式来编写
- 不方便动态来修改某些样式，依然需要使用内联样式的方式

### CSS in JS 方式

回顾：

` styled.div`` `相当于`styled.div()`函数调用（ES6 标签模版字符串）

```js
// 标签模板字符串的使用
function foo(...args) {
  console.log(args)
}

foo("why", 18, 1.88)
// 0: "why" 1: 18 2: 1.88 length: 3
foo`my name is ${name}, age is ${age}`
// 0: (3)['my name is ', ', age is ', '', raw: Array(3)] 1: "why" 2: 18 length: 3
```

CSS-in-JS， 是指一种模式，其中`CSS`由 `JavaScript`生成而不是在外部文件中定义

此功能并不是 React 的一部分，而是由第三方库提供，例如：

- `styled-components`
- `emotion`
- `glamorous`

#### `styled-components`的基本使用

本质是通过函数的调用，最终创建出一个样式组件：

- 这个组件会被自动添加上一个不重复的`class`
- `styled-components`会给该`class`添加相关的样式

创建一个`style.js`文件用于存放样式组件

```js
import styled from "styled-components"
import {  primaryColor ,  largeSize  } from "./style/variables"

// 1.基本使用
export const AppWrapper = styled.div`
  .footer {
    border: 1px solid orange;
  }
`

// 2.子元素单独抽取到一个样式组件
// 3.可以接受外部传入的props（通过${}传入一个插值函数）
// 4.可以通过attrs给标签模板字符串中提供默认属性
// 5.从一个单独的文件中引入变量
export const SectionWrapper = styled.div.attrs(props => ({
  // 提供默认样式（隐式返回x => ({ ... }) 等于 x => { return xxx; }）
  tColor: props.color || "blue"
}))`
  border: 1px solid red;

  .title {
    font-size: ${props => props.size}px;
    color: ${props => props. tColor };

    &:hover {
      background-color: purple;
    }
  }

  .content {
    font-size: ${ largeSize }px;
    color: ${ primaryColor };
  }
`
```

引入样式组件

```js
import React, { PureComponent } from 'react'
import Home from './home'
import { AppWrapper, SectionWrapper } from "./style"

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      size: 30,
      color: "yellow"
    }
  }

  render() {
    const { size } = this.state

    return (
      <AppWrapper>
        {/* 传入动态样式size */}
        <SectionWrapper size={size}>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容, 哈哈哈</p>
          <button onClick={e => this.setState({color: "skyblue"})}>修改颜色</button>
        </SectionWrapper>

        <Home/>

        <div className='footer'>
          <p>底部</p>
        </div>
      </AppWrapper>
    )
  }
}
```

通过`ThemeProvider`传递样式，获取时使用`${props => props.theme.xxx}`

```js
// index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: "purple", size: "50px" }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

#### 高级特性

支持样式的继承

```js
const MyButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`
```

```js
/* MySuccessButton继承MyButton的样式*/
const MySuccessButton = styled(MyButton)`
  background-color: green;
  color: #fff;
`
```

#### React 中添加 class

`React`中添加`class`不像`Vue`中可以直接动态绑定使用

`<div v-bind:class="[{ active: isActive }, errorClass]"></div>`

一般需要使用第三方库如`classnames`库

`npm install classnames`

使用

`<div className={classNames([{ active:isActive }, errorClass])}></div>`

```js
import classNames from 'classnames'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isbbb: true,
      isccc: true
    }
  }

  render() {
    const { isbbb, isccc } = this.state

    const classList = ["aaa"]
    if (isbbb) classList.push("bbb")
    if (isccc) classList.push("ccc")
    const classname = classList.join(" ")

    return (
      <div>
        {/* 未使用classnames库 */}
        <h2 className={`aaa ${isbbb ? 'bbb': ''} ${isccc ? 'ccc': ''}`}>哈哈哈</h2>
        <h2 className={classname}>呵呵呵</h2>
        {/* 使用classnames库 */}
        <h2 className={classNames("aaa", { bbb:isbbb, ccc:isccc })}>嘿嘿嘿</h2>
        <h2 className={classNames(["aaa", { bbb: isbbb, ccc: isccc }])}>嘻嘻嘻</h2>
      </div>
    )
  }
}
```
