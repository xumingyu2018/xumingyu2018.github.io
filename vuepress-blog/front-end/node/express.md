---
title: Express框架
category:
  - node.js
---

Express 是一个路由和中间件的 Web 框架，它本身功能非常少。本质是一系列中间件函数的调用。

## 中间件的作用

在请求和响应之间做一些事情。

- 中间件可以执行任何代码。
- 中间件可以修改请求和响应对象。
- 可以在中间件中结束响应周期。
- 可以调用 next 方法，将请求转交给下一个中间件。

## 安装

脚手架：`npm install -g express-generator`

创建项目：`express express-demo`

## 基本结构

```javascript
const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
app.post('/login', (req, res, next) => {
  res.json({ message: '登录成功！' , code: 200})
  next()  // 参数是err类型
})

// 通过app.use()、router.usr()方法或者get、post、delete可以给app注册任意类型的中间件
app.use((req, res, next) => {
  res.end("第二个中间件执行");
})

// 启动服务器
app.listen('8000', () => {
  console.log("express服务器启动成功")
})
```

## Api

`app.use()`：通过 use 方法注册中间件是最普通的的中间件，无论是什么请求方式都可以匹配上。

- 形式：`app.use('/路径', (req, res, next) =>{})`路径匹配中间件不会对请求方式进行限制。

`app.get()/app.post()`：路径-方法匹配中间件会对请求方式（method）和路径进行限制。

- 形式：`app.get('/路径'，中间件1，中间件2，中间件3)`（如处理参数 1，验证身份，查询数据库，返回数据）

`next()`：当 express 接收到客户端发送的网络请求时，在所有中间件开始进行匹配，当匹配到第一个符合要求的中间件时，就会执行该中间件，后续的中间件是否执行取决于上一个中间件有没有执行`next()`。

- 注意：`next()`参数只能为 err。（下面有错误信息处理案例！）

`res.end(string)`：结束响应过程。

`res.json(string?, object?)`：以 json 形式返回给客户端。

- 使用：`res.json({ code:200, msg: "响应成功", list: [{k1,v1}, {k2,v2}]})`

`res:status(404)`：设置响应状态。

## 使用 express 自带中间件

`express.json()`：解析客户端传递过来的 json 数据。

`express.urlencoded({ extended: true })`：解析客户端传递过来的 urlencoded 数据。

- `{extended: true}`：不再使用默认的 querystring 模块，而是使用第三方模块 qs 来解析。

`express.static('./build')`：将打包后的文件夹作为静态资源。

## 使用第三方中间件

### 日志记录

`morgan`

```javascript
const fs = require('fs')
const morgan = require('morgan') // npm install morgan

// 应用第三方日志中间件
const writeStream = fs.createWriteStream('./logs/access.log', { flags: 'a+' })
app.use(morgan('combined', { stream: writeStream }))

```

### 解析 formdata

`multer`（文件上传也需要此模块）

```javascript
const multer = require('multer') // npm install multer

// 解析客户端传递过来的form-data表单数据
const formData = multer()
// app.use(formData.any())

app.post('/avatar', formData.any(), (req, res, next) => {
  console.log(req.body);
  res.end('文formdata解析成功!')
})
```

## 处理参数解析

`queryString`参数：

```javascript
app.get('/home/list', (req, res, next) => {
  const queryInfo = req.query
  console.log(queryInfo);
  res.end('data list 数据')
})
```

`params`参数：

```javascript
app.get('/users/:id/:name', (req, res, next) => {
  const id = req.params.id
  console.log(id.params);   //params里面有id、name
  res.end(`获取到${id}的数据`)
})
```

## 路由接口

router 层（类似于 Controller 层，专门管理接口）

```javascript
// router/userRouter.js
const express = require('express')

// mini-app
// 1.创建路由对象
const UserRouter = express.Router()

// 2.定义路由对象中的映射
UserRouter.get('/', (req, res, next) => {
  res.json('获取用户列表')
})
UserRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.json('获取某个用户id为' + id)
})
UserRouter.post('/', (req, res, next) => {
  res.json('创建用户成功')
})
UserRouter.delete('/:id', (req, res, next) => {
  res.json("删除用户成功" + req.params.id)
})

// 3.将路由导出
module.exports = UserRouter
```

```javascript
// 使用
const UserRouter = require('./router/userRouter')

app.use('/user', UserRouter)
```

## 中间件匹配练习

```javascript
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log("普通中间件1");
  next()
})

app.use((req, res, next) => {
  console.log("普通中间件2");
  next()
})

app.get('/home', (req, res, next) => {
  console.log("/home get 中间件1");
  next()
}, (req, res, next) => {
  console.log("/home get 中间件2");
})

app.post('/login', (req, res, next) => {
  console.log("/login post 中间件");
})


app.use((req, res, next) => {
  console.log("普通中间件3");
})

app.use((req, res, next) => {
  console.log("普通中间件4");
})

app.listen('8000', () => {
  console.log("express服务器启动成功")
})
```

## 登录案例

```javascript
const express = require('express')
const app = express()
// 将公共的代码抽取app.user中
// app.use((req, res, next) => {
//   if(req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const jsonInfo = JSON.parse(data.toString())
//       req.body = jsonInfo
//     })

//     req.on('end', () =>{
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 直接用express提供的中间件代替上面的代码（解析客户端传递过来的json）
app.use(express.json())

// 案例一：用户登录的请求处理：/login => username/password
app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('登录成功')
})

// 案例二：用户注册的请求处理：/register => username/password
app.post('/register', (req, res, next) => {
  console.log(req.body);
  res.end('注册成功！')
})

app.listen('8000', () => {
  console.log("express服务器启动成功")
})
```

## 文件上传

```javascript
const express = require('express')
const multer = require('multer') // npm install multer

const app = express()
const uploads = multer({
  // 单文件上传存放位置
  // dest: './uploads'
  storage: multer.diskStorage({
    // 存放位置
    destination: (req, file, callback) => {
      callback(null, './uploads')
    },
    filename: (req, file, callback) => {
      // 自定义名称添加后缀名
      callback(null, Date.now() + '-' + file.originalname)
    }
  })
})

// 上传单文件：single方法
app.post('/avatar', uploads.single('avatar'), (req, res, next) => {
  // req.file: 上传的文件信息
  console.log(req.file);
  res.end('单文件上传成功!')
})

// 上传多文件：array方法
app.post('/photos', uploads.array('photos'), (req, res, next) => {
  console.log(req.files);
  res.end('多文件上传成功!')
})

app.listen('8000', () => {
  console.log("express服务器启动成功")
})

```

## 错误信息处理

通过`next(err)`中的`err`参数实现。

```javascript
// 抽离错误信息
app.post('/login', (req, res, next) => {
  // 1.获取登录传入的用户名和密码
  const {username, password} = req.body

  // 2.对用户名和密码进行判断
  if(!username && !password) {
    // next参数只能为err
    next(-1001)
  }else if(username !== 'admin' || password !== '123') {
    next(-1002)
  }else {
    res.json({
      code: 0,
      message: "登录成功！！",
      token: '231321er54qer38'
    })
  }
})

// 错误处理的中间件
app.use((errCode, req, res, next) => {
  console.log(errCode);
  const code = errCode
  let message = '未知的错误信息'

  switch(code) {
    case -1001:
      message = "没有输入用户名或密码"
      break
    case -1002:
      message = "用户名或密码错误"
      break
  }

  res.json({ code, message })
})
```

## 源码

导入的`express` 本质上是 `createApplication`

```javascript
exports = module.exports = createApplication; // 28
```

封装一个变量，变量是一个函数对象

```javascript
var app = function(req, res, next) { // 39
  app.handle(req, res, next);
};
```

对函数对象进行混入（混入 EventEmitter 的方法：on、emit）

```javascript
mixin(app, EventEmitter.prototype, false); //44
```

混入的是 use/listen 方法等

```javascript
mixin(app, proto, false); //46

```

- proto（`var proto = require('./application')`）

```javascript
// app里面加的东西都会放在{}对象里面
var app = exports = module.exports = {};  //45
//....

```

- listen 方法（本质是创建 http）

```javascript
app.listen = function listen() {
  // this就是在有网络请求的时候执行的回调函数
  // this就是app（this的隐式绑定）=> app是个函数（express.js中的39行）
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};
```

- use 方法作用

  - 传入三个中间件
  - 目的：当有一个网络请求的时候，匹配和执行中间件
  - 本质：
    - 将传入的三个函数保存在一个数组中（`fns = [fn1, fn2, fn3]`）
    - 监听网络请求的 path/method 去匹配三个函数。

  ![](https://secure2.wostatic.cn/static/mPxX1Kt7zYRZGbfcNrGgVR/image.png?auth_key=1690640426-89Z73hDRPxJNzHdpFbA7QD-0-cbc30ddffc1693fad053db3815960c3f)

  （`this.lazyrouter`是默认路由）

  ![](https://secure2.wostatic.cn/static/v5YpkCxvrMas4wewUm1iDX/image.png?auth_key=1690640426-jwtCoeLE3CN8MTNcBeUbsK-0-87d5cf56c20e3e604a492962845288b2)

  ![](https://secure2.wostatic.cn/static/7zPv1CgHABPJWomCqm4aRt/image.png?auth_key=1690640426-oqTV2Y3UCUYkLmCXNaWJJ4-0-27e4bb8b040652ab04f85c3b24b1cadf)

  - 当发生网络请求时，会调用

  ![](https://secure2.wostatic.cn/static/dVFLiW6YPx5t7Fw8hpaBGQ/image.png?auth_key=1690640427-sSuTGHNgMQ9eCxFaXD8ihe-0-8a669ebc8a0f1c41a5cf7b7efde11bdd)

  ![](https://secure2.wostatic.cn/static/56FLtZbzq13c7hej8mFfB4/image.png?auth_key=1690640426-ac3CGYcpedhjpyUqMukDGE-0-2643fe2f42472a2daa58b0ee6db4cf64)

  ![](https://secure2.wostatic.cn/static/r3abCfQ6eDU4bapN43kSiE/image.png?auth_key=1690640427-qQGi3zdCNf1wWSZvFjbfmy-0-638ff1e6b9eec208f2ca5d23019cc47f)

  ![](https://secure2.wostatic.cn/static/sUBq64ixukdMCA7ugErtC9/image.png?auth_key=1690640427-9UxiDQ4YKCmmhpL9UbJWx9-0-c9fe51611a64065652bb122a2661f4cd)

  ![](https://secure2.wostatic.cn/static/jWbTB47KBDqe4aWoMvcXx4/image.png?auth_key=1690640427-gvTbGMo2TiwVNZDRDRFcY1-0-33fb87ac3de94c339bd43a3ee7e1e9de)

  ![](https://secure2.wostatic.cn/static/duUkxTBed7V5Ls1e1Nfjam/image.png?auth_key=1690640428-ruoTWjdEkpzhzTudtKtt3s-0-dce12d35e64fccc4471ddc6fbe9698de)
