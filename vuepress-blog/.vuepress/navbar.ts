import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: '后端开发',
    activeMatch: '^/back-end/$',
    icon: 'note',
    link: '/back-end/Java-basic',
  },
  {
    text: '前端开发',
    activeMatch: '^/front-end/$',
    icon: 'flow',
    prefix: '/front-end/',
    children: [
      { text: '网页', icon: 'html', link: 'webpage/html/intro' },
      { text: 'JavaScript', icon: 'javascript', link: 'javascript/intro' },
      { text: 'TypeScript', icon: 'typescript', link: 'typescript/demo' },
      { text: 'Vue', icon: 'vue', link: 'vue/vue2-basic' },
    ],
  },
  {
    text: '项目源码',
    activeMatch: '^/projects/$',
    icon: 'proposal',
    prefix: '/projects/',
    children: [
      {
        text: 'Java项目',
        icon: 'edit',
        children: [
          { text: '仿牛客网项目', icon: 'edit', link: 'nowcoder-demo' },
          // { text: '谷粒商城项目', icon: 'edit', link: 'gulimall-demo' },
        ],
      },
    ],
  },
  {
    text: '项目资源',
    activeMatch: '^/sql/$',
    icon: 'proposal',
    prefix: '/sql/',
    children: [
      { text: '摄影约拍sql', icon: 'edit', link: 'photoSql' },
    ],
  },
  // {
  //   text: '加密文章',
  //   link: '/encrypt/加密sql文件',
  // }
])
