# React-Router

## 前端路由的核心是什么呢？

改变 URL，但是页面不进行整体的刷新

## 是什么

`react-router`主要分成了几个不同的包：

- `react-router`: 实现了路由的核心功能
- `react-router-dom`： 基于 react-router，加入了在浏览器运行环境下的一些功能
- `react-router-native`：基于 react-router，加入了 react-native 运行环境下的一些功能
- `react-router-config`: 用于配置静态路由的工具库

## 常用 API

- `BrowserRouter`（`history`模式）、`HashRouter`（`hash`模式）
- `Route`
- `Link`、`NavLink`
- `switch`(V5)/`Routes`(V6)
- `redirect`(V5)/`Navigate`(V6)
- `useHistory`(V5)/`useNavigate`(V6)

### `BrowserRouter`和`HashRouter`

`Router`中包含了对路径改变的监听，并且会将相应的路径传递给子组件

`BrowserRouter`是`history`模式，`HashRouter`是`hash`模式(#)

使用两者作为最顶层组件包裹其他组件

```js jsx
root.render(
    // <BrowserRouter>
    <HashRouter>
        <App/>
    </HashRouter>
)
```

### `Route`

用于路径的匹配，然后进行组件的渲染，对应的属性如下：

- `path` 属性：用于设置匹配到的路径
- `component`(V5) / `element`(V6)属性：设置匹配到路径后，渲染的组件
- `render`(V5) 属性：设置匹配到路径后，渲染的内容
- `exact`(V5) 属性：开启精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件

```js jsx
// V5
<Route path="/about" component={About} exact/>
<Route path="/about" render={() => <About />} />

```

```js jsx
// V6
<Route path="/about" element={<About />} />

```

### `Link`和`NavLink`

通常路径的跳转是使用`Link`组件，最终会被渲染成`a`元素，其中属性`to`代替`a`标题的`href`属性

`NavLink`是在`Link`基础之上增加了一些样式属性，例如组件被选中时，发生样式变化，则可以设置`NavLink`的一下属性：

- `activeStyle`：活跃时（匹配时）的样式（V6 中被移除）
- `activeClassName`：活跃时添加的`class`（V6 中被移除）

```js jsx
// V5
<NavLink to="/home" activeStyle={{color: "red"}} exact>首页</NavLink>
// V6
<NavLink to="/home" style={({isActive}) => ({color: isActive ? "red": ""})}>首页</NavLink>
```

```js jsx
<Link to="/home">首页</Link>
```

### `switch`和`Routes`

- **v5：** 使用`<Switch>`组件来包裹多个路由，确保只有一个路由被渲染。
- **v6：** 使用`<Routes>`组件来包裹多个路由，并且引入了`<Outlet>`来表示子路由的渲染位置。

```js jsx
// V5
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/:userid" component={User} />
  <Route component={NoMatch} />
</Switch>

```

```js jsx
// V6
<Routes>
  <Route path='/' element={<Navigate to="/home"/>}/>
  <Route path='/home' element={<Home/>}>
    <Route path='/home' element={<Navigate to="/home/recommend"/>}/>
    <Route path='/home/recommend' element={<HomeRecommend/>}/>
  </Route>
  <Route path='/about' element={<About/>}/>
  <Route path='/detail/:id' element={<Detail/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
```

### `redirect`和`Navigate`

用于路由的重定向，当这个组件出现时，就会执行跳转到对应的`to`路径中。这里演示 V6 的`Navigate`。

```js
  render() {
    const { isLogin } = this.state
    return (
      <div>
        {/* 登录时自动跳转到home */}
        {!isLogin ? <button onClick={e => this.login()}>登录</button>: <Navigate to="/home"/>}
      </div>
    )
  }
```

```js
<Routes>
  <Route path='/' element={<Navigate to="/home"/>}/>
  <Route path='/home' element={<Home/>}>
</Routes>

```

### `useHistory`和`useNavigate`

通过 JS 代码进行跳转的两个 hook 函数，只能在函数式组件中使用。

`useHistory` hook 用于获取导航历史对象，可以用来在 React 组件中执行导航操作（V5）

```js jsx
import { useHistory } from 'react-router-dom';

function MyComponent() {
  const history = useHistory();

  const handleButtonClick = () => {
    // 使用history对象进行导航
    history.push('/new-page');
  };

  return (
    <button onClick={handleButtonClick}>Go to New Page</button>
  );
}
```

`useNavigate` hook 是 React Router v6 中引入的新 hook，用于执行导航操作。与`useHistory`不同，它返回一个函数，直接调用该函数即可执行导航。

```js jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // 直接调用navigate函数进行导航
    navigate('/new-page');
    // 重定向
    // navigate("/welcome", {replace: true});
  };

  return (
    <button onClick={handleButtonClick}>Go to New Page</button>
  );
}
```

## 基本使用

安装：`npm install react-router-dom`

### 导入 Router

`import { HashRouter } from "react-router-dom"`

### 将 Router 包裹根组件

```js
root.render(
   <StrictMode>
    <HashRouter>
        <App/>
    </HashRouter>
   </StrictMode>
)
```

### 类组件配置映射关系

`Routes`：包裹所有的`Route`，在其中匹配一个路由（Router5.x 使用的是`Switch`组件替代`Routes`）

```js
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <span>header</span>
          <div className='nav'>
            {/* NavLink可以动态的加样式
                style：传入函数，函数接受一个对象，包含isActive属性
                className：传入函数，函数接受一个对象，包含isActive属性 */}
            <NavLink to="/home" style={({isActive}) => ({color: isActive ? "red": ""})}>首页</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive?"link-active":""}>关于</NavLink>

            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
           </div>
        </div>

        <div className='content'>
          {/* 配置路由映射表，映射关系: path => Component(Router5.x) */}
          <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            < Route  path='/home' element={<Home/>}>
              {/* 路由嵌套 */}
              <Route path='/home' element={<Navigate to="/home/recommend"/>}/>
              <Route path='/home/recommend' element={<HomeRecommend/>}/>
              {/* Not Found页面配置 */}
              <Route path='*' element={<NotFound/>}/>
            </ Route >
          </Routes>
        </div>
      </div>
    )
  }
}
```

### 路由嵌套的使用及占位显示

`<Outlet>`组件用于在父路由元素中作为子路由的占位元素。

```js
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className='home-nav'>
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>
        </div>

        {/* 占位的组件 */}
        < Outlet />
      </div>
    )
  }
```

## JS 代码的路由跳转

在**函数式组件**中使用`hooks`函数的`useNavigate`来实现 js 代码的路由跳转功能。

```js
export function App(props) {
  // hooks函数必须放顶层使用，不能方法嵌套函数里面
  const navigate = useNavigate()

  function navigateTo(path) {
    // 报错
    // const navigate = useNavigate()
    navigate(path)
  }

  return (
    <div className='app'>
      <div className='header'>
        <div className='nav'>
          <button onClick={e => navigateTo("/category")}>分类</button>
          <span onClick={e => navigateTo("/order")}>订单</span>
        </div>
      </div>

      <div className='content'>
        {/* 映射关系: path => Component */}
         <Routes>
          <Route path='/category' element={<Category/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App

```

在**类组件**中利用**高阶组件**使用`hooks`函数的`useNavigate`来实现 js 代码的路由跳转功能

```js
// 使用高阶组件封装hooks
import { useNavigate } from "react-router-dom"

// 高阶组件: 函数
function withRouter(WrapperComponent) {
  return function(props) {
    const navigate = useNavigate()
    const router = { navigate }

    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter

```

```js
import { withRouter } from "../hoc"

export class Home extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className='home-nav'>
          <button onClick={e => this.navigateTo("/home/songmenu")}>歌单</button>
        </div>

        {/* 占位的组件 */}
        <Outlet/>
      </div>
    )
  }
}
export default withRouter(Home)
```

## 动态路由参数传递

调用`hooks`来进行路由参数的获取

- `useParams`
- `useLocation`
- `useSearchParams`

### params 类型

eg. `/router/123`

#### 传递`params`参数

```js
<Route path='/detail/:id' element={<Detail/>}/>
```

以下为结合`useNavigate`传递参数

```js
export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      songMenus: [
        { id: 111, name: "华语流行" },
        { id: 112, name: "古典音乐" },
        { id: 113, name: "民谣歌曲" },
      ]
    }
  }

  NavigateToDetail(id) {
    const { navigate } = this.props.router
    navigate("/detail/" + id)
  }

  render() {
    const { songMenus } = this.state

    return (
      <div>
        <h1>Home Song Menu</h1>
        <ul>
          {
            songMenus.map(item => {
              return <li key={item.id} onClick={e => this.NavigateToDetail(item.id)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default withRouter(HomeSongMenu)

```

#### 获取`params`参数

使用`useParams()`hooks 函数获取`params`参数

```js
const params = useParams()
```

### query 类型

eg. `/router?id=123`

#### 传递`query`参数

```js
<Link to="/user?name=why&age=18">用户</Link>
```

#### 获取`query`参数

```js
// 第一种方式
const location = useLocation()
console.log("location.search")
```

```js
// 第二种方式（useSearchParams返回的是一个数组）
const [searchParams] = useSearchParams()  // 通过searchParams.get('key')获取属性值
// 根据Entries创建一个对象
const query = Object.fromEntries(searchParams)
```

**以上都是在函数式组件中使用\*\***`hooks`\***\*来传递路由参数的，若想在类组件中传递路由参数，需要把\*\***`hooks`\***\*封装到高阶组件中。**

```js
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

// 高阶组件: 函数
function withRouter(WrapperComponent) {
  return function(props) {
    // 1.导航
    const navigate = useNavigate()

    // 2.获取动态路由的参数（params）: /detail/:id
    const params = useParams()

    // 3.查询字符串的参数（query）: /user?name=why&age=18
    // 第一种方式
    const location = useLocation()
    // 第二种方式（useSearchParams返回的是一个数组）
    const [searchParams] = useSearchParams()  // 通过searchParams.get('key')获取属性值
    // 根据Entries创建一个对象
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params, location, query }

    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter
```

## 路由的配置文件

```js
// 懒加载
const Login = React.lazy(() => import("../pages/Login"))
// ...

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend"/>
      },
      {
        path: "/home/recommend",
        element: <HomeRecommend/>
      }
    ]
  },
  {
    path: "/detail/:id",
    element: <Detail/>
  },
  {
    path: "/user",
    element: <User/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
]
export default routes
```

在早期的时候，Router 并且没有提供相关的 API，我们需要借助于`react-router-config`完成，在 Router6.x 中，为我们提供了`useRoutes` API 可以完成相关的配置

```js
import { useRoutes } from 'react-router-dom'

<div>{useRoutes(routes)}</div>
```

## 组件懒加载

`build`时可以分块打包文件，如果对某些组件进行了异步加载（懒加载），那么需要使用`Suspense`进行包裹

```js
const Login = React.lazy(() => import("../pages/Login"))

```

```js jsx
root.render(
   <StrictMode>
    <HashRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <App/>
      </Suspense>
    </HashRouter>
   </StrictMode>
)
```

## [官方文档](https://reactrouter.com/en/main "官方文档")
