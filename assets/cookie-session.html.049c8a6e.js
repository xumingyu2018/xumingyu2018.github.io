import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,a as e,d as o,e as i,b as n,r as c}from"./app.36238a74.js";const r={},l=i('<p>HTTP \u662F\u65E0\u72B6\u6001\u7684\u534F\u8BAE\uFF0C\u65E0\u6CD5\u8BB0\u5F55\u5386\u53F2\u72B6\u6001\uFF0C\u670D\u52A1\u7AEF\u65E0\u6CD5\u786E\u8BA4\u5F53\u524D\u8BBF\u95EE\u8005\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u65E0\u6CD5\u5206\u8FA8\u4E0A\u4E00\u6B21\u7684\u8BF7\u6C42\u53D1\u9001\u8005\u548C\u8FD9\u4E00\u6B21\u7684\u53D1\u9001\u8005\u662F\u4E0D\u662F\u540C\u4E00\u4E2A\u4EBA\u3002<code>Cookie</code> \u548C <code>Session</code> \u662F\u5E38\u7528\u7684\u4F1A\u8BDD\u8DDF\u8E2A\u6280\u672F\u3002</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u9996\u6B21\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u5305\u542B <code>Set-Cookie</code> \u5934\u90E8\u7684\u54CD\u5E94\u901A\u77E5\u5BA2\u6237\u7AEF\u4FDD\u5B58 <code>Cookie</code>\u3002\u5728\u540E\u7EED\u7684\u8BF7\u6C42\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u6BCF\u6B21\u90FD\u5728\u8BF7\u6C42\u5934\u643A\u5E26\u4E0A <code>Cookie</code> \u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u3002</p><p>\u7F3A\u70B9\uFF1A\u4E0D\u5B89\u5168\uFF0C\u5B58\u50A8\u91CF\u5C0F</p><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h2><ol><li>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u9996\u6B21\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u4F1A\u521B\u5EFA\u4E00\u4E2A<code>Session</code> \u4FDD\u5B58\u5BA2\u6237\u7AEF\u4FE1\u606F\uFF0C\u540C\u65F6\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u7684 <code>SessionID</code>\uFF0C\u5E76\u4FDD\u5B58\u5728\u670D\u52A1\u7AEF\uFF0C\u518D\u8FD4\u56DE\u5305\u542B <code>SessionID</code> \u7684\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u6536\u5230\u540E\uFF0C\u5C06 <code>SessionID</code> \u5B58\u5165 <code>Cookie</code> \u4E2D\u3002</li><li>\u5728\u540E\u7EED\u7684\u8BF7\u6C42\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u6BCF\u6B21\u90FD\u5728\u8BF7\u6C42\u5934\u643A\u5E26\u8BB0\u5F55\u6709 <code>SessionID</code> \u7684 <code>Cookie</code> \u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u6839\u636E <code>SessionID</code> \u5339\u914D\u5BF9\u5E94\u7684 <code>Session</code> \u83B7\u53D6\u5BA2\u6237\u7AEF\u72B6\u6001\u3002</li></ol><p>\u5982\u679C\u6D4F\u89C8\u5668\u7981\u7528\u4E86 <code>Cookie</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5C06 <code>SessionID</code> \u5199\u5165 URL \u7684\u65B9\u5F0F\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u3002</p><img class="medium-img" src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220516022111.png"><p>\u7F3A\u70B9\uFF1A\u670D\u52A1\u5668\u5185\u5B58\u6D88\u8017\u5927</p><h2 id="cookie-\u4E0E-session-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#cookie-\u4E0E-session-\u533A\u522B" aria-hidden="true">#</a> Cookie \u4E0E Session \u533A\u522B</h2><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\u5B58\u50A8\u5BB9\u91CF</th><th style="text-align:center;">\u751F\u547D\u5468\u671F</th><th style="text-align:center;">\u5B58\u50A8\u4F4D\u7F6E</th><th style="text-align:center;">\u5B89\u5168\u6027</th></tr></thead><tbody><tr><td style="text-align:center;">Cookie</td><td style="text-align:center;">4KB</td><td style="text-align:center;">\u65E0\u8FC7\u671F\u65F6\u95F4\uFF1A\u5173\u95ED\u6D4F\u89C8\u5668\u540E\u88AB\u6E05\u9664<br>\u6709\u8FC7\u671F\u65F6\u95F4\uFF1A\u5728\u8FC7\u671F\u65F6\u95F4\u540E\u5931\u6548</td><td style="text-align:center;">\u5BA2\u6237\u7AEF</td><td style="text-align:center;">\u4F4E</td></tr><tr><td style="text-align:center;">Session</td><td style="text-align:center;">5MB</td><td style="text-align:center;">\u5173\u95ED\u9875\u9762\u6216\u6D4F\u89C8\u5668\u5931\u6548</td><td style="text-align:center;">\u670D\u52A1\u7AEF</td><td style="text-align:center;">\u9AD8</td></tr></tbody></table><p>\u6BD4\u55BB\uFF1A</p><ul><li>Session \u50CF\u7528\u6237\u6863\u6848\u8868\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u7528\u6237\u7684\u8BA4\u8BC1\u4FE1\u606F\u548C\u767B\u5F55\u72B6\u6001\u7B49\u4FE1\u606F\uFF0C\u4FDD\u5B58\u5728\u670D\u52A1\u7AEF\u3002</li><li>Cookie \u50CF\u7528\u6237\u901A\u884C\u8BC1\uFF0C\u4FDD\u5B58\u5728\u5BA2\u6237\u7AEF\u3002</li></ul><h2 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> LocalStorage</h2><p><code>LocalStorage</code> \u662F HTML5 \u65B0\u589E\u7684\u5B58\u50A8\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u672C\u5730\u957F\u4E45\u4FDD\u5B58\u6570\u636E\u3002</p><h2 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> SessionStorage</h2><p><code>SessionStorage</code> \u662F HTML5 \u65B0\u589E\u7684\u5B58\u50A8\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u672C\u5730\u4E34\u65F6\u4FDD\u5B58\u6570\u636E\u3002</p><p>\u6253\u5F00\u591A\u4E2A\u76F8\u540C\u7684 URL \u7684\u6807\u7B7E\u9875\uFF0C\u4F1A\u521B\u5EFA\u5404\u81EA\u7684 <code>SessionStorage</code></p><h2 id="cookie\u3001localstorage-\u4E0E-sessionstorage-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#cookie\u3001localstorage-\u4E0E-sessionstorage-\u7684\u533A\u522B" aria-hidden="true">#</a> Cookie\u3001LocalStorage \u4E0E SessionStorage \u7684\u533A\u522B</h2><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\u5B58\u50A8\u5BB9\u91CF</th><th style="text-align:center;">\u751F\u547D\u5468\u671F</th><th style="text-align:center;">\u5B58\u50A8\u4F4D\u7F6E</th></tr></thead><tbody><tr><td style="text-align:center;">Cookie</td><td style="text-align:center;">4KB</td><td style="text-align:center;">\u65E0\u8FC7\u671F\u65F6\u95F4\uFF1A\u5173\u95ED\u6D4F\u89C8\u5668\u540E\u88AB\u6E05\u9664<br>\u6709\u8FC7\u671F\u65F6\u95F4\uFF1A\u5728\u8FC7\u671F\u65F6\u95F4\u540E\u5931\u6548</td><td style="text-align:center;">\u5BA2\u6237\u7AEF\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u643A\u5E26</td></tr><tr><td style="text-align:center;">LocalStorage</td><td style="text-align:center;">5MB\uFF08\u89C6\u6D4F\u89C8\u5668\u800C\u5B9A\uFF09</td><td style="text-align:center;">\u4E0D\u4F1A\u81EA\u52A8\u8FC7\u671F\uFF0C\u9664\u975E\u7528\u6237\u624B\u52A8\u6E05\u9664</td><td style="text-align:center;">\u5BA2\u6237\u7AEF</td></tr><tr><td style="text-align:center;">SessionStorage</td><td style="text-align:center;">5MB</td><td style="text-align:center;">\u4EC5\u5728\u5F53\u524D\u7F51\u9875\u4F1A\u8BDD\u4E0B\u6709\u6548\uFF0C\u5173\u95ED\u9875\u9762\u6216\u6D4F\u89C8\u5668\u540E\u4F1A\u88AB\u6E05\u9664</td><td style="text-align:center;">\u5BA2\u6237\u7AEF</td></tr></tbody></table><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h2><p>JWT(JSON Web Token) \u4E00\u79CD\u57FA\u4E8E <code>token</code> \u7684\u8DE8\u57DF\u8BA4\u8BC1\u65B9\u6848</p><ol><li>\u5BA2\u6237\u7AEF\u643A\u5E26\u7528\u6237\u7684\u767B\u5F55\u51ED\u8BC1\uFF08\u4E00\u822C\u4E3A\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF09\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u9996\u6B21\u8BF7\u6C42</li><li>\u670D\u52A1\u7AEF\u67E5\u8BE2\u6570\u636E\u5E93\u9A8C\u8BC1\u7528\u6237\u6709\u6548\u6027\uFF0C\u5982\u679C\u6709\u6548\u4F1A\u6839\u636E\u50A8\u5B58\u5728\u670D\u52A1\u7AEF\u79D8\u94A5\u5BF9\u767B\u5F55\u51ED\u8BC1\u8FDB\u884C\u7B7E\u540D\u751F\u6210 <code>token</code>\uFF0C\u5E76\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</li><li>\u5BA2\u6237\u7AEF\u6536\u5230 <code>token</code> \u4FE1\u606F\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u5728<code>cookie</code>\u6216\u8005 <code>localStorage</code></li><li>\u540E\u7EED\u8BF7\u6C42\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u90FD\u5728\u8BF7\u6C42\u5934\u7684 <code>Authorization</code> \u5B57\u6BB5\u5199\u4E0A<code>token</code>\u4FE1\u606F\uFF0C\u670D\u52A1\u7AEF\u518D\u5BF9 <code>token</code> \u89E3\u5BC6\u53D6\u5F97\u7528\u6237\u767B\u5F55\u51ED\u8BC1\uFF0C\u6839\u636E\u767B\u5F55\u51ED\u8BC1\u518D\u53BB\u6570\u636E\u5E93\u4E2D\u5BF9\u76F8\u5E94\u7684\u7528\u6237\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\u3002</li></ol><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',24),h={href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"},g=n("JSON Web Token \u5165\u95E8\u6559\u7A0B"),x={href:"https://segmentfault.com/a/1190000017831088",target:"_blank",rel:"noopener noreferrer"},k=n("\u5F7B\u5E95\u5F04\u61C2session\uFF0Ccookie\uFF0Ctoken");function y(p,S){const t=c("ExternalLinkIcon");return d(),s("div",null,[l,e("ul",null,[e("li",null,[e("a",h,[g,o(t)])]),e("li",null,[e("a",x,[k,o(t)])])])])}const b=a(r,[["render",y],["__file","cookie-session.html.vue"]]);export{b as default};
