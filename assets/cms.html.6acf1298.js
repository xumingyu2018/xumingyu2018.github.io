import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,a as e,d as l,e as s,b as i,r as v}from"./app.8c0e81d7.js";const r={},c=s(`<h2 id="\u9879\u76EE\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u521D\u59CB\u5316" aria-hidden="true">#</a> \u9879\u76EE\u521D\u59CB\u5316</h2><p>\u642D\u5EFA vue3 \u811A\u624B\u67B6</p><p><code>npm init vue@latest</code></p><p>\u5B89\u88C5\u4F9D\u8D56</p><p><code>npm install</code></p><p>css \u6837\u5F0F\u91CD\u7F6E\uFF08\u7565\uFF09</p><p>\u914D\u7F6E\u8DEF\u7531\uFF08\u7565\uFF09</p><p>\u914D\u7F6E pinia \u72B6\u6001\u7BA1\u7406\uFF08\u7565\uFF09</p><p>\u914D\u7F6E axios \u7F51\u7EDC\u8BF7\u6C42 ts \u5199\u6CD5</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// service/request/index.ts
import axios from &#39;axios&#39;
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from &#39;axios&#39;

interface HYInstanceInterceptors&lt;T = AxiosResponse&gt; {
  requestInterceptor?: (config: AxiosRequestConfig) =&gt; AxiosRequestConfig
  requestInterceptorCatch?: (err: any) =&gt; any
  responseInterceptor?: (res: T) =&gt; T
  responseInterceptorCatch?: (err: any) =&gt; any
}

interface HYRequestConfig&lt;T = AxiosResponse&gt; extends AxiosRequestConfig {
  interceptors?: HYInstanceInterceptors&lt;T&gt;
}

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // \u5168\u5C40\u7684\u62E6\u622A\u5668
    this.instance.interceptors.request.use(
      (config) =&gt; {
        return config
      },
      (err) =&gt; {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) =&gt; {
        return res.data
      },
      (err) =&gt; {
        return err
      }
    )

    // \u5B9E\u4F8B\u7684\u62E6\u622A\u5668
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }

  request&lt;T = any&gt;(config: HYRequestConfig&lt;T&gt;) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return new Promise&lt;T&gt;((resolve, reject) =&gt; {
      this.instance
        .request&lt;any, T&gt;(config)
        .then((res) =&gt; {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err: any) =&gt; {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err)
          }
          reject(err)
        })
    })
  }

  get&lt;T = any&gt;(config: HYRequestConfig&lt;T&gt;) {
    return this.request&lt;T&gt;({ ...config, method: &#39;GET&#39; })
  }

  post&lt;T = any&gt;(config: HYRequestConfig&lt;T&gt;) {
    return this.request&lt;T&gt;({ ...config, method: &#39;POST&#39; })
  }

  delete&lt;T = any&gt;(config: HYRequestConfig&lt;T&gt;) {
    return this.request&lt;T&gt;({ ...config, method: &#39;DELETE&#39; })
  }

  patch&lt;T = any&gt;(config: HYRequestConfig&lt;T&gt;) {
    return this.request&lt;T&gt;({ ...config, method: &#39;PATCH&#39; })
  }
}

export default HYRequest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// service/index.ts
import HYRequest from &#39;./request&#39;
import { BASE_URL1, TIME_OUT1 } from &#39;./config&#39;
import { localCache } from &#39;@/utils/cache&#39;

const hyRequest = new HYRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) =&gt; {
      const token = localCache.getCache(&#39;token&#39;)
      if (token &amp;&amp; config.headers) {
        config.headers.Authorization = \`Bearer \${token}\`
      }
      return config
    },
    requestInterceptorCatch: (err) =&gt; {
      return err
    },
    responseInterceptor: (res) =&gt; {
      return res
    },
    responseInterceptorCatch: (err) =&gt; {
      return err
    }
  }
})

export default hyRequest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// service/config/index.ts
export const BASE_URL1 = &#39;http://152.136.185.210:5000&#39;
export const TIME_OUT1 = 10000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u751F\u4EA7\u73AF\u5883\u548C\u5F00\u53D1\u73AF\u5883\uFF08\u7565\uFF09</p><h2 id="\u6309\u9700\u5F15\u5165-element-plus" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5F15\u5165-element-plus" aria-hidden="true">#</a> \u6309\u9700\u5F15\u5165 Element-Plus</h2><p>\u5B89\u88C5\u63D2\u4EF6<code>npm install -D unplugin-vue-components unplugin-auto-import</code></p><p>\u7136\u540E\u628A\u4E0B\u5217\u4EE3\u7801\u63D2\u5165\u5230\u4F60\u7684 Vite \u6216 Webpack \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D</p><p><strong>Vite</strong></p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// vite.config.ts
import { defineConfig } from &#39;vite&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;
import Components from &#39;unplugin-vue-components/vite&#39;
import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Webpack</strong></p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// webpack.config.js
const AutoImport = require(&#39;unplugin-auto-import/webpack&#39;)
const Components = require(&#39;unplugin-vue-components/webpack&#39;)
const { ElementPlusResolver } = require(&#39;unplugin-vue-components/resolvers&#39;)

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u767B\u5F55\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u767B\u5F55\u9875\u9762" aria-hidden="true">#</a> \u5B9E\u73B0\u767B\u5F55\u9875\u9762</h2><p><img src="https://secure2.wostatic.cn/static/hEmsB97qM1Pqq5HXqCahJc/image.png?auth_key=1692714182-myJuyHE6qti9wzkRprRRBu-0-fd1929b0a826ccee7cdac4d32098762e" alt=""></p><h3 id="\u8BBE\u7F6E-app-\u5BBD\u9AD8\u94FA\u6EE1\u5C4F\u5E55" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-app-\u5BBD\u9AD8\u94FA\u6EE1\u5C4F\u5E55" aria-hidden="true">#</a> \u8BBE\u7F6E App \u5BBD\u9AD8\u94FA\u6EE1\u5C4F\u5E55</h3><p>\u6CE8\u610F\u8FD9\u91CC\u4E0D\u80FD\u7528%\u53F7</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;style scoped&gt;
.app {
  /* \u4E0D\u80FD\u4F7F\u7528%\uFF0C\u56E0\u4E3A\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\uFF1Bvh\u76F8\u5BF9\u4E8E\u89C6\u53E3 */
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u642D\u5EFA\u540E\u53F0\u7BA1\u7406\u5E10\u53F7\u767B\u5F55\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u540E\u53F0\u7BA1\u7406\u5E10\u53F7\u767B\u5F55\u9875\u9762" aria-hidden="true">#</a> \u642D\u5EFA\u540E\u53F0\u7BA1\u7406\u5E10\u53F7\u767B\u5F55\u9875\u9762</h3><h4 id="login-\u7236\u7EC4\u4EF6\u8BBE\u7F6E\u80CC\u666F\u53CA\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#login-\u7236\u7EC4\u4EF6\u8BBE\u7F6E\u80CC\u666F\u53CA\u4F4D\u7F6E" aria-hidden="true">#</a> Login \u7236\u7EC4\u4EF6\u8BBE\u7F6E\u80CC\u666F\u53CA\u4F4D\u7F6E</h4><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;!-- Login.vue --&gt;
&lt;template&gt;
  &lt;div class=&quot;login&quot;&gt;
    &lt;login-panel /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import loginPanel from &#39;./cpns/login-panel.vue&#39;
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: url(../../assets/img/login-bg.svg);
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5168\u5C40\u56FE\u6807\u53CA-elmessage-\u7EC4\u4EF6\u7B49\u6837\u5F0F\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u56FE\u6807\u53CA-elmessage-\u7EC4\u4EF6\u7B49\u6837\u5F0F\u5F15\u5165" aria-hidden="true">#</a> \u5168\u5C40\u56FE\u6807\u53CA ElMessage \u7EC4\u4EF6\u7B49\u6837\u5F0F\u5F15\u5165</h4><p>\u56FE\u6807\u5F15\u5165\u5B89\u88C5\uFF1A<code>npm install @element-plus/icons-vue</code></p><p>ElMessage \u7EC4\u4EF6\u7B49\u6837\u5F0F\u5F15\u5165\u5B89\u88C5\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// \u56FE\u6807\u7684\u5168\u5C40\u6CE8\u518C
// global/register-icons.ts
import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;
import type { App } from &#39;vue&#39;

function registerIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.ts \u4E2D\u8FDB\u884C\u6CE8\u518C</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import &#39;normalize.css&#39;
import router from &#39;./router&#39;
import pinia from &#39;./store&#39;
import registerIcons from &#39;./global/register-icons&#39;

// \u9488\u5BF9ElMessage\u548CElLoading\u7B49\u7EC4\u4EF6\u5F15\u5165\u6837\u5F0F(\u624B\u52A8\u6309\u9700\u5F15\u5165)
import &#39;element-plus/theme-chalk/el-message.css&#39;

// \u5168\u5C40\u6CE8\u518Celement-plus
// import ElementPlus from &#39;element-plus&#39;
// import &#39;element-plus/dist/index.css&#39;

// \u5B89\u88C5vite-plugin-style-import/consola\u5E76\u914D\u7F6Evite.config.ts\uFF08\u81EA\u52A8\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF09

createApp(App).use(router).use(pinia).use(registerIcons).mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u73B0\u767B\u5F55\u9762\u677F\u7236\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u767B\u5F55\u9762\u677F\u7236\u7EC4\u4EF6" aria-hidden="true">#</a> \u5B9E\u73B0\u767B\u5F55\u9762\u677F\u7236\u7EC4\u4EF6</h4><p>\u6D89\u53CA\u5230\u7684 Element-Plus \u7EC4\u4EF6\u6709<code>el-tabs(\u9009\u9879\u5361)</code>\u3001<code>el-check(\u8BB0\u4F4F\u5BC6\u7801\u52FE\u9009\u6846)</code>\u3001<code>el-button(\u7ACB\u5373\u767B\u5F55)</code>\u3001<code>el-link(\u8BB0\u4F4F\u5BC6\u7801/\u5FD8\u8BB0\u5BC6\u7801)</code>\u3001<code>el-icon(\u9009\u9879\u5361\u56FE\u6807)</code></p><p>tabs \u4E2D\u63D2\u5165\u56FE\u6807\u9700\u8981\u7528\u5230<code>label</code>\u63D2\u69FD<code>&lt;template #label&gt;...&lt;/template&gt;</code></p><p>tabs \u4E2D\u901A\u8FC7 v-model \u7ED1\u5B9A\u9009\u9879\u5361\u7684 name</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;!-- login-panel.vue --&gt;
&lt;template&gt;
  &lt;div class=&quot;login-panel&quot;&gt;
    &lt;!-- \u9876\u90E8\u6807\u9898 --&gt;
    &lt;h1 class=&quot;title&quot;&gt;\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF&lt;/h1&gt;

    &lt;!-- tabs\u6807\u7B7E\u9875 --&gt;
    &lt;div class=&quot;tabs&quot;&gt;
      &lt;el-tabs v-model=&quot;activeName&quot; type=&quot;border-card&quot; stretch=&quot;true&quot;&gt;
        &lt;el-tab-pane label=&quot;\u5E10\u53F7\u767B\u5F55&quot; name=&quot;account&quot;&gt;

          &lt;!-- \u56FE\u6807\u63D2\u69FD --&gt;
          &lt;template #label&gt;
            &lt;div class=&quot;label&quot;&gt;
              &lt;el-icon&gt;&lt;UserFilled /&gt;&lt;/el-icon&gt;
              &lt;span class=&quot;text&quot;&gt;\u5E10\u53F7\u767B\u5F55&lt;/span&gt;
            &lt;/div&gt;
          &lt;/template&gt;

          &lt;!-- pane-account\u5B50\u7EC4\u4EF6 --&gt;
          &lt;pane-account ref=&quot;accountRef&quot;/&gt;
        &lt;/el-tab-pane&gt;

        &lt;el-tab-pane label=&quot;\u624B\u673A\u767B\u5F55&quot; name=&quot;phone&quot;&gt;
          &lt;!-- \u56FE\u6807\u63D2\u69FD --&gt;
          &lt;template #label&gt;
            &lt;div class=&quot;label&quot;&gt;
              &lt;el-icon&gt;&lt;Cellphone /&gt;&lt;/el-icon&gt;
              &lt;div class=&quot;text&quot;&gt;\u624B\u673A\u767B\u5F55&lt;/div&gt;
            &lt;/div&gt;
          &lt;/template&gt;
          &lt;div&gt;\u624B\u673A\u767B\u5F55&lt;/div&gt;
          &lt;div&gt;\u9A8C\u8BC1\u7801&lt;/div&gt;
        &lt;/el-tab-pane&gt;
      &lt;/el-tabs&gt;
    &lt;/div&gt;

    &lt;!-- \u5E95\u90E8\u533A\u57DF --&gt;
    &lt;div class=&quot;controls&quot;&gt;
      &lt;el-checkbox v-model=&quot;isRemPwd&quot; label=&quot;\u8BB0\u4F4F\u5BC6\u7801&quot; size=&quot;large&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-link type=&quot;primary&quot; href=&quot;&quot;&gt;\u5FD8\u8BB0\u5BC6\u7801&lt;/el-link&gt;
    &lt;/div&gt;

    &lt;el-button class=&quot;login-btn&quot; type=&quot;primary&quot; size=&quot;large&quot; @click=&quot;handleLoginBtnClick&quot;&gt;
      \u7ACB\u5373\u767B\u5F55
    &lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import paneAccount from &#39;./pane-account.vue&#39;

const activeName = ref(&#39;account&#39;)
const isRemPwd = ref(false)
const accountRef = ref&lt;InstanceType&lt;typeof paneAccount&gt;&gt;()

// \u6309\u94AE\u76D1\u542C
const handleLoginBtnClick = () =&gt; {
  if (activeName.value === &#39;account&#39;) {
    // \u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5
    accountRef.value?.loginAction()
  } else {
    console.log(&#39;\u624B\u673A\u767B\u5F55&#39;)
  }
}
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.login-panel {
  width: 330px;

  .title {
    text-align: center;
  }

  .label {
    display: flex;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5\u9762\u677F\u4E2D\u767B\u5F55\u8868\u5355\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u9762\u677F\u4E2D\u767B\u5F55\u8868\u5355\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C01\u88C5\u9762\u677F\u4E2D\u767B\u5F55\u8868\u5355\u5B50\u7EC4\u4EF6</h4><p>\u6D89\u53CA\u5230\u7684 Element-Plus \u7EC4\u4EF6\u6709<code>el-form</code>\u3001<code>el-input</code>\u3001<code>el-message</code></p><p><code>form</code>\u7684\u6821\u9A8C\u89C4\u5219\u9700\u8981\u4F7F\u7528\u5230<code>FormRules</code></p><p><code>form</code>\u7684\u901A\u8FC7\u9A8C\u8BC1\u9700\u8981\u4F7F\u7528<code>formRef.value.validate()</code></p><p><code>defineExpose</code>\u5C06\u5B50\u7EC4\u4EF6\u7684\u7528\u6237\u540D/\u5BC6\u7801\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u767B\u5F55\u903B\u8F91\uFF08\u6D89\u53CA pinia\u3001axios\uFF09</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>&lt;!-- pane-account.vue --&gt;
&lt;template&gt;
  &lt;div class=&quot;account&quot;&gt;
    &lt;el-form :model=&quot;account&quot; label-width=&quot;60px&quot; size=&quot;large&quot; :rules=&quot;accountRules&quot; status-icon ref=&quot;formRef&quot;&gt;
        &lt;el-form-item label=&quot;\u5E10\u53F7&quot; prop=&quot;username&quot;&gt;
            &lt;el-input v-model=&quot;account.username&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5E10\u53F7&quot;&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
        &lt;el-form-item label=&quot;\u5BC6\u7801&quot; prop=&quot;password&quot;&gt;
            &lt;el-input v-model=&quot;account.password&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; show-password&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
    &lt;/el-form&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, ref } from &quot;vue&quot;
import type { ElForm, FormRules } from &#39;element-plus&#39;
import { ElMessage } from &#39;element-plus&#39;
import useLoginStore from &#39;@/store/login/login&#39;
import type { IAccount } from &#39;@/types&#39;

// \u5B9A\u4E49account\u6570\u636E
const account = reactive&lt;IAccount&gt;({
  username: &#39;&#39;,
  password: &#39;&#39;
})

// \u5B9A\u4E49\u6821\u9A8C\u89C4\u5219
const accountRules: FormRules = {
  username: [
    { required: true, message: &#39;\u5FC5\u987B\u8F93\u5165\u7528\u6237\u540D&#39;, trigger: &#39;blur&#39; },
    { pattern: /^[a-z0-9]{6,20}$/, message: &#39;\u5FC5\u987B\u662F6\uFF5E20\u4F4D\u4EE5\u5C0F\u5199\u5B57\u6BCD\u6216\u6570\u5B57\u5F00\u5934&#39;, trigger: &#39;blur&#39; },
  ],
  password: [
    { required: true, message: &#39;\u5FC5\u987B\u8F93\u5165\u5BC6\u7801&#39;, trigger: &#39;blur&#39;},
    { min: 3, max: 11, message: &#39;\u957F\u5EA6\u5FC5\u987B\u57283~11\u4E2A\u5B57\u7B26&#39;, trigger: &#39;blur&#39;}
  ]
}

// \u6267\u884C\u5E10\u53F7\u767B\u5F55\u903B\u8F91
const formRef = ref&lt;InstanceType&lt;typeof ElForm&gt;&gt;()
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid: any) =&gt; {
    if(valid) {
        const username = account.username
        const password = account.password

        loginStore.loginAccountAction({ username, password })
    } else {
        ElMessage.error(&#39;Oops, \u8BF7\u8F93\u5165\u6B63\u786E\u7684\u683C\u5F0F.&#39;)
    }
  })
}
// \u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6
defineExpose({
    loginAction
})

&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u903B\u8F91" aria-hidden="true">#</a> \u5B9E\u73B0\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u903B\u8F91</h3><h4 id="\u5C01\u88C5-iaccount-\u5BF9\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-iaccount-\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u5C01\u88C5 IAccount \u5BF9\u8C61\u7C7B\u578B</h4><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// types/login.ts
export interface IAccount {
    username: string,
    password: string
}

// types/index.ts(\u7EDF\u4E00\u5BFC\u51FA)
export * from &#39;./login&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5-axios-\u767B\u5F55\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-axios-\u767B\u5F55\u8BF7\u6C42" aria-hidden="true">#</a> \u5C01\u88C5 axios \u767B\u5F55\u8BF7\u6C42</h4><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>import hyRequest from &quot;..&quot;
import type { IAccount } from &quot;@/types&quot;

export function accountLoginRequest(account: IAccount) {
    return hyRequest.post({
        url: &#39;/login&#39;,
        data: account
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528-pinia-\u5B58\u50A8\u8BF7\u6C42\u6570\u636E-\u5728pane-account\u7EC4\u4EF6\u4E2D\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-pinia-\u5B58\u50A8\u8BF7\u6C42\u6570\u636E-\u5728pane-account\u7EC4\u4EF6\u4E2D\u8C03\u7528" aria-hidden="true">#</a> \u4F7F\u7528 pinia \u5B58\u50A8\u8BF7\u6C42\u6570\u636E(\u5728<code>pane-account</code>\u7EC4\u4EF6\u4E2D\u8C03\u7528)</h4><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// store/index.ts
// \u521D\u59CB\u5316pinia
import { createPinia } from &quot;pinia&quot;;

const pinia = createPinia()

export default pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// store/login/login.ts
import { defineStore } from &quot;pinia&quot;;
import { accountLoginRequest } from &#39;@/service/login/login&#39;
import type { IAccount } from &quot;@/types&quot;;
import { localCache } from &quot;@/utils/cache&quot;;

const useLoginStore = defineStore(&#39;login&#39;, {
    state: () =&gt; ({
        id: &#39;&#39;,
        // token: localStorage.getItem(&#39;token&#39;) ?? &#39;&#39;,
        token: localCache.getCache(&#39;token&#39;) ?? &#39;&#39;,
        username: &#39;&#39;
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            const loginResult = await accountLoginRequest(account)
            console.log(&quot;\u767B\u5F55\u6210\u529F&quot;);
            this.id = loginResult.data.id
            this.token = loginResult.data.token
            this.username = loginResult.data.username

            // \u8FDB\u884C\u672C\u5730\u7F13\u5B58
            // localStorage.setItem(&#39;token&#39;, this.token)
            localCache.setCache(&#39;token&#39;, this.token)
        }
    }
})

export default useLoginStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5\u672C\u5730\u7F13\u5B58-token-\u5DE5\u5177-localstorage\u3001sessionstorage" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u672C\u5730\u7F13\u5B58-token-\u5DE5\u5177-localstorage\u3001sessionstorage" aria-hidden="true">#</a> \u5C01\u88C5\u672C\u5730\u7F13\u5B58 token \u5DE5\u5177\uFF08localStorage\u3001sessionStorage\uFF09</h4><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// utils/cache.ts
enum CacheType {
  local = &#39;local&#39;,
  session = &#39;session&#39;
}

class MyCache {
  storage: Storage

  // \u5224\u65AD\u662FlocalStorage\u8FD8\u662FsessionStorage
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new MyCache(CacheType.local)
const sessionCache = new MyCache(CacheType.session)

export { localCache, sessionCache }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u767B\u5F55\u62E6\u622A-\u8DEF\u7531\u5BFC\u822A\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u62E6\u622A-\u8DEF\u7531\u5BFC\u822A\u5B88\u536B" aria-hidden="true">#</a> \u767B\u5F55\u62E6\u622A\uFF08\u8DEF\u7531\u5BFC\u822A\u5B88\u536B\uFF09</h4><p><code>router.beforeEach(to, from)</code></p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// router/index.ts
import { localCache } from &#39;@/utils/cache&#39;
import { createRouter, createWebHashHistory } from &#39;vue-router&#39;

const router = createRouter({
  // ...
})

router.beforeEach((to, from) =&gt; {
  const token = localCache.getCache(&#39;token&#39;)

  if(to.path === &#39;/main&#39; &amp;&amp; !token) {
      return &#39;/login&#39;
  }
})

export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u8BB0\u4F4F\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u8BB0\u4F4F\u5BC6\u7801" aria-hidden="true">#</a> \u5B9E\u73B0\u8BB0\u4F4F\u5BC6\u7801</h3><p>\u7236\u7EC4\u4EF6\u5C06<code>isRemPwd</code>\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u5B50\u7EC4\u4EF6\u767B\u5F55\u903B\u8F91\uFF0C\u5224\u65AD<code>isRemPwd</code>\u7684\u5E03\u5C14\u503C\uFF0C\u6765\u9009\u62E9\u662F\u5426\u5B58\u5165\u6216\u5220\u9664<code>LocalStore</code>\u672C\u5730\u7F13\u5B58\uFF0C\u518D\u83B7\u53D6\u672C\u5730\u7F13\u5B58\u5C06\u503C\u8D4B\u503C\u7ED9\u521D\u59CB\u5316\u7684<code>username</code>\u548C<code>password</code>\u8FDB\u884C\u56DE\u663E\u3002\u5C06\u52FE\u9009\u6846\u662F\u5426\u9009\u4E2D\u4E5F\u4F5C\u4E3A<code>LocalStore</code>\u7F13\u5B58\u5B58\u5165\u3002</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// \u7236\u7EC4\u4EF6login-panel
// ...
const isRemPwd = ref&lt;boolean&gt;(localCache.getCache(&#39;isRemPwd&#39;) ?? false)
watch(isRemPwd, (newValue) =&gt; {
  localCache.setCache(&#39;isRemPwd&#39;, newValue)
})

// ...
// \u6309\u94AE\u76D1\u542C
const handleLoginBtnClick = () =&gt; {
  if (activeName.value === &#39;account&#39;) {
    // \u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log(&#39;\u624B\u673A\u767B\u5F55&#39;)
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>
// \u5B9A\u4E49account\u6570\u636E
const account = reactive&lt;IAccount&gt;({
  username: localCache.getCache(&#39;username&#39;) ?? &#39;&#39;,
  password: localCache.getCache(&#39;password&#39;) ?? &#39;&#39;
})

// \u6267\u884C\u5E10\u53F7\u767B\u5F55\u903B\u8F91
// ...
function loginAction(isRemPwd: boolean) {
  formRef.value?.validate((valid: any) =&gt; {
    if(valid) {
        const username = account.username
        const password = account.password

        // \u8C03\u7528store\u4E2D\u7684loginAccountAction(pinia)
        loginStore.loginAccountAction({ username, password }).then((res) =&gt; {
          // \u767B\u5F55\u6210\u529F\u540E\u8BB0\u4F4F\u5BC6\u7801
          if(isRemPwd) {
            localCache.setCache(&#39;username&#39;, username)
            localCache.setCache(&#39;password&#39;, password)
          } else {
            localCache.deleteCache(&#39;username&#39;)
            localCache.deleteCache(&#39;password&#39;)
          }
        })
    } else {
        ElMessage.error(&#39;\u9519\u8BEF, \u8BF7\u8F93\u5165\u6B63\u786E\u7684\u683C\u5F0F\uFF01&#39;)
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u83B7\u53D6\u767B\u5F55\u7528\u6237\u8BE6\u7EC6\u4FE1\u606F-\u5305\u62EC\u89D2\u8272\u6743\u9650\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u83B7\u53D6\u767B\u5F55\u7528\u6237\u8BE6\u7EC6\u4FE1\u606F-\u5305\u62EC\u89D2\u8272\u6743\u9650\u83DC\u5355" aria-hidden="true">#</a> \u5B9E\u73B0\u83B7\u53D6\u767B\u5F55\u7528\u6237\u8BE6\u7EC6\u4FE1\u606F\uFF08\u5305\u62EC\u89D2\u8272\u6743\u9650\u83DC\u5355\uFF09</h3><h4 id="\u5C01\u88C5-axios-\u63A5\u53E3\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-axios-\u63A5\u53E3\u8BF7\u6C42" aria-hidden="true">#</a> \u5C01\u88C5 axios \u63A5\u53E3\u8BF7\u6C42</h4><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// \u83B7\u53D6\u7528\u6237\u8BE6\u7EC6\u4FE1\u606F
export function getUserInfoById(id: number) {
    return hyRequest.get({
        url: \`/users/\${id}\`,
        // headers: {
        //     Authorization: &#39;Bearer &#39; + localCache.getCache(&#39;token&#39;)
        // }
    })
}

// \u83B7\u53D6\u89D2\u8272\u6743\u9650\u4FE1\u606F
export function getUserMenusByRoleId(id: number) {
    return hyRequest.get({
        url: \`/role/\${id}/menu\`,
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528-pinia-\u5B58\u50A8\u8BF7\u6C42\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-pinia-\u5B58\u50A8\u8BF7\u6C42\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 pinia \u5B58\u50A8\u8BF7\u6C42\u6570\u636E</h4><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore(&#39;login&#39;, {
    state: (): ILoginState =&gt; ({
        token: localCache.getCache(&#39;token&#39;) ?? &#39;&#39;,
        userInfo: {},
        userMenus: {}
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // 1. \u5E10\u53F7\u767B\u5F55\uFF0Caxios\u83B7\u53D6token\u7B49\u4FE1\u606F
            const loginResult = await accountLogin(account)
            const id = loginResult.data.id
            this.token = loginResult.data.token

            // 2. \u8FDB\u884C\u672C\u5730\u7F13\u5B58\uFF08\u4F7F\u7528\u5C01\u88C5\u7684cache\u5DE5\u5177\uFF09
            localCache.setCache(&#39;token&#39;, this.token)

            // 3.\u83B7\u53D6\u767B\u5F55\u7528\u6237\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF08role\u89D2\u8272\u4FE1\u606F\uFF09
            const userInfoResult = await getUserInfoById(id)
            this.userInfo = userInfoResult.data

            // 4.\u6839\u636E\u89D2\u8272\u8BF7\u6C42\u7528\u6237\u7684\u6743\u9650\uFF08\u83DC\u5355menus\uFF09
            const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
            this.userMenus = userMenusResult.data

            //  \u9875\u9762\u8DF3\u8F6C
            router.push(&#39;/main&#39;)
        }
    }
})

export default useLoginStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u4E3B\u9875\u5DE6\u4FA7\u5BFC\u822A\u680F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E3B\u9875\u5DE6\u4FA7\u5BFC\u822A\u680F" aria-hidden="true">#</a> \u5B9E\u73B0\u4E3B\u9875\u5DE6\u4FA7\u5BFC\u822A\u680F</h2><p><img src="https://secure2.wostatic.cn/static/k1FTgme1ezTAH36tihiQ15/image.png?auth_key=1692714258-eBCxE2MWbDGHuwFKHMNuTS-0-d6c434ac984a7a4498961fa74809b3f0" alt=""></p><h3 id="\u6574\u4F53\u5BB9\u5668\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u6574\u4F53\u5BB9\u5668\u5E03\u5C40" aria-hidden="true">#</a> \u6574\u4F53\u5BB9\u5668\u5E03\u5C40</h3><p>\u4F7F\u7528<code>el-container</code>\u5305\u88F9\u4FA7\u8FB9\u680F\u5BB9\u5668<code>el-aside</code>\u4EE5\u53CA\u5305\u88F9<code>el-header</code>\u9876\u680F\u5BB9\u5668\u548C<code>el-main</code>\u4E3B\u8981\u533A\u57DF\u5BB9\u5668\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;div class=&quot;main&quot;&gt;
    &lt;el-container class=&quot;main-content&quot;&gt;
      // \u5DE6\u4FA7\u5BFC\u822A\u680F
      &lt;el-aside width=&quot;210px&quot;&gt;
        &lt;main-menu/&gt;
      &lt;/el-aside&gt;
      &lt;el-container&gt;
        &lt;el-header height=&quot;50px&quot;&gt;Header&lt;/el-header&gt;
        &lt;el-main&gt;
          // \u8DEF\u7531\u5360\u4F4D
          &lt;router-view/&gt;
        &lt;/el-main&gt;
      &lt;/el-container&gt;
    &lt;/el-container&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.main {
  color: red;
  height: 100%;

  .main-content {
    height: 100%;

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &amp;::-webkit-scrollbar {
        display: none;
      }
    }

    .el-main {
      background-color: #f0f2f5;
    }
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5DE6\u4FA7\u5BFC\u822A\u680F\u9759\u6001\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5DE6\u4FA7\u5BFC\u822A\u680F\u9759\u6001\u5E03\u5C40" aria-hidden="true">#</a> \u5B9E\u73B0\u5DE6\u4FA7\u5BFC\u822A\u680F\u9759\u6001\u5E03\u5C40</h3><p>\u4F7F\u7528<code>elementUI</code>\u4E2D\u83DC\u5355<code>menu</code>\u7EC4\u4EF6\u7531<code>el-menu</code>\u3001<code>el-sub-menu</code>\uFF08\u9700\u8981\u4F7F\u7528\u63D2\u69FD\uFF09\u3001<code>el-menu-item</code>\u7EC4\u6210\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;div class=&quot;main-menu&quot;&gt;
    &lt;div class=&quot;logo&quot;&gt;
      &lt;img class=&quot;img&quot; src=&quot;@/assets/img/logo.svg&quot; alt=&quot;\u56FE\u6807&quot; /&gt;
      &lt;h2 class=&quot;title&quot;&gt;\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;menu&quot;&gt;
      &lt;el-menu
        :default-active=&quot;defaultValue&quot;
        :collapse=&quot;isFold&quot;
        text-color=&quot;#b7bdc3&quot;
        active-text-color=&quot;#fff&quot;
        background-color=&quot;#001529&quot;
      &gt;
        &lt;el-sub-menu index=&quot;1&quot;&gt;
          &lt;!-- \u63D2\u69FD --&gt;
          &lt;template #title&gt;
            &lt;el-icon&gt;&lt;Monitor /&gt;&lt;/el-icon&gt;
            &lt;span&gt;\u7CFB\u7EDF\u603B\u89C8&lt;/span&gt;
          &lt;/template&gt;
          &lt;el-menu-item&gt;\u6838\u5FC3\u6280\u672F&lt;/el-menu-item&gt;
          &lt;el-menu-item&gt;\u5546\u54C1\u7EDF\u8BA1&lt;/el-menu-item&gt;
        &lt;/el-sub-menu&gt;

        &lt;el-sub-menu index=&quot;2&quot;&gt;
          &lt;template #title&gt;
            &lt;el-icon&gt;&lt;location /&gt;&lt;/el-icon&gt;
            &lt;span&gt;\u7CFB\u7EDF\u7BA1\u7406&lt;/span&gt;
          &lt;/template&gt;
          &lt;el-menu-item&gt;\u7528\u6237\u7BA1\u7406&lt;/el-menu-item&gt;
          &lt;el-menu-item&gt;\u90E8\u95E8\u7BA1\u7406&lt;/el-menu-item&gt;
          &lt;el-menu-item&gt;\u83DC\u5355\u7BA1\u7406&lt;/el-menu-item&gt;
          &lt;el-menu-item&gt;\u89D2\u8272\u7BA1\u7406&lt;/el-menu-item&gt;
        &lt;/el-sub-menu&gt;
      &lt;/el-menu&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.main-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5DE6\u4FA7\u5BFC\u822A\u680F\u52A8\u6001\u5C55\u793A\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5DE6\u4FA7\u5BFC\u822A\u680F\u52A8\u6001\u5C55\u793A\u6548\u679C" aria-hidden="true">#</a> \u5B9E\u73B0\u5DE6\u4FA7\u5BFC\u822A\u680F\u52A8\u6001\u5C55\u793A\u6548\u679C</h3><p>\u9996\u5148\u5C06\u7528\u6237\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u6743\u9650\u4FE1\u606F\u7F13\u5B58\u5904\u7406\uFF08\u5237\u65B0\u65F6\u4F9D\u7136\u5B58\u5728\uFF09\uFF0C\u7136\u540E\u4F7F\u7528<code>&lt;template v-for=&quot;&quot;&gt;</code>\u3001<code>mustache</code>\u8868\u8FBE\u5F0F\u52A8\u6001\u904D\u5386\u5373\u53EF\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// \u767B\u5F55\u65F6store\u7F13\u5B58\u7528\u6237\u6743\u9650\u4FE1\u606F
state: (): ILoginState =&gt; ({
    // ...
    userInfo: localCache.getCache(&#39;userInfo&#39;) ?? {},
    userMenus: localCache.getCache(&#39;userMenus&#39;) ?? []
}),
actions: {
    async loginAccountAction(account: IAccount) {
        // ....
        // \u8FDB\u884C\u7528\u6237\u6743\u9650\u4FE1\u606F\u7F13\u5B58
        localCache.setCache(&#39;userInfo&#39;, this.userInfo)
        localCache.setCache(&#39;userMenus&#39;, this.userMenus)

        //  \u9875\u9762\u8DF3\u8F6C
        router.push(&#39;/main&#39;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;div class=&quot;main-menu&quot;&gt;
    &lt;div class=&quot;logo&quot;&gt;
      &lt;img class=&quot;img&quot; src=&quot;@/assets/img/logo.svg&quot; alt=&quot;\u56FE\u6807&quot; /&gt;
      &lt;h2 class=&quot;title&quot;&gt;\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;menu&quot;&gt;
      &lt;el-menu
        :default-active=&quot;defaultValue&quot;
        :collapse=&quot;isFold&quot;
        text-color=&quot;#b7bdc3&quot;
        active-text-color=&quot;#fff&quot;
        background-color=&quot;#001529&quot;
      &gt;
        &lt;template v-for=&quot;item in userMenus&quot; :key=&quot;item.id&quot;&gt;
          &lt;!-- \u5B50\u83DC\u5355 --&gt;
          &lt;el-sub-menu :index=&quot;item.id + &#39;&#39;&quot;&gt;
            &lt;template #title&gt;
              &lt;span&gt;{{ item.name }}&lt;/span&gt;
            &lt;/template&gt;

            &lt;!-- \u5B50\u83DC\u5355\u7684\u6BCF\u4E00\u9879 --&gt;
            &lt;template v-for=&quot;subItem in item.children&quot; :key=&quot;subItem.id&quot;&gt;
              &lt;el-menu-item :index=&quot;subItem.id + &#39;&#39;&quot; @click=&quot;handleItemClick(subItem)&quot;&gt;{{ subItem.name }}&lt;/el-menu-item&gt;
            &lt;/template&gt;
          &lt;/el-sub-menu&gt;
        &lt;/template&gt;
      &lt;/el-menu&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import useLoginStore from &#39;@/store/login/login&#39;;

const loginStore = useLoginStore();
const userMenus = loginStore.userMenus

function handleItemClick(subItem: any) {
  const url = subItem.url
  router.push(url)
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BFC\u822A\u680F\u56FE\u6807\u7684\u52A8\u6001\u7EC4\u4EF6-\u7EC6\u8282\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u680F\u56FE\u6807\u7684\u52A8\u6001\u7EC4\u4EF6-\u7EC6\u8282\u5904\u7406" aria-hidden="true">#</a> \u5BFC\u822A\u680F\u56FE\u6807\u7684\u52A8\u6001\u7EC4\u4EF6\uFF08\u7EC6\u8282\u5904\u7406\uFF09</h3><p>\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u662F\u5B57\u7B26\u4E32<code>el-icon-monitor</code>\uFF0C\u9700\u8981\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6<code>componet</code>\u6765\u5904\u7406\u56FE\u6807\u5B57\u7B26\u4E32\u5E76\u4E14\u4F7F\u7528<code>split</code>\u51FD\u6570\u5206\u9694\u5B57\u7B26\u4E32\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;!-- \u5B50\u83DC\u5355 --&gt;
&lt;el-sub-menu :index=&quot;item.id + &#39;&#39;&quot;&gt;
  &lt;template #title&gt;
    &lt;el-icon&gt;
      &lt;component :is=&quot;item.icon.split(&#39;-icon-&#39;)[1]&quot;/&gt;
    &lt;/el-icon&gt;
    &lt;span&gt;{{ item.name }}&lt;/span&gt;
  &lt;/template&gt;
  // .......
&lt;/el-sub-menu&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BFC\u822A\u680F\u6CE8\u518C\u6240\u6709\u9759\u6001\u8DEF\u7531-\u6709\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u680F\u6CE8\u518C\u6240\u6709\u9759\u6001\u8DEF\u7531-\u6709\u7F3A\u9677" aria-hidden="true">#</a> \u5BFC\u822A\u680F\u6CE8\u518C\u6240\u6709\u9759\u6001\u8DEF\u7531\uFF08\u6709\u7F3A\u9677\uFF09</h3><p>\u5F53\u7528\u6237\u6CA1\u6709\u6743\u9650\u65F6\uFF0C\u53EF\u4EE5\u624B\u52A8\u5728\u5730\u5740\u680F\u8F93\u5165 url \u53BB\u8BBF\u95EE\u6CA1\u6709\u6743\u9650\u7684\u9875\u9762\u3002\u540E\u9762\u4F7F\u7528\u52A8\u6001\u8DEF\u7531\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>{
  path: &#39;/main&#39;,
  component: () =&gt; import(&#39;../views/main/Main.vue&#39;),
  children: [
    {
      path: &#39;/main/analysis/overview&#39;,
      component: () =&gt; import(&#39;../views/main/analysis/overview/overview.vue&#39;)
    },
    {
      path: &#39;/main/analysis/dashboard&#39;,
      component: () =&gt; import(&#39;../views/main/analysis/dashboard/dashboard.vue&#39;)
    },
    {
      path: &#39;/main/system/role&#39;,
      component: () =&gt; import(&#39;../views/main/system/role/role.vue&#39;)
    },
    {
      path: &#39;/main/system/user&#39;,
      component: () =&gt; import(&#39;../views/main/system/user/user.vue&#39;)
    },
    // ...
  ]
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u4E3B\u9875\u5934\u90E8\u9762\u5305\u5C51" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E3B\u9875\u5934\u90E8\u9762\u5305\u5C51" aria-hidden="true">#</a> \u5B9E\u73B0\u4E3B\u9875\u5934\u90E8\u9762\u5305\u5C51</h2><p><img src="https://secure2.wostatic.cn/static/qtx8xmpZnWgke1ogQXaq5n/image.png" alt=""></p><h3 id="\u642D\u5EFA\u6574\u4F53\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u6574\u4F53\u5E03\u5C40" aria-hidden="true">#</a> \u642D\u5EFA\u6574\u4F53\u5E03\u5C40</h3><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;div class=&quot;main-header&quot;&gt;
    &lt;div class=&quot;menu-icon&quot; @click=&quot;handleMenuIconClick&quot;&gt;
      &lt;el-icon size=&quot;28px&quot;&gt;
        &lt;el-icon&gt;&lt;Fold /&gt;&lt;/el-icon&gt;
      &lt;/el-icon&gt;
    &lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
      &lt;div class=&quot;breadcrumb&quot;&gt;\u9762\u5305\u5C51&lt;/div&gt;
      &lt;div class=&quot;info&quot;&gt;\u4E2A\u4EBA\u4FE1\u606F&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5934\u90E8\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB\u6298\u53E0\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5934\u90E8\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB\u6298\u53E0\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u5934\u90E8\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB\u6298\u53E0\u529F\u80FD</h3><p>\u7531<code>main-header</code>\u5B50\u7EC4\u4EF6\u901A\u8FC7<code>defineEmits</code>\u5C06\u6298\u53E0\u72B6\u6001<code>isFold</code>\u4F20\u5165\u7ED9\u7236\u7EC4\u4EF6<code>main</code>\u4E2D\u7684<code>el-aside</code>\u4ECE\u800C\u63A7\u5236\u5176\u5BBD\u5EA6\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// main-header.vue
&lt;template&gt;
  &lt;div class=&quot;main-header&quot;&gt;
    &lt;div class=&quot;menu-icon&quot; @click=&quot;handleMenuIconClick&quot;&gt;
      &lt;el-icon size=&quot;28px&quot;&gt;
        &lt;component :is=&quot;isFold ? &#39;Expand&#39; : &#39;Fold&#39;&quot;/&gt;
      &lt;/el-icon&gt;
    &lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
      &lt;div class=&quot;breadcrumb&quot;&gt;\u9762\u5305\u5C51&lt;/div&gt;
      &lt;div class=&quot;info&quot;&gt;\u4E2A\u4EBA\u4FE1\u606F&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &quot;vue&quot;;

// 1.\u5185\u90E8\u81EA\u5B9A\u4E49\u4E8B\u4EF6
const emit = defineEmits([&#39;foldChange&#39;])

// 2.\u8BB0\u5F55\u6298\u53E0\u72B6\u6001
const isFold = ref(false)
function handleMenuIconClick() {
  // 3.\u5B50\u7EC4\u4EF6\u5185\u90E8\u6539\u53D8\u72B6\u6001
  isFold.value = !isFold.value

  // 4.\u5C06\u4E8B\u4EF6\u548C\u72B6\u6001\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6
  emit(&#39;foldChange&#39;, isFold.value)
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u7EC4\u4EF6\u5728\u5B9A\u4E49<code>main-header</code>\u4E0A\u901A\u8FC7<code>@fold-change</code>\u63A5\u6536\u5B50\u7EC4\u4EF6\u4F20\u6765\u7684<code>emit(&#39;foldChange&#39;, isFold.value)</code>\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// main.vue
&lt;template&gt;
  &lt;div class=&quot;main&quot;&gt;
    &lt;el-container class=&quot;main-content&quot;&gt;
      &lt;el-aside :width=&quot;isFold ? &#39;60px&#39; : &#39;210px&#39;&quot;&gt;
        &lt;!-- \u7236\u4F20\u5B50\uFF08defineProps\uFF09 --&gt;
        &lt;main-menu :is-fold=&quot;isFold&quot;/&gt;
      &lt;/el-aside&gt;

      &lt;el-container&gt;
        &lt;el-header height=&quot;50px&quot;&gt;
          &lt;!-- emit\u5B50\u4F20\u7236\uFF08defineEmits\uFF09 --&gt;
          &lt;main-header @fold-change=&quot;handleFoldChange&quot;/&gt;
        &lt;/el-header&gt;
        &lt;el-main&gt;Main&lt;/el-main&gt;
      &lt;/el-container&gt;
    &lt;/el-container&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { localCache } from &#39;@/utils/cache&#39;;
import { useRouter } from &#39;vue-router&#39;;
import MainMenu from &#39;@/components/main-menu/main-menu.vue&#39;
import MainHeader from &#39;@/components/main-header/main-header.vue&#39;
import { ref } from &#39;vue&#39;;

const isFold = ref(false)
function handleFoldChange(isFoldValue: boolean) {
  isFold.value = isFoldValue
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u7EC4\u4EF6\u901A\u8FC7\u5B50\u7EC4\u4EF6\u7684<code>defineProps</code>\u5C06<code>:is-fold=&quot;isFold&quot;</code>\u6298\u53E0\u72B6\u6001\u4F20\u5165\u5230<code>el-menu</code>\u7684\u5C5E\u6027<code>:collapse</code>\u4E0A\uFF0C\u4ECE\u800C\u63A7\u5236<code>menu</code>\u83DC\u5355\u7684\u6298\u53E0\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// main-menu.vue
&lt;template&gt;
  &lt;div class=&quot;main-menu&quot;&gt;
    // ....
    &lt;div class=&quot;menu&quot;&gt;
      &lt;el-menu
        // ....
        :collapse=&quot;isFold&quot;
      &gt;
      // ....
      &lt;/el-menu&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5934\u90E8\u53F3\u4FA7\u4E2A\u4EBA\u4FE1\u606F\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5934\u90E8\u53F3\u4FA7\u4E2A\u4EBA\u4FE1\u606F\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u5934\u90E8\u53F3\u4FA7\u4E2A\u4EBA\u4FE1\u606F\u529F\u80FD</h3><h4 id="\u9759\u6001\u5E03\u5C40\u642D\u5EFA-\u5305\u542B\u6CE8\u9500\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5E03\u5C40\u642D\u5EFA-\u5305\u542B\u6CE8\u9500\u529F\u80FD" aria-hidden="true">#</a> \u9759\u6001\u5E03\u5C40\u642D\u5EFA\uFF08\u5305\u542B\u6CE8\u9500\u529F\u80FD\uFF09</h4><p>\u4F7F\u7528<code>el-dropdown</code>\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\uFF0C\u8FD9\u91CC\u8981\u8C03\u8282\u4E0B\u62C9\u6846\u7684\u6837\u5F0F\u9700\u8981\u52A0<code>:global</code>\uFF08\u539F\u56E0\uFF1A\u5B83\u4E0D\u5728 app \u7236\u7EC4\u4EF6\u4E0B\uFF0C\u5B83\u5728\u4E0E app \u540C\u7EA7\u7684\u7EC4\u4EF6 el-popper-container \u4E0B\uFF09</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;div class=&quot;header-info&quot;&gt;
    &lt;div class=&quot;operation&quot;&gt;
      &lt;span&gt;
        &lt;el-icon&gt;&lt;bell /&gt;&lt;/el-icon&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;el-icon&gt;&lt;ChatDotRound /&gt;&lt;/el-icon&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;span class=&quot;dot&quot;&gt;&lt;/span&gt;
        &lt;el-icon&gt;&lt;Postcard /&gt;&lt;/el-icon&gt;
      &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;info&quot;&gt;
      &lt;el-dropdown&gt;
        &lt;span class=&quot;user-info&quot;&gt;
          &lt;el-avatar :size=&quot;30&quot; class=&quot;avatar&quot; src=&quot;https://xumingyu2018.github.io/avatar.png&quot; /&gt;
          &lt;span class=&quot;name&quot;&gt;{{ loginStore.userInfo.name }}&lt;/span&gt;
        &lt;/span&gt;
        &lt;template #dropdown&gt;
          &lt;el-dropdown-menu&gt;
            &lt;el-dropdown-item @click=&quot;handleExitClick&quot;&gt;
              &lt;el-icon&gt;&lt;CircleCloseFilled /&gt;&lt;/el-icon&gt;
              \u6CE8\u9500
            &lt;/el-dropdown-item&gt;
            &lt;el-dropdown-item divided&gt;
              &lt;el-icon&gt;&lt;InfoFilled /&gt;&lt;/el-icon&gt;
              \u4E2A\u4EBA\u4FE1\u606F
            &lt;/el-dropdown-item&gt;
            &lt;el-dropdown-item&gt;
              &lt;el-icon&gt;&lt;Unlock /&gt;&lt;/el-icon&gt;
              \u4FEE\u6539\u5BC6\u7801
            &lt;/el-dropdown-item&gt;
          &lt;/el-dropdown-menu&gt;
        &lt;/template&gt;
      &lt;/el-dropdown&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRouter } from &#39;vue-router&#39;
import { localCache } from &#39;@/utils/cache&#39;
import useLoginStore from &#39;@/store/login/login&#39;

const router = useRouter()
function handleExitClick() {
  localCache.deleteCache(&#39;token&#39;)
  localCache.deleteCache(&#39;userInfo&#39;)
  localCache.deleteCache(&#39;userMenus&#39;)
  router.push(&#39;/login&#39;)
}

// \u663E\u793A\u7528\u6237\u540D\u79F0\u4FE1\u606F
const loginStore = useLoginStore()
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.header-info {
  display: flex;
  align-items: center;
}

.operation {
  display: inline-flex;
  margin-right: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &amp;:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    margin-left: 8px;
  }
}

.info {
  // \u4F7F\u7528global\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u5B83\u4E0D\u5728app\u7236\u7EC4\u4EF6\u4E0B\uFF0C\u5B83\u5728\u4E0Eapp\u540C\u7EA7\u7684\u7EC4\u4EF6el-popper-container\u4E0B
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531</h2><p><img src="https://secure2.wostatic.cn/static/oFj2Q945VD4Dv4kdaW3sqn/image.png" alt=""></p><p>\u672C\u6587\u91C7\u7528\u57FA\u4E8E\u83DC\u5355\u7684\u52A8\u6001\u8DEF\u7531\u7BA1\u7406\u5B9E\u73B0\uFF08\u7ED3\u5408 coderwhy \u5168\u5C40\u5DE5\u5177\uFF09\u3002</p><h3 id="\u5B89\u88C5\u81EA\u52A8\u5316\u751F\u6210\u8DEF\u7531\u914D\u7F6E\u4FE1\u606F\u548C-vue-\u9875\u9762\u7684\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u81EA\u52A8\u5316\u751F\u6210\u8DEF\u7531\u914D\u7F6E\u4FE1\u606F\u548C-vue-\u9875\u9762\u7684\u5DE5\u5177" aria-hidden="true">#</a> \u5B89\u88C5\u81EA\u52A8\u5316\u751F\u6210\u8DEF\u7531\u914D\u7F6E\u4FE1\u606F\u548C vue \u9875\u9762\u7684\u5DE5\u5177</h3><p><code>npm install coderwhy -g</code></p><h3 id="\u4F7F\u7528-coderwhy-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-coderwhy-\u5DE5\u5177" aria-hidden="true">#</a> \u4F7F\u7528 coderwhy \u5DE5\u5177</h3><p>\u4F8B\uFF1A<code>coderwhy add3page_setup list -d src/views/main/story/list</code></p><p><code>add3page_setup</code>\uFF1A\u9488\u5BF9 vue3 \u7684 setup \u8BED\u6CD5\u3002</p><p><code>-d</code>\uFF1A\u751F\u6210\u6307\u5B9A\u6587\u4EF6\u7684\u5730\u5740\u3002</p><p><code>list</code>\uFF1A\u751F\u6210\u7684\u8DEF\u7531\u540D\u5B57\u548C vue \u9875\u9762\u540D\u5B57\u3002</p><h3 id="\u7F16\u5199\u83DC\u5355\u6620\u5C04\u8DEF\u7531\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u83DC\u5355\u6620\u5C04\u8DEF\u7531\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u7F16\u5199\u83DC\u5355\u6620\u5C04\u8DEF\u7531\u5DE5\u5177\u7C7B</h3><ol><li>\u6839\u636E\u83DC\u5355\u6620\u5C04\u5BF9\u5E94\u7684\u8DEF\u7531\u3002</li><li>\u8FDB\u5165\u4E3B\u9875\u5339\u914D\u7B2C\u4E00\u4E2A\u83DC\u5355\u7684\u8DEF\u7531\u3002</li></ol><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// utils/map-menus.ts
import type { RouteRecordRaw } from &quot;vue-router&quot;

// \u81EA\u52A8\u5316\u52A0\u8F7D\u6240\u6709\u7684\u8DEF\u7531\uFF08\u4E5F\u53EF\u4EE5\u6536\u5230\u5199\u6B7B\uFF09
function loadLocalRoutes() {
  // 1.\u52A0\u8F7D\u6240\u6709\u7684\u6A21\u677F
  const modules: Record&lt;string, any&gt; = i<wbr>mport.meta.glob(&#39;../router/main/**/*.ts&#39;, { eager: true })

  // 2.\u904D\u5386\u6240\u6709\u7684\u6A21\u677F\u4E3A\u8DEF\u7531\u5BF9\u8C61
  const routes: RouteRecordRaw[] = []
  for (const key in modules) {
    const route = modules[key].default
    routes.push(route)
  }
  return routes
}

// \u8BB0\u5F55\u7B2C\u4E00\u4E2A\u83DC\u5355\u4FE1\u606F
export let firstMenu: any = null
/**
 * \u6620\u5C04\u83DC\u5355\u5230\u8DEF\u7531
 * @param menus \u83DC\u5355
 * @returns \u8DEF\u7531
 */
export function mapMenuToRoutes(menus: any[]) {
    // 1.\u52A0\u8F7D\u6240\u6709\u7684\u8DEF\u7531\u5BF9\u8C61
    const loadRoutes = loadLocalRoutes()

    // 2.\u6839\u636E\u83DC\u5355\u83B7\u53D6\u9700\u8981\u6DFB\u52A0\u7684\u8DEF\u7531\u5BF9\u8C61
    const finalRoutes: RouteRecordRaw[] = []
    for(const menu of menus) {
        for(const submenu of menu.children) {
            const route = loadRoutes.find(route =&gt; route.path === submenu.url)
            if(route) finalRoutes.push(route)

            // \u8BB0\u5F55\u7B2C\u4E00\u4E2A\u88AB\u5339\u914D\u83DC\u5355
            if(!firstMenu &amp;&amp; route) firstMenu = submenu
        }
    }

    return finalRoutes
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6709\u5F0A\u7AEF-\u767B\u5F55\u65F6\u8C03\u7528\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6709\u5F0A\u7AEF-\u767B\u5F55\u65F6\u8C03\u7528\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> (\u6709\u5F0A\u7AEF)\u767B\u5F55\u65F6\u8C03\u7528\u5DE5\u5177\u7C7B</h3><p>\u5728\u53D1\u9001\u767B\u5F55\u8BF7\u6C42\u65F6\uFF0C\u4F7F\u7528<code>router.addRoute(&#39;main&#39;, route)</code>\u5C06\u83DC\u5355\u4FE1\u606F<code>userMenus</code>\u91CC\u7684\u8DEF\u7531\u548C\u5168\u90E8\u6CE8\u518C\u8FDB<code>loadLocalRoutes</code>\u5339\u914D\u65F6\u8C03\u7528\u3002</p><p>\u5F0A\u7AEF\uFF1A\u5237\u65B0\u65F6\u8DEF\u7531\u6CE8\u518C\u4E0D\u4E86\uFF0C\u4EE3\u7801\u91CD\u65B0\u6267\u884C\u65F6\uFF0C\u52A8\u6001\u8DEF\u7531\u5C31\u52A0\u8F7D\u4E0D\u4E86\uFF0C\u56E0\u4E3A\u53EA\u6709\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u65F6\u624D\u4F1A\u6267\u884C\u8BE5\u4EE3\u7801\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// store/login/login.ts
interface ILoginState {
    // ...
    userMenus: any
}

const useLoginStore = defineStore(&#39;login&#39;, {
    state: (): ILoginState =&gt; ({
        // ...
        userMenus: localCache.getCache(&#39;userMenus&#39;) ?? []
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // ...
            // 6.\u6839\u636E\u83DC\u5355menu\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531(\u4F7F\u7528\u5DE5\u5177\u7C7Bmap-menus.ts)\uFF0C\u5237\u65B0\u65F6\u8FD9\u6BB5\u4EE3\u7801\u4E0D\u4F1A\u91CD\u65B0\u6267\u884C\uFF0C\u56E0\u4E3A\u53EA\u6709\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u65F6\u624D\u4F1A\u6267\u884C\u8BE5\u4EE3\u7801\u3002
            const routes = mapMenuToRoutes(this.userMenus)
            // \u8FD9\u91CC\u7684&#39;main&#39;\u662F\u6839\u636E\u8DEF\u7531\u91CC\u7684name\u5C5E\u6027\u6765\u7684
            routes.forEach(route =&gt; router.addRoute(&#39;main&#39;, route))

            //  \u9875\u9762\u8DF3\u8F6C
            router.push(&#39;/main&#39;)
        }
    }
})

export default useLoginStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>router.addRoute(&#39;main&#39;, route)</code>\u91CC\u7684 main \u662F\u9700\u8981\u5728\u8DEF\u7531\u8868\u4E2D\u8BBE\u7F6E<code>name</code>\u5C5E\u6027\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ...
    {
      path: &#39;/main&#39;,
      name: &#39;main&#39;,
      component: () =&gt; import(&#39;@/views/main/Main.vue&#39;),
      // \u4EE5\u4E0B\u66FF\u6362\u6210\u52A8\u6001\u6CE8\u518C\u8DEF\u7531\u7684\u65B9\u6CD5(\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u5DE5\u5177\u7C7B\uFF0C\u5728\u8FD9\u91CC\u5168\u90E8\u8DEF\u7531\u5199\u6B7B)
      // children: [
      //   {
      //     path: &#39;/main/analysis/overview&#39;,
      //     component: () =&gt; import(&#39;../views/main/analysis/overview/overview.vue&#39;)
      //   },
      //   {
      //     path: &#39;/main/analysis/dashboard&#39;,
      //     component: () =&gt; import(&#39;../views/main/analysis/dashboard/dashboard.vue&#39;)
      //   },
      // ]
    },
    // ....
  ]
})
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6539\u8FDB-\u4F7F\u7528\u5168\u5C40\u52A0\u8F7D\u6570\u636E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6539\u8FDB-\u4F7F\u7528\u5168\u5C40\u52A0\u8F7D\u6570\u636E\u65B9\u6CD5" aria-hidden="true">#</a> (\u6539\u8FDB)\u4F7F\u7528\u5168\u5C40\u52A0\u8F7D\u6570\u636E\u65B9\u6CD5</h3><p>\u4E0D\u518D\u4EC5\u9650\u4E8E\u5728\u767B\u5F55\u65F6\u8C03\u7528<code>mapMenuToRoutes</code>\u5DE5\u5177\u7C7B\uFF0C\u800C\u5728\u5168\u5C40\u5F53\u5237\u65B0\u9875\u9762\u65F6\u8C03\u7528\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>const useLoginStore = defineStore(&#39;login&#39;, {
    state: (): ILoginState =&gt; ({
        token: &#39;&#39;,
        userInfo: {},
        userMenus: []
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // ....
            router.push(&#39;/main&#39;)
        },

        // \u89E3\u51B3\u5237\u65B0\u9875\u9762\u540E\uFF0C\u52A8\u6001\u8DEF\u7531\u4E22\u5931\u7684\u95EE\u9898(\u4E0D\u518D\u662FloginAccountAction\u767B\u5F55\u65F6\u624D\u6267\u884C)
        loadLocalDataAction() {
            // \u7528\u6237\u8FDB\u884C\u5237\u65B0\u65F6\u9ED8\u8BA4\u52A0\u8F7D\u6570\u636E
            const token = localCache.getCache(&#39;token&#39;)
            const userInfo = localCache.getCache(&#39;userInfo&#39;)
            const userMenus = localCache.getCache(&#39;userMenus&#39;)

            if(token &amp;&amp; userInfo &amp;&amp; userMenus) {
                this.token = token
                this.userInfo = userInfo
                this.userMenus = userMenus
                // 6.\u6839\u636E\u83DC\u5355menu\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531(\u4F7F\u7528\u5DE5\u5177\u7C7Bmap-menus.ts)
                const routes = mapMenuToRoutes(userMenus)
                // \u8FD9\u91CC\u7684&#39;main&#39;\u662F\u6839\u636E\u8DEF\u7531\u91CC\u7684name\u5C5E\u6027\u6765\u7684
                routes.forEach(route =&gt; router.addRoute(&#39;main&#39;, route))
            }
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 App \u7EC4\u4EF6\u4E2D\u8C03\u7528<code>loadLocalDataAction</code>\u65B9\u6CD5\uFF0C\u6CE8\u610F\uFF1A\u6B64\u65B9\u6CD5\u4E00\u5B9A\u8981\u653E\u5728<code>app.router</code>\u4E4B\u524D\u6267\u884C\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// App.vue
const app = createApp(App)
app.use(pinia)
const loginStore = useLoginStore()
loginStore.loadLocalDataAction()

app.use(router)
app.use(registerIcons)
app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u5C06<code>loadLocalDataAction</code>\u65B9\u6CD5\u5C01\u88C5\u8FDB<code>pinia</code>\u5BFC\u51FA\u7684\u5730\u65B9\uFF0C\u4ECE\u800C\u4F7F\u7528<code>app.use()</code>\u65B9\u6CD5\u6CE8\u518C\u8FDB\u5168\u5C40 App \u7EC4\u4EF6\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>//store/index.js
import { createPinia } from &quot;pinia&quot;;
import useLoginStore from &quot;./login/login&quot;;

const pinia = createPinia()

function registerStore(app: App&lt;Element&gt;) {
    app.use(pinia)

    // \u52A0\u8F7D\u672C\u5730\u7F13\u5B58\u6570\u636E
    const loginStore = useLoginStore()
    loginStore.loadLocalDataAction()
}

export default registerStore

// App.vue
import store from &#39;./store&#39;

app.use(store)
app.use(router)
app.use(registerIcons)
app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDB\u5165\u4E3B\u9875\u65F6\u5339\u914D\u7B2C\u4E00\u4E2A\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u4E3B\u9875\u65F6\u5339\u914D\u7B2C\u4E00\u4E2A\u83DC\u5355" aria-hidden="true">#</a> \u8FDB\u5165\u4E3B\u9875\u65F6\u5339\u914D\u7B2C\u4E00\u4E2A\u83DC\u5355</h3><p>\u4ECE<code>mapMenuToRoutes</code>\u5DE5\u5177\u7C7B\u4E2D\u83B7\u53D6<code>firstMenu</code>\u7B2C\u4E00\u4E2A\u83DC\u5355\uFF0C\u5728\u8DEF\u7531\u5BFC\u822A\u5B88\u536B\u4E2D\u5224\u65AD\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>import { firstMenu } from &#39;@/utils/map-menus&#39;

const router = createRouter({
  history: createWebHashHistory(),
  routes: // ....
})

router.beforeEach((to, from) =&gt; {
  // ....
  if(to.path === &#39;/main&#39;) {
    return firstMenu.url
  }
})

export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5237\u65B0\u9875\u9762\u65F6-\u83DC\u5355\u9ED8\u8BA4\u503C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0\u9875\u9762\u65F6-\u83DC\u5355\u9ED8\u8BA4\u503C\u95EE\u9898" aria-hidden="true">#</a> \u5237\u65B0\u9875\u9762\u65F6\uFF0C\u83DC\u5355\u9ED8\u8BA4\u503C\u95EE\u9898</h3><p>\u6839\u636E\u8DEF\u7531\u7684<code>url</code>\u8DEF\u5F84\uFF0C\u6620\u5C04\u5BF9\u5E94\u83DC\u5355<code>menu</code>\uFF08\u9700\u8981\u4E00\u4E2A\u8DEF\u7531\u6620\u5C04\u83DC\u5355\u7684\u5DE5\u5177\u7C7B\uFF09\uFF0C\u4ECE\u800C\u83B7\u5F97<code>menu</code>\u7684<code>id</code>\u5C5E\u6027\uFF0C\u5C06<code>el-menu</code>\u7EC4\u4EF6\u5C5E\u6027<code>:default-active=&quot;defaultValue&quot;</code>\u7684<code>defaultValue</code>\u52A8\u6001\u7ED1\u5B9A\u7ED9<code>menu.id</code>\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// utils/map-menus.ts
/**
 * \u6620\u5C04\u8DEF\u7531\u5230\u83DC\u5355\u5DE5\u5177\u7C7B
 * @param path \u8DEF\u7531url
 * @param menus \u83DC\u5355
 * @returns \u83DC\u5355
 */
export function mapPathToMenu(menus: any[], path: string) {
    for (const menu of menus) {
      for (const submenu of menu.children) {
        if (path === submenu.url) return submenu
      }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// main-menu.vue
&lt;template&gt;
  &lt;div class=&quot;main-menu&quot;&gt;
    // ....
    &lt;div class=&quot;menu&quot;&gt;
      &lt;el-menu
        :default-active=&quot;defaultValue&quot;
        // ....
      &gt;
      // .....
      &lt;/el-menu&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { mapPathToMenu } from &#39;@/utils/map-menus&#39;;
// .....

// 1.\u5B58\u653E\u52A8\u6001\u7684\u83DC\u5355
const loginStore = useLoginStore();
const userMenus = loginStore.userMenus

// 3.\u9875\u9762\u5237\u65B0\u65F6\uFF0C\u6839\u636E\u5F53\u524D\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u7684\u83DC\u5355\u9879(\u9ED8\u8BA4\u503C\u95EE\u9898)
const route = useRoute()
const defaultValue = computed(() =&gt; {
  const currentMenu = mapPathToMenu(userMenus, route.path)
  return currentMenu.id + &#39;&#39;
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u9762\u5305\u5C51\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u9762\u5305\u5C51\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u9762\u5305\u5C51\u529F\u80FD</h2><p><img src="https://secure2.wostatic.cn/static/97uxoUbD17xWuhYbrNVid1/image.png" alt=""></p><h3 id="\u642D\u5EFA\u9762\u5305\u5C51\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u9762\u5305\u5C51\u9875\u9762" aria-hidden="true">#</a> \u642D\u5EFA\u9762\u5305\u5C51\u9875\u9762</h3><p>\u4F7F\u7528<code>el-breadcrumb</code>\u642D\u5EFA\u9762\u5305\u5C51\u9875\u9762\uFF0C\u4F7F\u7528\u5DE5\u5177\u7C7B<code>mapPathToBreadCrumb</code>\u5C06\u83DC\u5355<code>menu</code>\u4EE5\u53CA\u5B50\u83DC\u5355<code>submenu</code>\u653E\u5165<code>breadcrumb</code>\u6570\u7EC4\uFF0C\u7528\u4E8E\u52A8\u6001\u904D\u5386<code>el-breadcrumb</code>\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// header-crumb.vue
&lt;template&gt;
  &lt;div class=&quot;header-crumb&quot;&gt;
    &lt;el-breadcrumb separator-icon=&quot;ArrowRight&quot;&gt;
        &lt;template v-for=&quot;(item, index) in breadcrumb&quot; :key=&quot;index&quot;&gt;
            &lt;el-breadcrumb-item :to=item.url&gt;{{ item.name }}&lt;/el-breadcrumb-item&gt;
        &lt;/template&gt;
    &lt;/el-breadcrumb&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { mapPathToBreadCrumb } from &#39;@/utils/map-menus&#39;
import { useRoute } from &#39;vue-router&#39;
import useLoginStore from &#39;@/store/login/login&#39;
import { computed } from &#39;vue&#39;

const route = useRoute()
const loginStore = useLoginStore()

// \u8DEF\u5F84\u6539\u53D8\u65F6\uFF0C\u91CD\u65B0\u8BA1\u7B97\u9762\u5305\u5C51
const breadcrumb = computed(() =&gt; {
    return mapPathToBreadCrumb(loginStore.userMenus, route.path)
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DEF\u7531\u6620\u5C04\u9762\u5305\u5C51\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6620\u5C04\u9762\u5305\u5C51\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u8DEF\u7531\u6620\u5C04\u9762\u5305\u5C51\u5DE5\u5177\u7C7B</h3><p><code>mapPathToBreadCrumb</code>\u5DE5\u5177\u7C7B</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// map-menus.ts
export function mapPathToBreadCrumb(menus: any[], path: string) {
    const breadCrumb: any[] = []

    for (const menu of menus) {
      for (const submenu of menu.children) {
        if (path === submenu.url){
            breadCrumb.push(menu)
            breadCrumb.push(submenu)
            return breadCrumb
        }
      }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u51B3\u70B9\u51FB\u9762\u5305\u5C51\u8DF3\u5230\u76EE\u5F55\u4E0B\u7684\u7B2C\u4E00\u4E2A\u5B50\u76EE\u5F55\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u70B9\u51FB\u9762\u5305\u5C51\u8DF3\u5230\u76EE\u5F55\u4E0B\u7684\u7B2C\u4E00\u4E2A\u5B50\u76EE\u5F55\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3\u70B9\u51FB\u9762\u5305\u5C51\u8DF3\u5230\u76EE\u5F55\u4E0B\u7684\u7B2C\u4E00\u4E2A\u5B50\u76EE\u5F55\u95EE\u9898</h3><p><code>el-breadcrumb</code>\u7684<code>:to=item.url</code>\u5C5E\u6027\u95EE\u9898\uFF0C\u4FEE\u6539\u5DE5\u5177\u7C7B<code>mapMenuToRoutes</code>\u5C06\u6839\u76EE\u5F55\u8DEF\u5F84\u91CD\u5B9A\u5411\u5230\u6839\u76EE\u5F55\u4E0B\u7684\u7B2C\u4E00\u4E2A\u5B50\u76EE\u5F55\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>export function mapMenuToRoutes(menus: any[]) {
    // ...
    const finalRoutes: RouteRecordRaw[] = []
    for(const menu of menus) {
        for(const submenu of menu.children) {
            // ....
            if(route) {
                // \u7ED9route\u7684\u9876\u5C42\u83DC\u5355\u589E\u52A0\u91CD\u5B9A\u5411\u529F\u80FD\uFF08\u4F46\u662F\u53EA\u9700\u8981\u6DFB\u52A0\u4E00\u6B21\u5373\u53EF\uFF09
                if(!finalRoutes.find((item) =&gt; item.path === route.path)) {
                    finalRoutes.push({ path: menu.url, redirect: route})
                }
                finalRoutes.push(route)
            }
            // \u8BB0\u5F55\u7B2C\u4E00\u4E2A\u88AB\u5339\u914D\u83DC\u5355
            if(!firstMenu &amp;&amp; route) firstMenu = submenu
        }
    }

    return finalRoutes
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u4E3B\u9875\u4E2D\u90E8-main-\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E3B\u9875\u4E2D\u90E8-main-\u9875\u9762" aria-hidden="true">#</a> \u5B9E\u73B0\u4E3B\u9875\u4E2D\u90E8 main \u9875\u9762</h2><p>\u4E3B\u4F53\u9875\u9762<code>main</code>\u4E2D\u5305\u62EC\u4E09\u4E2A\u90E8\u5206\u8868\u8FBE\u641C\u7D22\u6846<code>search</code>\u3001\u5185\u5BB9\u90E8\u5206\u7684\u5934\u90E8\u53CA\u8868\u683C\u6570\u636E\u3002</p><h3 id="\u5B9E\u73B0-search-\u8868\u5355\u641C\u7D22\u6846\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-search-\u8868\u5355\u641C\u7D22\u6846\u754C\u9762" aria-hidden="true">#</a> \u5B9E\u73B0 search \u8868\u5355\u641C\u7D22\u6846\u754C\u9762</h3><p><img src="https://secure2.wostatic.cn/static/oeywjBVRfpkUuQSiZSgj8M/image.png" alt=""></p><h4 id="\u642D\u5EFA\u9759\u6001-search-\u8868\u5355\u641C\u7D22\u6846\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u9759\u6001-search-\u8868\u5355\u641C\u7D22\u6846\u754C\u9762" aria-hidden="true">#</a> \u642D\u5EFA\u9759\u6001 search \u8868\u5355\u641C\u7D22\u6846\u754C\u9762</h4><p>\u901A\u8FC7<code>layout</code>\u5E03\u5C40\u7EC4\u4EF6\u4E2D\u7684<code>el-row</code>\u548C<code>el-col</code>\u5BF9\u6BCF\u884C\u6BCF\u5217\u505A\u5E03\u5C40\uFF0C\u4F7F\u7528<code>el-form</code>\u8868\u5355\u7EC4\u4EF6\u5305\u542B\u7684<code>el-input</code>\u8F93\u5165\u6846\u3001<code>el-select</code>\u4E0B\u62C9\u9009\u62E9\u4EE5\u53CA<code>el-date-picker</code>\u65E5\u671F\u9009\u62E9\u5668\u5B9E\u73B0\u3002</p><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// user/cpns/user-search.vue
&lt;template&gt;
  &lt;div class=&quot;search&quot;&gt;
    &lt;el-form label-width=&quot;120px&quot; size=&quot;large&quot;&gt;
        &lt;el-row :gutter=&quot;20&quot;&gt;
            &lt;el-col :span=&quot;8&quot;&gt;
                &lt;el-form-item label=&quot;\u7528\u6237\u540D&quot;&gt;
                    &lt;el-input placeholder=&quot;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u7528\u6237\u540D&quot;&gt;&lt;/el-input&gt;
                &lt;/el-form-item&gt;
            &lt;/el-col&gt;
            &lt;el-col :span=&quot;8&quot;&gt;
                &lt;el-form-item label=&quot;\u771F\u5B9E\u59D3\u540D&quot;&gt;
                    &lt;el-input placeholder=&quot;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u771F\u5B9E\u59D3\u540D&quot;&gt;&lt;/el-input&gt;
                &lt;/el-form-item&gt;
            &lt;/el-col&gt;
            &lt;el-col :span=&quot;8&quot;&gt;
                &lt;el-form-item label=&quot;\u7535\u8BDD\u53F7\u7801&quot;&gt;
                    &lt;el-input placeholder=&quot;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u7535\u8BDD\u53F7\u7801&quot;&gt;&lt;/el-input&gt;
                &lt;/el-form-item&gt;
            &lt;/el-col&gt;

            &lt;!-- \u53E6\u8D77\u4E00\u884C --&gt;
            &lt;el-col :span=&quot;8&quot;&gt;
                &lt;el-form-item label=&quot;\u72B6\u6001&quot;&gt;
                    &lt;el-select placeholder=&quot;\u8BF7\u9009\u62E9\u67E5\u8BE2\u7684\u72B6\u6001&quot; style=&quot;width: 100%;&quot;&gt;
                        &lt;el-option label=&quot;\u542F\u7528&quot; :value=&quot;1&quot; /&gt;
                        &lt;el-option label=&quot;\u7981\u7528&quot; :value=&quot;0&quot; /&gt;
                    &lt;/el-select&gt;
                &lt;/el-form-item&gt;
            &lt;/el-col&gt;
            &lt;el-col :span=&quot;8&quot;&gt;
                &lt;el-form-item label=&quot;\u521B\u5EFA\u65F6\u95F4&quot;&gt;
                    &lt;el-date-picker
                        type=&quot;daterange&quot;
                        range-separator=&quot;-&quot;
                        start-placeholder=&quot;\u5F00\u59CB\u65F6\u95F4&quot;
                        end-placeholder=&quot;\u7ED3\u675F\u65F6\u95F4&quot;
                    /&gt;
                &lt;/el-form-item&gt;
            &lt;/el-col&gt;
        &lt;/el-row&gt;
    &lt;/el-form&gt;

    &lt;div class=&quot;btns&quot;&gt;
        &lt;el-button icon=&quot;Refresh&quot; size=&quot;large&quot;&gt;\u91CD\u7F6E&lt;/el-button&gt;
        &lt;el-button icon=&quot;Search&quot; size=&quot;large&quot; type=&quot;primary&quot;&gt;\u641C\u7D22&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;

&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.search {
    background-color: #fff;
    padding: 20px;

    .el-form-item {
        padding: 20px;
        margin-bottom: 0;
    }

    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,151),u=i("\u5BF9\u65E5\u671F\u9009\u62E9\u5668\u91CC\u7684\u65E5\u671F\u5B9E\u73B0\u56FD\u9645\u5316\u3002"),m={href:"https://element-plus.gitee.io/zh-CN/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},o=i("Element Plus"),b=i(" \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 "),p={href:"https://element-plus.gitee.io/en-US/component/config-provider.html",target:"_blank",rel:"noopener noreferrer"},g=i("ConfigProvider"),h=i(" \uFF08"),q=e("code",null,"el-config-provider",-1),f=i("\uFF09\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u7684\u8BBE\u7F6E\u3002\uFF08\u9700\u8981\u5305\u88F9 App \u7EC4\u4EF6\uFF09\u5E76\u5728"),y=e("code",null,"env.d.ts",-1),S=i("\u4E2D\u58F0\u660E"),x=e("code",null,".mjs",-1),C=i("\u6587\u4EF6"),w=s(`<div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// App.vue
&lt;template&gt;
    &lt;div class=&quot;app&quot;&gt;
      &lt;!-- \u56FD\u9645\u5316\u914D\u7F6E\uFF08\u5C06\u7EC4\u4EF6\u4E2D\u7684\u82F1\u6587\u8F6C\u4E3A\u4E2D\u6587-&gt;\u65E5\u671F\u7EC4\u4EF6\uFF09 --&gt;
      &lt;el-config-provider :locale=&quot;zhCn&quot;&gt;
        &lt;router-view /&gt;
      &lt;/el-config-provider&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import zhCn from &#39;element-plus/dist/locale/zh-cn.mjs&#39;
&lt;/script&gt;

// env.d.ts
declare module &#39;*.vue&#39; {
    import { DefineComponent } from &#39;vue&#39;
    const component: DefineComponent
    export default component
}

// \u58F0\u660E\u56FD\u9645\u5316\u914D\u7F6E\u6587\u4EF6mjs
declare module &#39;*.mjs&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u73B0\u91CD\u7F6E\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u91CD\u7F6E\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u91CD\u7F6E\u529F\u80FD</h4><p><code>el-form</code>\u8868\u5355\u7EC4\u4EF6\u8981\u60F3\u8F93\u5165\u503C\uFF0C\u9700\u8981\u4F7F\u7528<code>reactive()</code>\u548C<code>:model</code>\u7ED1\u5B9A\u503C\uFF0C\u5E76\u4E14\u5728\u76F8\u5E94\u7684\u7EC4\u4EF6\u5982<code>el-input</code>\u4F7F\u7528<code>v-model</code>\u7ED1\u5B9A<code>reactive</code>\u91CC\u9762\u5BF9\u5E94\u7684\u503C\u3002\u91CD\u7F6E\u503C\u8C03\u7528<code>formRef.value?.resetFields()</code>\u65B9\u6CD5\uFF08<code>formRef</code>\u7ED1\u5B9A\u5230<code>el-form</code>\u4E0A\uFF0C<code>el-form-item</code>\u4E0A\u6DFB\u52A0\u5C5E\u6027<code>prop=&quot;xxx&quot;</code>\u5373\u53EF\u5B9E\u73B0\uFF09</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;search&quot;&gt;
    &lt;el-form **:model=&quot;searchForm&quot; ref=&quot;formRef&quot;** label-width=&quot;120px&quot; size=&quot;large&quot;&gt;
        &lt;el-row :gutter=&quot;20&quot;&gt;
            &lt;el-col :span=&quot;8&quot;&gt;
                &lt;el-form-item label=&quot;\u7528\u6237\u540D&quot; prop=&quot;name&quot;&gt;
                    &lt;el-input **v-model=&quot;searchForm.name&quot;** placeholder=&quot;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u7528\u6237\u540D&quot;&gt;&lt;/el-input&gt;
                &lt;/el-form-item&gt;
            &lt;/el-col&gt;
       &lt;/el-row&gt;
    &lt;/el-form&gt;
    // ....
    &lt;div class=&quot;btns&quot;&gt;
        &lt;el-button icon=&quot;Refresh&quot; size=&quot;large&quot; @click=&quot;handleResetClick()&quot;&gt;\u91CD\u7F6E&lt;/el-button&gt;
        &lt;el-button icon=&quot;Search&quot; size=&quot;large&quot; type=&quot;primary&quot;&gt;\u641C\u7D22&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, ref } from &quot;vue&quot;;
import type { ElForm } from &quot;element-plus&quot;;

const searchForm = reactive({
    name: &#39;&#39;,
    realname: &#39;&#39;,
    cellphone: &#39;&#39;,
    enable: 1,
    createAt: &#39;&#39;
})

// \u91CD\u7F6E\u529F\u80FD
const formRef = ref&lt;InstanceType&lt;typeof ElForm&gt;&gt;()
function handleResetClick() {
    // \u65B9\u6CD5\u4E00
    // searchForm.name = &#39;&#39;
    // searchForm.realname = &#39;&#39;
    // searchForm.cellphone = &#39;&#39;
    // searchForm.enable = 1
    // searchForm.createAt = &#39;&#39;

    // \u65B9\u6CD5\u4E8C
    formRef.value?.resetFields()
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5C55\u793A\u7528\u6237\u5217\u8868\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5C55\u793A\u7528\u6237\u5217\u8868\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u5C55\u793A\u7528\u6237\u5217\u8868\u529F\u80FD</h3><p><img src="https://secure2.wostatic.cn/static/hvmWHgnMCqqF1hKgZT64pQ/image.png" alt=""></p><h4 id="\u4F7F\u7528-pinia-\u53D1\u8D77\u83B7\u53D6\u7528\u6237\u6570\u636E\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-pinia-\u53D1\u8D77\u83B7\u53D6\u7528\u6237\u6570\u636E\u8BF7\u6C42" aria-hidden="true">#</a> \u4F7F\u7528 pinia \u53D1\u8D77\u83B7\u53D6\u7528\u6237\u6570\u636E\u8BF7\u6C42</h4><p>\u7F16\u5199<code>axios</code>\u8BF7\u6C42\u63A5\u53E3\uFF08\u4F7F\u7528\u4E86<code>hyRequest</code>\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u76F4\u63A5\u8C03\u7528\u5373\u53EF\uFF09</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import hyRequest from &quot;@/service&quot;;

// \u83B7\u53D6\u7528\u6237\u5217\u8868\u6570\u636E
export function getUserListData() {
    return hyRequest.post({
        url: &#39;/users/list&#39;,
        data: {
            offset: 0,
            size: 10
        }
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199<code>pinia</code>\u8FDB\u884C\u6570\u636E\u5B58\u50A8</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { getUserListData } from &quot;@/service/main/system/system&quot;;
import { defineStore } from &quot;pinia&quot;;
import type { ISystemState } from &quot;./type&quot;;

const useSystemStore = defineStore(&#39;system&#39;, {
    // \u4F7F\u7528typescript\u8FDB\u884C\u7C7B\u578B\u9650\u5236
    state: (): **ISystemState** =&gt; ({
        usersList: [],
        usersTotalCount: 0
    }),
    actions: {
        async getUsersListAction() {
            // \u8C03\u7528axios\u8BF7\u6C42
            const userListResult = await getUserListData()
            const { totalCount, list } = userListResult.data
            // \u5B58\u5165store\u4E2D
            this.usersList = list
            this.usersTotalCount = totalCount
        }
    }
})

export default useSystemStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>typescript</code>\u8FDB\u884C\u7C7B\u578B\u9650\u5236</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// type.ts
export interface IUser {
    id: number
    name: string
    realname: string
    cellphone: number
    enable: number
    departmentId: number
    roleId: number
    createAt: string
    updateAt: string
}

export interface ISystemState {
    usersList: IUser[]
    usersTotalCount: number
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u6237\u5217\u8868\u9875\u9762\uFF08<code>user-content.vue</code>\uFF09\u4E2D\u8C03\u7528<code>pinia</code>\u4E2D\u7684<code>getUsersListAction</code>\uFF0C\u4ECE\u800C\u53D1\u8D77\u8BF7\u6C42\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user-content.vue
&lt;script setup&gt;
import useSystemStore from &#39;@/store/main/system/system&#39;;
import { storeToRefs } from &#39;pinia&#39;;

// 1.\u53D1\u8D77action\uFF0C\u8BF7\u6C42usersList\u6570\u636E
const systemStore = useSystemStore()
systemStore.getUsersListAction()

// 2.\u83B7\u53D6usersList\u6570\u636E(\u54CD\u5E94\u5F0F\u6570\u636E\uFF1A\u4E0A\u9762\u4EE3\u7801\u662F\u5F02\u6B65\u7684\uFF0C\u5F53\u6570\u636E\u8FD8\u6CA1\u62FF\u5230\u662F\uFF0C\u8FD9\u4E00\u53E5\u4E0D\u8D77\u4F5C\u7528\uFF0C\u9700\u8981\u7528storeToRefs)
const { usersList } = storeToRefs(systemStore)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521D\u6B65\u642D\u5EFA\u8868\u683C\u6570\u636E\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u521D\u6B65\u642D\u5EFA\u8868\u683C\u6570\u636E\u9875\u9762" aria-hidden="true">#</a> \u521D\u6B65\u642D\u5EFA\u8868\u683C\u6570\u636E\u9875\u9762</h4><p>\u4F7F\u7528<code>el-table</code>\u53CA<code>el-table-column</code>\u642D\u5EFA\u8868\u683C\u6570\u636E\u9875\u9762\uFF0C<code>prop</code>\u5BF9\u5E94\u8BF7\u6C42\u6570\u636E\u4E2D\u76F8\u5E94\u7684\u5C5E\u6027\uFF0C<code>type</code>\u4E3A<code>selection</code>\u5C55\u793A\u52FE\u9009\u6846\uFF0C<code>type</code>\u4E3A<code>index</code>\u5C55\u793A\u7D22\u5F15\u503C\u3002<code>el-table-column</code>\u53EF\u4F5C\u4E3A\u63D2\u69FD\u4F20\u5165\u5176\u5B83\u7EC4\u4EF6\uFF0C<code>:data</code>\u4F20\u5165\u8BF7\u6C42\u8FD4\u56DE\u7684\u6570\u636E\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
    &lt;div class=&quot;content&quot;&gt;
      &lt;div class=&quot;header&quot;&gt;
        &lt;h2 class=&quot;title&quot;&gt;\u7528\u6237\u5217\u8868&lt;/h2&gt;
        &lt;el-button type=&quot;primary&quot;&gt;\u65B0\u5EFA\u7528\u6237&lt;/el-button&gt;
      &lt;/div&gt;
      &lt;div class=&quot;table&quot;&gt;
        &lt;el-table :data=&quot;usersList&quot; border style=&quot;width: 100%&quot;&gt;
            &lt;!-- \u52FE\u9009\u6846 --&gt;
            &lt;el-table-column align=&quot;center&quot; type=&quot;selection&quot; width=&quot;50px&quot;/&gt;
            &lt;!-- \u5E8F\u53F7 --&gt;
            &lt;el-table-column align=&quot;center&quot; type=&quot;index&quot; label=&quot;\u5E8F\u53F7&quot; width=&quot;60px&quot;/&gt;

            &lt;el-table-column align=&quot;center&quot; prop=&quot;name&quot; label=&quot;\u7528\u6237\u540D&quot; width=&quot;150px&quot; /&gt;
            &lt;el-table-column align=&quot;center&quot; prop=&quot;realname&quot; label=&quot;\u771F\u5B9E\u59D3\u540D&quot; width=&quot;150px&quot;/&gt;
            &lt;el-table-column align=&quot;center&quot; prop=&quot;cellphone&quot; label=&quot;\u7535\u8BDD\u53F7\u7801&quot; width=&quot;150px&quot;/&gt;
            &lt;el-table-column align=&quot;center&quot; prop=&quot;enable&quot; label=&quot;\u72B6\u6001&quot; width=&quot;100px&quot;/&gt;
            &lt;el-table-column align=&quot;center&quot; prop=&quot;createAt&quot; label=&quot;\u521B\u5EFA\u65F6\u95F4&quot; /&gt;
            &lt;el-table-column align=&quot;center&quot; prop=&quot;updateAt&quot; label=&quot;\u66F4\u65B0\u65F6\u95F4&quot; /&gt;

            &lt;el-table-column align=&quot;center&quot; label=&quot;\u64CD\u4F5C&quot; width=&quot;150px&quot;&gt;
                &lt;el-button type=&quot;primary&quot; icon=&quot;Edit&quot; size=&quot;small&quot; text&gt;\u7F16\u8F91&lt;/el-button&gt;
                &lt;el-button type=&quot;danger &quot; icon=&quot;Delete&quot; size=&quot;small&quot; text&gt;\u5220\u9664&lt;/el-button&gt;
            &lt;/el-table-column&gt;
        &lt;/el-table&gt;
      &lt;/div&gt;
      &lt;div class=&quot;pagination&quot;&gt;\u5206\u9875&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import useSystemStore from &#39;@/store/main/system/system&#39;;
import { storeToRefs } from &#39;pinia&#39;;

// 1.\u53D1\u8D77action\uFF0C\u8BF7\u6C42usersList\u6570\u636E
const systemStore = useSystemStore()
systemStore.getUsersListAction()

// 2.\u83B7\u53D6usersList\u6570\u636E(\u54CD\u5E94\u5F0F\u6570\u636E\uFF1A\u4E0A\u9762\u4EE3\u7801\u662F\u5F02\u6B65\u7684\uFF0C\u5F53\u6570\u636E\u8FD8\u6CA1\u62FF\u5230\u662F\uFF0C\u8FD9\u4E00\u53E5\u4E0D\u8D77\u4F5C\u7528\uFF0C\u9700\u8981\u7528storeToRefs)
const { usersList } = storeToRefs(systemStore)
console.log(usersList);
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.content {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title {
        font-size: 22px;
    }
}

.table {
    :deep(.el-table__cell) {
        padding: 12px 0;
    }

    .el-button {
        margin-left: 0;
        padding: 5px 8px;
    }
}

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u5904\u7406\u8868\u683C\u6570\u636E\u4E2D\u7684\u72B6\u6001\u4EE5\u53CA\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u5904\u7406\u8868\u683C\u6570\u636E\u4E2D\u7684\u72B6\u6001\u4EE5\u53CA\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u5904\u7406\u8868\u683C\u6570\u636E\u4E2D\u7684\u72B6\u6001\u4EE5\u53CA\u65F6\u95F4\u683C\u5F0F\u5316</h4><p>\u79D1\u666E\uFF1A\u4F5C\u7528\u57DF\u63D2\u69FD\uFF08\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u5185\u5BB9\uFF08\u6570\u636E\uFF09\uFF0C\u5728\u7236\u7EC4\u4EF6\u4E2D\u5C55\u793A\uFF0C\u5EF6\u4F38\u4E86\u5B50\u7EC4\u4EF6\u7684\u4F5C\u7528\u57DF\uFF09\uFF0C\u63D2\u69FD\uFF08\u7236\u7EC4\u4EF6\u63D0\u4F9B\u5185\u5BB9\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u5C55\u793A\uFF09</p><p><strong>\u5904\u7406\u72B6\u6001\u5C5E\u6027</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// ....
&lt;el-table-column align=&quot;center&quot; prop=&quot;enable&quot; label=&quot;\u72B6\u6001&quot; width=&quot;100px&quot;&gt;
    &lt;!-- \u4F5C\u7528\u57DF\u63D2\u69FD --&gt;
    &lt;template #default=&quot;{ row }&quot;&gt;
        &lt;el-button size=&quot;small&quot; :type=&quot;row.enable ? &#39;primary&#39; : &#39;danger&#39;&quot; plain&gt;
            {{ row.enable ? &#39;\u542F\u7528&#39; : &#39;\u7981\u7528&#39; }}
        &lt;/el-button&gt;
    &lt;/template&gt;
    //&lt;template #default=&quot;scope&quot;&gt;
    //    &lt;el-button size=&quot;small&quot; :type=&quot;scope.row.enable ? &#39;primary&#39; : &#39;danger&#39;&quot; plain&gt;
    //        {{ scope.row.enable ? &#39;\u542F\u7528&#39; : &#39;\u7981\u7528&#39; }}
    //    &lt;/el-button&gt;
    //&lt;/template&gt;
&lt;/el-table-column&gt;
// ....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5904\u7406\u65F6\u95F4\u683C\u5F0F</strong></p><p>\u5B89\u88C5 dayjs\uFF1A<code>npm install dayjs</code></p><p>\u5C01\u88C5\u65F6\u95F4\u683C\u5F0F\u5316\u5DE5\u5177<code>format.ts</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import dayjs from &#39;dayjs&#39;
import utc from &#39;dayjs/plugin/utc&#39;

dayjs.extend(utc)

export function formatUTC(utcString: string, format = &#39;YYYY-MM-DD HH:mm:ss&#39;) {
    // utcOffset\u4E1C\u516B\u533A\u504F\u79FB8\u5C0F\u65F6
    return dayjs.utc(utcString).utcOffset(8).format(format)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F5C\u7528\u57DF\u63D2\u69FD\u4E2D\u4F7F\u7528<code>formatUTC</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// ...
&lt;el-table-column align=&quot;center&quot; prop=&quot;createAt&quot; label=&quot;\u521B\u5EFA\u65F6\u95F4&quot; &gt;
    &lt;template #default=&quot;scope&quot;&gt;
        {{ formatUTC(scope.row.createAt) }}
    &lt;/template&gt;
&lt;/el-table-column&gt;
// ...
&lt;script&gt;
import { formatUTC } from &#39;@/utils/format&#39;;
// ...
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5206\u9875\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5206\u9875\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u5206\u9875\u529F\u80FD</h3><p><img src="https://secure2.wostatic.cn/static/wdmWHB3M9KTmPDFXj5Wve6/image.png" alt=""></p><h4 id="\u4ECE\u8BF7\u6C42\u63A5\u53E3\u4E2D\u83B7\u53D6offset\u548Csize\u5206\u9875\u6570\u636E\u3002" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u8BF7\u6C42\u63A5\u53E3\u4E2D\u83B7\u53D6offset\u548Csize\u5206\u9875\u6570\u636E\u3002" aria-hidden="true">#</a> \u4ECE\u8BF7\u6C42\u63A5\u53E3\u4E2D\u83B7\u53D6<code>offset</code>\u548C<code>size</code>\u5206\u9875\u6570\u636E\u3002</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import hyRequest from &quot;@/service&quot;;

// \u83B7\u53D6\u7528\u6237\u5217\u8868\u6570\u636E
export function getUserListData(queryInfo: any) {
    return hyRequest.post({
        url: &#39;/users/list&#39;,
        data: queryInfo
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> \u53C2\u6570\u4F20\u9012</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const useSystemStore = defineStore(&#39;system&#39;, {
    // ...
    actions: {
        async getUsersListAction(queryInfo: any) {
            // \u8C03\u7528axios\u8BF7\u6C42
            const userListResult = await getUserListData(queryInfo)
            const { totalCount, list } = userListResult.data
            // ...
        }
    }
})
export default useSystemStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528el-pagination\u5B8C\u6210\u9875\u9762\u642D\u5EFA\u3002" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528el-pagination\u5B8C\u6210\u9875\u9762\u642D\u5EFA\u3002" aria-hidden="true">#</a> \u4F7F\u7528<code>el-pagination</code>\u5B8C\u6210\u9875\u9762\u642D\u5EFA\u3002</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user-content.vue
// ....
&lt;div class=&quot;pagination&quot;&gt;
  &lt;el-pagination
      v-model:current-page=&quot;currentPage&quot;
      v-model:page-size=&quot;pageSize&quot;
      :page-sizes=&quot;[10, 20, 30]&quot;
      :small=&quot;small&quot;
      layout=&quot;sizes, prev, pager, next, jumper, total&quot;
      :total=&quot;usersTotalCount&quot;
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
  /&gt;
&lt;/div&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;

// 1.\u53D1\u8D77action\uFF0C\u8BF7\u6C42usersList\u548C\u5206\u9875\u6570\u636E
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchUserListData()

// 2.\u83B7\u53D6usersList\u548CusersTotalCount\u6570\u636E(\u54CD\u5E94\u5F0F\u6570\u636E\uFF1A\u4E0A\u9762\u4EE3\u7801\u662F\u5F02\u6B65\u7684\uFF0C\u5F53\u6570\u636E\u8FD8\u6CA1\u62FF\u5230\u662F\uFF0C\u8FD9\u4E00\u53E5\u4E0D\u8D77\u4F5C\u7528\uFF0C\u9700\u8981\u7528storeToRefs)
const { usersList, usersTotalCount } = storeToRefs(systemStore)

// 3.\u5206\u9875\u529F\u80FD
function handleSizeChange() {
    fetchUserListData()
}

function handleCurrentChange() {
    fetchUserListData()
}

// 4.\u5B9A\u4E49\u51FD\u6570\uFF0C\u7528\u4E8E\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42
function fetchUserListData() {
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const info = { size, offset}

    // \u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42
    systemStore.getUsersListAction(info)
}
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u67E5\u8BE2\u7528\u6237\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u67E5\u8BE2\u7528\u6237\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u67E5\u8BE2\u7528\u6237\u529F\u80FD</h3><p><img src="https://secure2.wostatic.cn/static/ZU6FzP3sKV8Sdjrqc8PYh/image.png" alt=""></p><h4 id="\u901A\u8FC7\u4E8B\u4EF6\u5C06\u8868\u5355\u5185\u5BB9\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u4E8B\u4EF6\u5C06\u8868\u5355\u5185\u5BB9\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6" aria-hidden="true">#</a> \u901A\u8FC7\u4E8B\u4EF6\u5C06\u8868\u5355\u5185\u5BB9\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6</h4><p>\u5B50\u4F20\u7236\uFF1A\u4F7F\u7528<code>const emit = defineEmits(&#39;xxx&#39;)</code>\uFF0C<code>emit(&#39;xxx&#39;)</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user-search.vue
&lt;template&gt;
    // ...
    &lt;div class=&quot;btns&quot;&gt;
        &lt;el-button icon=&quot;Refresh&quot; size=&quot;large&quot; @click=&quot;handleResetClick()&quot;&gt;\u91CD\u7F6E&lt;/el-button&gt;
        &lt;el-button icon=&quot;Search&quot; size=&quot;large&quot; type=&quot;primary&quot; @click = &quot;handleQueryClick()&quot;&gt;\u641C\u7D22&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, ref } from &quot;vue&quot;;
import type { ElForm } from &quot;element-plus&quot;;

const emit = defineEmits([&#39;queryClick&#39;, &#39;resetClick&#39;])

const searchForm = reactive({
    name: &#39;&#39;,
    realname: &#39;&#39;,
    cellphone: &#39;&#39;,
    enable: 1,
    createAt: &#39;&#39;
})
// \u91CD\u7F6E\u529F\u80FD
// ...

// \u641C\u7D22\u529F\u80FD
function handleQueryClick() {
    // \u901A\u8FC7\u4E8B\u4EF6\u629B\u51FA\uFF08\u5B50\u4F20\u7236\uFF09
    emit(&#39;queryClick&#39;, searchForm)
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u63A5\u53D7\u4E8B\u4EF6\u5E76\u8C03\u7528\u53E6\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u66B4\u9732\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u63A5\u53D7\u4E8B\u4EF6\u5E76\u8C03\u7528\u53E6\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u66B4\u9732\u7684\u51FD\u6570" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u63A5\u53D7\u4E8B\u4EF6\u5E76\u8C03\u7528\u53E6\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u66B4\u9732\u7684\u51FD\u6570</h4><p>\u5B50\u4F20\u7236\u4E5F\u53EF\u4EE5\u7528<code>defineExpose()</code>\uFF0C\u8FD9\u91CC<code>user-content</code>\u5B50\u7EC4\u4EF6\u4F7F\u7528\u6B64\u51FD\u6570\u63A5\u53D7\u7236\u7EC4\u4EF6\uFF08\u7531<code>user-search</code>\u4F20\u8FC7\u6765\uFF09\u4F20\u8FC7\u6765\u7684<code>searchForm</code>\u4FE1\u606F\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user.vue
&lt;template&gt;
  &lt;div class=&quot;user&quot;&gt;
    &lt;user-search @query-click=&quot;handleQueryClick&quot; @reset-click=&quot;handleResetClick&quot;/&gt;
    &lt;user-content ref=&quot;contentRef&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import userContent from &#39;./cpns/user-content.vue&#39;
import userSearch from &#39;./cpns/user-search.vue&#39;

const contentRef = ref&lt;InstanceType&lt;typeof userContent&gt;&gt;()
function handleQueryClick(searchInfo: any) {
  contentRef.value?.fetchUserListData(searchInfo)
}

function handleResetClick() {
  contentRef.value?.fetchUserListData()
}
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;

&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  // ...
&lt;/template&gt;

&lt;script setup&gt;
// ...
// 4.\u5B9A\u4E49\u51FD\u6570\uFF0C\u7528\u4E8E\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42
function fetchUserListData(formData: any = {}) {
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const pageInfo = { size, offset}

    const queryInfo = { ...formData, ...pageInfo }
    // \u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42
    systemStore.getUsersListAction(queryInfo)
}

// \u66B4\u9732\u51FD\u6570\u7ED9\u7236\u7EC4\u4EF6
defineExpose({
    fetchUserListData
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5220\u9664\u7528\u6237\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5220\u9664\u7528\u6237\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u5220\u9664\u7528\u6237\u529F\u80FD</h3><p><img src="https://secure2.wostatic.cn/static/aX3DHhVE3tdWi7KgXFukZ6/image.png" alt=""></p><p>\u901A\u8FC7\u4F5C\u7528\u57DF\u63D2\u69FD\u83B7\u53D6\u5F53\u524D\u70B9\u51FB\u5220\u9664\u6309\u94AE\u90A3\u4E00\u884C\u7684\u7528\u6237<code>id</code>\uFF0C\u5373<code>scope.row.id</code>\uFF0C\u5C06<code>id</code>\u4F20\u5165\u7528\u6237\u5220\u9664\u63A5\u53E3\u3002</p><h4 id="\u5C01\u88C5\u5220\u9664\u7528\u6237\u6570\u636E\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u5220\u9664\u7528\u6237\u6570\u636E\u63A5\u53E3" aria-hidden="true">#</a> \u5C01\u88C5\u5220\u9664\u7528\u6237\u6570\u636E\u63A5\u53E3</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import hyRequest from &quot;@/service&quot;;
// ...
// \u5220\u9664\u7528\u6237\u6570\u636E
export function deleteUserData(id: number) {
    return hyRequest.delete({
        url: \`/users/\${id}\`
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pinia-\u4E2D\u8C03\u7528\u63A5\u53E3\u7684-actions" tabindex="-1"><a class="header-anchor" href="#pinia-\u4E2D\u8C03\u7528\u63A5\u53E3\u7684-actions" aria-hidden="true">#</a> pinia \u4E2D\u8C03\u7528\u63A5\u53E3\u7684 actions</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const useSystemStore = defineStore(&#39;system&#39;, {
    state: (): ISystemState =&gt; ({
        // ...
    }),
    actions: {
        // ...
        // \u5220\u9664\u7528\u6237\u6570\u636E
        async deleteUserDataAction(id: number) {
            // \u8C03\u7528axios\u8BF7\u6C42
            const res = await deleteUserData(id)
            // \u91CD\u65B0\u8BF7\u6C42\u6570\u636E\u5237\u65B0\u9875\u9762
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})

export default useSystemStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9875\u9762\u4E2D\u83B7\u53D6-id-\u4F20\u5165-actions" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4E2D\u83B7\u53D6-id-\u4F20\u5165-actions" aria-hidden="true">#</a> \u9875\u9762\u4E2D\u83B7\u53D6 id \u4F20\u5165 actions</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
    &lt;div class=&quot;content&quot;&gt;
      // ...
      &lt;div class=&quot;table&quot;&gt;
        &lt;el-table :data=&quot;usersList&quot; border style=&quot;width: 100%&quot;&gt;
            // ...
            &lt;el-table-column align=&quot;center&quot; label=&quot;\u64CD\u4F5C&quot; width=&quot;150px&quot;&gt;
                &lt;template #default=&quot;scope&quot;&gt;
                    &lt;el-button type=&quot;primary&quot; icon=&quot;Edit&quot; size=&quot;small&quot; text&gt;\u7F16\u8F91&lt;/el-button&gt;
                    &lt;el-button type=&quot;danger&quot; icon=&quot;Delete&quot; size=&quot;small&quot; text @click=&quot;handleDeleteClick(scope.row.id)&quot;&gt;\u5220\u9664&lt;/el-button&gt;
                &lt;/template&gt;
            &lt;/el-table-column&gt;
        &lt;/el-table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import useSystemStore from &#39;@/store/main/system/system&#39;;
// ...
const systemStore = useSystemStore()

// \u5220\u9664\u7528\u6237\u6570\u636E
function handleDeleteClick(id) {
    systemStore.deleteUserDataAction(id)
}

&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u65B0\u589E\u7528\u6237\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B0\u589E\u7528\u6237\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u65B0\u589E\u7528\u6237\u529F\u80FD</h3><p><img src="https://secure2.wostatic.cn/static/kiR4cMYTVrkxP3VvGP72Rz/image.png" alt=""></p><p>\u7531\u4E8E\u65B0\u5EFA\u7528\u6237\u6309\u94AE\u5728<code>user-content.vue</code>\u9875\u9762\u4E2D\uFF0C\u4E0E<code>user-modal.vue</code>\u662F\u5144\u5F1F\u7EC4\u4EF6\uFF0C\u9700\u8981\u7528\u5230\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u7531<code>user-content.vue</code>\u53D1\u8D77\u4E8B\u4EF6<code>defineEmits()</code></p><h4 id="\u521D\u6B65\u642D\u5EFA\u6A21\u6001\u6846\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u521D\u6B65\u642D\u5EFA\u6A21\u6001\u6846\u9875\u9762" aria-hidden="true">#</a> \u521D\u6B65\u642D\u5EFA\u6A21\u6001\u6846\u9875\u9762</h4><p>\u4F7F\u7528<code>el-dialog</code>\u7EC4\u4EF6\u5B9E\u73B0\uFF0C<code>v-model</code>\u7ED1\u5B9A\u6A21\u6001\u6846\u7684<code>dialogVisible</code>\u53EF\u89C1\u503C\uFF0C\u5C01\u88C5\u5230\u51FD\u6570\u4E2D\uFF0C\u5C06\u5176\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user-modal.vue
&lt;template&gt;
  &lt;div class=&quot;modal&quot;&gt;
    &lt;el-dialog v-model=&quot;dialogVisible&quot; title=&quot;\u65B0\u5EFA\u7528\u6237&quot; width=&quot;30%&quot; center&gt;
    &lt;div class=&quot;form&quot;&gt;
        &lt;el-form :model=&quot;formData&quot; label-width=&quot;80px&quot; size=&quot;large&quot;&gt;
            &lt;el-form-item label=&quot;\u7528\u6237\u540D&quot; prop=&quot;name&quot;&gt;
                &lt;el-input v-model=&quot;formData.name&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;&gt;&lt;/el-input&gt;
            &lt;/el-form-item&gt;
            &lt;el-form-item label=&quot;\u771F\u5B9E\u59D3\u540D&quot; prop=&quot;realname&quot;&gt;
                &lt;el-input v-model=&quot;formData.realname&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D&quot;&gt;&lt;/el-input&gt;
            &lt;/el-form-item&gt;
            &lt;el-form-item label=&quot;\u5BC6\u7801&quot; prop=&quot;password&quot;&gt;
                &lt;el-input v-model=&quot;formData.password&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; show-password&gt;&lt;/el-input&gt;
            &lt;/el-form-item&gt;
            &lt;el-form-item label=&quot;\u7535\u8BDD\u53F7\u7801&quot; prop=&quot;cellphone&quot;&gt;
                &lt;el-input v-model=&quot;formData.cellphone&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801&quot;&gt;&lt;/el-input&gt;
            &lt;/el-form-item&gt;
            &lt;el-form-item label=&quot;\u9009\u62E9\u89D2\u8272&quot; prop=&quot;roleId&quot;&gt;
                &lt;el-select v-model=&quot;formData.roleId&quot; placeholder=&quot;\u8BF7\u9009\u62E9\u89D2\u8272&quot; style=&quot;width: 100%&quot;&gt;&lt;/el-select&gt;
            &lt;/el-form-item&gt;
            &lt;el-form-item label=&quot;\u9009\u62E9\u90E8\u95E8&quot; prop=&quot;departmentId&quot;&gt;
                &lt;el-select v-model=&quot;formData.departmentId&quot; placeholder=&quot;\u8BF7\u9009\u62E9\u90E8\u95E8&quot; style=&quot;width: 100%&quot;&gt;&lt;/el-select&gt;
            &lt;/el-form-item&gt;
        &lt;/el-form&gt;
    &lt;/div&gt;
    &lt;template #footer&gt;
      &lt;span class=&quot;dialog-footer&quot;&gt;
        &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
        &lt;el-button type=&quot;primary&quot; @click=&quot;dialogVisible = false&quot;&gt;\u786E\u5B9A&lt;/el-button&gt;
      &lt;/span&gt;
    &lt;/template&gt;
  &lt;/el-dialog&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, ref } from &quot;vue&quot;;

const dialogVisible = ref(false)
const formData = reactive({
    name: &#39;&#39;,
    realname: &#39;&#39;,
    password: &#39;&#39;,
    cellphone: &#39;&#39;,
    roleId: &#39;&#39;,
    departmentId: &#39;&#39;
})

function setDialogVisible() {
  dialogVisible.value = true
}

defineExpose({
    setDialogVisible
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u70B9\u51FB\u65B0\u5EFA\u7528\u6237\u6309\u94AE\u53D1\u8D77\u7EC4\u4EF6\u901A\u4FE1</strong></p><p>\u4F7F\u7528<code>defineEmits</code>\u53D1\u8D77\u70B9\u51FB\u4E8B\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6<code>user.vue</code>\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user-content.vue
&lt;template&gt;
    &lt;div class=&quot;content&quot;&gt;
      &lt;div class=&quot;header&quot;&gt;
        &lt;h2 class=&quot;title&quot;&gt;\u7528\u6237\u5217\u8868&lt;/h2&gt;
        &lt;el-button type=&quot;primary&quot; @click=&quot;handleNewData&quot;&gt;\u65B0\u5EFA\u7528\u6237&lt;/el-button&gt;
      &lt;/div&gt;
      &lt;div class=&quot;table&quot;&gt;
        &lt;el-table :data=&quot;usersList&quot; border style=&quot;width: 100%&quot;&gt;
           // ...
        &lt;/el-table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// ...
const emit = defineEmits([&#39;newDataClick&#39;])

// 6.\u65B0\u5EFA\u7528\u6237\u529F\u80FD
function handleNewData() {
    emit(&#39;newDataClick&#39;)
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7236\u7EC4\u4EF6\u83B7\u53D6\u4E8B\u4EF6</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user.vue
&lt;template&gt;
  &lt;div class=&quot;user&quot;&gt;
    // ...
    &lt;user-content ref=&quot;contentRef&quot; @new-data-click=&quot;handleNewDataClick&quot;/&gt;
    &lt;user-modal ref=&quot;modalRef&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import userModal from &#39;./cpns/user-modal.vue&#39;

const modalRef = ref&lt;InstanceType&lt;typeof userModal&gt;&gt;()

// \u65B0\u589E\u7528\u6237\u529F\u80FD
function handleNewDataClick() {
  modalRef.value?.setDialogVisible()
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5168\u5C40\u5C01\u88C5\u83B7\u53D6\u89D2\u8272\u548C\u90E8\u95E8\u7684\u8BF7\u6C42\u63A5\u53E3\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5C01\u88C5\u83B7\u53D6\u89D2\u8272\u548C\u90E8\u95E8\u7684\u8BF7\u6C42\u63A5\u53E3\u6570\u636E" aria-hidden="true">#</a> \u5168\u5C40\u5C01\u88C5\u83B7\u53D6\u89D2\u8272\u548C\u90E8\u95E8\u7684\u8BF7\u6C42\u63A5\u53E3\u6570\u636E</h4><p><code>service</code>\u5C42\u4F7F\u7528<code>hyRequest</code>\u5C01\u88C5\u63A5\u53E3\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// serivce/main.ts
import hyRequest from &quot;..&quot;;

export function getEntireRoles() {
    return hyRequest.post({
        url: &quot;/role/list&quot;
    })
}

export function getEntireDepartments() {
    return hyRequest.post({
        url: &quot;/department/list&quot;
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pinia</code>\u8C03\u7528\u63A5\u53E3\u5B58\u50A8\u5728\u672C\u5730<code>store</code>\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// store/main.ts
import { getEntireDepartments, getEntireRoles } from &quot;@/service/main/main&quot;;
import { defineStore } from &quot;pinia&quot;;

interface IMainState {
    entireRoles: any[]
    entireDepartments: any[]
}

const useMainStore = defineStore(&#39;main&#39;, {
    state: (): IMainState =&gt; ({
        entireRoles: [],
        entireDepartments: []
    }),
    actions: {
        async fetchEntireDataAction() {
            const rolesResult = await getEntireRoles()
            const departmentResult = await getEntireDepartments()
            this.entireRoles = rolesResult.data.list
            this.entireDepartments = departmentResult.data.list
        }
    }
})
export default useMainStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u767B\u5F55<code>actions</code>\u4E2D\u53D1\u8D77\u8C03\u7528\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// store/login.ts
import useMainStore from &quot;../main/main&quot;;

interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any[]
}

const useLoginStore = defineStore(&#39;login&#39;, {
    state: (): ILoginState =&gt; ({
        token: &#39;&#39;,
        userInfo: {},
        userMenus: []
    }),
    actions: {
        async loginAccountAction(account: IAccount) {
            // ...

            // 6.\u8BF7\u6C42\u6240\u6709roles/department\u6570\u636E(\u5237\u65B0\u65F6\u6570\u636E\u4F1A\u6D88\u5931)
            const mainStore = useMainStore()
            mainStore.fetchEntireDataAction()

            //  \u9875\u9762\u8DF3\u8F6C
            router.push(&#39;/main&#39;)
        },

        // \u89E3\u51B3\u5237\u65B0\u9875\u9762\u540E\uFF0C\u52A8\u6001\u8DEF\u7531\u4E22\u5931\u7684\u95EE\u9898(\u4E0D\u518D\u662FloginAccountAction\u767B\u5F55\u65F6\u624D\u6267\u884C)
        loadLocalDataAction() {
            // ...
            if(token &amp;&amp; userInfo &amp;&amp; userMenus) {
                // ...
                // \u8BF7\u6C42\u6240\u6709roles/department\u6570\u636E(\u5237\u65B0\u65F6\u6570\u636E\u4E0D\u4F1A\u6D88\u5931\uFF0C\u7ECF\u5E38\u53D8\u5316\uFF0C\u4E0D\u653E\u7F13\u5B58\uFF0C\u5237\u65B0\u65F6\u8BF7\u6C42\u6700\u65B0\u7684)
                const mainStore = useMainStore()
                mainStore.fetchEntireDataAction()
                // ...
            }
        }
    }
})

export default useLoginStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5904\u7406\u89D2\u8272\u548C\u90E8\u95E8\u4E0B\u62C9\u6846" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u89D2\u8272\u548C\u90E8\u95E8\u4E0B\u62C9\u6846" aria-hidden="true">#</a> \u5904\u7406\u89D2\u8272\u548C\u90E8\u95E8\u4E0B\u62C9\u6846</h4><p>\u5728<code>el-select</code>\u4E2D\u4F7F\u7528<code>v-for</code>\u5FAA\u73AF\u904D\u5386<code>el-option</code>\uFF0C\u52A8\u6001\u56DE\u663E\u5230<code>label</code>\u5C5E\u6027\u4E2D\u3002\u89D2\u8272\u548C\u90E8\u95E8\u6570\u636E\u4ECE<code>pinia</code>\u4E2D\u83B7\u53D6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;modal&quot;&gt;
    &lt;el-dialog v-model=&quot;dialogVisible&quot; title=&quot;\u65B0\u5EFA\u7528\u6237&quot; width=&quot;30%&quot; center&gt;
    &lt;div class=&quot;form&quot;&gt;
        &lt;el-form :model=&quot;formData&quot; label-width=&quot;80px&quot; size=&quot;large&quot;&gt;
            // ...
            &lt;el-form-item label=&quot;\u9009\u62E9\u89D2\u8272&quot; prop=&quot;roleId&quot;&gt;
                &lt;el-select v-model=&quot;formData.roleId&quot; placeholder=&quot;\u8BF7\u9009\u62E9\u89D2\u8272&quot; style=&quot;width: 100%&quot;&gt;
                    &lt;template v-for=&quot;item in entireRoles&quot; :key=&quot;item.id&quot;&gt;
                        &lt;el-option :label=&quot;item.name&quot; :value=&quot;item.id&quot;/&gt;
                    &lt;/template&gt;
                &lt;/el-select&gt;
            &lt;/el-form-item&gt;
            &lt;el-form-item label=&quot;\u9009\u62E9\u90E8\u95E8&quot; prop=&quot;departmentId&quot;&gt;
                &lt;el-select v-model=&quot;formData.departmentId&quot; placeholder=&quot;\u8BF7\u9009\u62E9\u90E8\u95E8&quot; style=&quot;width: 100%&quot;&gt;
                    &lt;template v-for=&quot;item in entireDepartments&quot; :key=&quot;item.id&quot;&gt;
                        &lt;el-option :label=&quot;item.name&quot; :value=&quot;item.id&quot;/&gt;
                    &lt;/template&gt;
                &lt;/el-select&gt;
            &lt;/el-form-item&gt;
        &lt;/el-form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import useMainStore from &quot;@/store/main/main&quot;;
import { storeToRefs } from &quot;pinia&quot;;
// ...

// \u83B7\u53D6roles/departments\u6570\u636E
const mainStore = useMainStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)
// ...
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5\u65B0\u5EFA\u7528\u6237\u8BF7\u6C42\u63A5\u53E3\u5E76\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u65B0\u5EFA\u7528\u6237\u8BF7\u6C42\u63A5\u53E3\u5E76\u8C03\u7528" aria-hidden="true">#</a> \u5C01\u88C5\u65B0\u5EFA\u7528\u6237\u8BF7\u6C42\u63A5\u53E3\u5E76\u8C03\u7528</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//sevice/main/system/system.ts
import hyRequest from &quot;@/service&quot;;
// \u83B7\u53D6\u7528\u6237\u5217\u8868\u6570\u636E...

// \u5220\u9664\u7528\u6237\u6570\u636E...

// \u65B0\u5EFA\u7528\u6237\u6570\u636E
export function newUserData(userInfo: any) {
    return hyRequest.post({
        url: &#39;/users&#39;,
        data: userInfo
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { deleteUserData, getUserListData, newUserData } from &quot;@/service/main/system/system&quot;;
// ...
const useSystemStore = defineStore(&#39;system&#39;, {
    state: (): ISystemState =&gt; ({
        usersList: [],
        usersTotalCount: 0
    }),
    actions: {
        // \u83B7\u53D6\u7528\u6237\u6570\u636E\u5217\u8868...

        // \u5220\u9664\u7528\u6237\u6570\u636E...

        // \u65B0\u589E\u7528\u6237\u6570\u636E
        async newUserDataAction(userInfo: any) {
            // \u521B\u5EFA\u65B0\u7684\u7528\u6237
            const newResult =  await newUserData(userInfo)
            // \u91CD\u65B0\u53D1\u9001\u8BF7\u6C42\u6570\u636E\u5237\u65B0\u9875\u9762
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;modal&quot;&gt;
    &lt;el-dialog v-model=&quot;dialogVisible&quot; title=&quot;\u65B0\u5EFA\u7528\u6237&quot; width=&quot;30%&quot; center&gt;
        &lt;div class=&quot;form&quot;&gt;
            // ...
        &lt;/div&gt;
        &lt;template #footer&gt;
            &lt;span class=&quot;dialog-footer&quot;&gt;
                &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
                &lt;el-button type=&quot;primary&quot; @click=&quot;handleConfirmClick&quot;&gt;\u786E\u5B9A&lt;/el-button&gt;
            &lt;/span&gt;
        &lt;/template&gt;
    &lt;/el-dialog&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import useSystemStore from &quot;@/store/main/system/system&quot;;

const dialogVisible = ref(false)
const formData = reactive({
    name: &#39;&#39;,
    realname: &#39;&#39;,
    password: &#39;&#39;,
    cellphone: &#39;&#39;,
    roleId: &#39;&#39;,
    departmentId: &#39;&#39;
})

const systemStore = useSystemStore()
// ...

// dialog\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u903B\u8F91
function handleConfirmClick() {
    // \u5173\u95E8dialog
    dialogVisible.value = false
    // \u53D1\u9001\u65B0\u5EFA\u7528\u6237\u8BF7\u6C42
    systemStore.newUserDataAction(formData)
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u7F16\u8F91\u7528\u6237\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7F16\u8F91\u7528\u6237\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u7F16\u8F91\u7528\u6237\u529F\u80FD</h3><p><img src="https://secure2.wostatic.cn/static/2kTCgLjUXD2ooG3Tvr3TMx/image.png" alt=""></p><h4 id="\u5C01\u88C5\u4FEE\u6539\u7528\u6237\u8BF7\u6C42\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u4FEE\u6539\u7528\u6237\u8BF7\u6C42\u63A5\u53E3" aria-hidden="true">#</a> \u5C01\u88C5\u4FEE\u6539\u7528\u6237\u8BF7\u6C42\u63A5\u53E3</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import hyRequest from &quot;@/service&quot;;
// ...
// \u7F16\u8F91\u7528\u6237\u6570\u636E
export function editUserData(id: number, userInfo: any) {
    return hyRequest.patch({
        url: \`/users/\${id}\`,
        data: userInfo
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pinia-\u4E2D\u8C03\u7528\u63A5\u53E3\u7684-actions-1" tabindex="-1"><a class="header-anchor" href="#pinia-\u4E2D\u8C03\u7528\u63A5\u53E3\u7684-actions-1" aria-hidden="true">#</a> pinia \u4E2D\u8C03\u7528\u63A5\u53E3\u7684 actions</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { deleteUserData, editUserData, getUserListData, newUserData } from &quot;@/service/main/system/system&quot;;

const useSystemStore = defineStore(&#39;system&#39;, {
    state: (): ISystemState =&gt; ({
        // ...
    }),
    actions: {
        // ...
        // \u7F16\u8F91\u7528\u6237\u6570\u636E
        async editUserDataAction(id: number, userInfo: any) {
            const editResult = await editUserData(id, userInfo)
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})

export default useSystemStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u73B0\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u5F39\u51FA\u6A21\u6001\u6846" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u5F39\u51FA\u6A21\u6001\u6846" aria-hidden="true">#</a> \u5B9E\u73B0\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u5F39\u51FA\u6A21\u6001\u6846</h4><p>\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u5C06\u5B50\u7EC4\u4EF6<code>user-content</code>\u7684\u70B9\u51FB\u4E8B\u4EF6\u53D1\u9001\u7ED9\u7236\u7EC4\u4EF6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// user-content.vue
&lt;template&gt;
    &lt;div class=&quot;content&quot;&gt;
      // ...
      &lt;div class=&quot;table&quot;&gt;
        &lt;el-table :data=&quot;usersList&quot; border style=&quot;width: 100%&quot;&gt;
            // ...
            &lt;el-table-column align=&quot;center&quot; label=&quot;\u64CD\u4F5C&quot; width=&quot;150px&quot;&gt;
                &lt;template #default=&quot;scope&quot;&gt;
                    &lt;el-button type=&quot;primary&quot; icon=&quot;Edit&quot; size=&quot;small&quot; text @click=&quot;handleEditClick(scope.row)&quot;&gt;\u7F16\u8F91&lt;/el-button&gt;
                    &lt;el-button type=&quot;danger&quot; icon=&quot;Delete&quot; size=&quot;small&quot; text @click=&quot;handleDeleteClick(scope.row.id)&quot;&gt;\u5220\u9664&lt;/el-button&gt;
                &lt;/template&gt;
            &lt;/el-table-column&gt;
        &lt;/el-table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// ...
const emit = defineEmits([&#39;newDataClick&#39;, &#39;editDataClick&#39;])
// ...

// 7.\u7F16\u8F91\u7528\u6237\u529F\u80FD
function handleEditClick(itemData) {
    emit(&#39;editDataClick&#39;, itemData)
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u7EC4\u4EF6\u63A5\u53D7\u70B9\u51FB\u4E8B\u4EF6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;user&quot;&gt;
    // ...
    &lt;user-content ref=&quot;contentRef&quot; @new-data-click=&quot;handleNewDataClick&quot; @edit-data-click=&quot;handleEditDataClick&quot;/&gt;
    &lt;user-modal ref=&quot;modalRef&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import userModal from &#39;./cpns/user-modal.vue&#39;
// ...

const modalRef = ref&lt;InstanceType&lt;typeof userModal&gt;&gt;()
// ...
// \u7F16\u8F91\u7528\u6237\u529F\u80FD
function handleEditDataClick(itemData: any) {
  // setDialogVisible\u7531user-modal\u5B50\u7EC4\u4EF6\u66B4\u9732\u51FA\u6765\u7684\u65B9\u6CD5
  modalRef.value?.setDialogVisible(false, itemData)
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7EC4\u4EF6<code>user-modal</code>\u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u65B9\u6CD5\u548C\u53C2\u6570\u3002\u5BF9\u6A21\u6001\u6846\u7684\u8868\u5355\u5185\u5BB9\u8FDB\u884C\u5224\u65AD\uFF0C\u5728\u7F16\u8F91\u6570\u636E\u65F6\u9664\u4E86\u5BC6\u7801\uFF0C\u5176\u5B83\u5C5E\u6027\u90FD\u8FDB\u884C\u56DE\u663E\uFF0C<code>title</code>\u53D8\u4E3A\u7F16\u8F91\u7528\u6237\u6587\u672C\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;modal&quot;&gt;
    &lt;el-dialog v-model=&quot;dialogVisible&quot; :title=&quot;isNewRef? &#39;\u65B0\u5EFA\u7528\u6237&#39;: &#39;\u7F16\u8F91\u7528\u6237&#39;&quot; width=&quot;30%&quot; center&gt;
        &lt;div class=&quot;form&quot;&gt;
            &lt;el-form :model=&quot;formData&quot; label-width=&quot;80px&quot; size=&quot;large&quot;&gt;
                // \u7F16\u8F91\u6570\u636E\u65F6\u5BC6\u7801\u4E0D\u8FDB\u884C\u56DE\u663E\u3002
                &lt;el-form-item v-if=&quot;isNewRef&quot; label=&quot;\u5BC6\u7801&quot; prop=&quot;password&quot;&gt;
                    &lt;el-input v-model=&quot;formData.password&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; show-password&gt;&lt;/el-input&gt;
                &lt;/el-form-item&gt;
                // ...
            &lt;/el-form&gt;
        &lt;/div&gt;
        &lt;template #footer&gt;
            &lt;span class=&quot;dialog-footer&quot;&gt;
                &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
                &lt;el-button type=&quot;primary&quot; @click=&quot;handleConfirmClick&quot;&gt;\u786E\u5B9A&lt;/el-button&gt;
            &lt;/span&gt;
        &lt;/template&gt;
    &lt;/el-dialog&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import useSystemStore from &quot;@/store/main/system/system&quot;;
// ...

const dialogVisible = ref(false)
// \u7F16\u8F91\u65F6\u5BC6\u7801\u4E0D\u663E\u793A
const isNewRef = ref(false)
const editData = ref()

const formData = reactive&lt;any&gt;({
    name: &#39;&#39;,
    realname: &#39;&#39;,
    password: &#39;&#39;,
    cellphone: &#39;&#39;,
    roleId: &#39;&#39;,
    departmentId: &#39;&#39;
})

// ...
// \u5B9A\u4E49\u8BBE\u7F6EdialogVisible\u7684\u65B9\u6CD5
function setDialogVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  // \u6A21\u6001\u6846\u8868\u5355\u56DE\u663E
  if(!isNew &amp;&amp; itemData) {
    // \u7F16\u8F91\u6570\u636E
    for(const key in formData) {
        // key\u4E0D\u4E00\u5B9A\u5728formData\u4E2D,\u6240\u4EE5\u9700\u8981\u52A0\u7C7B\u578B\u5224\u65ADany(reactive&lt;any&gt;)
        formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // \u65B0\u589E\u6570\u636E
    for(const key in formData) {
        formData[key] = &#39;&#39;
    }
    editData.value = null
  }
}

// dialog\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u903B\u8F91
function handleConfirmClick() {
    // \u5173\u95E8dialog
    dialogVisible.value = false
    // isNewRef\u4E3Afalse\u65F6\uFF0C\u53D1\u9001\u7F16\u8F91\u7528\u6237\u8BF7\u6C42
    if(!isNewRef.value &amp;&amp; editData.value) {
        systemStore.editUserDataAction(editData.value.id, formData)
    } else {
        // \u5426\u5219\u53D1\u9001\u65B0\u5EFA\u7528\u6237\u8BF7\u6C42
        systemStore.newUserDataAction(formData)
    }
}

// \u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5
defineExpose({
    setDialogVisible
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9AD8\u7EA7\u590D\u7528\u6027\u4EE3\u7801\u62BD\u53D6" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u590D\u7528\u6027\u4EE3\u7801\u62BD\u53D6" aria-hidden="true">#</a> \u9AD8\u7EA7\u590D\u7528\u6027\u4EE3\u7801\u62BD\u53D6</h2><p><strong>\u5C01\u88C5\u62BD\u53D6\u6210\u914D\u7F6E\u6587\u4EF6\u6765\u5B9E\u73B0\uFF0C\u589E\u5F3A\u590D\u7528\u6027\u3002</strong></p><h3 id="\u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> \u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42</h3><h4 id="\u62BD\u53D6\u63A5\u53E3\u7684\u516C\u5171\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u62BD\u53D6\u63A5\u53E3\u7684\u516C\u5171\u7279\u6027" aria-hidden="true">#</a> \u62BD\u53D6\u63A5\u53E3\u7684\u516C\u5171\u7279\u6027</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/** \u62BD\u53D6\u516C\u5171\u9875\u9762\u63A5\u53E3 */
// \u67E5\u8BE2
export function getPageListData(pageName: string, queryInfo: any) {
    return hyRequest.post({
      url: \`/\${pageName}/list\`,
      data: queryInfo
    })
}
// \u5220\u9664
export function deletePageData(pageName: string, id: number) {
    return hyRequest.delete({
      url: \`/\${pageName}/\${id}\`
    })
}
// \u65B0\u589E
export function newPageData(pageName: string, dataInfo: any) {
  return hyRequest.post({
    url: \`/\${pageName}\`,
    data: dataInfo
  })
}
// \u4FEE\u6539
export function editPageData(pageName: string, id: number, dataInfo: any) {
  return hyRequest.patch({
    url: \`/\${pageName}/\${id}\`,
    data: dataInfo
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u62BD\u53D6-pinia-\u5BF9\u5E94\u7684-actions" tabindex="-1"><a class="header-anchor" href="#\u62BD\u53D6-pinia-\u5BF9\u5E94\u7684-actions" aria-hidden="true">#</a> \u62BD\u53D6 pinia \u5BF9\u5E94\u7684 actions</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { deleteUserData, editUserData, getUserListData, newUserData, deletePageData, editPageData, getPageListData, newPageData } from &quot;@/service/main/system/system&quot;;
import { defineStore } from &quot;pinia&quot;;
import type { ISystemState } from &quot;./type&quot;;

const useSystemStore = defineStore(&#39;system&#39;, {
    state: (): ISystemState =&gt; ({
        // \u62BD\u53D6\u516C\u5171\u9875\u9762\u6570\u636E
        pageList: [],
        pageTotalCount: 0
    }),
    actions: {
        // \u62BD\u53D6\u516C\u5171\u9875\u9762action
        async getPageListDataAction(pageName: string, queryInfo: any) {
            // 1.\u8BF7\u6C42\u7528\u6237\u5217\u8868\u6570\u636E
            const pageListResult = await getPageListData(pageName, queryInfo)
            const { list, totalCount } = pageListResult.data
            this.pageList = list
            this.pageTotalCount = totalCount
        },
        async deletePageDataAction(pageName: string, id: number) {
            const res = await deletePageData(pageName, id)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        },
        async newPageDataAction(pageName: string, pageData: any) {
            const res = await newPageData(pageName, pageData)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        },
        async editPageDataAction(pageName: string, id: number, pageData: any) {
            const res = await editPageData(pageName, id, pageData)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        }

    }
})

export default useSystemStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>export interface ISystemState {
    // \u62BD\u53D6\u516C\u5171\u9875\u9762\u6570\u636E
    pageList: any[]
    pageTotalCount: number
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C01\u88C5\u8868\u5355\u641C\u7D22\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8868\u5355\u641C\u7D22\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C01\u88C5\u8868\u5355\u641C\u7D22\u7EC4\u4EF6</h3><p><img src="https://secure2.wostatic.cn/static/vwRrSUSNbjW7wAgWjK7gp9/image.png" alt=""></p><h4 id="\u7F16\u5199\u8868\u5355\u641C\u7D22\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u8868\u5355\u641C\u7D22\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u8868\u5355\u641C\u7D22\u914D\u7F6E\u6587\u4EF6</h4><p><code>search.config.ts</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const searchConfig = {
    labelWidth: &#39;120px&#39;,
    formItems: [
        {
            type: &#39;input&#39;,
            prop: &#39;name&#39;,
            label: &#39;\u90E8\u95E8\u540D\u79F0&#39;,
            placeholder: &#39;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u90E8\u95E8\u540D\u79F0&#39;
        },
        {
            type: &#39;input&#39;,
            prop: &#39;leader&#39;,
            label: &#39;\u90E8\u95E8\u9886\u5BFC&#39;,
            placeholder: &#39;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u9886\u5BFC\u540D\u79F0&#39;,
            initialValue: &#39;\u5F20\u4E09&#39;
        },
        {
            type: &#39;select&#39;,
            prop: &#39;enable&#39;,
            label: &#39;\u72B6\u6001&#39;,
            placeholder: &#39;\u8BF7\u9009\u62E9\u67E5\u8BE2\u7684\u72B6\u6001&#39;,
            options: [
                { label: &#39;\u542F\u7528&#39;, value: 1 },
                { label: &#39;\u7981\u7528&#39;, value: 0 }
            ]
        },
        {
            type: &#39;time&#39;,
            prop: &#39;createAt&#39;,
            label: &#39;\u521B\u5EFA\u65F6\u95F4&#39;
        }
    ]
}

export default searchConfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u91CD\u6784\u8868\u5355\u641C\u7D22\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6784\u8868\u5355\u641C\u7D22\u7EC4\u4EF6" aria-hidden="true">#</a> \u91CD\u6784\u8868\u5355\u641C\u7D22\u7EC4\u4EF6</h4><p>\u5C06\u91CC\u9762\u7684\u5177\u4F53\u7684\u5C5E\u6027\u540D\u79F0\u901A\u8FC7<code>search.config.ts</code>\u914D\u7F6E\u6587\u4EF6\u6765\u52A8\u6001\u904D\u5386\u5177\u4F53\u7684\u5C5E\u6027\u548C\u8868\u5355\u7C7B\u578B\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-search.vue
&lt;template&gt;
  &lt;div class=&quot;search&quot;&gt;
    &lt;el-form :model=&quot;searchForm&quot; ref=&quot;formRef&quot; :label-width=&quot;searchConfig.labelWidth ?? &#39;80px&#39;&quot; size=&quot;large&quot;&gt;
        &lt;el-row :gutter=&quot;20&quot;&gt;
            &lt;!-- \u52A8\u6001\u904D\u5386\u914D\u7F6Econfig\u6587\u4EF6 --&gt;
            &lt;template v-for=&quot;item in searchConfig.formItems&quot; :key=&quot;item.prop&quot;&gt;
                &lt;el-col :span=&quot;8&quot;&gt;
                    &lt;el-form-item :label=&quot;item.label&quot; :prop=&quot;item.prop&quot;&gt;
                        &lt;template v-if=&quot;item.type === &#39;input&#39;&quot;&gt;
                            &lt;el-input v-model=&quot;searchForm[item.prop]&quot; :placeholder=&quot;item.placeholder&quot;&gt;&lt;/el-input&gt;
                        &lt;/template&gt;
                        &lt;template v-if=&quot;item.type === &#39;time&#39;&quot;&gt;
                            &lt;el-date-picker
                                v-model=&quot;searchForm[item.prop]&quot;
                                type=&quot;daterange&quot;
                                range-separator=&quot;-&quot;
                                start-placeholder=&quot;\u5F00\u59CB\u65F6\u95F4&quot;
                                end-placeholder=&quot;\u7ED3\u675F\u65F6\u95F4&quot;
                            /&gt;
                        &lt;/template&gt;
                        &lt;template v-if=&quot;item.type === &#39;select&#39;&quot;&gt;
                            &lt;el-select v-model=&quot;searchForm[item.prop]&quot; :placeholder=&quot;item.placeholder&quot; style=&quot;width: 100%&quot;&gt;
                                &lt;template v-for=&quot;option in item.options&quot; :key=&quot;option.value&quot;&gt;
                                    &lt;el-option :label=&quot;option.label&quot; :value=&quot;option.value&quot;&gt;&lt;/el-option&gt;
                                &lt;/template&gt;
                            &lt;/el-select&gt;
                        &lt;/template&gt;
                    &lt;/el-form-item&gt;
                &lt;/el-col&gt;
            &lt;/template&gt;
        &lt;/el-row&gt;
    &lt;/el-form&gt;

    &lt;div class=&quot;btns&quot;&gt;
        &lt;el-button icon=&quot;Refresh&quot; size=&quot;large&quot; @click=&quot;handleResetClick()&quot;&gt;\u91CD\u7F6E&lt;/el-button&gt;
        &lt;el-button icon=&quot;Search&quot; size=&quot;large&quot; type=&quot;primary&quot; @click = &quot;handleQueryClick()&quot;&gt;\u641C\u7D22&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, ref } from &quot;vue&quot;;
import type { ElForm } from &quot;element-plus&quot;;

// \u5B9A\u4E49\u7684\u53C2\u6570\u9700\u4E0E\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u53C2\u6570\u4E00\u81F4
interface IProps {
    searchConfig: {
        labelWidth?: string,
        formItems: any[]
    }
}
// \u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u914D\u7F6E\u53C2\u6570
const props = defineProps&lt;IProps&gt;()

const emit = defineEmits([&#39;queryClick&#39;, &#39;resetClick&#39;])

const initialForm: any = {}
for(const item of props.searchConfig.formItems) {
    initialForm[item.prop] = item.initialValue ?? &#39;&#39;
}
const searchForm = reactive({
    initialForm
})

// \u91CD\u7F6E\u529F\u80FD
const formRef = ref&lt;InstanceType&lt;typeof ElForm&gt;&gt;()
function handleResetClick() {
    formRef.value?.resetFields()
    // \u53D1\u9001\u8BF7\u6C42\u91CD\u7F6E\u67E5\u627E
    emit(&#39;resetClick&#39;)
}

// \u641C\u7D22\u529F\u80FD
function handleQueryClick() {
    // \u901A\u8FC7\u4E8B\u4EF6\u629B\u51FA\uFF08\u5B50\u4F20\u7236\uFF09
    emit(&#39;queryClick&#39;, searchForm)
}
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.search {
    background-color: #fff;
    padding: 20px;

    .el-form-item {
        padding: 20px;
        margin-bottom: 0;
    }

    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u5F15\u7528\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u5F15\u7528\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u5F15\u7528\u914D\u7F6E\u6587\u4EF6</h4><p>\u7236\u7EC4\u4EF6\u4F20\u9012\u53C2\u6570\u4E3A<code>search-config</code>\u7ED9\u5B50\u7EC4\u4EF6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// department.vue
&lt;template&gt;
  &lt;div class=&quot;department&quot;&gt;
    &lt;page-search :search-config=&quot;searchConfig&quot;/&gt;
    // ...
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;department&quot;&gt;
import pageSearch from &#39;@/components/page-search/page-search.vue&#39;
import searchConfig from &#39;./config/search.config&#39;
// ...
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C01\u88C5\u8868\u683C\u5185\u5BB9\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8868\u683C\u5185\u5BB9\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C01\u88C5\u8868\u683C\u5185\u5BB9\u7EC4\u4EF6</h3><p><img src="https://secure2.wostatic.cn/static/6zGDaiK1EqPzQCHsgAaWAT/image.png" alt=""></p><h4 id="\u7F16\u5199\u8868\u683C\u5185\u5BB9\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u8868\u683C\u5185\u5BB9\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u8868\u683C\u5185\u5BB9\u914D\u7F6E\u6587\u4EF6</h4><p><code>content.config.ts</code></p><p>\u9488\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u8868\u683C\u6570\u636E\u7684\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u533A\u5206\u4E0D\u540C\u7684<code>type</code>\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const contentConfig = {
    pageName: &#39;Department&#39;,
    header: {
        title: &#39;\u90E8\u95E8\u5217\u8868&#39;,
        btnTitle: &#39;\u65B0\u5EFA\u90E8\u95E8&#39;
    },
    propsList:[
        { type: &#39;selection&#39;, label: &#39;\u9009\u62E9&#39;, width: &#39;80px&#39; },
        { type: &#39;index&#39;, label: &#39;\u5E8F\u53F7&#39;, width: &#39;80px&#39; },

        { type: &#39;normal&#39;, prop: &#39;name&#39;, label: &#39;\u90E8\u95E8\u540D\u79F0&#39;, width: &#39;150px&#39; },
        { type: &#39;normal&#39;, prop: &#39;leader&#39;, label: &#39;\u90E8\u95E8\u9886\u5BFC&#39;, width: &#39;150px&#39; },
        { type: &#39;normal&#39;, prop: &#39;parentId&#39;, label: &#39;\u4E0A\u7EA7\u90E8\u95E8&#39;, width: &#39;150px&#39; },

        { type: &#39;time&#39;, prop: &#39;createAt&#39;, label: &#39;\u521B\u5EFA\u65F6\u95F4&#39; },
        { type: &#39;time&#39;, prop: &#39;updateAt&#39;, label: &#39;\u66F4\u65B0\u65F6\u95F4&#39; },

        { type: &#39;handler&#39;, label: &#39;\u64CD\u4F5C&#39;, width: &#39;180px&#39; },
    ]
}

export default contentConfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u91CD\u6784\u8868\u683C\u5185\u5BB9\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6784\u8868\u683C\u5185\u5BB9\u7EC4\u4EF6" aria-hidden="true">#</a> \u91CD\u6784\u8868\u683C\u5185\u5BB9\u7EC4\u4EF6</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-content.vue
&lt;template&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;div class=&quot;header&quot;&gt;
      &lt;h3 class=&quot;title&quot;&gt;{{ contentConfig?.header?.title ?? &#39;\u6570\u636E\u5217\u8868&#39; }}&lt;/h3&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;handleNewData&quot;&gt;{{ contentConfig?.header?.btnTitle ?? &#39;\u65B0\u5EFA\u6570\u636E&#39; }}&lt;/el-button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;table&quot;&gt;
      &lt;el-table :data=&quot;pageList&quot; :border=&quot;true&quot; style=&quot;width: 100%&quot;&gt;
        &lt;template v-for=&quot;item in contentConfig.propsList&quot; :key=&quot;item.prop&quot;&gt;

          &lt;!-- \u5904\u7406\u5E26\u81EA\u5B9A\u4E49\u63D2\u69FD\u7684\u65F6\u95F4\u683C\u5F0F\u7C7B\u578B --&gt;
          &lt;template v-if=&quot;item.type === &#39;time&#39;&quot;&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot;&gt;
              &lt;template #default=&quot;scope&quot;&gt;
                {{ formatUTC(scope.row[item.prop]) }}
              &lt;/template&gt;
            &lt;/el-table-column&gt;
          &lt;/template&gt;

          &lt;!-- \u5904\u7406handle\u7C7B\u578B --&gt;
          &lt;template v-else-if=&quot;item.type === &#39;handler&#39;&quot;&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot;&gt;
              &lt;template #default=&quot;scope&quot;&gt;
                &lt;el-button type=&quot;primary&quot; size=&quot;small&quot; icon=&quot;EditPen&quot; link @click=&quot;handleEditClick(scope.row)&quot;&gt;
                  \u7F16\u8F91
                &lt;/el-button&gt;
                &lt;el-button type=&quot;danger&quot; size=&quot;small&quot; icon=&quot;Delete&quot; link @click=&quot;handleDeleteClick(scope.row.id)&quot;&gt;
                  \u5220\u9664
                &lt;/el-button&gt;
              &lt;/template&gt;
            &lt;/el-table-column&gt;
          &lt;/template&gt;

          &lt;!-- \u5904\u7406\u666E\u901A\u7C7B\u578B --&gt;
          &lt;template v-else&gt;
            &lt;!-- &lt;el-table-column align=&quot;center&quot; :type=&quot;item.type&quot; :prop=&quot;item.prop&quot; :label=&quot;item.label&quot; :width=&quot;item.width&quot; /&gt; \u76F8\u5F53\u4E8E\u4E0B\u9762--&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot; /&gt;
          &lt;/template&gt;
        &lt;/template&gt;
      &lt;/el-table&gt;
    &lt;/div&gt;
    &lt;div class=&quot;footer&quot;&gt;
      &lt;el-pagination
        v-model:currentPage=&quot;currentPage&quot;
        v-model:page-size=&quot;pageSize&quot;
        :page-sizes=&quot;[10, 20, 30]&quot;
        layout=&quot;total, sizes, prev, pager, next, jumper&quot;
        :total=&quot;pageTotalCount&quot;
        @current-change=&quot;handleCurrentChange&quot;
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;content&quot;&gt;
import { storeToRefs } from &#39;pinia&#39;
import useSystemStore from &#39;@/store/main/system/system&#39;
import { formatUTC } from &#39;@/utils/format&#39;;
import { ref } from &#39;vue&#39;

interface IProps {
  contentConfig: {
    // \u7528\u4E8E\u5904\u7406\u63A5\u53E3\u65B9\u6CD5\u4E2D\u4F20\u5165\u7684pageName\u53C2\u6570
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[]
  }
}

const props = defineProps&lt;IProps&gt;()

const emit = defineEmits([&#39;newDataClick&#39;, &#39;editDataClick&#39;])

// 1.\u8BF7\u6C42\u6570\u636E
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
function fetchPageListData(formData: any = {}) {
  // 1.\u83B7\u53D6offset\u548Csize
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset}

  // 2.\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42
  const queryInfo = { ...pageInfo, ...formData}
  // \u4ECE\u914D\u7F6E\u6587\u4EF6\u4E2D\u83B7\u53D6pageName
  systemStore.getPageListDataAction(props.contentConfig.pageName, { offset, size, ...queryInfo })
}
fetchPageListData()

// 2.\u5C55\u793A\u6570\u636E
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// 3.\u7ED1\u5B9A\u5206\u9875\u6570\u636E
function handleCurrentChange() {
  fetchPageListData()
}
function handleResetClick() {
  currentPage.value = 1
  pageSize.value = 10
  fetchPageListData()
}

// 4.\u65B0\u5EFA\u6570\u636E\u7684\u5904\u7406
function handleNewData() {
  emit(&#39;newDataClick&#39;)
}

// 5.\u5220\u9664\u548C\u7F16\u8F91\u64CD\u4F5C
function handleDeleteClick(id: number) {
  // \u4ECE\u914D\u7F6E\u6587\u4EF6\u4E2D\u83B7\u53D6pageName
  systemStore.deletePageDataAction(props.contentConfig.pageName, id)
}

function handleEditClick(data: any) {
  emit(&#39;editDataClick&#39;, data)
}

// \u66B4\u9732\u51FD\u6570
defineExpose({
  fetchPageListData,
  handleResetClick
})
&lt;/script&gt;

&lt;style scoped lang=&quot;less&quot;&gt;
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 14px 0;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u5F15\u7528\u914D\u7F6E\u6587\u4EF6-\u540E\u9762\u7EDF\u4E00\u8D77\u6765\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u5F15\u7528\u914D\u7F6E\u6587\u4EF6-\u540E\u9762\u7EDF\u4E00\u8D77\u6765\u6574\u7406" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u5F15\u7528\u914D\u7F6E\u6587\u4EF6\uFF08\u540E\u9762\u7EDF\u4E00\u8D77\u6765\u6574\u7406\uFF09</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;department&quot;&gt;
    &lt;page-search @query-click=&quot;handleQueryClick&quot; @reset-click=&quot;handleResetClick&quot; :search-config=&quot;searchConfig&quot;/&gt;
    &lt;page-content ref=&quot;contentRef&quot; @new-data-click=&quot;handleNewDataClick&quot; @edit-data-click=&quot;handleEditDataClick&quot; :content-config=&quot;contentConfig&quot;/&gt;
    &lt;page-modal ref=&quot;modalRef&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;department&quot;&gt;
import pageSearch from &#39;@/components/page-search/page-search.vue&#39;
import PageContent from &#39;@/components/page-content/page-content.vue&#39;
import PageModal from &#39;./cpns/page-modal.vue&#39;
import { ref } from &#39;vue&#39;

import searchConfig from &#39;./config/search.config&#39;
import contentConfig from &#39;./config/content.config&#39;

const contentRef = ref&lt;InstanceType&lt;typeof PageContent&gt;&gt;()
const modalRef = ref&lt;InstanceType&lt;typeof PageModal&gt;&gt;()
// \u641C\u7D22\u529F\u80FD
function handleQueryClick(searchInfo: any) {
  console.log(searchInfo);
  contentRef.value?.fetchPageListData(searchInfo)
}
// \u91CD\u7F6E\u529F\u80FD
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}
// \u65B0\u589E\u529F\u80FD
function handleNewDataClick() {
  modalRef.value?.setDialogVisible()
}
// \u7F16\u8F91\u529F\u80FD
function handleEditDataClick(itemData: any) {
  modalRef.value?.setDialogVisible(false, itemData)
}
&lt;/script&gt;

&lt;style scoped&gt;&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FDB\u9636-\u5C01\u88C5\u81EA\u5B9A\u4E49\u7684\u5B9A\u5236\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636-\u5C01\u88C5\u81EA\u5B9A\u4E49\u7684\u5B9A\u5236\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> (\u8FDB\u9636)\u5C01\u88C5\u81EA\u5B9A\u4E49\u7684\u5B9A\u5236\u4F5C\u7528\u57DF\u63D2\u69FD</h4><p>\u4EE5\u4E0A\u4EE3\u7801\u662F\u901A\u8FC7\u4E0D\u65AD\u7684<code>if</code>\u5224\u65AD <code>&lt;template v-else-if=&quot;item.type === &#39;custom&#39;&quot;&gt;</code>\uFF0C\u6765\u5904\u7406\u4E0D\u540C\u7C7B\u578B\uFF08\u5E26\u6709\u4F5C\u7528\u57DF\u63D2\u69FD\uFF09\u7684<code>table</code>\u6570\u636E\uFF0C\u5982\u56FE\u7247\u3001<code>el-tag</code>\u3001<code>button</code>\u7B49\u3002\u56E0\u6B64\u901A\u8FC7\u7F16\u5199\u901A\u7528\u7684\u81EA\u5B9A\u4E49\u63D2\u69FD\u6765\u9884\u7559\u4E00\u4E2A\u63D2\u69FD<code>slot</code>\u7ED9\u7236\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u5B9A\u5236<code>table</code>\u6570\u636E\u5185\u5BB9\u3002</p><p><strong>\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const contentConfig = {
    // ...
    propsList:[
        // ...
        // \u81EA\u5B9A\u4E49\u63D2\u69FD\u5B9A\u5236\uFF08\u901A\u7528\uFF09
        { type: &#39;custom&#39;, label: &#39;\u81EA\u5B9A\u4E49\u63D2\u69FD1&#39;, prop: &#39;leader&#39;, width: &#39;150px&#39;, slotName: &#39;leader&#39;},
        { type: &#39;custom&#39;, label: &#39;\u81EA\u5B9A\u4E49\u63D2\u69FD2&#39;, prop: &#39;parentId&#39;, width: &#39;150px&#39;, slotName: &#39;parent&#39;},
    ]
}

export default contentConfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u81EA\u5B9A\u4E49\u63D2\u69FD\u7684\u7EC4\u4EF6\u6A21\u7248</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;content&quot;&gt;
    // ...
    &lt;div class=&quot;table&quot;&gt;
      &lt;el-table :data=&quot;pageList&quot; :border=&quot;true&quot; style=&quot;width: 100%&quot;&gt;
        &lt;template v-for=&quot;item in contentConfig.propsList&quot; :key=&quot;item.prop&quot;&gt;
          &lt;!-- \u5904\u7406\u5E26\u81EA\u5B9A\u4E49\u63D2\u69FD\u7684\u65F6\u95F4\u683C\u5F0F\u7C7B\u578B --&gt;
          // ...
          &lt;!-- \u5904\u7406handle\u7C7B\u578B --&gt;
          // ....
          &lt;!-- \u5904\u7406\u666E\u901A\u7C7B\u578B --&gt;
          // ....

          &lt;!-- \u81EA\u5B9A\u4E49\u63D2\u69FD\u5B9A\u5236\u5904\u7406(\u901A\u7528) --&gt;
          &lt;template v-else-if=&quot;item.type === &#39;custom&#39;&quot;&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot;&gt;
              &lt;template #default=&quot;scope&quot;&gt;
                &lt;!-- \u7ED9\u7528\u6237\u9884\u7559\u5B9A\u5236\u63D2\u69FD --&gt;
                &lt;slot :name=&quot;item.slotName&quot; v-bind=&quot;scope&quot; :prop=&quot;item.prop&quot;&gt;&lt;/slot&gt;
              &lt;/template&gt;
            &lt;/el-table-column&gt;
          &lt;/template&gt;

        &lt;/template&gt;

      &lt;/el-table&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7236\u7EC4\u4EF6\u7F16\u5199\u5B9A\u5236\u63D2\u69FD</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;department&quot;&gt;
    &lt;page-search @query-click=&quot;handleQueryClick&quot; @reset-click=&quot;handleResetClick&quot; :search-config=&quot;searchConfig&quot;/&gt;

    &lt;page-content ref=&quot;contentRef&quot; @new-data-click=&quot;handleNewDataClick&quot; @edit-data-click=&quot;handleEditDataClick&quot; :content-config=&quot;contentConfig&quot;&gt;
      &lt;template #leader=&quot;scope&quot;&gt;
        &lt;span style=&quot;color: red;&quot;&gt;
          {{ scope.row[scope.prop] }}
        &lt;/span&gt;
      &lt;/template&gt;
      &lt;template #parent=&quot;scope&quot;&gt;
        &lt;el-tag&gt;
          {{ scope.row[scope.prop] }}
        &lt;/el-tag&gt;
      &lt;/template&gt;
    &lt;/page-content&gt;

    &lt;page-modal ref=&quot;modalRef&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C01\u88C5\u6A21\u6001\u6846\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u6A21\u6001\u6846\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C01\u88C5\u6A21\u6001\u6846\u7EC4\u4EF6</h3><p><img src="https://secure2.wostatic.cn/static/kbS9pkH3ukfcY4E2cyhBUd/image.png" alt=""></p><h4 id="\u7F16\u5199\u6A21\u6001\u6846\u5185\u5BB9\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u6A21\u6001\u6846\u5185\u5BB9\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u6A21\u6001\u6846\u5185\u5BB9\u914D\u7F6E\u6587\u4EF6</h4><p><code>motal.config.ts</code></p><p>\u8FD9\u91CC\u7684<code>options</code>\u5E94\u8BE5\u662F\u7531\u83B7\u53D6\u63A5\u53E3\u6570\u636E\u5F97\u5230\u7684\uFF0C\u540E\u7EED\u4F1A\u8FDB\u884C\u5C01\u88C5\uFF0C\u8FD9\u91CC\u5148\u5199\u4E3A\u9759\u6001\u7684\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const modalConfig = {
    header: {
        newTitle: &#39;\u65B0\u5EFA\u90E8\u95E8&#39;,
        editTitle: &#39;\u7F16\u8F91\u90E8\u95E8&#39;,
    },
    pageName: &#39;department&#39;,
    formItems: [
        {
            type: &#39;input&#39;,
            prop: &#39;name&#39;,
            label: &#39;\u90E8\u95E8\u540D\u79F0&#39;,
            placeholder: &#39;\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0&#39;
        },
        {
            type: &#39;input&#39;,
            prop: &#39;leader&#39;,
            label: &#39;\u90E8\u95E8\u9886\u5BFC&#39;,
            placeholder: &#39;\u8BF7\u8F93\u5165\u67E5\u8BE2\u7684\u9886\u5BFC\u540D\u79F0&#39;,
            initialValue: &#39;\u5F20\u4E09&#39;
        },
        {
            type: &#39;select&#39;,
            prop: &#39;parentId&#39;,
            label: &#39;\u4E0A\u7EA7\u90E8\u95E8&#39;,
            options: [
                // \u540E\u9762\u4F7F\u7528\u52A8\u6001\u83B7\u53D6
                // { label: &#39;\u90E8\u95E81&#39;, value: &#39;1&#39; },
            ]
        }
    ]
}

export default modalConfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u91CD\u6784\u6A21\u6001\u6846\u5185\u5BB9\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6784\u6A21\u6001\u6846\u5185\u5BB9\u7EC4\u4EF6" aria-hidden="true">#</a> \u91CD\u6784\u6A21\u6001\u6846\u5185\u5BB9\u7EC4\u4EF6</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-modal.vue
&lt;template&gt;
  &lt;div class=&quot;modal&quot;&gt;
    &lt;el-dialog v-model=&quot;dialogVisible&quot; :title=&quot;isEdit ? modalConfig.header.editTitle : modalConfig.header.newTitle&quot; width=&quot;30%&quot; center&gt;
      &lt;div class=&quot;form&quot;&gt;
        &lt;el-form :model=&quot;formData&quot; label-width=&quot;80px&quot; size=&quot;large&quot;&gt;
          &lt;template v-for=&quot;item in modalConfig.formItems&quot; :key=&quot;item.prop&quot;&gt;
            &lt;el-form-item v-bind=&quot;item&quot;&gt;
              &lt;template v-if=&quot;item.type === &#39;input&#39;&quot;&gt;
                &lt;el-input v-model=&quot;formData[item.prop]&quot; :placeholder=&quot;item.placeholder&quot; /&gt;
              &lt;/template&gt;

              &lt;template v-if=&quot;item.type === &#39;select&#39;&quot;&gt;
                &lt;el-select v-model=&quot;formData[item.prop]&quot; :placeholder=&quot;item.placeholder&quot; style=&quot;width: 100%&quot;&gt;
                  &lt;template v-for=&quot;option in item.options&quot; :key=&quot;option.value&quot;&gt;
                    &lt;el-option :value=&quot;option.value&quot; :label=&quot;option.label&quot; /&gt;
                  &lt;/template&gt;
                &lt;/el-select&gt;
              &lt;/template&gt;
            &lt;/el-form-item&gt;
          &lt;/template&gt;
        &lt;/el-form&gt;
      &lt;/div&gt;
      &lt;template #footer&gt;
        &lt;span class=&quot;dialog-footer&quot;&gt;
          &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
          &lt;el-button type=&quot;primary&quot; @click=&quot;handleConfirmClick&quot;&gt;\u786E\u5B9A&lt;/el-button&gt;
        &lt;/span&gt;
      &lt;/template&gt;
    &lt;/el-dialog&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;modal&quot;&gt;
import useMainStore from &#39;@/store/main/main&#39;
import useSystemStore from &#39;@/store/main/system/system&#39;
import { storeToRefs } from &#39;pinia&#39;
import { reactive, ref } from &#39;vue&#39;

const dialogVisible = ref(false)
const isEdit = ref(false)
const editData = ref()

// \u90E8\u95E8\u548C\u89D2\u8272\u7684\u6570\u636E
const mainStore = useMainStore()
const { entireDepartments } = storeToRefs(mainStore)

interface IProps {
  modalConfig: {
    header: {
      newTitle: string,
      editTitle: string
    }
    pageName: string,
    formItems: any[]
  }
}

// \u5B9A\u4E49props
const props = defineProps&lt;IProps&gt;()

// \u5B9A\u4E49\u6570\u636E\u7ED1\u5B9A
const initialForm: any = {}
for(const item of props.modalConfig.formItems) {
    initialForm[item.prop] = item.initialValue ?? &#39;&#39;
}
const formData = reactive&lt;any&gt;(initialForm)

// \u70B9\u51FB\u786E\u5B9A
const systemStore = useSystemStore()
function handleConfirmClick() {
  dialogVisible.value = false
  if (!isEdit.value) {
    systemStore.newPageDataAction(props.modalConfig.pageName, formData)
  } else {
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, formData)
  }
}

// \u65B0\u5EFA\u6216\u8005\u7F16\u8F91
function setDialogVisible(isNew: boolean = true, data: any = {}) {
  dialogVisible.value = true
  isEdit.value = !isNew
  editData.value = data
  for (const key in formData) {
    if (isNew) {
      formData[key] = &#39;&#39;
    } else {
      formData[key] = data[key]
    }
  }
}

defineExpose({
  setDialogVisible
})
&lt;/script&gt;

&lt;style scoped lang=&quot;less&quot;&gt;
.form {
  padding: 10px 30px;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C06\u9009\u62E9\u5668\u4E0B\u62C9\u5185\u5BB9-options-\u6539\u4E3A\u52A8\u6001\u83B7\u53D6\u63A5\u53E3\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5C06\u9009\u62E9\u5668\u4E0B\u62C9\u5185\u5BB9-options-\u6539\u4E3A\u52A8\u6001\u83B7\u53D6\u63A5\u53E3\u6570\u636E" aria-hidden="true">#</a> \u5C06\u9009\u62E9\u5668\u4E0B\u62C9\u5185\u5BB9 options \u6539\u4E3A\u52A8\u6001\u83B7\u53D6\u63A5\u53E3\u6570\u636E</h4><p>\u5728\u7236\u7EC4\u4EF6\u4E2D\u5C06\u8981\u4F20\u5165\u7684<code>modalConfig</code>\u8FDB\u884C\u9884\u5904\u7406\uFF0C\u4F7F\u7528<code>pinia</code>\u5C06\u63A5\u53E3\u6570\u636E\uFF08<code>name</code>, <code>id</code>\uFF09\u5148\u6620\u5C04\u6210<code>options</code>\u9700\u8981\u7684\u53C2\u6570\uFF08<code>label</code>, <code>value</code>\uFF09\uFF0C\u518D\u5C06\u6570\u636E\u63A8\u5165\u5230<code>prop</code>\u4E3A<code>parentId</code>\u4E0B\u7684<code>options</code>\u6570\u7EC4\u4E2D\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u7236\u7EC4\u4EF6deparment.vue
&lt;template&gt;
  &lt;div class=&quot;department&quot;&gt;
    // ...
    &lt;page-modal ref=&quot;modalRef&quot; :modal-config=&quot;modalConfigRef&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;department&quot;&gt;
// ...
import PageModal from &#39;@/components/page-modal/page-modal.vue&#39;
import { computed, ref } from &#39;vue&#39;
import modalConfig from &#39;./config/modal.config&#39;
import useMainStore from &#39;@/store/main/main&#39;

// \u5BF9modalConfig\u8FDB\u884C\u64CD\u4F5C\uFF0C\u7528\u4E8Eselect\u4E2D\u7684options\u6765\u81EA\u4E8E\u63A5\u53E3\u6570\u636E
const modalConfigRef = computed(() =&gt; {
  const mainStore = useMainStore()
  // \u5C06\u83B7\u53D6\u5230\u7684name\u548Cid\u6620\u5C04\u6210option\u9700\u8981\u7684label\u548Cvalue\u5F62\u5F0F
  const departments = mainStore.entireDepartments.map((item) =&gt; {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) =&gt; {
    if (item.prop === &#39;parentId&#39;) {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

// ...
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9875\u9762\u516C\u5171\u903B\u8F91\u7684-hooks-\u62BD\u53D6" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u516C\u5171\u903B\u8F91\u7684-hooks-\u62BD\u53D6" aria-hidden="true">#</a> \u9875\u9762\u516C\u5171\u903B\u8F91\u7684 hooks \u62BD\u53D6</h3><h4 id="\u62BD\u53D6\u8868\u5355\u641C\u7D22\u5185\u5BB9\u4E2D\u7684\u641C\u7D22\u529F\u80FD\u548C\u91CD\u7F6E\u529F\u80FD\u3002" tabindex="-1"><a class="header-anchor" href="#\u62BD\u53D6\u8868\u5355\u641C\u7D22\u5185\u5BB9\u4E2D\u7684\u641C\u7D22\u529F\u80FD\u548C\u91CD\u7F6E\u529F\u80FD\u3002" aria-hidden="true">#</a> \u62BD\u53D6\u8868\u5355\u641C\u7D22\u5185\u5BB9\u4E2D\u7684\u641C\u7D22\u529F\u80FD\u548C\u91CD\u7F6E\u529F\u80FD\u3002</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// hooks/usePageContent.ts
import type PageContent from &quot;@/components/page-content/page-content.vue&quot;
import { ref } from &quot;vue&quot;

export function usePageContent() {
    const contentRef = ref&lt;InstanceType&lt;typeof PageContent&gt;&gt;()
    // \u641C\u7D22\u529F\u80FD
    function handleQueryClick(searchInfo: any) {
        console.log(searchInfo);
        contentRef.value?.fetchPageListData(searchInfo)
    }
    // \u91CD\u7F6E\u529F\u80FD
    function handleResetClick() {
        contentRef.value?.fetchPageListData()
    }

    return {
        contentRef,
        handleQueryClick,
        handleResetClick
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u62BD\u53D6\u6A21\u6001\u6846\u4E2D\u65B0\u589E\u548C\u7F16\u8F91\u529F\u80FD\u3002" tabindex="-1"><a class="header-anchor" href="#\u62BD\u53D6\u6A21\u6001\u6846\u4E2D\u65B0\u589E\u548C\u7F16\u8F91\u529F\u80FD\u3002" aria-hidden="true">#</a> \u62BD\u53D6\u6A21\u6001\u6846\u4E2D\u65B0\u589E\u548C\u7F16\u8F91\u529F\u80FD\u3002</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// hooks/usePageModal.ts
import type PageModal from &quot;@/components/page-modal/page-modal.vue&quot;
import { ref } from &quot;vue&quot;

export function usePageModal() {
    const modalRef = ref&lt;InstanceType&lt;typeof PageModal&gt;&gt;()

    // \u65B0\u589E\u529F\u80FD
    function handleNewDataClick() {
        modalRef.value?.setDialogVisible()
    }
    // \u7F16\u8F91\u529F\u80FD
    function handleEditDataClick(itemData: any) {
        modalRef.value?.setDialogVisible(false, itemData)
    }

    return {
        modalRef,
        handleEditDataClick,
        handleNewDataClick
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528-hooks\u3002" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528-hooks\u3002" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528 hooks\u3002</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;script setup lang=&quot;ts&quot; name=&quot;department&quot;&gt;
import { usePageContent } from &#39;@/hooks/usePageContent&#39;
import { usePageModal } from &#39;@/hooks/usePageModal&#39;
// ...
// \u62BD\u53D6\u6210hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u83DC\u5355\u7BA1\u7406\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u83DC\u5355\u7BA1\u7406\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u83DC\u5355\u7BA1\u7406\u529F\u80FD</h2><p><img src="https://secure2.wostatic.cn/static/7XLVEKxN4tVF4ssBfRRq6H/image.png" alt=""></p><h3 id="\u5B9E\u73B0\u6811\u5F62\u5B50\u6811\u7684\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6811\u5F62\u5B50\u6811\u7684\u5C55\u793A" aria-hidden="true">#</a> \u5B9E\u73B0\u6811\u5F62\u5B50\u6811\u7684\u5C55\u793A</h3><p>\u4F7F\u7528<code>el-table</code>\u4E2D\u7684<code>row-key=&quot;id&quot;</code>\u6765\u7ED1\u5B9A\u5B50\u6811\u7684<code>id</code>\u3002\u8FD9\u91CC\u4F7F\u7528\u914D\u7F6E\u9879\u6765\u5728\u8868\u683C\u6570\u636E\u4E2D\u52A8\u6001\u7ED1\u5B9A\u3002</p>`,151),k={href:"https://element-plus.gitee.io/zh-CN/component/table.html#%E6%A0%91%E5%BD%A2%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%87%92%E5%8A%A0%E8%BD%BD",target:"_blank",rel:"noopener noreferrer"},D=i("\u6811\u5F62\u6570\u636E"),R=s("\uFF1A\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u5D4C\u5957\u6570\u636E\u9700\u8981 prop \u7684 <code>row-key</code>\u3002 \u6B64\u5916\uFF0C\u5B50\u884C\u6570\u636E\u53EF\u4EE5\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684<code>lazy</code>\u5C5E\u6027\u4E3A true \u4E0E\u52A0\u8F7D\u51FD\u6570 <code>load</code> \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684<code>hasChildren</code>\u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 <code>children</code> \u4E0E<code>hasChildren</code>\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>tree-props</code> \u914D\u7F6E\u3002",17),J=s(`<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-content.vue
&lt;template&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;div class=&quot;header&quot;&gt;
      &lt;h3 class=&quot;title&quot;&gt;{{ contentConfig?.header?.title ?? &#39;\u6570\u636E\u5217\u8868&#39; }}&lt;/h3&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;handleNewData&quot;&gt;{{ contentConfig?.header?.btnTitle ?? &#39;\u65B0\u5EFA\u6570\u636E&#39; }}&lt;/el-button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;table&quot;&gt;
      &lt;el-table :data=&quot;pageList&quot; :border=&quot;true&quot; style=&quot;width: 100%&quot; v-bind=&quot;contentConfig.childrenTree&quot;&gt;
        &lt;template v-for=&quot;item in contentConfig.propsList&quot; :key=&quot;item.prop&quot;&gt;
          &lt;!-- \u5904\u7406\u5E26\u81EA\u5B9A\u4E49\u63D2\u69FD\u7684\u65F6\u95F4\u683C\u5F0F\u7C7B\u578B --&gt;
          &lt;template v-if=&quot;item.type === &#39;timer&#39;&quot;&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot;&gt;
              &lt;template #default=&quot;scope&quot;&gt;
                {{ formatUTC(scope.row[item.prop]) }}
              &lt;/template&gt;
            &lt;/el-table-column&gt;
          &lt;/template&gt;

          &lt;!-- \u5904\u7406handle\u7C7B\u578B --&gt;
          &lt;template v-else-if=&quot;item.type === &#39;handler&#39;&quot;&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot;&gt;
              &lt;template #default=&quot;scope&quot;&gt;
                &lt;el-button type=&quot;primary&quot; size=&quot;small&quot; icon=&quot;EditPen&quot; link @click=&quot;handleEditClick(scope.row)&quot;&gt;
                  \u7F16\u8F91
                &lt;/el-button&gt;
                &lt;el-button type=&quot;danger&quot; size=&quot;small&quot; icon=&quot;Delete&quot; link @click=&quot;handleDeleteClick(scope.row.id)&quot;&gt;
                  \u5220\u9664
                &lt;/el-button&gt;
              &lt;/template&gt;
            &lt;/el-table-column&gt;
          &lt;/template&gt;

          &lt;!-- \u5904\u7406\u666E\u901A\u7C7B\u578B --&gt;
          &lt;template v-else&gt;
            &lt;!-- &lt;el-table-column align=&quot;center&quot; :type=&quot;item.type&quot; :prop=&quot;item.prop&quot; :label=&quot;item.label&quot; :width=&quot;item.width&quot; /&gt; \u76F8\u5F53\u4E8E\u4E0B\u9762--&gt;
            &lt;el-table-column align=&quot;center&quot; v-bind=&quot;item&quot; /&gt;
          &lt;/template&gt;
        &lt;/template&gt;

      &lt;/el-table&gt;
    &lt;/div&gt;
    &lt;div class=&quot;footer&quot;&gt;
      &lt;el-pagination
        v-model:currentPage=&quot;currentPage&quot;
        v-model:page-size=&quot;pageSize&quot;
        :page-sizes=&quot;[10, 20, 30]&quot;
        layout=&quot;total, sizes, prev, pager, next, jumper&quot;
        :total=&quot;pageTotalCount&quot;
        @current-change=&quot;handleCurrentChange&quot;
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;content&quot;&gt;
import { storeToRefs } from &#39;pinia&#39;
import useSystemStore from &#39;@/store/main/system/system&#39;
import { formatUTC } from &#39;@/utils/format&#39;;
import { ref } from &#39;vue&#39;

interface IProps {
  contentConfig: {
    // \u7528\u4E8E\u5904\u7406\u63A5\u53E3\u65B9\u6CD5\u4E2D\u4F20\u5165\u7684pageName\u53C2\u6570
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[],
    childrenTree: any[]
  }
}

const props = defineProps&lt;IProps&gt;()

const emit = defineEmits([&#39;newDataClick&#39;, &#39;editDataClick&#39;])

// 1.\u8BF7\u6C42\u6570\u636E
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
function fetchPageListData(formData: any = {}) {
  // 1.\u83B7\u53D6offset\u548Csize
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset}

  // 2.\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42
  const queryInfo = { ...pageInfo, ...formData}
  systemStore.getPageListDataAction(props.contentConfig.pageName, { offset, size, ...queryInfo })
}
fetchPageListData()

// 2.\u5C55\u793A\u6570\u636E
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// 3.\u7ED1\u5B9A\u5206\u9875\u6570\u636E
function handleCurrentChange() {
  fetchPageListData()
}
function handleResetClick() {
  currentPage.value = 1
  pageSize.value = 10
  fetchPageListData()
}

// 4.\u65B0\u5EFA\u6570\u636E\u7684\u5904\u7406
function handleNewData() {
  emit(&#39;newDataClick&#39;)
}

// 5.\u5220\u9664\u548C\u7F16\u8F91\u64CD\u4F5C
function handleDeleteClick(id: number) {
  systemStore.deletePageDataAction(props.contentConfig.pageName, id)
}

function handleEditClick(data: any) {
  emit(&#39;editDataClick&#39;, data)
}

// \u66B4\u9732\u51FD\u6570
defineExpose({
  fetchPageListData,
  handleResetClick
})
&lt;/script&gt;

&lt;style scoped lang=&quot;less&quot;&gt;
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 14px 0;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u914D\u7F6E\u9879\u7ED1\u5B9A<code>row-key</code>\u5C5E\u6027\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// content.config.ts
const contentConfig = {
    pageName: &#39;menu&#39;,
    header: {
      title: &#39;\u83DC\u5355\u5217\u8868&#39;,
      btnTitle: &#39;\u65B0\u5EFA\u83DC\u5355&#39;
    },
    propsList: [
      // \u82E5\u8981\u5B9E\u73B0\u6811\u5F62\u6570\u636E\uFF0C\u5C31\u4E0D\u80FD\u52A0type\uFF0C\u4F1A\u51B2\u7A81
      { prop: &#39;name&#39;, label: &#39;\u83DC\u5355\u540D\u79F0&#39;, width: &#39;180px&#39; },
      { prop: &#39;type&#39;, label: &#39;\u7EA7\u522B&#39;, width: &#39;120px&#39; },
      { prop: &#39;url&#39;, label: &#39;\u83DC\u5355url&#39;, width: &#39;150px&#39; },
      { prop: &#39;icon&#39;, label: &#39;\u83DC\u5355icon&#39;, width: &#39;180px&#39; },
      { prop: &#39;sort&#39;, label: &#39;\u6392\u5E8F&#39;, width: &#39;120px&#39; },
      { prop: &#39;permission&#39;, label: &#39;\u6743\u9650&#39;, width: &#39;150px&#39; },
      { type: &#39;time&#39;, prop: &#39;createAt&#39;, label: &#39;\u521B\u5EFA\u65F6\u95F4&#39; },
      { type: &#39;time&#39;, prop: &#39;updateAt&#39;, label: &#39;\u66F4\u65B0\u65F6\u95F4&#39; },
      { type: &#39;handler&#39;, label: &#39;\u64CD\u4F5C&#39;, width: &#39;150px&#39;}
    ],
    childrenTree: {
      rowKey: &#39;id&#39;,
      treeProps: {
        children: &#39;children&#39;
      }
    }
  }

export default contentConfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u65B0\u589E\u3001\u7F16\u8F91\u6A21\u6001\u6846\u529F\u80FD\u4EE5\u53CA\u5220\u9664\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B0\u589E\u3001\u7F16\u8F91\u6A21\u6001\u6846\u529F\u80FD\u4EE5\u53CA\u5220\u9664\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u65B0\u589E\u3001\u7F16\u8F91\u6A21\u6001\u6846\u529F\u80FD\u4EE5\u53CA\u5220\u9664\u529F\u80FD</h3><p>\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u5B8C\u6210\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// modal.config.ts
const modalConfig = {
    pageName: &#39;menu&#39;,
    header: {
      newTitle: &#39;\u65B0\u5EFA\u83DC\u5355&#39;,
      editTitle: &#39;\u7F16\u8F91\u83DC\u5355&#39;
    },
    formItems: [
      {
        type: &#39;input&#39;,
        label: &#39;\u83DC\u5355\u540D\u79F0&#39;,
        prop: &#39;name&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u83DC\u5355\u7EA7\u522B&#39;,
        prop: &#39;type&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u83DC\u5355\u7EA7\u522B&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u83DC\u5355\u7EA7\u522B&#39;,
        prop: &#39;type&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u83DC\u5355\u7EA7\u522B&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u83DC\u5355url&#39;,
        prop: &#39;url&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u83DC\u5355url&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u83DC\u5355icon&#39;,
        prop: &#39;icon&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u83DC\u5355icon&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u6392\u5E8F&#39;,
        prop: &#39;sort&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u6392\u5E8F&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u6743\u9650&#39;,
        prop: &#39;permission&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u6743\u9650&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u521B\u5EFA\u65F6\u95F4&#39;,
        prop: &#39;createAt&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u521B\u5EFA\u65F6\u95F4&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u66F4\u65B0\u65F6\u95F4&#39;,
        prop: &#39;updateAt&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u66F4\u65B0\u65F6\u95F4&#39;
      },
      {
        type: &#39;custom&#39;,
        slotName: &#39;menulist&#39;
      }
    ]
}
export default modalConfig

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u7EC4\u4EF6<code>menu.vue</code>\u4F20\u9012\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u9879\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;menu&quot;&gt;
    &lt;page-content :content-config=&quot;contentConfig&quot; @new-data-click=&quot;handleNewDataClick&quot; @edit-data-click=&quot;handleEditDataClick&quot;/&gt;
    &lt;page-modal :modal-config=&quot;modalConfig&quot; ref=&quot;modalRef&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;menu&quot;&gt;
import PageContent from &#39;@/components/page-content/page-content.vue&#39;;
import contentConfig from &#39;./config/content.config&#39;;

import PageModal from &#39;@/components/page-modal/page-modal.vue&#39;;
import modalConfig from &#39;./config/modal.config&#39;;

import { usePageModal } from &#39;@/hooks/usePageModal&#39;;

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()
&lt;/script&gt;

&lt;style scoped&gt;
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u89D2\u8272\u7BA1\u7406\u4E2D\u7684\u6743\u9650\u5206\u914D-\u96BE\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u89D2\u8272\u7BA1\u7406\u4E2D\u7684\u6743\u9650\u5206\u914D-\u96BE\u70B9" aria-hidden="true">#</a> \u5B9E\u73B0\u89D2\u8272\u7BA1\u7406\u4E2D\u7684\u6743\u9650\u5206\u914D\uFF08\u96BE\u70B9\uFF09</h2><p><strong>\u5728\u65B0\u5EFA\u89D2\u8272\u65F6\u4F7F\u7528\u4E0A\u6587\u5199\u7684\u81EA\u5B9A\u4E49\u4F5C\u7528\u57DF\u63D2\u69FD\u5B9A\u5236\u5316\u6811\u5F62\u9009\u62E9\u89D2\u8272\u6743\u9650\u5217\u8868\u3002</strong></p><h3 id="\u521B\u5EFA\u89D2\u8272\u7684\u83DC\u5355\u6811\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u89D2\u8272\u7684\u83DC\u5355\u6811\u5C55\u793A" aria-hidden="true">#</a> \u521B\u5EFA\u89D2\u8272\u7684\u83DC\u5355\u6811\u5C55\u793A</h3><p><img src="https://secure2.wostatic.cn/static/6rSjN4g6PwbrGQjTNx1xjF/image.png" alt=""></p><h4 id="\u5C01\u88C5\u8BF7\u6C42\u63A5\u53E3\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8BF7\u6C42\u63A5\u53E3\u6570\u636E" aria-hidden="true">#</a> \u5C01\u88C5\u8BF7\u6C42\u63A5\u53E3\u6570\u636E</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// service/main.ts
// \u83B7\u53D6\u6240\u6709\u83DC\u5355
export function getEntireMenus() {
    return hyRequest.post({
        url: &quot;/menu/list&quot;
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// store/main.ts
import { getEntireDepartments, getEntireMenus, getEntireRoles } from &quot;@/service/main/main&quot;;
import { defineStore } from &quot;pinia&quot;;

interface IMainState {
    // ...
    entireMenus: any[]
}
const useMainStore = defineStore(&#39;main&#39;, {
    state: (): IMainState =&gt; ({
        // ...
        entireMenus: []
    }),
    actions: {
        async fetchEntireDataAction() {
            // ...
            const menuResult = await getEntireMenus()
            this.entireMenus = menuResult.data.list
        }
    }

})
export default useMainStore

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u81EA\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u81EA\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u81EA\u5B9A\u4E49\u7C7B\u578B</h4><p>\u56E0\u4E3A\u65B0\u5EFA\u89D2\u8272\u5728\u6A21\u6001\u6846\u4E2D\u5C55\u73B0\uFF0C\u56E0\u6B64\u5728<code>modal.config.ts</code>\u4E2D\u5B9A\u4E49\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const modalConfig = {
    pageName: &#39;role&#39;,
    header: {
      newTitle: &#39;\u65B0\u5EFA\u89D2\u8272&#39;,
      editTitle: &#39;\u7F16\u8F91\u89D2\u8272&#39;
    },
    formItems: [
      {
        type: &#39;input&#39;,
        label: &#39;\u89D2\u8272\u540D\u79F0&#39;,
        prop: &#39;name&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0&#39;
      },
      {
        type: &#39;input&#39;,
        label: &#39;\u6743\u9650\u4ECB\u7ECD&#39;,
        prop: &#39;intro&#39;,
        placeholder: &#39;\u8BF7\u8F93\u5165\u6743\u9650\u4ECB\u7ECD&#39;
      },
      // \u81EA\u5B9A\u4E49\u7C7B\u578B
      {
        type: &#39;custom&#39;,
        slotName: &#39;menulist&#39;
      }
    ]
}
export default modalConfig

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7F16\u5199\u81EA\u5B9A\u4E49\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u81EA\u5B9A\u4E49\u63D2\u69FD" aria-hidden="true">#</a> \u7F16\u5199\u81EA\u5B9A\u4E49\u63D2\u69FD</h4><p>\u5728<code>page-modal.vue</code>\u4E2D\u7F16\u5199<code>type</code>\u4E3A<code>custom</code>\u7684\u4F5C\u7528\u57DF\u63D2\u69FD\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;modal&quot;&gt;
    &lt;el-dialog v-model=&quot;dialogVisible&quot; :title=&quot;isEdit ? modalConfig.header.editTitle : modalConfig.header.newTitle&quot; width=&quot;30%&quot; center&gt;
      &lt;div class=&quot;form&quot;&gt;
        &lt;el-form :model=&quot;formData&quot; label-width=&quot;80px&quot; size=&quot;large&quot;&gt;
          &lt;template v-for=&quot;item in modalConfig.formItems&quot; :key=&quot;item.prop&quot;&gt;
            &lt;el-form-item v-bind=&quot;item&quot;&gt;
              &lt;template v-if=&quot;item.type === &#39;input&#39;&quot;&gt;
                // ...
              &lt;/template&gt;

              &lt;template v-if=&quot;item.type === &#39;select&#39;&quot;&gt;
                // ...
              &lt;/template&gt;

              &lt;!-- \u81EA\u5B9A\u4E49\u63D2\u69FD\uFF1A\u5982\u89D2\u8272\u7BA1\u7406\u4E2D\u7684\u6743\u9650\u6811\u5F62\u9009\u62E9 --&gt;
              &lt;template v-if=&quot;item.type === &#39;custom&#39;&quot;&gt;
                &lt;slot :name=&quot;item.slotName&quot;&gt;&lt;/slot&gt;
              &lt;/template&gt;
            &lt;/el-form-item&gt;
          &lt;/template&gt;
        &lt;/el-form&gt;
      &lt;/div&gt;
      // ...
    &lt;/el-dialog&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5728\u7236\u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u83DC\u5355\u5217\u8868\u7684\u81EA\u5B9A\u4E49\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5728\u7236\u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u83DC\u5355\u5217\u8868\u7684\u81EA\u5B9A\u4E49\u63D2\u69FD" aria-hidden="true">#</a> \u5728\u7236\u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u83DC\u5355\u5217\u8868\u7684\u81EA\u5B9A\u4E49\u63D2\u69FD</h4><p>\u4F7F\u7528<code>el-tree</code>\u4E2D\u7684\u6811\u8282\u70B9\u9009\u62E9\u5B9E\u73B0\uFF0C\u5C06\u8BF7\u6C42\u63A5\u53E3\u6570\u636E<code>entireMenus</code>\u4F20\u5165\u7ED9<code>:data</code>\u5373\u53EF\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;role&quot;&gt;
    &lt;page-search :search-config=&quot;searchConfig&quot; @query-click=&quot;handleQueryClick&quot; @reset-click=&quot;handleResetClick&quot;/&gt;
    &lt;page-content :content-config=&quot;contentConfig&quot; ref=&quot;contentRef&quot; @new-data-click=&quot;handleNewDataClick&quot; @edit-data-click=&quot;handleEditDataClick&quot;/&gt;
    &lt;page-modal :modal-config=&quot;modalConfig&quot; ref=&quot;modalRef&quot;&gt;
      &lt;!-- \u81EA\u5B9A\u4E49\u83DC\u5355\u5217\u8868 --&gt;
      &lt;template #menulist&gt;
        &lt;el-tree
          ref=&quot;treeRef&quot;
          :data=&quot;entireMenus&quot;
          show-checkbox
          default-expand-all
          node-key=&quot;id&quot;
          highlight-current
          :props=&quot;{ children: &#39;children&#39;, label: &#39;name&#39; }&quot;
        /&gt;
      &lt;/template&gt;
    &lt;/page-modal&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import pageSearch from &#39;@/components/page-search/page-search.vue&#39;;
import searchConfig from &#39;./config/search.config&#39;

import pageContent from &#39;@/components/page-content/page-content.vue&#39;;
import contentConfig from &#39;./config/content.config&#39;;

import pageModal from &#39;@/components/page-modal/page-modal.vue&#39;;
import modalConfig from &#39;./config/modal.config&#39;;

import { usePageContent } from &#39;@/hooks/usePageContent&#39;;
import { usePageModal } from &#39;@/hooks/usePageModal&#39;;
import useMainStore from &#39;@/store/main/main&#39;;
import { storeToRefs } from &#39;pinia&#39;;

// hooks\u903B\u8F91\u5173\u7CFB
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()

const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u89D2\u8272\u643A\u5E26\u83DC\u5355\u6811\u7684\u6743\u9650\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u89D2\u8272\u643A\u5E26\u83DC\u5355\u6811\u7684\u6743\u9650\u6570\u636E" aria-hidden="true">#</a> \u521B\u5EFA\u89D2\u8272\u643A\u5E26\u83DC\u5355\u6811\u7684\u6743\u9650\u6570\u636E</h3><p>\u5C06\u83DC\u5355\u6811\u7684<code>menulist</code>\u548C<code>formData</code>\u7ED1\u5B9A\u4E00\u8D77\u4F20\u9012\u7ED9\u670D\u52A1\u5668\uFF0C\u4F7F\u7528<code>el-tree</code>\u4E2D<code>check</code>\u5C5E\u6027\u83B7\u53D6\u9009\u4E2D\u503C\uFF0C\u91CC\u9762\u6709 2 \u4E2A\u53C2\u6570\uFF0C\u7B2C 2 \u4E2A\u53C2\u6570\u80FD\u591F\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u7ED3\u70B9<code>checkedNodes</code>\u4EE5\u53CA\u5B83\u7684\u7236\u7ED3\u70B9<code>halfCheckedNodes</code>\u548C\u5B83\u4EEC\u7684<code>key</code>\u3002</p><h4 id="\u7236\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u6743\u9650\u6570\u636E\u5E76\u4F20\u9012\u7ED9-page-modal-\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u6743\u9650\u6570\u636E\u5E76\u4F20\u9012\u7ED9-page-modal-\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u6743\u9650\u6570\u636E\u5E76\u4F20\u9012\u7ED9 page-modal \u5B50\u7EC4\u4EF6</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// role.vue
&lt;template&gt;
  &lt;div class=&quot;role&quot;&gt;
    // ...
    &lt;page-modal :modal-config=&quot;modalConfig&quot; ref=&quot;modalRef&quot; :other-info=&quot;otherInfo&quot;&gt;
      &lt;!-- \u81EA\u5B9A\u4E49\u83DC\u5355\u5217\u8868 --&gt;
      &lt;template #menulist&gt;
        &lt;el-tree
          // ...
          @check=&quot;handleELTreeCheck&quot;
        /&gt;
      &lt;/template&gt;
    &lt;/page-modal&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// ...
// \u83B7\u53D6\u6811\u5F62\u5217\u8868\u7684key(id)
const otherInfo = ref({})
function handleELTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B50\u7EC4\u4EF6\u63A5\u53D7\u6570\u636E\u5E76\u5C06\u5176\u5408\u5E76\u53D1\u9001\u7ED9\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6\u63A5\u53D7\u6570\u636E\u5E76\u5C06\u5176\u5408\u5E76\u53D1\u9001\u7ED9\u670D\u52A1\u5668" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6\u63A5\u53D7\u6570\u636E\u5E76\u5C06\u5176\u5408\u5E76\u53D1\u9001\u7ED9\u670D\u52A1\u5668</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-modal.vue
&lt;script setup lang=&quot;ts&quot; name=&quot;modal&quot;&gt;
// ...
interface IProps {
  modalConfig: {
    // ...
  }
  otherInfo?: any
}

// ...

// \u70B9\u51FB\u786E\u5B9A
const systemStore = useSystemStore()
function handleConfirmClick() {
  dialogVisible.value = false

  // \u82E5\u6709\u5176\u5B83info\u8FDB\u884C\u5408\u5E76\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF08\u5982\uFF1A\u89D2\u8272\u7BA1\u7406\u4E2D\u65B0\u5EFA\u89D2\u8272\u7684\u6743\u9650\u5206\u914D\u83DC\u5355\u6811menuList\uFF09
  let infoData = formData
  if(props.otherInfo) {
    infoData = { ...formData, ...props.otherInfo}
  }

  if (!isEdit.value) {
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
  } else {
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8F91\u65F6\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u65F6\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E" aria-hidden="true">#</a> \u7F16\u8F91\u65F6\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E</h3><h4 id="\u5C01\u88C5\u83DC\u5355\u6620\u5C04\u6743\u9650-id-\u5217\u8868\u7684\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u83DC\u5355\u6620\u5C04\u6743\u9650-id-\u5217\u8868\u7684\u5DE5\u5177" aria-hidden="true">#</a> \u5C01\u88C5\u83DC\u5355\u6620\u5C04\u6743\u9650 Id \u5217\u8868\u7684\u5DE5\u5177</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// utils/map-menus.ts
/**
 * \u83DC\u5355\u6620\u5C04\u5230id\u7684\u5217\u8868\uFF08\u7528\u4E8E\u89D2\u8272\u7BA1\u7406\u7684\u6743\u9650\u6811\u5206\u914D\uFF09
 * @param menuList
 */
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = []

  function recurseGetId(menus: any[]) {
    for(const item of menus) {
      // \u5982\u679C\u6709\u5B50\u83DC\u5355\uFF0C\u5C31\u9012\u5F52\u76F4\u5230\u6CA1\u6709\u5B50\u83DC\u5355\uFF0C\u7136\u540E\u628Aid\u6DFB\u52A0\u5230ids\u4E2D
      if(item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menuList)
  return ids
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u83B7\u53D6\u89D2\u8272\u6743\u9650\u83DC\u5355\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u89D2\u8272\u6743\u9650\u83DC\u5355\u7684\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u89D2\u8272\u6743\u9650\u83DC\u5355\u7684\u6570\u636E</h4><p>\u5728\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u89E6\u53D1<code>usePageModal</code>\u4E8B\u4EF6\u65F6\uFF0C\u4F20\u5165\u7684\u53C2\u6570<code>itemData</code>\u4E2D\u53EF\u4EE5\u62FF\u5230\u6A21\u6001\u6846\u91CC\u7684\u6570\u636E\uFF08\u5305\u62EC\u83DC\u5355\u6811\u63A7\u4EF6<code>el-tree</code>\uFF09\uFF0C\u4F46\u662F\u56E0\u4E3A\u70B9\u51FB\u7F16\u8F91\u4E8B\u4EF6\u5C01\u88C5\u5728<code>hooks</code>\u91CC\u9762\uFF0C\u5728<code>role.vue</code>\u4E2D\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u51FD\u6570<code>editCallback</code>\u6765\u83B7\u53D6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>type callbackType = (item: any) =&gt; void
export function usePageModal(editCallback?: callbackType) {
    const modalRef = ref&lt;InstanceType&lt;typeof PageModal&gt;&gt;()
    // ...
    // \u7F16\u8F91\u529F\u80FD
    function handleEditDataClick(itemData: any) {
        modalRef.value?.setDialogVisible(false, itemData)
        // \u56DE\u663E\u89D2\u8272\u7BA1\u7406\u4E2D\u6743\u9650\u83DC\u5355\u6811
        if(editCallback) editCallback(itemData)
    }
    return {
        handleEditDataClick,
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 role.vue \u4E2D\u4F7F\u7528<code>editCallback</code>\u51FD\u6570\u6765\u63A5\u53D7\u7F16\u8F91\u4E8B\u4EF6\u4F20\u6765\u7684<code>itemData</code>\uFF08\u5BF9\u8C61\uFF09\uFF0C\u5E76\u5C06\u5176\u7528<code>mapMenuListToIds</code>\u5DE5\u5177\u5904\u7406\u6210<code>id</code>\u6570\u7EC4\uFF0C\u5728<code>nextTick()</code>\u4E2D\u8C03\u7528\u3002</p><blockquote><p><code>nextTick</code>\uFF1A\u5F53\u4F60\u5728 Vue \u4E2D\u66F4\u6539\u54CD\u5E94\u5F0F\u72B6\u6001\u65F6\uFF0C\u6700\u7EC8\u7684 DOM \u66F4\u65B0\u5E76\u4E0D\u662F\u540C\u6B65\u751F\u6548\u7684\uFF0C\u800C\u662F\u7531 Vue \u5C06\u5B83\u4EEC\u7F13\u5B58\u5728\u4E00\u4E2A\u961F\u5217\u4E2D\uFF0C\u76F4\u5230\u4E0B\u4E00\u4E2A\u201Ctick\u201D\u624D\u4E00\u8D77\u6267\u884C\u3002\u8FD9\u6837\u662F\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u7EC4\u4EF6\u65E0\u8BBA\u53D1\u751F\u591A\u5C11\u72B6\u6001\u6539\u53D8\uFF0C\u90FD\u4EC5\u6267\u884C\u4E00\u6B21\u66F4\u65B0\u3002<code>nextTick()</code> \u53EF\u4EE5\u5728\u72B6\u6001\u6539\u53D8\u540E\u7ACB\u5373\u4F7F\u7528\uFF0C\u4EE5\u7B49\u5F85 DOM \u66F4\u65B0\u5B8C\u6210\u3002</p></blockquote><blockquote><p>Vue \u662F\u5F02\u6B65\u6267\u884C dom \u66F4\u65B0\u7684\uFF0C\u4E00\u65E6\u89C2\u5BDF\u5230\u6570\u636E\u53D8\u5316\uFF0CVue \u5C31\u4F1A\u5F00\u542F\u4E00\u4E2A\u961F\u5217\uFF0C\u7136\u540E\u628A\u5728\u540C\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF (event loop) \u5F53\u4E2D\u89C2\u5BDF\u5230\u6570\u636E\u53D8\u5316\u7684 watcher \u63A8\u9001\u8FDB\u8FD9\u4E2A\u961F\u5217\u3002\u5982\u679C\u8FD9\u4E2A watcher \u88AB\u89E6\u53D1\u591A\u6B21\uFF0C\u53EA\u4F1A\u88AB\u63A8\u9001\u5230\u961F\u5217\u4E00\u6B21\u3002\u8FD9\u79CD\u7F13\u51B2\u884C\u4E3A\u53EF\u4EE5\u6709\u6548\u7684\u53BB\u6389\u91CD\u590D\u6570\u636E\u9020\u6210\u7684\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u548C DOm \u64CD\u4F5C\u3002\u800C\u5728\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u65F6\uFF0CVue \u4F1A\u6E05\u7A7A\u961F\u5217\uFF0C\u5E76\u8FDB\u884C\u5FC5\u8981\u7684 DOM \u66F4\u65B0\u3002<br> \u5F53\u4F60\u8BBE\u7F6E vm.someData = &#39;new value&#39;\uFF0CDOM \u5E76\u4E0D\u4F1A\u9A6C\u4E0A\u66F4\u65B0\uFF0C\u800C\u662F\u5728\u5F02\u6B65\u961F\u5217\u88AB\u6E05\u9664\uFF0C\u4E5F\u5C31\u662F\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u5F00\u59CB\u65F6\u6267\u884C\u66F4\u65B0\u65F6\u624D\u4F1A\u8FDB\u884C\u5FC5\u8981\u7684 DOM \u66F4\u65B0\u3002\u5982\u679C\u6B64\u65F6\u4F60\u60F3\u8981\u6839\u636E\u66F4\u65B0\u7684 DOM \u72B6\u6001\u53BB\u505A\u67D0\u4E9B\u4E8B\u60C5\uFF0C\u5C31\u4F1A\u51FA\u73B0\u95EE\u9898\u3002\u3002\u4E3A\u4E86\u5728\u6570\u636E\u53D8\u5316\u4E4B\u540E\u7B49\u5F85 Vue \u5B8C\u6210\u66F4\u65B0 DOM \uFF0C\u53EF\u4EE5\u5728\u6570\u636E\u53D8\u5316\u4E4B\u540E\u7ACB\u5373\u4F7F\u7528 Vue.nextTick(callback) \uFF0C\u8FD9\u6837\u56DE\u8C03\u51FD\u6570\u5728 DOM \u66F4\u65B0\u5B8C\u6210\u540E\u5C31\u4F1A\u8C03\u7528\u3002\u5728 Vue3 \u4E2D\u662F\u5FAE\u4EFB\u52A1\uFF0CVue2 \u4E2D\u4E0D\u65AD\u66F4\u65B0\u53D8\u5316\u3002</p></blockquote><p><img src="https://secure2.wostatic.cn/static/g74CyDLQpixmcAHwDpCFbs/image.png" alt=""></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;role&quot;&gt;
    // ...
    &lt;page-modal :modal-config=&quot;modalConfig&quot; ref=&quot;modalRef&quot; :other-info=&quot;otherInfo&quot;&gt;
      &lt;!-- \u81EA\u5B9A\u4E49\u83DC\u5355\u5217\u8868 --&gt;
      &lt;template #menulist&gt;
        &lt;el-tree
          ref=&quot;treeRef&quot;
          :data=&quot;entireMenus&quot;
          show-checkbox
          default-expand-all
          node-key=&quot;id&quot;
          highlight-current
          :props=&quot;{ children: &#39;children&#39;, label: &#39;name&#39; }&quot;
          @check=&quot;handleELTreeCheck&quot;
        /&gt;
      &lt;/template&gt;
    &lt;/page-modal&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// ...
import { ref, nextTick } from &#39;vue&#39;;
import { mapMenuListToIds } from &#39;@/utils/map-menus&#39;;
import type { ElTree } from &#39;element-plus/es/components/index.js&#39;;
// ...
const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal(editCallback)

// ...
// \u7F16\u8F91\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E
const treeRef = ref&lt;InstanceType&lt;typeof ElTree&gt;&gt;()
function editCallback(data: any){
  nextTick(() =&gt; {
    const menuList = mapMenuListToIds(data.menuList)
    // \u53EA\u6709\u5728nextTick\u4E4B\u540E\u624D\u80FD\u8BBE\u7F6EsetCheckedKeys
    treeRef.value?.setCheckedKeys(menuList)
  })
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B0\u589E\u65F6\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E\u91CD\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u65F6\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E\u91CD\u7F6E" aria-hidden="true">#</a> \u65B0\u589E\u65F6\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E\u91CD\u7F6E</h3><h4 id="\u91CD\u7F6E\u89D2\u8272\u6743\u9650\u83DC\u5355\u6811\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E\u89D2\u8272\u6743\u9650\u83DC\u5355\u6811\u7684\u6570\u636E" aria-hidden="true">#</a> \u91CD\u7F6E\u89D2\u8272\u6743\u9650\u83DC\u5355\u6811\u7684\u6570\u636E</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// role.vue
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, nextTick } from &#39;vue&#39;;
import { mapMenuListToIds } from &#39;@/utils/map-menus&#39;;
import type { ElTree } from &#39;element-plus/es/components/index.js&#39;;
// ...
const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal(newCallback, editCallback)

// ...
// \u65B0\u589E\u89D2\u8272\u83DC\u5355\u6743\u9650\u91CD\u7F6E
function newCallback(){
  nextTick(() =&gt; {
    treeRef.value?.setCheckedKeys([])
  })
}
// \u7F16\u8F91\u89D2\u8272\u83DC\u5355\u6743\u9650\u56DE\u663E...
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hooks-\u4E2D\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#hooks-\u4E2D\u8C03\u7528" aria-hidden="true">#</a> hooks \u4E2D\u8C03\u7528</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// ...
type callbackType = (item?: any) =&gt; void
export function usePageModal(newCallback?: callbackType, editCallback?: callbackType) {
    const modalRef = ref&lt;InstanceType&lt;typeof PageModal&gt;&gt;()
    // \u65B0\u589E\u529F\u80FD
    function handleNewDataClick() {
        modalRef.value?.setDialogVisible()
        if(newCallback) newCallback()
    }
    // \u7F16\u8F91\u529F\u80FD...
    return {
        modalRef,
        handleEditDataClick,
        handleNewDataClick
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u767B\u5F55\u7528\u6237\u7684\u6743\u9650\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u767B\u5F55\u7528\u6237\u7684\u6743\u9650\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u767B\u5F55\u7528\u6237\u7684\u6743\u9650\u529F\u80FD</h2><p>\u901A\u8FC7\u6BCF\u4E2A\u5B50\u83DC\u5355\u4E0B\u589E\u5220\u6539\u67E5\u7684\u5982<code>permission:&quot;system:users:create&quot;</code>\u5B57\u6BB5\u5B9E\u73B0\uFF0C\u7528\u4E8E\u63A7\u5236\u6309\u94AE\u6743\u9650\u7684\u5C55\u793A\u3002</p><h3 id="\u5C01\u88C5\u83DC\u5355\u6620\u5C04\u6309\u94AE\u6743\u9650\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u83DC\u5355\u6620\u5C04\u6309\u94AE\u6743\u9650\u5DE5\u5177" aria-hidden="true">#</a> \u5C01\u88C5\u83DC\u5355\u6620\u5C04\u6309\u94AE\u6743\u9650\u5DE5\u5177</h3><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// map-menus.ts
/**
 * \u83DC\u5355\u6620\u5C04\u5230\u6309\u94AE\u7684\u6743\u9650permissions
 * @param menuList \u83DC\u5355\u5217\u8868
 * @returns \u6743\u9650\u7684\u6570\u7EC4
 */
export function mapMenuListToPermissions(menuList :any) {
  const permissions: string[] = []

  function recurseGetPermission(menus: any[]) {
    for(const item of menus) {
      if(item.type === 3) {
        permissions.push(item.permission)
      } else {
        // \u6CA1\u6709\u5B50\u6811\u7684\u8BDD\u5C31\u5C06menus\u8BBE\u7F6E\u4E3A\u7A7A\u6570\u7EC4\uFF0C\u5426\u5219\u4F1Anull/undefine\u62A5\u9519
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)

  return permissions
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u767B\u5F55\u7528\u6237\u7684\u6240\u6709\u6309\u94AE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u767B\u5F55\u7528\u6237\u7684\u6240\u6709\u6309\u94AE\u6743\u9650" aria-hidden="true">#</a> \u83B7\u53D6\u767B\u5F55\u7528\u6237\u7684\u6240\u6709\u6309\u94AE\u6743\u9650</h3><p>\u4F7F\u7528\u83DC\u5355\u6620\u5C04\u6309\u94AE\u6743\u9650\u5DE5\u5177\uFF0C\u83B7\u53D6\u767B\u5F55\u7528\u6237\u7684\u6240\u6709\u6743\u9650\uFF0C\u5B58\u5165<code>pinia</code>\u4E2D\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { mapMenuListToPermissions, mapMenuToRoutes } from &quot;@/utils/map-menus&quot;;

interface ILoginState {
    // ...
    permissions: string[],
}

const useLoginStore = defineStore(&#39;login&#39;, {
    state: (): ILoginState =&gt; ({
        // ...
        permissions: []
    }),
    actions: {
        async loginAccountAction(account: IAccount) {
            // ...

            // 7.\u83B7\u53D6\u767B\u5F55\u7528\u6237\u7684\u6240\u6709\u6309\u94AE\u6743\u9650
            const permissions = mapMenuListToPermissions(this.userMenus)
            this.permissions = permissions
        },

        // \u89E3\u51B3\u5237\u65B0\u9875\u9762\u540E\uFF0C\u52A8\u6001\u8DEF\u7531\u4E22\u5931\u7684\u95EE\u9898(\u4E0D\u518D\u662FloginAccountAction\u767B\u5F55\u65F6\u624D\u6267\u884C)
        loadLocalDataAction() {
            // ...
            if(token &amp;&amp; userInfo &amp;&amp; userMenus) {
                // ...
                // \u5237\u65B0\u65F6\u7F13\u5B58\u6309\u94AE\u6743\u9650
                const permissions = mapMenuListToPermissions(userMenus)
                this.permissions = permissions
            }
        }
    }
})

export default useLoginStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C01\u88C5\u6743\u9650-hooks" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u6743\u9650-hooks" aria-hidden="true">#</a> \u5C01\u88C5\u6743\u9650 hooks</h3><p>\u7528\u4E8E\u67E5\u8BE2\u67D0\u4E2A\u9875\u9762\u7684\u6743\u9650\u662F\u5426\u5728\u83B7\u53D6\u5230\u7684\u767B\u5F55\u7528\u6237\u6240\u6709\u6743\u9650\u4E2D\uFF0C\u5982\u5224\u65AD<code>department:create</code>\u3001<code>department:update</code>\u662F\u5426\u5305\u542B\u5728\u767B\u5F55\u7528\u6237\u5B58\u5165\u5728<code>pinia</code>\u4E2D\u7684<code>permissions</code>\u6570\u7EC4\uFF0C\u7528<code>permissions.find</code>\u53BB\u67E5\u627E\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// hooks/usePermission.ts
import useLoginStore from &#39;@/store/login/login&#39;

function usePermission(pageName: string, handleName: string) {
  const queryPermission = \`\${pageName}:\${handleName}\`
  const { permissions } = useLoginStore()

  // !!\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C
  return !!permissions.find((item) =&gt; item.includes(queryPermission))
}

export default usePermission

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u5199-page-content-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-page-content-\u7EC4\u4EF6" aria-hidden="true">#</a> \u7F16\u5199 Page-content \u7EC4\u4EF6</h3><p>\u8C03\u7528 hooks\uFF0C\u5224\u65AD\u6BCF\u4E00\u4E2A\u6309\u94AE\u662F\u5426\u6709\u6709\u5BF9\u5E94\u7684\u589E\u5220\u6539\u67E5\u6743\u9650\uFF0C\u4F7F\u7528<code>v-if</code>\u63A7\u5236\u5BF9\u5E94\u6309\u94AE\u7684\u663E\u793A\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;content&quot;&gt;
    &lt;div class=&quot;header&quot;&gt;
      // ...
      // \u589E
      &lt;el-button v-if=&quot;isCreate&quot; type=&quot;primary&quot; @click=&quot;handleNewData&quot;&gt;{{ contentConfig?.header?.btnTitle ?? &#39;\u65B0\u5EFA\u6570\u636E&#39; }}&lt;/el-button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;table&quot;&gt;
      &lt;el-table :data=&quot;pageList&quot; :border=&quot;true&quot; style=&quot;width: 100%&quot; v-bind=&quot;contentConfig.childrenTree&quot;&gt;
            // ...
          &lt;!-- \u5904\u7406handle\u7C7B\u578B --&gt;
          &lt;template v-else-if=&quot;item.type === &#39;handler&#39;&quot;&gt;
            // ...
            // \u6539
            &lt;el-button v-if=&quot;isUpdate&quot; type=&quot;primary&quot; size=&quot;small&quot; icon=&quot;EditPen&quot; link @click=&quot;handleEditClick(scope.row)&quot;&gt;
              \u7F16\u8F91
            &lt;/el-button&gt;
            // \u5220
            &lt;el-button v-if=&quot;isDelete&quot; type=&quot;danger&quot; size=&quot;small&quot; icon=&quot;Delete&quot; link @click=&quot;handleDeleteClick(scope.row.id)&quot;&gt;
              \u5220\u9664
            &lt;/el-button&gt;
          &lt;/template&gt;
          // ...
      &lt;/el-table&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot; name=&quot;content&quot;&gt;
import usePermission from &#39;@/hooks/usePermission&#39;

interface IProps {
  contentConfig: {
    // \u7528\u4E8E\u5904\u7406\u63A5\u53E3\u65B9\u6CD5\u4E2D\u4F20\u5165\u7684pageName\u53C2\u6570
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[],
    childrenTree: any[]
  }
}
const props = defineProps&lt;IProps&gt;()
const emit = defineEmits([&#39;newDataClick&#39;, &#39;editDataClick&#39;])

// 0. \u83B7\u53D6\u662F\u5426\u6709\u5BF9\u5E94\u7684\u589E\u5220\u6539\u67E5\u6743\u9650
// \u589E
const isCreate = usePermission(props.contentConfig.pageName, &#39;create&#39;)
// \u5220
const isDelete = usePermission(props.contentConfig.pageName, &#39;delete&#39;)\u3011
// \u6539
const isUpdate = usePermission(props.contentConfig.pageName, &#39;update&#39;)
// \u67E5
const isQuery = usePermission(props.contentConfig.pageName, &#39;query&#39;)

// 1.\u8BF7\u6C42\u6570\u636E...
function fetchPageListData(formData: any = {}) {
  // \u67E5
  if(!isQuery) return
  // ...
}
// ...
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC6\u8282\u5904\u7406-\u65B0\u589E\u7F16\u8F91\u5220\u9664\u64CD\u4F5C\u91CD\u7F6E-current-\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u7EC6\u8282\u5904\u7406-\u65B0\u589E\u7F16\u8F91\u5220\u9664\u64CD\u4F5C\u91CD\u7F6E-current-\u5206\u9875" aria-hidden="true">#</a> (\u7EC6\u8282\u5904\u7406)\u65B0\u589E\u7F16\u8F91\u5220\u9664\u64CD\u4F5C\u91CD\u7F6E current \u5206\u9875</h2>`,60),I=i("\u901A\u8FC7\u4F7F\u7528"),T=e("code",null,"pinia",-1),A=i("\u4E2D\u7684"),L={href:"https://pinia.vuejs.org/zh/core-concepts/actions.html#subscribing-to-actions",target:"_blank",rel:"noopener noreferrer"},P=i("\u8BA2\u9605"),E={href:"https://pinia.vuejs.org/zh/core-concepts/actions.html#subscribing-to-actions",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"action",-1),V=i("\uFF0C\u53BB\u76D1\u542C\u589E\u5220\u6539\u7684"),_=e("code",null,"actions",-1),z=i("\uFF0C\u4ECE\u800C\u5C06"),N=e("code",null,"current",-1),F=i("\u91CD\u7F6E\u3002"),U=s(`<blockquote><p>\u8BA2\u9605 <code>action</code>\uFF1A\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>store.$onAction()</code> \u6765\u76D1\u542C <code>action</code> \u548C\u5B83\u4EEC\u7684\u7ED3\u679C\u3002\u4F20\u9012\u7ED9\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u5728 <code>action</code> \u672C\u8EAB\u4E4B\u524D\u6267\u884C\u3002<code>after</code> \u8868\u793A\u5728 promise \u89E3\u51B3\u4E4B\u540E\uFF0C\u5141\u8BB8\u4F60\u5728 <code>action</code> \u89E3\u51B3\u540E\u6267\u884C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u540C\u6837\u5730\uFF0C<code>onError</code> \u5141\u8BB8\u4F60\u5728 <code>action</code> \u629B\u51FA\u9519\u8BEF\u6216 <code>reject</code> \u65F6\u6267\u884C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p></blockquote><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-content.vue
&lt;script setup lang=&quot;ts&quot; name=&quot;content&quot;&gt;
// ...
// 6.\u76D1\u542CsystemStore\u7684\u589E\u5220\u6539action,\u5C06\u9875\u9762currentPage\u91CD\u7F6E
systemStore.$onAction(({ name, after }) =&gt; {
  // after\u8868\u793A\u5728action\u6210\u529F\u6267\u884C\u4E4B\u540E\u6267\u884C\uFF08\u5931\u8D25\u65F6\u4E0D\u6267\u884C\uFF09
  after(() =&gt; {
    if(name === &#39;editPageDataAction&#39; || name === &#39;newPageDataAction&#39; || name === &#39;deletePageDataAction&#39;) {
      currentPage.value = 1
    }
  })
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u6570\u636E\u7EDF\u8BA1\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6570\u636E\u7EDF\u8BA1\u9875\u9762" aria-hidden="true">#</a> \u5B9E\u73B0\u6570\u636E\u7EDF\u8BA1\u9875\u9762</h2><h3 id="\u5B9E\u73B0\u9876\u90E8\u5361\u7247\u7EC4\u4EF6\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u9876\u90E8\u5361\u7247\u7EC4\u4EF6\u9875\u9762" aria-hidden="true">#</a> \u5B9E\u73B0\u9876\u90E8\u5361\u7247\u7EC4\u4EF6\u9875\u9762</h3><h4 id="\u5B9E\u73B0\u5B50\u7EC4\u4EF6\u6570\u5B57\u7EDF\u8BA1\u5361\u7247\u7684\u9759\u6001\u9ED8\u8BA4\u5C55\u793A\u3002" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5B50\u7EC4\u4EF6\u6570\u5B57\u7EDF\u8BA1\u5361\u7247\u7684\u9759\u6001\u9ED8\u8BA4\u5C55\u793A\u3002" aria-hidden="true">#</a> \u5B9E\u73B0\u5B50\u7EC4\u4EF6\u6570\u5B57\u7EDF\u8BA1\u5361\u7247\u7684\u9759\u6001\u9ED8\u8BA4\u5C55\u793A\u3002</h4><p>\u4F7F\u7528\u4E86<code>withDefaults</code>\u5B9E\u73B0\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// cpns/count-card/count-card.vue
&lt;template&gt;
  &lt;div class=&quot;count-card&quot;&gt;
    &lt;div class=&quot;header&quot;&gt;
        &lt;span class=&quot;title&quot;&gt;{{ title }}&lt;/span&gt;
        &lt;el-tooltip :content=&quot;tips&quot; placement=&quot;top-start&quot; effect=&quot;dark&quot;&gt;
            &lt;el-icon&gt;&lt;Warning /&gt;&lt;/el-icon&gt;
        &lt;/el-tooltip&gt;
    &lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
        &lt;span class=&quot;count&quot;&gt;{{ number1 }}&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;footer&quot;&gt;
        &lt;span&gt;{{ subtitle }}&lt;/span&gt;
        &lt;span&gt;{{ number2 }}&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
interface IProps {
    title?: string,
    tips?: string,
    number1?: number,
    number2?: number,
    subtitle?: string
}

// withDefaults\u9ED8\u8BA4\u503C
withDefaults(defineProps&lt;IProps&gt;(), {
    title: &#39;\u5546\u54C1\u603B\u9500\u91CF&#39;,
    tips: &#39;\u6240\u6709\u5546\u54C1\u7684\u603B\u9500\u91CF&#39;,
    number1: 509989,
    number2: 509989,
    subtitle: &#39;\u5546\u54C1\u603B\u9500\u91CF&#39;
})

&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.count-card {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 130px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .header {
        display: flex;
        height: 38px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        justify-content: space-between;
        align-items: flex-end
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1;
        margin-left: 0px;
        font-size: 26px;
        color: rgba(0, 0, 0, 0.85);
    }

    .footer {
        display: flex;
        height: 38px;
        line-height: 38px;
        letter-spacing: 1px;
        color: rgba(0, 0, 0, 0.85);
        border-top: 1px solid #f0f0f0;
    }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42\u5B9E\u73B0\u52A8\u6001\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42\u5B9E\u73B0\u52A8\u6001\u9875\u9762" aria-hidden="true">#</a> \u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42\u5B9E\u73B0\u52A8\u6001\u9875\u9762</h4><p>\u4F7F\u7528<code>hyRequest</code>\u548C<code>pinia</code>\u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42\u4EE5\u53CA\u6570\u636E\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// service/main/analysis.ts
import hyRequest from &quot;@/service&quot;;

export function getAmountListData() {
    return hyRequest.get({
        url: &#39;/goods/amount/list&#39;
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { getAmountListData } from &quot;@/service/main/analysis/analysis&quot;;
import { defineStore } from &quot;pinia&quot;;

interface IAnalysisState {
    amountList: any[],
}
const useAnalysisStore = defineStore(&#39;analysis&#39;, {
    state: (): IAnalysisState =&gt; ({
        amountList: [],
    }),
    actions: {
        async fetchAnalysisDataAction() {
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data
        }
    }
})

export default useAnalysisStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u83B7\u53D6\u8BF7\u6C42\u6570\u636E\u5E76\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u83B7\u53D6\u8BF7\u6C42\u6570\u636E\u5E76\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u83B7\u53D6\u8BF7\u6C42\u6570\u636E\u5E76\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// views/main/analysis.vue
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;template v-for=&quot;item in amountList&quot; :key=&quot;item.amount&quot;&gt;
        &lt;el-col :span=&quot;6&quot; :xs=&quot;24&quot; :sm=&quot;12&quot; :md=&quot;8&quot; :lg=&quot;6&quot;&gt;
          &lt;count-card v-bind=&quot;item&quot;/&gt;
        &lt;/el-col&gt;
      &lt;/template&gt;
    &lt;/el-row&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import countCard from &quot;./cpns/count-card/count-card.vue&quot;;
import useAnalysisStore from &#39;@/store/main/analysis/analysis&#39;
import { storeToRefs } from &#39;pinia&#39;

// \u53D1\u8D77actions\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// \u83B7\u53D6\u6570\u636E
const { amountList } = storeToRefs(analysisStore)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9876\u90E8\u5361\u7247\u4E2D\u7684\u6570\u636E\u9012\u589E\u52A8\u753B\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u9876\u90E8\u5361\u7247\u4E2D\u7684\u6570\u636E\u9012\u589E\u52A8\u753B\u5B9E\u73B0" aria-hidden="true">#</a> \u9876\u90E8\u5361\u7247\u4E2D\u7684\u6570\u636E\u9012\u589E\u52A8\u753B\u5B9E\u73B0</h3><p>\u5B89\u88C5<code>npm install countup.js</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  // ...
  &lt;span ref=&quot;count1Ref&quot;&gt;{{ number1 }}&lt;/span&gt;
  &lt;span ref=&quot;count2Ref&quot;&gt;{{ number2 }}&lt;/span&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
// \u6570\u5B57\u9012\u589E\u52A8\u753B
import { CountUp } from &#39;countup.js&#39;;
import { onMounted, ref } from &#39;vue&#39;;

interface IProps {
    amount? :string,
    title?: string,
    tips?: string,
    number1?: number,
    number2?: number,
    subtitle?: string
}

// withDefaults\u9ED8\u8BA4\u503C
const props = withDefaults(defineProps&lt;IProps&gt;(), {
    title: &#39;\u5546\u54C1\u603B\u9500\u91CF&#39;,
    tips: &#39;\u6240\u6709\u5546\u54C1\u7684\u603B\u9500\u91CF&#39;,
    number1: 509989,
    number2: 509989,
    subtitle: &#39;\u5546\u54C1\u603B\u9500\u91CF&#39;
})

// \u7ED9\u6570\u5B57\u524D\u9762\u52A0\u524D\u7F00\xA5
const countOption = {
    prefix: props.amount == &#39;sale&#39; ? &#39;\xA5&#39; : &#39;&#39;
}

// \u521B\u5EFACountUp\u7684\u5B9E\u4F8B\u5BF9\u8C61
const count1Ref = ref&lt;HTMLElement&gt;()
const count2Ref = ref&lt;HTMLElement&gt;()
// \u53C2\u65701: \u6570\u5B57\u52A8\u753B\u7684\u5143\u7D20
// \u53C2\u65702: \u6570\u5B57\u589E\u52A0\u5230\u591A\u5C11
// \u53C2\u65703: \u7ED9\u53C2\u65701\u524D\u9762\u52A0\u4E2A\u524D\u7F00\uFF0C\u5982\xA5
// \u8FD9\u91CC\u4F7F\u7528onMounted\u662F\u56E0\u4E3Asetup\u7684\u65F6\u5019\u8FD8\u6CA1\u6302\u8F7D\u5230ref,\u5C31\u4F1A\u62A5\u9519
onMounted(() =&gt; {
    const countup1 = new CountUp(count1Ref.value!, props.number1, countOption)
    const countup2 = new CountUp(count2Ref.value!, props.number2, countOption)

    countup1.start()
    countup2.start()
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u9876\u90E8\u5361\u7247\u54CD\u5E94\u5F0F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u9876\u90E8\u5361\u7247\u54CD\u5E94\u5F0F\u5E03\u5C40" aria-hidden="true">#</a> \u5B9E\u73B0\u9876\u90E8\u5361\u7247\u54CD\u5E94\u5F0F\u5E03\u5C40</h3><p>\u4F7F\u7528<code>el-col</code>\u7684<code>xs</code>\uFF0C<code>sm</code>\uFF0C<code>md</code>\uFF0C<code>lg</code>\uFF0C<code>xl</code>\u5B9E\u73B0\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;el-col :span=&quot;6&quot; :xs=&quot;24&quot; :sm=&quot;12&quot; :md=&quot;8&quot; :lg=&quot;6&quot;&gt;
  // ...
&lt;/el-col&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0-echart-\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-echart-\u53EF\u89C6\u5316" aria-hidden="true">#</a> \u5B9E\u73B0 echart \u53EF\u89C6\u5316</h2>`,20),j=i("\u5B89\u88C5\uFF1A"),O={href:"https://echarts.apache.org/handbook/zh/get-started/",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"npm install echarts --save",-1),G=s(`<h3 id="\u521D\u6B65\u642D\u5EFA\u53EF\u89C6\u5316\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u521D\u6B65\u642D\u5EFA\u53EF\u89C6\u5316\u9875\u9762" aria-hidden="true">#</a> \u521D\u6B65\u642D\u5EFA\u53EF\u89C6\u5316\u9875\u9762</h3><h4 id="\u4F7F\u7528-element-\u5C01\u88C5\u5361\u7247\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-element-\u5C01\u88C5\u5361\u7247\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528 element \u5C01\u88C5\u5361\u7247\u7EC4\u4EF6</h4><p>\u4F7F\u7528<code>el-card</code>\u5361\u7247\uFF0C\u5C06<code>echart</code>\u53EF\u89C6\u5316\u56FE\u5F62\u805A\u5408\u5728\u5361\u7247\u5BB9\u5668\u4E2D\u5C55\u793A\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// chart-card.vue
&lt;template&gt;
    &lt;div class=&quot;chart-card&quot;&gt;
      &lt;el-card class=&quot;box-card&quot;&gt;
        &lt;template #header&gt;
          &lt;div class=&quot;cart-header&quot;&gt;
            &lt;span&gt;\u5206\u7C7B\u5546\u54C1\u6570\u91CF(\u997C\u56FE)&lt;/span&gt;
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;div class=&quot;content&quot;&gt;
          &lt;slot&gt;&lt;/slot&gt;
        &lt;/div&gt;
      &lt;/el-card&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;&lt;/script&gt;
&lt;style lang=&quot;less&quot; scoped&gt;&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5F15\u5165-echarts-\u7684\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-echarts-\u7684\u997C\u56FE" aria-hidden="true">#</a> \u5F15\u5165 ECharts \u7684\u997C\u56FE</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// dashboard.vue
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    // \u9876\u90E8\u5361\u7247\u7EC4\u4EF6
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;template v-for=&quot;item in amountList&quot; :key=&quot;item.amount&quot;&gt;
        &lt;el-col :span=&quot;6&quot;&gt;
          &lt;count-card v-bind=&quot;item&quot;/&gt;
        &lt;/el-col&gt;
      &lt;/template&gt;
    &lt;/el-row&gt;

    &lt;el-row :gutter=&quot;10&quot;&gt;
      // echart\u997C\u56FE
      &lt;el-col :span=&quot;7&quot;&gt;
        &lt;chart-card&gt;
          &lt;div class=&quot;echart&quot; ref=&quot;echartRef&quot;&gt;&lt;/div&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;

      &lt;el-col :span=&quot;10&quot;&gt;
        &lt;chart-card/&gt;
      &lt;/el-col&gt;

      &lt;el-col :span=&quot;7&quot;&gt;
        &lt;chart-card/&gt;
      &lt;/el-col&gt;
    &lt;/el-row&gt;

    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;el-col :span=&quot;12&quot;&gt;
        &lt;chart-card&gt;\u6298\u7EBF\u56FE&lt;/chart-card&gt;
      &lt;/el-col&gt;

      &lt;el-col :span=&quot;12&quot;&gt;
        &lt;chart-card&gt;\u67F1\u72B6\u56FE&lt;/chart-card&gt;
      &lt;/el-col&gt;
    &lt;/el-row&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// ...
import chartCard from &quot;./cpns/chart-card/chart-card.vue&quot;;
import { onMounted, ref } from &quot;vue&quot;;

import * as echarts from &#39;echarts&#39;

// \u53D1\u8D77actions\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42...
// \u83B7\u53D6\u6570\u636E...

// 1. \u5F15\u7528dom\u5B9E\u4F8B
const echartRef = ref&lt;HTMLElement&gt;()
onMounted(() =&gt; {
  // 2. \u57FA\u4E8E\u51C6\u5907\u597D\u7684dom\uFF0C\u521D\u59CB\u5316echart\u5B9E\u4F8B
  const echartInstance = echarts.init(echartRef.value!, &quot;light&quot;, {
    renderer: &#39;canvas&#39;
  })

  // 3.\u8BBE\u7F6Eoptions(\u914D\u7F6E)
  echartInstance.setOption({
    title: {
      text: &#39;Referer of a Website&#39;,
      subtext: &#39;Fake Data&#39;,
      left: &#39;center&#39;
    },
    tooltip: {
      trigger: &#39;item&#39;
    },
    legend: {
      orient: &#39;vertical&#39;,
      left: &#39;left&#39;
    },
    series: [
      {
        name: &#39;Access From&#39;,
        type: &#39;pie&#39;,
        radius: &#39;50%&#39;,
        data: [
          { value: 1048, name: &#39;Search Engine&#39; },
          { value: 735, name: &#39;Direct&#39; },
          { value: 580, name: &#39;Email&#39; },
          { value: 484, name: &#39;Union Ads&#39; },
          { value: 300, name: &#39;Video Ads&#39; }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;
          }
        }
      }
    ]
  })
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.el-row {
  margin-bottom: 15px;
}

.echart {
  height: 250px;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u5C42\u7EC4\u4EF6\u5C01\u88C5-echart" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5C42\u7EC4\u4EF6\u5C01\u88C5-echart" aria-hidden="true">#</a> \u4E09\u5C42\u7EC4\u4EF6\u5C01\u88C5 echart</h3><h4 id="\u5C01\u88C5-base-echart-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-base-echart-\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C01\u88C5 Base-echart \u7EC4\u4EF6</h4><p><code>base-echart</code>\u505A\u521D\u59CB\u5316\uFF08\u57FA\u4E8E\u51C6\u5907\u597D\u7684<code>dom</code>\uFF0C\u521D\u59CB\u5316<code>echart</code>\u5B9E\u4F8B\uFF09\uFF0C\u7528\u4E8E\u63A5\u6536\u4E0D\u540C<code>echart</code>\u56FE\u5F62\u7684<code>option</code>\u914D\u7F6E\u3002\u76D1\u542C<code>window</code>\u7684<code>resize</code>\u5C5E\u6027\u8BBE\u7F6E<code>echartInstance.resize()</code>\u53EF\u4EE5\u5B9E\u73B0<code>echart</code>\u7684\u54CD\u5E94\u5F0F\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// base-echart.vue
&lt;template&gt;
  &lt;div class=&quot;base-echart&quot;&gt;
    &lt;div class=&quot;echart&quot; ref=&quot;echartRef&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import * as echarts from &#39;echarts&#39;
import { onMounted, ref, watchEffect } from &#39;vue&#39;
// \u83B7\u53D6echart\u7684option\u7C7B\u578B
import type { EChartsOption } from &#39;echarts&#39;

// \u63A5\u6536\u6BCF\u4E2Aechart\u4E0D\u540C\u914D\u7F6E
interface IProps {
    option: EChartsOption
}
const props = defineProps&lt;IProps&gt;()

// 1. \u5F15\u7528dom\u5B9E\u4F8B
const echartRef = ref&lt;HTMLElement&gt;()
onMounted(() =&gt; {
  // 2. \u57FA\u4E8E\u51C6\u5907\u597D\u7684dom\uFF0C\u521D\u59CB\u5316echart\u5B9E\u4F8B
  const echartInstance = echarts.init(echartRef.value!, &quot;light&quot;, {
    renderer: &#39;canvas&#39;
  })

  // 3.\u7B2C\u4E00\u6B21options(\u914D\u7F6E),\u52A8\u6001\u4F20\u5165\u6BCF\u4E2A\u56FE\u7684option
  // watchEffect\u76D1\u542Coption\u53D8\u5316\uFF0C\u91CD\u65B0\u6267\u884C
  watchEffect(() =&gt; echartInstance.setOption(props.option))

  // 4.\u76D1\u542Cwindow\u7F29\u653E\u5B9E\u73B0echart\u54CD\u5E94\u5F0F\u5E03\u5C40
  window.addEventListener(&#39;resize&#39;, () =&gt; {
    echartInstance.resize()
  })
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.echart {
  height: 250px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7ED8\u5236-echarts-\u56FE\u5F62" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236-echarts-\u56FE\u5F62" aria-hidden="true">#</a> \u7ED8\u5236 ECharts \u56FE\u5F62</h4><p>\u7F16\u5199<code>option</code>\u914D\u7F6E\uFF0C\u5C06<code>option</code>\u4F20\u5165\u5B50\u7EC4\u4EF6<code>base-echart.vue</code>\uFF0C\u4F7F\u7528<code>:option</code>\u63A5\u6536\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// pie-echart.vue
&lt;template&gt;
  &lt;div class=&quot;pie-echart&quot;&gt;
    &lt;base-echart :option=&quot;option&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import BaseEchart from &#39;./base-echart.vue&#39;
import type { EChartsOption } from &#39;echarts&#39;

// \u53EA\u8D1F\u8D23\u4F20\u5165\u997C\u56FE\u7684option
const option: EChartsOption = {
    title: {
      text: &#39;Referer of a Website&#39;,
      subtext: &#39;Fake Data&#39;,
      left: &#39;center&#39;
    },
    tooltip: {
      trigger: &#39;item&#39;
    },
    legend: {
      orient: &#39;vertical&#39;,
      left: &#39;left&#39;
    },
    series: [
      {
        name: &#39;Access From&#39;,
        type: &#39;pie&#39;,
        radius: &#39;50%&#39;,
        data: [
          { value: 1048, name: &#39;Search Engine&#39; },
          { value: 735, name: &#39;Direct&#39; },
          { value: 580, name: &#39;Email&#39; },
          { value: 484, name: &#39;Union Ads&#39; },
          { value: 300, name: &#39;Video Ads&#39; }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;
          }
        }
      }
    ]
}
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7EDF\u4E00\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u5BFC\u51FA" aria-hidden="true">#</a> \u7EDF\u4E00\u5BFC\u51FA</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// index.ts
import BaseEchart from &#39;./src/base-echart.vue&#39;
import PieEchart from &#39;./src/pie-echart.vue&#39;
import LineEchart from &#39;./src/line-echart.vue&#39;

export { PieEchart, LineEchart }

export default BaseEchart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5F15\u5165-echarts-\u56FE\u5F62" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-echarts-\u56FE\u5F62" aria-hidden="true">#</a> \u5F15\u5165 ECharts \u56FE\u5F62</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// dashboard,vue
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;!--\u9876\u90E8\u5361\u7247\u7EC4\u4EF6 --&gt;
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;template v-for=&quot;item in amountList&quot; :key=&quot;item.amount&quot;&gt;
        &lt;el-col :span=&quot;6&quot;&gt;
          &lt;count-card v-bind=&quot;item&quot;/&gt;
        &lt;/el-col&gt;
      &lt;/template&gt;
    &lt;/el-row&gt;
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;el-col :span=&quot;7&quot;&gt;
        &lt;chart-card&gt;
          &lt;pie-echart/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;

      &lt;el-col :span=&quot;10&quot;&gt;
        &lt;chart-card&gt;
          &lt;line-echart/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;
    &lt;/el-row&gt;
    // ...
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// ...
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u8BF7\u6C42\u6570\u636E\u7528\u4E8E-echarts-\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8BF7\u6C42\u6570\u636E\u7528\u4E8E-echarts-\u663E\u793A" aria-hidden="true">#</a> \u83B7\u53D6\u8BF7\u6C42\u6570\u636E\u7528\u4E8E ECharts \u663E\u793A</h3><h4 id="\u5C01\u88C5-service-\u8BF7\u6C42\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-service-\u8BF7\u6C42\u63A5\u53E3" aria-hidden="true">#</a> \u5C01\u88C5 service \u8BF7\u6C42\u63A5\u53E3</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// service/analysis.ts
// \u83B7\u53D6\u997C\u56FE\u5206\u7C7B\u5546\u54C1\u6570\u91CF
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: &#39;/goods/category/count&#39;
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5-pinia-\u8BF7\u6C42\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-pinia-\u8BF7\u6C42\u6570\u636E" aria-hidden="true">#</a> \u5C01\u88C5 pinia \u8BF7\u6C42\u6570\u636E</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// store/analysis.ts
import { getAmountListData, getGoodsCategoryCount } from &quot;@/service/main/analysis/analysis&quot;;
import { defineStore } from &quot;pinia&quot;;

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[]
}
const useAnalysisStore = defineStore(&#39;analysis&#39;, {
    state: (): IAnalysisState =&gt; ({
        amountList: [],
        goodsCategoryCount: []
    }),
    actions: {
        async fetchAnalysisDataAction() {
            // \u9876\u90E8\u5361\u7247\u6570\u636E
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data

            // \u83B7\u53D6\u997C\u56FE\u6570\u636E
            const goodsResult = await getGoodsCategoryCount()
            this.goodsCategoryCount = goodsResult.data
        },
    }
})
export default useAnalysisStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u8C03\u7528-pinia-\u4E2D\u7684-actions-\u53D1\u8D77\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u8C03\u7528-pinia-\u4E2D\u7684-actions-\u53D1\u8D77\u8BF7\u6C42" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u8C03\u7528 pinia \u4E2D\u7684 actions \u53D1\u8D77\u8BF7\u6C42</h4><p>\u7236\u7EC4\u4EF6<code>dashboard.vue</code>\u53D1\u8D77\u8BF7\u6C42\u83B7\u53D6\u997C\u56FE\u6570\u636E\uFF0C\u5C06\u6570\u636E\uFF08<code>name</code>\uFF0C<code>goodsCount</code>\uFF09\u901A\u8FC7<code>map</code>\u6620\u5C04\u6210\u997C\u56FE\u9700\u8981\u7684\u6570\u636E\uFF08<code>name</code>\uFF0C<code>value</code>\uFF09\uFF0C\u901A\u8FC7<code>:pie-data=&quot;showGoodsCategoryCount</code>\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6<code>pie-echart.vue</code>\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// dashboard.vue
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;!--\u9876\u90E8\u5361\u7247\u7EC4\u4EF6 --&gt;
    // ...
    // \u997C\u56FE
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;el-col :span=&quot;7&quot;&gt;
        &lt;chart-card&gt;
          &lt;pie-echart :pie-data=&quot;showGoodsCategoryCount&quot;/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;
     &lt;/el-row&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { storeToRefs } from &#39;pinia&#39;
import { computed } from &quot;vue&quot;;
import countCard from &quot;./cpns/count-card/count-card.vue&quot;;
import chartCard from &quot;./cpns/chart-card/chart-card.vue&quot;;
import useAnalysisStore from &#39;@/store/main/analysis/analysis&#39;

// \u53D1\u8D77actions\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// \u83B7\u53D6\u6570\u636E
const { amountList, goodsCategoryCount } = storeToRefs(analysisStore)

// \u83B7\u53D6echart\u997C\u56FE\u6570\u636E
const showGoodsCategoryCount = computed(() =&gt; {
  return goodsCategoryCount.value.map((item) =&gt; ({
    name: item.name,
    value: item.goodsCount
  }))
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B50\u7EC4\u4EF6\u52A8\u6001\u63A5\u6536\u997C\u56FE-option-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6\u52A8\u6001\u63A5\u6536\u997C\u56FE-option-\u6570\u636E" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6\u52A8\u6001\u63A5\u6536\u997C\u56FE option \u6570\u636E</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;pie-echart&quot;&gt;
    &lt;base-echart :option=&quot;option&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import BaseEchart from &#39;./base-echart.vue&#39;
import type { EChartsOption } from &#39;echarts&#39;
import { computed } from &#39;vue&#39;

interface IEchartValueType {
  value: number
  name: string
}

interface IProps {
  pieData: IEchartValueType[]
}

const props = defineProps&lt;IProps&gt;()

// \u53EA\u8D1F\u8D23\u4F20\u5165\u997C\u56FE\u7684option
const option = computed&lt;EChartsOption&gt;(() =&gt; {
    return {
      tooltip: {
        trigger: &#39;item&#39;
      },
      legend: {
        orient: &#39;horizontal&#39;,
        left: &#39;left&#39;
      },
      series: [
        {
          name: &#39;\u8BBF\u95EE\u6765\u95EE&#39;,
          type: &#39;pie&#39;,
          radius: &#39;50%&#39;,
          bottom: &#39;-10%&#39;,
          data: props.pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;
            }
          }
        }
      ]
    }
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u5404\u79CD-echart-\u56FE\u52A8\u6001\u6570\u636E\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5404\u79CD-echart-\u56FE\u52A8\u6001\u6570\u636E\u5C55\u793A" aria-hidden="true">#</a> \u5B9E\u73B0\u5404\u79CD Echart \u56FE\u52A8\u6001\u6570\u636E\u5C55\u793A</h3><h4 id="\u5C01\u88C5\u8BF7\u6C42\u63A5\u53E3\u7684\u52A8\u6001\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8BF7\u6C42\u63A5\u53E3\u7684\u52A8\u6001\u6570\u636E" aria-hidden="true">#</a> \u5C01\u88C5\u8BF7\u6C42\u63A5\u53E3\u7684\u52A8\u6001\u6570\u636E</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// service/analysis.ts
// \u83B7\u53D6\u997C\u56FE\u3001\u73AB\u7470\u56FE\u5206\u7C7B\u5546\u54C1\u6570\u91CF
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: &#39;/goods/category/count&#39;
    })
}

// \u83B7\u53D6\u6298\u7EBF\u56FE\u5546\u54C1\u9500\u91CF
export function getGoodsCategorySale() {
    return hyRequest.get({
        url: &#39;/goods/category/sale&#39;
    })
}

// \u83B7\u53D6\u67F1\u72B6\u56FE\u5546\u54C1\u6536\u85CF\u6570\u91CF
export function getGoodsCategoryFavor() {
    return hyRequest.get({
        url: &#39;/goods/category/favor&#39;
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// store/analysis.ts
import { getAmountListData, getGoodsCategoryCount, getGoodsCategoryFavor, getGoodsCategorySale } from &quot;@/service/main/analysis/analysis&quot;;
import { defineStore } from &quot;pinia&quot;;

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[],
    goodsCategorySale: any[],
    goodsCategoryFavor: any[]
}
const useAnalysisStore = defineStore(&#39;analysis&#39;, {
    state: (): IAnalysisState =&gt; ({
        amountList: [],
        goodsCategoryCount: [],
        goodsCategorySale: [],
        goodsCategoryFavor: []
    }),
    actions: {
        async fetchAnalysisDataAction() {
            // \u9876\u90E8\u5361\u7247\u6570\u636E
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data

            // \u83B7\u53D6\u997C\u56FE\u3001\u73AB\u7470\u56FE\u6570\u636E
            const goodsCountResult = await getGoodsCategoryCount()
            this.goodsCategoryCount = goodsCountResult.data

            // \u83B7\u53D6\u6298\u7EBF\u56FE\u6570\u636E
            const goodsSaleResult = await getGoodsCategorySale()
            this.goodsCategorySale = goodsSaleResult.data

            // \u83B7\u53D6\u67F1\u72B6\u56FE\u6570\u636E
            const goodsFavorResult = await getGoodsCategoryFavor()
            this.goodsCategoryFavor = goodsFavorResult.data
        },
    }
})

export default useAnalysisStore

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5-type-\u7C7B\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-type-\u7C7B\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u5C01\u88C5 Type \u7C7B\u578B\u63A5\u53E3</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// types/index.ts
export interface IEchartValueType {
    value: number
    name: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u73B0\u73AB\u7470\u56FE\u6570\u636E\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u73AB\u7470\u56FE\u6570\u636E\u5C55\u793A" aria-hidden="true">#</a> \u5B9E\u73B0\u73AB\u7470\u56FE\u6570\u636E\u5C55\u793A</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-echarts/src/rose-echart.vue
&lt;template&gt;
  &lt;div class=&quot;pie-echart&quot;&gt;
    &lt;base-echart :option=&quot;option&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import BaseEchart from &#39;./base-echart.vue&#39;
import { computed } from &#39;vue&#39;
import type { IEchartValueType } from &#39;../types&#39;
import type { EChartsOption } from &#39;echarts&#39;

interface IProps {
  roseData: IEchartValueType[]
}

const props = defineProps&lt;IProps&gt;()

// \u73AB\u7470\u56FE
const option = computed&lt;EChartsOption&gt;(() =&gt; {
  return {
    tooltip: {
      trigger: &#39;item&#39;
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: &#39;\u8BBF\u95EE\u6765\u6E90&#39;,
        type: &#39;pie&#39;,
        radius: [10, 160],
        center: [&#39;50%&#39;, &#39;50%&#39;],
        roseType: &#39;area&#39;,
        itemStyle: {
          borderRadius: 8
        },
        bottom: &#39;-25%&#39;,
        data: props.roseData,
        label: {
            show: false
        }
      }
    ]
  }
})
&lt;/script&gt;
&lt;style lang=&quot;less&quot; scoped&gt;&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u73B0\u6298\u7EBF\u56FE\u6570\u636E\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6298\u7EBF\u56FE\u6570\u636E\u5C55\u793A" aria-hidden="true">#</a> \u5B9E\u73B0\u6298\u7EBF\u56FE\u6570\u636E\u5C55\u793A</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// page-echarts/src/line-echart.vue
&lt;template&gt;
  &lt;div class=&quot;line-echart&quot;&gt;
    &lt;base-echart :option=&quot;option&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import BaseEchart from &#39;./base-echart.vue&#39;
import { computed } from &#39;vue&#39;
import type { EChartsOption } from &#39;echarts&#39;

interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps&lt;IProps&gt;()

// \u73AB\u7470\u56FE
const option = computed&lt;EChartsOption&gt;(() =&gt; {
  return {
    grid: {
      left: &#39;3%&#39;,
      right: &#39;4%&#39;,
      bottom: &#39;3%&#39;,
      containLabel: true
    },
    xAxis: {
      type: &#39;category&#39;,
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: &#39;value&#39;
    },
    series: [
      {
        name: &#39;\u5206\u7C7B\u9500\u91CF\u7EDF\u8BA1&#39;,
        type: &#39;line&#39;,
        stack: &#39;\u603B\u91CF&#39;,
        areaStyle: {},
        emphasis: {
          focus: &#39;series&#39;
        },
        data: props.values
      }
    ]
  }
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B9E\u73B0\u67F1\u72B6\u56FE\u6570\u636E\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u67F1\u72B6\u56FE\u6570\u636E\u5C55\u793A" aria-hidden="true">#</a> \u5B9E\u73B0\u67F1\u72B6\u56FE\u6570\u636E\u5C55\u793A</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// // page-echarts/src/bar-echart.vue
&lt;template&gt;
  &lt;div class=&quot;bar-echart&quot;&gt;
    &lt;base-echart :option=&quot;option&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import BaseEchart from &#39;./base-echart.vue&#39;
import { computed } from &#39;vue&#39;
import type { EChartsOption } from &#39;echarts&#39;
import * as echarts from &#39;echarts&#39;

interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps&lt;IProps&gt;()

// \u73AB\u7470\u56FE
const option = computed&lt;EChartsOption&gt;(() =&gt; {
  return {
    title: {
      text: &#39;\u652F\u6301\u9F20\u6807\u6EDA\u52A8\u7F29\u653E&#39;
    },
    grid: {
      bottom: &#39;5%&#39;
    },
    xAxis: {
      data: props.labels,
      axisLabel: {
        inside: true,
        color: &#39;#fff&#39;
      },
      z: 10
    },
    yAxis: {
      axisLabel: {
        color: &#39;#999&#39;
      }
    },
    series: [
      {
        type: &#39;bar&#39;,
        showBackground: true,
        data: props.values,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: &#39;#2378f7&#39; },
            { offset: 0.5, color: &#39;#188df0&#39; },
            { offset: 1, color: &#39;#188df0&#39; }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: &#39;#2378f7&#39; },
              { offset: 0.7, color: &#39;#2378f7&#39; },
              { offset: 1, color: &#39;#83bff6&#39; }
            ])
          }
        }
      }
    ]
  }
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u5C06\u63A5\u53E3\u6570\u636E\u6620\u5C04-echart-\u9700\u8981\u7684\u6570\u636E\u8FDB\u884C\u4F20\u9012\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u5C06\u63A5\u53E3\u6570\u636E\u6620\u5C04-echart-\u9700\u8981\u7684\u6570\u636E\u8FDB\u884C\u4F20\u9012\u4F7F\u7528" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u5C06\u63A5\u53E3\u6570\u636E\u6620\u5C04 Echart \u9700\u8981\u7684\u6570\u636E\u8FDB\u884C\u4F20\u9012\u4F7F\u7528</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// dashboard.vue
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;!--\u9876\u90E8\u5361\u7247\u7EC4\u4EF6 --&gt;
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;template v-for=&quot;item in amountList&quot; :key=&quot;item.amount&quot;&gt;
        &lt;el-col :span=&quot;6&quot; :xs=&quot;24&quot; :sm=&quot;12&quot; :md=&quot;8&quot; :lg=&quot;6&quot;&gt;
          &lt;count-card v-bind=&quot;item&quot;/&gt;
        &lt;/el-col&gt;
      &lt;/template&gt;
    &lt;/el-row&gt;

    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;el-col :span=&quot;7&quot;&gt;
        &lt;chart-card&gt;
          &lt;pie-echart :pie-data=&quot;showGoodsCategoryCount&quot;/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;

      &lt;el-col :span=&quot;10&quot;&gt;
        &lt;chart-card&gt;
          &lt;line-echart/&gt;
        &lt;/chart-card&gt;

      &lt;/el-col&gt;

      &lt;el-col :span=&quot;7&quot;&gt;
        &lt;chart-card&gt;
          &lt;rose-echart :rose-data=&quot;showGoodsCategoryCount&quot;/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;
    &lt;/el-row&gt;

    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;el-col :span=&quot;12&quot;&gt;
        &lt;chart-card&gt;
          &lt;line-echart :labels=&quot;showGoodsCategorySale.labels&quot; :values=&quot;showGoodsCategorySale.values&quot;/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;

      &lt;el-col :span=&quot;12&quot;&gt;
        &lt;chart-card&gt;
          &lt;bar-echart v-bind=&quot;showGoodsCategoryFavor&quot;/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;
    &lt;/el-row&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { storeToRefs } from &#39;pinia&#39;
import { computed } from &quot;vue&quot;;
import countCard from &quot;./cpns/count-card/count-card.vue&quot;;
import chartCard from &quot;./cpns/chart-card/chart-card.vue&quot;;
import useAnalysisStore from &#39;@/store/main/analysis/analysis&#39;

// \u53D1\u8D77actions\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// \u83B7\u53D6\u6570\u636E
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor } = storeToRefs(analysisStore)

// \u83B7\u53D6echart\u997C\u56FE\u3001\u73AB\u7470\u56FE\u6570\u636E(\u5C06\u63A5\u53E3\u6570\u636E\u6620\u5C04\u6210name, value)
const showGoodsCategoryCount = computed(() =&gt; {
  return goodsCategoryCount.value.map((item) =&gt; ({
    name: item.name,
    value: item.goodsCount
  }))
})

// \u83B7\u53D6echart\u6298\u7EBF\u56FE\u6570\u636E(\u5C06\u63A5\u53E3\u6570\u636E\u6620\u5C04\u6210labels\u3001values)
const showGoodsCategorySale = computed(() =&gt; {
  const labels = goodsCategorySale.value.map((item) =&gt; item.name)
  const values = goodsCategorySale.value.map((item) =&gt; item.goodsSale)
  return { labels, values }
})

// \u83B7\u53D6echart\u67F1\u72B6\u56FE\u6570\u636E
const showGoodsCategoryFavor = computed(() =&gt; {
  const labels = goodsCategoryFavor.value.map((item) =&gt; item.name)
  const values = goodsCategoryFavor.value.map((item) =&gt; item.goodsFavor)
  return { labels, values }
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.el-row {
  margin-bottom: 15px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0-echart-\u5730\u56FE\u6570\u636E\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-echart-\u5730\u56FE\u6570\u636E\u5C55\u793A" aria-hidden="true">#</a> \u5B9E\u73B0 echart \u5730\u56FE\u6570\u636E\u5C55\u793A</h3><h4 id="\u5F15\u5165\u5730\u56FE\u4F4D\u7F6E\u7ECF\u7EAC\u5EA6-json-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u5730\u56FE\u4F4D\u7F6E\u7ECF\u7EAC\u5EA6-json-\u6570\u636E" aria-hidden="true">#</a> \u5F15\u5165\u5730\u56FE\u4F4D\u7F6E\u7ECF\u7EAC\u5EA6 json \u6570\u636E</h4>`,43),H={href:"https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.769817845138945&lng=104.29901249999999&zoom=4",target:"_blank",rel:"noopener noreferrer"},Q=i("\u963F\u91CC\u4E91\u5730\u56FE JSON API"),W=i("\uFF1A"),Y={href:"https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",target:"_blank",rel:"noopener noreferrer"},$=i("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json"),K=s(`<h4 id="\u5C01\u88C5\u5750\u6807\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u5750\u6807\u4FE1\u606F" aria-hidden="true">#</a> \u5C01\u88C5\u5750\u6807\u4FE1\u606F</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// utils/coordinate-data.ts
export const coordinateData: any = {
  \u4E0A\u6D77: [121.487899486, 31.24916171],
  \u4E34\u6CA7: [100.092612914, 23.8878061038],
  \u4E3D\u6C5F: [100.229628399, 26.8753510895],
  \u4FDD\u5C71: [99.1779956133, 25.1204891962],
  \u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE: [100.223674789, 25.5968996394],
  \u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE: [98.5894342874, 24.441239663],
  \u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE: [98.8599320425, 25.8606769782],
  \u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE: [104.246294318, 23.3740868504],
  \u6606\u660E: [102.714601139, 25.0491531005],
  \u662D\u901A: [103.725020656, 27.3406329636],
  \u666E\u6D31: [100.98005773, 22.7887777801],
  \u66F2\u9756: [103.782538888, 25.5207581429],
  \u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE: [101.529382239, 25.0663556742],
  \u7389\u6EAA: [102.545067892, 24.3704471344],
  \u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE: [103.384064757, 23.3677175165],
  \u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE: [100.803038275, 22.0094330022],
  \u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE: [99.7136815989, 27.8310294612],
  \u4E4C\u5170\u5BDF\u5E03: [113.112846391, 41.0223629468],
  \u4E4C\u6D77: [106.831999097, 39.6831770068],
  \u5174\u5B89\u76DF: [122.048166514, 46.0837570652],
  \u5305\u5934: [109.846238532, 40.6471194257],
  \u547C\u4F26\u8D1D\u5C14: [119.760821794, 49.2016360546],
  \u547C\u548C\u6D69\u7279: [111.66035052, 40.8283188731],
  \u5DF4\u5F66\u6DD6\u5C14: [107.42380672, 40.7691799024],
  \u8D64\u5CF0: [118.930761192, 42.2971123203],
  \u901A\u8FBD: [122.260363263, 43.633756073],
  \u9102\u5C14\u591A\u65AF: [109.993706251, 39.8164895606],
  \u9521\u6797\u90ED\u52D2\u76DF: [116.027339689, 43.9397048423],
  \u963F\u62C9\u5584\u76DF: [105.695682871, 38.8430752644],
  \u5317\u4EAC: [116.395645038, 39.9299857781],
  \u53F0\u4E2D: [119.337634104, 26.0911937119],
  \u53F0\u5317: [114.130474436, 22.3748329286],
  \u53F0\u5357: [121.360525873, 38.9658447898],
  \u5609\u4E49: [114.246701335, 22.7288657203],
  \u9AD8\u96C4: [111.590952812, 21.9464822541],
  \u5409\u6797: [126.564543989, 43.8719883344],
  \u56DB\u5E73: [124.391382074, 43.1755247011],
  \u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE: [129.485901958, 42.8964136037],
  \u677E\u539F: [124.832994532, 45.1360489701],
  \u767D\u57CE: [122.840776679, 45.6210862752],
  \u767D\u5C71: [126.435797675, 41.945859397],
  \u8FBD\u6E90: [125.133686052, 42.9233026191],
  \u901A\u5316: [125.942650139, 41.7363971299],
  \u957F\u6625: [125.313642427, 43.8983376071],
  \u4E50\u5C71: [103.760824239, 29.6009576111],
  \u5185\u6C5F: [105.073055992, 29.5994615348],
  \u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE: [102.259590803, 27.8923929037],
  \u5357\u5145: [106.105553984, 30.8009651682],
  \u5B9C\u5BBE: [104.633019062, 28.7696747963],
  \u5DF4\u4E2D: [106.757915842, 31.8691891592],
  \u5E7F\u5143: [105.81968694, 32.4410401584],
  \u5E7F\u5B89: [106.635720331, 30.4639838879],
  \u5FB7\u9633: [104.402397818, 31.1311396527],
  \u6210\u90FD: [104.067923463, 30.6799428454],
  \u6500\u679D\u82B1: [101.722423152, 26.5875712571],
  \u6CF8\u5DDE: [105.443970289, 28.8959298039],
  \u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE: [101.969232063, 30.0551441144],
  \u7709\u5C71: [103.841429563, 30.0611150799],
  \u7EF5\u9633: [104.705518975, 31.5047012581],
  \u81EA\u8D21: [104.776071339, 29.3591568895],
  \u8D44\u9633: [104.635930302, 30.132191434],
  \u8FBE\u5DDE: [107.494973447, 31.2141988589],
  \u9042\u5B81: [105.564887792, 30.5574913504],
  \u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE: [102.228564689, 31.9057628583],
  \u96C5\u5B89: [103.009356466, 29.9997163371],
  \u5929\u6D25: [117.210813092, 39.1439299033],
  \u4E2D\u536B: [105.196754199, 37.5211241916],
  \u5434\u5FE0: [106.208254199, 37.9935610029],
  \u56FA\u539F: [106.285267996, 36.0215234807],
  \u77F3\u5634\u5C71: [106.379337202, 39.0202232836],
  \u94F6\u5DDD: [106.206478608, 38.5026210119],
  \u4EB3\u5DDE: [115.787928245, 33.8712105653],
  \u516D\u5B89: [116.505252683, 31.7555583552],
  \u5408\u80A5: [117.282699092, 31.8669422607],
  \u5B89\u5E86: [117.058738772, 30.5378978174],
  \u5BA3\u57CE: [118.752096311, 30.9516423543],
  \u5BBF\u5DDE: [116.988692412, 33.6367723858],
  \u6C60\u5DDE: [117.494476772, 30.6600192482],
  \u6DEE\u5317: [116.791447429, 33.9600233054],
  \u6DEE\u5357: [117.018638863, 32.6428118237],
  \u6EC1\u5DDE: [118.324570351, 32.3173505954],
  \u829C\u6E56: [118.384108423, 31.3660197875],
  \u868C\u57E0: [117.357079866, 32.9294989067],
  \u94DC\u9675: [117.819428729, 30.9409296947],
  \u961C\u9633: [115.820932259, 32.9012113306],
  \u9A6C\u978D\u5C71: [118.515881847, 31.6885281589],
  \u9EC4\u5C71: [118.293569632, 29.7344348562],
  \u4E1C\u8425: [118.583926333, 37.4871211553],
  \u4E34\u6C82: [118.340768237, 35.0724090744],
  \u5A01\u6D77: [122.093958366, 37.5287870813],
  \u5FB7\u5DDE: [116.328161364, 37.4608259263],
  \u65E5\u7167: [119.507179943, 35.4202251931],
  \u67A3\u5E84: [117.279305383, 34.8078830784],
  \u6CF0\u5B89: [117.089414917, 36.1880777589],
  \u6D4E\u5357: [117.024967066, 36.6827847272],
  \u6D4E\u5B81: [116.600797625, 35.4021216643],
  \u6DC4\u535A: [118.059134278, 36.8046848542],
  \u6EE8\u5DDE: [117.968292415, 37.4053139418],
  \u6F4D\u574A: [119.142633823, 36.7161148731],
  \u70DF\u53F0: [121.30955503, 37.5365615629],
  \u804A\u57CE: [115.986869139, 36.4558285147],
  \u83B1\u829C: [117.684666912, 36.2336541336],
  \u83CF\u6CFD: [115.463359775, 35.2624404961],
  \u9752\u5C9B: [120.384428184, 36.1052149013],
  \u4E34\u6C7E: [111.538787596, 36.0997454436],
  \u5415\u6881: [111.143156602, 37.527316097],
  \u5927\u540C: [113.290508673, 40.1137444997],
  \u592A\u539F: [112.550863589, 37.890277054],
  \u5FFB\u5DDE: [112.727938829, 38.461030573],
  \u664B\u4E2D: [112.7385144, 37.6933615268],
  \u664B\u57CE: [112.867332758, 35.4998344672],
  \u6714\u5DDE: [112.479927727, 39.3376719662],
  \u8FD0\u57CE: [111.006853653, 35.0388594798],
  \u957F\u6CBB: [113.120292086, 36.2016643857],
  \u9633\u6CC9: [113.569237602, 37.8695294932],
  \u4E1C\u839E: [113.763433991, 23.0430238154],
  \u4E2D\u5C71: [113.422060021, 22.5451775145],
  \u4E91\u6D6E: [112.050945959, 22.9379756855],
  \u4F5B\u5C71: [113.134025635, 23.0350948405],
  \u5E7F\u5DDE: [113.307649675, 23.1200491021],
  \u60E0\u5DDE: [114.41065808, 23.1135398524],
  \u63ED\u9633: [116.379500855, 23.5479994669],
  \u6885\u5DDE: [116.126403098, 24.304570606],
  \u6C55\u5934: [116.728650288, 23.3839084533],
  \u6C55\u5C3E: [115.372924289, 22.7787305002],
  \u6C5F\u95E8: [113.078125341, 22.5751167835],
  \u6CB3\u6E90: [114.713721476, 23.7572508505],
  \u6DF1\u5733: [114.025973657, 22.5460535462],
  \u6E05\u8FDC: [113.040773349, 23.6984685504],
  \u6E5B\u6C5F: [110.365067263, 21.2574631038],
  \u6F6E\u5DDE: [116.630075991, 23.6618116765],
  \u73E0\u6D77: [113.562447026, 22.2569146461],
  \u8087\u5E86: [112.47965337, 23.0786632829],
  \u8302\u540D: [110.931245331, 21.6682257188],
  \u9633\u6C5F: [111.977009756, 21.8715173045],
  \u97F6\u5173: [113.594461107, 24.8029603119],
  \u5317\u6D77: [109.122627919, 21.472718235],
  \u5357\u5B81: [108.297233556, 22.8064929356],
  \u5D07\u5DE6: [107.357322038, 22.4154552965],
  \u6765\u5BBE: [109.231816505, 23.7411659265],
  \u67F3\u5DDE: [109.42240181, 24.3290533525],
  \u6842\u6797: [110.260920147, 25.262901246],
  \u68A7\u5DDE: [111.30547195, 23.4853946367],
  \u6CB3\u6C60: [108.069947709, 24.6995207829],
  \u7389\u6797: [110.151676316, 22.6439736084],
  \u767E\u8272: [106.631821404, 23.9015123679],
  \u8D35\u6E2F: [109.613707557, 23.1033731644],
  \u8D3A\u5DDE: [111.552594179, 24.4110535471],
  \u94A6\u5DDE: [108.638798056, 21.9733504653],
  \u9632\u57CE\u6E2F: [108.351791153, 21.6173984705],
  \u4E4C\u9C81\u6728\u9F50: [87.5649877411, 43.8403803472],
  \u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE: [81.2978535304, 43.9222480963],
  \u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE: [76.1375644775, 39.7503455778],
  \u514B\u62C9\u739B\u4F9D: [84.8811801861, 45.5943310667],
  \u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE: [82.0524362672, 44.9136513743],
  \u5410\u9C81\u756A\u5730\u533A: [89.1815948657, 42.9604700169],
  \u548C\u7530\u5730\u533A: [79.9302386372, 37.1167744927],
  \u54C8\u5BC6\u5730\u533A: [93.5283550928, 42.8585963324],
  \u5580\u4EC0\u5730\u533A: [75.9929732675, 39.4706271887],
  \u5854\u57CE\u5730\u533A: [82.9748805837, 46.7586836297],
  \u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE: [87.2960381257, 44.0070578985],
  \u81EA\u6CBB\u533A\u76F4\u8F96: [85.6148993383, 42.1270009576],
  \u963F\u514B\u82CF\u5730\u533A: [80.2698461793, 41.1717309015],
  \u963F\u52D2\u6CF0\u5730\u533A: [88.1379154871, 47.8397444862],
  \u5357\u4EAC: [118.778074408, 32.0572355018],
  \u5357\u901A: [120.873800951, 32.0146645408],
  \u5BBF\u8FC1: [118.296893379, 33.9520497337],
  \u5E38\u5DDE: [119.981861013, 31.7713967447],
  \u5F90\u5DDE: [117.188106623, 34.2715534311],
  \u626C\u5DDE: [119.427777551, 32.4085052546],
  \u65E0\u9521: [120.305455901, 31.5700374519],
  \u6CF0\u5DDE: [119.919606016, 32.4760532748],
  \u6DEE\u5B89: [119.030186365, 33.6065127393],
  \u76D0\u57CE: [120.148871818, 33.3798618771],
  \u82CF\u5DDE: [120.619907115, 31.317987368],
  \u8FDE\u4E91\u6E2F: [119.173872217, 34.601548967],
  \u9547\u6C5F: [119.455835405, 32.2044094436],
  \u4E0A\u9976: [117.955463877, 28.4576225539],
  \u4E5D\u6C5F: [115.999848022, 29.7196395261],
  \u5357\u660C: [115.893527546, 28.6895780001],
  \u5409\u5B89: [114.992038711, 27.1138476502],
  \u5B9C\u6625: [114.400038672, 27.8111298958],
  \u629A\u5DDE: [116.360918867, 27.9545451703],
  \u65B0\u4F59: [114.947117417, 27.8223215586],
  \u666F\u5FB7\u9547: [117.186522625, 29.3035627684],
  \u840D\u4E61: [113.859917033, 27.639544223],
  \u8D63\u5DDE: [114.935909079, 25.8452955363],
  \u9E70\u6F6D: [117.035450186, 28.2413095972],
  \u4FDD\u5B9A: [115.494810169, 38.886564548],
  \u5510\u5C71: [118.183450598, 39.6505309225],
  \u5ECA\u574A: [116.703602223, 39.5186106251],
  \u5F20\u5BB6\u53E3: [114.89378153, 40.8111884911],
  \u627F\u5FB7: [117.933822456, 40.9925210525],
  \u6CA7\u5DDE: [116.863806476, 38.2976153503],
  \u77F3\u5BB6\u5E84: [114.522081844, 38.0489583146],
  \u79E6\u7687\u5C9B: [119.604367616, 39.9454615659],
  \u8861\u6C34: [115.686228653, 37.7469290459],
  \u90A2\u53F0: [114.520486813, 37.0695311969],
  \u90AF\u90F8: [114.482693932, 36.6093079285],
  \u4E09\u95E8\u5CE1: [111.181262093, 34.7833199411],
  \u4FE1\u9633: [114.085490993, 32.1285823075],
  \u5357\u9633: [112.542841901, 33.0114195691],
  \u5468\u53E3: [114.654101942, 33.6237408181],
  \u5546\u4E18: [115.641885688, 34.4385886402],
  \u5B89\u9633: [114.351806508, 36.1102667222],
  \u5E73\u9876\u5C71: [113.300848978, 33.7453014565],
  \u5F00\u5C01: [114.351642118, 34.8018541758],
  \u65B0\u4E61: [113.912690161, 35.3072575577],
  \u6D1B\u9633: [112.447524769, 34.6573678177],
  \u6F2F\u6CB3: [114.0460614, 33.5762786885],
  \u6FEE\u9633: [115.026627441, 35.7532978882],
  \u7126\u4F5C: [113.211835885, 35.234607555],
  \u8BB8\u660C: [113.83531246, 34.0267395887],
  \u90D1\u5DDE: [113.64964385, 34.7566100641],
  \u9A7B\u9A6C\u5E97: [114.049153547, 32.9831581541],
  \u9E64\u58C1: [114.297769838, 35.7554258742],
  \u4E3D\u6C34: [119.929575843, 28.4562995521],
  \u53F0\u5DDE: [121.440612936, 28.6682832857],
  \u5609\u5174: [120.760427699, 30.7739922396],
  \u5B81\u6CE2: [121.579005973, 29.8852589659],
  \u676D\u5DDE: [120.219375416, 30.2592444615],
  \u6E29\u5DDE: [120.690634734, 28.002837594],
  \u6E56\u5DDE: [120.137243163, 30.8779251557],
  \u7ECD\u5174: [120.592467386, 30.0023645805],
  \u821F\u5C71: [122.169872098, 30.0360103026],
  \u8862\u5DDE: [118.875841652, 28.9569104475],
  \u91D1\u534E: [119.652575704, 29.1028991054],
  \u4E09\u4E9A: [109.522771281, 18.2577759149],
  \u4E09\u6C99: [112.350383075, 16.840062894],
  \u6D77\u53E3: [110.330801848, 20.022071277],
  \u5341\u5830: [110.801228917, 32.6369943395],
  \u54B8\u5B81: [114.300060592, 29.8806567577],
  \u5B5D\u611F: [113.935734392, 30.9279547842],
  \u5B9C\u660C: [111.310981092, 30.732757818],
  \u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE: [109.491923304, 30.2858883166],
  \u6B66\u6C49: [114.316200103, 30.5810841269],
  \u7701\u76F4\u8F96: [112.410562192, 31.2093162501],
  \u8346\u5DDE: [112.241865807, 30.332590523],
  \u8346\u95E8: [112.217330299, 31.0426112029],
  \u8944\u9633: [112.250092848, 32.2291685915],
  \u9102\u5DDE: [114.895594041, 30.3844393228],
  \u968F\u5DDE: [113.379358364, 31.7178576082],
  \u9EC4\u5188: [114.906618047, 30.4461089379],
  \u9EC4\u77F3: [115.050683164, 30.2161271277],
  \u5A04\u5E95: [111.996396357, 27.7410733023],
  \u5CB3\u9633: [113.146195519, 29.3780070755],
  \u5E38\u5FB7: [111.653718137, 29.0121488552],
  \u5F20\u5BB6\u754C: [110.481620157, 29.1248893532],
  \u6000\u5316: [109.986958796, 27.5574829012],
  \u682A\u6D32: [113.131695341, 27.8274329277],
  \u6C38\u5DDE: [111.614647686, 26.4359716468],
  \u6E58\u6F6D: [112.935555633, 27.835095053],
  \u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE: [109.7457458, 28.3179507937],
  \u76CA\u9633: [112.366546645, 28.5880877799],
  \u8861\u9633: [112.583818811, 26.8981644154],
  \u90B5\u9633: [111.461525404, 27.2368112449],
  \u90F4\u5DDE: [113.037704468, 25.7822639757],
  \u957F\u6C99: [112.979352788, 28.2134782309],
  \u65E0\u5802\u533A\u5212\u5206\u533A\u57DF: [113.557519102, 22.2041179884],
  \u6FB3\u95E8\u534A\u5C9B: [113.566432335, 22.1950041592],
  \u6FB3\u95E8\u79BB\u5C9B: [113.557519102, 22.2041179884],
  \u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE: [103.215249178, 35.5985143488],
  \u5170\u5DDE: [103.823305441, 36.064225525],
  \u5609\u5CEA\u5173: [98.2816345853, 39.8023973267],
  \u5929\u6C34: [105.736931623, 34.5843194189],
  \u5B9A\u897F: [104.626637601, 35.5860562418],
  \u5E73\u51C9: [106.688911157, 35.55011019],
  \u5E86\u9633: [107.644227087, 35.7268007545],
  \u5F20\u6396: [100.459891869, 38.939320297],
  \u6B66\u5A01: [102.640147343, 37.9331721429],
  \u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE: [102.917442486, 34.9922111784],
  \u767D\u94F6: [104.171240904, 36.5466817062],
  \u9152\u6CC9: [98.5084145062, 39.7414737682],
  \u91D1\u660C: [102.208126263, 38.5160717995],
  \u9647\u5357: [104.934573406, 33.3944799729],
  \u4E09\u660E: [117.642193934, 26.2708352794],
  \u5357\u5E73: [118.181882949, 26.6436264742],
  \u53A6\u95E8: [118.103886046, 24.4892306125],
  \u5B81\u5FB7: [119.54208215, 26.6565274192],
  \u6CC9\u5DDE: [118.600362343, 24.901652384],
  \u6F33\u5DDE: [117.676204679, 24.5170647798],
  \u798F\u5DDE: [119.330221107, 26.0471254966],
  \u8386\u7530: [119.077730964, 25.4484501367],
  \u9F99\u5CA9: [117.017996739, 25.0786854335],
  \u5C71\u5357\u5730\u533A: [91.7506438744, 29.2290269317],
  \u62C9\u8428: [91.111890896, 29.6625570621],
  \u65E5\u5580\u5219\u5730\u533A: [88.8914855677, 29.2690232039],
  \u660C\u90FD\u5730\u533A: [97.18558158, 31.1405756319],
  \u6797\u829D\u5730\u533A: [94.3499854582, 29.6669406258],
  \u90A3\u66F2\u5730\u533A: [92.0670183689, 31.4806798301],
  \u963F\u91CC\u5730\u533A: [81.1076686895, 30.4045565883],
  \u516D\u76D8\u6C34: [104.85208676, 26.5918660603],
  \u5B89\u987A: [105.928269966, 26.2285945777],
  \u6BD5\u8282: [105.333323371, 27.4085621313],
  \u8D35\u9633: [106.709177096, 26.6299067414],
  \u9075\u4E49: [106.931260316, 27.6999613771],
  \u94DC\u4EC1: [109.168558028, 27.6749026906],
  \u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE: [107.985352573, 26.5839917665],
  \u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE: [107.52320511, 26.2645359974],
  \u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE: [104.900557798, 25.0951480559],
  \u4E39\u4E1C: [124.338543115, 40.1290228266],
  \u5927\u8FDE: [121.593477781, 38.9487099383],
  \u629A\u987A: [123.929819767, 41.8773038296],
  \u671D\u9633: [120.446162703, 41.5718276679],
  \u672C\u6EAA: [123.77806237, 41.3258376266],
  \u6C88\u9633: [123.432790922, 41.8086447835],
  \u76D8\u9526: [122.07322781, 41.141248023],
  \u8425\u53E3: [122.233391371, 40.6686510665],
  \u846B\u82A6\u5C9B: [120.860757645, 40.7430298813],
  \u8FBD\u9633: [123.172451205, 41.2733392656],
  \u94C1\u5CAD: [123.854849615, 42.2997570121],
  \u9526\u5DDE: [121.147748738, 41.1308788759],
  \u961C\u65B0: [121.660822129, 42.0192501071],
  \u978D\u5C71: [123.007763329, 41.1187436822],
  \u91CD\u5E86: [106.530635013, 29.5446061089],
  \u54B8\u9633: [108.707509278, 34.345372996],
  \u5546\u6D1B: [109.934208154, 33.8739073951],
  \u5B89\u5EB7: [109.038044563, 32.70437045],
  \u5B9D\u9E21: [107.170645452, 34.3640808097],
  \u5EF6\u5B89: [109.500509757, 36.6033203523],
  \u6986\u6797: [109.745925744, 38.2794392401],
  \u6C49\u4E2D: [107.045477629, 33.0815689782],
  \u6E2D\u5357: [109.483932697, 34.5023579758],
  \u897F\u5B89: [108.953098279, 34.2777998978],
  \u94DC\u5DDD: [108.968067013, 34.9083676964],
  \u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE: [100.223722769, 34.4804845846],
  \u6D77\u4E1C\u5730\u533A: [102.085206987, 36.5176101677],
  \u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE: [100.879802174, 36.9606541011],
  \u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE: [100.624066094, 36.2843638038],
  \u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE: [97.3426254153, 37.3737990706],
  \u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE: [97.0133161374, 33.0062399097],
  \u897F\u5B81: [101.76792099, 36.640738612],
  \u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE: [102.007600308, 35.5228515517],
  \u4E5D\u9F99: [114.173291988, 22.3072458588],
  \u65B0\u754C: [114.146701965, 22.4274312754],
  \u9999\u6E2F\u5C9B: [114.183870524, 22.2721034276],
  \u4E03\u53F0\u6CB3: [131.019048047, 45.7750053686],
  \u4F0A\u6625: [128.910765978, 47.7346850751],
  \u4F73\u6728\u65AF: [130.284734586, 46.8137796047],
  \u53CC\u9E2D\u5C71: [131.17140174, 46.6551020625],
  \u54C8\u5C14\u6EE8: [126.657716855, 45.7732246332],
  \u5927\u5174\u5B89\u5CAD\u5730\u533A: [124.19610419, 51.991788968],
  \u5927\u5E86: [125.02183973, 46.59670902],
  \u7261\u4E39\u6C5F: [129.608035396, 44.5885211528],
  \u7EE5\u5316: [126.989094572, 46.646063927],
  \u9E21\u897F: [130.941767273, 45.3215398866],
  \u9E64\u5C97: [130.292472051, 47.3386659037],
  \u9ED1\u6CB3: [127.500830295, 50.2506900907],
  \u9F50\u9F50\u54C8\u5C14: [123.987288942, 47.3476998134]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5\u8F6C\u5316\u5750\u6807\u4FE1\u606F\u5C5E\u6027\u4E3A-echart-\u5730\u56FE\u6240\u9700\u5C5E\u6027\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8F6C\u5316\u5750\u6807\u4FE1\u606F\u5C5E\u6027\u4E3A-echart-\u5730\u56FE\u6240\u9700\u5C5E\u6027\u5DE5\u5177" aria-hidden="true">#</a> \u5C01\u88C5\u8F6C\u5316\u5750\u6807\u4FE1\u606F\u5C5E\u6027\u4E3A echart \u5730\u56FE\u6240\u9700\u5C5E\u6027\u5DE5\u5177</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// utils/convert-data.ts
import { coordinateData } from &quot;./coordinate-data&quot;

export function convertData(data: any) {
    const res = []
    for(let i = 0; i &lt; data.length; i++) {
        const geoCoord = coordinateData[data[i].name]
        if(geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="echart-\u6CE8\u518C\u5730\u56FE" tabindex="-1"><a class="header-anchor" href="#echart-\u6CE8\u518C\u5730\u56FE" aria-hidden="true">#</a> echart \u6CE8\u518C\u5730\u56FE</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// base-echart.vue
&lt;template&gt;
  &lt;div class=&quot;base-echart&quot;&gt;
    &lt;div class=&quot;echart&quot; ref=&quot;echartRef&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import * as echarts from &#39;echarts&#39;
import { onMounted, ref, watchEffect } from &#39;vue&#39;
// \u83B7\u53D6echart\u7684option\u7C7B\u578B
import type { EChartsOption } from &#39;echarts&#39;
import ChinaJSON from &#39;../data/china.json&#39;

// echart\u6CE8\u518C\u5730\u56FE
echarts.registerMap(&#39;china&#39;, ChinaJSON as any)

// \u63A5\u6536\u6BCF\u4E2Aechart\u4E0D\u540C\u914D\u7F6E
interface IProps {
    option: EChartsOption
}
const props = defineProps&lt;IProps&gt;()

// 1. \u5F15\u7528dom\u5B9E\u4F8B
const echartRef = ref&lt;HTMLElement&gt;()
onMounted(() =&gt; {
  // 2. \u57FA\u4E8E\u51C6\u5907\u597D\u7684dom\uFF0C\u521D\u59CB\u5316echart\u5B9E\u4F8B
  const echartInstance = echarts.init(echartRef.value!, &quot;light&quot;, {
    renderer: &#39;canvas&#39;
  })

  // 3.\u7B2C\u4E00\u6B21options(\u914D\u7F6E),\u52A8\u6001\u4F20\u5165\u6BCF\u4E2A\u56FE\u7684option
  // watchEffect\u76D1\u542Coption\u53D8\u5316\uFF0C\u91CD\u65B0\u6267\u884C
  watchEffect(() =&gt; echartInstance.setOption(props.option))

  // 4.\u76D1\u542Cwindow\u7F29\u653E\u5B9E\u73B0echart\u54CD\u5E94\u5F0F\u5E03\u5C40
  window.addEventListener(&#39;resize&#39;, () =&gt; {
    echartInstance.resize()
  })
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.echart {
  height: 250px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7F16\u5199-echart-\u5730\u56FE\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-echart-\u5730\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a> \u7F16\u5199 echart \u5730\u56FE\u7EC4\u4EF6</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// map-echart.vue
&lt;template&gt;
  &lt;div class=&quot;map-echart&quot;&gt;
    &lt;base-echart :option=&quot;option&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { computed } from &#39;vue&#39;
import BaseEchart from &#39;./base-echart.vue&#39;
import type { EChartsOption } from &#39;echarts&#39;
import type { IEchartValueType } from &#39;../types&#39;
import { convertData } from &#39;../utils/convert-data&#39;

const props = defineProps&lt;{
    mapData: IEchartValueType[]
}&gt;()

// \u53EA\u8D1F\u8D23\u4F20\u5165\u997C\u56FE\u7684option
const option = computed&lt;EChartsOption&gt;(() =&gt; {
  return {
    width: &#39;270px&#39;,
    height: &#39;250px&#39;,
    center: [100, 32],
    backgroundColor: &#39;#fff&#39;,
    title: {
        text: &#39;\u5168\u56FD\u9500\u91CF\u7EDF\u8BA1&#39;,
        left: &#39;center&#39;,
        textStyle: {
            color: &#39;#fff&#39;
        }
    },
    tooltip: {
        trigger: &#39;item&#39;,
        formatter: function(params: any) {
            return params.name + &#39; : &#39; + params.value[2]
        }
    },
    visualMap: {
        min: 0,
        max: 60000,
        left: 20,
        bottom: 20,
        calculable: true,
        text: [&#39;\u9AD8&#39;, &#39;\u4F4E&#39;],
        inRange: {
            color: [&#39;rgb(70, 240, 252)&#39;, &#39;rgb(250, 220, 46)&#39;, &#39;rgb(245, 38, 186)&#39;]
        },
        textStyle: {
            color: &#39;#fff&#39;
        }
    },
    geo: {
        // \u8BBE\u7F6E\u4F7F\u7528\u7684\u5730\u56FE(\u6CE8\u518C\u8FC7\u7684china\u5730\u5740)
        map: &#39;china&#39;,
        // \u652F\u6301\u9F20\u6807\u7F29\u653E\u6548\u679C
        // roam: &#39;scale&#39;,
        emphasis: {
            areaColor: &#39;#f4cccc&#39;,
            borderColor: &#39;rgb(9, 54, 95)&#39;,
            itemStyle: {
                areaColor: &#39;#f4cccc&#39;
            }
        }
    },
    series: [
        {
            name: &#39;\u9500\u91CF&#39;,
            // \u6563\u70B9\u56FE\u5728\u5730\u56FE\u4E0A\u5C55\u793A\u6570\u636E
            type: &#39;scatter&#39;,
            coordinateSystem: &#39;geo&#39;,
            data: convertData(props.mapData),
            // \u6563\u70B9\u7684\u5927\u5C0F\uFF08\u53EF\u4EE5\u6839\u636E\u6570\u636E\u4E0D\u540C\u663E\u793A\u4E0D\u540C\u7684\u5927\u5C0F\uFF0C\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF09
            symbolSize: 11,
            emphasis: {
                itemStyle: {
                    borderCap: &#39;#fff&#39;,
                    borderWidth: 1
                }
            }
        },
        {
            // \u4F1A\u81EA\u52A8\u751F\u6210geo\u5730\u7406\u5750\u6807\u7CFB\u7EDF
            type: &#39;map&#39;,
            // \u8BBE\u7F6E\u4F7F\u7528\u7684\u5730\u56FE\u540D\u79F0\uFF0C\u590D\u7528\u7684\u662F\u7B2C0\u4E2A\u5750\u6807\u7CFB\u7EDF
            map: &#39;china&#39;
        }
    ]
  }
})
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;&lt;/style&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C01\u88C5\u5730\u56FE\u5546\u54C1\u9500\u91CF\u8BF7\u6C42\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u5730\u56FE\u5546\u54C1\u9500\u91CF\u8BF7\u6C42\u6570\u636E" aria-hidden="true">#</a> \u5C01\u88C5\u5730\u56FE\u5546\u54C1\u9500\u91CF\u8BF7\u6C42\u6570\u636E</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// service/analysis.ts
// \u83B7\u53D6\u5730\u56FE\u6570\u636E
export function getGoodsAddressSale() {
    return hyRequest.get({
        url: &#39;/goods/address/sale&#39;
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { getAmountListData, getGoodsAddressSale, getGoodsCategoryCount, getGoodsCategoryFavor, getGoodsCategorySale } from &quot;@/service/main/analysis/analysis&quot;;
import { defineStore } from &quot;pinia&quot;;

interface IAnalysisState {
    // ...
    goodsAddressSale: any[]
}
const useAnalysisStore = defineStore(&#39;analysis&#39;, {
    state: (): IAnalysisState =&gt; ({
        // ....
        goodsAddressSale: []
    }),
    actions: {
        async fetchAnalysisDataAction() {
            // \u9876\u90E8\u5361\u7247\u6570\u636E...
            // \u83B7\u53D6\u997C\u56FE\u3001\u73AB\u7470\u56FE\u6570\u636E...
            // \u83B7\u53D6\u6298\u7EBF\u56FE\u6570\u636E...
            // \u83B7\u53D6\u67F1\u72B6\u56FE\u6570\u636E...

            // \u83B7\u53D6\u5730\u56FE\u6570\u636E
            const goodsAddressSaleResult = await getGoodsAddressSale()
            this.goodsAddressSale = goodsAddressSaleResult.data
            console.log(this.goodsAddressSale);
        },
    }
})

export default useAnalysisStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u7ED9\u5730\u56FE\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u7ED9\u5730\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u7ED9\u5730\u56FE\u7EC4\u4EF6</h4><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// dashboard.vue
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;!--\u9876\u90E8\u5361\u7247\u7EC4\u4EF6 --&gt;
    // ...
    &lt;el-row :gutter=&quot;10&quot;&gt;
      &lt;el-col :span=&quot;10&quot;&gt;
        &lt;chart-card&gt;
          &lt;map-echart :map-data=&quot;showGoodsAddressSale&quot;/&gt;
        &lt;/chart-card&gt;
      &lt;/el-col&gt;
    &lt;/el-row&gt;
    // ....
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import useAnalysisStore from &#39;@/store/main/analysis/analysis&#39;
// ...

// \u53D1\u8D77actions\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// \u83B7\u53D6\u6570\u636E
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } = storeToRefs(analysisStore)

// \u83B7\u53D6echart\u997C\u56FE\u6570\u636E...
// \u83B7\u53D6echart\u6298\u7EBF\u56FE\u6570\u636E...
// \u83B7\u53D6echart\u67F1\u72B6\u56FE\u6570\u636E...

// \u83B7\u53D6echart\u5730\u56FE\u6570\u636E
const showGoodsAddressSale = computed(() =&gt; {
  return goodsAddressSale.value.map((item) =&gt; ({
    name: item.address,
    value: item.count
  }))
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function X(Z,ee){const n=v("ExternalLinkIcon");return a(),t("div",null,[c,e("p",null,[u,e("a",m,[o,l(n)]),b,e("a",p,[g,l(n)]),h,q,f,y,S,x,C]),w,e("blockquote",null,[e("p",null,[e("a",k,[D,l(n)]),R])]),J,e("p",null,[I,T,A,e("a",L,[P,l(n)]),e("a",E,[M,l(n)]),V,_,z,N,F]),U,e("p",null,[j,e("a",O,[B,l(n)])]),G,e("p",null,[e("a",H,[Q,l(n)]),W,e("a",Y,[$,l(n)])]),K])}const le=d(r,[["render",X],["__file","cms.html.vue"]]);export{le as default};
