---
title: Node.js数据库驱动
category:
  - node.js
---

安装：`npm install mysql2`

## 基本使用

`query`：执行普通语句

```javascript
const mysql = require('mysql2')

//1.建立连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'testsql',
  user: 'root',
  password: '123456'
})

//2.执行操作语句
const statement = 'select * from `student`;'
connection.query(statement, (err, values, fields) => {
  if(err) {
    console.log('查询失败：', err);
    return
  }

  console.log(values);
  console.log(fields);
})

```

## Mysql2 支持预编译语句

![](https://secure2.wostatic.cn/static/qyzKoZUTPoxHHZ17q7oniH/image.png?auth_key=1690640599-x5CG7f9iZUqZhRSoANsNMU-0-d2e8e2c014d186d146e62a7bd1b44684)

`execute`：执行预处理语句

```javascript
const mysql = require('mysql2')

//1.建立连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'testsql',
  user: 'root',
  password: '123456'
})

//2.执行预处理语句
const statement = 'select * from `score` where c_id = ? and s_score > ?;'
connection.execute(statement, [03, 90], (err, values) => {
  if(err) {
    console.log('查询失败：', err);
    return
  }

  console.log(values);
})

```

## 连接池使用

```javascript
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'testsql',
  user: 'root',
  password: '123456',
  connectionLimit: 5
})

```

## Promise 写法

```javascript
connectionPool.promise().execute(statement, [03, 90]).then((res) => {
  const [values, fields] = res // 解构res
  console.log(values);
  console.log(fields);
}).catch((err) => {
  console.log(err);
});

```
