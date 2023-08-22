import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.8c0e81d7.js";const t={},e=p(`<h2 id="less\u4EE3\u7801\u7684\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#less\u4EE3\u7801\u7684\u7F16\u8BD1" aria-hidden="true">#</a> Less\u4EE3\u7801\u7684\u7F16\u8BD1</h2><ol><li><p>\u5B89\u88C5<code>npm install -g less</code>\uFF0C\u901A\u8FC7webpack\u7F16\u8BD1</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>\u5F15\u5165CDN</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet/less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.less<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/less@4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u901A\u8FC7vscode\u63D2\u4EF6easy-less\u7F16\u8BD1\u6216CSS\u5728\u7EBF\u7F16\u8BD1<code>https://lesscss.org/less-preview/</code></p></li></ol><h2 id="less\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#less\u8BED\u6CD5" aria-hidden="true">#</a> Less\u8BED\u6CD5</h2><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@themecolor<span class="token punctuation">:</span></span> #4D926F<span class="token punctuation">;</span>
<span class="token variable">@mainFontSize<span class="token punctuation">:</span></span> 12px<span class="token punctuation">;</span>
<span class="token variable">@smallFontSize<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@themecolor</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@mainFontSize</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957" aria-hidden="true">#</a> \u5D4C\u5957</h3><div class="language-less ext-less"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@mainFontSize</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token selector">.link</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@themecolor</span><span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@smallFontSize</span><span class="token punctuation">;</span>

      <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5165" aria-hidden="true">#</a> \u6DF7\u5165</h3><p>\u901A\u4FD7\u7684\u8BB2\uFF0C\u5C31\u662F\u628A\u4E00\u4E9B\u91CD\u590D\u7684\u4EE3\u7801\u62BD\u79BB\u51FA\u6765\uFF0C\u4EE5\u540E\u76F4\u63A5\u590D\u7528\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-less ext-less"><pre class="language-less"><code><span class="token selector">.nowrap_ellipsis</span> <span class="token punctuation">{</span> <span class="token comment">// \u65E0\u53C2\u6DF7\u5165</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.border(<span class="token variable">@borderWith</span>: 5px, <span class="token variable">@borderColor</span>: blue)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6709\u53C2\u6DF7\u5165</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@borderWith</span> solid <span class="token variable">@borderColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box_size</span> <span class="token punctuation">{</span> <span class="token comment">// \u6DF7\u5165\u548C\u6620\u5C04\u7ED3\u5408\u4F7F\u7528</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> .box_<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>[width]<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.nowrap_ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.nowrap_ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u7EE7\u627F</strong>\uFF1A<code>&amp;:extend(.box_size);</code></p><p><strong>\u5185\u7F6E\u51FD\u6570</strong>\uFF1A<code>color: color(skyblue);</code>\u3001<code>width: convert(100px, &quot;in&quot;);</code>\u7B49</p><p><strong>\u4F5C\u7528\u57DF</strong>\uFF1A\u9996\u5148\u5728\u672C\u5730\u67E5\u627E\u53D8\u91CF\u6216\u6DF7\u5165\uFF0C\u82E5\u627E\u4E0D\u5230\uFF0C\u5219\u4ECE\u7236\u7EA7\u4F5C\u7528\u57DF\u7EE7\u627F\u3002</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,14),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","less.html.vue"]]);export{k as default};
