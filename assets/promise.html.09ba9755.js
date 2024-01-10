const e=JSON.parse('{"key":"v-345d7162","path":"/front-end/javascript/promise.html","title":"Promise","lang":"zh-CN","frontmatter":{"title":"Promise","summary":"\u5F02\u6B65\u7F16\u7A0B \u56E0\u4E3A JS \u662F\u5355\u7EBF\u7A0B\u8BED\u8A00\uFF0C\u540C\u6B65\u4F1A\u963B\u585E\u4EE3\u7801\u6267\u884C\uFF0C\u7F51\u9875\u52A0\u8F7D\u9700\u8981\u7B49\u5F85\uFF0C\u5F02\u6B65\u4E0D\u4F1A\u963B\u585E\u4EE3\u7801\u6267\u884C JS \u91C7\u7528\u5355\u7EBF\u7A0B\u7684\u4E8B\u4EF6\u5FAA\u73AF\u65B9\u5F0F\u7BA1\u7406\u5F02\u6B65\u4EFB\u52A1\uFF0C\u4F18\u70B9\u662F\u7B80\u5316\u7F16\u7A0B\u6A21\u578B\uFF0C\u7F3A\u70B9\u662F\u65E0\u6CD5\u53D1\u6325 CPU \u7684\u5168\u90E8\u6027\u80FD\uFF08\u4F46\u524D\u7AEF\u76EE\u524D\u4E0D\u9700\u8981\u592A\u9AD8\u6027\u80FD\uFF09 \u540C\u6B65\uFF1A\u4E00\u5B9A\u8981\u7B49\u4EFB\u52A1\u6267\u884C\u5B8C\u4E86\uFF0C\u5F97\u5230\u7ED3\u679C\uFF0C\u624D\u6267\u884C\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u3002\u4F1A\u6709\u963B\u585E \u5F02\u6B65\uFF1A\u4E0D\u7B49\u4EFB\u52A1\u6267\u884C\u5B8C\uFF0C\u76F4\u63A5\u6267\u884C\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u3002\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u518D\u901A\u77E5\u7A0B\u5E8F\u5458\u4EFB\u52A1","head":[["meta",{"property":"og:url","content":"https://github.com/xumingyu2018/front-end/javascript/promise.html"}],["meta",{"property":"og:site_name","content":"Nevermore\u6BD3 \u7684\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Promise"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T13:22:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T13:22:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u5F02\u6B65\u7F16\u7A0B","slug":"\u5F02\u6B65\u7F16\u7A0B","link":"#\u5F02\u6B65\u7F16\u7A0B","children":[{"level":3,"title":"\u4EC0\u4E48\u662F\u56DE\u8C03","slug":"\u4EC0\u4E48\u662F\u56DE\u8C03","link":"#\u4EC0\u4E48\u662F\u56DE\u8C03","children":[]},{"level":3,"title":"\u4EC0\u4E48\u662F\u56DE\u8C03\u5730\u72F1","slug":"\u4EC0\u4E48\u662F\u56DE\u8C03\u5730\u72F1","link":"#\u4EC0\u4E48\u662F\u56DE\u8C03\u5730\u72F1","children":[]}]},{"level":2,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0","link":"#\u6982\u8FF0","children":[]},{"level":2,"title":"Promise \u5BF9\u8C61\u65B9\u6CD5","slug":"promise-\u5BF9\u8C61\u65B9\u6CD5","link":"#promise-\u5BF9\u8C61\u65B9\u6CD5","children":[{"level":3,"title":"then","slug":"then","link":"#then","children":[]},{"level":3,"title":"catch","slug":"catch","link":"#catch","children":[]},{"level":3,"title":"finally","slug":"finally","link":"#finally","children":[]}]},{"level":2,"title":"Promise \u7C7B\u65B9\u6CD5","slug":"promise-\u7C7B\u65B9\u6CD5","link":"#promise-\u7C7B\u65B9\u6CD5","children":[]},{"level":2,"title":"resolve","slug":"resolve","link":"#resolve","children":[{"level":3,"title":"resolve \u7684\u4E09\u79CD\u53C2\u6570","slug":"resolve-\u7684\u4E09\u79CD\u53C2\u6570","link":"#resolve-\u7684\u4E09\u79CD\u53C2\u6570","children":[]}]},{"level":2,"title":"reject","slug":"reject","link":"#reject","children":[{"level":3,"title":"reject \u53C2\u6570\u4E0D\u53D7\u5F71\u54CD","slug":"reject-\u53C2\u6570\u4E0D\u53D7\u5F71\u54CD","link":"#reject-\u53C2\u6570\u4E0D\u53D7\u5F71\u54CD","children":[]}]},{"level":2,"title":"all","slug":"all","link":"#all","children":[]},{"level":2,"title":"allSettled","slug":"allsettled","link":"#allsettled","children":[]},{"level":2,"title":"race","slug":"race","link":"#race","children":[]},{"level":2,"title":"any","slug":"any","link":"#any","children":[]},{"level":2,"title":"Promise \u52A0\u8F7D\u56FE\u7247","slug":"promise-\u52A0\u8F7D\u56FE\u7247","link":"#promise-\u52A0\u8F7D\u56FE\u7247","children":[]},{"level":2,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}],"git":{"createdTime":1662729760000,"updatedTime":1662729760000,"contributors":[{"name":"Nevermore","email":"xmy981022@163.com","commits":1}]},"readingTime":{"minutes":10.42,"words":3127},"filePathRelative":"front-end/javascript/promise.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};