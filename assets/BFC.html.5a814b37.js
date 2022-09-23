import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,a as n,d as t,e as p,b as s,r as l}from"./app.36238a74.js";const i={},u=p(`<p>\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF08\u7B80\u79F0 BFC\uFF09\uFF0C\u5F62\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684\u6E32\u67D3\u533A\u57DF\uFF0C\u5185\u90E8\u5143\u7D20\u7684\u6E32\u67D3\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u90E8\u5143\u7D20\u3002</p><h2 id="\u521B\u5EFA-bfc" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-bfc" aria-hidden="true">#</a> \u521B\u5EFA BFC</h2><p>\u4E0B\u5217\uFF08\u5E38\u89C1\uFF09\u65B9\u5F0F\u4F1A\u521B\u5EFA BFC\uFF1A</p><ol><li>\u6839\u5143\u7D20\uFF08html \u6807\u7B7E\uFF09</li><li>\u6D6E\u52A8\u5143\u7D20\uFF08float \u4E0D\u662F none\uFF09</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF08position \u662F absolute \u6216 fixed\uFF09</li><li>overflow \u4E0D\u662F visible \u7684\u5757\u7EA7\u5143\u7D20</li><li>\u884C\u5185\u5757\u5143\u7D20\uFF08display \u662F inline-block\uFF09</li><li>\u5F39\u6027\u5143\u7D20\uFF08display \u662F flex \u6216 inline-flex\uFF09</li><li>\u7F51\u683C\u5143\u7D20\uFF08display \u662F grid \u6216 inline-grid\uFF09</li><li>\u8868\u683C\u5355\u5143\u683C\uFF08display \u662F table-cell\uFF09</li></ol><p>\u4EE5\u4E0A\u662F CSS2.1 \u89C4\u8303\u5B9A\u4E49\u7684 BFC \u89E6\u53D1\u65B9\u5F0F\uFF0C\u5728\u6700\u65B0\u7684 CSS3 \u89C4\u8303\u4E2D\uFF0C\u5F39\u6027\u5143\u7D20\u548C\u7F51\u683C\u5143\u7D20\u4F1A\u521B\u5EFA F(Flex)FC \u548C G(Grid)FC\u3002</p><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><p>\u5E38\u7528\u4E0A\u8FF0\u7B2C 2\u30013\u30014 \u65B9\u5F0F\u521B\u5EFA BFC\uFF1A</p><h3 id="_1-\u89E3\u51B3\u5916\u8FB9\u8DDD\u91CD\u53E0" tabindex="-1"><a class="header-anchor" href="#_1-\u89E3\u51B3\u5916\u8FB9\u8DDD\u91CD\u53E0" aria-hidden="true">#</a> 1.\u89E3\u51B3\u5916\u8FB9\u8DDD\u91CD\u53E0</h3><p>\u76F8\u90BB\u76D2\u5B50\u5782\u76F4\u5916\u8FB9\u8DDD\u76F8\u9047\u65F6\uFF0C\u5B83\u4EEC\u5C06\u5F62\u6210\u4E00\u4E2A\u5916\u8FB9\u8DDD\u3002\u5728\u76F8\u90BB\u5143\u7D20\u5916\u5206\u522B<strong>\u5305\u88F9 BFC \u5BB9\u5668</strong></p><p>::: normal-demo \u6F14\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span> <span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bfc</span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="_2-\u89E3\u51B3\u7236\u5BB9\u5668\u9AD8\u5EA6\u584C\u9677" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u7236\u5BB9\u5668\u9AD8\u5EA6\u584C\u9677" aria-hidden="true">#</a> 2.\u89E3\u51B3\u7236\u5BB9\u5668\u9AD8\u5EA6\u584C\u9677</h3><p>\u5B50\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\uFF0C\u8131\u79BB\u6587\u6863\u6D41\u81F4\u4F7F\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6E05\u9664\u6D6E\u52A8\u6280\u5DE7\u4F9D\u636E\u8BA1\u7B97 BFC \u7684\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5143\u7D20\u4E5F\u53C2\u4E0E\u8BA1\u7B97\uFF0C<strong>\u4F7F\u7236\u5143\u7D20\u6210\u4E3A BFC \u5BB9\u5668</strong></p><p>::: normal-demo \u6F14\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span> <span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bfc</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="_3-\u5B9E\u73B0\u81EA\u9002\u5E94\u4E24\u5217\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u73B0\u81EA\u9002\u5E94\u4E24\u5217\u5E03\u5C40" aria-hidden="true">#</a> 3.\u5B9E\u73B0\u81EA\u9002\u5E94\u4E24\u5217\u5E03\u5C40</h3>`,20),r=s("\u5DE6\u4FA7\u5143\u7D20\u6D6E\u52A8\u8986\u76D6\u53F3\u4FA7\u5143\u7D20\uFF0C\u4F7F\u53F3\u4FA7\u5143\u7D20\u6210\u4E3A BFC \u5BB9\u5668\uFF09"),d={href:"http://js.jirengu.com/taguvarupa/2/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"},k=s("\u5728\u7EBF\u793A\u4F8B"),v=p(`<p>::: normal-demo \u6F14\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2 bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span> <span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bfc</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8</h2><p>\u6E05\u9664\u6D6E\u52A8\u5E38\u7528\u4EE3\u7801\uFF1A\u4F7F\u7528\u4F2A\u5143\u7D20 <code>::after</code><strong>\uFF08\u7ED9\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u770B\u4E0D\u89C1\u7684\u5757\u5143\u7D20\u6765\u6E05\u9664\u6D6E\u52A8\uFF09</strong></p><p>\u8BBE\u7F6E\u7236\u5143\u7D20 <code>class = &quot;clearfix&quot;</code> \u5E76\u6DFB\u52A0\u6837\u5F0F <code>.clearfix::after</code> \u5982\u4E0B\uFF1A</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>::: normal-demo \u6F14\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo-img/cat-wink.webp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>right text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box img</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box p</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p><code>:before</code> \u4E0E <code>::before</code> \u7684\u533A\u522B\uFF1A</p><ul><li><code>:before</code> \u548C <code>:after</code> \u662F CSS2 \u7684\u5199\u6CD5\uFF0C\u6240\u4EE5\u517C\u5BB9\u6027\u8F83\u597D\u3002</li><li><code>::before</code> \u548C <code>::after</code> \u662F CSS3 \u7684\u5199\u6CD5\uFF0C\u4E3A\u4E86\u5C06\u4F2A\u7C7B <code>:</code> \u548C\u4F2A\u5143\u7D20 <code>::</code> \u533A\u5206\u5F00\u3002\u4F46\u662F\u5E73\u65F6\u4E3A\u4E86\u517C\u5BB9\u6027\uFF0C\u8FD8\u662F\u4F1A\u7528\u4E00\u4E2A\u5192\u53F7\u7684\u5199\u6CD5\u3002</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,15),m={href:"https://www.bilibili.com/video/BV1aZ4y1M7gW?from=search&seid=15595530134411248037",target:"_blank",rel:"noopener noreferrer"},b=s("\u5E26\u4F60\u7528\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u7406\u89E3\u6700\u5168\u9762\u7684BFC\uFF08\u89C6\u9891\uFF09");function g(h,f){const a=l("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[r,n("a",d,[k,t(a)])]),v,n("ul",null,[n("li",null,[n("a",m,[b,t(a)])])])])}const _=e(i,[["render",g],["__file","BFC.html.vue"]]);export{_ as default};
