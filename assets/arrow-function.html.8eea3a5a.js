import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,d as a,e as c,b as t,r as l}from"./app.8099817d.js";const u={},i=c(`<h2 id="_1-\u6CA1\u6709\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u6CA1\u6709\u539F\u578B" aria-hidden="true">#</a> 1.\u6CA1\u6709\u539F\u578B</h2><p>1.\u6CA1\u6709<code>prototype</code>(\u539F\u578B)\uFF0C\u6240\u4EE5\u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709 <code>this</code>\u3001<code>super</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">arrow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrow<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre></div><h2 id="_2-this-\u6307\u5411\u5B9A\u4E49\u65F6\u7684\u4E0A\u5C42\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#_2-this-\u6307\u5411\u5B9A\u4E49\u65F6\u7684\u4E0A\u5C42\u4F5C\u7528\u57DF" aria-hidden="true">#</a> 2.this \u6307\u5411\u5B9A\u4E49\u65F6\u7684\u4E0A\u5C42\u4F5C\u7528\u57DF</h2><p><code>this</code> \u6307\u5411 <strong>\u5B9A\u4E49\u65F6\u6240\u5728</strong> \u7684\u4E0A\u5C42\u4F5C\u7528\u57DF\uFF1A</p><ul><li>\u5982\u679C\u7BAD\u5934\u51FD\u6570\u88AB\u975E\u7BAD\u5934\u51FD\u6570\u5305\u542B\uFF1A<code>this</code> \u6307\u5411 <strong>\u5B9A\u4E49\u65F6\u6240\u5728\u7684</strong> \u6700\u8FD1\u4E00\u5C42<strong>\u975E\u7BAD\u5934\u51FD\u6570</strong>\u7684 <code>this</code> \u503C</li><li>\u5982\u679C\u7BAD\u5934\u51FD\u6570\u5916\u5C42\u6CA1\u6709\u666E\u901A\u51FD\u6570\uFF1A<code>this</code> \u6307\u5411\u5168\u5C40\u4F5C\u7528\u57DF</li></ul><p>\u7BAD\u5934\u51FD\u6570\u7684\u51FD\u6570\u4F53\u662F\u4E00\u5C42\u4F5C\u7528\u57DF\uFF0C\u5B83\u7684\u4E0A\u5C42\u4F5C\u7528\u57DF\u5373\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\u6240\u5728\u7684\u4F5C\u7528\u57DF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token comment">// \u58F0\u660E\u5168\u5C40\u53D8\u91CF a \u7528\u4E8E\u5B58\u653E\u7BAD\u5934\u51FD\u6570\u7684\u5730\u5740</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj1&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// obj1 \u8C03\u7528 foo1\uFF0Cfoo1 \u4E2D\u5C06\u7BAD\u5934\u51FD\u6570\u8D4B\u503C\u7ED9 a</span>
<span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// obj2 \u8C03\u7528 foo2\uFF0Cfoo2 \u4E2D\u8C03\u7528\u5168\u5C40\u53D8\u91CF a \u6240\u6307\u5411\u7684\u7BAD\u5934\u51FD\u6570</span>
<span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7BAD\u5934\u51FD\u6570 this \u6307\u5411\u51FD\u6570\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u6700\u8FD1\u4E00\u5C42\u975E\u7BAD\u5934\u51FD\u6570\u7684 this \u503C</span>
  <span class="token comment">// \u53C8\u901A\u8FC7 call \u663E\u5F0F\u6307\u5B9A foo1 \u8C03\u7528\u8005\uFF0C\u6240\u4EE5 foo1 this \u503C\u6307\u5411 obj1</span>
  <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7BAD\u5934\u51FD\u6570 this \u6307\u5411\u4E0E\u8C03\u7528\u4F4D\u7F6E\u65E0\u5173</span>
  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6253\u5370 obj1</span>
</code></pre></div><p><strong>\u666E\u901A\u51FD\u6570\u7684 this \u503C\u53EA\u6709\u5728\u51FD\u6570\u6267\u884C\u65F6\u624D\u80FD\u786E\u5B9A\u8C03\u7528\u8005\uFF0C\u800C\u4E0D\u662F\u5728\u51FD\u6570\u5B9A\u4E49\u65F6\u786E\u5B9A</strong>\uFF0C\u7BAD\u5934\u51FD\u6570\u5C31\u662F\u8981\u6253\u7834\u8FD9\u4E00\u89C4\u5219\uFF0C\u65B9\u4FBF\u5F00\u53D1\uFF0C\u6BD4\u5982\u5728 setTimeout \u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// \u6302\u8F7D\u5230 window \u4E0A</span>

<span class="token comment">// \u9ED8\u8BA4\u7ED1\u5B9A</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// setTimeout \u4F20\u5165\u666E\u901A\u51FD\u6570\uFF0C\u5219\u662F\u72EC\u7ACB\u51FD\u6570\u8C03\u7528\uFF0C\u6307\u5411 window</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj1<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;window&#39;</span>

<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u5916\u5C42\u6709\u666E\u901A\u51FD\u6570</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;obj2&#39;</span>

<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u5916\u5C42\u6CA1\u6709\u666E\u901A\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;window&#39;</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5757\u8BED\u53E5\uFF0C\u5982 <code>if(){}</code>\u3001\u5B57\u9762\u91CF\u5BF9\u8C61 <code>let obj = {}</code> \u7B49\u4E0D\u4F1A\u4EA7\u751F\u4F5C\u7528\u57DF</p><p>\u4F5C\u7528\u57DF\u6709\uFF1A\u5168\u5C40\u3001\u51FD\u6570\u3001\u5757\u3001eval \u4F5C\u7528\u57DF</p></div><h2 id="_3-\u6CA1\u6709\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_3-\u6CA1\u6709\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> 3.\u6CA1\u6709\u53C2\u6570\u5217\u8868</h2><p>\u6CA1\u6709 <code>arguments</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>rest\u53C2\u6570\u2026</code> \u83B7\u53D6\u53C2\u6570\u5217\u8868</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u666E\u901A\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token comment">// [1, 2, 3, callee: \u0192, Symbol(Symbol.iterator): \u0192]</span>

<span class="token comment">// rest\u53C2\u6570...</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// [3,4,5]</span>
</code></pre></div><h2 id="_4-\u4E0D\u80FD\u6307\u5B9A-this-\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0D\u80FD\u6307\u5B9A-this-\u6307\u5411" aria-hidden="true">#</a> 4.\u4E0D\u80FD\u6307\u5B9A this \u6307\u5411</h2><p>\u4E0D\u80FD\u901A\u8FC7 <code>call\u3001apply\u3001bind</code> \u6539\u53D8 <code>this</code> \u6307\u5411</p><h2 id="_5-\u4E0D\u80FD-new-\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_5-\u4E0D\u80FD-new-\u8C03\u7528" aria-hidden="true">#</a> 5.\u4E0D\u80FD new \u8C03\u7528</h2><p>\u4E0D\u80FD\u901A\u8FC7 <code>new</code> \u8C03\u7528\uFF0C\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u4F7F\u7528\uFF0C\u6240\u4EE5\u4E5F\u6CA1\u6709 <code>new.target</code></p><p><code>new.target</code>\u662FES6\u65B0\u5F15\u5165\u7684\u5C5E\u6027\uFF0C\u666E\u901A\u51FD\u6570\u5982\u679C\u901A\u8FC7<code>new</code>\u8C03\u7528\uFF0C<code>new.target</code>\u4F1A\u8FD4\u56DE\u8BE5\u51FD\u6570\u7684\u5F15\u7528\u3002\u6B64\u5C5E\u6027\u4E3B\u8981\uFF1A\u7528\u4E8E\u786E\u5B9A\u6784\u9020\u51FD\u6570\u662F\u5426\u4E3Anew\u8C03\u7528\u7684\u3002</p><h2 id="_6-\u4E0D\u80FD\u91CD\u547D\u540D\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_6-\u4E0D\u80FD\u91CD\u547D\u540D\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> 6.\u4E0D\u80FD\u91CD\u547D\u540D\u51FD\u6570\u53C2\u6570</h2><p>\u666E\u901A\u51FD\u6570\u7684\u51FD\u6570\u53C2\u6570\u652F\u6301\u91CD\u547D\u540D\uFF0C\u540E\u9762\u51FA\u73B0\u7684\u4F1A\u8986\u76D6\u524D\u9762\u7684\uFF0C\u7BAD\u5934\u51FD\u6570\u4F1A\u629B\u51FA\u9519\u8BEF\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 2 [1,2]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519\uFF1A\u5728\u6B64\u4E0A\u4E0B\u6587\u4E2D\u4E0D\u5141\u8BB8\u91CD\u590D\u53C2\u6570\u540D\u79F0</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,23),k={href:"https://juejin.cn/post/6844903801799835655",target:"_blank",rel:"noopener noreferrer"},r=t("\u8BE6\u89E3\u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B\u4EE5\u53CA\u7BAD\u5934\u51FD\u6570\u7684\u6CE8\u610F\u4E8B\u9879\u3001\u4E0D\u9002\u7528\u573A\u666F"),d={href:"https://juejin.cn/post/6844903616231260174",target:"_blank",rel:"noopener noreferrer"},m=t("ES6 \u7CFB\u5217\u4E4B\u7BAD\u5934\u51FD\u6570");function f(h,g){const s=l("ExternalLinkIcon");return o(),e("div",null,[i,n("ul",null,[n("li",null,[n("a",k,[r,a(s)])]),n("li",null,[n("a",d,[m,a(s)])])])])}const _=p(u,[["render",f],["__file","arrow-function.html.vue"]]);export{_ as default};