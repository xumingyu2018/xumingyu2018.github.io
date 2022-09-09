import { defineUserConfig } from 'vuepress'
import theme from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Nevermore毓 的学习笔记',
  base: '/',
  theme,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }], // 自定义 favicon
  ],
})
