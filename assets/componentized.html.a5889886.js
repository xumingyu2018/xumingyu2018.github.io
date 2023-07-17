import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as n,d as i,e as p,b as s,r as c}from"./app.68492f61.js";const u={},o=p(`<h2 id="\u6CE8\u518C\u7EC4\u4EF6\u57FA\u672C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u7EC4\u4EF6\u57FA\u672C\u6B65\u9AA4" aria-hidden="true">#</a> \u6CE8\u518C\u7EC4\u4EF6\u57FA\u672C\u6B65\u9AA4</h2><ul><li>\u8C03\u7528<code>Vue.extend()</code>\u65B9\u6CD5\u521B\u5EFA\u7EC4\u4EF6\u6784\u9020\u5668</li><li>\u8C03\u7528<code>Vue.component()</code>\u65B9\u6CD5\u6CE8\u518C\u7EC4\u4EF6</li><li>\u5728Vue\u5B9E\u4F8B\u7684\u4F5C\u7528\u8303\u56F4\u5185\u4F7F\u7528\u7EC4\u4EF6<code>&lt;my-cpn&gt;&lt;/my-cpn&gt;</code></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // Vue1.0
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue2.0\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u8BED\u6CD5\u7CD6</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u76F4\u63A5\u6CE8\u518C\u7EC4\u4EF6\uFF08\u5305\u542B\u4E86Vue.extend\u7684\u6B65\u9AA4\uFF09
  Vue.component(&#39;cpn1&#39;, {
    template: \`
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u6807\u98981<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5185\u5BB9, \u54C8\u54C8\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    \`
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue2.0\u6CE8\u518C\u5C40\u90E8\u7EC4\u4EF6\u8BED\u6CD5\u7CD6</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  //const cpn = {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u6570\u636E\u5B58\u653E" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6570\u636E\u5B58\u653E" aria-hidden="true">#</a> \u7EC4\u4EF6\u6570\u636E\u5B58\u653E</h2><p>\u6CE8\u610F\uFF1A</p><ul><li>\u5B50\u7EC4\u4EF6\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u7236\u7EC4\u4EF6\uFF08\u7EC4\u4EF6\u53D8\u91CF\u8BBF\u95EE\u4E0D\u5230Vue\u5B9E\u4F8B\u7684\u6570\u636E\uFF09</li><li>\u7EC4\u4EF6\u4E2D\u7684data\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\uFF08<strong>\u9762\u8BD5\u9898\uFF1A</strong> \u6B63\u56E0\u4E3Adata\u662F\u51FD\u6570,\u51FD\u6570\u5728\u6BCF\u6B21\u6267\u884C\u65F6\u90FD\u4F1A\u5728\u6808\u7A7A\u95F4\u521B\u5EFA\u65B0\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u6709\u81EA\u5DF1\u7684data\u6570\u636E, \u4E92\u4E0D\u5F71\u54CD\uFF0C\u6BCF\u6B21\u51FD\u6570return\u7684\u90FD\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF1B\u82E5\u662F\u5BF9\u8C61\u7684\u8BDD\u5C31\u4F1A\u8FD4\u56DE\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u4EA7\u751F\u76F8\u4E92\u5F71\u54CD\uFF09</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u6CE8\u518C\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</h2><ul><li><p>\u7236\u4F20\u5B50\uFF1A<code>props</code></p><p>\u6CE8\u610F\uFF1A\u5728 DOM \u4E2D\u4F7F\u7528\u6A21\u677F\u65F6 (\u76F4\u63A5\u5728\u4E00\u4E2A HTML \u6587\u4EF6\u91CC\u64B0\u5199\u6A21\u677F)\uFF0C\u8FD8\u9700\u8981\u907F\u514D\u4F7F\u7528\u5927\u5199\u5B57\u7B26\u6765\u547D\u540D\u952E\u540D\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4F1A\u628A attribute \u540D\u5168\u90E8\u5F3A\u5236\u8F6C\u4E3A\u5C0F\u5199</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
    // props: [&#39;cmovies&#39;, &#39;cmessage&#39;],
    props: {
      // 1.\u7C7B\u578B\u9650\u5236
      // cmovies: Array,
      // cmessage: String,

      // 2.\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u503Cdefault, \u4EE5\u53CA\u5FC5\u4F20\u503Crequired
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5B50\u4F20\u7236\uFF1A<code>$emit</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  // \u7236\u7EC4\u4EF6\u6A21\u677F
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
        // \u53D1\u5C04\u4E8B\u4EF6: \u81EA\u5B9A\u4E49\u4E8B\u4EF6(\u5C06\u70B9\u51FB\u7684\u6309\u94AE\u4E8B\u4EF6\u53D1\u9001\u7ED9\u7236\u7EC4\u4EF6)
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u7236\u5B50\u7EC4\u4EF6\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u8BBF\u95EE" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u8BBF\u95EE</h2><ul><li><p>\u7236\u8BBF\u95EE\u5B50\uFF1A<code>$children</code> <code>$refs(\u5E38\u7528)</code></p><p><code>$children</code>\u7684\u7F3A\u9677\uFF1A</p><ul><li><p>\u901A\u8FC7<code>$children</code>\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u65F6\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B\uFF0C\u8BBF\u95EE\u5176\u4E2D\u7684\u5B50\u7EC4\u4EF6\u5FC5\u987B\u901A\u8FC7\u7D22\u5F15\u503C\u3002</p></li><li><p>\u4F46\u662F\u5F53\u5B50\u7EC4\u4EF6\u8FC7\u591A\uFF0C\u6211\u4EEC\u9700\u8981\u62FF\u5230\u5176\u4E2D\u4E00\u4E2A\u65F6\uFF0C\u5F80\u5F80\u4E0D\u80FD\u786E\u5B9A\u5B83\u7684\u7D22\u5F15\u503C\uFF0C\u751A\u81F3\u8FD8\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u89E3\u51B3\u65B9\u6CD5\uFF1A\u4F9D\u8D56\u6CE8\u5165<code>provide</code> \u548C <code>inject</code>\u3002</p><p>\u793A\u4F8B\uFF1A<code>provide() { return { getMap: this.getMap } } </code> <code>inject: [ &#39;getMap&#39; ]\`\`$refs</code>\u7684\u4F7F\u7528\uFF1A</p></li><li><p>\u7528\u4E8E\u660E\u786E\u83B7\u53D6\u5176\u4E2D\u7684\u4E00\u4E2A\u7279\u5B9A\u7684\u7EC4\u4EF6\u3002</p></li><li><p><code>$refs</code>\u548C<code>ref</code>\u6307\u4EE4\u901A\u5E38\u662F\u4E00\u8D77\u4F7F\u7528\u7684\u3002</p></li><li><p>\u9996\u5148\uFF0C\u6211\u4EEC\u901A\u8FC7<code>ref</code>\u7ED9\u67D0\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u4E00\u4E2A\u7279\u5B9A\u7684ID\u3002</p></li><li><p>\u5176\u6B21\uFF0C\u901A\u8FC7<code>this.$refs.ID</code>\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u8BE5\u7EC4\u4EF6\u4E86\u3002</p></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5B50\u8BBF\u95EE\u7236\uFF1A<code>$parent</code> <code>$root</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>new Vue({
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u52A8\u6001\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6</h2>`,21),d=n("li",null,[n("p",null,[s("\u901A\u8FC7\u4F7F\u7528\u4FDD\u7559\u7684 "),n("code",null,"<component>"),s(" \u5143\u7D20\uFF0C\u52A8\u6001\u5730\u7ED1\u5B9A\u5230\u5B83\u7684 "),n("code",null,"is"),s(" \u7279\u6027\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u7EC4\u4EF6")])],-1),v=n("p",null,[n("code",null,"<keep-alive>"),s(" \u5305\u88F9\u52A8\u6001\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u7F13\u5B58\u4E0D\u6D3B\u52A8\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F\u9500\u6BC1\u5B83\u4EEC\u3002"),n("code",null,"<keep-alive>"),s(" \u662F\u4E00\u4E2A\u62BD\u8C61\u7EC4\u4EF6\uFF1A\u5B83\u81EA\u8EAB\u4E0D\u4F1A\u6E32\u67D3\u4E00\u4E2A DOM \u5143\u7D20\uFF0C\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u5728\u7236\u7EC4\u4EF6\u94FE\u4E2D\u3002")],-1),r={href:"https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html",target:"_blank",rel:"noopener noreferrer"},m=s("https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html"),k=n("p",null,"\u6CE8\u610F\uFF1A",-1),b=n("ul",null,[n("li",null,[s("\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u7EE7\u627FVue\u7684\u6E90\u578B\uFF08\u5982"),n("code",null,"Vue.prototype.shareObj=shareObj"),s("\u5373\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u53EF\u8BBF\u95EE\u8BE5\u53D8\u91CF\uFF09")])],-1);function g(h,q){const a=c("ExternalLinkIcon");return t(),l("div",null,[o,n("ul",null,[d,n("li",null,[v,n("p",null,[n("a",r,[m,i(a)])])])]),k,b])}const _=e(u,[["render",g],["__file","componentized.html.vue"]]);export{_ as default};
