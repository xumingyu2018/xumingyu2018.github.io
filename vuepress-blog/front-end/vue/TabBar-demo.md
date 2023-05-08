---
title: TarBar组件案例
category:
  - Vue2
---

## 第1步（简单实现）

```vue
// App.vue
<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>主页</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/category.svg" alt="">
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/shopcart.svg" alt="">
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/profile.svg" alt="">
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {
    },
  };
</script>

<style>
  // margin: 0, padding: 0
  @import "./assets/css/reset.css"; 
  
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    /* 置于页面最低端 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  }
  
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>

```

## 第2步（封装TabBar组件,包含TarBarItem组件）

```vue
// TabBar.vue
<template>
  <div id="tab-bar">
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>主页</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="">
      <div>分类</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/shopcart.svg" alt="">
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/profile.svg" alt="">
      <div>我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    /* 置于页面最低端 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>
```

```vue&#x20;jsx
// App.vue
<template>
  <div id="app">
    <tab-bar></tab-bar> 
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue';
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
  @import "./assets/css/reset.css";
</style>
```

## 第3步（使用插槽封装TabBarItem组件和TabBar组件）

```vue
// TabBarItem.vue
<template>
  <div class="tab-bar-item">
    // <img src="../../assets/img/tabbar/home.svg" alt="">
    // <div>主页</div>
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>
  export default({
    name: "TabBarItem"
  })
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
  }
</style>
```

```vue
// TabBar.vue
<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    /* 置于页面最低端 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  }
</style>
```

```vue
// App.vue
<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        // 具名插槽
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue';
import TabBarItem from './components/tabbar/TabBarItem.vue';

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style>
  @import "./assets/css/reset.css";
</style>
```

## 第4步（实现路由功能）

创建组件，配置路由映射

```vue
// router.index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category =() => import('../views/category/Category.vue')
const Cart =() => import('../views/cart/Cart.vue')
const Profile =() => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter ({
    routes,
    mode: 'history'
})

export default router
```

```vue
// TabBarItem.vue
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default({
    name: 'TabBarItem',
    // 父传子（传路径）
    props: {
      path: String
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    }
  })
</script>
```

```vue
// App.vue
<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from './components/tabbar/TabBar.vue';
import TabBarItem from './components/tabbar/TabBarItem.vue';

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>
<style>
  @import "./assets/css/reset.css";
</style>


```

## 第5步（实现激活颜色变化功能）

```vue&#x20;jsx
// App.vue
<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <!-- 增添激活样式 -->
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>  
import TabBar from './components/tabbar/TabBar.vue';
import TabBarItem from './components/tabbar/TabBarItem.vue';

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style>
  @import "./assets/css/reset.css";
</style>


```

```vue&#x20;jsx
// TabBarItem.vue
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default({
    name: 'TabBarItem',
    // 父传子（传路径）
    props: {
      path: String
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        // return this.$route.path.indexOf(this.path) !== -1
        return this.$route.path === this.path
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    }
  })
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
  }

  .active {
    color:red
  }
</style>
```

## 第6步（动态传入激活颜色）

```vue&#x20;jsx
<// App.vue
<template>
  <div id="app">
    <tab-bar>
      // 从<tab-bar-item>父组件传入一个activeColor属性
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue';
import TabBarItem from './components/tabbar/TabBarItem.vue';

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style>
  @import "./assets/css/reset.css";
</style>
```

```vue&#x20;jsx
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default({
    name: 'TabBarItem',
    // 父传子（传路径）
    props: {
      path: String,
      // 接收父组件传入的activeColor
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        // return this.$route.path.indexOf(this.path) !== -1
        return this.$route.path === this.path
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    }
  })
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
  }

  .active {
    color:red
  }
</style> 
```

## 第7步（最终版本）

将App.vue中关于TabBar的组件信息全部封装到MainTabBar.vue中

### App.vue

```vue&#x20;jsx
// App.vue
<template>
  <div id="app">
    <main-tab-bar/>                  
  </div>
</template>

<script>
import MainTabBar from "./components/mainTabbar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
  @import "./assets/css/reset.css";
</style>
```

### MainTabBar.vue

```vue&#x20;jsx
// MainTabBar.vue
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      // cli4可以通过@（@=src）给路径起别名（@/assets/..）
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">主页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue';
  import TabBarItem from '@/components/tabbar/TabBarItem.vue';

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
```

### TabBar.vue

```vue&#x20;jsx
// TabBar.vue
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    /* 置于页面最低端 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  }
</style>
```

### TabBarItem.vue

```vue&#x20;jsx
// TabBarItem.vue
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default({
    name: 'TabBarItem',
    // 父传子（传路径）
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        // return this.$route.path.indexOf(this.path) !== -1
        return this.$route.path === this.path
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    }
  })
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
  }

  .active {
    color:red
  }
</style>
```

### router.index.js

```vue&#x20;jsx
// router.index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category =() => import('../views/category/Category.vue')
const Cart =() => import('../views/cart/Cart.vue')
const Profile =() => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]
const router = new VueRouter ({
    routes,
    mode: 'history'
})

export default router
```
