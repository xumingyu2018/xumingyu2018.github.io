import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,e as d}from"./app.dd29e14b.js";const l={},s=d(`<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="vue3-\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#vue3-\u6A21\u677F" aria-hidden="true">#</a> Vue3 \u6A21\u677F</h3><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;script&gt;
export default {
  props: {
    ...
  },
  emits: [],
  components: {
    ...
  }
  setup() {
    const variate1 = reactive({ ... })
    const variate2 = ref(...)
    const variate3 = readonly(...)
    const variate4 = computed({ set:()=&gt;{...} , get:()=&gt;{...}})
    watch(() =&gt; { ... })
    onMounted(() =&gt; { ... })

    return {
      variate1,
      variate2,
      variate3,
      variate4
    }
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BED\u6CD5\u7CD6\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u7CD6\u5199\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5\u7CD6\u5199\u6CD5</h4><p>\u9876\u5C42\u4EE3\u7801\u9ED8\u8BA4\u66B4\u9732\u7ED9\u6A21\u677F</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;component1 :xxxProps=&quot;yyyProps&quot;&gt;&lt;/component1&gt;
  &lt;component1 name=&quot;never&quot; :age=&quot;22&quot;&gt;&lt;/component1&gt;// \u76F8\u540C\u7EC4\u4EF6\u4E4B\u95F4\u90FD\u662F\u72EC\u7ACB\u7684\uFF0C\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD
&lt;/template&gt;

&lt;script setup&gt;
    // \u4E0D\u518D\u9700\u8981\u4F7F\u7528component: { ... }
    import component1 from &#39;xxx&#39;

    const props =defineProps({ yyyProps: { type: .., default: .. } }) // \u7236\u4F20\u5B50\u53C2\u6570\u63A5\u6536\u5199\u6CD5(\u5B50\u7EC4\u4EF6\u8C03\u7528\u540E\u53EF\u76F4\u63A5\u4F7F\u7528)
    const emits = defineEmits([&quot;xxx&quot;]) // \u5B50\u4F20\u7236
    defineExpose({ ... }) // \u66B4\u9732property\uFF0C\u4E00\u822C\u548Cref\u4E00\u8D77\u4F7F\u7528

    const variate1 = reactive({ ... })
    const variate2 = ref(...)
    const variate3 = readonly(...)
    const variate4 = computed({ set:()=&gt;{...} , get:()=&gt;{...}})
    watch(() =&gt; { ... })
    onMounted(() =&gt; { ... })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#setup-\u51FD\u6570" aria-hidden="true">#</a> setup \u51FD\u6570</h3><ul><li>setup \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u5728\u6A21\u677F template \u4E2D\u88AB\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u5728\u6A21\u677F\u4E2D\u8FFD\u52A0<code>.value</code>\uFF0C\u4F7F\u7528<code>return</code>\u66FF\u4EE3 options API \u4E2D\u7684<code>data()</code></li><li>setup \u91CC\u9762\u4E0D\u80FD\u4F7F\u7528 this\uFF08\u539F\u56E0\uFF1At<strong>his \u5E76\u6CA1\u6709\u6307\u5411\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5728 setup \u88AB\u8C03\u7528\u4E4B\u524D\uFF0Cdata\u3001computed\u3001methods \u7B49\u90FD\u6CA1\u6709\u88AB\u89E3\u6790</strong>\uFF09\u53EF\u7528 context \u4EE3\u66FF\uFF08<code>context</code>\u5305\u542B<code>attrs</code>\u3001<code>slots</code>\u3001<code>emit</code>)\u3002<code>setup(props, context){}</code></li><li>setup \u51FD\u6570\u662F\u5904\u4E8E Vue2 \u751F\u547D\u5468\u671F<code>beforeCreated</code>\u548C<code>created</code>\u4FE9\u4E2A\u94A9\u5B50\u51FD\u6570\u4E4B\u524D\uFF0C\u76F8\u5F53\u4E8E<code>setup</code>\u66FF\u4EE3\u4E86<code>beforeCreated</code>\u548C<code>created</code></li><li>setup \u51FD\u6570\u53EA\u80FD\u662F\u540C\u6B65\u7684\u4E0D\u80FD\u662F\u5F02\u6B65\u7684</li></ul><h4 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> <code>reactive({})</code></h4><p>\u4F7F\u6570\u636E\u53D8\u6210\u54CD\u5E94\u5F0F\uFF0C\u53EA\u80FD\u7528\u4E8E\u5B9A\u4E49\u590D\u6742\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5982\u5BF9\u8C61\u3001\u6570\u7EC4\uFF0C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<code>Proxy</code>\u5BF9\u8C61\u3002</p><p>\u539F\u56E0\uFF1A</p><ul><li>\u5F53\u6211\u4EEC\u4F7F\u7528 reactive \u51FD\u6570\u5904\u7406\u6211\u4EEC\u7684\u6570\u636E\u4E4B\u540E\uFF0C\u6570\u636E\u518D\u6B21\u88AB\u4F7F\u7528\u65F6\u5C31\u4F1A\u88AB<strong>\u52AB\u6301</strong>\u8FDB\u884C<strong>\u4F9D\u8D56\u6536\u96C6</strong>\uFF0C\u7C7B\u4F3C\u4E8E<code>data(){ return {} }</code></li><li>\u5F53\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u6536\u96C6\u5230\u7684\u4F9D\u8D56\u90FD\u662F\u8FDB\u884C\u5BF9\u5E94\u7684\u54CD\u5E94\u5F0F\u64CD\u4F5C\u3002</li><li><code>data()</code>\u4E5F\u662F\u5728\u5185\u90E8\u4EA4\u7ED9\u4E86 reactive \u51FD\u6570\u5C06\u5176\u7F16\u7A0B\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u3002</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>import { reactive } from &#39;vue&#39;

setup(){
  const account = reactive({
    username: &quot;nevermore&quot;,
    password: &quot;123456&quot;
  })
  return { account }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u573A\u666F\uFF1A - reactive \u5E94\u7528\u4E8E\u672C\u5730\u7684\u6570\u636E - \u591A\u4E2A\u6570\u636E\u4E4B\u95F4\u662F\u6709\u5173\u7CFB/\u8054\u7CFB(\u805A\u5408\u7684\u6570\u636E, \u7EC4\u7EC7\u5728\u4E00\u8D77\u4F1A\u6709\u7279\u5B9A\u7684\u4F5C\u7528)\uFF0C\u5982 account \u4FE1\u606F</p><h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> <code>ref()</code></h4><p>\u4F7F\u6570\u636E\u53D8\u6210\u54CD\u5E94\u5F0F\uFF0C\u53EF\u7528\u4E8E\u5B9A\u4E49\u57FA\u672C/\u590D\u6742\u6570\u636E\u7C7B\u578B\u3002\u5B83\u7684\u503C\u7531<code>ref().value</code>\u83B7\u53D6\uFF08\u4F7F\u7528\u66F4\u591A\uFF09</p><p>\u6CE8\u610F\uFF1A</p><ul><li>\u6A21\u677F\u4E2D\u5F15\u5165 ref \u7684\u503C\u65F6\uFF0CVue \u4F1A\u81EA\u52A8\u5E2E\u52A9\u6211\u4EEC\u8FDB\u884C\u89E3\u5305\uFF08<strong>\u6D45\u5C42\u89E3\u5305</strong>\uFF09\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5E76\u4E0D\u9700\u8981\u5728\u6A21\u677F\u4E2D\u901A\u8FC7 <code>ref.value</code> \u7684\u65B9\u5F0F\u6765\u4F7F\u7528\u3002</li><li>\u5728 setup \u51FD\u6570\u5185\u90E8\uFF0C\u5B83\u4F9D\u7136\u662F\u4E00\u4E2A ref \u5F15\u7528\uFF0C \u6240\u4EE5\u5BF9\u5176\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u6211\u4EEC\u4F9D\u7136\u9700\u8981\u4F7F\u7528 <code>ref.value</code>\u7684\u65B9\u5F0F\u3002</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// userCounter.js
import { ref } from &#39;vue&#39;

export default function useCounter() {
  let counter = ref(100)
  const increment = () =&gt; {
    // \u5728setup() \u4E2D\u9700\u8981\u5199\u6210ref().value\u5F62\u5F0F
    counter.value++
    console.log(counter.value)
  }
  const decrement = () =&gt; {
    counter.value--
  }
  // ref\u662F\u6D45\u5C42\u89E3\u5305
  const info = {
    counter
  }

  return { counter, increment, decrement, info }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// App.vue
&lt;template&gt;
  &lt;div class=&quot;app&quot;&gt;
    // template\u4E2Dref\u5BF9\u8C61\u81EA\u52A8\u89E3\u5305\uFF0C\u4E0D\u9700\u8981\u5199\u6210counter.value\u5F62\u5F0F
    &lt;h2&gt;\u5F53\u524D\u8BA1\u6570: {{ counter }}&lt;/h2&gt;
    &lt;button @click=&quot;increment&quot;&gt;+1&lt;/button&gt;
    &lt;button @click=&quot;decrement&quot;&gt;-1&lt;/button&gt;

    // ref\u6D45\u5C42\u89E3\u5305
    // \u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u9700\u8981\u5199.value
    &lt;h2&gt;\u5F53\u524D\u8BA1\u6570: {{ info.counter }}&lt;/h2&gt;
    // \u4FEE\u6539\u7684\u65F6\u5019\u9700\u8981\u5199.value
    &lt;button @click=&quot;info.counter.value++&quot;&gt;+1&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from &#39;vue&#39;
import useCounter from &#39;./hooks/useCounter&#39;

export default {
  setup() {
    // 1.\u5B9A\u4E49counter\u7684\u5185\u5BB9
    // \u9ED8\u8BA4\u5B9A\u4E49\u7684\u6570\u636E\u90FD\u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E
    // let counter = ref(100)
    // const increment = () =&gt; {
    //   counter.value++
    //   console.log(counter.value)
    // }
    // const decrement = () =&gt; {
    //   counter.value--
    // }
    // const { counter, increment, decrement } = useCounter()
    return {
      ...useCounter()
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u573A\u666F\uFF1A</p><ul><li>\u5B9A\u4E49\u672C\u5730\u7684\u4E00\u4E9B<strong>\u7B80\u5355</strong>\u6570\u636E</li><li>\u5B9A\u4E49\u4ECE<strong>\u7F51\u7EDC\u4E2D</strong>\u83B7\u53D6\u7684\u6570\u636E</li><li>\u5B9A\u4E49\u6A21\u677F ref\uFF0C\u83B7\u53D6 dom \u5143\u7D20\u8282\u70B9</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// \u5B9A\u4E49\u4ECE\u7F51\u7EDC\u4E2D\u83B7\u53D6\u7684\u6570\u636E
const musics = ref([])
onMounted(() =&gt; {
  // \u4ECEaxios\u83B7\u53D6\u6570\u636E
  const serverMusics = [&quot;music1&quot;, &quot;music2&quot;, &quot;music3&quot;]
  musics.value = serverMusics
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// \u5B9A\u4E49\u6A21\u677Fref\uFF0C\u83B7\u53D6dom\u5143\u7D20\u8282\u70B9
&lt;template&gt;
    &lt;h2 ref=&quot;titleRef&quot;&gt;\u6211\u662F\u6807\u9898&lt;/h2&gt;
    &lt;MyCompont ref=&quot;MyCompontRef&quot;&gt;\u6211\u662F\u7EC4\u4EF6&lt;/MyCompont&gt;
&lt;/template&gt;

import { ref, onMounted } from &#39;vue&#39;
setup() {
  const titleRef = ref()
  onMounted(() =&gt; {
    console.log(titleRef .value)
    // \u53EF\u4EE5\u5BF9\u7EC4\u4EF6\u7684\u65B9\u6CD5\u8FDB\u884C\u8BBF\u95EE
    MyCompontRef.value.method()
  })

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ref \u5176\u4ED6 API:</p><ul><li><code>unref</code>\uFF1A\u83B7\u53D6\u4E00\u4E2A<code>ref</code>\u5F15\u7528\u4E2D\u7684<code>value</code>\uFF0C<code>val = isRef(val) ? val.value : val</code>\u7684\u8BED\u6CD5\u7CD6\u3002</li><li><code>isRef</code>\uFF1A\u5224\u65AD\u503C\u662F\u5426\u662F\u4E00\u4E2A ref \u5BF9\u8C61\u3002</li><li><code>shallowRef</code>\uFF1A\u521B\u5EFA\u4E00\u4E2A\u6D45\u5C42\u7684 ref \u5BF9\u8C61\u3002</li><li><code>triggerRef</code>\uFF1A\u624B\u52A8\u89E6\u53D1\u548C shallowRef \u76F8\u5173\u8054\u7684\u526F\u4F5C\u7528\u3002</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>const info = shallowRef({ name: &#39;nevermore&#39;})
const changeInfo = () =&gt; {
  // \u4E0B\u9762\u7684\u4FEE\u6539\u4E0D\u662F\u54CD\u5E94\u5F0F
  info.value.name = &quot;never&quot;
  // \u4F7F\u7528triggerRef\u624B\u52A8\u89E6\u53D1\u54CD\u5E94\u5F0F
  triggerRef(info)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> <code>readonly</code></h4><blockquote><p>reactive \u6216\u8005 ref \u53EF\u4EE5\u83B7\u53D6\u5230\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\uFF0C\u4F46\u662F\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F20\u5165\u7ED9\u5176\u4ED6\u7EC4\u4EF6\u7684\u8FD9\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5E0C\u671B\u5728\u53E6\u5916\u4E00\u4E2A\u7EC4\u4EF6\u88AB\u4F7F\u7528\uFF0C\u4F46\u662F\u4E0D\u80FD\u88AB\u4FEE\u6539\uFF0C\u8FD9\u4E2A\u65F6\u5019 Vue3 \u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86 readonly \u7684\u65B9\u6CD5\u3002readonly \u4F1A\u8FD4\u56DE\u539F\u59CB\u5BF9\u8C61\u7684\u53EA\u8BFB\u4EE3\u7406\uFF08\u4E5F\u5C31\u662F\u5B83\u4F9D\u7136\u662F\u4E00\u4E2A Proxy\uFF0C<strong>\u672C\u8D28\u662F\u4E00\u4E2A proxy \u7684 set \u65B9\u6CD5\u88AB\u52AB\u6301</strong>\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\uFF09\uFF0C<strong>\u7B26\u5408\u5355\u9879\u6570\u636E\u6D41\u89C4\u8303</strong>\u3002</p></blockquote><ul><li><code>readonly</code>\u8FD4\u56DE\u7684\u5BF9\u8C61\u90FD\u662F\u4E0D\u5141\u8BB8\u4FEE\u6539\u7684\u3002</li><li>\u4F46<code>readonly</code>\u5904\u7406\u7684<strong>\u539F\u6765\u7684</strong>\u5BF9\u8C61\u662F\u5141\u8BB8\u88AB\u4FEE\u6539\u7684\u3002\u5982<code>const info = readonly(obj)</code>\uFF0C<code>info</code>\u4E0D\u80FD\u88AB\u4FEE\u6539\uFF0C<code>obj</code>\u53EF\u4EE5\u4FEE\u6539\uFF0C\u5F53<code>obj</code>\u88AB\u4FEE\u6539\u65F6\uFF0C<code>readonly</code>\u8FD4\u56DE\u7684<code>info</code>\u5BF9\u8C61\u4E5F\u4F1A\u88AB\u4FEE\u6539\u3002</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// App.vue
&lt;template&gt;
  &lt;h2&gt;App: {{ info }}&lt;/h2&gt;
  &lt;show-info :roInfo=&quot;roInfo&quot;
             @changeRoInfoName=&quot;changeRoInfoName&quot;&gt;
  &lt;/show-info&gt;
&lt;/template&gt;

&lt;script&gt;
  import { readonly } from &#39;vue&#39;
  import ShowInfo from &#39;./ShowInfo.vue&#39;

  export default {
    components: {
      ShowInfo
    },
    setup() {
      // \u672C\u5730\u5B9A\u4E49\u591A\u4E2A\u6570\u636E, \u90FD\u9700\u8981\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6
      // name/age/height
      const info = reactive({
        name: &quot;nevermore&quot;,
        age: 18,
        height: 1.88
      })

      // \u4F7F\u7528readOnly\u5305\u88F9info
      const roInfo = readonly(info)
      function changeRoInfoName(payload) {
        info.name = payload
      }

      return {
        roInfo,
        changeRoInfoName
      }
    }
  }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// ShowInfo.vue
&lt;template&gt;
  &lt;div&gt;
    //&lt;!-- \u4F7F\u7528readonly\u7684\u6570\u636E --&gt;
    &lt;h2&gt;ShowInfo: {{ roInfo }}&lt;/h2&gt;
    //&lt;!-- \u4EE3\u7801\u5C31\u4F1A\u65E0\u6548(\u62A5\u8B66\u544A) --&gt;
    //&lt;!-- &lt;button @click=&quot;roInfo.name = &#39;james&#39;&quot;&gt;ShowInfo\u6309\u94AE&lt;/button&gt; --&gt;
    //&lt;!-- \u6B63\u786E\u7684\u505A\u6CD5 --&gt;
    &lt;button @click=&quot;roInfoBtnClick&quot;&gt;roInfo\u6309\u94AE&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: {
      // readonly\u6570\u636E
      roInfo: {
        type: Object,
        default: () =&gt; ({})
      }
    },
    // \u5B50\u4F20\u7236
    emits: [&quot;changeRoInfoName&quot;],
    setup(props, context) {
      function roInfoBtnClick() {
        context.emit(&quot;changeRoInfoName&quot;, &quot;james&quot;)
      }

      return {
        roInfoBtnClick
      }
    }
  }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5176\u5B83\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u51FD\u6570" aria-hidden="true">#</a> \u5176\u5B83\u51FD\u6570</h4><p><code>isProxy</code>\uFF1A\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u6216 <code>readonly</code>\u521B\u5EFA\u7684 <code>proxy</code></p><p><code>isReactive</code>\uFF1A\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code>\u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\uFF0C\u5982\u679C\u8BE5\u4EE3\u7406\u662F <code>readonly</code> \u5EFA\u7684\uFF0C\u4F46\u5305\u88F9\u4E86\u7531 <code>reactive</code> \u521B\u5EFA\u7684\u53E6\u4E00\u4E2A\u4EE3\u7406\uFF0C\u5B83\u4E5F\u4F1A\u8FD4\u56DE true</p><p><code>isReadonly</code>\uFF1A\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>readonly</code> \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406</p><p><code>toRaw</code>\uFF1A\u8FD4\u56DE <code>reactive</code> \u6216 <code>readonly</code> \u4EE3\u7406\u7684\u539F\u59CB\u5BF9\u8C61</p><p><code>shallowReactive</code>\uFF1A\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5C42\u54CD\u5E94\u5F0F\u8F6C\u6362</p><p><code>shallowReadonly</code>\uFF1A\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5EA6\u53EA\u8BFB\u8F6C\u6362</p><p><code>toRefs</code>/<code>toRef</code>\uFF1A<code>reactive()</code>\u8FD4\u56DE\u7684\u5BF9\u8C61\u8FDB\u884C es6 \u89E3\u6784\u83B7\u53D6\u7684\u503C\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u9700\u8981\u7528<code>toRefs()</code>\u5C06 reactive \u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u90FD\u8F6C\u6210 ref\uFF0C\u4ECE\u800C\u5C06\u6570\u636E\u53D8\u6210\u54CD\u5E94\u5F0F\u3002<code>toRef()</code>\u5C06\u4E00\u4E2A reactive \u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u4E3A ref\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>const state = reactive({
  name: &quot;nevermore&quot;,
  age: 18
})
// \u89E3\u6784\u51FA\u6765\u7684name\u548Cage\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684
const { name, age } = state
// \u4F7F\u7528toRefs()\u5C06name\u548Cage\u53D8\u6210\u54CD\u5E94\u5F0F
const { name, age } = toRefs(state)
// \u4F7F\u7528toRef()\u5C06\u4E00\u4E2Areactive\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u53D8\u6210\u54CD\u5E94\u5F0F
const name = toRef(state, &#39;name&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="computed-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#computed-\u51FD\u6570" aria-hidden="true">#</a> Computed \u51FD\u6570</h4><p>\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<code>ref</code>\u5BF9\u8C61\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528<code>.value</code>\u83B7\u53D6\u503C</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>//\u9ED8\u8BA4\u63A5\u6536getter\u51FD\u6570
const fullName = computed(() =&gt; {
  return firstName.value + &quot; &quot; +lastName.value;
})

const fullName = computed({
  get: () =&gt; {
    return firstName.value + &quot; &quot; +lastName.value;
  },
  set: () =&gt; {
    const names = newValue.split(&quot; &quot;);
    firstName.value = names[0];
    lastName.value = names[1];
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</h4><p><img src="https://secure2.wostatic.cn/static/72r695vsw4TAea9cCojAN1/image.png?auth_key=1708937116-fH7nNxgszGjbiJEfTEBNi2-0-ccf244ed77b3cea1db3554ef4da569c4" alt=""></p><h4 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> <code>provide()/inject()</code></h4><p>\u975E\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u53EF\u7528 vuex \u6216 pinia \u66FF\u4EE3\u3002\u5728 composition API \u4E2D\u4E0D\u9700\u8981\u624B\u52A8\u89E3\u5305\u3002\u5B9A\u4E49\u7684\u6570\u636E\u975E\u54CD\u5E94\u5F0F\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// provide
setup() {
  provide(&quot;name&quot;, name)
  provide(&quot;age&quot;, 18)
}
// inject
&lt;template&gt;
  &lt;div&gt;ShowInfo: {{ name }}-{{ age }}-{{ height }} &lt;/div&gt;
&lt;/template&gt;

setup() {
  const name = inject(&quot;name&quot;)
  const age = inject(&quot;age&quot;)
  const height = inject(&quot;height&quot;, 1.88)

  return {
    name,
    age,
    height
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u76D1\u542C" aria-hidden="true">#</a> \u6570\u636E\u76D1\u542C</h3><ul><li><code>watchEffect</code>\uFF1A\u7528\u4E8E<strong>\u81EA\u52A8\u6536\u96C6</strong>\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u4F9D\u8D56\uFF1B\u9ED8\u8BA4\u76F4\u63A5\u6267\u884C\u4E00\u6B21</li><li><code>watch</code>\uFF1A\u9700\u8981<strong>\u624B\u52A8\u6307\u5B9A</strong>\u4FA6\u542C\u7684\u6570\u636E\u6E90\uFF1B\u53EF\u4EE5\u62FF\u5230\u76D1\u542C\u6539\u53D8\u524D\u540E\u7684\u503C\uFF1B\u4E0D\u8BBE\u7F6E<code>immediate</code>\u7B2C\u4E00\u6B21\u662F\u4E0D\u6267\u884C\u7684</li></ul><h4 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> <code>watch()</code></h4><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>import { watch } from &#39;vue&#39;

&lt;button @click=&quot;obj.friend.name = &#39;never&#39;&quot;&gt;\u4FEE\u6539info&lt;/button&gt;

// \u4FA6\u542C\u5355\u4E2A\u6570\u636E\u6E90
// \u76D1\u542Creactive\u6570\u636E\u53D8\u5316\u540E, \u83B7\u53D6\u5BF9\u8C61\u7C7B\u578B\u662Fproxy
watch(obj, (newValue, oldValue) =&gt; {
  console.log(newValue, oldValue)
  console.log(newValue === oldValue) // true
}, {
  // watch\u7684\u9009\u9879immediate(\u9ED8\u8BA4\u60F0\u6027)\u548Cdeep(\u9ED8\u8BA4\u662Ftrue)
  immediate: true
})

// \u76D1\u542Creactive\u6570\u636E\u53D8\u5316\u540E, \u83B7\u53D6\u7684\u662F\u666E\u901A\u5BF9\u8C61
watch(() =&gt; ({ ...obj }), (newValue, oldValue) =&gt; {
  console.log(newValue, oldValue)
}, {
  immediate: true,
  deep: true
})

// \u4FA6\u542C\u591A\u4E2A\u6570\u636E\u6E90
watch([name, obj], (newValue, oldValue) =&gt; {
  console.log(newValue, oldValue)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> <code>watchEffect</code></h4><ul><li>watchEffect \u4F20\u5165\u7684\u51FD\u6570\u4F1A\u88AB\u7ACB\u5373\u6267\u884C\u4E00\u6B21\uFF0C\u5E76\u4E14\u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6536\u96C6\u4F9D\u8D56</li><li>\u53EA\u6709\u6536\u96C6\u7684\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u65F6\uFF0CwatchEffect \u4F20\u5165\u7684\u51FD\u6570\u624D\u4F1A\u518D\u6B21\u6267\u884C</li><li>\u8C03\u7528\u8FD4\u56DE\u503C\u6765\u505C\u6B62\u4FA6\u542C</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>const counter = ref(0)
const name = ref(&quot;why&quot;)

const stopWatch = watchEffect(() =&gt; {
  console.log(&quot;-------&quot;, counter.value, name.value)

  // \u5224\u65ADcounter.value &gt; 10
  if (counter.value &gt;= 10) {
    stopWatch()
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7EC4\u4EF6\u901A\u4FE1</h3><p>\u7236\u4F20\u5B50\uFF1A<code>defineProps()</code></p><p>\u5B50\u4F20\u7236(\u53D1\u9001\u4E8B\u4EF6)\uFF1A<code>defineEmits(&#39;handleClick&#39;)</code>\uFF0C<code>emit(&#39;handleClick&#39;, data)</code>\uFF0C<code>defineExpose()</code>\uFF08\u66B4\u9732\u5B50\u7EC4\u4EF6\uFF09</p>`,59),a=[s];function c(v,r){return n(),i("div",null,a)}const o=e(l,[["render",c],["__file","vue3-basic.html.vue"]]);export{o as default};
