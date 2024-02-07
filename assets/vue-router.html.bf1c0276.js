import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a as n,d as l,e,b as u,r as o}from"./app.8778cd3d.js";const c={},d=e('<h2 id="\u8DEF\u75312\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u75312\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> \u8DEF\u75312\u79CD\u6A21\u5F0F</h2><ul><li>URL\u7684hash\u8DEF\u5F84\uFF1A\u5E26#\u53F7\uFF0C\u672C\u8D28\u4E0A\u662F\u6539\u53D8window.location\u7684href\u5C5E\u6027\u3002</li><li>HTML5\u7684history\u6A21\u5F0F\uFF1A\u4E0D\u5E26#\u53F7\uFF0C<code>history.pushState()</code>(\u53EF\u8FD4\u56DE)\u3001<code>history.replaceState()</code>(\u4E0D\u53EF\u8FD4\u56DE)\u3001<code>history.go(-1)</code>\u3001<code>history.back()</code>\u3001<code>history.forward()</code></li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>',3),r={href:"https://router.vuejs.org/zh/",title:"\u5B98\u65B9\u6587\u6863",target:"_blank",rel:"noopener noreferrer"},p=u("\u5B98\u65B9\u6587\u6863"),v=e(`<p><code>npm install vue-router --save</code></p><h2 id="vue-router\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#vue-router\u6846\u67B6" aria-hidden="true">#</a> vue-router\u6846\u67B6</h2><ul><li><code>Vue.user(VueRouter)</code>\uFF1A\u5E95\u5C42\u6267\u884C\u63D2\u4EF6\u7684install\u65B9\u6CD5</li><li>\u521B\u5EFAVueRouter\u5BF9\u8C61</li><li>\u6302\u8F7D\u5230Vue\u5B9E\u4F8B\u4E0A</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import VueRouter from &#39;vue-router&#39;
import Vue from &#39;vue&#39;

// 1.\u901A\u8FC7Vue.use(\u63D2\u4EF6), \u5B89\u88C5\u63D2\u4EF6
Vue.use(VueRouter)

// 2.\u521B\u5EFAVueRouter\u5BF9\u8C61
const routes = [
  {
    path: xxx
    component: xxx
  },
  {
    path: xxx
    component: xxx
  }
]

const router = new VueRouter({
  //routes: [
  //  ...
  //]
  // \u914D\u7F6E\u8DEF\u7531\u548C\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5E94\u7528\u5173\u7CFB
  routes
  // \u914D\u7F6Ehistory\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662Fhash\u6A21\u5F0F
  mode: &#39;history&#39;
})

// 3.\u5C06router\u5BF9\u8C61\u4F20\u5165\u5230Vue\u5B9E\u4F8B
export default router

// 4.Vue\u5B9E\u4F8B\u4E2D\u6302\u8F7Drouter
// \u5B9E\u8D28\uFF1AVue.prototype.$router = router
new Vue({
  el: #app
  router
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Evue-router\u6620\u5C04\u5173\u7CFB\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Evue-router\u6620\u5C04\u5173\u7CFB\u6B65\u9AA4" aria-hidden="true">#</a> \u914D\u7F6Evue-router\u6620\u5C04\u5173\u7CFB\u6B65\u9AA4</h2><ul><li><p>\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u8DEF\u7531\u7EC4\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import Home from &#39;../components/Home&#39;
import About from &#39;../components/About&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E8C\u6B65\uFF1A\u5728VueRouter\u5BF9\u8C61\u4E2D\u914D\u7F6E\u8DEF\u7531\u6620\u5C04\uFF1A\u7EC4\u4EF6\u548C\u8DEF\u5F84\u6620\u5C04\u5173\u7CFB</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const routes = [
  {
    // \u91CD\u5B9A\u5411\u9ED8\u8BA4\u8DEF\u5F84
    path: &#39;&#39;,
    redirect: /home
  },
  {
    path: /home,
    component: Home
  },
  {
    path: /about,
    component: About
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E09\u6B65\uFF1A\u5728App.vue\u4E3B\u9875\u4F7F\u7528\u8DEF\u7531<code>&lt;router-link&gt;</code>\u548C<code>&lt;router-view&gt;</code></p><p><code>&lt;router-link&gt;</code>\uFF1Avue-router\u4E2D\u5185\u7F6E\u7684\u7EC4\u4EF6\uFF0C\u4F1A\u88AB\u6E32\u67D3\u6210<code>&lt;a&gt;</code>\u6807\u7B7E</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E3B\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5173\u4E8E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    // \u9875\u9762\u6E32\u67D3\u5360\u4F4D
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u7EC6\u8282\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7EC6\u8282\u5904\u7406" aria-hidden="true">#</a> \u7EC6\u8282\u5904\u7406</h2><ul><li><p>\u9ED8\u8BA4\u8DEF\u7531</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const routes = [
  {
    // \u91CD\u5B9A\u5411\u9ED8\u8BA4\u8DEF\u5F84
    path: &#39;&#39;,
    redirect: /home
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8DEF\u7531\u6A21\u5F0F</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const router = new VueRouter({
  routes
  // \u914D\u7F6Ehistory\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662Fhash\u6A21\u5F0F
  mode: &#39;history&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>router-link\u5C5E\u6027</p><ul><li><p><code>to</code>\uFF1A\u7528\u4E8E\u6307\u5B9A\u8DF3\u8F6C\u7684\u8DEF\u5F84\u3002</p></li><li><p><code>tag</code>\uFF1A\u6307\u5B9A<code>&lt;router-link&gt;</code>\u4E4B\u540E\u6E32\u67D3\u6210\u4EC0\u4E48\u7EC4\u4EF6\uFF0C\u5982button\u3002</p></li><li><p><code>replace</code>\uFF1A\u540E\u9000\u952E\u8FD4\u56DE\u4E0D\u80FD\u8FD4\u56DE\u5230\u4E0A\u4E00\u4E2A\u9875\u9762\u4E2D\u3002</p></li><li><p><code>active-class</code>\uFF1A\u5F53<code>&lt;router-link&gt;</code>\u5BF9\u5E94\u7684\u8DEF\u7531\u5339\u914D\u6210\u529F\u65F6, \u4F1A\u81EA\u52A8\u7ED9\u5F53\u524D\u5143\u7D20\u8BBE\u7F6E\u4E00\u4E2A<code>router-link-active</code>\u7684class\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const router = new VueRouter({
  ...
  linkActiveClass: &#39;active&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531</h2><ul><li><code>/user/:id</code>\uFF1A\u4F20\u9012\u53C2\u6570</li><li><code>this.$route.params.id</code>\uFF1Ajs\u4EE3\u7801\u83B7\u5F97\u53C2\u6570</li><li><code>{{ $route.params.id }}</code>\uFF1AMustache \u83B7\u5F97\u53C2\u6570</li></ul><h2 id="\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> \u53C2\u6570\u4F20\u9012</h2><ul><li><p>params\u7C7B\u578B\uFF1A\u5982 <code>/router/123</code></p></li><li><p>query \u7C7B\u578B\uFF0C\u5982 <code>/router?id=123</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span><span class="token punctuation">&gt;</span></span>\u4F20\u9012\u53C2\u6570
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
  <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ 
    path: &#39;/router/&#39; + 123, 
    query: { name: &#39;Nevermore&#39;, age: 22 }}<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
// JS\u4EE3\u7801\u4F20\u9012\u53C2\u6570
method() {
  this.$router.push({
    path: &#39;/router/&#39; + 123, 
    query: { name: &#39;Nevermore&#39;, age: 22 }}&quot;
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="route\u548Crouter\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#route\u548Crouter\u533A\u522B" aria-hidden="true">#</a> Route\u548CRouter\u533A\u522B</h2><p><code>$route</code>\u662F\u5904\u4E8E\u6D3B\u8DC3\u72B6\u6001\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u83B7\u53D6name\u3001path\u3001query\u3001params\u7B49\uFF08\u83B7\u53D6url\u4F20\u8FC7\u6765\u7684\u53C2\u6570<code>this.$route.params.userId</code>\uFF09</p><p><code>$router</code>\u662F VueRouter\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u60F3\u8981\u5BFC\u822A\u5230\u4E0D\u540CURL\uFF0C\u5219\u4F7F\u7528$router.push\u65B9\u6CD5\uFF08\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u8DF3\u8F6C\u8DEF\u7531\uFF09</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>ButtonClick() {
  this.$router.push(&#39;/home&#39;)
  this.$router.replace(&#39;/home&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u8DEF\u7531\u61D2\u52A0\u8F7D</h2><p>\u7EC4\u4EF6\u88AB\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u624D\u52A0\u8F7D</p><p>\u539F\u6765\uFF1A<code>import Home from &#39;../components/Home&#39;</code></p><p>\u61D2\u52A0\u8F7D\uFF1A<code>const Home = () \u21D2 import(../components/Home)</code></p><h2 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u5D4C\u5957\u8DEF\u7531</h2><ul><li><code>children\uFF1A[ ... ]</code></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// index.js
{
  path: &#39;/home&#39;,
  component: Home,
  children: [
    {
      path: &#39;&#39;,
      redirect: &#39;news&#39;
    },
    {
      path: &#39;news&#39;,
      component: HomeNews
    },
    {
      path: &#39;message&#39;,
      component: HomeMessage
    }
  ]
}
// Home.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u65B0\u95FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6D88\u606F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5168\u5C40\u5BFC\u822A\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5BFC\u822A\u5B88\u536B" aria-hidden="true">#</a> \u5168\u5C40\u5BFC\u822A\u5B88\u536B</h2><p><code>router.beforeEach</code></p><ul><li><code>to\uFF1ARoute</code>\uFF1A\u5373\u5C06\u8981\u8FDB\u5165\u7684\u76EE\u6807\u7684\u8DEF\u7531\u5BF9\u8C61\u3002</li><li><code>from\uFF1ARoute</code>\uFF1A\u5F53\u524D\u5BFC\u822A\u5373\u5C06\u8981\u79BB\u5F00\u7684\u8DEF\u7531\u5BF9\u8C61\u3002</li><li><code>next\uFF1AFunction</code>\uFF1A\u8C03\u7528\u8BE5\u65B9\u6CD5\u540E, \u624D\u80FD\u8FDB\u5165\u4E0B\u4E00\u4E2A\u94A9\u5B50\u3002 <ul><li><code>next()</code>\uFF1A\u8FDB\u884C\u4E0B\u4E00\u4E2A\u94A9\u5B50\u51FD\u6570\u3002</li><li><code>next(false)</code>\uFF1A\u4E2D\u65AD\u5F53\u524D\u5BFC\u822A\u3002</li><li><code>next(&#39;/&#39;)</code>\uFF1A\u82E5\u672A\u767B\u5F55\uFF0C\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\u3002</li><li><code>next(error)</code>\uFF1A\u4F20\u5165error\uFF0C\u5BFC\u822A\u88AB\u7EC8\u6B62\u5E76\u5C06\u8BE5\u9519\u8BEF\u4F20\u9012\u7ED9<code>router.onError()</code></li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// index.js
{
  path: &#39;/home&#39;,
  component: Home,
  // \u63CF\u8FF0\u6570\u636E\u7684\u6570\u636E
  meta: {
    title: &#39;\u9996\u9875&#39;
  }
}

// \u524D\u7F6E\u5B88\u536B
router.beforeEach((to, from, next) =&gt; {
  // \u4ECEfrom\u8DF3\u8F6C\u5230to
  document.title = to.matched[0].meta.title
  // next\u5FC5\u987B\u8C03\u7528
  next()
})

// \u540E\u7F6E\u94A9\u5B50\uFF08\u94A9\u5B50=\u56DE\u8C03\uFF09
router.afterEach((to, from) =&gt; {
  console.log(&#39;-----&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B" aria-hidden="true">#</a> \u8DEF\u7531\u72EC\u4EAB\u5B88\u536B</h2><ul><li>\u8DEF\u7531\u914D\u7F6E\u4E0A\u5B9A\u4E49<code>beforeEnter</code> \u5B88\u536B\u3002</li></ul><h2 id="\u7EC4\u4EF6\u5185\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5185\u5B88\u536B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5185\u5B88\u536B</h2><ul><li>\u5728\u8DEF\u7531\u7EC4\u4EF6\u5185\u5B9A\u4E49<code>beforeRouteEnter</code>\u3001<code>beforeRouteUpdate</code>\u3001<code>beforeRouteLeave</code>\u5B88\u536B\u3002</li></ul><h2 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> Keep-alive</h2><p>\u6982\u5FF5\uFF1A\u662FVue\u5185\u7F6E\u7684\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u88AB\u5305\u542B\u7684\u7EC4\u4EF6\u4FDD\u7559\u72B6\u6001\uFF08\u7F13\u5B58\u8D77\u6765\uFF09\uFF0C\u6216\u907F\u514D\u91CD\u65B0\u6C61\u67D3\u3002</p><ul><li>include\uFF1A\u53EA\u6709\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58\u3002</li><li>exclude\uFF1A\u4EFB\u4F55\u5339\u914D\u7684\u7EC4\u4EF6\u90FD\u4E0D\u4F1A\u88AB\u7F13\u5B58\u3002</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// \u6392\u9664\u7684\u5C5E\u6027\u4E3A\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u7684name, \u6240\u6709\u7684\u8DEF\u5F84\u5339\u914D\u5230\u7684\u89C6\u56FE\u7EC4\u4EF6\u90FD\u4F1A\u88AB\u7F13\u5B58
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">exclude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Profile,User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u547D\u5468\u671F\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u94A9\u5B50" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u94A9\u5B50</h2><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_NgmagdGKqy.png" alt="\u751F\u547D\u5468\u671F"></p>`,37);function m(b,h){const s=o("ExternalLinkIcon");return i(),t("div",null,[d,n("p",null,[n("a",r,[p,l(s)])]),v])}const x=a(c,[["render",m],["__file","vue-router.html.vue"]]);export{x as default};
