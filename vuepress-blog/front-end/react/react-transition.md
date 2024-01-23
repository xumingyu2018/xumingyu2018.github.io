# React 过渡动画

[**文档地址**](https://reactcommunity.org/react-transition-group/ "文档地址")

在`react`中实现过渡动画效果会有很多种选择，如`react-transition-group`，`react-motion`，`Animated`，以及原生的`CSS`都能完成切换动画

## `react-transition-group`

在`react`中，`react-transition-group`是一种很好的解决方案，其为元素添加`enter`，`enter-active`，`exit`，`exit-active`这一系列勾子

可以帮助我们方便的实现组件的入场和离场动画

其主要提供了三个主要的组件：

- `CSSTransition`：在前端开发中，结合 CSS 来完成过渡动画效果
- `SwitchTransition`：两个组件显示和隐藏切换时，使用该组件
- `TransitionGroup`：将多个动画组件包裹在其中，一般用于列表中元素的动画

### `CSSTransition`

其实现动画的原理在于，当`CSSTransition`的`in`属性置为`true`时，`CSSTransition`首先会给其子组件加上`xxx-enter`、`xxx-enter-active`的`class`执行动画

当动画执行结束后，会移除两个`class`，并且添加`-enter-done`的`class`

所以可以利用这一点，通过`css`的`transition`属性，让元素在两个状态之间平滑过渡，从而得到相应的动画效果

当`in`属性置为`false`时，`CSSTransition`会给子组件加上`xxx-exit`和`xxx-exit-active`的`class`，然后开始执行动画，当动画结束后，移除两个`class`，然后添加`-enter-done`的`class`

```js
render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={e => this.setState({isShow: !isShow})}>切换</button>

        <CSSTransition
          // 解决严格模式下findDOMNode过时问题（可把严格模式去掉）
          nodeRef={this.sectionRef}
          // 触发进入或者退出状态
          in={isShow}
          // 执行退出动画结束后被移除掉
          unmountOnExit={true}
          classNames="never"
          // 过渡动画时间
          timeout={2000}
          // 是否在初次进入添加动画（需要和in同时为true）
          appear
          // 钩子函数js监听动画
          onEnter={e => console.log("开始进入动画")}
          onEntering={e => console.log("执行进入动画")}
          onEntered={e => console.log("执行进入结束")}
          onExit={e => console.log("开始离开动画")}
          onExiting={e => console.log("执行离开动画")}
          onExited={e => console.log("执行离开结束")}
        >
          <div className='section' ref={this.sectionRef}>
            <h2>哈哈哈</h2>
            <p>我是内容</p>
          </div>
        </CSSTransition>
      </div>
    )
  }
```

```css
/* 进入动画 */
.never-appear,
.never-enter {
  opacity: 0;
}

.never-appear-active,
.never-enter-active {
  opacity: 1;
  transition: opacity 2s ease;
}

/* 离开动画 */
.never-exit {
  opacity: 1;
}

.never-exit-active {
  opacity: 0;
  transition: opacity 2s ease;
}
```

### `SwitchTransition`

`SwitchTransition`可以完成两个组件之间切换的炫酷动画

比如有一个按钮需要在`on`和`off`之间切换，我们希望看到`on`先从左侧退出，`off`再从右侧进入

`SwitchTransition`中主要有一个属性`mode`，对应两个值：

- in-out：表示新组件先进入，旧组件再移除
- out-in：表示就组件先移除，新组件再进入

`SwitchTransition`组件里面要有`CSSTransition`，不能直接包裹你想要切换的组件

里面的`CSSTransition`组件不再像以前那样接受`in`属性来判断元素是何种状态，取而代之的是`key`属性。

```js
 render() {
    const { isLogin } = this.state

    return (
      <div>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={isLogin ? "exit": "login"}
            classNames="login"
            timeout={1000}
          >
            <button onClick={e => this.setState({ isLogin: !isLogin })}>
              { isLogin ? "退出": "登录" }
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
```

```css
.login-enter {
  transform: translateX(100px);
  opacity: 0;
}

.login-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 1s ease;
}

.login-exit {
  transform: translateX(0);
  opacity: 1;
}

.login-exit-active {
  transform: translateX(-100px);
  opacity: 0;
  transition: all 1s ease;
}
```

### `TransitionGroup`

当有一组动画的时候，就可将这些`CSSTransition`放入到一个`TransitionGroup`中来完成动画

同样`CSSTransition`里面没有`in`属性，用到了`key`属性

`TransitionGroup`在感知`children`发生变化的时候，先保存移除的节点，当动画结束后才真正移除

其处理方式如下：

- 插入的节点，先渲染 dom，然后再做动画
- 删除的节点，先做动画，然后再删除 dom

```js
  render() {
    const { books } = this.state

    return (
      <div>
        <h2>书籍列表:</h2>
        {/* TransitionGroup默认渲染的是div元素，可通过component来指定渲染元素 */}
        <TransitionGroup component="ul">
          {
            books.map((item, index) => {
              return (
                <CSSTransition key={item.id} classNames="book" timeout={1000}>
                  <li>
                    <span>{item.name}-{item.price}</span>
                    <button onClick={e => this.removeBook(index)}>删除</button>
                  </li>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addNewBook()}>添加新书籍</button>
      </div>
    )
  }
```

```js
.book-enter {
  transform: translateX(150px);
  opacity: 0;
}

.book-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 1s ease;
}

.book-exit {
  transform: translateX(0);
  opacity: 1;
}

.book-exit-active {
  transform: translateX(150px);
  opacity: 0;
  transition: all 1s ease;
}


```
