import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.ab450ba1.js";const t={},p=e(`<h2 id="\u58F0\u660E\u5BF9\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u58F0\u660E\u5BF9\u8C61\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u901A\u8FC7\u7C7B\u578B(type)\u522B\u540D\u6765\u58F0\u660E\u5BF9\u8C61\u7C7B\u578B</span>
<span class="token comment">// type InfoType = {name: string, age: number}</span>

<span class="token comment">// \u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\u58F0\u660E\u5BF9\u8C61\u7C7B\u578B: \u63A5\u53E3interface</span>
<span class="token comment">// \u5728\u5176\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u53EF\u9009\u7C7B\u578B</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u5B9A\u4E49\u53EA\u8BFB\u5C5E\u6027</span>
<span class="token keyword">interface</span> <span class="token class-name">IInfoType</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  friend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info<span class="token operator">:</span> IInfoType <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  friend<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;kobe&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// info.name = &quot;123&quot;</span>
info<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7D22\u5F15\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u7C7B\u578B" aria-hidden="true">#</a> \u7D22\u5F15\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u901A\u8FC7interface\u6765\u5B9A\u4E49\u7D22\u5F15\u7C7B\u578B</span>
<span class="token keyword">interface</span> <span class="token class-name">IndexLanguage</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> frontLanguage<span class="token operator">:</span> IndexLanguage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">ILanguageYear</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> languageYear<span class="token operator">:</span> ILanguageYear <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;C&quot;</span><span class="token operator">:</span> <span class="token number">1972</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;Java&quot;</span><span class="token operator">:</span> <span class="token number">1995</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;JavaScript&quot;</span><span class="token operator">:</span> <span class="token number">1996</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;TypeScript&quot;</span><span class="token operator">:</span> <span class="token number">2014</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u51FD\u6570\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// type CalcFn = (n1: number, n2: number) =&gt; number</span>
<span class="token comment">// \u53EF\u8C03\u7528\u7684\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">CalcFn</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> calcFn<span class="token operator">:</span> CalcFn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">calcFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">CalcFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3\u7684\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7684\u7EE7\u627F" aria-hidden="true">#</a> \u63A5\u53E3\u7684\u7EE7\u627F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFly</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">flying</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">IAction</span> <span class="token keyword">extends</span> <span class="token class-name">ISwim</span><span class="token punctuation">,</span> IFly <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> action<span class="token operator">:</span> IAction <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u4EA4\u53C9\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4E00\u79CD\u7EC4\u5408\u7C7B\u578B\u7684\u65B9\u5F0F: \u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">WhyType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">&quot;left&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;center&quot;</span>


<span class="token comment">// \u53E6\u4E00\u79CD\u7EC4\u4EF6\u7C7B\u578B\u7684\u65B9\u5F0F: \u4EA4\u53C9\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">WType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">&amp;</span> <span class="token builtin">string</span>

<span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFly</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">flying</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">MyType1</span> <span class="token operator">=</span> ISwim <span class="token operator">|</span> IFly
<span class="token keyword">type</span> <span class="token class-name">MyType2</span> <span class="token operator">=</span> ISwim <span class="token operator">&amp;</span> IFly

<span class="token keyword">const</span> obj1<span class="token operator">:</span> MyType1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2<span class="token operator">:</span> MyType2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u63A5\u53E3\u7684\u5B9E\u73B0</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IEat</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">eating</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u5B9E\u73B0\u63A5\u53E3</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token comment">// \u7EE7\u627F: \u53EA\u80FD\u5B9E\u73B0\u5355\u7EE7\u627F</span>
<span class="token comment">// \u5B9E\u73B0: \u5B9E\u73B0\u63A5\u53E3, \u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3</span>
<span class="token keyword">class</span> <span class="token class-name">Fish</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">ISwim</span><span class="token punctuation">,</span> IEat <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fish Swmming&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fish Eating&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Person Swimming&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u7F16\u5199\u4E00\u4E9B\u516C\u5171\u7684API: \u9762\u5411\u63A5\u53E3\u7F16\u7A0B</span>
<span class="token keyword">function</span> <span class="token function">swimAction</span><span class="token punctuation">(</span>swimable<span class="token operator">:</span> ISwim<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  swimable<span class="token punctuation">.</span><span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.\u6240\u6709\u5B9E\u73B0\u4E86\u63A5\u53E3\u7684\u7C7B\u5BF9\u5E94\u7684\u5BF9\u8C61, \u90FD\u662F\u53EF\u4EE5\u4F20\u5165</span>
<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface\u548Ctype\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#interface\u548Ctype\u7684\u533A\u522B" aria-hidden="true">#</a> interface\u548Ctype\u7684\u533A\u522B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u7528\u4E8E\u6269\u5C55</span>
<span class="token comment">// interface IFoo {</span>
<span class="token comment">//   name: string</span>
<span class="token comment">// }</span>

<span class="token comment">// interface IFoo {</span>
<span class="token comment">//   age: number</span>
<span class="token comment">// }</span>

<span class="token comment">// const foo: IFoo = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18</span>
<span class="token comment">// }</span>

<span class="token comment">// document.getElementById(&quot;app&quot;) as HTMLDivElement</span>
<span class="token comment">// window.addEventListener</span>

<span class="token comment">// interface Window {</span>
<span class="token comment">//   age: number</span>
<span class="token comment">// }</span>
<span class="token comment">// window.age = 19</span>
<span class="token comment">// console.log(window.age)</span>


<span class="token comment">// type IBar = {</span>
<span class="token comment">//   name: string</span>
<span class="token comment">//   age: number</span>
<span class="token comment">// }</span>

<span class="token comment">// type IBar = {</span>
<span class="token comment">// }</span>

<span class="token comment">// \u5EFA\u8BAE\u4F7F\u7528interface</span>
<span class="token class-name"><span class="token keyword">interface</span></span> IPerson <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u9762\u91CF\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u8D4B\u503C" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u8D4B\u503C</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// const p: IPerson ={</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88,</span>
<span class="token comment">//   // \u8FD9\u6837\u4F1A\u62A5\u9519</span>
<span class="token comment">//   address: &quot;\u5E7F\u5DDE\u5E02&quot;</span>
<span class="token comment">// }</span>

<span class="token comment">// const info = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88,</span>
<span class="token comment">//   address: &quot;\u5E7F\u5DDE\u5E02&quot;</span>
<span class="token comment">// }</span>

<span class="token comment">// // freshness\u64E6\u9664</span>
<span class="token comment">// const p: IPerson = info</span>

<span class="token comment">// console.log(info)</span>
<span class="token comment">// console.log(p)</span>


<span class="token keyword">function</span> <span class="token function">printInfo</span><span class="token punctuation">(</span>person<span class="token operator">:</span> IPerson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EE3\u7801\u4F1A\u62A5\u9519</span>
<span class="token comment">// printInfo({</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88,</span>
<span class="token comment">//   address: &quot;\u5E7F\u5DDE\u5E02&quot;</span>
<span class="token comment">// })</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">1.88</span><span class="token punctuation">,</span>
  address<span class="token operator">:</span> <span class="token string">&quot;\u5E7F\u5DDE\u5E02&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">printInfo</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u679A\u4E3E\u7C7B\u578B\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B\u578B\u7684\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// type Direction = &quot;left&quot; | &quot;Right&quot; | &quot;Top&quot; | &quot;Bottom&quot;</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">LEFT</span><span class="token punctuation">,</span>
  <span class="token constant">RIGHT</span><span class="token punctuation">,</span>
  <span class="token constant">TOP</span><span class="token punctuation">,</span>
  <span class="token constant">BOTTOM</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">turnDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u5DE6&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u53F3&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u4E0A&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u4E0B&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token comment">// \u7A77\u4E3E\u6240\u6709\u7C7B\u578B\u5B8C\u540E\u624D\u4F1A</span>
      <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> direction<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u679A\u4E3E\u7C7B\u578B\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B\u7684\u503C" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B\u578B\u7684\u503C</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// type Direction = &quot;left&quot; | &quot;Right&quot; | &quot;Top&quot; | &quot;Bottom&quot;</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">LEFT</span> <span class="token operator">=</span> <span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">RIGHT</span> <span class="token operator">=</span> <span class="token string">&quot;RIGHT&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">TOP</span> <span class="token operator">=</span> <span class="token string">&quot;TOP&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">BOTTOM</span> <span class="token operator">=</span> <span class="token string">&quot;BOTTOM&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span>

<span class="token keyword">function</span> <span class="token function">turnDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u5DE6&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u53F3&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u4E0A&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6539\u53D8\u89D2\u8272\u7684\u65B9\u5411\u5411\u4E0B&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> direction<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","interface.html.vue"]]);export{d as default};
