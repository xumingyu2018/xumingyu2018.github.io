---
title: 其它
category:
  - node.js
---

## cookie 和 session 缺点

1. 安全性问题：cookie 和 session 中存储的数据都可以被篡改，如果没有采取适当的安全措施，会面临被攻击的风险。（cookie 是明文传递，session 是加密后的凭证）
2. 扩展性问题：如果要扩展系统，需要考虑如何处理 cookie 和 session 的数据共享，否则可能会导致多个系统之间状态不一致。（对于浏览器外的其他客户端 android，必须手动设置；对于分布式系统和服务器集群，比较难保证其他系统可以正确解析 session）
3. 性能问题：cookie 和 session 需要占用服务器和客户端的存储空间和带宽资源，如果数据量过大或者访问量过高，会导致性能问题。（cookie 会被附加在每个 Http 请求中，增加了流量）
4. 跨域问题：由于浏览器的同源策略限制，cookie 和 session 无法跨域使用，需要采用其他方式来实现不同域之间的数据共享。
5. 稳定性问题：如果服务器出现故障或者重启，会导致 session 数据的丢失，需要采用备份和恢复机制来保证系统的稳定性。
6. Cookie 的大小限制是 4kb，对于复杂的需求来说是不够的。

![](https://secure2.wostatic.cn/static/oMASvrJVRixegKVShJKmAZ/image.png?auth_key=1690640716-trE3fRvzmzsvYJNHwxRHrY-0-a37474bf200ac20220c00fb3997b0510)

## Token

Token 的三个组成部分

header 和 payload 都可以被解密出来

![](https://secure2.wostatic.cn/static/oZZ8XBRZ8yT4c8HFKpWkwZ/image.png?auth_key=1690640717-cXhtf2zXoeuT7neYYBDwfX-0-cb4528f54b47c246c9a76a826e7c3c14)

![](https://secure2.wostatic.cn/static/w5H4SYxXoFNHrAcuGTFYG/image.png?auth_key=1690640717-9sH5pYvQpx2BJ3wav9BVFV-0-7458325d4053bb24a1db17230e6ee06e)

![](https://secure2.wostatic.cn/static/svJitvdbLKBF2FMQHciXt7/image.png?auth_key=1690640717-pcGuv9GZmq8cBNDCQxqMr9-0-6d54a691be68cb4c3499b9d80f272dfb)

## 对称加密

加解密用的同一种算法（HS256）既可以发布令牌也可以验证令牌

安装：`npm install jsonwebtoken`

```javascript
const jwt = require("jsonwebtoken");

const secretKey = "nevermore";

userRouter.get("/login", (ctx, next) => {
  // 1.颁发token
  const payload = { id: 111, name: "nevermore" };
  const token = jwt.sign(payload, secretKey, {
    expiresIn: 600,
  });

  ctx.body = {
    code: 0,
    token,
    message: "登录成功",
  };
});

userRouter.get("/list", (ctx, next) => {
  // 1.获取客户端携带过来的token
  // 从请求头中获取token
  const authorization = ctx.headers.authorization;
  // 注意：这里的token是Bearer+空格+token
  const token = authorization.replace("Bearer ", "");

  // 2.验证token(解密)
  try {
    const result = jwt.verify(token, secretKey);
    ctx.body = {
      code: 0,
      data: [
        { id: 1, name: "nevermore" },
        { id: 2, name: "ikun" },
      ],
    };
  } catch (error) {
    ctx.body = {
      code: -1010,
      message: "无效的token或者登录过期",
    };
  }
});
```

## 非对称加密（RS256）

可以使用 openssl 来生成一对私钥和公钥

- 私钥：private_key（用于发布令牌）

  操作：打开 git.bash→ 输入`openssl`→ 输入`genrsa -out private.key 2048`

- 公钥：public_key（用于验证令牌）

  操作（利用私钥生成）：输入`rsa -in private.key -pubout -out public.key `

```javascript
const Koa = require("koa");
const fs = require("fs");
const KoaRouter = require("@koa/router");
const jwt = require("jsonwebtoken");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });

const privateKey = fs.readFileSync("./keys/private.key");
const publicKey = fs.readFileSync("./keys/public.key");

userRouter.get("/login", (ctx, next) => {
  // 1.颁发token(使用非对称加密算法RS256)
  const payload = { id: 111, name: "nevermore" };
  const token = jwt.sign(payload, privateKey, {
    expiresIn: 600,
    algorithm: "RS256",
  });
  ctx.body = {
    code: 0,
    token,
    message: "登录成功",
  };
});

userRouter.get("/list", (ctx, next) => {
  // 1.获取客户端携带过来的token
  // 从请求头中获取token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  // 2.验证token(公钥解密)
  try {
    const result = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    ctx.body = {
      code: 0,
      data: [
        { id: 1, name: "nevermore" },
        { id: 2, name: "ikun" },
      ],
    };
  } catch (error) {
    ctx.body = {
      code: -1010,
      message: "无效的token或者登录过期",
    };
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.listen(8000, () => {
  console.log("koa服务器启动成功");
});
```

## Cookie 设置

```javascript
const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/login", (ctx, next) => {
  ctx.cookies.set("slogan", "ikun", {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 有效期7天
  });

  ctx.body = "登录成功";
});

userRouter.get("/list", (ctx, next) => {
  const cookie = ctx.cookies.get("slogan");
  if (cookie === "ikun") {
    ctx.body = "用户信息";
  } else {
    ctx.body = "请登录";
  }
});
```

## Session 设置

安装：`npm install koa-session`

```javascript
const Koa = require("koa");
const KoaRouter = require("@koa/router");
const KoaSession = require("koa-session");

const app = new Koa();

// cookie是明文凭证，session是加密后的凭证
const session = KoaSession(
  {
    key: "sessionid",
    signed: true, // 不加密
    maxAge: 60 * 1000 * 5,
    httpOnly: true, // 不允许js获取cookie
  },
  app
);

// 加盐操作(会生成两个sessionid、sessionid.sig->盐)
app.keys = ["salt", "aaa"];
app.use(session); // 会将session加入到ctx上

const userRouter = new KoaRouter({ prefix: "/users" }); // 添加路由前缀

userRouter.get("/login", (ctx, next) => {
  ctx.session.slogan = "ikun";

  ctx.body = "登录成功";
});

userRouter.get("/list", (ctx, next) => {
  const cookie = ctx.session.slogan; // 这里会通过算法自动解析sessionid、sessionid.sig
  if (cookie === "ikun") {
    ctx.body = "用户信息";
  } else {
    ctx.body = "请登录";
  }
});
```
