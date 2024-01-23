const e=JSON.parse('{"key":"v-1fade636","path":"/front-end/react/advanced.html","title":"\u8FDB\u9636\u77E5\u8BC6","lang":"zh-CN","frontmatter":{"summary":"\u8FDB\u9636\u77E5\u8BC6 React \u5BF9\u6570\u636E\u7BA1\u7406\u548C\u754C\u9762\u6E32\u67D3\u7684\u6D41\u7A0B\u89E3\u6790 \u5F53\u6570\u636E\u9700\u8981\u53D1\u9001\u53D8\u5316\u65F6\uFF0C\u901A\u8FC7\u8C03\u7528\u7EC4\u4EF6\u7684setState\u65B9\u6CD5\u6765\u66F4\u65B0\u72B6\u6001\uFF08\u65E0\u6570\u636E\u52AB\u6301\uFF09\u3002\u8FD9\u4F1A\u89E6\u53D1render\u51FD\u6570\u91CD\u65B0\u6E32\u67D3\u6D41\u7A0B\u3002\u5F53\u6570\u636E\u6CA1\u6709\u53D8\u5316\u65F6\uFF0C\u53EA\u8981\u8C03\u7528\u4E86setState\u65B9\u6CD5\u4E5F\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u53EF\u5728shouldComponentUpdate\u548CPureComponent\u4E2D\u5224\u65AD\u662F\u5426\u6570\u636E\u6CA1\u6709\u53D8\u5316\u65F6\u91CD\u65B0\u6E32\u67D3\u3002 \u5982\u679C\u76F4\u63A5\u4FEE\u6539s","head":[["meta",{"property":"og:url","content":"https://github.com/xumingyu2018/front-end/react/advanced.html"}],["meta",{"property":"og:site_name","content":"Nevermore\u6BD3 \u7684\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u8FDB\u9636\u77E5\u8BC6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-01-23T07:20:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2024-01-23T07:20:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"React \u5BF9\u6570\u636E\u7BA1\u7406\u548C\u754C\u9762\u6E32\u67D3\u7684\u6D41\u7A0B\u89E3\u6790","slug":"react-\u5BF9\u6570\u636E\u7BA1\u7406\u548C\u754C\u9762\u6E32\u67D3\u7684\u6D41\u7A0B\u89E3\u6790","link":"#react-\u5BF9\u6570\u636E\u7BA1\u7406\u548C\u754C\u9762\u6E32\u67D3\u7684\u6D41\u7A0B\u89E3\u6790","children":[]},{"level":2,"title":"setState \u7684\u8FDB\u9636\u77E5\u8BC6","slug":"setstate-\u7684\u8FDB\u9636\u77E5\u8BC6","link":"#setstate-\u7684\u8FDB\u9636\u77E5\u8BC6","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48\u5728 react18 \u4E4B\u540E\uFF0CsetState \u8981\u8BBE\u8BA1\u6210\u5F02\u6B65\u8C03\u7528","slug":"\u4E3A\u4EC0\u4E48\u5728-react18-\u4E4B\u540E-setstate-\u8981\u8BBE\u8BA1\u6210\u5F02\u6B65\u8C03\u7528","link":"#\u4E3A\u4EC0\u4E48\u5728-react18-\u4E4B\u540E-setstate-\u8981\u8BBE\u8BA1\u6210\u5F02\u6B65\u8C03\u7528","children":[]},{"level":3,"title":"React18 \u4E4B\u524D\uFF0C\u5728setTimeout\u3001Promise\u6216\u8005\u539F\u751Fdom\u4E8B\u4EF6\u4E2D\uFF0CsetState\u662F\u540C\u6B65\u7684","slug":"react18-\u4E4B\u524D-\u5728settimeout\u3001promise\u6216\u8005\u539F\u751Fdom\u4E8B\u4EF6\u4E2D-setstate\u662F\u540C\u6B65\u7684","link":"#react18-\u4E4B\u524D-\u5728settimeout\u3001promise\u6216\u8005\u539F\u751Fdom\u4E8B\u4EF6\u4E2D-setstate\u662F\u540C\u6B65\u7684","children":[]},{"level":3,"title":"React \u66F4\u65B0\u673A\u5236","slug":"react-\u66F4\u65B0\u673A\u5236","link":"#react-\u66F4\u65B0\u673A\u5236","children":[]},{"level":3,"title":"\u7EC4\u4EF6\u6E32\u67D3\u6027\u80FD\u4F18\u5316","slug":"\u7EC4\u4EF6\u6E32\u67D3\u6027\u80FD\u4F18\u5316","link":"#\u7EC4\u4EF6\u6E32\u67D3\u6027\u80FD\u4F18\u5316","children":[]},{"level":3,"title":"Ref \u83B7\u53D6\u539F\u751F Dom \u7684\u65B9\u5F0F","slug":"ref-\u83B7\u53D6\u539F\u751F-dom-\u7684\u65B9\u5F0F","link":"#ref-\u83B7\u53D6\u539F\u751F-dom-\u7684\u65B9\u5F0F","children":[]}]},{"level":2,"title":"\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6","slug":"\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6","link":"#\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6","children":[{"level":3,"title":"\u53D7\u63A7\u7EC4\u4EF6","slug":"\u53D7\u63A7\u7EC4\u4EF6","link":"#\u53D7\u63A7\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u975E\u53D7\u63A7\u7EC4\u4EF6","slug":"\u975E\u53D7\u63A7\u7EC4\u4EF6","link":"#\u975E\u53D7\u63A7\u7EC4\u4EF6","children":[]}]},{"level":2,"title":"\u9AD8\u9636\u7EC4\u4EF6","slug":"\u9AD8\u9636\u7EC4\u4EF6","link":"#\u9AD8\u9636\u7EC4\u4EF6","children":[{"level":3,"title":"\u4F7F\u7528\u6A21\u7248","slug":"\u4F7F\u7528\u6A21\u7248","link":"#\u4F7F\u7528\u6A21\u7248","children":[]},{"level":3,"title":"\u5E94\u7528\u573A\u666F","slug":"\u5E94\u7528\u573A\u666F","link":"#\u5E94\u7528\u573A\u666F","children":[]}]},{"level":2,"title":"Portals \u7684\u4F7F\u7528","slug":"portals-\u7684\u4F7F\u7528","link":"#portals-\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"Fragment \u7684\u4F7F\u7528","slug":"fragment-\u7684\u4F7F\u7528","link":"#fragment-\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"StrictMode \u4E25\u683C\u6A21\u5F0F\u7684\u4F7F\u7528","slug":"strictmode-\u4E25\u683C\u6A21\u5F0F\u7684\u4F7F\u7528","link":"#strictmode-\u4E25\u683C\u6A21\u5F0F\u7684\u4F7F\u7528","children":[]}],"git":{"createdTime":1705994436000,"updatedTime":1705994436000,"contributors":[{"name":"xumingyu2018","email":"260602448@qq.com","commits":1}]},"readingTime":{"minutes":16.2,"words":4859},"filePathRelative":"front-end/react/advanced.md","localizedDate":"2024\u5E741\u670823\u65E5"}');export{e as data};
