import { hopeTheme } from 'vuepress-theme-hope'
import sidebar from './sidebar'
import navbar from './navbar'

export default hopeTheme({
  hostname: 'https://github.com/xumingyu2018',

  author: {
    name: 'Nevermore毓',
    url: 'https://github.com/xumingyu2018',
  },

  // 纯净模式
  // pure: true,

  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: 'MIT Licensed | Copyright © 2022-present Nevermore毓',

  displayFooter: true,

  iconAssets: 'iconfont',

  logo: '/favicon.svg',

  repo: 'https://github.com/xumingyu2018/xumingyu2018.github.io',

  // TODO 这个是 .vuepress 上级文件夹名 vuepress-blog，不确定，用于部署的，应该改成 docsDir: 'vuepress-blog',
  docsDir: 'vuepress-blog',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    medias: {
      Gitee: 'https://gitee.com/NevermoreYu',
      GitHub: 'https://github.com/xumingyu2018',
    },
    description: '一个后端开发者',
    intro: '/about.html',
  },

  encrypt: {
    config: {
      '/encrypt/这是一篇加密文章.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69',

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      // enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
})
