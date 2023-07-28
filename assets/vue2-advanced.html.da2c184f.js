import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.bd7c01d2.js";const t={},p=e(`<h2 id="\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4</h2><p>\u81EA\u5B9A\u4E49\u81EA\u52A8\u805A\u7126\u6307\u4EE4<code>v-focus</code></p><ul><li>\u81EA\u5B9A\u4E49\u5C40\u90E8\u6307\u4EE4\uFF1A\u7EC4\u4EF6\u4E2D\u901A\u8FC7 <code>directives</code> \u9009\u9879\uFF0C\u53EA\u80FD\u5728\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF1B</li><li>\u81EA\u5B9A\u4E49\u5168\u5C40\u6307\u4EE4\uFF1Aapp \u7684 <code>directive</code> \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4EFB\u610F\u7EC4\u4EF6\u4E2D\u88AB\u4F7F\u7528</li></ul><h3 id="\u5C40\u90E8\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u6307\u4EE4" aria-hidden="true">#</a> \u5C40\u90E8\u6307\u4EE4</h3><p><strong>\u9009\u9879\u5F0F API</strong></p><p>\u5728<code>mounted</code>\u5143\u7D20\u6302\u8F7D\u540E\u6267\u884C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-focus</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u751F\u547D\u5468\u671F\u7684\u51FD\u6570(\u81EA\u5B9A\u4E49\u6307\u4EE4)</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// console.log(&quot;v-focus\u5E94\u7528\u7684\u5143\u7D20\u88AB\u6302\u8F7D\u4E86&quot;, el)</span>
          el<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7EC4\u5408\u5F0F API</strong></p><p>\u5FC5\u987B\u8981\u4EE5 v \u5F00\u5934\u4E14\u4E0D\u80FD\u4E3A v-\u547D\u540D</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const vFocus = {
  // \u751F\u547D\u5468\u671F\u7684\u51FD\u6570(\u81EA\u5B9A\u4E49\u6307\u4EE4)
  mounted(el) {
    // console.log(&quot;v-focus\u5E94\u7528\u7684\u5143\u7D20\u88AB\u6302\u8F7D\u4E86&quot;, el)
    el?.focus()
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u5C40\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6307\u4EE4" aria-hidden="true">#</a> \u5168\u5C40\u6307\u4EE4</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// App.vue
const app = createApp(App)
app.directive(&quot;focus&quot;, {
  mounted(el) {
    el?.focus()
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F</h3><ul><li><code>created</code>\uFF1A\u5728\u7ED1\u5B9A\u5143\u7D20\u7684\u5C5E\u6027\uFF08\u5982 class \u5C5E\u6027\uFF09\u6216\u4E8B\u4EF6\u76D1\u542C\u5668\u88AB\u5E94\u7528\u4E4B\u524D\u8C03\u7528\uFF1B</li><li><code>beforeMount</code>\uFF1A\u5F53\u6307\u4EE4\u7B2C\u4E00\u6B21\u7ED1\u5B9A\u5230\u5143\u7D20\u5E76\u4E14\u5728\u6302\u8F7D\u7236\u7EC4\u4EF6\u4E4B\u524D\u8C03\u7528\uFF1B</li><li><code>mounted</code>\uFF1A\u5728\u7ED1\u5B9A\u5143\u7D20\u7684\u7236\u7EC4\u4EF6\u88AB\u6302\u8F7D\u540E\u8C03\u7528\uFF1B</li><li><code>beforeUpdate</code>\uFF1A\u5728\u66F4\u65B0\u5305\u542B\u7EC4\u4EF6\u7684 <code>VNode</code> \u4E4B\u524D\u8C03\u7528\uFF1B</li><li><code>updated</code>\uFF1A\u5728\u5305\u542B\u7EC4\u4EF6\u7684 <code>VNode</code> \u53CA\u5176\u5B50\u7EC4\u4EF6\u7684 <code>VNode</code> \u66F4\u65B0\u540E\u8C03\u7528\uFF1B</li><li><code>beforeUnmount</code>\uFF1A\u5728\u5378\u8F7D\u7ED1\u5B9A\u5143\u7D20\u7684\u7236\u7EC4\u4EF6\u4E4B\u524D\u8C03\u7528\uFF1B\uFF08<code>v-if</code>\u5378\u8F7D\uFF09</li><li><code>unmounted</code>\uFF1A\u5F53\u6307\u4EE4\u4E0E\u5143\u7D20\u89E3\u9664\u7ED1\u5B9A\u4E14\u7236\u7EC4\u4EF6\u5DF2\u5378\u8F7D\u65F6\uFF0C\u53EA\u8C03\u7528\u4E00\u6B21\uFF1B</li></ul><h3 id="\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u53C2\u6570\u548C\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u53C2\u6570\u548C\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u53C2\u6570\u548C\u4FEE\u9970\u7B26</h3><p>\u901A\u8FC7 <code>bindings</code> \u83B7\u53D6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// 1.\u53C2\u6570:xmy-\u4FEE\u9970\u7B26:abc.cba-\u503C:message
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">v-never:</span>xmy.abc.cba</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u54C8\u54C8\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const vNever = {
  mounted(el, bindings){
    // console.log(bindings)
    el.textContent = bindings.value
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EFC\u5408\u7EC3\u4E60-\u81EA\u5B9A\u4E49\u65F6\u95F4\u683C\u5F0F\u5316\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u7EC3\u4E60-\u81EA\u5B9A\u4E49\u65F6\u95F4\u683C\u5F0F\u5316\u6307\u4EE4" aria-hidden="true">#</a> \u7EFC\u5408\u7EC3\u4E60\uFF08\u81EA\u5B9A\u4E49\u65F6\u95F4\u683C\u5F0F\u5316\u6307\u4EE4\uFF09</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-ftime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>YYYY/MM/DD&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ timestamp }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-ftime</span><span class="token punctuation">&gt;</span></span>{{ timestamp }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>

const timestamp = 1231355453

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>app.directive(&quot;ftime&quot;, {
  mounted(el, bindings) {
    // 1.\u83B7\u53D6\u65F6\u95F4, \u5E76\u4E14\u8F6C\u5316\u6210\u6BEB\u79D2
    let timestamp = el.textContent
    if(timestamp.length === 10) {
      timestamp = timestamp * 1000
    }
    timestamp = Number(timestamp)

    // 2.\u83B7\u53D6\u4F20\u5165\u7684\u53C2\u6570
    let value = bindings.value
    if(!value) {
      // \u9ED8\u8BA4\u53C2\u6570
      value = &quot;YYYY-MM-DD HH:mm:ss&quot;
    }

    // 3.\u4F7F\u7528dayjs\u5BF9\u65F6\u95F4\u8FDB\u884C\u683C\u5F0F\u5316
    const formatTime = dayjs(timestamp).format(value)
    el.textContent = formatTime
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u7F6E\u7EC4\u4EF6-teleport" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7EC4\u4EF6-teleport" aria-hidden="true">#</a> \u5185\u7F6E\u7EC4\u4EF6 Teleport</h2><blockquote><p><code>Teleport</code> \u662F\u4E00\u4E2A\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u7EC4\u4EF6\u7684\u6A21\u677F\u4E2D\u5C06\u5185\u5BB9\u6E32\u67D3\u5230\u6307\u5B9A\u7684 <code>DOM</code> \u8282\u70B9\u4F4D\u7F6E\uFF0C\u800C\u4E0D\u53D7\u7EC4\u4EF6\u5C42\u6B21\u7ED3\u6784\u7684\u9650\u5236\uFF1B\u53EF\u4EE5\u5B9E\u73B0\u5C06\u7EC4\u4EF6\u7684\u5185\u5BB9\u6E32\u67D3\u5230\u4EFB\u610F\u7684 <code>DOM</code> \u8282\u70B9\u4E2D\uFF0C\u800C\u4E0D\u4E00\u5B9A\u662F\u7EC4\u4EF6\u81EA\u8EAB\u7684\u7236\u7EA7\u6216\u7956\u5148\u5143\u7D20\u3002\u8FD9\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u975E\u5E38\u6709\u7528\uFF0C\u6BD4\u5982\u5728\u7EC4\u4EF6\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u7684\u5F39\u51FA\u7A97\u53E3\u6216\u8005\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u4EFB\u610F\u4F4D\u7F6E\u3002\u7C7B\u4F3C\u4E8E<code>react</code>\u7684<code>Portals</code></p></blockquote><ul><li><code>to</code>\uFF1A\u6307\u5B9A\u5C06\u5176\u4E2D\u7684\u5185\u5BB9\u79FB\u52A8\u5230\u7684\u76EE\u6807\u5143\u7D20\uFF0C\u53EF\u4EE5\u53EF\u4EE5\u63A5\u53D7 <code>CSS</code> \u9009\u62E9\u5668\u5B57\u7B26\u4E32\u6216 <code>DOM</code> \u5F15\u7528\uFF1B</li><li><code>disabled</code>\uFF1A\u662F\u5426\u7981\u7528 <code>teleport</code> \u7684\u529F\u80FD\uFF1B</li></ul><p><img src="https://secure2.wostatic.cn/static/ojBbTVsrHVwNyCuGyrDxUs/image.png?auth_key=1690559919-akf1MVjcBHc9zYkH6Qpi7U-0-0eb8d718dcb6c28088dc050504d43762" alt=""></p><h2 id="\u5F02\u6B65\u7EC4\u4EF6\u548C-suspense" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7EC4\u4EF6\u548C-suspense" aria-hidden="true">#</a> \u5F02\u6B65\u7EC4\u4EF6\u548C Suspense</h2><p><code>Suspense</code>\u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u5168\u5C40\u7EC4\u4EF6\uFF0C\u8BE5\u7EC4\u4EF6\u6709\u4E24\u4E2A\u63D2\u69FD\uFF1A</p><ul><li><code>default</code>\uFF1A\u5982\u679C<code>default</code>\u53EF\u4EE5\u663E\u793A\uFF0C\u90A3\u4E48\u663E\u793A<code>default</code>\u7684\u5185\u5BB9\uFF1B</li><li><code>fallback</code>\uFF1A\u5982\u679C<code>default</code>\u65E0\u6CD5\u663E\u793A\uFF0C\u90A3\u4E48\u4F1A\u663E\u793A<code>fallback</code>\u63D2\u69FD\u7684\u5185\u5BB9\uFF1B</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>suspense</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-home</span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>suspense</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AsyncHome <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./AsyncHome.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u7F6E\u7EC4\u4EF6-transition" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7EC4\u4EF6-transition" aria-hidden="true">#</a> \u5185\u7F6E\u7EC4\u4EF6 transition</h2><p><strong>\u539F\u7406</strong></p><p>\u901A\u8FC7<code>&lt;transition&gt;&lt;/transition&gt;</code>\u5305\u88F9\u7ED9\u5355\u5143\u7D20\u6216\u8005\u7EC4\u4EF6\u5B9E\u73B0\u8FC7\u6E21\u52A8\u753B</p><ul><li>\u81EA\u52A8\u55C5\u63A2\u76EE\u6807\u5143\u7D20\u662F\u5426\u5E94\u7528\u4E86<code>CSS</code>\u8FC7\u6E21\u6216\u8005\u52A8\u753B\uFF0C\u5982\u679C\u6709\uFF0C\u90A3\u4E48\u5728\u6070\u5F53\u7684\u65F6\u673A\u6DFB\u52A0/\u5220\u9664 <code>CSS</code>\u7C7B\u540D\uFF1B</li><li>\u5982\u679C <code>transition</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86<code>JavaScript</code>\u94A9\u5B50\u51FD\u6570\uFF0C\u8FD9\u4E9B\u94A9\u5B50\u51FD\u6570\u5C06\u5728\u6070\u5F53\u7684\u65F6\u673A\u88AB\u8C03\u7528\uFF1B</li><li>\u5982\u679C\u6CA1\u6709\u627E\u5230<code>JavaScript</code>\u94A9\u5B50\u5E76\u4E14\u4E5F\u6CA1\u6709\u68C0\u6D4B\u5230<code>CSS</code>\u8FC7\u6E21/\u52A8\u753B\uFF0C<code>DOM</code>\u63D2\u5165\u3001\u5220\u9664\u64CD\u4F5C\u5C06\u4F1A\u7ACB\u5373\u6267\u884C\uFF1B</li></ul><p><img src="https://secure2.wostatic.cn/static/d7vfRAtyQKMMk3cieeh4Dd/image.png?auth_key=1690559920-kb6nSQAM4j957VdQYrWTMQ-0-0bba3ed12969e1e047dcd1852e1ca03f" alt=""></p><ul><li><code>duration</code><ul><li><code>number</code>\u7C7B\u578B\uFF1A\u540C\u65F6\u8BBE\u7F6E\u8FDB\u5165\u548C\u79BB\u5F00\u7684\u8FC7\u6E21\u65F6\u95F4\uFF1B</li><li><code>object</code>\u7C7B\u578B\uFF1A\u5206\u522B\u8BBE\u7F6E\u8FDB\u5165\u548C\u79BB\u5F00\u7684\u8FC7\u6E21\u65F6\u95F4</li></ul></li><li><code>mode</code>\u8FC7\u6E21\u6A21\u5F0F <ul><li><code>in-out</code>: \u65B0\u5143\u7D20\u5148\u8FDB\u884C\u8FC7\u6E21\uFF0C\u5B8C\u6210\u4E4B\u540E\u5F53\u524D\u5143\u7D20\u8FC7\u6E21\u79BB\u5F00</li><li><code>out-in</code>: \u5F53\u524D\u5143\u7D20\u5148\u8FDB\u884C\u8FC7\u6E21\uFF0C\u5B8C\u6210\u4E4B\u540E\u65B0\u5143\u7D20\u8FC7\u6E21\u8FDB\u5165</li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow = !isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    // transition\u5305\u88F9\uFF0C\u53EF\u81EA\u5B9A\u4E49\u540D\u79F0
    // \u5982\u679C\u4E2A\u6CA1\u6709name\u7684transition\uFF0C\u90A3\u4E48\u6240\u6709\u7684class\u662F\u4EE5 v- \u4F5C\u4E3A\u9ED8\u8BA4\u524D\u7F00
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u54C8\u54C8\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> isShow <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* \u8FDB\u5165\u79BB\u5F00\u65F6\u52A8\u753B */</span>
<span class="token selector">.my-enter-from,
.my-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-enter-to,
.my-leave-from</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8FDB\u5165\u79BB\u5F00\u65F6\u52A8\u753B\u8FC7\u7A0B */</span>
<span class="token selector">.my-enter-active,
.my-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 2s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">// \u8BBE\u7F6E\u52A8\u753Banimation
.my-enter-active</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> myAnim 2s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.my-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> myAnim 2s ease reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> myAnim</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u7EC4\u4EF6\u5207\u6362\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6\u5207\u6362\u52A8\u753B" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6\u5207\u6362\u52A8\u753B</h3><p><code>appear</code>\uFF1A\u9996\u6B21\u6E32\u67D3</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow = !isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>why<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span> <span class="token attr-name">appear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> isShow ? &#39;home&#39;: &#39;about&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5217\u8868\u8FC7\u6E21\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u8FC7\u6E21\u52A8\u753B" aria-hidden="true">#</a> \u5217\u8868\u8FC7\u6E21\u52A8\u753B</h3><p><img src="https://secure2.wostatic.cn/static/6Rnonsq8Tq9kTJWDNJh1a/image.png?auth_key=1690559919-uGkQCfEG5nAEHWaTVymGEF-0-2cc7b9842210d0b78643f124b7417ada" alt=""></p><p><code>&lt;transition-group&gt;</code>\u6E32\u67D3\u4E00\u4E2A\u5217\u8868\u6267\u884C\u52A8\u753B</p><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4E0D\u4F1A\u6E32\u67D3\u4E00\u4E2A\u5143\u7D20\u7684\u5305\u88F9\u5668\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5143\u7D20\u5E76\u4EE5 <code>tag</code> \u5C5E\u6027\u8FDB\u884C\u6E32\u67D3\uFF1B</li><li>\u8FC7\u6E21\u6A21\u5F0F\u4E0D\u53EF\u7528\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4E0D\u518D\u76F8\u4E92\u5207\u6362\u7279\u6709\u7684\u5143\u7D20\uFF1B</li><li>\u5185\u90E8\u5143\u7D20\u603B\u662F\u9700\u8981\u63D0\u4F9B\u552F\u4E00\u7684 <code>key</code> \u5C5E\u6027\u503C\uFF1B</li><li><code>CSS</code> \u8FC7\u6E21\u7684\u7C7B\u5C06\u4F1A\u5E94\u7528\u5728\u5185\u90E8\u7684\u5143\u7D20\u4E2D\uFF0C\u800C\u4E0D\u662F\u8FD9\u4E2A\u7EC4/\u5BB9\u5668\u672C\u8EAB</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addNumber<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6DFB\u52A0\u6570\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>removeNumber<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5220\u9664\u6570\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shuffleNumber<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6253\u4E71\u6570\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>why<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in nums<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> shuffle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;underscore&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">addNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  nums<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token function">randomIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">removeNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  nums<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token function">randomIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6253\u4E71\u6570\u5B57</span>
<span class="token keyword">const</span> <span class="token function-variable function">shuffleNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  nums<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">shuffle</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">randomIndex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> nums<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.why-enter-from,
.why-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.why-enter-to,
.why-leave-from</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.why-enter-active,
.why-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 2s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.why-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u9488\u5BF9\u5176\u4ED6\u79FB\u52A8\u7684\u9636\u6BB5\u9700\u8981\u7684\u52A8\u753B */</span>
<span class="token selector">.why-move</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 2s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-\u63D2\u4EF6\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#vue-\u63D2\u4EF6\u672C\u8D28" aria-hidden="true">#</a> Vue \u63D2\u4EF6\u672C\u8D28</h2><p>\u5373<code>app.use(\u63D2\u4EF6).use(pinia)</code>\uFF0C\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u6216\u8005\u51FD\u6570</p><ul><li>\u5BF9\u8C61\u7C7B\u578B\uFF1A\u5FC5\u987B\u5305\u542B\u4E00\u4E2A <code>install</code> \u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u4F1A\u5728\u5B89\u88C5\u63D2\u4EF6\u65F6\u6267\u884C\uFF1B</li><li>\u51FD\u6570\u7C7B\u578B\uFF1A\u51FD\u6570\u4F1A\u5728\u5B89\u88C5\u63D2\u4EF6\u65F6\u81EA\u52A8\u6267\u884C\uFF1B</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// MyPlugin.js
const MyPlugin = {
  install(app) {
    // \u5728 install \u65B9\u6CD5\u4E2D\u6269\u5C55 Vue \u529F\u80FD
    app.config.globalProperties.$myMethod = function() {
      console.log(&#39;My method called&#39;);
    };
    app.directive(&#39;my-directive&#39;, {
      // \u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u914D\u7F6E
    });
    app.component(&#39;my-component&#39;, {
      // \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u914D\u7F6E
    });
    // \u4F8B\u5982router\u7684<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span>\u5168\u5C40\u6CE8\u518C
    app.component(&#39;RouterView&#39;, RouterView)
    // ...
  }
};

export default MyPlugin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// App.vue
import { createApp } from &#39;vue&#39;;
import MyPlugin from &#39;./CustomPlugin.js&#39;;
import App from &#39;./App.vue&#39;;

createApp(App).use(MyPlugin).mount(&#39;#app&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u5B9E\u4F8B\u4E2D\uFF0C<code>MyPlugin</code> \u662F\u4E00\u4E2A\u5305\u542B <code>install</code> \u65B9\u6CD5\u7684\u63D2\u4EF6\u5BF9\u8C61\u3002\u5728 <code>install</code> \u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>app</code> \u53C2\u6570\u8BBF\u95EE <code>Vue</code> \u5B9E\u4F8B\uFF0C\u5E76\u4F7F\u7528 <code>app.config</code> \u548C <code>app.xxx</code> \u65B9\u6CD5\u6765\u6269\u5C55 <code>Vue</code> \u529F\u80FD\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>app.config.globalProperties</code> \u6DFB\u52A0\u5168\u5C40\u65B9\u6CD5\u6216\u5C5E\u6027\uFF0C\u901A\u8FC7 <code>app.directive()</code> \u6CE8\u518C\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF0C\u901A\u8FC7 <code>app.component()</code> \u6CE8\u518C\u81EA\u5B9A\u4E49\u5168\u5C40\u7EC4\u4EF6\u7B49\u3002</p><h2 id="jsx-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#jsx-\u8BED\u6CD5" aria-hidden="true">#</a> jsx \u8BED\u6CD5</h2><h4 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h4><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u5728\u9879\u76EE\u4E2D\u4F7F\u7528<code>jsx</code>\uFF0C\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u5BF9<code>jsx</code>\u7684\u652F\u6301\uFF1A</p><ul><li><code>jsx</code>\u6211\u4EEC\u901A\u5E38\u4F1A\u901A\u8FC7<code>Babel</code>\u6765\u8FDB\u884C\u8F6C\u6362\uFF08<code>React</code>\u7F16\u5199\u7684<code>jsx</code>\u5C31\u662F\u901A\u8FC7<code>babel</code>\u8F6C\u6362\u7684\uFF09\uFF1B</li><li>\u5BF9\u4E8E<code>Vue</code>\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728<code>Babel</code>\u4E2D\u914D\u7F6E\u5BF9\u5E94\u7684\u63D2\u4EF6\u5373\u53EF</li></ul><h4 id="\u5B89\u88C5-babel-\u652F\u6301-vue-\u7684-jsx-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-babel-\u652F\u6301-vue-\u7684-jsx-\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5 Babel \u652F\u6301 Vue \u7684 jsx \u63D2\u4EF6</h4><p>webpack \u73AF\u5883\uFF1A<code>npm install @vue/babel-plugin-jsx -D</code></p><p>Vite \u73AF\u5883\uFF1A<code>npm install @vitejs/plugin-vue-jsx -D</code></p><h4 id="\u914D\u7F6E\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u63D2\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u63D2\u4EF6</h4><p>webpack \u73AF\u5883</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>module.exports = {
  presets: [
    &#39;@vue/cli-plugin-babel/preset&#39;
  ],
  plugins: [
    &#39;@vue/babel-plugin-jsx&#39;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vite \u73AF\u5883</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import jsx from &#39;@vitejs/plugin-vue-jsx&#39;
export default defineConfig({
  plugins: [
    vue(),
    jsx()
  ]
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h4><p><strong>vue2 \u9009\u9879\u5F0F API</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./About.vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>\u5F53\u524D\u8BA1\u6570<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>increment <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>decrement <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>About<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vue3 \u7EC4\u5408\u5F0F API</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./About.vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value<span class="token operator">--</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>\u5F53\u524D\u8BA1\u6570<span class="token operator">:</span> <span class="token punctuation">{</span> counter<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span> increment <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span> decrement <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>About<span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setup \u8BED\u6CD5\u7CD6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jsx</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./About.vue&quot;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  counter<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  counter<span class="token punctuation">.</span>value<span class="token operator">--</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">jsx</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>\u5F53\u524D\u8BA1\u6570<span class="token operator">:</span> <span class="token punctuation">{</span> counter<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span> increment <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span> decrement <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>About<span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E90\u7801\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u76F8\u5173" aria-hidden="true">#</a> \u6E90\u7801\u76F8\u5173</h2><h3 id="vue-\u7684\u5DE5\u4F5C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#vue-\u7684\u5DE5\u4F5C\u8FC7\u7A0B" aria-hidden="true">#</a> Vue \u7684\u5DE5\u4F5C\u8FC7\u7A0B</h3><p><img src="https://secure2.wostatic.cn/static/tRuuGMjijtP6szSi85gvdi/image.png?auth_key=1690559993-q7ccv6DXXn5XJg1Bs26Zjc-0-2bacd2a50d94d76a1d6f8777a34014a0" alt=""></p><h3 id="vnode-\u548C-vdom-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#vnode-\u548C-vdom-\u6982\u5FF5" aria-hidden="true">#</a> VNode \u548C VDom \u6982\u5FF5</h3><blockquote><p>VNode\uFF08\u865A\u62DF\u8282\u70B9\uFF09\uFF1A VNode \u662F Vue \u4E2D\u7684\u4E00\u4E2A\u6570\u636E\u5BF9\u8C61\uFF0C\u7528\u4E8E\u63CF\u8FF0\u7EC4\u4EF6\u5728\u865A\u62DF DOM \u4E2D\u7684\u72B6\u6001\u3002\u6BCF\u4E2A VNode \u5BF9\u8C61\u90FD\u8868\u793A\u4E00\u4E2A\u7279\u5B9A\u7684 DOM \u5143\u7D20\u6216\u7EC4\u4EF6\uFF0C\u5305\u542B\u4E86\u8BE5\u5143\u7D20\u6216\u7EC4\u4EF6\u7684\u6807\u7B7E\u540D\u3001\u5C5E\u6027\u3001\u5B50\u8282\u70B9\u7B49\u4FE1\u606F\u3002VNode \u5BF9\u8C61\u662F\u8F7B\u91CF\u7EA7\u7684\uFF0C\u53EF\u4EE5\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u9AD8\u6548\u5730\u521B\u5EFA\u3001\u6BD4\u8F83\u548C\u66F4\u65B0\u3002 VNode \u5BF9\u8C61\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u662F\u901A\u8FC7 Vue.js \u7684\u7F16\u8BD1\u5668\u6216<strong>\u6E32\u67D3\u51FD\u6570</strong>\u751F\u6210\u7684\uFF0C\u5B83\u4EEC\u6784\u6210\u4E86\u7EC4\u4EF6\u6811\u7684\u7ED3\u6784\uFF0C\u7528\u4E8E\u63CF\u8FF0\u7EC4\u4EF6\u5728\u865A\u62DF DOM \u4E2D\u7684\u5C42\u6B21\u5173\u7CFB\u548C\u72B6\u6001\u3002</p></blockquote><blockquote><p>VDOM\uFF08\u865A\u62DF DOM\uFF09\uFF1A VDOM \u662F Vue \u4E2D\u7528\u4E8E\u9AD8\u6548\u6E32\u67D3\u7684\u4E00\u79CD\u6280\u672F\u3002\u5B83\u662F\u4E00\u4E2A\u865A\u62DF\u7684 DOM \u6811\uFF0C\u4E0E\u5B9E\u9645\u7684 DOM \u7ED3\u6784\u76F8\u5BF9\u5E94\u3002\u5F53\u7EC4\u4EF6\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0CVue \u4F1A\u901A\u8FC7\u6BD4\u8F83\u65B0\u65E7 VNode \u5BF9\u8C61\uFF0C\u751F\u6210\u4E00\u7CFB\u5217\u7684 DOM \u64CD\u4F5C\u6765\u66F4\u65B0\u5B9E\u9645\u7684 DOM\uFF0C\u4ECE\u800C\u5B9E\u73B0\u9875\u9762\u7684\u91CD\u65B0\u6E32\u67D3\u3002VDOM \u7684\u4F18\u52BF\u5728\u4E8E\uFF0C\u5B83\u53EF\u4EE5\u5728\u5185\u5B58\u4E2D\u8FDB\u884C DOM \u64CD\u4F5C\uFF0C\u800C\u4E0D\u9700\u8981\u76F4\u63A5\u64CD\u4F5C\u5B9E\u9645\u7684 DOM\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6E32\u67D3\u6027\u80FD\u3002Vue \u4F1A\u5C06\u771F\u5B9E DOM \u7684\u64CD\u4F5C\u4F18\u5316\u4E3A\u6700\u5C0F\uFF0C\u5E76\u6279\u91CF\u6267\u884C\uFF0C\u51CF\u5C11\u4E86\u5BF9\u5B9E\u9645 DOM \u7684\u9891\u7E41\u8BBF\u95EE\u548C\u64CD\u4F5C\uFF0C\u4ECE\u800C\u63D0\u5347\u4E86\u5E94\u7528\u7684\u6027\u80FD\u548C\u54CD\u5E94\u901F\u5EA6\u3002VDOM \u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\u901A\u8FC7\u5C06\u7EC4\u4EF6\u6811\u8F6C\u6362\u4E3A VNode \u5BF9\u8C61\uFF0C\u5E76\u5C06\u5176\u4E0E\u4E4B\u524D\u7684 VNode \u5BF9\u8C61\u8FDB\u884C\u6BD4\u8F83\uFF0C\u627E\u51FA\u5DEE\u5F02\uFF08Diff \u7B97\u6CD5\uFF09\uFF0C\u5E76\u751F\u6210\u76F8\u5E94\u7684 DOM \u64CD\u4F5C\u3002\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u76F4\u63A5\u64CD\u4F5C\u5B9E\u9645 DOM \u5BFC\u81F4\u7684\u6027\u80FD\u95EE\u9898\uFF0C\u5E76\u5B9E\u73B0\u66F4\u9AD8\u6548\u7684\u9875\u9762\u6E32\u67D3\u3002</p></blockquote><blockquote><p>Vue \u5728\u751F\u6210\u771F\u5B9E\u7684 DOM \u4E4B\u524D\uFF0C\u4F1A\u5C06\u6211\u4EEC\u7684\u8282\u70B9\u8F6C\u6362\u6210 VNode\uFF0C\u800C VNode \u7EC4\u5408\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u9897\u6811\u7ED3\u6784\uFF0C\u5C31\u662F\u865A\u62DF DOM\u3002</p></blockquote><p><img src="https://secure2.wostatic.cn/static/kY3CpzuTwVa1RKXtM1KmS5/image.png?auth_key=1690559993-cUdUqqjiLCnGebFF9qugJF-0-5cb772b3679f15620b0e5f02dcbe156d" alt=""></p><p><img src="https://secure2.wostatic.cn/static/tZiQz2nAtzMp7rbcvQqcRk/image.png?auth_key=1690559993-8Jtttu1CnMNVx5ViXndPpL-0-d9374eac1576fc1c36dac97682e0f37b" alt=""></p><p><code>dom</code>\u53D8\u865A\u62DF<code>dom</code>\u5C5E\u4E8E\u6A21\u677F\u7F16\u8BD1\u539F\u7406\uFF08<code>mustache</code>\uFF09</p><p><code>patch(container, vnode)</code>\u51FD\u6570\u8BA9\u865A\u62DF\u8282\u70B9\u4E0A\u6811\uFF08\u5373\u628A\u865A\u62DF<code>dom</code>\u8F6C\u5316\u6210<code>dom</code>\uFF09</p><h3 id="h-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#h-\u51FD\u6570" aria-hidden="true">#</a> h \u51FD\u6570</h3><p><code>h()</code>\u51FD\u6570\u662F\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA <code>vnode</code>\uFF08\u865A\u62DF\u8282\u70B9\uFF09\u7684\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\uFF0C\u662F<code>createVNode()</code>\u7B80\u5316</p><h4 id="h-\u51FD\u6570\u63A5\u6536\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#h-\u51FD\u6570\u63A5\u6536\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> h \u51FD\u6570\u63A5\u6536\u53C2\u6570\u5217\u8868</h4><ul><li><code>tag</code>\uFF1A\u8868\u793A\u8282\u70B9\u7684\u6807\u7B7E\u540D\uFF0C\u5982 <code>div</code>\u3001<code>p</code> \u7B49</li><li><code>props</code>\uFF1A\u8868\u793A\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5982\u7C7B\u540D\u3001\u6837\u5F0F\u3001\u4E8B\u4EF6\u7B49\u3002</li><li><code>children</code>\uFF1A\u8868\u793A\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A <code>VNode</code> \u5BF9\u8C61\u7684<strong>\u6570\u7EC4</strong>\u6216<strong>\u5B57\u7B26\u4E32</strong>\u7B49\u3002</li></ul><h4 id="h-\u51FD\u6570\u7684\u4F7F\u7528-vue2" tabindex="-1"><a class="header-anchor" href="#h-\u51FD\u6570\u7684\u4F7F\u7528-vue2" aria-hidden="true">#</a> h \u51FD\u6570\u7684\u4F7F\u7528\uFF08vue2\uFF09</h4><p>\u6CE8\u610F\uFF1A<code>render()</code>\u51FD\u6570\u662F\u5728\u7EC4\u4EF6\u91CC\u9762\u7684\u9009\u9879\u5F0F API\uFF0C<code>h()</code>\u51FD\u6570\u662F\u771F\u6B63\u521B\u5EFA VNode \u7684</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;h2&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6211\u662F\u6807\u9898&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6211\u662F\u5185\u5BB9, \u54C8\u54C8\u54C8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="h-\u51FD\u6570\u8BA1\u6570\u5668\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#h-\u51FD\u6570\u8BA1\u6570\u5668\u6848\u4F8B" aria-hidden="true">#</a> h \u51FD\u6570\u8BA1\u6570\u5668\u6848\u4F8B</h4><p><strong>vue2 \u9009\u9879\u5F0F API</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./Home.vue&quot;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;h2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5F53\u524D\u8BA1\u6570: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">onClick</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>increment <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;+1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">onClick</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>decrement <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6E32\u67D3\u7EC4\u4EF6</span>
        <span class="token function">h</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vue3 \u7EC4\u5408\u5F0F API</strong></p><p>\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./Home.vue&quot;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value<span class="token operator">--</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;h2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5F53\u524D\u8BA1\u6570: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>counter<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">onClick</span><span class="token operator">:</span> increment <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;+1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">onClick</span><span class="token operator">:</span> decrement <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setup \u8BED\u6CD5\u7CD6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>render</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home.vue&#39;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  counter<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  counter<span class="token punctuation">.</span>value<span class="token operator">--</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;h2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5F53\u524D\u8BA1\u6570: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>counter<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">onClick</span><span class="token operator">:</span> increment <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;+1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">onClick</span><span class="token operator">:</span> decrement <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">h</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u539F\u7406</h3><h4 id="\u9636\u6BB5\u4E00-\u624B\u52A8\u6536\u96C6\u4F9D\u8D56-\u4F7F\u7528\u6570\u7EC4-\u65E0\u8BBA\u662F\u5426\u5B58\u5728\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E00-\u624B\u52A8\u6536\u96C6\u4F9D\u8D56-\u4F7F\u7528\u6570\u7EC4-\u65E0\u8BBA\u662F\u5426\u5B58\u5728\u4F9D\u8D56" aria-hidden="true">#</a> \u9636\u6BB5\u4E00\uFF1A\u624B\u52A8\u6536\u96C6\u4F9D\u8D56\uFF08\u4F7F\u7528\u6570\u7EC4-\u65E0\u8BBA\u662F\u5426\u5B58\u5728\u4F9D\u8D56\uFF09</h4><p><strong>\u601D\u60F3</strong>\uFF1A\u8BBE\u7F6E\u4E00\u4E2A<strong>\u54CD\u5E94\u5F0F\u6570\u7EC4</strong>\uFF0C\u624B\u52A8\u5C06\u4F9D\u8D56\u51FD\u6570\u5B58\u5165\u6570\u7EC4\u4E14\u9ED8\u8BA4\u6267\u884C\u4E00\u6B21\uFF0C\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u901A\u8FC7\u904D\u5386\u54CD\u5E94\u5F0F\u6570\u7EC4\u518D\u6267\u884C\u4F9D\u8D56\u51FD\u6570</p><p><strong>\u5F0A\u7AEF</strong>\uFF1A\u975E\u81EA\u52A8\u4F9D\u8D56\u6536\u96C6\u4E14\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u6570\u7EC4\u4F1A\u904D\u5386\u6240\u6709\u5BF9\u8C61\uFF08\u5373\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u653E\u5728\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\uFF09</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const obj = {
  name: &quot;why&quot;,
  age: 18
}

// \u8BBE\u7F6E\u4E00\u4E2A\u4E13\u95E8\u6267\u884C\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u4E00\u4E2A\u51FD\u6570
const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log(&quot;foo:&quot;, obj.name)
  console.log(&quot;foo&quot;, obj.age)
  console.log(&quot;foo function&quot;)
})


watchFn(function bar() {
  console.log(&quot;bar:&quot;, obj.name + &quot; hello&quot;)
  console.log(&quot;bar:&quot;, obj.age + 10)
  console.log(&quot;bar function&quot;)
})

// \u4FEE\u6539obj\u7684\u5C5E\u6027
console.log(&quot;name\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.name = &quot;kobe&quot;
reactiveFns.forEach(fn =&gt; {
  fn()
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9636\u6BB5\u4E8C-\u624B\u52A8\u6536\u96C6\u4F9D\u8D56-\u4F7F\u7528\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E8C-\u624B\u52A8\u6536\u96C6\u4F9D\u8D56-\u4F7F\u7528\u7C7B" aria-hidden="true">#</a> \u9636\u6BB5\u4E8C\uFF1A\u624B\u52A8\u6536\u96C6\u4F9D\u8D56\uFF08\u4F7F\u7528\u7C7B\uFF09</h4><p><strong>\u601D\u60F3</strong>\uFF1A\u5C06\u54CD\u5E94\u5F0F\u6570\u7EC4\uFF08\u6570\u7EC4\u6DFB\u52A0\u3001\u6570\u7EC4\u904D\u5386\uFF09\u5C01\u88C5\u5230<code>Depend</code>\u7C7B\u4E2D\uFF1B\u4E0D\u540C\u5BF9\u8C61\u5C31\u53EF\u4EE5\u6709\u4E0D\u540C\u7684<code>Depend</code>\u7C7B\uFF08\u5373\u4E0D\u540C\u5BF9\u8C61\u5B58\u653E\u5728\u5404\u81EA\u5BF9\u5E94\u7684\u54CD\u5E94\u5F0F\u6570\u7EC4\u4E2D\uFF09</p><p><strong>\u5F0A\u7AEF</strong>\uFF1A\u6BCF\u6B21\u6570\u636E\u4FEE\u6539\u65F6\uFF0C\u90FD\u9700\u8981\u624B\u52A8\u8C03\u7528<code>notify()</code>\u4E14\u8BE5\u5BF9\u8C61\u4E2D\u672A\u4F9D\u8D56\u7684\u51FD\u6570\u4E5F\u4F1A\u6267\u884C</p><p><strong>\u89E3\u51B3\u70B9</strong>\uFF1A\u672A\u4F9D\u8D56\u7684\u5176\u4ED6\u5BF9\u8C61\u4E0D\u4F1A\u88AB\u6267\u884C\uFF08\u5982\uFF1A<code>obj.name</code>\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F9D\u8D56<code>user.name</code>\u7684\u51FD\u6570\u4E0D\u4F1A\u88AB\u6267\u884C\u3010\u533A\u5206\u4E0D\u540C\u5BF9\u8C61\u540C\u4E00\u5C5E\u6027\u3011\uFF09</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn =&gt; {
      fn()
    })
  }
}

const obj = {
  name: &quot;why&quot;,
  age: 18
}

// \u8BBE\u7F6E\u4E00\u4E2A\u4E13\u95E8\u6267\u884C\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u4E00\u4E2A\u51FD\u6570
// \uFF08objDep = new Depend; userDep = new Depend; productDep = new Depend\uFF09
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

watchFn(function foo() {
  console.log(&quot;foo:&quot;, obj.name)
  console.log(&quot;foo&quot;, obj.age)
  console.log(&quot;foo function&quot;)
})

watchFn(function bar() {
  console.log(&quot;bar:&quot;, obj.name + &quot; hello&quot;)
  console.log(&quot;bar:&quot;, obj.age + 10)
  console.log(&quot;bar function&quot;)
})

// \u4FEE\u6539obj\u7684\u5C5E\u6027
console.log(&quot;name\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.name = &quot;kobe&quot;
dep.notify()

console.log(&quot;age\u53D1\u751F\u53D8\u5316-----------------------&quot;)
// \u6BCF\u6B21\u90FD\u8981\u624B\u52A8\u8C03\u7528notify\u51FD\u6570
dep.notify()

console.log(&quot;name\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.name = &quot;james&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9636\u6BB5\u4E09-\u76D1\u542C\u5C5E\u6027\u53D8\u5316-\u8FD9\u91CC\u4F7F\u7528\u7684\u662F-vue2" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E09-\u76D1\u542C\u5C5E\u6027\u53D8\u5316-\u8FD9\u91CC\u4F7F\u7528\u7684\u662F-vue2" aria-hidden="true">#</a> \u9636\u6BB5\u4E09\uFF1A\u76D1\u542C\u5C5E\u6027\u53D8\u5316\uFF08\u8FD9\u91CC\u4F7F\u7528\u7684\u662F Vue2\uFF09</h4><p><strong>\u539F\u7406</strong>\uFF1A\u904D\u5386\u5BF9\u8C61\u4E2D\u7684\u6BCF\u4E00\u4E2A<code>key</code>\uFF0C\u4F7F\u7528<code>set</code>\u5BF9\u6570\u636E\u8FDB\u884C\u52AB\u6301\uFF0C\u5BF9\u53D1\u751F\u53D8\u5316\u7684<code>value</code>\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C\uFF0C\u5E76\u8C03\u7528<code>notify()</code>\uFF0C\u5B9E\u73B0\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u81EA\u52A8\u8C03\u7528<code>notify()</code></p><p><strong>\u89E3\u51B3\u70B9</strong>\uFF1A\u4E0D\u7528\u6BCF\u6B21\u624B\u52A8\u8C03\u7528<code>notify()</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn =&gt; {
      fn()
    })
  }
}

const obj = {
  name: &quot;why&quot;,
  age: 18
}

// \u8BBE\u7F6E\u4E00\u4E2A\u4E13\u95E8\u6267\u884C\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u4E00\u4E2A\u51FD\u6570
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

// \u65B9\u6848\u4E00: Object.defineProperty() -&gt; Vue2
Object.keys(obj).forEach(key =&gt; {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    // \u4F7F\u7528set\u52AB\u6301\uFF0C\u5BF9\u53D1\u751F\u53D8\u5316\u7684value\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C\uFF0C\u5E76\u8C03\u7528notify\u51FD\u6570
    set: function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})

watchFn(function foo() {
  console.log(&quot;foo:&quot;, obj.name)
  console.log(&quot;foo&quot;, obj.age)
  console.log(&quot;foo function&quot;)
})

watchFn(function bar() {
  console.log(&quot;bar:&quot;, obj.name + &quot; hello&quot;)
  console.log(&quot;bar:&quot;, obj.age + 10)
  console.log(&quot;bar function&quot;)
})

// \u4FEE\u6539obj\u7684\u5C5E\u6027
console.log(&quot;name\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.name = &quot;kobe&quot;

console.log(&quot;age\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.age = 20

console.log(&quot;name\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.name = &quot;james&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9636\u6BB5\u56DB-\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56-\u7CBE\u51C6\u6536\u96C6\u5C5E\u6027\u7684\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u56DB-\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56-\u7CBE\u51C6\u6536\u96C6\u5C5E\u6027\u7684\u4F9D\u8D56" aria-hidden="true">#</a> \u9636\u6BB5\u56DB\uFF1A\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\uFF08\u7CBE\u51C6\u6536\u96C6\u5C5E\u6027\u7684\u4F9D\u8D56\uFF09</h4><p><strong>\u539F\u7406</strong></p><ol><li><code>dep</code>\u5BF9\u8C61\u6570\u636E\u7ED3\u6784\u7684\u7BA1\u7406 <ul><li>\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u90FD\u4F1A\u5BF9\u5E94\u4E00\u4E2A<code>dep</code>\u5BF9\u8C61</li><li>\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u591A\u4E2A\u5C5E\u6027\u7684<code>dep</code>\u5BF9\u8C61\u662F\u5B58\u653E\u4E00\u4E2A<code>map</code>\u5BF9\u8C61\u4E2D</li><li>\u591A\u4E2A\u5BF9\u8C61\u7684<code>map</code>\u5BF9\u8C61, \u4F1A\u88AB\u5B58\u653E\u5230\u4E00\u4E2A<code>objMap</code>\u7684\u5BF9\u8C61\u4E2D</li></ul></li><li>\u4F9D\u8D56\u6536\u96C6 <ul><li>\u5F53\u6267\u884C get \u51FD\u6570, \u81EA\u52A8\u7684\u6DFB\u52A0 fn \u51FD\u6570</li></ul></li></ol><p><img src="https://secure2.wostatic.cn/static/kqQWhkMSyxHCdWf8yA7nsT/image.png" alt=""></p><p><img src="https://secure2.wostatic.cn/static/8RjLTEeSnabbV7x8cj51n5/image.png" alt=""></p><p><strong>\u89E3\u51B3\u70B9</strong>\uFF1A\u5BF9\u4E8E\u540C\u4E00<code>Dep</code>\u5BF9\u8C61\u4E2D\u672A\u4F9D\u8D56\u7684\u6570\u636E\u4E0D\u88AB\u6267\u884C\uFF0C\u53EA\u6267\u884C\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u53D1\u751F\u53D8\u5316\u7684\u6570\u636E\uFF08\u5982\uFF1A<code>user.name</code>\u53D8\u5316\u65F6\uFF0C\u4E0D\u6267\u884C\u53EA\u4F9D\u8D56<code>user.age</code>\u7684\u51FD\u6570\u3010\u533A\u5206\u540C\u4E00\u5BF9\u8C61\u4E0D\u540C\u5C5E\u6027\u3011\uFF09</p><p><strong>\u5F0A\u7AEF</strong>\uFF1A\u4EC5\u4EC5\u662F\u5355\u4E2A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>class Depend {
  constructor() {
    // \u9632\u6B62\u6DFB\u52A0\u91CD\u590D\u7684dep
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn =&gt; {
      fn()
    })
  }
}

const obj = {
  name: &quot;why&quot;,
  age: 18
}

// \u8BBE\u7F6E\u4E00\u4E2A\u4E13\u95E8\u6267\u884C\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u4E00\u4E2A\u51FD\u6570
let reactiveFn = null
function watchFn(fn) {
  // \u4E0D\u80FD dep.addDepend(Fn)
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// \u5C01\u88C5\u4E00\u4E2A\u51FD\u6570: \u8D1F\u8D23\u901A\u8FC7obj\u7684key\u83B7\u53D6\u5BF9\u5E94\u7684Depend\u5BF9\u8C61\uFF08\u6838\u5FC3\uFF09
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.\u6839\u636E\u5BF9\u8C61obj, \u627E\u5230\u5BF9\u5E94\u7684map\u5BF9\u8C61
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.\u6839\u636Ekey--&gt;name/age, \u627E\u5230\u5BF9\u5E94\u7684depend\u5BF9\u8C61
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}


Object.keys(obj).forEach(key =&gt; {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get: function() {
      // get\u51FD\u6570\u80FD\u62FF\u5230obj -&gt; key
      // console.log(&quot;get\u51FD\u6570\u4E2D:&quot;, obj, key)
      // \u627E\u5230\u5BF9\u5E94\u7684obj\u5BF9\u8C61\u7684key\u5BF9\u5E94\u7684dep\u5BF9\u8C61
      const dep = getDepend(obj, key)
      dep.addDepend(reactiveFn)

      return value
    }
  })
})

// \u4E1A\u52A1\u4EE3\u7801
watchFn(function foo() {
  console.log(&quot;foo function&quot;)
  console.log(&quot;foo:&quot;, obj.name)
  console.log(&quot;foo&quot;, obj.age)
})

watchFn(function bar() {
  console.log(&quot;bar function&quot;)
  console.log(&quot;bar:&quot;, obj.age + 10)
})

// \u4FEE\u6539obj\u7684\u5C5E\u6027
console.log(&quot;name\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.name = &quot;kobe&quot;

console.log(&quot;age\u53D1\u751F\u53D8\u5316-----------------------&quot;)
obj.age = 20

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9636\u6BB5\u4E94-\u591A\u4E2A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E94-\u591A\u4E2A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u9636\u6BB5\u4E94\uFF1A\u591A\u4E2A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F</h4><p><strong>\u539F\u7406</strong>\uFF1A\u5C06<code>Object.keys(obj).forEach(...)</code>\u5C01\u88C5\u5728\u4E00\u4E2A\u5E26\u53C2\u6570\u7684\u51FD\u6570\u4E2D<code>function reactive(obj) {...}</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.add(fn)
    }
  }

  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn =&gt; {
      fn()
    })
  }
}

// \u8BBE\u7F6E\u4E00\u4E2A\u4E13\u95E8\u6267\u884C\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u4E00\u4E2A\u51FD\u6570
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// \u5C01\u88C5\u4E00\u4E2A\u51FD\u6570: \u8D1F\u8D23\u901A\u8FC7obj\u7684key\u83B7\u53D6\u5BF9\u5E94\u7684Depend\u5BF9\u8C61(\u6838\u5FC3)
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.\u6839\u636E\u5BF9\u8C61obj, \u627E\u5230\u5BF9\u5E94\u7684map\u5BF9\u8C61
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.\u6839\u636Ekey, \u627E\u5230\u5BF9\u5E94\u7684depend\u5BF9\u8C61
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}

function reactive(obj) {
  Object.keys(obj).forEach(key =&gt; {
    let value = obj[key]

    Object.defineProperty(obj, key, {
      set: function(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      },
      get: function() {
        // \u62FF\u5230obj -&gt; key
        // console.log(&quot;get\u51FD\u6570\u4E2D:&quot;, obj, key)
        // \u627E\u5230\u5BF9\u5E94\u7684obj\u5BF9\u8C61\u7684key\u5BF9\u5E94\u7684dep\u5BF9\u8C61
        const dep = getDepend(obj, key)
        // dep.addDepend(reactiveFn)
        dep.depend()

        return value
      }
    })
  })
  return obj
}

const user = reative({
  name: &quot;nevermore&quot;,
  age: 23
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue2-\u548C-vue3-\u7684\u76D1\u542C\u5C5E\u6027\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#vue2-\u548C-vue3-\u7684\u76D1\u542C\u5C5E\u6027\u53D8\u5316" aria-hidden="true">#</a> Vue2 \u548C Vue3 \u7684\u76D1\u542C\u5C5E\u6027\u53D8\u5316</h4><p>Vue2\uFF1A<code>Object.defineProperty()</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>function reactive(obj) {
  Object.keys(obj).forEach(key =&gt; {
    let value = obj[key]

    Object.defineProperty(obj, key, {
      set: function(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      },
      get: function() {
        const dep = getDepend(obj, key)
        dep.depend()
        return value
      }
    })
  })
  return obj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3\uFF1A<code>new proxy()</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>function reactive(obj) {
  const objProxy = new Proxy(obj, {
    set: function(target, key, newValue, receiver) {
      // target[key] = newValue
      Reflect.set(target, key, newValue, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    },
    get: function(target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()
      // return target[key]
      return Reflect.get(target, key, receiver)
    }
  })
  return objProxy
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="diff-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#diff-\u7B97\u6CD5" aria-hidden="true">#</a> Diff \u7B97\u6CD5</h3><p>diff \u53D1\u751F\u5728\u865A\u62DF dom \u4E0A\u7684</p><h4 id="\u7B2C\u4E00\u6B65\u7684\u64CD\u4F5C\u662F\u4ECE\u5934\u5F00\u59CB\u8FDB\u884C\u904D\u5386\u3001\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65\u7684\u64CD\u4F5C\u662F\u4ECE\u5934\u5F00\u59CB\u8FDB\u884C\u904D\u5386\u3001\u6BD4\u8F83" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65\u7684\u64CD\u4F5C\u662F\u4ECE\u5934\u5F00\u59CB\u8FDB\u884C\u904D\u5386\u3001\u6BD4\u8F83</h4><ul><li><p>a \u548C b \u662F\u4E00\u81F4\u7684\u4F1A\u7EE7\u7EED\u8FDB\u884C\u6BD4\u8F83</p></li><li><p>c \u548C f \u56E0\u4E3A key \u4E0D\u4E00\u81F4\uFF0C\u6240\u4EE5\u5C31\u4F1A break \u8DF3\u51FA\u5FAA\u73AF</p><p><img src="https://secure2.wostatic.cn/static/2b62e5BGMf6KQn7VZch61A/image.png" alt=""></p></li></ul><h4 id="\u7B2C\u4E8C\u6B65\u7684\u64CD\u4F5C\u662F\u4ECE\u5C3E\u90E8\u5F00\u59CB\u8FDB\u884C\u904D\u5386\u3001\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65\u7684\u64CD\u4F5C\u662F\u4ECE\u5C3E\u90E8\u5F00\u59CB\u8FDB\u884C\u904D\u5386\u3001\u6BD4\u8F83" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\u7684\u64CD\u4F5C\u662F\u4ECE\u5C3E\u90E8\u5F00\u59CB\u8FDB\u884C\u904D\u5386\u3001\u6BD4\u8F83</h4><p><img src="https://secure2.wostatic.cn/static/kYntgN3t8fhrhSBnsTtoAm/image.png" alt=""></p><h4 id="\u7B2C\u4E09\u6B65\u662F\u5982\u679C\u65E7\u8282\u70B9\u904D\u5386\u5B8C\u6BD5-\u4F46\u662F\u4F9D\u7136\u6709\u65B0\u7684\u8282\u70B9-\u90A3\u4E48\u5C31\u65B0\u589E\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u6B65\u662F\u5982\u679C\u65E7\u8282\u70B9\u904D\u5386\u5B8C\u6BD5-\u4F46\u662F\u4F9D\u7136\u6709\u65B0\u7684\u8282\u70B9-\u90A3\u4E48\u5C31\u65B0\u589E\u8282\u70B9" aria-hidden="true">#</a> \u7B2C\u4E09\u6B65\u662F\u5982\u679C\u65E7\u8282\u70B9\u904D\u5386\u5B8C\u6BD5\uFF0C\u4F46\u662F\u4F9D\u7136\u6709\u65B0\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u5C31\u65B0\u589E\u8282\u70B9</h4><p><img src="https://secure2.wostatic.cn/static/i77tqonHEyEJ6wbQ1akspN/image.png" alt=""></p><h4 id="\u7B2C\u56DB\u6B65\u662F\u5982\u679C\u65B0\u7684\u8282\u70B9\u904D\u5386\u5B8C\u6BD5-\u4F46\u662F\u4F9D\u7136\u6709\u65E7\u7684\u8282\u70B9-\u90A3\u4E48\u5C31\u79FB\u9664\u65E7\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u6B65\u662F\u5982\u679C\u65B0\u7684\u8282\u70B9\u904D\u5386\u5B8C\u6BD5-\u4F46\u662F\u4F9D\u7136\u6709\u65E7\u7684\u8282\u70B9-\u90A3\u4E48\u5C31\u79FB\u9664\u65E7\u8282\u70B9" aria-hidden="true">#</a> \u7B2C\u56DB\u6B65\u662F\u5982\u679C\u65B0\u7684\u8282\u70B9\u904D\u5386\u5B8C\u6BD5\uFF0C\u4F46\u662F\u4F9D\u7136\u6709\u65E7\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u5C31\u79FB\u9664\u65E7\u8282\u70B9</h4><p><img src="https://secure2.wostatic.cn/static/uYDCx3Kh7DCtiGrswmeg6v/image.png" alt=""></p><h4 id="\u7B2C\u4E94\u6B65\u662F\u6700\u7279\u8272\u7684\u60C5\u51B5-\u4E2D\u95F4\u8FD8\u6709\u5F88\u591A\u672A\u77E5\u7684\u6216\u8005\u4E71\u5E8F\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u6B65\u662F\u6700\u7279\u8272\u7684\u60C5\u51B5-\u4E2D\u95F4\u8FD8\u6709\u5F88\u591A\u672A\u77E5\u7684\u6216\u8005\u4E71\u5E8F\u7684\u8282\u70B9" aria-hidden="true">#</a> \u7B2C\u4E94\u6B65\u662F\u6700\u7279\u8272\u7684\u60C5\u51B5\uFF0C\u4E2D\u95F4\u8FD8\u6709\u5F88\u591A\u672A\u77E5\u7684\u6216\u8005\u4E71\u5E8F\u7684\u8282\u70B9</h4><p><img src="https://secure2.wostatic.cn/static/6kzuXtceQRPejn9xc1mwp5/image.png" alt=""></p>`,137),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","vue2-advanced.html.vue"]]);export{r as default};
