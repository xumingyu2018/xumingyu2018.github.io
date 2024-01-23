# 基础知识

## 开发 React 必须依赖三个库：

- `react`：包含 react 所必须的核心代码 &#x20;
- `react-dom`：react 渲染在不同平台所需要的核心代码 &#x20;
- `babel`：将 jsx 转换成 React 代码的工具

## 基本使用

注意：

- `jsx`的插值表达式: `{}`；`mustache`语法：`{{}}`
- `react`按钮绑定事件的写法：`onClick={btnClick}`；`vue`按钮绑定事件的写法：`@click="btnClick"`
- `react`不会自动重新渲染界面，需要手动调用 render 函数；`vue`会自动重新渲染界面

```js
<body>
  <div id="root"></div>

  // 引入依赖
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  // 编写React代码
  // 必须要加text/babel才能将JSX（<h2>Hello app </h2>）转化
  <script type="text/babel">
    const root = ReactDOM.createRoot(document.querySelector("#root"))

    // 1.将文本定义成变量
    let message = "Hello World"

    // 2.监听按钮的点击
    function btnClick() {
      // 1.1.修改数据
      message = "Hello React"

      // 2.重新渲染界面
      rootRender()
    }

    // 作用域提升（后面写函数定义，前面执行）
    rootRender()
    // 3.封装一个渲染函数
    function rootRender() {
      // 注意：jsx的插值表达式: {}，mustache语法：{{}}
      // react按钮绑定事件的写法：onClick={btnClick}，vue按钮绑定事件的写法：@click="btnClick"
      root.render((
        <div>
          <h2>{message}</h2>
          <button onClick={btnClick}>修改文本</button>
        </div>
      ))
    }

  </script>
</body>
```

⚠️ 错误做法：

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_-CHWmVCUTX.png)

### 组件化使用

涉及到`this`绑定问题，先看`demo`

```jsx
    // this绑定的问题
    const app = new App()
    const foo = app.btnClick
    foo(); // 默认绑定 => window => 严格模式下（只要在类里面的方法默认都是严格模式） => undefined

    function bar() {
      console.log("bar:", this);
    }
    bar() // undefine(babel转化严格模式导致，本来应该是window)
```

- 类组件需要继承`React.Component`
- 继承后需要调用父类的构造器`super()`
- 对需要绑定的方法, 提前绑定好 this：`this.btnClick = this.btnClick.bind(this)`
- 调用当前对象`this.setState()`修改值，内部原理：
  1.  将`state`中`message`值修改掉&#x20;
  2.  自动重新执行`render`函数
- 组件中渲染内容使用`render(){ return ( ... ) }`

```jsx
    // 使用组件进行重构代码
    // 类组件（继承React.Component才能变成类组件）和函数式组件
    class App extends React.Component {
      // 组件数据放到类构造器中的state中
      constructor() {
        // 继承后需要调用父类的构造器super()
        super()
        this.state = {
          message: "Hello World",
        }

        // 对需要绑定的方法, 提前绑定好this
        this.btnClick = this.btnClick.bind(this)
      }

      // 组件方法(实例方法)
      btnClick() {
        console.log(this);
        // setState内部完成了两件事情:
        // 1.将state中message值修改掉 2.自动重新执行render函数
        this.setState({
          message: "Hello React"
        })
      }

      // 渲染内容 render方法
      render() {
        return (
          <div>
            <h2>{this.state.message}</h2>
            <button onClick={this.btnClick}>修改文本</button>

             {/* <button onClick={this.btnClick.bind(this)}>修改文本</button> */}
          </div>
        )
      }
    }

    // 将组件渲染到界面上
    const root = ReactDOM.createRoot(document.querySelector("#root"))
    // App根组件
    root.render(<App/>)
```

### 计数器样例

```js
<body>
  <div id="root"></div>

  <script src="../lib/react.js"></script>
  <script src="../lib/react-dom.js"></script>
  <script src="../lib/babel.js"></script>

  <script type="text/babel">
    const root = ReactDOM.createRoot(document.querySelector("#root"))

    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          message: "Hello World",
          counter: 100
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
      }

      render() {
        const { counter } = this.state

        return (
          <div>
            <h2>当前计数: {counter}</h2>
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
          </div>
        )
      }

      // 组件的方法
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
    }

    root.render(<App/>)
  </script>
</body>
```

### 样例模版

```js
<body>
  <div id="root"></div>

  <script src="../lib/react.js"></script>
  <script src="../lib/react-dom.js"></script>
  <script src="../lib/babel.js"></script>

  <script type="text/babel">
    // 1.定义App根组件
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          message: "Hello World"
        }
      }

      render() {
        const { message } = this.state

        return (
          <div>
            <h2>{message}</h2>
          </div>
        )
      }
    }

    // 2.创建root并且渲染App组件
    const root = ReactDOM.createRoot(document.querySelector("#root"))
    root.render(<App/>)
  </script>
</body>
```

## JSX 语法

JS：`let element = "哈哈哈"`

JSX：`let element = <div>哈哈哈</div>`通过`babel`和`react`转化为`React.createElement("div",null,"哈哈哈")`

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_SFcz2A7gzp.png)

### 为什么 React 选择 JSX

React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合，他们之间是密不可分，所以 React 没有将标记分离到不同的文件中，而是将它们组合到了一起，这个地方就是组件。

- 如`UI`需要绑定事件（`button`、`a`原生等等）； &#x20;
- 如`UI`中需要展示数据状态； &#x20;
- 如在某些状态发生改变时，又需要改变`UI`

### 书写规范

1.  `jsx`结构中只能有一个根元素
2.  `jsx`结构通常会包裹一个`()`, 将整个`jsx`当做一个整体, 实现换行
3.  `jsx`可以是单标签, 也可以双标签, 但是单标签必须以`/>`结尾

### 注释写法

`{ /* JSX的注释写法 */ }`

### 内容值插入注意

- 当变量是`Number`、`String`、`Array`类型时，可以直接显示 &#x20;
- 当变量是`null`、`undefined`、`Boolean`类型时，内容为空； &#x20;
  - 如果希望可以显示`null`、`undefined`、`Boolean`，那么需要转成字符串； &#x20;
  - &#x20;转换的方式有很多，比如`toString`方法、和空字符串拼接，`String`(变量)等方式； &#x20;
- ！`Object`对象类型不能作为子元素（报错：`Objects are not valid as a React child`）如：`<h2>{Object}</h2>`

### 属性绑定

```jsx
render() {
    const { title, imgURL, href, isActive, objStyle } = this.state

    // 需求: isActive: true -> active
    // 1.class绑定的写法一: 字符串的拼接
    const className = `abc cba ${isActive ? 'active': ''}`
    // 2.class绑定的写法二: 将所有的class放到数组中
    const classList = ["abc", "cba"]
    if (isActive) classList.push("active")
    // 3.class绑定的写法三: 第三方库classnames -> npm install classnames

    return (
      <div>
        { /* 1.基本属性绑定 */ }
        <h2 title={title}>我是h2元素</h2>
        <img src={imgURL} alt=""/>
        <a href={href}>百度一下</a>


        { /* 2.绑定class属性: 最好使用className，jsx可能会把class作为关键字 */ }
        <h2 className={className}>哈哈哈哈</h2>
        <h2 className={classList.join(" ")}>哈哈哈哈</h2>


        { /* 3.绑定style属性: 绑定对象类型，注意不能写出font-size（js不支持驼峰标识） */ }
        <h2 style={{color: "red", fontSize: "30px"}}>呵呵呵呵</h2>
        <h2 style={objStyle}>呵呵呵呵</h2>
      </div>
    )
}
```

### 事件绑定

#### `this`的四种绑定规则:

1.  默认绑定 独立执行 `foo()`，`this`指向`window`，严格模式下是`undefined`
2.  隐式绑定 被一个对象执行 `obj.foo() -> obj`
3.  显式绑定: `call/apply/bind foo.call("aaa") -> String("aaa")`
4.  new 绑定: `new Foo() `-> 创建一个新对象, 并且赋值给`this`

#### 解决事件监听的 this 绑定问题（3 种方式）

- 使用`bind`给`btnClick`显示绑定`this`
- 使用 `ES6 class fields` 语法
- 事件监听时传入箭头函数（‼️）

```js
 <script type="text/babel">

    // 1.定义App根组件
    class App extends React.Component {
      // class fields
      name = "App"

      constructor() {
        super()
        this.state = {
          message: "Hello World",
          counter: 100
        }

        this.btn1Click = this.btn1Click.bind(this)
      }

      btn1Click() {
        console.log("btn1Click", this);
        // 此处this指向undefine
        this.setState({ counter: this.state.counter + 1 })
      }

      btn2Click = () => {
        console.log("btn2Click", this)
        this.setState({ counter: 1000 })
      }

      btn3Click() {
        console.log("btn3Click", this);
        this.setState({ counter: 9999 })
      }

      render() {
        const { message } = this.state

        return (
          <div>
            {/* 1.this绑定方式一: bind绑定 this.btn1Click只是引用不是调用（即不是隐式绑定），从而引起btn1Click是默认绑定，独立执行*/}
            <button onClick={this.btn1Click}>按钮1</button>

            {/* 2.this绑定方式二: ES6 class fields */}
            <button onClick={this.btn2Click}>按钮2</button>

            {/* 3.this绑定方式三: 直接传入一个箭头函数(重要) */}
            <button onClick={() => this.btn3Click()}>按钮3</button>

            <h2>当前计数: {this.state.counter}</h2>
          </div>
        )
      }
    }

    // 2.创建root并且渲染App组件
    const root = ReactDOM.createRoot(document.querySelector("#root"))
    root.render(<App/>)
  </script>
```

#### 原理（为什么是 undefine）

```jsx
    const obj = {
      name: "obj",
      foo: function() {
        console.log("foo:", this)
      }
    }
    // 隐式绑定，foo的this指向obj
    obj.foo()

    // 类比于react的事件绑定(未执行this.btn1Click = this.btn1Click.bind(this))，this指向undefined（对应this绑定方式一）
    const config = {
      onClick: obj.foo
    }

    const click = config.onClick
    // click指向foo，即click()相当于foo()，foo的this指向为window，严格模式下是undefined（默认绑定）
    click()

    // 类比于react的事件绑定(已执行this.btn1Click = this.btn1Click.bind(this))，this指向obj（对应this绑定方式一）
    const config1 = {
      onClick: obj.foo.bind(obj)
    }

    const click1 = config.onClick
    click1()
```

#### 事件参数传递

```jsx
render(){
  return (
    <div>
       <button onClick={(event) => this.btnClick(event, "why", 18)}>按钮</button>
       <button onClick={this.btnClick.bind(this, "kobe", 30)}>按钮(不推荐)</button>{/* "kobe"会放在第一个参数,30放在第二个参数，event放在第三个参数 */}
    </div>
  )
}
btnClick(event, name, age) {
    console.log("btnClick:", event, this)
    console.log("name, age:", name, age)
}

```

```jsx
{/* 2.额外的参数传递（为什么"kobe"会放在第一个参数,30放在第二个参数，event在第三个参数） */}
 function foo(name, age, height) {}
 const bar = foo.bind("aaa", "kobe", 30)
 bar("event")

 结果：name: kobe, age: 30, height: event
```

#### 事件绑定案例

点击某个`li`高亮显示

```js
 <script type="text/babel">
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          movies: ["星际穿越", "盗梦空间", "大话西游", "流浪地球"],
          currentIndex: 0
        }
      }

      itemClick(index) {
        this.setState({ currentIndex: index })
      }

      render() {
        const { movies, currentIndex } = this.state

        return (
          <div>
            <ul>
              {
                movies.map((item, index) => {
                  return (
                    <li
                      className={ currentIndex === index ? 'active': '' }
                      key={item}
                      onClick={() => this.itemClick(index)}
                    >
                      {item}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
    }

    const root = ReactDOM.createRoot(document.querySelector("#root"))
    root.render(<App/>)
  </script>
```

### 条件渲染

使用原生`if`进行条件判断。

```jsx
  render() {
    const { isReady, friend } = this.state

    // 1.条件判断方式一: 使用if进行条件判断
    let showElement = null
    if (isReady) {
      showElement = <h2>准备开始比赛吧</h2>
    } else {
      showElement = <h1>请提前做好准备!</h1>
    }

    return (
      <div>
        {/* 1.方式一: 根据条件给变量赋值不同的内容 */}
        <div>{showElement}</div>

        {/* 2.方式二: 三元运算符 */}
        <div>{ isReady ? <button>开始战斗!</button>: <h3>赶紧准备</h3> }</div>

        {/* 3.方式三: &&逻辑与运算 */}
        {/* 场景: 当某一个值, 有可能为undefined时, 使用&&进行条件判断 */}
        <div>{ friend && <div>{friend.name + " " + friend.desc}</div> }</div>
      </div>
    )
  }
```

### 列表渲染

使用`map`高阶函数进行列表渲染。

```js
<script type="text/babel">
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          students: [
            { id: 111, name: "why", score: 199 },
            { id: 112, name: "kobe", score: 98 },
            { id: 113, name: "james", score: 199 },
            { id: 114, name: "curry", score: 188 },
          ]
        }
      }

      render() {
        const { students } = this.state

        return (
          <div>
            <h2>学生列表数据</h2>
            <div className="list">
              {
                students.filter(item => item.score > 100).slice(0, 2).map(item => {
                  return (
                    <div className="item" key={item.id}>
                      <h2>学号: {item.id}</h2>
                      <h3>姓名: {item.name}</h3>
                      <h1>分数: {item.score}</h1>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    }

    const root = ReactDOM.createRoot(document.querySelector("#root"))
    root.render(<App/>)
  </script>
```

### JSX 本质和原理

通过`React.createElement`创建`ReactElement`对象树

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_DPL_xpkrem.png)

#### 虚拟 Dom 的作用

- 在更新数据时，不需要重新渲染（`diff`算法）
- 跨平台
- 从命令式编程转到声明式编程

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_Yvibc4VPeY.png)

### 购物车案例

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_-83tryo0eA.png)

```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        books: books,
      };
    }

    getTotalPrice() {
      // reduce:迭代遍历数组
      const totalPrice = this.state.books.reduce((preValue, item) => {
        return preValue + item.count * item.price;
      }, 0);
      return totalPrice;
    }

    changeCount(index, count) {
      const newBooks = [...this.state.books];
      newBooks[index].count += count;
      this.setState({ books: newBooks });
    }

    removeItem(index) {
      const newBooks = [...this.state.books];
      // splice:从index开始，删除一条数据
      newBooks.splice(index, 1);
      this.setState({ books: newBooks });
    }

    renderBookList() {
      const { books } = this.state;

      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {books.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{formatPrice(item.price)}</td>
                    <td>
                      <button
                        disabled={item.count <= 1}
                        onClick={() => this.changeCount(index, -1)}
                      >
                        -
                      </button>
                      {item.count}
                      <button onClick={() => this.changeCount(index, 1)}>
                        +
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.removeItem(index)}>
                        删除
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2>总价格: {formatPrice(this.getTotalPrice())}</h2>
        </div>
      );
    }

    renderBookEmpty() {
      return (
        <div>
          <h2>购物车为空, 请添加书籍~</h2>
        </div>
      );
    }

    render() {
      const { books } = this.state;
      return books.length ? this.renderBookList() : this.renderBookEmpty();
    }
  }
```
