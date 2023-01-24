--- 
  title: Less
---

## Less代码的编译

1. 安装`npm install -g less`，通过webpack编译

   ```js:no-line-numbers
   module: {
     rules: [
       {
         test: /\.less$/,
         use: [
           {
             loader: 'style-loader',
           },
           {
             loader: 'css-loader',
           },
           {
             loader: 'less-loader',
           },
         ],
       },
     ],
   },
   ```

2. 引入CDN

   ```html:no-line-numbers
   <link rel="stylesheet/less" href="style.less" />
   <script src="https://cdn.jsdelivr.net/npm/less@4"></script>
   ```

3. 通过vscode插件easy-less编译或CSS在线编译`https://lesscss.org/less-preview/`

## Less语法

### 变量

```less:no-line-numbers
@themecolor: #4D926F;
@mainFontSize: 12px;
@smallFontSize: 10px;

body {
  color: @themecolor;
  font-size: @mainFontSize;
}
```

### 嵌套

```less:no-line-numbers
#header {
  color: #fff;
  .logo {
    width: 300px;
    height: 80px;
  }
  h1 {
    font-size: @mainFontSize;
  }
  p {
    .link {
      color: @themecolor;
      font-size: @smallFontSize;

      &:hover {
        color: #00f;
      }
    }
  }
}
```

### 混入

通俗的讲，就是把一些重复的代码抽离出来，以后直接复用就可以了。

```less:no-line-numbers
.nowrap_ellipsis { // 无参混入
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.border(@borderWith: 5px, @borderColor: blue) { // 有参混入
  border: @borderWith solid @borderColor;
}

.box_size { // 混入和映射结合使用
    width: 100px;
    height: 100px;
}

.box1 {
    width: .box_size()[width];
    background: #f00;
    .nowrap_ellipsis();
    .border(10px, red);
}

.box2 {
    width: 200px;
    background: #0f0;
    .nowrap_ellipsis();
}
```

**继承**：`&:extend(.box_size);`

**内置函数**：`color: color(skyblue);`、`width: convert(100px, "in");`等

**作用域**：首先在本地查找变量或混入，若找不到，则从父级作用域继承。
