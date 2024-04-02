import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.21cdfc63.js";const p={},e=t(`<p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230111195321.png" alt=""></p><p>\u5728\u4E8B\u4EF6\u89E6\u53D1\u9891\u7E41\u5982 resize\u3001scroll\u3001mousemove \u7B49\u573A\u666F\u4E2D\uFF0C\u4E3A\u4E86\u51CF\u5C11\u5904\u7406\u5F00\u9500\uFF0C\u91C7\u7528\u8282\u6D41\u6216\u9632\u6296<strong>\u9650\u5236\u51FD\u6570\u7684\u6267\u884C\u6B21\u6570</strong>\u3002\u5171\u540C\u70B9\u90FD\u662F\u5728\u89C4\u5B9A\u65F6\u95F4\u6BB5\u5185\u9891\u7E41\u89E6\u53D1\u4E8B\u4EF6\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002</p><p>\u8282\u6D41\uFF1A\u529F\u80FD\u51FD\u6570 <code>fn</code> \u5728<strong>\u5B9A\u65F6\u5668\u5916 <strong>\u6216 <strong>\u6CA1\u6709\u5B9A\u65F6\u5668</strong>\uFF0C\u5219\u5728\u56FA\u5B9A\u65F6\u95F4\u6BB5</strong>\u5F00\u59CB</strong>\u65F6\u7ACB\u5373\u6267\u884C\uFF0C\u5373\u7ACB\u5373\u6267\u884C\u7248\u3002\u7C7B\u6BD4<strong>\u6280\u80FD\u51B7\u5374\u65F6\u95F4</strong>\uFF0C\u91CA\u653E\u6280\u80FD\u540E\u8FDB\u5165\u51B7\u5374\u3002\u8FDE\u7EED\u89E6\u53D1\u4E8B\u4EF6\u4F46\u662F\u5728 n \u79D2\u4E2D\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002\u8282\u6D41\u4F1A\u7A00\u91CA\u51FD\u6570\u7684\u6267\u884C\u9891\u7387\u3002</p><p>\u9632\u6296\uFF1A\u529F\u80FD\u51FD\u6570 <code>fn</code> \u5728<strong>\u5B9A\u65F6\u5668\u5185</strong>\uFF0C\u5219\u5728\u56FA\u5B9A\u65F6\u95F4\u6BB5<strong>\u7ED3\u675F</strong>\u65F6\u6267\u884C\uFF0C\u5373\u975E\u7ACB\u5373\u6267\u884C\u7248\u3002\u7C7B\u6BD4<strong>\u541F\u5531\u65BD\u6CD5\u65F6\u95F4</strong>\uFF0C\u6253\u65AD\u5219\u91CD\u6765\u3002<strong>\u89E6\u53D1\u4E8B\u4EF6\u540E n \u79D2\u540E\u624D\u6267\u884C\u51FD\u6570\uFF0C\u5982\u679C\u5728 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u4E8B\u4EF6\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u65F6\u95F4\u3002</strong></p><h1 id="\u8282\u6D41-throttle" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41-throttle" aria-hidden="true">#</a> \u8282\u6D41\uFF08throttle\uFF09</h1><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/undefinedimage_0EJ4m4lcin.png" alt=""></p><h2 id="\u7ACB\u5373\u6267\u884C\u7248-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u7248-\u5E38\u7528" aria-hidden="true">#</a> \u7ACB\u5373\u6267\u884C\u7248\uFF08\u5E38\u7528\uFF09</h2><p><strong>\u529F\u80FD\u51FD\u6570\u5728\u5B9A\u65F6\u5668\u5916\uFF1A\u89E6\u53D1\u4E8B\u4EF6\u540E\u7ACB\u5373\u6267\u884C\u51FD\u6570\u518D\u8FDB\u5165\u89C4\u5B9A\u51B7\u5374\u65F6\u95F4</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u610F\u5728\u5B9A\u65F6\u5668\u5916\uFF08\u51B7\u5374\uFF09</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u601D\u8DEF\uFF1A</p><ol><li>\u6BCF\u5F53\u89E6\u53D1\u4E8B\u4EF6\u8C03\u7528\u8282\u6D41\u51FD\u6570\uFF0C\u5982\u679C\u5F53\u524D\u6CA1\u6709\u8BA1\u65F6\u5668\uFF0C\u5C31\u6267\u884C\u529F\u80FD\u51FD\u6570 <code>fn</code>\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u8BA1\u65F6\u5668\u8BA1\u65F6\u5B8C\u6BD5\u540E\u6E05\u9664\u81EA\u5DF1\u3002</li><li>\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u4E0D\u65AD\u8C03\u7528\u8282\u6D41\u51FD\u6570\uFF0C\u7531\u4E8E\u5B9A\u65F6\u5668\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4E0D\u6267\u884C\u529F\u80FD\u51FD\u6570 <code>fn</code>\u3002</li></ol><h2 id="\u975E\u7ACB\u5373\u6267\u884C\u7248" tabindex="-1"><a class="header-anchor" href="#\u975E\u7ACB\u5373\u6267\u884C\u7248" aria-hidden="true">#</a> \u975E\u7ACB\u5373\u6267\u884C\u7248</h2><p><strong>\u529F\u80FD\u51FD\u6570\u5728\u5B9A\u65F6\u5668\u5916</strong>\uFF1A\u975E\u7ACB\u5373\u6267\u884C\u5C31\u4E0D\u662F\u8282\u6D41\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fakeThrottle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u610F\u5728\u5B9A\u65F6\u5668\u5185\uFF08\u541F\u5531\uFF09</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">fakeThrottle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65F6\u95F4\u6233\u7248" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u6233\u7248" aria-hidden="true">#</a> \u65F6\u95F4\u6233\u7248</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u6848\u4E00</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous <span class="token operator">&gt;</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
      previous <span class="token operator">=</span> now
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>

<span class="token comment">// \u65B9\u6848\u4E8C(coderwhy)</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> interval<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684\u5F00\u59CB\u65F6\u95F4</span>
  <span class="token keyword">let</span> lastTime <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 2.\u4E8B\u4EF6\u89E6\u53D1\u65F6, \u771F\u6B63\u6267\u884C\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> <span class="token function-variable function">_throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 2.1.\u83B7\u53D6\u5F53\u524D\u4E8B\u4EF6\u89E6\u53D1\u65F6\u7684\u65F6\u95F4(\u8F93\u5165\u7B2C\u4E00\u6B21\u4F1A\u89E6\u53D1\uFF0C\u56E0\u4E3ADate().getTime()\u4E00\u5F00\u59CB\u662F\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6570)</span>
    <span class="token keyword">const</span> nowTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 2.2.\u4F7F\u7528\u5F53\u524D\u89E6\u53D1\u7684\u65F6\u95F4\u548C\u4E4B\u524D\u7684\u65F6\u95F4\u95F4\u9694\u4EE5\u53CA\u4E0A\u4E00\u6B21\u5F00\u59CB\u7684\u65F6\u95F4, \u8BA1\u7B97\u51FA\u8FD8\u5269\u4F59\u591A\u957F\u4E8B\u4EF6\u9700\u8981\u53BB\u89E6\u53D1\u51FD\u6570</span>
    <span class="token keyword">const</span> remainTime <span class="token operator">=</span> interval <span class="token operator">-</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> lastTime<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remainTime <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2.3.\u771F\u6B63\u89E6\u53D1\u51FD\u6570</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 2.4.\u4FDD\u7559\u4E0A\u6B21\u89E6\u53D1\u7684\u65F6\u95F4</span>
      lastTime <span class="token operator">=</span> nowTime
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> _throttle
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u573A\u666F\uFF1A</p><ul><li>\u76D1\u542C\u9875\u9762\u6EDA\u52A8\u4E8B\u4EF6\u3002</li><li>\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\u3002</li><li>\u9891\u7E41\u70B9\u51FB\u6309\u94AE\u4E8B\u4EF6\u3002</li><li>\u98DE\u673A\u5927\u6218\u6E38\u620F\u5B50\u5F39\u5C04\u51FB\u3002</li><li>\u751F\u6D3B\u4F8B\u5B50\uFF1A1 \u5206\u949F\u540E\u6CA1\u6709\u95EE\u9898\u5C31\u4E0B\u8BFE \u219210s \u5F20\u4E09 \u2192 \u91CD\u65B0\u7B49 1 \u5206\u949F \u219230s \u674E\u56DB \u2192 \u518D\u91CD\u65B0\u7B49 1 \u5206\u949F\u3002</li></ul><h1 id="\u9632\u6296-debounce" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296-debounce" aria-hidden="true">#</a> \u9632\u6296\uFF08debounce\uFF09</h1><h2 id="\u975E\u7ACB\u5373\u6267\u884C\u7248-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#\u975E\u7ACB\u5373\u6267\u884C\u7248-\u5E38\u7528" aria-hidden="true">#</a> \u975E\u7ACB\u5373\u6267\u884C\u7248\uFF08\u5E38\u7528\uFF09</h2><p><strong>\u529F\u80FD\u51FD\u6570\u5728\u5B9A\u65F6\u5668\u5916\uFF1A\u89E6\u53D1\u4E8B\u4EF6\u540E\u541F\u5531\u89C4\u5B9A\u65F6\u95F4\u540E\u518D\u6267\u884C\u51FD\u6570\u3002</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u5B9A\u4E49\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u4FDD\u5B58\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 2.\u771F\u6B63\u6267\u884C\u7684\u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u628A\u4E0A\u4E00\u6B21\u7684timer\u5B9A\u65F6\u5668\u53D6\u6D88\u6389</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5EF6\u8FDF\u6267\u884C</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5916\u90E8\u4F20\u5165\u7684\u771F\u6B63\u8981\u6267\u884C\u7684\u51FD\u6570</span>
      <span class="token comment">// \u8FD9\u91CC\u7684this\u662Finput\u6807\u7B7E\u672C\u8EAB\uFF0C\u4E0D\u7528apply\u7ED1\u5B9A\u5C31\u6307\u5411window</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span>oninput <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ACB\u5373\u6267\u884C\u7248" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u7248" aria-hidden="true">#</a> \u7ACB\u5373\u6267\u884C\u7248</h2><p>\u52A0\u5165<code>immediate</code>\u548C<code>isInvoke</code>\u53D8\u91CF\u6765\u5B9E\u73B0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8F93\u5165\u7B2C\u4E00\u6B21\u5C31\u8981\u7ACB\u5373\u53D1\u9001\u8BF7\u6C42</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> immediate <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u5B9A\u4E49\u4E00\u4E2A\u5B9A\u65F6\u5668, \u4FDD\u5B58\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> isInvoke <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token comment">// 2.\u771F\u6B63\u6267\u884C\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> <span class="token function-variable function">_debounce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D6\u6D88\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>

    <span class="token comment">// \u5224\u65AD\u662F\u5426\u9700\u8981\u7ACB\u5373\u6267\u884C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isInvoke<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      isInvoke <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token comment">// immediate=false  \u7406\u8BBA\u4E0A\u53EF\u4EE5\uFF0C\u4F46\u662F\u4E0D\u597D\u3002</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5EF6\u8FDF\u6267\u884C</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5916\u90E8\u4F20\u5165\u7684\u771F\u6B63\u8981\u6267\u884C\u7684\u51FD\u6570</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        isInvoke <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token comment">// immediate=true   \u7406\u8BBA\u4E0A\u53EF\u4EE5\uFF0C\u4F46\u662F\u4E0D\u597D\u3002</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> _debounce
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u601D\u8DEF\uFF1A</p><ol><li>\u6BCF\u5F53\u89E6\u53D1\u4E8B\u4EF6\u8C03\u7528\u9632\u6296\u51FD\u6570\uFF0C\u5C31\u521B\u5EFA\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u5982\u679C\u65B0\u521B\u5EFA\u8BA1\u65F6\u5668\u524D\u5B58\u5728\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u5C31\u6E05\u9664\u65E7\u7684\u8BA1\u65F6\u5668\uFF0C\u4FDD\u7559\u65B0\u521B\u5EFA\u7684\u8BA1\u65F6\u5668\u3002</li><li>\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u4E0D\u65AD\u8C03\u7528\u9632\u6296\u51FD\u6570\uFF0C\u4F1A\u4E0D\u65AD\u521B\u5EFA\u65B0\u7684\u8BA1\u65F6\u5668\u66FF\u4EE3\u65E7\u7684\u8BA1\u65F6\u5668\u3002\u67D0\u4E00\u8BA1\u65F6\u5668\u575A\u6301\u89C4\u5B9A\u65F6\u95F4\u4E0D\u88AB\u66FF\u4EE3\uFF0C\u624D\u6267\u884C\u529F\u80FD\u51FD\u6570\u3002</li></ol><p>\u901A\u4FD7\u7406\u89E3\uFF1A\u50CF\u662F\u64C2\u53F0\u8D5B\u4E00\u6837\uFF0C\u8C01\u5728\u64C2\u53F0\u4E0A\u575A\u6301\u4E00\u6BB5\u65F6\u95F4\uFF0C\u65E0\u4EBA\u6311\u6218\uFF0C\u5C31\u662F\u6700\u7EC8\u7684\u80DC\u51FA\u8005\u3002\u6216\u50CF\u662F\u62CD\u5356\u4E00\u6837\uFF0C\u8C01\u51FA\u4EF7\u575A\u6301\u4E00\u6BB5\u65F6\u95F4\uFF0C\u65E0\u4EBA\u518D\u6B21\u51FA\u4EF7\uFF0C\u5C31\u662F\u6700\u7EC8\u7684\u7ADE\u5F97\u8005\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8282\u6D41\u5C31\u662F\u300C\u6280\u80FD\u51B7\u5374\u4E2D\u300D</span>
<span class="token keyword">const</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>


<span class="token comment">// \u9632\u6296\u5C31\u662F\u300C\u56DE\u57CE\u88AB\u6253\u65AD\u300D</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span>oninput <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u573A\u666F\uFF1A</p><ul><li>\u641C\u7D22\u8F93\u5165\u6846\u5185\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8054\u60F3\uFF08\u5982\u5728 1s \u5185\u8F93\u5165 coderwhy\uFF0C\u603B\u5171\u53EA\u53D1\u9001\u4E00\u6B21\u8BF7\u6C42\u8FDB\u884C\u8054\u60F3\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u8FDB\u884C 500ms \u8054\u60F3\uFF0C\u6BCF\u6B21\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26\u91CD\u65B0\u7B49\u5F85 500ms\uFF09\u3002</li><li>\u76D1\u542C\u6D4F\u89C8\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002</li><li>\u751F\u6D3B\u4F8B\u5B50\uFF1A10 \u70B9\u4E0B\u8BFE\uFF0C1 \u5206\u949F\u5185\u53EA\u56DE\u7B54\u4E00\u4E2A\u540C\u5B66\u7684\u95EE\u9898\u3002</li></ul><h1 id="\u7B2C\u4E09\u65B9\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u5E93</h1><ul><li>lodash\uFF1Aunderscore \u5347\u7EA7\u7248\uFF0C\u66F4\u7B28\u91CD\uFF0C\u5F88\u4E45\u6CA1\u66F4\u65B0\u4E86\u3002 <ol><li>\u5F15\u5165 CDN\uFF0C<code>xxx.oninput=_.throttle(inputChange,2000)\u3002</code></li></ol></li><li>underscore\uFF1A\u66F4\u8F7B\u91CF\uFF0C\u4ECD\u5728\u7EF4\u62A4\u3002 <ol><li>\u5F15\u5165 CDN\uFF0C<code>xxx.oninput=_.debounce(inputChange,2000)</code>\u3002</li></ol></li></ul>`,33),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","throttle-debounce.html.vue"]]);export{k as default};