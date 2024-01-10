import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.8e7be1c4.js";const t={},i=e(`<h2 id="\u6CE8\u518C\u7EC4\u4EF6\u57FA\u672C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u7EC4\u4EF6\u57FA\u672C\u6B65\u9AA4" aria-hidden="true">#</a> \u6CE8\u518C\u7EC4\u4EF6\u57FA\u672C\u6B65\u9AA4</h2><ul><li>\u8C03\u7528<code>Vue.extend()</code>\u65B9\u6CD5\u521B\u5EFA\u7EC4\u4EF6\u6784\u9020\u5668</li><li>\u8C03\u7528<code>Vue.component()</code>\u65B9\u6CD5\u6CE8\u518C\u7EC4\u4EF6</li><li>\u5728 Vue \u5B9E\u4F8B\u7684\u4F5C\u7528\u8303\u56F4\u5185\u4F7F\u7528\u7EC4\u4EF6<code>&lt;my-cpn&gt;&lt;/my-cpn&gt;</code></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // Vue1.0
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--3.\u4F7F\u7528\u7EC4\u4EF6--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>  // \u653E\u5165\u5B9E\u4F8B\u6302\u8F7D
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  // 1.\u521B\u5EFA\u7EC4\u4EF6\u6784\u9020\u5668\u5BF9\u8C61
  const cpnC = Vue.extend({
    template: \`
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5185\u5BB9, \u54C8\u54C8\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5185\u5BB9, \u5475\u5475\u5475\u5475<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\`
  })

  // 2.\u6CE8\u518C\u7EC4\u4EF6\uFF08\u5168\u5C40\u7EC4\u4EF6\uFF0C\u610F\u5473\u7740\u53EF\u4EE5\u5728\u591A\u4E2AVue\u7684\u5B9E\u4F8B\u4E0B\u9762\u4F7F\u7528\uFF09
  Vue.component(&#39;my-cpn&#39;, cpnC)

  const app = new Vue({
    el: &#39;#app&#39;,
    components: {
      my-cpn: cpnC  // id\u4E3Aapp\u5B9E\u4F8B\u4E0B\u7684\u5C40\u90E8\u7EC4\u4EF6
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue2.0 \u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u8BED\u6CD5\u7CD6</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u76F4\u63A5\u6CE8\u518C\u7EC4\u4EF6\uFF08\u5305\u542B\u4E86Vue.extend\u7684\u6B65\u9AA4\uFF09
  Vue.component(&#39;cpn1&#39;, {
    template: \`
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u6807\u98981<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5185\u5BB9, \u54C8\u54C8\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    \`
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue2.0 \u6CE8\u518C\u5C40\u90E8\u7EC4\u4EF6\u8BED\u6CD5\u7CD6</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  //const cpn = {
  //  template: \`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\`,
  //  data() { return {} },
  //  methods: {}
  //}

  const app = new Vue({
      el: &#39;#app&#39;,
      components: {
        &#39;cpn2&#39;: {  // &#39;cpn&#39;: cpn
          template: \`
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u6807\u98982<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5185\u5BB9, \u5475\u5475\u5475<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      \`
        }
      }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u6A21\u677F\u5206\u79BB\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6A21\u677F\u5206\u79BB\u5199\u6CD5" aria-hidden="true">#</a> \u7EC4\u4EF6\u6A21\u677F\u5206\u79BB\u5199\u6CD5</h2><ul><li>script</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // 1.script\u6807\u7B7E, \u6CE8\u610F:\u7C7B\u578B\u5FC5\u987B\u662Ftext/x-template
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/x-template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token comment">// ...</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>template</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // 2.template\u6807\u7B7E
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
       // ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  // 1.\u5168\u5C40\u7EC4\u4EF6\u5199\u6CD5
  Vue.component(&#39;cpn&#39;, {
    template: &#39;#cpn&#39;
  })

  // 2.\u5C40\u90E8\u7EC4\u4EF6\u5199\u6CD5
  new Vue({
    // ...
    components: {
      &#39;cpn&#39;:{
         template: &#39;#cpn&#39;
       }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u6570\u636E\u5B58\u653E" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6570\u636E\u5B58\u653E" aria-hidden="true">#</a> \u7EC4\u4EF6\u6570\u636E\u5B58\u653E</h2><p>\u6CE8\u610F\uFF1A</p><ul><li>\u5B50\u7EC4\u4EF6\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u7236\u7EC4\u4EF6\uFF08\u7EC4\u4EF6\u53D8\u91CF\u8BBF\u95EE\u4E0D\u5230 Vue \u5B9E\u4F8B\u7684\u6570\u636E\uFF09</li><li>\u7EC4\u4EF6\u4E2D\u7684 data \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\uFF08**\u9762\u8BD5\u9898\uFF1A**\u6B63\u56E0\u4E3A data \u662F\u51FD\u6570,\u51FD\u6570\u5728\u6BCF\u6B21\u6267\u884C\u65F6\u90FD\u4F1A\u5728\u6808\u7A7A\u95F4\u521B\u5EFA\u65B0\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u6709\u81EA\u5DF1\u7684 data \u6570\u636E, \u4E92\u4E0D\u5F71\u54CD\uFF0C\u6BCF\u6B21\u51FD\u6570 return \u7684\u90FD\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF1B\u82E5\u662F\u5BF9\u8C61\u7684\u8BDD\u5C31\u4F1A\u8FD4\u56DE\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u4EA7\u751F\u76F8\u4E92\u5F71\u54CD\uFF09</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u6CE8\u518C\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6
  Vue.component(&#39;cpn&#39;, {
    template: &#39;#cpn&#39;,
    // \u7EC4\u4EF6data\u4E0D\u80FD\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u4E14\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61
    // data: { // \u4E0D\u80FD\u8FD9\u4E48\u5199
    //   title: &#39;abc&#39;
    // },
    data() {
      return {
        title: &#39;abc&#39;
      }
    }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</h2><p><img src="https://secure2.wostatic.cn/static/kqDPGndaFwFtR51Nz71qxP/image.png?auth_key=1690560475-j4eKvswHUVJb9BGiXRDCDj-0-c61a36ec49ada44a8321260337d86464" alt=""></p><h3 id="\u7236\u4F20\u5B50-props" tabindex="-1"><a class="header-anchor" href="#\u7236\u4F20\u5B50-props" aria-hidden="true">#</a> \u7236\u4F20\u5B50\uFF1A<code>props</code></h3><ul><li><strong>\u5B57\u7B26\u4E32\u6570\u7EC4</strong>\uFF0C\u6570\u7EC4\u4E2D\u7684\u5B57\u7B26\u4E32\u5C31\u662F attribute \u7684\u540D\u79F0</li><li><strong>\u5BF9\u8C61\u7C7B\u578B</strong>\uFF0C\u5BF9\u8C61\u7C7B\u578B\u6211\u4EEC\u53EF\u4EE5\u5728\u6307\u5B9A attribute \u540D\u79F0\u7684\u540C\u65F6\uFF0C\u6307\u5B9A\u5B83\u9700\u8981\u4F20\u9012\u7684\u7C7B\u578B\u3001\u662F\u5426\u662F\u5FC5\u987B\u7684\u3001\u9ED8\u8BA4\u503C\u7B49\u7B49 <ul><li>type \u7684\u7C7B\u578B\uFF1A<code>String</code> <code>Number</code> <code>Boolean</code> <code>Array</code> <code>Object</code> <code>Date</code> <code>Function</code> <code>Symbol</code></li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>props: {
  messageInfo: String,
  // \u57FA\u7840\u7684\u7C7B\u578B\u68C0\u67E5\uFF08null\u548Cundefined\u4F1A\u901A\u8FC7\u4EFB\u4F55\u7C7B\u578B\u9A8C\u8BC1\uFF09
  propA: Number,
  // \u591A\u4E2A\u53EF\u80FD\u7684\u7C7B\u578B
  propB: [String, Number],
  // \u5FC5\u586B\u7684\u5B57\u7B26\u4E32
  propC: {
    type: String,
    required: true
  },
  // \u5E26\u6709\u9ED8\u8BA4\u503C\u7684\u6570\u5B57
  propD: {
    type: Number,
    default: 100
  },
  // \u5E26\u6709\u9ED8\u8BA4\u503C\u7684\u5BF9\u8C61
  propE: {
    type: Object
    // \u5BF9\u8C61\u6216\u6570\u7EC4\u9ED8\u8BA4\u503C\u5FC5\u987B\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u83B7\u53D6
    default() {
      return { message: &quot;hello&quot;}
    }
  },
  // \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u51FD\u6570
  propF: {
    validator(value) {
      // \u8FD9\u4E2A\u503C\u5FC5\u987B\u5339\u914D\u4E0B\u5217\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u4E2A
      return [&#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;].includes(value)
    }
  },
  // \u5177\u6709\u9ED8\u8BA4\u503C\u7684\u51FD\u6570
  propG: {
    type: Function,
    // \u4E0E\u5BF9\u8C61\u6216\u6570\u7EC4\u9ED8\u8BA4\u503C\u4E0D\u540C\uFF0C\u8FD9\u4E0D\u662F\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570--\u8FD9\u662F\u4E00\u4E2A\u7528\u4F5C\u9ED8\u8BA4\u503C\u7684\u51FD\u6570
    default() {
      return &#39;Default function&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A</p><ul><li>HTML \u4E2D\u7684 attribute \u540D\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u4F1A\u628A\u6240\u6709\u5927\u5199\u5B57\u7B26\u89E3\u91CA\u4E3A\u5C0F\u5199\u5B57\u7B26\uFF0C\u5F53\u4F60\u4F7F\u7528 DOM \u4E2D\u7684\u6A21\u677F\u65F6\uFF0CcamelCase (\u9A7C\u5CF0\u547D\u540D\u6CD5) \u7684 prop \u540D\u9700\u8981\u4F7F\u7528\u5176\u7B49\u4EF7\u7684 kebab-case (\u77ED\u6A2A\u7EBF\u5206\u9694\u547D\u540D)\u547D\u540D</li><li><strong>\u975E Prop\uFF08\u6CA1\u6709\u5B9A\u4E49 props\uFF09\u7684 attribute \u5C06\u81EA\u52A8\u6DFB\u52A0\u5230\u6839\u8282\u70B9\u7684 Attribute \u4E2D\uFF08\u5982 class\u3001style\u3001id \u5C5E\u6027\u3001\u70B9\u51FB\u4E8B\u4EF6\uFF09\u2014attribute \u7EE7\u627F\uFF0C\u901A\u8FC7**</strong><code>$attrs</code>*<strong>*\u6765\u8BBF\u95EE</strong></li></ul><p><strong>\u4F7F\u7528</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span> <span class="token attr-name">:cmessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:cmovies</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movies<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    // \u6BCF\u4E2A\u7EC4\u4EF6\u5FC5\u987B\u53EA\u6709\u4E00\u4E2A\u6839\u5143\u7D20
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in cmovies<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{cmessage}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  const cpn = {
    template: &#39;#cpn&#39;,
    // props: [&#39;cmovies&#39;, &#39;cmessage&#39;], // \u6570\u7EC4\u7528\u6CD5
    props: {
      // 1.\u7C7B\u578B\u9650\u5236
      // cmovies: Array,
      // cmessage: String,

      // 2.\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u503Cdefault, \u4EE5\u53CA\u5FC5\u4F20\u503Crequired  // \u5BF9\u8C61\u7528\u6CD5
      cmessage: {
        type: String,
        default: &#39;aaaaaaaa&#39;,
        required: true
      },
      // \u7C7B\u578B\u662F\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u65F6, \u9ED8\u8BA4\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570
      cmovies: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }

  const app = new Vue({
    el: &#39;#app&#39;,
    data: {
      message: &#39;\u4F60\u597D\u554A&#39;,
      movies: [&#39;\u6D77\u738B&#39;, &#39;\u6D77\u8D3C\u738B&#39;, &#39;\u6D77\u5C14\u5144\u5F1F&#39;]
    },
    components: {
      cpn
    }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://secure2.wostatic.cn/static/dbePw2wws55UF6HPjpKfKT/image.png?auth_key=1690560475-mrRN8K59ay63tHdDsM6p9h-0-7455e11c4b6ecc876dcfab553cae9576" alt=""></p><h3 id="\u5B50\u4F20\u7236-emit" tabindex="-1"><a class="header-anchor" href="#\u5B50\u4F20\u7236-emit" aria-hidden="true">#</a> \u5B50\u4F20\u7236\uFF1A<code>$emit</code></h3><p><strong>\u4F7F\u7528</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u7236\u7EC4\u4EF6\u6A21\u677F
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    // \u4E0D\u80FD\u5199\u9A7C\u5CF0@itemClick\uFF0C\u7236\u7EC4\u4EF6cpnClick\u65B9\u6CD5\u63A5\u6536\u5B50\u7EC4\u4EF6\u53D1\u5C04\u8FC7\u6765\u7684item-click\u81EA\u5B9A\u4E49\u4E8B\u4EF6
    // \u8FD9\u91CCcpnClick\u6CA1\u6709\u53C2\u6570\u4F1A\u9ED8\u8BA4\u628Aitem\u4F20\u8FC7\u53BB\uFF0C\u800C\u4E0D\u662Fevent\u4E8B\u4EF6
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span> <span class="token attr-name">@item-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpnClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  // \u5B50\u7EC4\u4EF6\u6A21\u677F
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in categories<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnClick(item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{item.name}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  // 1.\u5B50\u7EC4\u4EF6
  const cpn = {
    template: &#39;#cpn&#39;,
    data() {
      return {
        categories: [
          {id: &#39;aaa&#39;, name: &#39;\u70ED\u95E8\u63A8\u8350&#39;},
          {id: &#39;bbb&#39;, name: &#39;\u624B\u673A\u6570\u7801&#39;},
          {id: &#39;ccc&#39;, name: &#39;\u5BB6\u7528\u5BB6\u7535&#39;},
          {id: &#39;ddd&#39;, name: &#39;\u7535\u8111\u529E\u516C&#39;},
        ]
      }
    },
    methods: {
      btnClick(item) {
        // \u53D1\u5C04\u4E8B\u4EF6: \u81EA\u5B9A\u4E49\u4E8B\u4EF6(\u5C06\u5E26\u53C2\u6570\u7684\u70B9\u51FB\u6309\u94AE\u4E8B\u4EF6\u53D1\u9001\u7ED9\u7236\u7EC4\u4EF6)
        this.$emit(&#39;item-click&#39;, item)
      }
    }
  }

  // 2.\u7236\u7EC4\u4EF6
  const app = new Vue({
    el: &#39;#app&#39;,
    data: {
      message: &#39;\u4F60\u597D\u554A&#39;
    },
    components: {
      cpn
    },
    methods: {
      cpnClick(item) {
        console.log(&#39;cpnClick&#39;, item);
      }
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://secure2.wostatic.cn/static/nZ59EyWG9P8kg7PhddySGZ/image.png?auth_key=1690560475-pcBNLbEwhCRuZYUu6ZiJkE-0-b288cce342c8cea9e8b1638ed489c8dc" alt=""></p><h2 id="\u975E\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u975E\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u975E\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</h2><h3 id="\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF" aria-hidden="true">#</a> \u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF</h3><p>\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93<code>mitt</code> \u6216 <code>tiny-emitter</code></p><h3 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> <code>Provide</code>/<code>Inject</code></h3><blockquote><p>\u7528\u4E8E\u975E\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u5171\u4EAB\u6570\u636E\uFF0C\u6BD4\u5982\u6709\u4E00\u4E9B\u6DF1\u5EA6\u5D4C\u5957\u7684\u7EC4\u4EF6\uFF0C\u5B50\u7EC4\u4EF6\u60F3\u8981\u83B7\u53D6\u7236\u7EC4\u4EF6\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6211\u4EEC\u4ECD\u7136\u5C06 props \u6CBF\u7740\u7EC4\u4EF6\u94FE\u9010\u7EA7\u4F20\u9012\u4E0B\u53BB\uFF0C\u5C31\u4F1A\u975E\u5E38\u7684\u9EBB\u70E6\u3002\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Provide \u548C Inject\uFF0C\u65E0\u8BBA\u5C42\u7EA7\u7ED3\u6784\u6709\u591A\u6DF1\uFF0C\u7236\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u5176\u6240\u6709\u5B50\u7EC4\u4EF6\u7684\u4F9D\u8D56\u63D0\u4F9B\u8005\uFF0C\u7236\u7EC4\u4EF6\u6709\u4E00\u4E2A provide \u9009\u9879\u6765\u63D0\u4F9B\u6570\u636E\uFF0C\u5B50\u7EC4\u4EF6\u6709\u4E00\u4E2A inject \u9009\u9879\u6765\u5F00\u59CB\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E\uFF0C\u7236\u7EC4\u4EF6\u4E0D\u9700\u8981\u77E5\u9053\u54EA\u4E9B\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5B83 provide \u7684 property\uFF0C\u5B50\u7EC4\u4EF6\u4E0D\u9700\u8981\u77E5\u9053 inject \u7684 property \u6765\u81EA\u54EA\u91CC\uFF08\u53EF\u7528 vuex \u6216 pinia \u4EE3\u66FF\uFF09</p></blockquote><p><img src="https://secure2.wostatic.cn/static/vw5eeeYjHfuXBYMa8K9Z1A/image.png?auth_key=1690560475-f21ZsETQvM3JRXjRDXM8TK-0-c07b092a624024a3950b47073372c2c0" alt=""></p><h2 id="\u7236\u5B50\u7EC4\u4EF6\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u8BBF\u95EE" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u8BBF\u95EE</h2><h3 id="\u7236\u8BBF\u95EE\u5B50-children-refs-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#\u7236\u8BBF\u95EE\u5B50-children-refs-\u5E38\u7528" aria-hidden="true">#</a> \u7236\u8BBF\u95EE\u5B50\uFF1A<code>$children</code> <code>$refs(\u5E38\u7528)</code></h3><p><code>$children</code>\u7684\u7F3A\u9677\uFF1A\uFF08Vue3 \u4E2D\u79FB\u9664\uFF09</p><ul><li><p>\u901A\u8FC7<code>$children</code>\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u65F6\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B\uFF0C\u8BBF\u95EE\u5176\u4E2D\u7684\u5B50\u7EC4\u4EF6\u5FC5\u987B\u901A\u8FC7\u7D22\u5F15\u503C\u3002</p></li><li><p>\u4F46\u662F\u5F53\u5B50\u7EC4\u4EF6\u8FC7\u591A\uFF0C\u6211\u4EEC\u9700\u8981\u62FF\u5230\u5176\u4E2D\u4E00\u4E2A\u65F6\uFF0C\u5F80\u5F80\u4E0D\u80FD\u786E\u5B9A\u5B83\u7684\u7D22\u5F15\u503C\uFF0C\u751A\u81F3\u8FD8\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u89E3\u51B3\u65B9\u6CD5\uFF1A\u4F9D\u8D56\u6CE8\u5165<code>provide</code> \u548C <code>inject</code>\u3002</p><p>\u793A\u4F8B\uFF1A<code>provide() { return { getMap: this.getMap } } </code> <code>inject: [ &#39;getMap&#39; ]</code></p></li></ul><p><code>$refs</code>\u7684\u4F7F\u7528\uFF1A</p><ul><li>\u7528\u4E8E\u660E\u786E\u83B7\u53D6\u5176\u4E2D\u7684\u4E00\u4E2A\u7279\u5B9A\u7684\u7EC4\u4EF6\u3002</li><li><code>$refs</code>\u548C<code>ref</code>\u6307\u4EE4\u901A\u5E38\u662F\u4E00\u8D77\u4F7F\u7528\u7684\u3002</li><li>\u9996\u5148\uFF0C\u6211\u4EEC\u901A\u8FC7<code>ref</code>\u7ED9\u67D0\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u4E00\u4E2A\u7279\u5B9A\u7684 ID\u3002</li><li>\u5176\u6B21\uFF0C\u901A\u8FC7<code>this.$refs.ID</code>\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u8BE5\u7EC4\u4EF6\u4E86\u3002</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>

  // \u7236methods
  methods: {
    showRefsCpn() {
      // \u6253\u5370\u7B2C\u4E8C\u4E2Achildren-cpn\u7EC4\u4EF6\u7684name
      console.log(this.$children[1].name)
      // \u6253\u5370ref\u6307\u5B9A\u7684children-cpn\u7EC4\u4EF6\u7684name
      console.log(this.$refs.cpn.name)
    }
  },
  components: {
    child-cpn: {
      template: &#39;#child-cpn&#39;,
      data() {
        return {
          name: &#39;\u6211\u662F\u5B50\u7EC4\u4EF6\u7684name&#39;
        }
      }
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B50\u8BBF\u95EE\u7236-parent-root" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8BBF\u95EE\u7236-parent-root" aria-hidden="true">#</a> \u5B50\u8BBF\u95EE\u7236\uFF1A<code>$parent</code> <code>$root</code></h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>new Vue({
    el: &#39;#app&#39;,
    data: {
      message: &#39;\u4F60\u597D\u554A&#39;
    },
    components: {
      cpn: {
        template: &#39;#cpn&#39;,
        data() {
          return {
            name: &#39;\u6211\u662Fcpn\u7EC4\u4EF6\u7684name&#39;
          }
        },
        components: {
          ccpn: {
            template: &#39;#ccpn&#39;,
            methods: {
              btnClick() {
                // 1.\u8BBF\u95EE\u7236\u7EC4\u4EF6$parent
                console.log(this.$parent);
                console.log(this.$parent.name);

                // 2.\u8BBF\u95EE\u6839\u7EC4\u4EF6$root
                console.log(this.$root);
                console.log(this.$root.message);
              }
            }}} } }})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8865\u5145</strong>\uFF1A<code>$el</code>\uFF1A\u83B7\u53D6\u7EC4\u4EF6\u6839\u5143\u7D20</p><h2 id="\u52A8\u6001\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6</h2><ul><li>\u901A\u8FC7\u4F7F\u7528\u4FDD\u7559\u7684 <code>&lt;component&gt;</code> \u5143\u7D20\uFF0C\u52A8\u6001\u5730\u7ED1\u5B9A\u5230\u5B83\u7684 <code>is</code> \u7279\u6027\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u7EC4\u4EF6</li><li><code>&lt;keep-alive&gt;</code> \u5305\u88F9\u52A8\u6001\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u7F13\u5B58\u4E0D\u6D3B\u52A8\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F\u9500\u6BC1\u5B83\u4EEC\u3002<code>&lt;keep-alive&gt;</code> \u662F\u4E00\u4E2A\u62BD\u8C61\u7EC4\u4EF6\uFF1A\u5B83\u81EA\u8EAB\u4E0D\u4F1A\u6E32\u67D3\u4E00\u4E2A DOM \u5143\u7D20\uFF0C\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u5728\u7236\u7EC4\u4EF6\u94FE\u4E2D\u3002</li></ul><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button v-for=&quot;tab in tabs&quot;
            :key=&quot;tab&quot;
            :class=&quot;{active: currentTab === tab}&quot;
            @click=&quot;tabClick(tab)&quot;&gt;
      {{tab}}
    &lt;/button&gt;

    &lt;component :is=&quot;currentTab&quot;&gt;&lt;/commponent&gt;
  &lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- home\u548Cabout\u9875\u9762\u7684\u5207\u6362 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage = &#39;home&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage = &#39;about&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>about<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

setup() {
  const currentPage = ref(&quot;home&quot;)
  return {
    currentPage
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u7EC4\u4EF6\u4F20\u503C\u548C\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6\u4F20\u503C\u548C\u76D1\u542C" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6\u4F20\u503C\u548C\u76D1\u542C</h3><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;component :is=&quot;currentTab&quot;
           name=&quot;never&quot;
           :age=&quot;18&quot;
           @pageClick=&quot;pageClick&quot;&gt;
&lt;/commponent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keep-alive-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#keep-alive-\u7684\u4F7F\u7528" aria-hidden="true">#</a> keep-alive \u7684\u4F7F\u7528</h3><ul><li><code>include</code> - <code>string | RegExp | Array</code>\u3002\u53EA\u6709\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58</li><li><code>exclude</code> - <code>string | RegExp | Array</code>\u3002\u4EFB\u4F55\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u90FD\u4E0D\u4F1A\u88AB\u7F13\u5B58</li><li><code>max</code> - <code>number | string</code>\u3002\u6700\u591A\u53EF\u4EE5\u7F13\u5B58\u591A\u5C11\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4E00\u65E6\u8FBE\u5230\u8FD9\u4E2A\u6570\u5B57\uFF0C\u90A3\u4E48\u7F13\u5B58\u7EC4\u4EF6\u4E2D\u6700\u8FD1\u6CA1\u6709\u88AB\u8BBF\u95EE\u7684\u5B9E\u4F8B\u4F1A\u88AB\u9500\u6BC1</li></ul><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;keep-alive include=&quot;home,about&quot;&gt; &lt;!-- \u7EC4\u4EF6\u7684name\u503C --&gt;
  &lt;component :is=&quot;currentTab&quot;
             name=&quot;never&quot;
             :age=&quot;18&quot;
             @pageClick=&quot;pageClick&quot;&gt;
  &lt;/commponent&gt;
&lt;/keep-alive&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\u7F13\u5B58\u7684\u7EC4\u4EF6\u6765\u8BF4\uFF0C\u518D\u6B21\u8FDB\u5165\u65F6\uFF0C\u6211\u4EEC\u662F\u4E0D\u4F1A\u6267\u884C created \u6216\u8005 mounted \u7B49\u751F\u547D\u5468\u671F\u51FD\u6570\u7684\uFF1A\u4F46\u662F\u6709\u65F6\u5019\u6211\u4EEC\u786E\u5B9E\u5E0C\u671B\u76D1\u542C\u5230\u4F55\u65F6\u91CD\u65B0\u8FDB\u5165\u5230\u4E86\u7EC4\u4EF6\uFF0C\u4F55\u65F6\u79BB\u5F00\u4E86\u7EC4\u4EF6\uFF1B \u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>activated</code> \u548C <code>deactivated</code> \u8FD9\u4E24\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6765\u76D1\u542C\u3002</p></blockquote><h2 id="\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a> \u5F02\u6B65\u7EC4\u4EF6</h2><blockquote><p>\u5982\u679C\u6211\u4EEC\u7684\u9879\u76EE\u8FC7\u5927\u4E86\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u7EC4\u4EF6\u6211\u4EEC\u5E0C\u671B\u901A\u8FC7\u5F02\u6B65\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u52A0\u8F7D\uFF08\u76EE\u7684\u662F\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u5206\u5305\u5904\u7406\uFF09</p></blockquote><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>defineAsyncComponent(() =&gt; import(&quot;./xxx.vue&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u7C7B\u578B\uFF1A</p><ul><li>\u7C7B\u578B\u4E00\uFF1A<strong>\u5DE5\u5382\u51FD\u6570</strong>\uFF0C\u8BE5\u5DE5\u5382\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\u3002</li><li>\u7C7B\u578B\u4E8C\uFF1A\u63A5\u53D7\u4E00\u4E2A<strong>\u5BF9\u8C61\u7C7B\u578B</strong>\uFF0C\u5BF9\u5F02\u6B65\u51FD\u6570\u8FDB\u884C\u914D\u7F6E\u3002</li></ul><p><img src="https://secure2.wostatic.cn/static/jTC2mNSpSHNHunBb82Sdjy/image.png?auth_key=1690560476-uxm9iuGQVM7zgL1UoK5d4G-0-83ac2afde4b0dcc40af908931fba65c3" alt=""></p><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><blockquote><p>\u7EC4\u4EF6\u548C\u7EC4\u4EF6\u4E4B\u95F4\u6709\u65F6\u5019\u4F1A\u5B58\u5728\u76F8\u540C\u7684\u4EE3\u7801\u903B\u8F91\uFF0C\u6211\u4EEC\u5E0C\u671B\u5BF9\u76F8\u540C\u7684\u4EE3\u7801\u903B\u8F91\u8FDB\u884C\u62BD\u53D6\u3002Mixin \u63D0\u4F9B\u4E86\u4E00\u79CD\u975E\u5E38\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u6765\u5206\u53D1 Vue \u7EC4\u4EF6\u4E2D\u7684\u53EF\u590D\u7528\u529F\u80FD\uFF0C\u4E00\u4E2A Mixin \u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u7EC4\u4EF6\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u4F7F\u7528 Mixin \u5BF9\u8C61\u65F6\uFF0C\u6240\u6709 Mixin \u5BF9\u8C61\u7684\u9009\u9879\u5C06\u88AB\u6DF7\u5408\u8FDB\u5165\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u7684\u9009\u9879\u4E2D</p></blockquote><p><img src="https://secure2.wostatic.cn/static/sszuKmwMAsEcwS8ABDXgLB/image.png?auth_key=1690560476-ex2VErJUmTre3nKzm5S6ck-0-51ea3da62707674ce6ea83d1e5e05d1a" alt=""></p><h2 id="deep-\u548C-global" tabindex="-1"><a class="header-anchor" href="#deep-\u548C-global" aria-hidden="true">#</a> :deep()\u548C:global()</h2><p>\u7236\u7EC4\u4EF6\u80FD\u76F4\u63A5\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\uFF0C\u5F53\u9700\u8981\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u6839\u5143\u7D20\u4EE5\u5916\u7684\u5143\u7D20\u9700\u8981\u7528<code>:deep()</code>\uFF1B\u5F53\u8BBF\u95EE\u7684\u662F\u540C\u7EA7\u7EC4\u4EF6\u7684\u5143\u7D20\u65F6\uFF0C\u53EA\u80FD\u7528<code>:global()</code></p><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><p>\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u7EE7\u627F Vue \u7684\u6E90\u578B\uFF08\u5982<code>Vue.prototype.shareObj=shareObj</code>\u5373\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u53EF\u8BBF\u95EE\u8BE5\u53D8\u91CF\uFF09</p>`,70),l=[i];function c(p,d){return s(),a("div",null,l)}const v=n(t,[["render",c],["__file","componentized.html.vue"]]);export{v as default};
