import { sidebar } from 'vuepress-theme-hope'
import { backEnd } from './back-end'
import { javascript } from './front-end'
import { typescript } from './front-end'
import { vue } from './front-end'
import { webpage } from './front-end'
import { projects } from './projects'


// 侧边栏
export default sidebar({
  '/back-end': backEnd,

  '/front-end/webpage': webpage,
  '/front-end/javascript': javascript,
  '/front-end/typescript': typescript,
  '/front-end/vue': vue,

  '/projects': projects,

})
