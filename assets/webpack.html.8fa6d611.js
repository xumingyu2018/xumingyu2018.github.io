import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,d as e,b as s,e as p,r as i}from"./app.af062d60.js";const c={},r={id:"\u4EC0\u4E48\u662Fwebpack",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#\u4EC0\u4E48\u662Fwebpack","aria-hidden":"true"},"#",-1),d=s(" \u4EC0\u4E48\u662F"),k={href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"},v=s("webpack"),m=p('<ul><li><code>webpack</code>\u548C<code>gulp</code>\u7684\u5BF9\u6BD4 <ul><li>grunt/gulp \u66F4\u52A0\u5F3A\u8C03\u7684\u901A\u8FC7\u914D\u7F6E\u4E00\u7CFB\u5217 task \u5B9E\u73B0\u524D\u7AEF\u6D41\u7A0B\u7684\u81EA\u52A8\u5316\uFF08\u4F8B\u5982 ES6 \u8F6C ES5\u3001ts \u8F6C\u5316\uFF0C\u56FE\u7247\u538B\u7F29\uFF0Cscss \u8F6C\u6210 css\uFF09\uFF0C\u6A21\u5757\u5316\u4E0D\u662F\u5B83\u7684\u6838\u5FC3\u3002</li><li>webpack \u66F4\u52A0\u5F3A\u8C03\u6A21\u5757\u5316\u5F00\u53D1\u7BA1\u7406\uFF0C\u800C\u6587\u4EF6\u538B\u7F29\u5408\u5E76\u3001\u9884\u5904\u7406\u7B49\u529F\u80FD\uFF0C\u662F\u4ED6\u9644\u5E26\u7684\u529F\u80FD\u3002</li></ul></li><li>webpack \u4F9D\u8D56\u73AF\u5883\uFF08Node.js\u3001npm\uFF09</li><li>\u5B89\u88C5 webpack <ul><li><code>npm install webpack -g</code>\u5168\u5C40\u5B89\u88C5</li><li><code>cd \u5BF9\u5E94\u76EE\u5F55</code> <code>npm install webpack \u2014save-dev</code> \u5C40\u90E8\u5F00\u53D1\u73AF\u5883\u5B89\u88C5</li></ul></li></ul><h2 id="webpack-\u7684\u8D77\u6B65" tabindex="-1"><a class="header-anchor" href="#webpack-\u7684\u8D77\u6B65" aria-hidden="true">#</a> webpack \u7684\u8D77\u6B65</h2><ul><li>webpack \u547D\u4EE4 <ul><li><code>webpack src/main.js dist/bundle.js</code>\u5C06 main.js \u6253\u5305\u5230 dist \u4E2D\u7684 bundle.js</li></ul></li></ul>',3),b={id:"webpack-\u7684loader",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#webpack-\u7684loader","aria-hidden":"true"},"#",-1),q=s(" webpack \u7684"),y={href:"https://webpack.docschina.org/loaders/",target:"_blank",rel:"noopener noreferrer"},h=s("loader"),f={href:"https://webpack.docschina.org/loaders/style-loader",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"style-loader",-1),_=s(" \u5C06\u6A21\u5757\u5BFC\u51FA\u7684\u5185\u5BB9\u4F5C\u4E3A\u6837\u5F0F\u5E76\u6DFB\u52A0\u5230 DOM \u4E2D\u3002"),x={href:"https://webpack.docschina.org/loaders/css-loader",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"css-loader",-1),S=s(" \u52A0\u8F7D CSS \u6587\u4EF6\u5E76\u89E3\u6790 import \u7684 CSS \u6587\u4EF6\uFF0C\u6700\u7EC8\u8FD4\u56DE CSS \u4EE3\u7801\u3002"),C={href:"https://webpack.docschina.org/loaders/less-loader",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"less-loader",-1),W=s(" \u52A0\u8F7D\u5E76\u7F16\u8BD1 LESS \u6587\u4EF6\u3002"),B={href:"https://v4.webpack.docschina.org/loaders/url-loader",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"url-loader",-1),V=s(" \u50CF file loader \u4E00\u6837\u5DE5\u4F5C\uFF0C\u4F46\u5982\u679C\u6587\u4EF6\u5C0F\u4E8E\u9650\u5236\uFF0C\u4F1A\u5C06\u56FE\u7247\u7F16\u8BD1\u6210 base64 \u5B57\u7B26\u4E32\u5F62\u5F0F\uFF1B\u82E5\u6587\u4EF6\u5927\u4E8E\u9650\u5236\uFF0C\u9700\u8981\u4F7F\u7528 file-loader \u6A21\u5757\u8FDB\u884C\u52A0\u8F7D\u3002"),A={href:"https://webpack.docschina.org/loaders/babel-loader",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"babel-loader",-1),$=s(" \u4F7F\u7528 "),N={href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"},U=s("Babel"),D=s(" \u52A0\u8F7D ES2015+ \u4EE3\u7801\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A ES5\u3002"),L=p(`<h2 id="webpack-\u4E2D\u914D\u7F6E-vue" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E2D\u914D\u7F6E-vue" aria-hidden="true">#</a> webpack \u4E2D\u914D\u7F6E Vue</h2><ol><li>\u5F15\u5165<code>vue-loader</code>\uFF1A\u52A0\u8F7D vue \u6587\u4EF6\uFF0C<code>vue-template-compiler</code>\uFF1A\u89E3\u6790 template \u6210 render \u51FD\u6570</li><li>\u62BD\u79BB index.html \u4E2D<code>&lt;div id=#app&gt;</code>\u7684\u6A21\u677F<code>template:&#39;&lt;App/&gt;&#39;</code></li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  const App = {
    template:\` \`,
    data(){ return {} },
    methods: { }
  }

  new Vue({
    el: &#39;#app&#39;,
    // \u76F4\u63A5\u81EA\u52A8\u66FF\u6362\u6389index.html\u4E2D\u7684<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\uFF0C\u6240\u4EE5\u8981\u628Atemplate\u518D\u62BD\u53D6\u6210\u7EC4\u4EF6
    template: &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span><span class="token punctuation">/&gt;</span></span>&#39;,
    components: {
      App
    }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u7EE7\u7EED\u62BD\u79BB\u6210\u5355\u72EC\u7684 app.js \u6587\u4EF6</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u7531\u4E8E\u6A21\u677F\uFF0Cjs\u4EE3\u7801\u6CA1\u6709\u5206\u79BB\uFF0C\u56E0\u4E3A\u7EE7\u7EED\u62BD\u53D6\u6210App.vue(webpack\u8981\u5BFC\u5165vue-loader\u4EE5\u53CAvue-template-compiler)
  export default {
    template:  \`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\`,
    data() {
      return {  }
    },
    methods: {  }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u7531\u4E8E\u6A21\u677F\uFF0Cjs \u4EE3\u7801\u6CA1\u6709\u5206\u79BB\uFF0C\u6545\u7EE7\u7EED\u62BD\u79BB\u5230 vue \u6587\u4EF6\u4E0B\u7684 App.vue(\u6B64\u65F6 webpack \u8981\u5BFC\u5165 vue-loader)</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // vue/App.vue
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> Cpn <span class="token keyword">from</span> <span class="token string">&#39;./Cpn&#39;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        Cpn
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-\u7684-plugin" tabindex="-1"><a class="header-anchor" href="#webpack-\u7684-plugin" aria-hidden="true">#</a> webpack \u7684 plugin</h2><ul><li>loader \u4E3B\u8981\u7528\u4E8E\u8F6C\u6362\u67D0\u4E9B\u7C7B\u578B\u7684\u6A21\u5757\uFF0C\u5B83\u662F\u4E00\u4E2A\u8F6C\u6362\u5668\u3002</li><li>plugin \u662F\u63D2\u4EF6\uFF0C\u5B83\u662F\u5BF9 webpack \u672C\u8EAB\u7684\u6269\u5C55\uFF0C\u662F\u4E00\u4E2A\u6269\u5C55\u5668\u3002</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u6DFB\u52A0\u63D2\u4EF6
  plugins: [
      // bundle.js\u4E2D\u6DFB\u52A0\u7248\u6743\u4FE1\u606F
      new webpack.BannerPlugin(&#39;\u6700\u7EC8\u7248\u6743\u5F52aaa\u6240\u6709&#39;),

      // npm install html-webpack-plugin --save-dev
      // \u6839\u636Eindex.html\u6A21\u677F\uFF08\u5305\u542Bdiv #app\uFF09\u5728dist\u4E2D\u81EA\u52A8\u751F\u6210index.html
      new HtmlWebpackPlugin({
        template: &#39;index.html&#39;
      }),

      // npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
      // \u538B\u7F29js\u4EE3\u7801
      new UglifyjsWebpackPlugin()
  ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u642D\u5EFA\u672C\u5730\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u672C\u5730\u670D\u52A1\u5668" aria-hidden="true">#</a> \u642D\u5EFA\u672C\u5730\u670D\u52A1\u5668</h2><ul><li><code>webpack-dev-server</code>\uFF08npm install --save-dev webpack-dev-server@2.9.1\uFF09</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u642D\u5EFA\u672C\u5730\u670D\u52A1\u5668\uFF0C\u4ECE\u800C\u4E0D\u7528\u6BCF\u6B21npm run build
  // &quot;dev&quot;: &quot;webpack-dev-server --open&quot; \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668
  devServer: {
    // \u4E3A\u54EA\u4E00\u4E2A\u6587\u4EF6\u5939\u63D0\u4F9B\u672C\u5730\u670D\u52A1
    contentBase: &#39;./dist&#39;,
    // \u9875\u9762\u5B9E\u65F6\u5237\u65B0
    inline: true
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6\u7684\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u7684\u5206\u79BB" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u7684\u5206\u79BB</h2><p>\u5C06<code>webpack.config.js</code>\u62C6\u5206\u6210<code>base.config.js</code> + <code>dev.config.js</code> + <code>prod.config.js</code></p><p><code>dev.config.js</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u914D\u7F6E\u6587\u4EF6\u5206\u79BB\uFF0C\u9996\u5148\u5B89\u88C5npm install webpack-merge --save-dev\uFF0C\u8C03\u7528webpackMerge(xxConfig, yyConfig)\u65B9\u6CD5\uFF0C\u5C06\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6\u5408\u5E76</span>
<span class="token keyword">const</span> webpackMerge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./base.config&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">webpackMerge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>prod.config.js</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> UglifyjsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackMerge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./base.config&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">webpackMerge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">UglifyjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>package.json</code>\uFF1A</p><ul><li><code>&quot;build&quot;: &quot;webpack --config ./build/prod.config.js&quot;</code>, \u6307\u5B9A config \u751F\u4EA7\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u7136\u9ED8\u8BA4\u662F webpack.config.js \u4F1A\u627E\u4E0D\u5230</li><li><code>&quot;dev&quot;: &quot;webpack-dev-server --open --config ./build/dev.config.js&quot;</code>\uFF0C \u6307\u5B9A config \u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\uFF0C<code>--open</code> \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meetwebpack&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config ./build/prod.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --open --config ./build/dev.config.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;babel-core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.26.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.1.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-preset-es2015&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.24.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;css-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;html-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;less&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.9.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;less-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;style-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.23.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uglifyjs-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^13.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-template-compiler&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.5.21&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.6.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.9.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-merge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.5&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.5.21&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack-\u7684\u914D\u7F6E" aria-hidden="true">#</a> webpack \u7684\u914D\u7F6E</h2><p><code>webpack.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UglifyjsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5165\u53E3</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u51FA\u53E3</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6D89\u53CA\u5230url\u65F6\u5982background:url(&quot;&quot;)\uFF0C\u81EA\u52A8\u62FC\u63A5dist</span>
    <span class="token comment">// publicPath: &#39;dist/&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// css-loader\u53EA\u8D1F\u8D23\u5C06css\u6587\u4EF6\u8FDB\u884C\u52A0\u8F7D</span>
        <span class="token comment">// style-loader\u8D1F\u8D23\u5C06\u6837\u5F0F\u6DFB\u52A0\u5230DOM\u4E2D</span>
        <span class="token comment">// \u4F7F\u7528\u591A\u4E2Aloader\u65F6, \u662F\u4ECE\u53F3\u5411\u5DE6</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// creates style nodes from JS strings</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span> <span class="token comment">// translates CSS into CommonJS</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// compiles Less to CSS</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif|jpeg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// \u5F53\u52A0\u8F7D\u7684\u56FE\u7247, \u5C0F\u4E8Elimit\u65F6, \u4F1A\u5C06\u56FE\u7247\u7F16\u8BD1\u6210base64\u5B57\u7B26\u4E32\u5F62\u5F0F.</span>
              <span class="token comment">// \u5F53\u52A0\u8F7D\u7684\u56FE\u7247, \u5927\u4E8Elimit\u65F6, \u9700\u8981\u4F7F\u7528file-loader\u6A21\u5757\u8FDB\u884C\u52A0\u8F7D.</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">13000</span><span class="token punctuation">,</span>
              <span class="token comment">// img\uFF1A\u6587\u4EF6\u8981\u6253\u5305\u5230\u7684\u6587\u4EF6\u5939</span>
              <span class="token comment">// name\uFF1A\u83B7\u53D6\u56FE\u7247\u539F\u6765\u7684\u540D\u5B57\uFF0C\u653E\u5728\u8BE5\u4F4D\u7F6E</span>
              <span class="token comment">// hash:8\uFF1A\u4E3A\u4E86\u9632\u6B62\u56FE\u7247\u540D\u79F0\u51B2\u7A81\uFF0C\u4F9D\u7136\u4F7F\u7528hash\uFF0C\u4F46\u662F\u6211\u4EEC\u53EA\u4FDD\u75598\u4F4D</span>
              <span class="token comment">// ext\uFF1A\u4F7F\u7528\u56FE\u7247\u539F\u6765\u7684\u6269\u5C55\u540D</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;img/[name].[hash:8].[ext]&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// exclude: \u6392\u9664</span>
        <span class="token comment">// include: \u5305\u542B</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(node_modules|bower_components)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;es2015&#39;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F15\u5165Vue.js</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528runtime-compiler \u65F6, \u9700\u8981\u914D\u7F6Eresolve\uFF0C\u4E0D\u7136\u4F1A\u62A5runtime-only\u9519\u8BEF</span>
  <span class="token comment">// runtime-only -&gt; \u4EE3\u7801\u4E2D\uFF0C\u4E0D\u53EF\u4EE5\u6709\u4EFB\u4F55\u7684template\u6A21\u677F(vue\u5B9E\u4F8B\u4E5F\u5C5E\u4E8Etemplate\u6A21\u677F)</span>
  <span class="token comment">// runtime-compiler -&gt; \u4EE3\u7801\u4E2D\uFF0C\u53EF\u4EE5\u6709template\u6A21\u677F,\u56E0\u4E3A\u6709compiler\u53EF\u4EE5\u7F16\u8BD1template\u6A21\u677F</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// alias: \u522B\u540D</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;vue$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm.js&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6DFB\u52A0\u63D2\u4EF6</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// bundle.js\u4E2D\u6DFB\u52A0\u7248\u6743\u4FE1\u606F</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u7EC8\u7248\u6743\u5F52aaa\u6240\u6709&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6839\u636Eindex.html\u6A21\u677F\uFF08\u5305\u542Bdiv #app\uFF09\u5728dist\u4E2D\u81EA\u52A8\u751F\u6210index.html</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// \u538B\u7F29js\u4EE3\u7801</span>
      <span class="token keyword">new</span> <span class="token class-name">UglifyjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u642D\u5EFA\u672C\u5730\u670D\u52A1\u5668\uFF0C\u4ECE\u800C\u4E0D\u7528\u6BCF\u6B21npm run build</span>
  <span class="token comment">// &quot;dev&quot;: &quot;webpack-dev-server --open&quot; \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E3A\u54EA\u4E00\u4E2A\u6587\u4EF6\u5939\u63D0\u4F9B\u672C\u5730\u670D\u52A1</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9875\u9762\u5B9E\u65F6\u5237\u65B0</span>
    <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-\u5206\u5305\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#webpack-\u5206\u5305\u5904\u7406" aria-hidden="true">#</a> Webpack \u5206\u5305\u5904\u7406</h2><p>import \u51FD\u6570\u5F02\u6B65\u5BFC\u5165\u53EF\u4EE5\u8BA9 webpack \u5BF9\u5BFC\u5165\u6587\u4EF6\u8FDB\u884C\u5206\u5305\u5904\u7406</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import(&quot;./utils/math&quot;).then(res =&gt; {
  ...
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>jsconfig.json</code>\u4F5C\u7528: \u7ED9 VSCode \u6765\u8FDB\u884C\u8BFB\u53D6, VSCode \u5728\u8BFB\u53D6\u5230\u5176\u4E2D\u7684\u5185\u5BB9\u65F6, \u7ED9\u6211\u4EEC\u7684\u4EE3\u7801\u66F4\u52A0\u53CB\u597D\u7684\u63D0\u793A\uFF08<code>vue.config.js</code>\u4E2D\u8D77\u522B\u540D\uFF0C\u53EA\u6709\u5728<code>jsconfig.json</code>\u914D\u7F6E\u540E vscode \u624D\u4F1A\u6709\u63D0\u793A\uFF09</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// vue.config.js
const { defineConfig } = require(&#39;@vue/cli-service&#39;)
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // \u914D\u7F6E\u8DEF\u5F84\u522B\u540D
      // @\u662F\u5DF2\u7ECF\u914D\u7F6E\u597D\u7684\u8DEF\u5F84\u522B\u540D: \u5BF9\u5E94\u7684\u662Fsrc\u8DEF\u5F84
      alias: {
        &quot;utils&quot;: &quot;@/utils&quot;
      }
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// jsconfig.js
&quot;paths&quot;: {
  &quot;@/*&quot;: [
    &quot;src/*&quot;
  ],
  &quot;utils/*&quot;: [
    &quot;src/utils/*&quot;
  ]
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function H(I,J){const a=i("ExternalLinkIcon");return o(),l("div",null,[n("h2",r,[u,d,n("a",k,[v,e(a)])]),m,n("h2",b,[g,q,n("a",y,[h,e(a)])]),n("ul",null,[n("li",null,[n("a",f,[w,e(a)]),_]),n("li",null,[n("a",x,[j,e(a)]),S]),n("li",null,[n("a",C,[P,e(a)]),W]),n("li",null,[n("a",B,[E,e(a)]),V]),n("li",null,[n("a",A,[M,e(a)]),$,n("a",N,[U,e(a)]),D])]),L])}const z=t(c,[["render",H],["__file","webpack.html.vue"]]);export{z as default};
