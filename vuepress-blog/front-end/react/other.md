# 其它

## PWA

`PWA`全称`Progressive Web App`，即渐进式`WEB`应用； &#x20;

- 一个 `PWA` 应用首先是一个网页, 可以通过 `Web` 技术编写出一个网页应用；
- 随后添加上 `App Manifest` 和 `Service Worker` 来实现 `PWA` 的安装和离线等功能； &#x20;
- 这种`Web`存在的形式，我们也称之为是 `Web App`；

`React`脚手架文件中存在`PWA`文件。

`PWA`解决了哪些问题呢？ &#x20;

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏； &#x20;
- &#x20;实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能； &#x20;
- 实现了消息推送； &#x20;
- 等等一系列类似于`Native App`相关的功能

## SPA

SPA 单页面富应用缺陷

1.  不利于 SEO 搜索引擎优化

对于`SPA`页面，爬虫只能爬取`index.html`这一个请求文件，这里面没多少东西

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_lSx_VztPOX.png)

1.  影响首屏渲染速度（SSR）

对于`SPA`会先下载`index.html`，然后下载`js`文件，并且执行`js`文件（可由`Node`提前完成`SSR`），生成`html`页面结构

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_ILUsU74o1d.png)

## SSR 同构应用

同构是一种`SSR`的形态，是现代`SSR`的一种表现形式，当用户发出请求时，先在服务器通过 SSR 渲染出首页的内容，但是对应的代码同样可以在客户端被执行。执行的目的包括事件绑定等以及其他页面切换时也可以在客户端被渲染。

其中`hydration`是指在浏览器中远行的`SSR`同构应用的交互行为（如点击按钮产生的事件）注入到最终页面

> 在进行 `SSR` 时，我们的页面会呈现为 `HTML`。 但仅 `HTML` 不足以使页面具有交互性。例如，浏览器端 `JavaScript` 为零的页面不能是交互式的（没有 `JavaScript` 事件处理程序来响应用户操作，例如单击按钮）。为了使我们的页面具有交互性，除了在 `Node.js` 中将页面呈现为 `HTML` 之外，我们的 `UI` 框架（`Vue`/`React`/...）还在浏览器中加载和呈现页面。（它创建页面的内部表示，然后将内部表示映射到我们在`Node.js` 中呈现的 `HTML` 的 `DOM` 元素），这个过程称为`hydration`

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_1I8XW5IqRx.png)

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_m0tFSUAdd5.png)
