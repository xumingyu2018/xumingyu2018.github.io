import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.5a7bd108.js";const t={},o=p(`<p>JavaScript \u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8303\u5F0F\uFF0C\u5305\u62EC\u51FD\u6570\u5F0F\u7F16\u7A0B\u548C\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</p><p>\u9664\u4E86 string\u3001number\u3001boolean\u3001null\u3001undefined\u3001symbol \u4E4B\u5916\u7684\u5176\u4ED6\u6570\u636E\u662F\u5BF9\u8C61\uFF1A<strong>\u6570\u7EC4</strong>\u3001\u65E5\u671F\uFF0C\u751A\u81F3<strong>\u51FD\u6570</strong>\u7B49\u7B49\u3002\u6545\u53EF\u4EE5\u5BF9\u5B83\u4EEC\u4F7F\u7528 <code>.</code> \u8BBF\u95EE\u5176\u5C5E\u6027\uFF0C\u83B7\u53D6\u5C5E\u6027\u503C\u3002</p><p>\u5728 JavaScript \u4E2D\uFF0C\u5BF9\u8C61\u662F\u62E5\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u6570\u636E\uFF0C\u662F\u65E0\u5E8F\u7684\u6570\u636E\u96C6\u5408\uFF0C\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408\u3002</p><h2 id="\u521B\u5EFA\u5355\u4E2A\u5BF9\u8C61\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5355\u4E2A\u5BF9\u8C61\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u521B\u5EFA\u5355\u4E2A\u5BF9\u8C61\u7684\u4E24\u79CD\u65B9\u5F0F</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1. new Object()</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;obj1&#39;</span>
obj1<span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. \u5B57\u9762\u91CF\u5F62\u5F0F</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5BF9\u8C61\u7684\u5C5E\u6027-\u952E-\u4E0E\u5C5E\u6027\u503C-\u503C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u5C5E\u6027-\u952E-\u4E0E\u5C5E\u6027\u503C-\u503C" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u952E\uFF09\u4E0E\u5C5E\u6027\u503C\uFF08\u503C\uFF09</h2><p>\u5C5E\u6027\u540D\uFF08\u952E\u540D\uFF09\u662F\u5B57\u7B26\u4E32\uFF0C\u4E0D\u662F\u6807\u8BC6\u7B26\uFF08\u53D8\u91CF\uFF09</p><p>\u83B7\u53D6\u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u952E\uFF09\u7684 2 \u79CD\u65B9\u5F0F\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7\u5B57\u9762\u91CF\u5B9A\u4E49\u5BF9\u8C61</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1.for in</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// &#39;name&#39;  &#39;age&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.Object.keys() \u5F97\u5230\u5C5E\u6027\u7EC4\u6210\u7684\u6570\u7EC4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;name&#39;, &#39;age&#39;]</span>
</code></pre></div><p>\u83B7\u53D6\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\uFF08\u503C\uFF09\u76842\u79CD\u65B9\u5F0F\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7\u5B57\u9762\u91CF\u5B9A\u4E49\u5BF9\u8C61</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1.obj.key</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;never&#39;</span>

<span class="token comment">// 2.obj[&#39;key&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;never&#39;</span>
</code></pre></div><p>\u53D8\u91CF\u4F5C\u4E3A\u5C5E\u6027\u540D\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> keyName <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>keyName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;never&#39;</span>
</code></pre></div><h2 id="\u5B9A\u4E49\u5355\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5355\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5355\u4E2A\u5C5E\u6027</h2><p>\u5728\u67D0\u4E2A\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF0C\u6216\u4FEE\u6539\u8BE5\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u3002</p><p><code>Object.defineProperty(obj, prop, descriptor)</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// descriptor\uFF08\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF09\u662F\u4E00\u4E2A\u5BF9\u8C61</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u81EA\u52A8\u8FD4\u56DE { name: &#39;never&#39;, age: 23 }</span>
</code></pre></div><p>\u5C5E\u6027\u63CF\u8FF0\u7B26\u5206\u4E3A\u4E24\u79CD\uFF0C\u4E0B\u8868\u5C55\u793A\u4E86\u5B83\u4EEC\u53EF\u62E5\u6709\u7684\u952E\u503C\uFF1A</p><table><thead><tr><th></th><th><code>configurable</code></th><th><code>enumerable</code></th><th><code>value</code></th><th><code>writable</code></th><th><code>get</code></th><th><code>set</code></th></tr></thead><tbody><tr><td>\u6570\u636E\u63CF\u8FF0\u7B26</td><td>\u2705</td><td>\u2705</td><td>\u2705</td><td>\u2705</td><td>\u274C</td><td>\u274C</td></tr><tr><td>\u5B58\u53D6\u63CF\u8FF0\u7B26</td><td>\u2705</td><td>\u2705</td><td>\u274C</td><td>\u274C</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><ul><li><code>configurable</code> \uFF1A\u53EF\u914D\u7F6E\uFF08\u5220\u9664\u3001\u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF09\uFF0C\u9ED8\u8BA4\u503C false</li><li><code>enumerable</code> \uFF1A\u53EF\u679A\u4E3E\uFF08\u53EF\u4EE5\u83B7\u53D6\u5230\u5BF9\u8C61\u7684\u5C5E\u6027\uFF09\uFF0C\u9ED8\u8BA4\u503C false</li><li><code>value</code> \uFF1A\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u503C undefined</li><li><code>writable</code> \uFF1A\u53EF\u5199\uFF08\u4FEE\u6539\u5C5E\u6027\uFF09\uFF0C\u9ED8\u8BA4\u503C false</li><li><code>get</code> \uFF1Agetter \u65B9\u6CD5</li><li><code>set</code> \uFF1Asetter \u65B9\u6CD5</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li><code>enumerable</code> \u4E3A false \u8868\u793A\u8BE5\u5C5E\u6027\u4E0D\u53EF\u904D\u5386\u8F93\u51FA\uFF0C\u4F46\u4ECD\u53EF\u4EE5\u4F7F\u7528 <code>.</code> \u8BBF\u95EE\u5230\u5C5E\u6027\u3002\u5728\u63A7\u5236\u53F0\uFF0C\u53EF\u4EE5\u770B\u5230\u4E0D\u53EF\u679A\u4E3E\u5230\u7684\u5C5E\u6027\u4F1A\u53D8\u6D45\u8272\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u63CF\u8FF0\u7B26\u540C\u65F6\u62E5\u6709 <code>value</code> \u6216 <code>writable</code> \u548C <code>get</code> \u6216 <code>set</code> \u952E\uFF0C\u5219\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5F02\u5E38\u3002\u5373 <code>value</code> \u4E0E <code>get</code> \u4E92\u65A5\uFF0C<code>writable</code> \u4E0E <code>set</code> \u4E92\u65A5\u3002</li></ul><h3 id="\u6570\u636E\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> \u6570\u636E\u63CF\u8FF0\u7B26</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7\u5B57\u9762\u91CF\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF0Cconfigurable\u3001enumerable\u3001writable \u5747\u4E3A true</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6D4B\u8BD5</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>age <span class="token comment">// age \u53EF\u5220\u9664</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2333</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// age \u53EF\u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF0C\u6539\u4E3A\u4E0D\u53EF\u5199</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;, age: 2333}</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u4FEE\u6539 age \u5931\u8D25</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;, age: 2333}</span>
</code></pre></div><h3 id="\u5B58\u53D6\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5B58\u53D6\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> \u5B58\u53D6\u63CF\u8FF0\u7B26</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u4F5C\u7528\uFF1A</span>
<span class="token comment">// 1.\u9690\u85CF\u79C1\u6709\u5C5E\u6027</span>
<span class="token comment">// 2.\u622A\u83B7\u5C5E\u6027\u7684\u8BBF\u95EE\u548C\u8D4B\u503C\u8FC7\u7A0B</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F00\u53D1\u7EA6\u5B9A\u4F7F\u7528 _ \u5F00\u5934\u8868\u793A\u79C1\u6709\u5C5E\u6027</span>
  <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5916\u90E8\u901A\u8FC7 age \u4FEE\u6539\u79C1\u6709\u5C5E\u6027 _age</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">interceptGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">interceptSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u62E6\u622A get</span>
<span class="token keyword">function</span> <span class="token function">interceptGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u68C0\u6D4B\u5230 age \u7684\u503C\u88AB\u83B7\u53D6&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u62E6\u622A set</span>
<span class="token keyword">function</span> <span class="token function">interceptSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u68C0\u6D4B\u5230 age \u7684\u503C\u88AB\u8BBE\u7F6E&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// \u68C0\u6D4B\u5230 age \u7684\u503C\u88AB\u83B7\u53D6  23</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2333</span> <span class="token comment">// \u68C0\u6D4B\u5230 age \u7684\u503C\u88AB\u8BBE\u7F6E</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// \u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\uFF1A{name: &#39;never&#39;, _age: 2333}</span>
<span class="token comment">// node \u73AF\u5883\u4E0B\uFF1A</span>
<span class="token comment">// { name: &#39;never&#39;, _age: 2333, age: [Getter/Setter] }</span>
</code></pre></div><p>getter\u3001setter \u7B80\u6D01\u5199\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7B80\u6D01\u5199\u6CD5</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6D4B\u8BD5</span>
obj1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// { _age: 23 }</span>
obj2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// { _age: 23 }</span>
</code></pre></div><h2 id="\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027</h2><p><code>Object.defineProperties(obj, {prop1: {descriptor}, prop2: {descriptor}})</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;, _age: 23}</span>
</code></pre></div><h2 id="\u83B7\u53D6\u5C5E\u6027\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5C5E\u6027\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> \u83B7\u53D6\u5C5E\u6027\u63CF\u8FF0\u7B26</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2333</span>

<span class="token comment">// 1.\u83B7\u53D6\u5355\u4E2A\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF1AObject.getOwnPropertyDescriptor</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {value: &#39;never&#39;, writable: true, enumerable: true, configurable: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {enumerable: true, configurable: true, get: \u0192, set: \u0192}</span>

<span class="token comment">// 2.\u83B7\u53D6\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF1AObject.getOwnPropertyDescriptors</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// age: {enumerable: true, configurable: true, get: \u0192, set: \u0192}</span>
<span class="token comment">// name: {value: &#39;never&#39;, writable: true, enumerable: true, configurable: true}</span>
<span class="token comment">// _age: {value: 2333, writable: true, enumerable: true, configurable: true}</span>
</code></pre></div><h2 id="\u9650\u5236\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u5BF9\u8C61" aria-hidden="true">#</a> \u9650\u5236\u5BF9\u8C61</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1.\u963B\u6B62\u6269\u5C55\uFF1A\u7981\u6B62\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">preventExtensions</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span> <span class="token comment">// \u65E0\u6CD5\u6DFB\u52A0\u5C5E\u6027</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;}</span>

<span class="token comment">// 2.\u5BC6\u5C01\uFF1A\u7981\u6B62\u6DFB\u52A0\u5C5E\u6027\uFF0C\u5E76\u5C06\u73B0\u6709\u5C5E\u6027\u6539\u4E3A\u4E0D\u53EF\u914D\u7F6E\uFF0C\u76F8\u5F53\u4E8E preventExtensions + configurable:false</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token keyword">delete</span> obj2<span class="token punctuation">.</span>name <span class="token comment">// \u65E0\u6CD5\u5220\u9664\u5C5E\u6027</span>
obj2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span> <span class="token comment">// \u65E0\u6CD5\u6DFB\u52A0\u5C5E\u6027</span>
obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;nevermore&#39;</span> <span class="token comment">// \`\u53EF\u4EE5\`\u4FEE\u6539\u73B0\u6709\u5C5E\u6027</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;nevermore&#39;}</span>

<span class="token comment">// 3.\u51BB\u7ED3\uFF1A\u7981\u6B62\u6DFB\u52A0\u5C5E\u6027\uFF0C\u5E76\u5C06\u73B0\u6709\u5C5E\u6027\u6539\u4E3A\u4E0D\u53EF\u914D\u7F6E\u3001\u4E0D\u53EF\u4FEE\u6539\uFF0C\u76F8\u5F53\u4E8E preventExtensions + configurable:false + writable:false</span>
<span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span>
<span class="token keyword">delete</span> obj2<span class="token punctuation">.</span>name <span class="token comment">// \u65E0\u6CD5\u5220\u9664\u5C5E\u6027</span>
obj3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span> <span class="token comment">// \u65E0\u6CD5\u6DFB\u52A0\u5C5E\u6027</span>
obj3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;nevermore&#39;</span> <span class="token comment">// \u65E0\u6CD5\u4FEE\u6539\u5C5E\u6027</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;}</span>
</code></pre></div><h2 id="\u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61\u7684\u65B9\u5F0F</h2><p>\u8BE6\u89C1\u300AJavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u56DB\u7248\u300B8.2 \u521B\u5EFA\u5BF9\u8C61\u7AE0\u8282</p><h3 id="\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5DE5\u5382\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  p<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> p
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F18\u70B9\uFF1A\u5FEB\u901F\u521B\u5EFA\u5927\u91CF\u76F8\u4F3C\u5BF9\u8C61</span>
<span class="token comment">// \u7F3A\u70B9\uFF1A\u521B\u5EFA\u7684\u5B9E\u4F8B\u5BF9\u8C61\u5C5E\u4E8E Object\uFF0C\u65E0\u6CD5\u533A\u5206\u5B9E\u4F8B\u5BF9\u8C61\u7C7B\u578B</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
<span class="token comment">// {name: &#39;Tom&#39;, age: 10, sayName: \u0192}</span>
<span class="token comment">// {name: &#39;Mary&#39;, age: 20, sayName: \u0192}</span>
</code></pre></div><h3 id="\u6784\u9020\u51FD\u6570\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u6A21\u5F0F" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u6A21\u5F0F</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7B49\u4EF7\u4E8E </span>
  <span class="token comment">// this.sayName = new Function(&#39;console.log(this.name)&#39;)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment">// Person {name: &#39;Tom&#39;, age: 18, sayName: \u0192}</span>
<span class="token comment">// Person {name: &#39;Mary&#39;, age: 20, sayName: \u0192}</span>
</code></pre></div><blockquote><p><code>[[Prototype]]</code> \u662F ECMA \u6807\u51C6\uFF0C<code>__proto__</code> \u662F\u6D4F\u89C8\u5668\u5BF9\u6807\u51C6\u7684\u5B9E\u73B0</p></blockquote><p>\u6784\u9020\u51FD\u6570\u6A21\u5F0F\u7684\u7F3A\u70B9\uFF1A\u5982\u679C\u6784\u9020\u51FD\u6570\u91CC\u6709\u65B9\u6CD5\uFF0C\u6BCF\u6B21\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u6D6A\u8D39\u5185\u5B58\u3002\u53EF\u4EE5\u901A\u8FC7\u628A\u65B9\u6CD5\u5B9A\u4E49\u5728\u6784\u9020\u51FD\u6570\u5916\u90E8\u89E3\u51B3\u8FD9\u4E2A\u7F3A\u70B9\uFF0C\u4F46\u53C8\u5F15\u5165\u4E86\u53E6\u4E00\u4E2A\u7F3A\u70B9\uFF1A\u5171\u6709\u7684\u65B9\u6CD5\u90FD\u5728\u5168\u5C40\u4F5C\u7528\u53EF\u4EE5\u57DF\uFF0C\u96BE\u4EE5\u7BA1\u7406\u3002\u8FD9\u4E2A\u7F3A\u70B9\u53EF\u4EE5\u901A\u8FC7\u539F\u578B\u6A21\u5F0F\u89E3\u51B3\u3002</p><h3 id="\u539F\u578B\u6A21\u5F0F-\u539F\u578B-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u6A21\u5F0F-\u539F\u578B-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u539F\u578B\u6A21\u5F0F\uFF08\u539F\u578B + \u6784\u9020\u51FD\u6570\uFF09</h3><p>\u5C06\u5171\u6709\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u6DFB\u52A0\u5230\u539F\u578B\u4E0A\u3002\u56E0\u4E3A\u662F\u6DFB\u52A0\uFF0C\u6240\u4EE5\u539F\u578B\u7684\u6784\u9020\u51FD\u6570\u4ECD\u4FDD\u7559\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

p1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Tom</span>
p2<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Mary</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// {sayName: \u0192, constructor: \u0192}</span>
</code></pre></div><p>\u76F4\u63A5\u8D4B\u503C\u6574\u4E2A prototype \u5BF9\u8C61\u3002\u56E0\u4E3A\u662F\u8D4B\u503C\uFF0C\u6240\u4EE5\u539F\u578B\u7684\u6784\u9020\u51FD\u6570\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u52A0\u4E0A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
  <span class="token literal-property property">kind</span><span class="token operator">:</span> <span class="token string">&#39;human&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// {kind: &#39;human&#39;, constructor: \u0192, sayName: \u0192}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token comment">// Person {name: &#39;Tom&#39;, age: 18}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token comment">// Person {name: &#39;Mary&#39;, age: 20}</span>
</code></pre></div><h2 id="new-\u64CD\u4F5C\u7B26\u6267\u884C\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#new-\u64CD\u4F5C\u7B26\u6267\u884C\u7684\u64CD\u4F5C" aria-hidden="true">#</a> new \u64CD\u4F5C\u7B26\u6267\u884C\u7684\u64CD\u4F5C</h2><ol><li>\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u4E34\u65F6\u5BF9\u8C61</li><li>\u5C06\u8FD9\u4E2A\u4E34\u65F6\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B <code>[[Prototype]]</code> \u6307\u5411\u6784\u9020\u51FD\u6570\u663E\u5F0F\u539F\u578B <code>prototype</code></li><li>\u7ED1\u5B9A <code>this</code> \u5230\u8FD9\u4E2A\u4E34\u65F6\u5BF9\u8C61\u4E0A</li><li>\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\uFF08\u7ED9\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09</li><li>\u8FD4\u56DE\u8FD9\u4E2A\u4E34\u65F6\u5BF9\u8C61</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// new \u76F8\u5F53\u4E8E\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u4E34\u65F6\u5BF9\u8C61</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 2.\u5C06\u8FD9\u4E2A\u4E34\u65F6\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u663E\u5F0F\u539F\u578B</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype
  <span class="token comment">// 3.\u7ED1\u5B9A this \u5230\u8FD9\u4E2A\u4E34\u65F6\u5BF9\u8C61\u4E0A</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">// 4.\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\uFF08\u7ED9\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;never&#39;</span>
  <span class="token comment">// 5.\u8FD4\u56DE\u8FD9\u4E2A\u4E34\u65F6\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span>
<span class="token punctuation">}</span>
</code></pre></div>`,51),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","OOP.html.vue"]]);export{i as default};
