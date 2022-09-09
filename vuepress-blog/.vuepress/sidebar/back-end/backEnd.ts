import { arraySidebar } from 'vuepress-theme-hope'

export const backEnd = arraySidebar([
  {
    text: 'Java',
    icon: 'java',
    collapsable: true,
    children: [
      {
        text: '基础',
        collapsable: true,
        children: ['Java-basic'],
      },
      {
        text: '容器',
        collapsable: true,
        children: ['Java-collection'],
      },
      {
        text: '线程',
        collapsable: true,
        children: ['Java-thread'],
      },
      {
        text: '新特性',
        collapsable: true,
        children: ['Java8-new-features'],
      },
    ],
  },

  {
    text: '数据库',
    icon: 'storage',
    prefix: 'database/',
    collapsable: true,
    children: [
      {
        text: 'MySQL',
        collapsable: true,
        children: ['mysql'],
      },
      {
        text: 'Redis',
        collapsable: true,
        children: [],
      },
    ],
  },
])
