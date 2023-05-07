import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.86e53fac.js";const p={},o=t(`<h2 id="with-\u8BED\u53E5-\u4E86\u89E3-\u4E0D\u8981\u7528" tabindex="-1"><a class="header-anchor" href="#with-\u8BED\u53E5-\u4E86\u89E3-\u4E0D\u8981\u7528" aria-hidden="true">#</a> with \u8BED\u53E5\uFF08\u4E86\u89E3\uFF0C\u4E0D\u8981\u7528\uFF09</h2><p>\u4F5C\u7528\uFF1A\u6269\u5C55\u4F5C\u7528\u57DF\u94FE\uFF0C\u6539\u53D8\u4E0A\u4E0B\u6587</p><p>\u4E25\u683C\u6A21\u5F0F\u4E0B\u65E0\u6CD5\u4F7F\u7528 with</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;window name&#39;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj name&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F5C\u7528\u57DF\u94FE\uFF1AAO(foo) -&gt; GO</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;window name&#39;</span>
  <span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F5C\u7528\u57DF\u94FE\uFF1Aobj -&gt; AO(foo) -&gt; GO</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;obj name&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="eval-\u51FD\u6570-\u4E86\u89E3-\u4E0D\u8981\u7528" tabindex="-1"><a class="header-anchor" href="#eval-\u51FD\u6570-\u4E86\u89E3-\u4E0D\u8981\u7528" aria-hidden="true">#</a> eval \u51FD\u6570\uFF08\u4E86\u89E3\uFF0C\u4E0D\u8981\u7528\uFF09</h2><p>\u4F5C\u7528\uFF1A\u5C06\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u5F53\u505A JS \u4EE3\u7801\u6267\u884C</p><p>\u4E25\u683C\u6A21\u5F0F\u4E0B\u65E0\u6CD5\u4F7F\u7528 eval</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;const msg = &quot;Hello World&quot;; console.log(msg);&#39;</span>
<span class="token function">eval</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre></div><p>\u4E0D\u4F7F\u7528\u7684\u539F\u56E0\uFF1A</p><ol><li>\u53EF\u8BFB\u6027\u5DEE</li><li>\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u53EF\u80FD\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u88AB\u6076\u610F\u7BE1\u6539\uFF0C\u5B58\u5728\u5B89\u5168\u98CE\u9669</li><li>\u65E0\u6CD5\u88AB JS \u5F15\u64CE\u4F18\u5316</li></ol><h2 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h2><h3 id="\u4E25\u683C\u6A21\u5F0F\u5E38\u89C1\u8BED\u6CD5\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F\u5E38\u89C1\u8BED\u6CD5\u9650\u5236" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F\u5E38\u89C1\u8BED\u6CD5\u9650\u5236</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>

<span class="token comment">// 1.\u7981\u6B62\u610F\u5916\u521B\u5EFA\u5168\u5C40\u53D8\u91CF\uFF08\u4E0D\u4F7F\u7528\u53D8\u91CF\u58F0\u660E\u5173\u952E\u5B57\uFF0C\u9ED8\u8BA4\u521B\u5EFA\u5168\u5C40\u53D8\u91CF\uFF09</span>
message <span class="token operator">=</span> <span class="token string">&#39;Hello window&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// &#39;Hello window&#39;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  message <span class="token operator">=</span> <span class="token string">&#39;Hello foo&#39;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// &#39;Hello foo&#39;</span>

<span class="token comment">// 2.\u4E0D\u5141\u8BB8\u51FD\u6570\u6709\u76F8\u540C\u7684\u53C2\u6570\u540D\u79F0</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 3.\u6D88\u9664\u9759\u9ED8\u9519\u8BEF</span>
<span class="token boolean">true</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token number">NaN</span> <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u53EF\u914D\u7F6E</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u53EF\u5199</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;nevermore&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;never&#39;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name

<span class="token comment">// 4.\u4E0D\u5141\u8BB8\u4F7F\u7528\u539F\u5148\u7684\u516B\u8FDB\u5236\u683C\u5F0F 0123\uFF0C\u5E94\u4F7F\u7528 0o123</span>
<span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">0o123</span> <span class="token comment">// \u516B\u8FDB\u5236</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">0x123</span> <span class="token comment">// \u5341\u516D\u8FDB\u5236</span>
<span class="token keyword">let</span> num3 <span class="token operator">=</span> <span class="token number">0b100</span> <span class="token comment">// \u4E8C\u8FDB\u5236</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">)</span>

<span class="token comment">// 5.\u4E0D\u5141\u8BB8\u4F7F\u7528with\u8BED\u53E5</span>

<span class="token comment">// 6.eval \u4E0D\u518D\u4E3A\u4E0A\u5C42\u8303\u56F4\u5F15\u5165\u65B0\u53D8\u91CF\uFF08\u5373\u4F7F\u662F var \u4E5F\u4E0D\u4F1A\uFF09</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;&#39;use strict&#39;; var info = &#39;Hello Eval&#39;; console.log(info);&quot;</span> <span class="token comment">// &#39;Hello Eval&#39;</span>

<span class="token function">eval</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token comment">// info is not defined</span>
</code></pre></div><h3 id="\u4E25\u683C\u6A21\u5F0F-this" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F-this" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F this</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>

<span class="token comment">// 1.\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u81EA\u6267\u884C\u51FD\u6570\uFF08\u9ED8\u8BA4\u7ED1\u5B9A\uFF09\u4F1A\u6307\u5411 undefined</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// 2.\u65E0\u8BBA\u662F\u5426\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A</span>
<span class="token comment">// \u4F20\u5165 setTimeout \u7684\u666E\u901A\u51FD\u6570\u7684 this \u6C38\u8FDC\u6307\u5411 window</span>
<span class="token comment">// \u4F20\u5165 setTimeout \u7684\u7BAD\u5934\u51FD\u6570\u5916\u5C42\u6CA1\u6709\u666E\u901A\u51FD\u6570\uFF08\u5373\u4E0A\u5C42\u4F5C\u7528\u57DF\u4E3A\u5168\u5C40\uFF09\uFF0Cthis \u6C38\u8FDC\u6307\u5411 window</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// window</span>

<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello obj1&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj1<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>


<span class="token comment">// 3.\u4F20\u5165 setTimeout \u7684\u7BAD\u5934\u51FD\u6570\u5916\u5C42\u6709\u666E\u901A\u51FD\u6570</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello obj2&#39;</span>
</code></pre></div>`,15),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","with-eval-strict.html.vue"]]);export{r as default};
