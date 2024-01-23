const e=JSON.parse('{"key":"v-33a43798","path":"/front-end/react/react-hooks.html","title":"React Hooks","lang":"zh-CN","frontmatter":{"summary":"React Hooks \u4E3A\u4EC0\u4E48\u9700\u8981 hooks? \u9996\u5148\u9700\u8981\u5206\u522B\u8BB2\u8FF0 hooks \u4E4B\u524D\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5B58\u5728\u7684\u7F3A\u9677\u3002 \u51FD\u6570\u5F0F\u7EC4\u4EF6\u7F3A\u9677 1. class \u7EC4\u4EF6\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u7684 state\uFF0C\u7528\u6765\u4FDD\u5B58\u7EC4\u4EF6\u81EA\u5DF1\u5185\u90E8\u7684\u72B6\u6001 \u51FD\u6570\u5F0F\u7EC4\u4EF6\u4E0D\u53EF\u4EE5\uFF0C\u56E0\u4E3A\u51FD\u6570\u6BCF\u6B21\u8C03\u7528\u90FD\u4F1A\u4EA7\u751F\u65B0\u7684\u4E34\u65F6\u53D8\u91CF\uFF1B; 2. &#x20;class \u7EC4\u4EF6\u6709\u81EA\u5DF1\u7684\u751F\u547D\u5468\u671F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u5BF9\u5E94\u7684\u751F\u547D\u5468\u671F\u4E2D\u5B8C\u6210\u81EA\u5DF1\u7684\u903B","head":[["meta",{"property":"og:url","content":"https://github.com/xumingyu2018/front-end/react/react-hooks.html"}],["meta",{"property":"og:site_name","content":"Nevermore\u6BD3 \u7684\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"React Hooks"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-01-23T07:20:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2024-01-23T07:20:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981 hooks?","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981-hooks","link":"#\u4E3A\u4EC0\u4E48\u9700\u8981-hooks","children":[{"level":3,"title":"\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7F3A\u9677","slug":"\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7F3A\u9677","link":"#\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7F3A\u9677","children":[]},{"level":3,"title":"\u7C7B\u7EC4\u4EF6\u7F3A\u9677","slug":"\u7C7B\u7EC4\u4EF6\u7F3A\u9677","link":"#\u7C7B\u7EC4\u4EF6\u7F3A\u9677","children":[]}]},{"level":2,"title":"\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5BF9\u6BD4","slug":"\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5BF9\u6BD4","link":"#\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5BF9\u6BD4","children":[]},{"level":2,"title":"hooks API","slug":"hooks-api","link":"#hooks-api","children":[{"level":3,"title":"useState","slug":"usestate","link":"#usestate","children":[]},{"level":3,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]},{"level":3,"title":"useContext","slug":"usecontext","link":"#usecontext","children":[]},{"level":3,"title":"useReducer","slug":"usereducer","link":"#usereducer","children":[]},{"level":3,"title":"useCallback","slug":"usecallback","link":"#usecallback","children":[]},{"level":3,"title":"useMemo","slug":"usememo","link":"#usememo","children":[]},{"level":3,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":3,"title":"useImperativeHandle","slug":"useimperativehandle","link":"#useimperativehandle","children":[]},{"level":3,"title":"useLayoutEffect","slug":"uselayouteffect","link":"#uselayouteffect","children":[]},{"level":3,"title":"useId","slug":"useid","link":"#useid","children":[]},{"level":3,"title":"useTransition","slug":"usetransition","link":"#usetransition","children":[]},{"level":3,"title":"useDeferredValue","slug":"usedeferredvalue","link":"#usedeferredvalue","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49 hook","slug":"\u81EA\u5B9A\u4E49-hook","link":"#\u81EA\u5B9A\u4E49-hook","children":[]},{"level":2,"title":"Redux \u4E2D\u7684 hooks","slug":"redux-\u4E2D\u7684-hooks","link":"#redux-\u4E2D\u7684-hooks","children":[{"level":3,"title":"useSelector","slug":"useselector","link":"#useselector","children":[]},{"level":3,"title":"useDispatch","slug":"usedispatch","link":"#usedispatch","children":[]}]}],"git":{"createdTime":1705994436000,"updatedTime":1705994436000,"contributors":[{"name":"xumingyu2018","email":"260602448@qq.com","commits":1}]},"readingTime":{"minutes":17.01,"words":5102},"filePathRelative":"front-end/react/react-hooks.md","localizedDate":"2024\u5E741\u670823\u65E5"}');export{e as data};
