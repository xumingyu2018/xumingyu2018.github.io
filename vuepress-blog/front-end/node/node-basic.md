---
title: Node.js内置模块
category:
  - node.js
---

## 内置模块

### `fs模块(文件系统):`

**导入** `const fs = require('fs')`

**文件读取：**

- 同步读取：`fs.readFileSync('文件名', { 可配置项 })`
- 异步回调读取：`fs.readFile('文件名', { 可配置项 }, (err, data) ⇒ { ... })`
- 异步 Promise 读取：`fs.promises.readFile('文件名', {可配置项}).then(res ⇒ {})`

**文件写入：**

- `fs.writeFile('文件名'， content, { [ encoding, flag ] }, () ⇒ { ... } )`

  `flag属性`

  - 'w' 打开文件写入，默认值
  - 'w+' 打开文件进行读写，如果不存在则创建文件
  - 'a' 追加文件, 如果文件不存在, 则创建文件, 如果文件存在, 则在文件内容后面追加内容
  - 'a+' 打开文件进行读写，将流放在文件末尾，如果文件不存在则创建文件
  - 'r' 打开文件读取，读取时的默认值
  - 'r+' 打开文件进行读写，如果不存在那么抛出异常

**其它常用 api：**

- 打开文件：`fs.open('文件名', (err, fd) ⇒ { ... })`（fd：文件描述符）
- 读取文件信息：`fs.fstat(fd, (err, stats) ⇒ { ... })`
- 关闭文件：`fs.close(fd)`
- 文件夹创建：`fs.mkdir('需创建的文件名', () ⇒ { ... })`（webpack 的 dist 打包操作）
- 文件夹重命名：`fs.rename('重命名文件', '被重命名文件', () ⇒ { ... })`
- 文件夹读取：`fs.readdir('文件名', { withFileTypes: true }, (err, files) => { ... })`
  - `withFileTypes`：获取文件夹中的文件信息
  - 递归读取文件夹中的文件：

```javascript
fs.readdir('./hello', { withFileTypes: true }, (err, files) => {
  files.forEach(item => {
    if(item.isDirectory()) {
      console.log(item.name + '是文件夹')

      // 递归读取文件夹中的文件
      fs.readdir('./hello/' + item.name, { withFileTypes: true }, (err, files) => {
        console.log(files)
      })
    } else {
      console.log(item.name + '是文件');
    }
  })
})

// 封装递归的读取文件夹中所有的文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach(item => {
      if(item.isDirectory) {
        readDirectory(`${path}/${item.name}`)
      }else {
        console.log("获取到文件：",item.name);
      }
    })
  })
}
readDirectory('./hello')
```

### `events模块`

**导入类：**`const EventEmitter = require('events')`

**基本使用：**

- 获取 EventEmitter 对象：`const emitter = new EventEmitter()`
- 监听事件：`emitter.on('test', (...args?) => { ... })`
- 发射事件：`emitter.emit('test', ...args?)`
- 取消事件：`emitter.off('test', 回调函数)`

**其他 api：**

- 获取所有监听事件的名称：`emitter.eventNames()`
- 获取监听最大的监听个数：`emitter.getMaxListeners()`
- 获取某一个事件名称对应的监听器个数：`emitter.listenerCount("test")`
- 获取某一个事件名称对应的监听器函数（数组）：`emitter.listeners("test")`
- 事件监听只监听第一次发射的事件：`emitter.once('test', () ⇒ { ... })`
- 将事件监听添加到最前面优先监听：`emitter.prependListener('test', () =>{ ... })`
- 将事件监听添加到最前面且只监听第一次发射的事件：`emitter.prependOnceListener('test', () =>{ ... })`
- 移除所有的事件监听或指定事件监听：`emitter.removeAllListeners('test')`

### `Buffer模块`

Buffer 保存 8 位二进制数据：0000 0000，8 位为一个单元即一个字节，其中中文包含 3 个字节。

创建 Buffer：

    方式一：`Buffer.from('你好', 'utf8'? 'utf16le'?)`

    方式二：`Buffer.alloc(8)`（申请一个8个字节大小的Buffer内存空间）
      - 操作：
          - `buf[0] = 100`
          - `buf.toString()`解析
          - `buf[1] = 'm'.charCodeAt()`等

性能优化：以下 Buffer 源码解析。

### `Stream模块`

所有流都是 EventEmitter 实例（即继承`EventEmitter`，可实现监听等功能），过流读取文件可以精准控制读取的位置。

四种基本流类型：

- `Writable`：写入数据流（`fs.createWriteStream()`）

  写入流不能监听到 close 事件。因为它打开后是不会自动关闭，必须手动关闭来告诉 Node 已经写入结束，并且会发出一个 finish 事件。

  - `fs.createWriteStream(path, options?)`

    `options`参数：

    - `encoding`
    - `flag`
    - `start`

  - `writeStream.on('open', (fd) ⇒ {})`
  - `writeStream.on('finish', () => {})`
  - `writeStream.on('close', (err) => {))`需要手动关闭`writeStream.close()`

- `Readable`：读取数据流

  - `fs.createReadStream(path, options?)`

    `options`参数：

    - `start`：从什么位置开始读取
    - `end`：读取到什么位置结束（包括 end 位置字节）
    - `highWaterMark`：每 n 个字节读取一次

  - `readStream.on('data', () ⇒ { ... })`：监听流的 data 事件
  - `readStream.pause()`：暂停流的读取
  - `readStream.resume()`：恢复流的读取
  - `readStream.pipe(writeStream)`：**可读可写流连接（可实现文件的拷贝）**

- `Duplex`：同时为 Writable 和 Readable（`net.Socket`）
- `Transform`：Duplex 可以在写入和读取是修改或转换数据流（`zlib.createDeflate()`压缩）

### `http模块`

### 基本使用

1. 创建一个或多个 http 服务器

```javascript
const server1 = http.createServer((request, respond) =>{
  // respond对象可以用来给请求的客户端返回响应
  respond.end("Hello World")
})
```

2. 开启对应的服务器，并且告知需要监听的端口

```javascript
// 监听端口时，监听1024以上的端口，65535以下的端口
server1.listen(3000, () => {
  console.log("服务器启动成功");
})
```

### Request

本质上是一个 readable 读流，可以监听 data 事件。

#### request 常用对象属性

- `req.url`
- `req.method`：GET、POST、PUT、DELET 等。
- `req.headers`：['content-type']、['authorization']等。

#### 处理不同 url、不同 method

对于每个 url 和 method 都要分情况处理。

```javascript
const http = require('http')

// 1.创建一个http服务器
const server = http.createServer((req, res) =>{
  const url = req.url
  const method = req.method

  if(url === "/"){
    res.end("主页");
  }else if(url === "/login"){
    if(method === 'POST'){
      res.end("登录成功！");
    }else {
      res.end("不支持的请求方式,请使用正确的请求方式")
    }
  }else if(url === "/register"){
    res.end("注册成功！");
  }

})

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功");
})
```

#### request 参数解析

- 处理 query 类型参数

```javascript
const http = require('http')
const url = require('url')
const qs = require('querystring')

// 解析url（如：/home/list?offset=100&size=20）
const urlString = req.url
const urlInfo = url.parse(urlString)

// 解析query参数
const queryString = urlInfo.query // queryString: offset=100&size=20
const queryInfo = qs.parse(queryString) // { offset:'100', size: '20' }

// 也可通过new URLSearchParams()解析
const queryInfo2 = new URLSearchParams(queryString)

```

- 处理 body 类型参数

```javascript
req.setEncoding('utf-8') // 设置编码格式，否则data是Buffer类型
// 简单的登录案例
let isLogin = false
req.on('data', (data) => {
  // body里面的参数在监听的data里面
  const dataString = data
  const loginInfo = JSON.parse(dataString)

  if(loginInfo.username ==='never' && loginInfo.password === '123456') {
    isLogin = true
  }else {
    isLogin = false
  }
})

req.on('end', () => {
  if(isLogin) {
    res.end("登录成功");
  }else {
    res.end("登录失败,请重新登录");
  }
})

```

### Response

response 对象本质上是 Writable 可写流

#### response 响应方式

```javascript
  // 1.响应数据方式一：write（没有关闭流）
  res.write("hhhhhhhh")
  res.write("hello world")

  // 2.响应数据方式二：end（写出后会关闭流）
  res.end("本次写出结束")
```

#### response 响应状态码

```javascript
  // 响应状态码方式一：statusCode
  res.statusCode = 201

  // 响应状态码方式二：writeHead
  res.writeHead(404)
```

#### response 响应 header

```javascript
  // 1.单独设置一个header
  res.setHeader("Content-Type", "application/json;charset=utf-8")

  // 2.和http status code一起设置
  res.writeHead(201, {
    "Content-Type": "application/json;charset=utf-8"
  })
```

### 发送 Get 请求

axios 底层原理

```javascript
// 1.使用http模块发送get请求
http.get('http://localhost:8000', (res) => {
  res.on('data', (data) => {
    const dataString = data.toString()
    const dataInfo = JSON.parse(dataString)
    console.log(dataInfo[1]);
  })
})
```

### 发送 POST 请求

```javascript
// 2.使用http模块发送post请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8000
}, (res) => {
  res.on('data', (data) => {
    const dataString = data.toString()
    const dataInfo = JSON.parse(dataString)
    console.log(dataInfo);
  })
})

// 必须调用end，表示写入内容完成
req.end()
```

### 文件上传（服务端）

基于 Node http 的原生实现

```javascript
const http = require('http')
const fs = require('fs')
// 文件（图片）上传原生实现

// 1.创建一个http服务器
const server = http.createServer((req, res) =>{
  req.setEncoding("binary")

  // 获取boundary值（boundary = -------21321321312--------）
  const boundary = req.headers['content-type'].split('; ')[1].split('boundary=')[1]

  // 将图片二进制数据全部存入变量中（图片越大调用req.on('data')请求越多）
  let formData = ''
  // 记录文件上传进度
  const fileSize = req.headers['content-length']
  let curSize = 0

  req.on('data', (data) => {
    curSize += data.length
    res.write(`当前上传进度：${(curSize / fileSize * 100) | 0}%\n`)

    formData += data
  })

  // 手动解析图片二进制文件 （1.截取图片类型 2.去掉空格 3.去掉最后的boundary 4.将图片数据存储到文件中）
  req.on('end', () => {

    const imageType = 'image/jpeg'
    // 1.截取从image/jpeg位置开始的后面所有数据
    const imageTypePosition = formData.indexOf('image/jpeg') + imageType.length + 4 // +4是为了去掉\r\n\r\n 2个空格
    let imageData = formData.substring(imageTypePosition)

    // 2.imageData开始位置会有2个空格
    // imageData = imageData.replace(/^\s\s*/, '')

    // 3.替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

    // 4.将imageData的数据存储到文件中
    fs.writeFile('./image.png', imageData, 'binary', (err) => {
      console.log("文件存储成功");
      res.end("文件上传完成")
    })
  })

})

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功");
})
```

### 文件上传（客户端）

浏览器代码

```html
<body>
  <input type="file">
  <button>上传</button>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <!-- 用js实现表单文件上传（不用<form></form>） -->
  <script>
    const btnEl = document.querySelector('button')
    btnEl.onclick = function() {
      // 1.创建表单对象
      const formData = new FormData()

      // 2.将input中的文件对象添加到表单对象中
      const file = document.querySelector('input').files[0]
      formData.set('photo', file)

      // 3.发生post请求，将表单数据发送到服务器（axios）
      axios({
        method: 'post',
        url: 'http://localhost:8000/upload',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
  </script>

</body>
```

## Node 性能优化

创建 Buffer 性能优化：当`alloc`内存时，会申请 8kb 更多的空间；通过`fromStringFast`是否还需要创建新的空间。（node/lib/buffer.js：428 行）

![](https://secure2.wostatic.cn/static/qKY1x5roXeK46UwVrcSGwR/image.png?auth_key=1690639102-2xNLSawSeRF1cV4oJWzNwS-0-4293b3abcb51810aac5e00bc31945c9f)

![](https://secure2.wostatic.cn/static/o5GHvWdUnGerDc9LQNcuLV/image.png?auth_key=1690639102-jAHrVXhzHxT65wPTRL8aYV-0-bced994b227388a47eef3cb95d79879a)

获取文件夹中的文件信息

1. `http`：用于创建 HTTP 服务器和客户端的模块。
2. `fs`：用于读取和写入文件的模块。
3. `path`：用于处理文件和目录路径的模块。
4. `os`：提供有关操作系统的信息和方法的模块。
5. `util`：提供了一些有用的功能，如继承和错误处理。
6. `crypto`：提供加密和解密的功能的模块。
7. `net`：提供了一些基本的网络功能，如创建 TCP 服务器和客户端。
8. `events`：提供事件驱动的功能的模块。
9. `stream`：提供了流式数据的功能的模块。
10. `process`：提供有关 Node.js 进程的信息和方法的模块。
11. `querystring`：提供了一些解析和序列化 URL 查询字符串的功能的模块。
12. `url`：提供了一些解析和格式化 URL 的功能的模块。

写入流不能监听到 close 事件。因为它打开后是不会自动关闭，必须手动关闭来告诉 Node 已经写入结束，并且会发出一个 finish 事件
