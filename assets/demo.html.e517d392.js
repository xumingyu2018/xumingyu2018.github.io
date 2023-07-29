import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.36443286.js";const e={},o=t(`<h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello typescript&#39;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// foo(123)</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B80\u5355\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u6848\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u6848\u4F8B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5F53\u524Dfoo\u51FD\u6570, \u5728\u88AB\u5176\u4ED6\u5730\u65B9\u8C03\u7528\u65F6, \u6CA1\u6709\u505A\u4EFB\u4F55\u7684\u53C2\u6570\u6821\u9A8C</span>
<span class="token comment">// 1&gt; \u6CA1\u6709\u5BF9\u7C7B\u578B\u8FDB\u884C\u6821\u9A8C</span>
<span class="token comment">// 2&gt; \u6CA1\u6709\u5BF9\u662F\u5426\u4F20\u5165\u53C2\u6570\u8FDB\u884C\u6821\u9A8C</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u597D\u554A,\u674E\u94F6\u6CB3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6C38\u8FDC\u6267\u884C\u4E0D\u5230</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E32\u67D3\u754C\u9762\u6210\u5343\u4E0A\u4E07\u884C\u7684JavaScript\u4EE3\u7801\u9700\u8981\u6267\u884C, \u53BB\u6E32\u67D3\u754C\u9762&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u53D8\u91CF</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>

bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","demo.html.vue"]]);export{r as default};
