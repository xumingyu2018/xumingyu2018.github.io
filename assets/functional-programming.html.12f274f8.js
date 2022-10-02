import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as a,d as p,e,r as u}from"./app.e0b4b965.js";const l={},k=e(`<p>\u8868\u8FBE\u5F0F\uFF1A\u8FD0\u7B97\u8FC7\u7A0B\uFF0C\u603B\u662F\u6709\u8FD4\u56DE\u503C</p><p>\u8BED\u53E5\uFF1A\u6267\u884C\u64CD\u4F5C\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C</p><p>\u51FD\u6570\u5F0F\u7F16\u7A0B\u591A\u7528\u8868\u8FBE\u5F0F\uFF0C\u5C11\u7528\u8BED\u53E5\u3002</p><p>\u7EAF\u51FD\u6570\uFF1A</p><ul><li>\u76F8\u540C\u8F93\u5165\u4EA7\u751F\u76F8\u540C\u8F93\u51FA\uFF08\u6CA1\u6709\u4F9D\u8D56\u9664\u4E86\u8F93\u5165\u7684\u5916\u90E8\u73AF\u5883\uFF09</li><li>\u65E0\u526F\u4F5C\u7528\uFF08\u6CA1\u6709\u6539\u53D8\u5305\u62EC\u8F93\u5165\u5728\u5185\u7684\u5916\u90E8\u73AF\u5883\uFF09</li></ul><p>\u6570\u7EC4\u7684\u65B9\u6CD5\uFF1A</p><ul><li>slice \u622A\u53D6\u7EAF\u51FD\u6570\uFF1A\u8FD4\u56DE\u65B0\u6570\u7EC4\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u7EAF\u51FD\u6570</li><li>splice \u62FC\u63A5\u975E\u7EAF\u51FD\u6570\uFF1A\u8FD4\u56DE\u88AB\u5220\u7684\u6570\u7EC4\uFF0C\u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u975E\u7EAF\u51FD\u6570</li></ul><h2 id="\u7EAF\u51FD\u6570\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u51FD\u6570\u5224\u65AD" aria-hidden="true">#</a> \u7EAF\u51FD\u6570\u5224\u65AD</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7EAF\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2 
<span class="token punctuation">}</span>

<span class="token comment">// \u975E\u7EAF\u51FD\u6570\uFF08\u4F9D\u8D56 dep\uFF09</span>
<span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> dep <span class="token operator">+</span> num
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
dep <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>

<span class="token comment">// \u975E\u7EAF\u51FD\u6570\uFF08\u4FEE\u6539\u4E86\u8F93\u5165\uFF09</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nevermore&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token function">modify</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u67EF\u91CC\u5316" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316" aria-hidden="true">#</a> \u67EF\u91CC\u5316</h2><p>\u67EF\u91CC\u5316\uFF08Currying\uFF09\uFF1A\u53EA\u4F20\u9012\u7ED9\u51FD\u6570\u4E00\u90E8\u5206\u53C2\u6570\u6765\u8C03\u7528\u5B83\uFF0C\u8BA9\u5B83\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u53BB\u5904\u7406\u5269\u4E0B\u7684\u53C2\u6570\u3002\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5B83\u53EA\u63A5\u53D7\u4E00\u90E8\u5206\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u76F4\u5230\u4F20\u9012\u6240\u6709\u53C2\u6570\u4E3A\u6B62\u3002</p><p>\u51FD\u6570\u7684\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF1A\u6BCF\u4E2A\u51FD\u6570\u7684\u5904\u7406\u903B\u8F91\u5355\u4E00</p><h3 id="\u67EF\u91CC\u5316\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316\u4F8B\u5B50" aria-hidden="true">#</a> \u67EF\u91CC\u5316\u4F8B\u5B50</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum1</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>

<span class="token keyword">function</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>

<span class="token comment">// \u7B80\u5316\u67EF\u91CC\u5316\u7684\u4EE3\u7801</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum3</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>

<span class="token comment">// \u518D\u7701\u7565 return</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum4</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>
</code></pre></div><h3 id="\u67EF\u91CC\u5316\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u67EF\u91CC\u5316\u7684\u4F5C\u7528</h3><ol><li>\u53C2\u6570\u590D\u7528\uFF1A\u516C\u5171\u53C2\u6570</li><li>\u63D0\u524D\u8FD4\u56DE\uFF1A\u53EA\u63A5\u6536\u4E00\u90E8\u5206\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</li><li>\u5EF6\u8FDF\u6267\u884C\uFF1A\u67EF\u91CC\u5316\u8FD4\u56DE\u4E00\u4E2A\u9884\u7F6E\u53C2\u6570\u7684\u65B0\u51FD\u6570\uFF0C\u5E76\u6CA1\u6709\u7ACB\u5373\u6267\u884C</li></ol><p>\u53C2\u6570\u590D\u7528\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> type<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">][</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u67EF\u91CC\u5316\u5B9E\u73B0\u4E86\u53C2\u6570\u7684\u590D\u7528</span>
<span class="token comment">// log(new Date(), &#39;FIX&#39;, &#39;\u4FEE\u590D\u67D0 bug&#39;)</span>
<span class="token comment">// log(new Date(), &#39;FIX&#39;, &#39;\u4FEE\u590D\u67D0\u67D0 bug&#39;)</span>
<span class="token comment">// log(new Date(), &#39;FEATURE&#39;, &#39;\u6DFB\u52A0\u67D0\u529F\u80FD&#39;)</span>

<span class="token keyword">let</span> nowLog <span class="token operator">=</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">nowLog</span><span class="token punctuation">(</span><span class="token string">&#39;FIX&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;\u4FEE\u590D\u67D0 bug&#39;</span><span class="token punctuation">)</span>
<span class="token function">nowLog</span><span class="token punctuation">(</span><span class="token string">&#39;FEATURE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DFB\u52A0\u67D0\u529F\u80FD&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> nowFixLog <span class="token operator">=</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;FIX&#39;</span><span class="token punctuation">)</span>
<span class="token function">nowFixLog</span><span class="token punctuation">(</span><span class="token string">&#39;\u4FEE\u590D\u67D0 bug&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> nowFeatureLog <span class="token operator">=</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;FEATURE&#39;</span><span class="token punctuation">)</span>
<span class="token function">nowFeatureLog</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DFB\u52A0\u67D0\u529F\u80FD&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u67EF\u91CC\u5316\u51FD\u6570\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316\u51FD\u6570\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u67EF\u91CC\u5316\u51FD\u6570\u7684\u5B9E\u73B0</h3><p>\u67EF\u91CC\u5316\u51FD\u6570\uFF1A\u5C06\u666E\u901A\u51FD\u6570\u67EF\u91CC\u5316\u7684\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570</p><p>\u56DB\u884C\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><ol><li>\u5224\u65AD\u5F53\u524D\u4F20\u5165\u51FD\u6570\u7684<strong>\u5B9E\u53C2</strong>\u4E2A\u6570 <code>args.length</code> \u662F\u5426\u5927\u4E8E\u7B49\u4E8E\u9700\u8981\u67EF\u91CC\u5316\u7684\u51FD\u6570<strong>\u5F62\u53C2</strong>\u4E2A\u6570 <code>fn.length</code></li><li>\u662F\u5219\u7ED3\u675F\u6267\u884C <code>fn(...args)</code></li><li>\u5426\u5219\u9012\u5F52\u6267\u884C\u4E00\u4E2A\u8FD4\u56DE <code>curry(fn, ...args, ..._args)</code> \u51FD\u6570\u7684\u51FD\u6570</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u67EF\u91CC\u5316\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length
    <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>_args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>_args<span class="token punctuation">)</span>

<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u8F6C\u6362\u6210\u666E\u901A\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>_args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>_args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9A8C\u8BC1</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
<span class="token punctuation">}</span>
<span class="token keyword">const</span> curriedSum <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre></div><h2 id="\u7EC4\u5408\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u51FD\u6570" aria-hidden="true">#</a> \u7EC4\u5408\u51FD\u6570</h2><p>\u7EC4\u5408\u51FD\u6570\uFF1A\u5C06\u4E00\u7CFB\u5217\u5355\u4E00\u8D23\u4EFB\u51FD\u6570\u7EC4\u5408\u6210\u4E00\u4E2A\u590D\u6742\u51FD\u6570\uFF0C\u81EA\u52A8\u5316\u6267\u884C\u4E00\u7CFB\u5217\u51FD\u6570\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">const</span> <span class="token function-variable function">mul2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span>
<span class="token keyword">const</span> <span class="token function-variable function">pow3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">**</span> <span class="token number">3</span>
<span class="token keyword">const</span> <span class="token function-variable function">div4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">/</span> <span class="token number">4</span>
<span class="token comment">// \u6570\u636E\u6D41\u4ECE\u53F3\u81F3\u5DE6</span>
<span class="token function">div4</span><span class="token punctuation">(</span><span class="token function">pow3</span><span class="token punctuation">(</span><span class="token function">mul2</span><span class="token punctuation">(</span><span class="token function">add1</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre></div><p>compose\u53EF\u4EE5\u628A\u7C7B\u4F3C\u4E8E<code>f(g(h(x)))</code>\u7684\u5199\u6CD5\u7B80\u5316\u6210<code>compose(f, g, h)(x)</code>\uFF0C\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027\uFF0C\u6570\u636E\u6D41\u4ECE\u5DE6\u81F3\u53F3\u79F0\u4E3A\u7BA1\u9053\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7EC4\u5408\u51FD\u6570\uFF08\u4ECE\u5DE6\u81F3\u53F3\uFF09</span>
<span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u8F6C\u5316\u4E3A\u666E\u901A\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u82E5\u8981\u6570\u636E\u6D41\u4ECE\u53F3\u81F3\u5DE6\uFF0C\u5219\u53EF\u4EE5\u7528 reduceRight</span>
    <span class="token keyword">return</span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9A8C\u8BC1</span>
<span class="token keyword">const</span> <span class="token function-variable function">add1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">const</span> <span class="token function-variable function">mul2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span>
<span class="token keyword">const</span> <span class="token function-variable function">pow3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">**</span> <span class="token number">3</span>
<span class="token keyword">const</span> <span class="token function-variable function">div4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">/</span> <span class="token number">4</span>

<span class="token function">compose</span><span class="token punctuation">(</span>add1<span class="token punctuation">,</span> mul2<span class="token punctuation">,</span> pow3<span class="token punctuation">,</span> div4<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre></div><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220410025402.png" alt=""></p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,30),i={href:"https://juejin.cn/post/6844904093467541517",target:"_blank",rel:"noopener noreferrer"},r={href:"https://juejin.cn/post/6844903910834962446",target:"_blank",rel:"noopener noreferrer"};function m(d,g){const s=u("ExternalLinkIcon");return o(),c("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[a("\u51FD\u6570\u67EF\u91CC\u5316\uFF1A\u4E09\u884C\u4EE3\u7801\u5B9E\u73B0 add(1)(2)(3)"),p(s)])]),n("li",null,[n("a",r,[a("\u300C\u524D\u7AEF\u8FDB\u9636\u300D\u5F7B\u5E95\u5F04\u61C2\u51FD\u6570\u7EC4\u5408"),p(s)])])])])}const w=t(l,[["render",m],["__file","functional-programming.html.vue"]]);export{w as default};