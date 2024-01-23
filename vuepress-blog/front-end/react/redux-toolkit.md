# Redux Toolkit

安装：`npm install @reduxjs/toolkit`

这个工具是对 redux 的一个封装，将原先的四个文件简化（RTK）。

## 核心 API

- `configureStore`：包装`createStore`以提供简化的配置选项和良好的默认值。它可以自动组合你的多个`reducer`，添加你提供的任何 `Redux` 中间件，`redux-thunk`默认包含，并启用 `Redux DevTools Extension`
- `createSlice`：接受`reducer`函数的对象、切片名称和初始状态值，并自动生成切片`reducer`，并带有相应的`actions`
- `createAsyncThunk`: 接受一个动作类型字符串和一个返回承诺的函数，并生成一个`pending/fulfilled/rejected`基于该承诺分派动作类型的 `thunk` &#x20;

## `configureStore`

`configureStore`主要包含如下几个参数：

- `reducer`，将`slice`中的`reducer`可以组成一个对象传入此处
- `middleware`：可以使用参数，传入其他的中间件
- `devTools`：是否配置`devTools`工具，默认为`true`

使用方法

```js
// index.js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    xxx: xxxReducer
  }
})

export default store
```

## `createSlice`

`createSlice`主要包含如下几个参数：

- `name`：用户标记`slice`的名词
  - 在之后的`redux-devtool`中会显示对应的名词
- `initialState`：初始化值
  - 第一次初始化时的值&#x20;
- `reducers`：相当于之前的 reducer 函数
  - 对象类型，并且可以添加很多的函数
  - &#x20;函数类似于`redux`原来`reducer`中的一个`case`语句&#x20;
  - 函数的参数：
    - 参数一：`state`
    - 参数二：调用这个`action`时，传递的`action`参数

使用方法

```js
// store/features/counter.js
import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 888
  },
  reducers: {
    // 相当于case actionTypes.ADD_NUMBER: return { ...state, counter: state.counter + action.num }
    addNumberRTK(state, { payload }) {
      // 不需要拷贝，底层自动创建新的state
      state.counter = state.counter + payload
    },
    subNumberRTK(state, { payload }) {
      state.counter = state.counter - payload
    }
  }
})

export const {  addNumberRTK ,  subNumberRTK  } = counterSlice.actions
export default counterSlice.reducer
```

组件中使用 counter

```js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumberRTK, addNumberRTK } from '../store/features/counter'

export class Children extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num)
  }

  addNumber(num) {
    this.props.addNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Page Counter: {counter}</h2>
        <button onClick={e => this.subNumber(5)}>-5</button>
        <button onClick={e => this.addNumber(8)}>+8</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})

const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumberRTK(num))
  },
  addNumber(num) {
    dispatch(addNumberRTK(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
```

## `createAsyncThunk`

`Redux Toolkit`默认继承了`redux-thunk`相关的功能，使用`createAsyncThunk`让`dispatch`中可以进行异步操作。

当`createAsyncThunk`创建出来的`action`被`dispatch`时，会存在三种状态： &#x20;

- `pending`：`action`被发出，但是还没有最终的结果
- `fulfilled`：获取到最终的结果（有返回值的结果）
- `rejected`：执行过程中有错误或者抛出了异常

使用方法（2 种）

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidataAction = createAsyncThunk("fetch/homemultidata", async () => {
    // 1.发送网络请求, 获取数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")

    // 2.返回结果, 那么action状态会变成fulfilled状态
    return res.data
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
  // 方法一
  extraReducers: {
  // 计算属性名
    [fetchHomeMultidataAction.pending](state, action) {
      console.log("fetchHomeMultidataAction pending")
    },
    [fetchHomeMultidataAction.fulfilled](state, { payload }) {
      // 将请求的异步数据放入state
      state.banners = payload.data.banner.list
      state.recommends = payload.data.recommend.list
    },
    [fetchHomeMultidataAction.rejected](state, action) {
      console.log("fetchHomeMultidataAction rejected")
    }
  }
})
```

`extraReducers` 选项是一个接收名为 `builder` 的参数的函数。`builder` 对象提供了一些方法，让我们可以定义额外的 `case reducer`，这些 `reducer` 将响应在 `slice` 之外定义的 `action`。我们将使用 `builder.addCase(actionCreator, reducer)` 来处理异步 `thunk` `dispatch` 的每个 `action`。

```js
  // 方法二（switch-case链式调用）
  extraReducers: (builder) => {
     builder.addCase(fetchHomeMultidataAction.pending, (state, action) => {
       console.log("fetchHomeMultidataAction pending")
     }).addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
       state.banners = payload.data.banner.list
       state.recommends = payload.data.recommend.list
     })
  }
```

组件内调用

```js
import { connect } from "react-redux"
import { fetchHomeMultidataAction } from '../store/features/home'

// ...
const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
```

也可以通过`createAsyncThunk("xxx", async(extraInfo, store) => {})`传入第二个`store`参数来调用`dispatch`达到上述效果。

```js
export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata",
  async (extraInfo, store) => {
    console.log(extraInfo, store.dispatch, store.getState)
    // 1.发送网络请求, 获取数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")

    // 2.取出数据, 并且在此处直接dispatch操作(可以不做)
    const banners = res.data.data.banner.list
    const recommends = res.data.data.recommend.list
    store.dispatch(changeBanners(banners))
    store.dispatch(changeRecommends(recommends))

    // 3.返回结果, 那么action状态会变成fulfilled状态
    return res.data
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer

```

## 为什么使用 redux toolkit 时不需要拷贝后再修改

使用`redux toolkit`

```js
reducers: {
    addNumber(state, { payload }) {
      // 不需要拷贝，底层自动创建新的state
      state.counter = state.counter + payload
    }
}
```

未使用`redux toolkit`

```js
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      // 通过...state拷贝再修改
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }
}
```

事实上`Redux Toolkit`底层使用了`immerjs`的一个库来保证数据的不可变性

[**底层原理**](https://mp.weixin.qq.com/s/hfeCDCcodBCGS5GpedxCGg "底层原理")

`immer`对象的特点是只要修改了对象，就会返回一个新的对象，旧的对象不会发生改变；

但是这样的方式就不会浪费内存了吗？

为了节约内存，又出现了一个新的算法：`Persistent Data Structure`（持久化数据结构或一致性数据结构）

它是用一种数据结构来保存数据，当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费；

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_IZT_bzCrAf.png)
