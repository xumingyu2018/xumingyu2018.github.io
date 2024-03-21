import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,e as i}from"./app.3009e38b.js";const a={},l=i(`<h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p><strong>\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F</strong>\uFF0C\u7B80\u5355\u7684\u8BB2\uFF0C\u5C06\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u7684\u53D8\u91CF\u5168\u90E8\u5B58\u50A8\u5728\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u3002</p><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_O9G6Fh75bE.png" alt="vuex\u539F\u7406\u56FE\u89E3"></p><h3 id="\u7B80\u6613\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u5B9E\u73B0" aria-hidden="true">#</a> \u7B80\u6613\u5B9E\u73B0</h3><p>\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u7EE7\u627FVue\u7684\u6E90\u578B\u3002\uFF08\u5982<code>Vue.prototype.shareObj = shareObj</code>\u5373\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u53EF\u8BBF\u95EE\u8BE5\u53D8\u91CF\uFF09\u8FD9\u6837\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u72B6\u6001\u7BA1\u7406\u529F\u80FD\uFF0C\u4F46\u662F\u7F3A\u4E4F\u54CD\u5E94\u5F0F\u3002</p><h3 id="\u9700\u8981\u7BA1\u7406\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u7BA1\u7406\u7684\u72B6\u6001" aria-hidden="true">#</a> \u9700\u8981\u7BA1\u7406\u7684\u72B6\u6001</h3><p>\u591A\u4E2A\u754C\u9762\u5171\u4EAB\u7684\u72B6\u6001\uFF0C\u5982</p><ul><li>\u7528\u6237\u767B\u5F55\u72B6\u6001\u3001\u540D\u79F0\u3001\u5934\u50CF\u3001\u5730\u7406\u4F4D\u7F6E\u7B49\u3002</li><li>\u5546\u54C1\u6536\u85CF\u3001\u8D2D\u7269\u8F66</li></ul><h2 id="\u57FA\u672C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6B65\u9AA4" aria-hidden="true">#</a> \u57FA\u672C\u6B65\u9AA4</h2><ul><li>\u5B89\u88C5\u63D2\u4EF6</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>Vue.use(Vuex)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u5BF9\u8C61</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

// \u5BFC\u51FAstore\u72EC\u4EAB
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6302\u8F7DVue\u5B9E\u4F8B</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// main.js
import store from &#39;./store&#39;

new Vue({
  el: &#39;#app&#39;,
  store,
  render: h =&gt; h(App)
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><p>\u8BA1\u6570\u5668\u6848\u4F8B</p><ol><li><p>\u521B\u5EFAstore\u6587\u4EF6\u4E0B\u7684index.js</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import Vuex from &#39;vuex&#39;
import Vue from &#39;vue&#39;

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528Vuex\u7684count</p><ul><li>\u83B7\u53D6\uFF1A<code>$store.state.count</code></li><li>\u4FEE\u6539\uFF1A<code>this.$store.commit(&#39;mutation\u4E2D\u7684\u65B9\u6CD5&#39;)</code>\u901A\u8FC7\u63D0\u4EA4mutation\u7684\u65B9\u5F0F\uFF0C\u800C\u975E\u76F4\u63A5\u6539\u53D8\uFF0C\u56E0\u4E3AVuex\u53EF\u4EE5\u66F4\u660E\u786E\u7684\u8FFD\u8E2A\u72B6\u6001\u7684\u53D8\u5316</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ $store.state.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtraction<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">addition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">subtraction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;decrement&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u6838\u5FC3\u6982\u5FF5</h2><h3 id="state\u5355\u4E00\u72B6\u6001\u6811" tabindex="-1"><a class="header-anchor" href="#state\u5355\u4E00\u72B6\u6001\u6811" aria-hidden="true">#</a> State\u5355\u4E00\u72B6\u6001\u6811</h3><ul><li>\u5982\u679C\u4F60\u7684\u72B6\u6001\u4FE1\u606F\u662F\u4FDD\u5B58\u5230\u591A\u4E2AStore\u5BF9\u8C61\u4E2D\u7684\uFF0C\u90A3\u4E48\u4E4B\u540E\u7684\u7BA1\u7406\u548C\u7EF4\u62A4\u7B49\u7B49\u90FD\u4F1A\u53D8\u5F97\u7279\u522B\u56F0\u96BE\u3002</li><li>\u6240\u4EE5Vuex\u4E5F\u4F7F\u7528\u4E86\u5355\u4E00\u72B6\u6001\u6811\u6765\u7BA1\u7406\u5E94\u7528\u5C42\u7EA7\u7684\u5168\u90E8\u72B6\u6001\u3002</li><li>\u5355\u4E00\u72B6\u6001\u6811\u80FD\u591F\u8BA9\u6211\u4EEC\u6700\u76F4\u63A5\u7684\u65B9\u5F0F\u627E\u5230\u67D0\u4E2A\u72B6\u6001\u7684\u7247\u6BB5\uFF0C\u800C\u4E14\u5728\u4E4B\u540E\u7684\u7EF4\u62A4\u548C\u8C03\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u7684\u7BA1\u7406\u548C\u7EF4\u62A4\u3002</li></ul><h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h3><p>\u7C7B\u4F3C\u4E8EComputed\u8BA1\u7B97\u5C5E\u6027\u7528\u6CD5\uFF0C\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u8C03\u7528\u7ECF\u8FC7\u53D8\u5316\u7684\u6570\u636E\u65F6\u4F7F\u7528\u3002</p><ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1Astate</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A\u8C03\u7528getter\u672C\u8EAB</li><li>\u901A\u8FC7\u8FD4\u56DE\u51FD\u6570\u6765\u5B9E\u73B0getter\u4F20\u53C2</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const store = new Vuex.Store({
  state: {
    students: [
      {id: 110, name: &#39;why&#39;, age: 18},
      {id: 111, name: &#39;kobe&#39;, age: 24},
      {id: 112, name: &#39;james&#39;, age: 30},
      {id: 113, name: &#39;curry&#39;, age: 10}
    ]
  },
  Getters: {
    // \u63A5\u6536state\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570
    more20age(state) {
      return state.students.filter(s =&gt; s.age &gt; 20)
    }
    // Getter \u4E5F\u53EF\u4EE5\u63A5\u53D7\u5176\u4ED6 getter \u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570
    more20agecount(state, getters) {
      return getters.more20age.length
      // return state.students.filter(s =&gt; s.age &gt; 20).length
    }
    // \u901A\u8FC7\u8BA9 getter \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u6765\u5B9E\u73B0\u7ED9 getter \u4F20\u53C2\uFF08\u4F7F\u7528\uFF1Amoreage(20)\uFF09
    moreage(state) {
      return function(age) {
        return state.students.filter(s =&gt; s.age &gt; age)
      }
      // return age =&gt; {
      //   return state.students.filter(s =&gt; s.age &gt; age)
      // }
    }
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation </h2><h3 id="mutation\u72B6\u6001\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#mutation\u72B6\u6001\u66F4\u65B0" aria-hidden="true">#</a> Mutation\u72B6\u6001\u66F4\u65B0</h3><p>mutation\u7684\u5B9A\u4E49\u65B9\u5F0F</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// store/index.js
mutations: {
  increment(state) {
    ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7mutation\u66F4\u65B0</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// App.vue
addition() {
  this.$store.commit(&quot;increment&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutation\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#mutation\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> Mutation\u4F20\u9012\u53C2\u6570</h3><p>\u4F20\u9012\u7684\u989D\u5916\u53C2\u6570\u4E5F\u79F0\u4E3Amutation\u7684\u8F7D\u8377\uFF08<code>payload</code>\uFF09</p><ul><li>\u4F20\u9012\u666E\u901A\u53C2\u6570</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// store/index.js
mutation: {
  increment(state, count) {
    state.count += count
  }
}

// App.vue
addition() {
  this.$store.commit(&#39;increment&#39;, 5)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F20\u9012\u5BF9\u8C61\u53C2\u6570</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// store/index.js
mutation: {
  addStudent(state, stu) {
    state.students.push(stu)
  }
}

// App.vue
addStudent() {
  const stu = { id: 1, name: Never, age: 24 }
  this.$store.commit(&#39;addStudent&#39;, stu)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutation\u63D0\u4EA4\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#mutation\u63D0\u4EA4\u98CE\u683C" aria-hidden="true">#</a> Mutation\u63D0\u4EA4\u98CE\u683C</h3><ul><li><p>\u666E\u901A\u65B9\u5F0F\uFF1A<code>this.$store.commit(&#39;incrementCount&#39;, count)</code></p></li><li><p>\u5BF9\u8C61\u98CE\u683C\u65B9\u5F0F\uFF1A\u5C06\u6574\u4E2A\u63D0\u4EA4\u7684\u5BF9\u8C61\u4F5C\u4E3Apayload\u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// App.vue
this.$store.commit({
  type: &#39;incrementCount&#39;,
  count
})

// store/index.js
// \u6B64\u65F6payload\uFF1A{ type: &#39;incrementCount&#39;, count: count}
mutation: {
  incrementCount(state, payload) {
    state.count += payload.count
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h2><ul><li>\u7528\u6765\u4EE3\u66FFMutation\u8FDB\u884C\u5F02\u6B65\u64CD\u4F5C\u7684\uFF0C\u540C\u6837\u4E5F\u652F\u6301payload\u3002</li></ul><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><ul><li>\u901A\u8FC7dispatch\u5206\u53D1\u5230Action\uFF0C\u518D\u901A\u8FC7context\u8FDB\u884Ccommit\u63D0\u4EA4\u5230mutation\u3002</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// App.vue
methods: {
  increment() {
    // \u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u53C2\u6570\u7684payload 
    this.$store.dispatch(&#39;increment&#39;, {count: 5})
  }
}

// store/index.js
mutation: {
  increment(state, payload) {
    state.count += payload.count
  }
},
actions: {
  // \u8FD9\u91CC\u7684\u53C2\u6570\u662Fcontext\u4E0A\u4E0B\u6587
  increment(context, payload) {
    setTimeout(() =&gt; {
      context.commit(&#39;increment&#39;, payload)
    }, 5000)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u5C06\u5F02\u6B65\u64CD\u4F5C\u653E\u5728Promise\u4E2D</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// store/index.js
actions: {
  increment(context) {
    return new Promise((resolve) =&gt; {
      setTimeout(() =&gt; {
        context.commit(&#39;increment&#39;)
        resolve()
      })
    })
  }
}

// App.vue
methods: {
  increment() {
    this.$store.dispatch(&#39;increment&#39;).then(res =&gt; {
      console.log(&quot;\u8FD4\u56DE\u4E00\u4E2AActions\u6210\u529F\u7684\u56DE\u8C03\uFF01&quot;)
    })
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module </h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const moduleA = {
  state: () =&gt; ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () =&gt; ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

$store.state.a.xxx // -&gt; moduleA \u7684\u72B6\u6001
$store.state.b.xxx // -&gt; moduleB \u7684\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u6A21\u5757\u5185\u90E8\u7684 getter\uFF0C\u5C31\u4F1A\u6709\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3A\u6839\u8282\u70B9\u72B6\u6001<code>rootState</code>\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const moduleA = {
  // ...
  getters: {
    fullname(state) {
      return state.name + &#39;aaa&#39;
    },
    fullname2(state, getters) {
      return getters.fullname + &#39;bbb&#39;
    },
    fullname3(state, getters, rootState) {
      // rootState.name\u4E3A\u6839\u8282\u70B9\u4E2Dstate\u4E2D\u7684name
      return getters.fullname2 + rootState.name
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u7EC4\u7EC7\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7EC4\u7EC7\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7EC4\u7EC7\u7ED3\u6784</h2><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_1JtpvQ4cQ0.png" alt="\u9879\u76EE\u7EC4\u7EC7\u7ED3\u6784"></p>`,52),t=[l];function d(u,c){return e(),s("div",null,t)}const o=n(a,[["render",d],["__file","vuex.html.vue"]]);export{o as default};
