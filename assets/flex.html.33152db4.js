import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as a,a as e,d as l,e as n,b as i,r}from"./app.fa9421e3.js";const d={},s=n('<p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220424174635.png" alt=""></p><p>\u5BB9\u5668\u5373\u7236\u5143\u7D20\uFF0C\u9879\u76EE\u5373\u5B50\u5143\u7D20</p><h2 id="flex-container\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#flex-container\u5BB9\u5668" aria-hidden="true">#</a> Flex container\u5BB9\u5668</h2><p><code>display: flex | inline-flex;</code> \u5206\u522B\u751F\u6210\u4E00\u4E2A\u5757\u72B6\u6216\u884C\u5185\u7684 flex \u5BB9\u5668\u76D2\u5B50\u3002\u7B80\u5355\u8BF4\u6765\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u5757\u5143\u7D20\u5982 div\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528 flex\uFF0C\u800C\u5982\u679C\u4F60\u4F7F\u7528\u884C\u5185\u5143\u7D20\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 inline-flex\u3002</p><p>\u6709\u4E0B\u9762\u516D\u79CD\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5728\u5BB9\u5668\u4E0A\uFF1A</p><ol><li><code>flex-direction</code> \u4E3B\u8F74\u7684\u65B9\u5411 \uFF08\u9ED8\u8BA4\uFF1Arow \u6C34\u5E73\uFF09</li><li><code>flex-wrap</code> \u5BB9\u5668\u5185\u9879\u76EE\u662F\u5426\u53EF\u6362\u884C (\u9ED8\u8BA4\uFF1Anowrap \u4E0D\u6362\u884C \u5E38\u7528\uFF1Awrap)</li><li><code>flex-flow</code> flex-direction \u548C flex-wrap \u7684\u7B80\u5199\u5F62\u5F0F \uFF08\u6CA1\u7528\uFF09</li><li><code>justify-content</code> \u9879\u76EE\u5728\u4E3B\u8F74\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\uFF08\u9ED8\u8BA4: flex-start \u5DE6\u5BF9\u9F50\uFF09</li></ol><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119183329.png" alt="justify-content\u5C5E\u6027"></p><ol start="5"><li><code>align-items</code> \u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF08\u9ED8\u8BA4\uFF1Astretch \u5373\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8005\u8BBE\u4E3A auto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002\uFF09</li></ol><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119185222.png" alt="align-items\u5C5E\u6027"></p><ol start="6"><li><code>align-content</code> \u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u5373<code>flex-wrap: nowrap</code> \u4E0D\u6362\u884C\uFF0C\u90A3\u4E48\u8BE5\u5C5E\u6027\u5C06\u4E0D\u8D77\u4F5C\u7528\uFF08\u9ED8\u8BA4\u503C\u4E3A stretch\uFF09</li></ol><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119190026.png" alt="align-content\u5C5E\u6027"></p><h2 id="flex-item\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#flex-item\u9879\u76EE" aria-hidden="true">#</a> Flex item\u9879\u76EE</h2><p>\u6709\u4E0B\u9762\u516D\u79CD\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5728\u9879\u76EE\u4E0A\uFF1A</p><ol><li><code>order</code> \u9879\u76EE\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u6570\u503C\u8D8A\u5C0F\uFF0C\u6392\u5217\u8D8A\u9760\u524D\uFF08\u9ED8\u8BA4\u503C\u4E3A 0\uFF09</li><li><code>flex-basis</code> \u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u5360\u636E\u7684\u7A7A\u95F4\uFF08\u9ED8\u8BA4\u503C\uFF1Aauto\uFF0C\u5373\u9879\u76EE\u672C\u6765\u7684\u5927\u5C0F\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E weight\u3001height\uFF09</li><li><code>flex-grow</code> \u9879\u76EE\u7684\u653E\u5927\u62C9\u4F38\u6BD4\u4F8B\uFF08\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u5373\u5982\u679C\u5B58\u5728\u591A\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927\uFF09 <ul><li>\u5982\u679C\u6240\u6709\u9879\u76EE\u7684<code>flex-grow</code>\u5C5E\u6027\u90FD\u4E3A 1\uFF0C\u5219\u5B83\u4EEC\u5C06\u7B49\u5206\u5269\u4F59\u7A7A\u95F4\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3002</li><li>\u5F53flex container\u5728\u4E3B\u8F74\u65B9\u5411\u4E0A\u6709\u5269\u4F59size\u65F6\uFF0C\u624D\u751F\u6548\u3002</li></ul></li><li><code>flex-shrink</code> \u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF08\u9ED8\u8BA4\u503C: 1\uFF0C\u5373\u5982\u679C\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BE5\u9879\u76EE\u5C06\u7F29\u5C0F\uFF0C\u8D1F\u503C\u5BF9\u8BE5\u5C5E\u6027\u65E0\u6548\uFF09</li><li><code>flex</code> flex-grow, flex-shrink \u548C flex-basis\u7684\u7B80\u5199\uFF08\u9ED8\u8BA4\u503C\u662F 0 1 auto\uFF09 \u6709\u5173\u5FEB\u6377\u503C\uFF1A<code>auto (1 1 auto)</code> \u3001 <code>none (0 0 auto)</code> \u3001<code>1</code> \u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u5199\u4E09\u4E2A\u5206\u79BB\u7684\u5C5E\u6027\u3002</li><li><code>align-self</code> \u5355\u4E2A\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u7684\u5BF9\u9F50\u65B9\u5F0F (center\u3001flex-end)</li></ol><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20230119205617.png" alt="align-self\u5C5E\u6027"></p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',16),p={href:"https://zhuanlan.zhihu.com/p/25303493",target:"_blank",rel:"noopener noreferrer"},h=i("30 \u5206\u949F\u5B66\u4F1A Flex \u5E03\u5C40"),f={href:"https://www.bilibili.com/video/BV1oK4y1j7pa?p=1&share_medium=iphone&share_plat=ios&share_source=COPY&share_tag=s_i&timestamp=1610808415&unique_k=jqCDwC",target:"_blank",rel:"noopener noreferrer"},u=i("20\u5206\u949F\u638C\u63E1CSS Flex\u5E03\u5C40");function m(x,g){const o=r("ExternalLinkIcon");return t(),a("div",null,[s,e("ul",null,[e("li",null,[e("a",p,[h,l(o)])]),e("li",null,[e("a",f,[u,l(o)])])])])}const b=c(d,[["render",m],["__file","flex.html.vue"]]);export{b as default};