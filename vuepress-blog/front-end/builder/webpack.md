---
title: webpack
category:
  - 构建工具
---

## 什么是[webpack](https://webpack.docschina.org/)

- `webpack`和`gulp`的对比
  - grunt/gulp 更加强调的通过配置一系列 task 实现前端流程的自动化（例如 ES6 转 ES5、ts 转化，图片压缩，scss 转成 css），模块化不是它的核心。
  - webpack 更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。
- webpack 依赖环境（Node.js、npm）
- 安装 webpack
  - `npm install webpack -g`全局安装
  - `cd 对应目录` `npm install webpack —save-dev` 局部开发环境安装

## webpack 的起步

- webpack 命令
  - `webpack src/main.js dist/bundle.js`将 main.js 打包到 dist 中的 bundle.js

## webpack 的[loader](https://webpack.docschina.org/loaders/)

- [`style-loader`](https://webpack.docschina.org/loaders/style-loader) 将模块导出的内容作为样式并添加到 DOM 中。
- [`css-loader`](https://webpack.docschina.org/loaders/css-loader) 加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码。
- [`less-loader`](https://webpack.docschina.org/loaders/less-loader) 加载并编译 LESS 文件。
- [`url-loader`](https://v4.webpack.docschina.org/loaders/url-loader) 像 file loader 一样工作，但如果文件小于限制，会将图片编译成 base64 字符串形式；若文件大于限制，需要使用 file-loader 模块进行加载。
- [`babel-loader`](https://webpack.docschina.org/loaders/babel-loader) 使用 [Babel](https://babeljs.io/) 加载 ES2015+ 代码并将其转换为 ES5。

## webpack 中配置 Vue

1. 引入`vue-loader`：加载 vue 文件，`vue-template-compiler`：解析 template 成 render 函数
2. 抽离 index.html 中`<div id=#app>`的模板`template:'<App/>'`

```vue
  const App = {
    template:` `,
    data(){ return {} },
    methods: { }
  }

  new Vue({
    el: '#app',
    // 直接自动替换掉index.html中的<div id="app"></div>，所以要把template再抽取成组件
    template: '<App/>',
    components: {
      App
    }
  })
```

3. 继续抽离成单独的 app.js 文件

```vue
  // 由于模板，js代码没有分离，因为继续抽取成App.vue(webpack要导入vue-loader以及vue-template-compiler)
  export default {
    template:  `<div> </div>`,
    data() {
      return {  }
    },
    methods: {  }
  }
```

4. 由于模板，js 代码没有分离，故继续抽离到 vue 文件下的 App.vue(此时 webpack 要导入 vue-loader)

```vue
  // vue/App.vue
  <template>
    <div>
    </div>
  </template>

  <script>
    import Cpn from './Cpn'

    export default {
      name: "App",
      components: {
        Cpn
      },
      data() {
        return { }
      },
      methods: { }
    }
  </script>

  <style scoped>
  </style>
```

## webpack 的 plugin

- loader 主要用于转换某些类型的模块，它是一个转换器。
- plugin 是插件，它是对 webpack 本身的扩展，是一个扩展器。

```vue
  // 添加插件
  plugins: [
      // bundle.js中添加版权信息
      new webpack.BannerPlugin('最终版权归aaa所有'),

      // npm install html-webpack-plugin --save-dev
      // 根据index.html模板（包含div #app）在dist中自动生成index.html
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),

      // npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
      // 压缩js代码
      new UglifyjsWebpackPlugin()
  ],
```

## 搭建本地服务器

- `webpack-dev-server`（npm install --save-dev webpack-dev-server@2.9.1）

```vue
  // 搭建本地服务器，从而不用每次npm run build
  // "dev": "webpack-dev-server --open" 自动打开浏览器
  devServer: {
    // 为哪一个文件夹提供本地服务
    contentBase: './dist',
    // 页面实时刷新
    inline: true
  }
```

## 配置文件的分离

将`webpack.config.js`拆分成`base.config.js` + `dev.config.js` + `prod.config.js`

`dev.config.js`：

```javascript
// 配置文件分离，首先安装npm install webpack-merge --save-dev，调用webpackMerge(xxConfig, yyConfig)方法，将两个配置文件合并
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
```

`prod.config.js`：

```javascript
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})

```

`package.json`：

- `"build": "webpack --config ./build/prod.config.js"`, 指定 config 生产环境配置文件，不然默认是 webpack.config.js 会找不到
- `"dev": "webpack-dev-server --open --config ./build/dev.config.js"`， 指定 config 开发环境配置文件，`--open` 自动打开浏览器

```json
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./build/prod.config.js",
    "dev": "webpack-dev-server --open --config ./build/dev.config.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^2.0.2",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^4.1.0",
    "style-loader": "^0.23.1",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^1.1.2",
    "vue-loader": "^13.0.0",
    "vue-template-compiler": "^2.5.21",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.9.3",
    "webpack-merge": "^4.1.5"
  },
  "dependencies": {
    "vue": "^2.5.21"
  }
}
```

## webpack 的配置

`webpack.config.js`

```javascript
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 涉及到url时如background:url("")，自动拼接dist
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              // img：文件要打包到的文件夹
              // name：获取图片原来的名字，放在该位置
              // hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位
              // ext：使用图片原来的扩展名
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      // 引入Vue.js
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  // 使用runtime-compiler 时, 需要配置resolve，不然会报runtime-only错误
  // runtime-only -> 代码中，不可以有任何的template模板(vue实例也属于template模板)
  // runtime-compiler -> 代码中，可以有template模板,因为有compiler可以编译template模板
  resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // 添加插件
  plugins: [
      // bundle.js中添加版权信息
      new webpack.BannerPlugin('最终版权归aaa所有'),
      // 根据index.html模板（包含div #app）在dist中自动生成index.html
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      // 压缩js代码
      new UglifyjsWebpackPlugin()
  ],
  // 搭建本地服务器，从而不用每次npm run build
  // "dev": "webpack-dev-server --open" 自动打开浏览器
  devServer: {
    // 为哪一个文件夹提供本地服务
    contentBase: './dist',
    // 页面实时刷新
    inline: true
  }
}
```

## Webpack 分包处理

import 函数异步导入可以让 webpack 对导入文件进行分包处理

```vue
import("./utils/math").then(res => {
  ...
})
```

`jsconfig.json`作用: 给 VSCode 来进行读取, VSCode 在读取到其中的内容时, 给我们的代码更加友好的提示（`vue.config.js`中起别名，只有在`jsconfig.json`配置后 vscode 才会有提示）

```vue
// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 配置路径别名
      // @是已经配置好的路径别名: 对应的是src路径
      alias: {
        "utils": "@/utils"
      }
    }
  }
})
```

```vue
// jsconfig.js
"paths": {
  "@/*": [
    "src/*"
  ],
  "utils/*": [
    "src/utils/*"
  ]
},

```
