---
title: coderhub项目
icon: edit
category:
  - Node.js
tag:
  - 后端项目
  - Node项目
---

## [项目源码](https://github.com/xumingyu2018/coderhub)

## 全局配置类

### 1.错误信息配置

```javascript
// config/error.js
const NAME_OR_PASSWORD_IS_EMPTY = 'name_or_password_is_empty'
const USER_ALREADY_EXISTS = 'user_already_exists'
const USER_IS_NOT_EXISTS = 'user_is_not_exists'
const PASSWORD_IS_INCORRECT = 'password_is_incorrect'
const UNAUTHORIZATION = 'unauthorization'
const OPERATION_IS_NOT_ALLOWED = 'operation_is_not_allowed'
const QUERY_IS_FAIL = 'query_is_fail'

module.exports = {
  NAME_OR_PASSWORD_IS_EMPTY,
  USER_ALREADY_EXISTS,
  USER_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZATION,
  OPERATION_IS_NOT_ALLOWED,
  QUERY_IS_FAIL
}
```

### 2.文件上传路径配置

```javascript
// config/path.js
const UPLOAD_PATH = './uploads'

module.exports = {
  UPLOAD_PATH
}

```

### 3.服务主机端口号配置

安装：`npm install dotenv `

```javascript
// config/server.js
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  SERVER_PORT,
  SERVER_HOST
} = process.env // 从环境变量中解构获取
```

```json
// .env
SERVER_HOST = http://localhost
SERVER_PORT = 8000
```

### 4.密钥加密配置

```javascript
// config/srect.js
const fs = require('fs')

// 默认情况下相对目录和node程序的启动目录有关系（"start": "nodemon ./src/main.js"）
const PRIVATE_KEY = fs.readFileSync('./src/config/keys/private.key')
const PUBLIC_KEY = fs.readFileSync('./src/config/keys/public.key')

module.exports = {
  PRIVATE_KEY,
  PUBLIC_KEY
}
```

### 5.数据库配置

```javascript
// app/database.js
const mysql = require('mysql2')

// 1.创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: '123456',
  connectionLimit: 5
})

// 2.获取连接是否成功
connectionPool.getConnection((err, connection) => {
  // 1.判断是否有错误信息
  if(err) {
    console.log("连接失败", err);
    return
  }

  // 2.获取connection，尝试和数据库建立一下连接
  connection.connect((err) => {
    if(err) {
      console.log("和数据库交互失败", err);
    }else {
      console.log("数据库连接成功，可以操作数据库");
    }
  })
})

// 3.获取到连接池中连接对象（promise）
const connection = connectionPool.promise()

module.exports = connection

```

### 6.app 启动配置

```javascript
// app/index.js
// 抽取app
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const registerRouters = require('../router')

// 1.创建app
const app = new Koa()

// 2.对app使用中间件
app.use(bodyParser())

// 动态加载路由
registerRouters(app)

// 3.导出app
module.exports = app

```

### 7.动态加载路由（在 app 中自动注册）

```javascript
// router/index.js
const fs = require('fs')

function registerRouters(app) {
  // 1.读取当前文件下的所有文件
  const files = fs.readdirSync(__dirname)

  // 2.遍历所有文件
  for(const file of files) {
    // 只留下带router.js结尾的文件
    if(!file.endsWith('_router.js')) continue
    const router =require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }
}

module.exports = registerRouters
```

### 8. 主程序启动配置

```javascript
// main.js
const app = require('./app')
const { SERVER_PORT } = require('./config/server')
require('./utils/handle-error')

// 2.将app启动
app.listen(SERVER_PORT, () => {
  console.log('koa服务器启动成功')
})
```

## 工具类

### 1.异常处理

```javascript
// utils/handle-error.js
const app = require("../app");
const { NAME_OR_PASSWORD_IS_EMPTY, USER_ALREADY_EXISTS, USER_IS_NOT_EXISTS, PASSWORD_IS_INCORRECT, UNAUTHORIZATION, QUERY_IS_FAIL, OPERATION_IS_NOT_ALLOWED } = require("../config/error");

// 注意：在main.js中需要引入一下
app.on('error', (error, ctx) => {
  let code = 0
  let message =''

  switch(error) {
    case NAME_OR_PASSWORD_IS_EMPTY:
      code = -1001,
      message = '账户或密码为空'
      break
    case USER_ALREADY_EXISTS:
      code = -1002,
      message = '用户已存在'
      break
    case USER_IS_NOT_EXISTS:
      code = -1003,
      message = '用户不存在'
      break
    case PASSWORD_IS_INCORRECT:
      code = -1004,
      message = '密码不正确'
      break
    case UNAUTHORIZATION:
      code = -1005,
      message = '无效的token'
      break
    case QUERY_IS_FAIL:
      code = -1006,
      message = '查询失败，请检查数据是否存在'
      break
    case OPERATION_IS_NOT_ALLOWED:
      code = -2001,
      message = '本次操作没有权限'
      break
  }

  ctx.body = {code, message}
})

```

### 2.md5 加密

```javascript
// md5.js
const crypto = require('crypto')

function md5password(password) {
  const md5 = crypto.createHash('md5')
  // 使用md5 16进制加密
  const md5pwd = md5.update(password).digest('hex')
  return md5pwd
}

module.exports = md5password
```

## 用户模块

- 用户注册接口
- 用户头像查看接口

### 1.编写 router 层

```javascript
// router/user_router.js
const KoaRouter = require('@koa/router')
const { create, showAvatarImage } = require('../controller/user_controller')
const { verifyUser, handlePassword } = require('../middleware/user_middleware')
// 1.创建路由对象
const userRouter = new KoaRouter({ prefix: '/users'}) // 添加路由前缀

// 2.定义路由中映射(这里只做映射处理，不做具体的业务处理)
// 2.1.用户注册接口
userRouter.post('/', verifyUser, handlePassword, create)
// 2.2用户头像查看
userRouter.get('/avatar/:userId', showAvatarImage)

// 3.导出路由
module.exports = userRouter
```

### 2.编写`verifyUser` `handlePassword`中间件

- 验证账户
- 加密

```javascript
// middleware/user_middleware.js
const { NAME_OR_PASSWORD_IS_EMPTY, USER_ALREADY_EXISTS } = require("../config/error")
const userService = require("../service/user_service")
const md5password = require('../utils/md5')

const verifyUser = async (ctx, next) => {
  // 1.验证用户名和密码是否为空
  const { username, password } = ctx.request.body
  if(!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_EMPTY, ctx)
  }

  // 2.验证用户名是否已存在
  const users = await userService.findUserByName(username)
  if(users.length) {
    return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
  }

  // 3.执行下一个中间件（异步）
  await next()
}

const handlePassword = async (ctx, next) => {
  // 1.取出密码
  const { password } = ctx.request.body
  // 2.对密码进行加密
  ctx.request.body.password = md5password(password)
  // 3.执行下一个中间件
  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}

```

### 3.编写 controller 层

```javascript
// controller/user_controller.js
const { UPLOAD_PATH } = require("../config/path");
const fileService = require("../service/file_service");
const userService = require("../service/user_service");
const fs = require('fs')

class UserController {
  async create(ctx, next) {
    // 1.获取用户传递过来的数据
    const user = ctx.request.body

    // 2.将用户数据保存到数据库中
    const result = await userService.create(user)

    // 3.查看存储结果，告知前端创建成功
    ctx.body = {
      message: '用户创建成功',
      data: result
    }
  }

  async showAvatarImage(ctx, next) {
    // 1.获取用户id
    const { userId } = ctx.params

    // 2.获取userId对应的头像
    const avatarInfo = await fileService.queryAvatarWithUserId(userId)

    // 3.读取头像所在的文件
    const { filename, mimetype } = avatarInfo
    // 若不加这一句，浏览器会以文件方式下载图片
    ctx.type = mimetype
    ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`)
  }
}

module.exports = new UserController()
```

### 4.编写 service 层

```javascript
// service/user_service.js
const connection = require('../app/database')

class UserService {
  // 添加用户
  async create(user) {
    // 1.获取用户user
    const { username, password } = user
    // 2.拼接statement sql语句
    const statement = 'insert into `user` (username, password) values (?, ?);'
    // 3.执行statement
    const [result] = await connection.execute(statement, [username, password])
    return result
  }

  // 根据用户名获取用户信息
  async findUserByName(username) {
    const statement = 'select * from `user` where username = ?;'
    const [values] = await connection.execute(statement, [username])
    return values
  }

  // 修改头像
  async updateUserAvatar(avatarUrl, userId) {
    const statement = `update user set avatar_url = ? where id = ?`
    const [result] = await connection.execute(statement, [avatarUrl, userId])
    return result
  }
}

module.exports = new UserService()
```

## 登录模块

### 1.编写 router 层

```javascript
// router/login_router.js
const KoaRouter = require('@koa/router')
const { sign, test } = require('../controller/login_controller')
const { verifyLogin, verifyAuth} = require('../middleware/login_middleware')

const loginRouter = new KoaRouter({ prefix: '/login'}) // 添加路由前缀

loginRouter.post('/', verifyLogin, sign)
loginRouter.get('/verify', verifyAuth, test)

module.exports = loginRouter

```

### 2.编写`verifyLogin` `verifyAuth`中间件

```javascript
// middleware/login_middleware.js
const jwt = require('jsonwebtoken')
const { NAME_OR_PASSWORD_IS_EMPTY, USER_IS_NOT_EXISTS, PASSWORD_IS_INCORRECT, UNAUTHORIZATION } = require('../config/error')
const { PUBLIC_KEY } = require('../config/srect')
const userService = require('../service/user_service')
const md5password = require('../utils/md5')

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body
  // 1.验证用户名和密码是否为空
  if(!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_EMPTY, ctx)
  }

  // 2.验证用户名在数据可中是否已存在
  const users = await userService.findUserByName(username)
  const user = users[0]

  if(!user) {
    return ctx.app.emit('error', USER_IS_NOT_EXISTS, ctx)
  }

  // 3.验证密码是否正确
  if(user.password !== md5password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
  }

  // 4.将user对象保存在ctx中
  ctx.user = user

  // 执行下一个中间件(颁发token)
  await next()
}

// 很多请求都要用到验证用户，所用封装到中间件中
const verifyAuth = async (ctx, next) => {
    // 1.获取token
    const authorization =ctx.headers.authorization

    if(!authorization) {
      return ctx.app.emit('error', UNAUTHORIZATION, ctx)
    }
    const token = authorization.replace('Bearer ', '')
    // 2.验证token是否有效
    try{
      // 2.1获取token信息
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ['RS256']
      })

      // 2.2将token信息保存在ctx中
      ctx.user = result

      // 3.执行下一个中间件
      await next()
    }catch (error) {
      ctx.app.emit('error', UNAUTHORIZATION, ctx)
    }
}

module.exports = {
  verifyLogin,
  verifyAuth
}
```

### 3.编写 controller 层

```javascript
// controller/login_controller.js
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/srect')

class LoginRouter{
  sign(ctx, next) {
    // 1.获取用户id和密码
    const { id, username } = ctx.user

    // 2.颁发令牌
    const token = jwt.sign({ id, username}, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })

    // 3.返回用户信息
    ctx.body = { code: 0, data: { id, username, token }}

  }

  // 验证token
  test(ctx, next) {
    ctx.body = { code: 0, data: '验证成功' }
  }
}

module.exports = new LoginRouter()
```

## 权限模块

### 1.编写权限中间件

```javascript
// middleware/permission_middleware.js
const { OPERATION_IS_NOT_ALLOWED } = require("../config/error");
const permissionService = require("../service/permission_service")

// 验证：只能验证用户是否有操作moment的权限（不能验证操作其他的权限，可扩展性不强）
// 方法一
const verifyMomentPermission = async (ctx, next) => {
  // 获取修改动态的id
  const { momentId } = ctx.params
  // 获取登录用户id
  const { id } = ctx.user

  // 查询user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkMoment(momentId, id)
  if(!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 执行下一个中间件
  await next()
}

// 方法二(传入参数，实现动态权限认证)
const verifyPermission = function(resource) {
  return async (ctx, next) => {
    // 获取修改动态的id
    const { momentId } = ctx.params
    // 获取登录用户id
    const { id } = ctx.user

    // 查询user的id是否有修改momentId的权限
    const isPermission = await permissionService.checkMoment(momentId, id)
    if(!isPermission) {
      return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
    }

    // 执行下一个中间件
    await next()
  }
}

// 方法三
const verifyPermission = async (ctx, next) => {
  // 1.获取登录用户id
  const { id } = ctx.user

  // 2.获取中资源的name/id
  // name => moment/user/comment
  // params: { momentId: 7}
  // keyName => momentId
  const keyName = Object.keys(ctx.params)[0]
  const resourceId = ctx.params[keyName]
  const resourceName = keyName.replace('Id', '')

  // 查询user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkResource(resourceName, resourceId, id)
  if(!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 执行下一个中间件
  await next()
}

module.exports = {
  verifyMomentPermission,
  verifyPermission
}
```

### 2.编写 service 层

```javascript
// service/permission_service.js
const connection = require("../app/database")

class PermissionService {
  // 方法一
  async checkMoment(momentId, userId) {
    const statement = `select * from moment where id = ? and user_id = ?`
    const [result] = await connection.execute(statement, [momentId, userId])
    // 长度大于0时说明有权限（能查出对应的moment）
    // !!：转化为boolean类型
    // return !!result.length
    return !!result.length
  }

  // 方法三
  async checkResource(resourceName, resourceId, userId) {
    const statement = `select * from ${resourceName} where id = ? and user_id = ?`
    const [result] = await connection.execute(statement, [resourceId, userId])
    return !!result.length
  }
}

module.exports = new PermissionService()
```

## 动态模块

- 添加动态（登录后）
- 动态列表查询
- 动态详情查询
- 修改动态（登录后且有操作权限）
- 为动态添加标签（多对多）

### 1.编写 router 层

```javascript
// router/moment_router.js
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login_middleware')
const { create, list, detail, update, remove, addLabels } = require('../controller/moment_controller')
const { verifyMomentPermission, verifyPermission} = require('../middleware/permission_middleware')
const verifyLabelExists = require('../middleware/label_middleware')

const momentRouter = new KoaRouter({ prefix: '/moment'})

// 增
momentRouter.post('/', verifyAuth, create)
// 查
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
// 改（只有登录【verifyAuth】且有权限【verifyMomentPermission】才能改）
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
// 删
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

// 添加标签
// 中间件：
//   1.是否登录
//   2.验证是否有操作这个动态的权限
//   3.额外中间件：验证label的name是否已经存在于label表中
//   * 如果存在，那么直接使用即可
//   * 如果不存在，那么需要先将label的name添加label表
//   4.最终步骤
//   * 所有的labels都已经在label表
//   * 动态2和label关系，添加到关系表
momentRouter.post('/:momentId/labels', verifyLabelExists, addLabels)

module.exports = momentRouter

```

### 2.编写`verifyLabelExists`中间件

```javascript
const { OPERATION_IS_NOT_ALLOWED } = require("../config/error");
const permissionService = require("../service/permission_service")

// 验证：只能验证用户是否有操作moment的权限（不能验证操作其他的权限，可扩展性不强）
// 方法一
const verifyMomentPermission = async (ctx, next) => {
  // 获取修改动态的id
  const { momentId } = ctx.params
  // 获取登录用户id
  const { id } = ctx.user

  // 查询user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkMoment(momentId, id)
  if(!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 执行下一个中间件
  await next()
}
// 方法二
const verifyPermission = async (ctx, next) => {
  // 1.获取登录用户id
  const { id } = ctx.user

  // 2.获取中资源的name/id
  // name => moment/user/comment
  // params: { momentId: 7}
  // keyName => momentId
  const keyName = Object.keys(ctx.params)[0]
  const resourceId = ctx.params[keyName]
  const resourceName = keyName.replace('Id', '')

  // 查询user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkResource(resourceName, resourceId, id)
  if(!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 执行下一个中间件
  await next()
}

module.exports = {
  verifyMomentPermission,
  verifyPermission
}
```

### 3.编写 controller 层

```javascript
// controller/moment_controller.js
const { QUERY_IS_FAIL } = require("../config/error");
const momentService = require("../service/moment_service")

class MomentController{
  async create(ctx, next) {
    // 1.获取动态内容
    const { content } = ctx.request.body

    // 2.动态由谁发布（token => id/username）
    // 由上一个中间件传递过来的ctx.user确定
    const { id } = ctx.user

    // 3.将动态相关数据保存到数据库中
    const result = await momentService.create(content, id)

    ctx.body = {
      code: 0,
      message: '创建用户动态成功',
      data: result
    }
  }

  async list(ctx, next) {
    // 获取分页条件(moment?offset=0&size=10 -> query)
    const { offset, size } = ctx.query

    // 从数据库中查询动态表
    const result = await momentService.queryList(offset, size)

    // 返回结果
    ctx.body = {
      code: 0,
      message: '查询动态成功',
      data: result
    }
  }

  async detail(ctx, next) {
    // 1.获取动态的id(moment/1)
    const { momentId } = ctx.params

    // 2.根据id查询某一条动态
    const result = await momentService.queryById(momentId)

    // 3.若没有查到，返回错误信息
    if(!result.length) {
      return ctx.app.emit('error', QUERY_IS_FAIL, ctx)
    }

    // 4.成功则返回数据
    ctx.body = {
      code: 0,
      message: '查询1条动态成功',
      data: result[0]
    }
  }

  async update(ctx, next) {
    // 1.获取要修改的动态的id
    const { momentId } = ctx.params

    // 2.获取修改的内容
    const { content } = ctx.request.body

    const result = await momentService.updateMoment(momentId, content)

    ctx.body = {
      code: 0,
      message: '修改动态成功',
      data: result
    }
  }

  async remove(ctx, next) {
    const { momentId } = ctx.params
    const result = await momentService.removeMoment(momentId)
    ctx.body = {
      code: 0,
      message: '删除动态成功',
      data: result
    }
  }

  // 标签接口，给moment添加label
  async addLabels(ctx, next) {
    // 1.获取参数
    const { labels } = ctx
    const { momentId } = ctx.params

    // 2.将moment_id和label_id添加到moment_label表中
    try{
      for(const label of labels) {
        // 2.1判断label_id是否已经和moment_id已经存在该数据
        const isExists = await momentService.hasLabel(momentId, label.id)
        console.log(isExists);
        if(!isExists) {
          // 2.2不存在moment_id和label_id关系，则插入
          const result = await momentService.addLabel(momentId, label.id)
        }
      }
      ctx.body = {
        code: 0,
        message: '为动态添加标签成功',
      }
    }catch (error) {
      console.log(error);
      ctx.body = {
        code: -3001,
        message: '为动态添加标签失败'
      }
    }
  }
}

module.exports = new MomentController()
```

### 4.编写 service 层

- 学习 SQL 的写法

```javascript
// service/moment_service.js
const connection = require("../app/database")

class MomentService {
  async create(content, userId) {
    const statement = `insert into moment (content, user_id) values (?, ?)`
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }

  // 默认offset = 0 ,size = 10
  // 查询动态列表，包含评论个数，标签个数
  async queryList(offset = 0, size = 10) {
    const statement = `
      select m.id id, m.content content, m.createAt createTime, m.updateAt updateTime, json_object('id', u.id, 'username', u.username, 'avatarUrl', u.avatar_url, 'createTime', u.createAt, 'updateTime', u.updateAt) user,
      (select count(*) from comment where comment.moment_id = m.id) commentCount,
      (select count(*) from moment_label ml where ml.moment_id = m.id) labelCount
      from moment m
      left join user u on u.id = m.user_id
      limit ? offset ?
    `
    const [result] = await connection.execute(statement, [String(size), String(offset)])
    return result
  }

  // 查询动态详情，包含评论列表，用户列表
  async queryById(id) {
    const statement = `
      select
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        json_object('id', u.id, 'username', u.username, 'avatarUrl', u.avatar_url, 'createTime', u.createAt, 'updateTime', u.updateAt) user,
        (
          select
            json_arrayagg(json_object(
              'id', c.id, 'content', c.content, 'commentId', c.comment_id,
              'user', json_object('id', cu.id, 'name', cu.username, 'avatarUrl', u.avatar_url)
            ))
          from comment c
          left join user cu on c.user_id = cu.id
          where c.moment_id = m.id
        ) comments,
        (
          json_arrayagg(json_object(
            'id', l.id, 'name', l.name
          ))
        ) labels
      from moment m
      left join user u on u.id = m.user_id
      left join moment_label ml on ml.moment_id = m.id
      left join label l on ml.label_id = l.id
      where m.id = ?
      group by m.id;
    `
    const [result] = await connection.execute(statement, [id])
    return result
  }

  async updateMoment(id, content) {
    const statement = `update moment set content = ? where id = ?`
    const [result] = await connection.execute(statement, [content, id])
    return result
  }

  async removeMoment(id) {
    const statement = `delete from moment where id = ?`
    const [result] = await connection.execute(statement, [id])
    return result
  }

  // 判断标签和动态表关系是否存在
  async hasLabel(momentId, labelId) {
    const statement = `select * from moment_label where moment_id = ? and label_id = ?`
    const [result] = await connection.execute(statement, [momentId, labelId])
    return !!result.length
  }

  async addLabel(momentId, labelId) {
    const statement = `insert into moment_label (moment_id, label_id) values (?, ?)`
    const [result] = await connection.execute(statement, [momentId, labelId])
    return result
  }
}

module.exports = new MomentService()
```

## 评论模块

- 发表评论
- 回复评论

### 1.编写 router 层

```javascript
// router/comment_router.js
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login_middleware')
const { create, reply } = require('../controller/comment_controller')

const commentRouter = new KoaRouter({ prefix: '/comment'}) // 添加路由前缀

// 增：新增评论
commentRouter.post('/', verifyAuth, create)
// 增：回复评论
commentRouter.post('/reply', verifyAuth, reply)

module.exports = commentRouter

```

### 2.编写 controller 层

```javascript
// controller/comment_controller.js
const commentService = require("../service/comment_service")

class commentController {
  // 发表评论
  async create(ctx, next) {
    // 1.从body中获取参数
    const { content, momentId } = ctx.request.body
    const { id } = ctx.user
    console.log(content, momentId, id);

    // 2.操作数据库
    const result = await commentService.create(content, momentId, id)
    console.log(result);

    ctx.body = {
      code: 0,
      message: '发表评论成功',
      data: result
    }
  }

  // 回复评论
  async reply(ctx, next) {
    // 1.从body中获取参数
    const { content, momentId, commentId } = ctx.request.body
    const { id } = ctx.user

    // 2.操作数据库
    const result = await commentService.reply(content, momentId, commentId, id)

    ctx.body = {
      code: 0,
      message: '回复评论成功',
      data: result
    }
  }
}

module.exports = new commentController()
```

### 3.编写 service 层

```javascript
// service/comment_service.js
const connection = require("../app/database")

class CommentService {
  async create(content, momentId, userId) {
    const statement = `insert into comment (content, moment_id, user_id) values (?, ?, ?)`
    const [result] = await connection.execute(statement, [content, momentId, userId])
    return result
  }

  async reply(content, momentId, commentId, userId) {
    const statement = `insert into comment (content, moment_id, comment_id, user_id) values (?, ?, ?, ?)`
    const [result] = await connection.execute(statement, [content, momentId, commentId, userId])
    return result
  }
}

module.exports = new CommentService()

```

## 标签模块

- 新增标签
- 判断标签是否存在

### 1.编写 router 层

```javascript
// router/label_router.js
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login_middleware')
const { create, list } = require('../controller/label_controller')

const labelRouter = new KoaRouter({ prefix: '/label'}) // 添加路由前缀

labelRouter.post('/', verifyAuth, create)
labelRouter.get('/', list)

module.exports = labelRouter

```

### 2.编写`verifyLabelExists` 中间件

```javascript
// middleware/label_middleware.js
const labelService = require("../service/label_service")

// 传入label时，不确定labels是否有name已经存在label表中
// 所以需要将labels都保存在label中，获取labels的id
// 将获取的数据传递给下一个中间件
const verifyLabelExists = async (ctx, next) => {
  // 1.获取客户端传递过来的所有labels
  const { labels } = ctx.request.body

  // 2.判断所有的labels中name是否已经存在于label表
  const newLabels = []
  for(const name of labels) {
    const result = await labelService.queryLabelByName(name)
    const labelObj = { name }
    if(result) {
      // 获取name对应的label的id => { name: "篮球", id: 1 }
      labelObj.id = result.id
    }else {
      // 插入，并且获取插入之后的id => { name: "游戏", id: 7 }
      const insertResult = await labelService.create(name)
      labelObj.id = insertResult.insertId
    }
    newLabels.push(labelObj)
  }

  // 3.所有的label都变成[{ name: "哲学", id: 7}, { name: "爱情", id: 8 }]
  ctx.labels = newLabels

  await next()
}

module.exports = verifyLabelExists

```

### 3.编写 controller 层

```javascript
// controller/label_controller.js
const labelService = require("../service/label_service")

class labelRouter {
  async create(ctx, next) {
    // 1.获取数据
    const { name } = ctx.request.body

    // 2.操作数据库
    const result = await labelService.create(name)

    ctx.body = {
      code: 0,
      message: '创建标签成功',
      data: result
    }
  }
  async list(ctx, next) {
    ctx.body = {
      code: 0,
      message: '获取标签成功',
      data: result
    }
  }
}

module.exports = new labelRouter()
```

### 4.编写 service 层

```javascript
// service/label_service.js
const connection = require("../app/database")

class LabelService {
  async create(name) {
    const statement = `insert into label (name) values (?)`
    const [result] = await connection.execute(statement, [name])
    return result
  }

  async queryLabelByName(name) {
    const statement = `select * from label where name = ?`
    const [result] = await connection.execute(statement, [name])
    return result[0]
  }

}
module.exports = new LabelService()
```

## 头像上传

### 1.编写 router 层

```javascript
// router/file_router.js
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login_middleware');
const { handleAvatar } = require('../middleware/file_middleware');
const { create } = require('../controller/file_controller');

const fileRouter = new KoaRouter({ prefix: '/file'})

// 头像上传
fileRouter.post('/avatar', verifyAuth, handleAvatar, create)

module.exports = fileRouter

```

### 2.编写`handleAvatar` 中间件

```javascript
// middleware/file_middleware.js
const multer = require('@koa/multer')
const { UPLOAD_PATH } = require('../config/path')

// 上传头像中间件
const uploadAvatar = multer({
  dest: UPLOAD_PATH
})

const handleAvatar = uploadAvatar.single('avatar')

module.exports = {
  handleAvatar
}
```

### 3.编写 controller 层

```javascript
// controller/file_controller.js
const fileService = require("../service/file_service")
const userService = require("../service/user_service")
const { SERVER_HOST, SERVER_PORT } = require('../config/server')

class fileController {
  async create(ctx, next) {
    // 1.获取对应的信息
    const { filename, mimetype, size } =ctx.request.file
    const { id } = ctx.user

    // 2.将图片信息和id结合起来进行数据库存储
    const result = await fileService.create(filename, mimetype, size, id)

    // 3.将头像的url，保存在user表
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`
    const result2 = await userService.updateUserAvatar(avatarUrl, id)

    // 4.返回结果
    ctx.body = {
      code: 0,
      message: '头像上传成功',
      data: avatarUrl
    }
  }
}

module.exports = new fileController()

```

### 4.编写 service 层

```javascript
// service/file_service.js
const connection = require("../app/database")

class FileService {
  async create(filename, mimetype, size, userId) {
    const statement = `insert into avatar (filename, mimetype, size, user_id) values (?, ?, ?, ?)`
    const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
    return result
  }

  async queryAvatarWithUserId(userId) {
    const statement = `select * from avatar where user_id = ?`
    const [result] = await connection.execute(statement, [userId])
    // 拿到最新的头像
    return result.pop()
  }
}

module.exports = new FileService()

```
