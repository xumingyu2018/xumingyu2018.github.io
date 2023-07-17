import { arraySidebar } from 'vuepress-theme-hope'

export const backEnd = arraySidebar([
  {
    text: 'Java',
    icon: 'java',
    children: [
      {
        text: '基础',
        collapsable: true,
        children: ['Java-basic'],
      },
      {
        text: '容器',
        children: ['Java-collection'],
      },
      {
        text: '线程',
        children: ['Java-thread'],
      },
      {
        text: '新特性',
        children: ['Java8-new-features'],
      },
    ],
  },

  {
    text: '数据库',
    icon: 'storage',
    prefix: 'database/',
    children: [
      {
        text: 'MySQL',
        children: ['mysql'],
      },
      {
        text: 'Redis',
        children: [],
      },
    ],
  },
])
