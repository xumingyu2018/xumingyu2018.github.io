const e=JSON.parse('{"key":"v-07c170b2","path":"/front-end/vue/vue2-basic.html","title":"Vue2\u57FA\u7840","lang":"zh-CN","frontmatter":{"title":"Vue2\u57FA\u7840","category":["Vue2"],"summary":"\u6982\u5FF5 MVVM\u601D\u60F3 M\uFF1Amodel\u5305\u62EC\u6570\u636E\u548C\u4E00\u4E9B\u57FA\u672C\u64CD\u4F5C; V\uFF1Aview\u89C6\u56FE\uFF0C\u9875\u9762\u6E32\u67D3\u7ED3\u679C; VM\uFF1AView-model,\u6A21\u578B\u4E0E\u89C6\u56FE\u95F4\u7684\u53CC\u5411\u64CD\u4F5C\uFF08\u65E0\u9700\u5F00\u53D1\u4EBA\u5458\u5E72\u6D89\uFF09; \u89C6\u56FE\u548C\u6570\u636E\u901A\u8FC7VM\u7ED1\u5B9A\u8D77\u6765\uFF0Cmodel\u91CC\u6709\u53D8\u5316\u4F1A\u81EA\u52A8\u5730\u901A\u8FC7Directives\u586B\u5199\u5230\u89C6view\u4E2D\uFF0C\u89C6\u56FE\u8868\u5355\u4E2D\u6DFB\u52A0\u4E86\u5185\u5BB9\u4E5F\u4F1A\u81EA\u52A8\u5730\u901A\u8FC7DOM Listeners\u4FDD\u5B58\u5230\u6A21\u578B\u4E2D\u3002; \u57FA\u672C\u8BED\u6CD5\u53CA\u8BED\u6CD5\u7CD6","head":[["meta",{"property":"og:url","content":"https://github.com/xumingyu2018/front-end/vue/vue2-basic.html"}],["meta",{"property":"og:site_name","content":"Nevermore\u6BD3 \u7684\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Vue2\u57FA\u7840"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-07T09:14:42.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-05-07T09:14:42.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5","link":"#\u6982\u5FF5","children":[]},{"level":2,"title":"\u57FA\u672C\u8BED\u6CD5\u53CA\u8BED\u6CD5\u7CD6\u5199\u6CD5","slug":"\u57FA\u672C\u8BED\u6CD5\u53CA\u8BED\u6CD5\u7CD6\u5199\u6CD5","link":"#\u57FA\u672C\u8BED\u6CD5\u53CA\u8BED\u6CD5\u7CD6\u5199\u6CD5","children":[]},{"level":2,"title":"computed\u548Cmethods\u533A\u522B","slug":"computed\u548Cmethods\u533A\u522B","link":"#computed\u548Cmethods\u533A\u522B","children":[]},{"level":2,"title":"v-if\u548Cv-show\u533A\u522B","slug":"v-if\u548Cv-show\u533A\u522B","link":"#v-if\u548Cv-show\u533A\u522B","children":[]},{"level":2,"title":"v-for\u4F7F\u7528\u8FC7\u7A0B\u6DFB\u52A0key\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\uFF08\u7C7B\u4F3CDiff\u7B97\u6CD5\uFF09","slug":"v-for\u4F7F\u7528\u8FC7\u7A0B\u6DFB\u52A0key\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD-\u7C7B\u4F3Cdiff\u7B97\u6CD5","link":"#v-for\u4F7F\u7528\u8FC7\u7A0B\u6DFB\u52A0key\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD-\u7C7B\u4F3Cdiff\u7B97\u6CD5","children":[]},{"level":2,"title":"\u6570\u7EC4\u7684\u51E0\u4E2A\u54CD\u5E94\u5F0F\u65B9\u6CD5","slug":"\u6570\u7EC4\u7684\u51E0\u4E2A\u54CD\u5E94\u5F0F\u65B9\u6CD5","link":"#\u6570\u7EC4\u7684\u51E0\u4E2A\u54CD\u5E94\u5F0F\u65B9\u6CD5","children":[]},{"level":2,"title":"Watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"\u6848\u4F8B\u8865\u5145","slug":"\u6848\u4F8B\u8865\u5145","link":"#\u6848\u4F8B\u8865\u5145","children":[{"level":3,"title":"vue\u58F0\u660E\u5F0F\u6E32\u67D3","slug":"vue\u58F0\u660E\u5F0F\u6E32\u67D3","link":"#vue\u58F0\u660E\u5F0F\u6E32\u67D3","children":[]},{"level":3,"title":"v-text\u3001v-html.html","slug":"v-text\u3001v-html-html","link":"#v-text\u3001v-html-html","children":[]},{"level":3,"title":"\u5355\u5411\u7ED1\u5B9Av-bind","slug":"\u5355\u5411\u7ED1\u5B9Av-bind","link":"#\u5355\u5411\u7ED1\u5B9Av-bind","children":[]},{"level":3,"title":"\u53CC\u5411\u7ED1\u5B9Av-model","slug":"\u53CC\u5411\u7ED1\u5B9Av-model","link":"#\u53CC\u5411\u7ED1\u5B9Av-model","children":[]},{"level":3,"title":"\u4E8B\u4EF6\u7ED1\u5B9Av-on","slug":"\u4E8B\u4EF6\u7ED1\u5B9Av-on","link":"#\u4E8B\u4EF6\u7ED1\u5B9Av-on","children":[]},{"level":3,"title":"\u5FAA\u73AF\u904D\u5386v-for","slug":"\u5FAA\u73AF\u904D\u5386v-for","link":"#\u5FAA\u73AF\u904D\u5386v-for","children":[]},{"level":3,"title":"v-if\u548Cv-show","slug":"v-if\u548Cv-show","link":"#v-if\u548Cv-show","children":[]},{"level":3,"title":"v-else\u548Cv-else-if","slug":"v-else\u548Cv-else-if","link":"#v-else\u548Cv-else-if","children":[]},{"level":3,"title":"\u8BA1\u7B97\u5C5E\u6027computed\u548C\u76D1\u542C\u5668watch","slug":"\u8BA1\u7B97\u5C5E\u6027computed\u548C\u76D1\u542C\u5668watch","link":"#\u8BA1\u7B97\u5C5E\u6027computed\u548C\u76D1\u542C\u5668watch","children":[]},{"level":3,"title":"\u8FC7\u6EE4\u5668","slug":"\u8FC7\u6EE4\u5668","link":"#\u8FC7\u6EE4\u5668","children":[]},{"level":3,"title":"\u7EC4\u4EF6\u5316\uFF08\u76F8\u5F53\u4E8E\u5C01\u88C5\u51FD\u6570\uFF09","slug":"\u7EC4\u4EF6\u5316-\u76F8\u5F53\u4E8E\u5C01\u88C5\u51FD\u6570","link":"#\u7EC4\u4EF6\u5316-\u76F8\u5F53\u4E8E\u5C01\u88C5\u51FD\u6570","children":[]},{"level":3,"title":"\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570","slug":"\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570","link":"#\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570","children":[]}]}],"git":{"createdTime":1683450851000,"updatedTime":1683450882000,"contributors":[{"name":"Nevermore","email":"xmy981022@163.com","commits":2}]},"readingTime":{"minutes":12.77,"words":3831},"filePathRelative":"front-end/vue/vue2-basic.md","localizedDate":"2023\u5E745\u67087\u65E5"}');export{e as data};
