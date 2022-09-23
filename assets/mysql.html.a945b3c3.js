const e=JSON.parse('{"key":"v-480fe3ea","path":"/back-end/database/mysql.html","title":"MySQL","lang":"zh-CN","frontmatter":{"title":"MySQL","icon":"edit","category":["\u6570\u636E\u5E93"],"tag":["MySQL"],"summary":"having\u548Cwhere\u533A\u522B\uFF1F where\u5B50\u53E5\u4F5C\u7528\u4E8E\u8868\u548C\u89C6\u56FE\uFF0Chaving\u4F5C\u7528\u4E8E\u7EC4\u3002; where\u5728\u6570\u636E\u5206\u7EC4\u524D\u8FDB\u884C\u8FC7\u6EE4\uFF0Chaving\u5728\u6570\u636E\u5206\u7EC4\u540E\u8FDB\u884C\u8FC7\u6EE4\u3002; MyISAM\u548CInnoDB\u533A\u522B\uFF1F MyISAM\uFF1A; 1. \u53EA\u652F\u6301\u8868\u7EA7\u9501\uFF08\u9501\u4F4F\u6574\u5F20\u8868\uFF09\uFF1B 2. \u4E0D\u63D0\u4F9B\u4E8B\u52A1\u652F\u6301\uFF1B 3. \u4E0D\u652F\u6301\u5916\u952E\uFF1B 4. \u4E0D\u652F\u6301\u6570\u636E\u5E93\u5F02\u5E38\u5D29\u6E83\u540E\u7684\u5B89\u5168\u6062\u590D\uFF1B InnoDB\uFF1A; 1. \u652F\u6301","head":[["meta",{"property":"og:url","content":"https://github.com/xumingyu2018/back-end/database/mysql.html"}],["meta",{"property":"og:site_name","content":"Nevermore\u6BD3 \u7684\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MySQL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T13:22:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2022-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-09T13:22:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"having\u548Cwhere\u533A\u522B\uFF1F","slug":"having\u548Cwhere\u533A\u522B","link":"#having\u548Cwhere\u533A\u522B","children":[]},{"level":2,"title":"MyISAM\u548CInnoDB\u533A\u522B\uFF1F","slug":"myisam\u548Cinnodb\u533A\u522B","link":"#myisam\u548Cinnodb\u533A\u522B","children":[]},{"level":2,"title":"\u4F55\u4E3A ACID \u7279\u6027\uFF08\u4E8B\u52A1\u7684\u7279\u6027\uFF09\u5462\uFF1F","slug":"\u4F55\u4E3A-acid-\u7279\u6027-\u4E8B\u52A1\u7684\u7279\u6027-\u5462","link":"#\u4F55\u4E3A-acid-\u7279\u6027-\u4E8B\u52A1\u7684\u7279\u6027-\u5462","children":[]},{"level":2,"title":"\u6570\u636E\u5E93\u4E8B\u52A1\u7684\u5B9E\u73B0\u539F\u7406\u5462\uFF1F","slug":"\u6570\u636E\u5E93\u4E8B\u52A1\u7684\u5B9E\u73B0\u539F\u7406\u5462","link":"#\u6570\u636E\u5E93\u4E8B\u52A1\u7684\u5B9E\u73B0\u539F\u7406\u5462","children":[]},{"level":2,"title":"\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898?","slug":"\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898","link":"#\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898","children":[]},{"level":2,"title":"\u4E8B\u52A1\u6709\u54EA\u4E9B\u9694\u79BB\u7EA7\u522B\uFF1F","slug":"\u4E8B\u52A1\u6709\u54EA\u4E9B\u9694\u79BB\u7EA7\u522B","link":"#\u4E8B\u52A1\u6709\u54EA\u4E9B\u9694\u79BB\u7EA7\u522B","children":[]},{"level":2,"title":"\u6570\u636E\u5E93\u8303\u5F0F\u6709\u54EA\u4E9B\uFF1F","slug":"\u6570\u636E\u5E93\u8303\u5F0F\u6709\u54EA\u4E9B","link":"#\u6570\u636E\u5E93\u8303\u5F0F\u6709\u54EA\u4E9B","children":[]},{"level":2,"title":"drop\u3001delete\u4E0E truncate \u533A\u522B\uFF1F","slug":"drop\u3001delete\u4E0E-truncate-\u533A\u522B","link":"#drop\u3001delete\u4E0E-truncate-\u533A\u522B","children":[]},{"level":2,"title":"MySQL\u4E2D\u7684\u8BFB\u6709\u51E0\u79CD\uFF1F","slug":"mysql\u4E2D\u7684\u8BFB\u6709\u51E0\u79CD","link":"#mysql\u4E2D\u7684\u8BFB\u6709\u51E0\u79CD","children":[]},{"level":2,"title":"MVCC(\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236)\u7684\u5B9E\u73B0\u539F\u7406\uFF1F\uFF08\u91CD\u70B9\u96BE\u70B9\uFF09","slug":"mvcc-\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236-\u7684\u5B9E\u73B0\u539F\u7406-\u91CD\u70B9\u96BE\u70B9","link":"#mvcc-\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236-\u7684\u5B9E\u73B0\u539F\u7406-\u91CD\u70B9\u96BE\u70B9","children":[]},{"level":2,"title":"\u8BFB\u5DF2\u63D0\u4EA4\u548C\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B MVCC \u7684\u5DEE\u5F02\uFF1F","slug":"\u8BFB\u5DF2\u63D0\u4EA4\u548C\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B-mvcc-\u7684\u5DEE\u5F02","link":"#\u8BFB\u5DF2\u63D0\u4EA4\u548C\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B-mvcc-\u7684\u5DEE\u5F02","children":[]},{"level":2,"title":"\u6570\u636E\u5E93\u7D22\u5F15\u7C7B\u578B\u6709\u54EA\u4E9B\uFF1F","slug":"\u6570\u636E\u5E93\u7D22\u5F15\u7C7B\u578B\u6709\u54EA\u4E9B","link":"#\u6570\u636E\u5E93\u7D22\u5F15\u7C7B\u578B\u6709\u54EA\u4E9B","children":[]},{"level":2,"title":"MySQL \u805A\u96C6\u7D22\u5F15\u548C\u975E\u805A\u96C6\u7D22\u5F15\u533A\u522B\uFF1F","slug":"mysql-\u805A\u96C6\u7D22\u5F15\u548C\u975E\u805A\u96C6\u7D22\u5F15\u533A\u522B","link":"#mysql-\u805A\u96C6\u7D22\u5F15\u548C\u975E\u805A\u96C6\u7D22\u5F15\u533A\u522B","children":[]},{"level":2,"title":"\u975E\u805A\u96C6\u7D22\u5F15\u4E00\u5B9A\u56DE\u8868\u67E5\u8BE2\u5417(\u8986\u76D6\u7D22\u5F15)?","slug":"\u975E\u805A\u96C6\u7D22\u5F15\u4E00\u5B9A\u56DE\u8868\u67E5\u8BE2\u5417-\u8986\u76D6\u7D22\u5F15","link":"#\u975E\u805A\u96C6\u7D22\u5F15\u4E00\u5B9A\u56DE\u8868\u67E5\u8BE2\u5417-\u8986\u76D6\u7D22\u5F15","children":[]},{"level":2,"title":"\u7D22\u5F15\u7684\u4F18\u7F3A\u70B9","slug":"\u7D22\u5F15\u7684\u4F18\u7F3A\u70B9","link":"#\u7D22\u5F15\u7684\u4F18\u7F3A\u70B9","children":[]},{"level":2,"title":"B\u6811\u548CB+\u6811\u7684\u533A\u522B\uFF1F","slug":"b\u6811\u548Cb-\u6811\u7684\u533A\u522B","link":"#b\u6811\u548Cb-\u6811\u7684\u533A\u522B","children":[]}],"git":{"createdTime":1662729760000,"updatedTime":1662729760000,"contributors":[{"name":"Nevermore","email":"xmy981022@163.com","commits":1}]},"readingTime":{"minutes":7.19,"words":2156},"filePathRelative":"back-end/database/mysql.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
