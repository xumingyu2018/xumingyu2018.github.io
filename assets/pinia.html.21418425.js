import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.36443286.js";const t={},i=e(`<blockquote><p>Pinia \u5F00\u59CB\u4E8E\u5927\u6982 2019 \u5E74\uFF0C\u6700\u521D\u662F\u4F5C\u4E3A\u4E00\u4E2A\u5B9E\u9A8C\u4E3A Vue \u91CD\u65B0\u8BBE\u8BA1\u72B6\u6001\u7BA1\u7406\uFF0C\u8BA9\u5B83\u7528\u8D77\u6765\u50CF\u7EC4\u5408\u5F0F API\uFF08Composition API\uFF09\uFF0C\u4ECE\u90A3\u65F6\u5230\u73B0\u5728\uFF0C\u6700\u521D\u7684\u8BBE\u8BA1\u539F\u5219\u4F9D\u7136\u662F\u76F8\u540C\u7684\uFF0C\u5E76\u4E14\u76EE\u524D\u540C\u65F6\u517C\u5BB9 Vue2\u3001Vue3\uFF0C\u4E5F\u5E76\u4E0D\u8981\u6C42\u4F60\u4F7F\u7528 Composition API\uFF0CPinia \u672C\u8D28\u4E0A\u4F9D\u7136\u662F\u4E00\u4E2A\u72B6\u6001\u7BA1\u7406\u7684\u5E93\uFF0C\u7528\u4E8E\u8DE8\u7EC4\u4EF6\u3001\u9875\u9762\u8FDB\u884C\u72B6\u6001\u5171\u4EAB\uFF08\u8FD9\u70B9\u548C Vuex\u3001Redux \u4E00\u6837\uFF09\u3002</p></blockquote><h2 id="pinia-\u548C-vuex-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#pinia-\u548C-vuex-\u7684\u533A\u522B" aria-hidden="true">#</a> Pinia \u548C vuex \u7684\u533A\u522B</h2><ul><li>Pinia \u4E2D mutations \u4E0D\u518D\u5B58\u5728\u3002</li><li>\u66F4\u53CB\u597D\u7684 TypeScript \u652F\u6301\uFF0CVuex \u4E4B\u524D\u5BF9 TS \u7684\u652F\u6301\u5F88\u4E0D\u53CB\u597D\u3002</li><li>\u4E0D\u518D\u6709 modules \u7684\u5D4C\u5957\u7ED3\u6784\u3002</li><li>\u4E0D\u518D\u6709\u547D\u540D\u7A7A\u95F4\u7684\u6982\u5FF5\uFF0C\u4E0D\u9700\u8981\u8BB0\u4F4F\u5B83\u4EEC\u7684\u590D\u6742\u5173\u7CFB\u3002</li></ul><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p><code>npm install pinia</code></p><p>\u521B\u5EFA\u4E00\u4E2A pinia \u5E76\u4E14\u5C06\u5176\u4F20\u9012\u7ED9\u5E94\u7528\u7A0B\u5E8F</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import { createPinia } from &#39;pinia&#39;

const pinia = createPinia()

export default pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="app-\u4F7F\u7528-pinia" tabindex="-1"><a class="header-anchor" href="#app-\u4F7F\u7528-pinia" aria-hidden="true">#</a> app \u4F7F\u7528 pinia</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import pinia from &#39;./store&#39;

createApp(App).use(pinia).mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9A\u4E49-store" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-store" aria-hidden="true">#</a> \u5B9A\u4E49 Store</h3><p>Store \u4E09\u4E2A\u6838\u5FC3\u6982\u5FF5\uFF1A<code>state</code>\u3001<code>getters</code>\u3001<code>actions</code>\uFF0C\u7B49\u540C\u4E8E\u7EC4\u4EF6\u7684<code>data</code>\u3001<code>computed</code>\u3001<code>methods</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import { defineStore } from &#39;pinia&#39;

// \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u51FD\u6570\u4E0D\u662Fstore\uFF0C\u4EE5useXXX\u547D\u540D
// defineStore\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u552F\u4E00\u540D\u79F0-&gt;id
const useCounter = defineStore(&quot;counter&quot;, {
  state: () =&gt; ({
    count=100
  }),
  getters: {
    ...
  },
  actions: {
    ...
  }
})

export default useCounter

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-store" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-store" aria-hidden="true">#</a> \u4F7F\u7528 Store</h3><ul><li>\u4F7F\u7528 pinia \u81EA\u5E26\u7684<code>storeToRefs()</code>\u5C06\u6570\u636E\u53D8\u6210\u54CD\u5E94\u5F0F</li></ul><p>\u6CE8\u610F\uFF1A<code>storeToRefs</code>\u51FD\u6570\u5E76\u4E0D\u63A5\u53D7\u5B58\u50A8\u5B9E\u4F8B\u7684\u5C5E\u6027\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5B83\u671F\u671B\u63A5\u6536\u7684\u662F\u6574\u4E2A\u5B58\u50A8\u5B9E\u4F8B\u5BF9\u8C61\uFF08\u5982\uFF1A<code>storeToRefs(counterStore.count)</code>\u4F1A\u6709\u95EE\u9898\uFF09</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>doubleCount: {{ counterStore.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>doubleCount: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> useCounter <span class="token keyword">from</span> <span class="token string">&#39;@/stores/counter&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// \u89E3\u6784counterStore\u4F1A\u5931\u53BB\u54CD\u5E94\u5F0F\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528toRefs\u6216storeToRefs\u8FDB\u884C\u8F6C\u5316</span>
  <span class="token keyword">const</span> counterStore <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// const { count } = toRefs(counterStore)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>counterStore<span class="token punctuation">)</span>
  <span class="token comment">// \u6CE8\u610F\uFF1A\u8FD9\u6837\u4F1A\u6709\u95EE\u9898!!!!!!!!!!!</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>counterStore<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><h3 id="\u4FEE\u6539-state" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-state" aria-hidden="true">#</a> \u4FEE\u6539 state</h3><p><strong>\u4F7F\u7528 store \u5B9E\u4F8B\u76F4\u63A5\u8BFB\u53D6\u548C\u5199\u5165</strong></p><p><code>counterStore.attrubute = &quot;xxx&quot;</code></p><p><strong>\u4E00\u6B21\u6027\u4FEE\u6539\u591A\u4E2A</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>counterStore.$patch({
  name: &quot;never&quot;,
  age: &quot;23&quot;,
  attrubute: &quot;xxx&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u7F6E-state" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E-state" aria-hidden="true">#</a> \u91CD\u7F6E state</h3><p><code>counterStore.$reset()</code></p><h3 id="\u66FF\u6362-state" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362-state" aria-hidden="true">#</a> \u66FF\u6362 state</h3><p><code>counterStore.$state = { ... }</code></p><h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h2><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>getters: {
  // 1.\u57FA\u672C\u4F7F\u7528
  doubleCount(state) {
    return state.count * 2
  },

  // 2.\u4E00\u4E2Agetter\u5F15\u5165\u53E6\u5916\u4E00\u4E2Agetter
  doubleCountAddOne() {
    // this\u662Fstore\u5B9E\u4F8B
    return this.doubleCount + 1
  },

  // 3.getters\u4E5F\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570
  getFriendById(state) {
    return function(id) {
      return state.friends.find(id)
    }
  },

  // 4.getters\u4E2D\u7528\u5230\u522B\u7684store\u4E2D\u7684\u6570\u636E
  showMessage(state) {
    // \u83B7\u53D6user\u4FE1\u606F
    const userStore = useUser()
    // \u62FC\u63A5\u4FE1\u606F
    return \`name:\${userStore.name}-count:\${state.count}\`
  }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h2><h3 id="\u540C\u6B65-action" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65-action" aria-hidden="true">#</a> \u540C\u6B65 action</h3><p>\u548C getters \u4E00\u6837\uFF0C\u5728 action \u4E2D\u53EF\u4EE5\u901A\u8FC7 this \u8BBF\u95EE\u6574\u4E2A store \u5B9E\u4F8B\u7684\u6240\u6709\u64CD\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">incrementNum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>counte <span class="token operator">+=</span> num
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const counterStore = useCounter()

function changeState() {
  counterStore.increment()
  counterStore.incrementNum(10)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F02\u6B65-action" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65-action" aria-hidden="true">#</a> \u5F02\u6B65 action</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> useHome <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">banners</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">recommends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">fetchHomeDataAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://123.207.32.32:8000/home/multidata&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>banners <span class="token operator">=</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list
      <span class="token keyword">this</span><span class="token punctuation">.</span>recommends <span class="token operator">=</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>recommend<span class="token punctuation">.</span>list

      <span class="token keyword">return</span> <span class="token string">&quot;aaa&quot;</span> <span class="token comment">// \u7B49\u4EF7\u4E8Ereturn Promise.resolve(aaa)\u9ED8\u8BA4\u8FD4\u56DEundefined</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// \u8C03\u7528
const counterStore = useCounter()

counterStore.fetchHomeDataAction().then(res =&gt; {
  console.log(&quot;fetchHomeMultidata\u7684action\u5DF2\u7ECF\u5B8C\u6210\u4E86:&quot;, res)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[i];function c(p,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","pinia.html.vue"]]);export{d as default};
