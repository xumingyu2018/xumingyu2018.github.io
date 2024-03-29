import { sidebar } from 'vuepress-theme-hope'
import { backEnd } from './back-end'
import { javascript } from './front-end'
import { typescript } from './front-end'
import { vue } from './front-end'
import { webpage } from './front-end'
import { builder } from './front-end'
import { node } from './front-end'
import { react } from './front-end'
// import { nowcoder } from './projects'

// 侧边栏
export default sidebar({
  '/back-end': backEnd,

  '/front-end/webpage': webpage,
  '/front-end/javascript': javascript,
  '/front-end/typescript': typescript,
  '/front-end/node': node, 
  '/front-end/vue': vue,
  '/front-end/react': react,

  '/front-end/builder': builder,

  // '/projects/nowcoder': nowcoder,

})
