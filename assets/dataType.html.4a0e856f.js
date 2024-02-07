import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.8778cd3d.js";const t={},p=e(`<h2 id="any\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#any\u7C7B\u578B" aria-hidden="true">#</a> any\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5F53\u8FDB\u884C\u4E00\u4E9B\u7C7B\u578B\u65AD\u8A00 as any</span>
<span class="token comment">// \u5728\u4E0D\u60F3\u7ED9\u67D0\u4E9BJavaScript\u6DFB\u52A0\u5177\u4F53\u7684\u6570\u636E\u7C7B\u578B\u65F6(\u539F\u751F\u7684JavaScript\u4EE3\u7801\u662F\u4E00\u6837)</span>
<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

message <span class="token operator">=</span> <span class="token number">123</span>
message <span class="token operator">=</span> <span class="token boolean">true</span>
message <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// message()</span>
<span class="token comment">// message.split(&quot; &quot;)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unknown\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#unknown\u7C7B\u578B" aria-hidden="true">#</a> unknown\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;abc&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span>
<span class="token punctuation">}</span>

<span class="token comment">// unknown\u7C7B\u578B\u53EA\u80FD\u8D4B\u503C\u7ED9any\u548Cunknown\u7C7B\u578B</span>
<span class="token comment">// any\u7C7B\u578B\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4EFB\u610F\u7C7B\u578B</span>

<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token comment">// \u6700\u597D\u4E0D\u8981\u4F7F\u7528any,\u9632\u6B62\u4E71\u7528</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> result
<span class="token keyword">let</span> num1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> result
<span class="token keyword">let</span> num2<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> result
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="void\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#void\u7C7B\u578B" aria-hidden="true">#</a> void\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum1</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sum2</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token function">sum1</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token comment">// sum1(&quot;abc&quot;, &quot;cba&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="never\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#never\u7C7B\u578B" aria-hidden="true">#</a> never\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// function foo(): never {</span>
<span class="token comment">//   // \u6B7B\u5FAA\u73AF</span>
<span class="token comment">//   while(true) {</span>

<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token comment">// function bar(): never {</span>
<span class="token comment">//   throw new Error()</span>
<span class="token comment">// }</span>

<span class="token comment">// \u63D0\u524D</span>
<span class="token comment">// \u5C01\u88C5\u4E00\u4E2A\u6838\u5FC3\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;string\u5904\u7406\u65B9\u5F0F\u5904\u7406message&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;number\u5904\u7406\u65B9\u5F0F\u5904\u7406message&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;boolean&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;boolean\u5904\u7406\u65B9\u5F0F\u5904\u7406message&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> check<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> message
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
<span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F20\u4E09</span>
<span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#tuple\u7C7B\u578B" aria-hidden="true">#</a> tuple\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// tuple\u5143\u7EC4: \u591A\u79CD\u5143\u7D20\u7684\u7EC4\u5408(\u6709\u70B9\u50CF\u96C6\u5408)</span>
<span class="token comment">// &quot;why&quot; 18 1.88</span>

<span class="token comment">// 1.\u6570\u7EC4\u7684\u5F0A\u7AEF</span>
<span class="token comment">// const info: any[] = [&quot;why&quot;, 18, 1.88]</span>
<span class="token comment">// const infoObj = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88</span>
<span class="token comment">// }</span>

<span class="token comment">// const name = info[0]</span>
<span class="token comment">// console.log(name.length)</span>


<span class="token comment">// 2.\u5143\u7EC4\u7684\u7279\u70B9</span>
<span class="token keyword">const</span> info<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// const age = info[1]</span>
<span class="token comment">// console.log(age.length)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple\u7C7B\u578B\u7684\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#tuple\u7C7B\u578B\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> tuple\u7C7B\u578B\u7684\u5E94\u7528\u573A\u666F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// hook: useState</span>
<span class="token comment">// const [counter, setCounter] = {counter: , setCounter:}</span>

<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentState <span class="token operator">=</span> state
  <span class="token keyword">const</span> <span class="token function-variable function">changeState</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    currentState <span class="token operator">=</span> newState
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>currentState<span class="token punctuation">,</span> changeState<span class="token punctuation">]</span>
  <span class="token keyword">return</span> tuple
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// tuple\u5E94\u7528\u573A\u666F\u4F18\u5316</span>
<span class="token comment">// hook: useState</span>
<span class="token comment">// const [counter, setCounter] = {counter: , setCounter:}</span>

<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentState <span class="token operator">=</span> state
  <span class="token keyword">const</span> <span class="token function-variable function">changeState</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    currentState <span class="token operator">=</span> newState
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>currentState<span class="token punctuation">,</span> changeState<span class="token punctuation">]</span>
  <span class="token keyword">return</span> tuple
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// \u7ED9\u53C2\u6570\u52A0\u4E0A\u7C7B\u578B\u6CE8\u89E3: num1: number, num2: number</span>
<span class="token comment">// \u7ED9\u8FD4\u56DE\u503C\u52A0\u4E0A\u7C7B\u578B\u6CE8\u91CA: (): number</span>
<span class="token comment">// \u5728\u5F00\u53D1\u4E2D,\u901A\u5E38\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E0D\u5199\u8FD4\u56DE\u503C\u7684\u7C7B\u578B(\u81EA\u52A8\u63A8\u5BFC)</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token comment">// sum(123, 321)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u533F\u540D\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u901A\u5E38\u60C5\u51B5\u4E0B, \u5728\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u65F6, \u90FD\u4F1A\u7ED9\u53C2\u6570\u52A0\u4E0A\u7C7B\u578B\u6CE8\u89E3\u7684</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cba&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nba&quot;</span><span class="token punctuation">]</span>
<span class="token comment">// item\u6839\u636E\u4E0A\u4E0B\u6587\u7684\u73AF\u5883\u63A8\u5BFC\u51FA\u6765\u7684, \u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4E0D\u6DFB\u52A0\u7684\u7C7B\u578B\u6CE8\u89E3</span>
<span class="token comment">// \u4E0A\u4E0B\u6587\u4E2D\u7684\u51FD\u6570: \u53EF\u4EE5\u4E0D\u6DFB\u52A0\u7C7B\u578B\u6CE8\u89E3</span>
names<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u5BF9\u8C61\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// Point: x/y -&gt; \u5BF9\u8C61\u7C7B\u578B</span>
<span class="token comment">// {x: number, y: number}</span>
<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u7C7B\u578B" aria-hidden="true">#</a> \u53EF\u9009\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// Point: x/y/z -&gt; \u5BF9\u8C61\u7C7B\u578B</span>
<span class="token comment">// {x: number, y: number, z?: number}</span>
<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>z<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u8054\u5408\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// number|string \u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">function</span> <span class="token function">printID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528\u8054\u5408\u7C7B\u578B\u7684\u503C\u65F6, \u9700\u8981\u7279\u522B\u7684\u5C0F\u5FC3</span>
  <span class="token comment">// narrow: \u7F29\u5C0F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TypeScript\u5E2E\u52A9\u786E\u5B9Aid\u4E00\u5B9A\u662Fstring\u7C7B\u578B</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">printID</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token function">printID</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
<span class="token function">printID</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u7C7B\u578B\u548C\u8054\u5408\u7C7B\u578B\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u7C7B\u578B\u548C\u8054\u5408\u7C7B\u578B\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u53EF\u9009\u7C7B\u578B\u548C\u8054\u5408\u7C7B\u578B\u7684\u5173\u7CFB</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8BA9\u4E00\u4E2A\u53C2\u6570\u672C\u8EAB\u662F\u53EF\u9009\u7684</span>
<span class="token comment">// \u4E00\u4E2A\u53C2\u6570\u4E00\u4E2A\u53EF\u9009\u7C7B\u578B\u7684\u65F6\u5019, \u5B83\u5176\u5B9E\u7C7B\u4F3C\u4E8E\u662F\u8FD9\u4E2A\u53C2\u6570\u662F \u7C7B\u578B|undefined \u7684\u8054\u5408\u7C7B\u578B</span>
<span class="token comment">// function foo(message?: string) {</span>
<span class="token comment">//   console.log(message)</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> \u7C7B\u578B\u522B\u540D</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// type\u7528\u4E8E\u5B9A\u4E49\u7C7B\u578B\u522B\u540D(type alias)</span>
<span class="token keyword">type</span> <span class="token class-name">IDType</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>
<span class="token keyword">type</span> <span class="token class-name">PointType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
  z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printId</span><span class="token punctuation">(</span>id<span class="token operator">:</span> IDType<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> PointType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &lt;img id=&quot;why&quot;/&gt;</span>

<span class="token comment">// 1.\u7C7B\u578B\u65AD\u8A00 as</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLImageElement
el<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;url\u5730\u5740&quot;</span>


<span class="token comment">// 2.\u53E6\u5916\u6848\u4F8B: Person\u662FStudent\u7684\u7236\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>p <span class="token keyword">as</span> Student<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>


<span class="token comment">// 3.\u4E86\u89E3: as any/unknown</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>
<span class="token comment">// const num: number = (message as unknown) as number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u975E\u7A7A\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u975E\u7A7A\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u975E\u7A7A\u7C7B\u578B\u65AD\u8A00</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// message? -&gt; undefined | string</span>
<span class="token keyword">function</span> <span class="token function">printMessageLength</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if (message) {</span>
  <span class="token comment">//   console.log(message.length)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// vue3\u6E90\u7801</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printMessageLength</span><span class="token punctuation">(</span><span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">)</span>
<span class="token function">printMessageLength</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u94FE\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u94FE\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u53EF\u9009\u94FE\u7684\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  friend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    girlFriend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  friend<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;kobe&quot;</span><span class="token punctuation">,</span>
    girlFriend<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;lily&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u53E6\u5916\u4E00\u4E2A\u6587\u4EF6\u4E2D</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// console.log(info.friend!.name)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>age<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>girlFriend<span class="token operator">?.</span>name<span class="token punctuation">)</span>
<span class="token comment">// if (info.friend) {</span>
<span class="token comment">//   console.log(info.friend.name)</span>

<span class="token comment">//   if (info.friend.age) {</span>
<span class="token comment">//     console.log(info.friend.age)</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><h3 id="\u8FD0\u7B97\u7B26-1" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26-1" aria-hidden="true">#</a> \uFF01\uFF01\u8FD0\u7B97\u7B26</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment">// const flag = Boolean(message)</span>
<span class="token comment">// console.log(flag)</span>

<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>message
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u7B97\u7B26-2" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26-2" aria-hidden="true">#</a> \uFF1F\uFF1F\u8FD0\u7B97\u7B26</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>
<span class="token comment">// \u7C7B\u4F3C\u4E09\u76EE\u8FD0\u7B97\u7B26</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> message <span class="token operator">??</span> <span class="token string">&quot;\u4F60\u597D\u554A, \u674E\u94F6\u6CB3&quot;</span>
<span class="token comment">// const content = message ? message: &quot;\u4F60\u597D\u554A, \u674E\u94F6\u6CB3&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u5B57\u9762\u91CF</h2><h3 id="\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// &quot;Hello World&quot;\u4E5F\u662F\u53EF\u4EE5\u4F5C\u4E3A\u7C7B\u578B\u7684, \u53EB\u505A\u5B57\u9762\u91CF\u7C7B\u578B</span>
<span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment">// let num: 123 = 123</span>
<span class="token comment">// num = 321</span>


<span class="token comment">// \u5B57\u9762\u91CF\u7C7B\u578B\u7684\u610F\u4E49, \u5C31\u662F\u5FC5\u987B\u7ED3\u5408\u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">Alignment</span> <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span>

<span class="token keyword">let</span> align<span class="token operator">:</span> Alignment <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span>
align <span class="token operator">=</span> <span class="token string">&#39;right&#39;</span>
align <span class="token operator">=</span> <span class="token string">&#39;center&#39;</span>

<span class="token comment">// align = &#39;hehehehe&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B57\u9762\u91CF\u63A8\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u63A8\u7406" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u63A8\u7406</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// const info = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18</span>
<span class="token comment">// }</span>

<span class="token comment">// info.name = &quot;kobe&quot;</span>

<span class="token comment">// </span>

<span class="token keyword">type</span> <span class="token class-name">Method</span> <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;POST&#39;</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> method<span class="token operator">:</span> Method<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Request</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> Method
<span class="token punctuation">}</span>

<span class="token comment">// const options1 :Request = {</span>
<span class="token comment">//   url: &quot;https://www.coderwhy.org/abc&quot;,</span>
<span class="token comment">//   method: &quot;POST&quot;</span>
<span class="token comment">// }</span>

<span class="token comment">// as const\u5B57\u9762\u91CF\u63A8\u7406</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&quot;https://www.coderwhy.org/abc&quot;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span>

<span class="token comment">// String\u7C7B\u578B\u65AD\u8A00\u4E3A\u5B57\u9762\u91CF\u7C7B\u578B</span>
<span class="token comment">// request(options.url, options.method as Method)</span>
<span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>url<span class="token punctuation">,</span> options<span class="token punctuation">.</span>method<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B\u7F29\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u7F29\u5C0F" aria-hidden="true">#</a> \u7C7B\u578B\u7F29\u5C0F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 1.typeof\u7684\u7C7B\u578B\u7F29\u5C0F</span>
<span class="token keyword">type</span> <span class="token class-name">IDType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">printID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> IDType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.\b\u5E73\u7B49\u7684\u7C7B\u578B\u7F29\u5C0F(=== == !== !=/switch)</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">&quot;left&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;top&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;bottom&quot;</span>
<span class="token keyword">function</span> <span class="token function">printDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.if\u5224\u65AD</span>
  <span class="token comment">// if (direction === &#39;left&#39;) {</span>
  <span class="token comment">//   console.log(direction)</span>
  <span class="token comment">// } else if ()</span>

  <span class="token comment">// 2.switch\u5224\u65AD</span>
  <span class="token comment">// switch (direction) {</span>
  <span class="token comment">//   case &#39;left&#39;:</span>
  <span class="token comment">//     console.log(direction)</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   case ...</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3.instanceof(\u5B9E\u4F8B\u5BF9\u8C61)</span>
<span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
  <span class="token function">teaching</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">work</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Student <span class="token operator">|</span> Teacher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">teaching</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">work</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>

<span class="token comment">// 4. in(\u5B57\u9762\u91CF)</span>
<span class="token keyword">type</span> <span class="token class-name">Fish</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">running</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">walk</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Fish <span class="token operator">|</span> Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;swimming&#39;</span> <span class="token keyword">in</span> animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fish<span class="token operator">:</span> Fish <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;swimming&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">walk</span><span class="token punctuation">(</span>fish<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","dataType.html.vue"]]);export{d as default};
