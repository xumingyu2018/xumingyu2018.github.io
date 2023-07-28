import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,d as c,e as s,b as e,r as u}from"./app.bd7c01d2.js";const l={},k=s(`<p>Promise \u901A\u8FC7\u94FE\u5F0F\u8C03\u7528\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898\uFF0C\u4F46\u672C\u8D28\u8FD8\u662F\u57FA\u4E8E\u56DE\u8C03\u51FD\u6570</p><p>async\u3001await \u901A\u8FC7\u540C\u6B65\u8BED\u6CD5\u7684\u65B9\u5F0F\u89E3\u51B3\u56DE\u8C03\u51FD\u6570\u4E0D\u76F4\u89C2\u7684\u95EE\u9898</p><h2 id="\u4E0E-promise-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u4E0E-promise-\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u4E0E Promise \u7684\u5173\u7CFB</h2><ol><li>\u6267\u884C async \u51FD\u6570\u8FD4\u56DE\u7684\u662F Promise \u5BF9\u8C61</li></ol><p>\u5982\u679C\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5219\u5C01\u88C5\u6210 Promise \u5BF9\u8C61\uFF1B\u5982\u679C\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u503C</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A Promise</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E24\u8005\u7B49\u4EF7\uFF0C\u5747\u4E3A\u6210\u529F\u72B6\u6001</span>
</code></pre></div><ol start="2"><li>await \u76F8\u5F53\u4E8E Promise \u7684 <code>.then</code>\uFF0C\u6355\u83B7\u6210\u529F\u72B6\u6001 Promise \u5BF9\u8C61\u7684\u7ED3\u679C</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// await \u540E\u63A5 \u666E\u901A\u503C\uFF0C\u5F97\u5230\u8BE5\u503C</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// await \u540E\u63A5 Promise\uFF0C\u6355\u83B7\u6210\u529F\u72B6\u6001\u5BF9\u8C61\u7684\u7ED3\u679C</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;\u6210\u529F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6210\u529F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// await \u540E\u63A5 async \u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u6355\u83B7\u6210\u529F\u72B6\u6001\u5BF9\u8C61\u7684\u7ED3\u679C</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;\u6210\u529F&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6210\u529F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li><code>try...catch</code> \u76F8\u5F53\u4E8E Promise \u7684 <code>.catch</code></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;\u62A5\u9519&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> p
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u62A5\u9519</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ul><li><code>async</code> \u7B49\u4EF7\u4E8E <code>return new Promise</code> \u5C01\u88C5 Promise</li><li><code>await</code> \u7B49\u4EF7\u4E8E <code>.then</code> \u5904\u7406 Promise \u6210\u529F</li><li><code>try...catch</code> \u7B49\u4EF7\u4E8E <code>.catch</code> \u5904\u7406 Promise \u5931\u8D25</li></ul><p>\u7EC3\u4E60\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// Promise {&lt;fulfilled&gt;: 1}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C</h2><p>\u5F02\u6B65\u51FD\u6570\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u8FD4\u56DE\u666E\u901A\u503C</span>
  <span class="token keyword">return</span> <span class="token string">&#39;foo \u5B8C\u6210&#39;</span>

  <span class="token comment">// 2.\u8FD4\u56DE thenable \u5BF9\u8C61</span>
  <span class="token comment">// return {</span>
  <span class="token comment">//   then: function(resolve, reject) {</span>
  <span class="token comment">//     resolve(&quot;thenable \u5B8C\u6210&quot;)</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 3.\u8FD4\u56DE Promise</span>
  <span class="token comment">// return new Promise((resolve, reject) =&gt; {</span>
  <span class="token comment">//   setTimeout(() =&gt; {</span>
  <span class="token comment">//     resolve(&#39;Promise \u5B8C\u6210&#39;)</span>
  <span class="token comment">//   }, 1000)</span>
  <span class="token comment">// })</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res:&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5F02\u6B65\u51FD\u6570\u4E2D\u7684\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570\u4E2D\u7684\u5F02\u5E38" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570\u4E2D\u7684\u5F02\u5E38</h2><p>\u5F02\u6B65\u51FD\u6570\u4E2D\u7684\u5F02\u5E38\uFF0C\u4F1A\u4F5C\u4E3A Promise \u7684 reject \u503C\u88AB\u6355\u83B7\u5230\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u62A5\u9519&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F02\u6B65\u51FD\u6570\u4E2D\u62A5\u9519\uFF0C\u540E\u7EED\u4EE3\u7801\u4ECD\u4F1A\u6267\u884C&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u62A5\u9519&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u540C\u6B65\u51FD\u6570\u4E2D\u62A5\u9519\uFF0C\u540E\u7EED\u4EE3\u7801\u4E0D\u6267\u884C&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u6267\u884C\u987A\u5E8F</h2><p>\u53EA\u8981\u9047\u5230\u4E86 <code>await</code> \uFF1A</p><ul><li>\u7D27\u8DDF\u7740 <code>await</code> \u540C\u4E00\u884C\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E\u653E\u5728\u4E86 <code>new Promise</code> \u7684 <code>executor</code> \u4E2D\uFF0C\u540C\u6B65\u6267\u884C</li><li>\u4E0B\u4E00\u884C\u53CA\u4E4B\u540E\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E\u653E\u5728\u4E8E <code>.then()</code> \u4E2D\uFF0C\u5F02\u6B65\u6267\u884C\u3002</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>

<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6267\u884C\u5B8C async2 \u7684\u8FD4\u56DE\u503C\u653E\u5165 resolve() \u8F6C\u5316\u4E3A\u6210\u529F\u72B6\u6001 Promise\uFF0C\u518D then</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F8B\u4E00\uFF1Aawait \u540C\u4E00\u884C\u540C\u6B65\u6267\u884C\uFF0C\u4E0B\u9762\u6240\u6709\u884C\u653E\u5230\u5FAE\u4EFB\u52A1\u91CC</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6CE8\u91CA\u5E8F\u53F7\u4E3A\u6267\u884C\u987A\u5E8F</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u540C\u6B65\u6267\u884C\u51FD\u6570 async2</span>
  <span class="token comment">// \u53EA\u8981\u9047\u5230\u4E86 await \uFF0C\u540E\u9762\u7684\u4EE3\u7801\u90FD\u76F8\u5F53\u4E8E\u653E\u5728 then\uFF08\u5FAE\u4EFB\u52A1\uFF09\u91CC</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 5 \u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 4 \u540C\u6B65\u4EE3\u7801\u7ED3\u675F\uFF0C\u5F00\u59CB\u6267\u884C\u5FAE\u4EFB\u52A1</span>
</code></pre></div><p>\u4F8B\u4E8C\uFF1Aawait \u540E\u63A5 reject\uFF0C\u4F1A\u62A5\u9519</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token comment">// await \u540E\u63A5 reject()\uFF0C\u4F1A\u62A5\u9519\uFF0C\u540E\u8FB9\u4E0D\u518D\u6267\u884C</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c:&#39;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// start</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// b: 2</span>
<span class="token comment">// Uncaught(in promise) 3</span>

<span class="token comment">// \u7528 try catch \u6539\u5199</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token comment">// \u540E\u8FB9\u4E0D\u518D\u6267\u884C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c:&#39;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62A5\u9519\u88AB catch \u6355\u83B7</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err:&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// start</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// b: 2</span>
<span class="token comment">// err: 3</span>
</code></pre></div><h2 id="async\u3001await-\u52A0\u8F7D\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#async\u3001await-\u52A0\u8F7D\u56FE\u7247" aria-hidden="true">#</a> async\u3001await \u52A0\u8F7D\u56FE\u7247</h2>`,29),i={href:"http://js.jirengu.com/jaxurotole/1/edit?js,output",target:"_blank",rel:"noopener noreferrer"},r=e("\u5728\u7EBF\u9884\u89C8"),d=s(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u52A0\u8F7D\u5730\u5740\u4E3A </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u7684\u56FE\u7247\u5931\u8D25</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> url1 <span class="token operator">=</span>
  <span class="token string">&#39;https://p6-passport.byteacctimg.com/img/user-avatar/c2ff47a1390407c1a16b5e5fc3aa5e1f~300x300.image&#39;</span>
<span class="token keyword">const</span> url2 <span class="token operator">=</span>
  <span class="token string">&#39;https://avatars.githubusercontent.com/u/39004291?s=400&amp;u=eb0d02f850acaf334bdb14611a7d6d2e50591c57&amp;v=4&#39;</span>

<span class="token comment">// \u7ACB\u5373\u6267\u884C\u533F\u540D\u51FD\u6570</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6CE8\u610F\uFF1Aawait \u5FC5\u987B\u653E\u5728 async \u51FD\u6570\u4E2D\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>url1<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img1<span class="token punctuation">)</span>

    <span class="token keyword">const</span> img2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>url2<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,1);function m(f,y){const a=u("ExternalLinkIcon");return p(),o("div",null,[k,n("p",null,[n("a",i,[r,c(a)])]),d])}const h=t(l,[["render",m],["__file","async-await.html.vue"]]);export{h as default};
