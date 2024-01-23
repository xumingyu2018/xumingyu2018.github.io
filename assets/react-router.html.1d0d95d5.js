const e=JSON.parse('{"key":"v-82daf6be","path":"/front-end/react/react-router.html","title":"React-Router","lang":"zh-CN","frontmatter":{"summary":"React-Router \u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\u5462\uFF1F \u6539\u53D8 URL\uFF0C\u4F46\u662F\u9875\u9762\u4E0D\u8FDB\u884C\u6574\u4F53\u7684\u5237\u65B0 \u662F\u4EC0\u4E48 react-router\u4E3B\u8981\u5206\u6210\u4E86\u51E0\u4E2A\u4E0D\u540C\u7684\u5305\uFF1A react-router: \u5B9E\u73B0\u4E86\u8DEF\u7531\u7684\u6838\u5FC3\u529F\u80FD; react-router-dom\uFF1A \u57FA\u4E8E react-router\uFF0C\u52A0\u5165\u4E86\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u73AF\u5883\u4E0B\u7684\u4E00\u4E9B\u529F\u80FD; react-router-native\uFF1A\u57FA\u4E8E rea","head":[["meta",{"property":"og:url","content":"https://github.com/xumingyu2018/front-end/react/react-router.html"}],["meta",{"property":"og:site_name","content":"Nevermore\u6BD3 \u7684\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"React-Router"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-01-23T07:20:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2024-01-23T07:20:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\u5462\uFF1F","slug":"\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\u5462","link":"#\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\u5462","children":[]},{"level":2,"title":"\u662F\u4EC0\u4E48","slug":"\u662F\u4EC0\u4E48","link":"#\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u5E38\u7528 API","slug":"\u5E38\u7528-api","link":"#\u5E38\u7528-api","children":[{"level":3,"title":"BrowserRouter\u548CHashRouter","slug":"browserrouter\u548Chashrouter","link":"#browserrouter\u548Chashrouter","children":[]},{"level":3,"title":"Route","slug":"route","link":"#route","children":[]},{"level":3,"title":"Link\u548CNavLink","slug":"link\u548Cnavlink","link":"#link\u548Cnavlink","children":[]},{"level":3,"title":"switch\u548CRoutes","slug":"switch\u548Croutes","link":"#switch\u548Croutes","children":[]},{"level":3,"title":"redirect\u548CNavigate","slug":"redirect\u548Cnavigate","link":"#redirect\u548Cnavigate","children":[]},{"level":3,"title":"useHistory\u548CuseNavigate","slug":"usehistory\u548Cusenavigate","link":"#usehistory\u548Cusenavigate","children":[]}]},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[{"level":3,"title":"\u5BFC\u5165 Router","slug":"\u5BFC\u5165-router","link":"#\u5BFC\u5165-router","children":[]},{"level":3,"title":"\u5C06 Router \u5305\u88F9\u6839\u7EC4\u4EF6","slug":"\u5C06-router-\u5305\u88F9\u6839\u7EC4\u4EF6","link":"#\u5C06-router-\u5305\u88F9\u6839\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u7C7B\u7EC4\u4EF6\u914D\u7F6E\u6620\u5C04\u5173\u7CFB","slug":"\u7C7B\u7EC4\u4EF6\u914D\u7F6E\u6620\u5C04\u5173\u7CFB","link":"#\u7C7B\u7EC4\u4EF6\u914D\u7F6E\u6620\u5C04\u5173\u7CFB","children":[]},{"level":3,"title":"\u8DEF\u7531\u5D4C\u5957\u7684\u4F7F\u7528\u53CA\u5360\u4F4D\u663E\u793A","slug":"\u8DEF\u7531\u5D4C\u5957\u7684\u4F7F\u7528\u53CA\u5360\u4F4D\u663E\u793A","link":"#\u8DEF\u7531\u5D4C\u5957\u7684\u4F7F\u7528\u53CA\u5360\u4F4D\u663E\u793A","children":[]}]},{"level":2,"title":"JS \u4EE3\u7801\u7684\u8DEF\u7531\u8DF3\u8F6C","slug":"js-\u4EE3\u7801\u7684\u8DEF\u7531\u8DF3\u8F6C","link":"#js-\u4EE3\u7801\u7684\u8DEF\u7531\u8DF3\u8F6C","children":[]},{"level":2,"title":"\u52A8\u6001\u8DEF\u7531\u53C2\u6570\u4F20\u9012","slug":"\u52A8\u6001\u8DEF\u7531\u53C2\u6570\u4F20\u9012","link":"#\u52A8\u6001\u8DEF\u7531\u53C2\u6570\u4F20\u9012","children":[{"level":3,"title":"params \u7C7B\u578B","slug":"params-\u7C7B\u578B","link":"#params-\u7C7B\u578B","children":[]},{"level":3,"title":"query \u7C7B\u578B","slug":"query-\u7C7B\u578B","link":"#query-\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u8DEF\u7531\u7684\u914D\u7F6E\u6587\u4EF6","slug":"\u8DEF\u7531\u7684\u914D\u7F6E\u6587\u4EF6","link":"#\u8DEF\u7531\u7684\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u61D2\u52A0\u8F7D","slug":"\u7EC4\u4EF6\u61D2\u52A0\u8F7D","link":"#\u7EC4\u4EF6\u61D2\u52A0\u8F7D","children":[]},{"level":2,"title":"\u5B98\u65B9\u6587\u6863","slug":"\u5B98\u65B9\u6587\u6863","link":"#\u5B98\u65B9\u6587\u6863","children":[]}],"git":{"createdTime":1705994436000,"updatedTime":1705994436000,"contributors":[{"name":"xumingyu2018","email":"260602448@qq.com","commits":1}]},"readingTime":{"minutes":6.75,"words":2025},"filePathRelative":"front-end/react/react-router.md","localizedDate":"2024\u5E741\u670823\u65E5"}');export{e as data};
