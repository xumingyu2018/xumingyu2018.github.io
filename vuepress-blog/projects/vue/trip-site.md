---
title: 移动端旅游项目
icon: edit
category:
  - Vue
tag:
  - 前端项目
  - Vue项目
---

## [项目地址](http://129.204.230.159:8002)

## 项目结构

![项目结构](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_1vDR4XntPq.png)

## CSS 样式重置

安装`npm install normalize.css`

导入 main.js 中`import "normalize.css"`

导入自定义样式重置文件

```javascript
// css/index.css
@import "./reset.css";
@import "./common.css";

// main.js
import "./assets/css/index.css"
```

安装 less 依赖：`npm install less -D`

## 路由配置

```javascript
// router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

const router =createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("../views/home/home.vue"),
    },
    {
      path:"/favor",
      component: () => import("../views/favor/favor.vue"),
    },
    {
      path:"/order",
      component: () => import("../views/order/order.vue"),
    },
    {
      path:"/message",
      component: () => import("../views/message/message.vue"),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})
export default router;

```

```javascript
// main.js
import router from "./router"

createApp(App).use(router).mount('#app')
```

## 开发环境配置

```javascript
// .env
VITE_BASE_URL=http://xxx.com:8000
VITE_TIME_OUT=10000
// .env.development
VITE_BASE_URL=http://xxx.com/dev:8000
VITE_TIME_OUT=10000
// .env.production
VITE_BASE_URL=http://xxx.com/prod:8000
VITE_TIME_OUT=10000

```

## 状态管理配置

配置 pinia

```javascript
// stores/index.js
import { createPinia } from 'pinia'

const pinia = createPinia()
export default pinia
```

```javascript
import pinia from './stores'

createApp(App).use(router).use(pinia).mount('#app')
```

## 导入 UI 组件库（Vant）

[Vant 官方网址](https://vant-contrib.gitee.io/vant/#/zh-CN)

安装：`npm i vant`

按需引入组件样式：

- 安装插件：`npm i unplugin-vue-components -D`
- 配置插件

```javascript
// vite.config.js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};

```

修改第三方 UI 组件库样式（重要）

1. **方法一**：用插槽，插入自己的元素，在自己的作用域中直接修改该元素。
2. **方法二**：全局定义一个变量，覆盖它默认变量的值（缺点：全局修改）

```less
:root {
  /* 全局修改: 任何地方只要用到-van-tabbar-item-icon-size都会被修改掉 */
  --van-tabbar-item-icon-size: 30px !important;
}
```

3. **方式三**：局部定义一个变量，覆盖它默认变量的值（优点：局部修改）

```less
<style lang="less" scoped>
.tab-bar {
  /* 局部定义一个变量: 只针对.tab-bar子元素才生效 */
  --van-tabbar-item-icon-size: 30px !important;
}
</style>
```

4. **方式四**：F12 直接查找对应的子组件选择器，直接修改 CSS（非自定义插槽）。
   - `:deep(子组件中元素选择器)`进行修改

```less
<style lang="less" scoped>
.tab-bar {
  /* 找到类, 对类中的CSS属性重写
   * :deep(.class)找到子组件的类, 让子组件的类也可以生效(渗透子组件)
   * 不加deep不起作用，因为加了scoped，在自己的组件css作用域中
   */
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }
}

</style>
```

## Tabbar 组件

```vue
<!-- tabbar.vue -->
<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item,index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <!-- 具名插槽 -->
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import tabbarData from '@/assets/data/tabbar.js'
  import { getAssetURL } from '@/utils/load_assets.js';
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  // 监听路由改变时，找到对应路由的索引，设置currentIndex
  const currentIndex = ref(0);
  const route = useRoute();

  watch(route, (newRoute) => {
    const index = tabbarData.findIndex((item) => item.path === newRoute.path);
    if(index === -1) return;
    currentIndex.value = index;
  });
</script>

<style lang="less" scoped>
.tab-bar {
  /* 局部定义一个变量: 只针对.tab-bar子元素才生效
   --van-tabbar-item-icon-size: 30px !important;*/

  /* 找到类, 对类中的CSS属性重写
   :deep(.class)找到子组件的类, 让子组件的类也可以生效*/
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 28px;
  }
}
</style>
```

## 定位地理位置

使用`navigator.geolocation`API

```vue
<!-- home-search-box -->
<template>
  <div class="search-box">
    <div class="location bottom-gray-line ">
      <div class="city" @click="cityClick">北京</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const cityClick = () => {
  router.push('/city')
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功", res);
  }, err => {
    console.log("获取位置失败", err);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

</script>
```

## 指定页面隐藏导航栏 TabBar 组件

方法一：

配置路由中需要隐藏 TabBar 一个`meta`属性，在父组件调用`<TabBar>`时进行`v-if`判断（使用`useRoute`获取当前活跃路由）

```vue
<!-- router/index.js -->
  {
    path:"/city",
    component: () => import("@/views/city/city.vue"),
    <!-- 显示城市时。隐藏底部导航栏（useRoute可获得当前活跃路由） -->
    meta: {
      hideTabBar: true
    }
  }
<!-- App.vue -->
<template>
  <div class="app">
    <router-view/>

    <!-- 方法一：隐藏底部导航栏 -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tabbar.vue'
import { useRoute } from 'vue-router'
// 这个不能少
const route = useRoute()
</script>
<style scoped>
```

方法二：

通过 CSS 样式解决，将样式添加到需要隐藏的组件`class`上

```css
/* 隐藏底部导航栏样式 */
.top-page {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  /* 在100vh视口滚动 */
  overflow-y: auto;
}
```

## 城市分组列表实现

### 搜索框实现

![搜索框实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_orXjUvteaK.png)

使用 Vant 组件库的`<vant-search>`组件

```vue
<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        <!-- 圆角 -->
        shape="round"
        placeholder="城市/区域/位置"
        <!-- 显示取消 -->
        show-action
        @cancel="onCancel"
      />
    </div>
  </div>
</template>

<script setup>
  // 搜索框功能
  const searchValue = ref("")
  const onCancel = () => {
    // 返回上一级
    router.back()
  }
</script>
```

### Tab 标签页数据切换实现

![Tab 标签页数据切换实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_o7FD3_PSr_.png)

使用 Vant 组件库的`<vant-tabs>`组件

#### 主组件

```vue
<!-- city.vue -->
<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="城市/区域/位置"
        show-action
        @cancel="onCancel"
      />
      <!-- 2.tab标签页的切换 -->
      <!-- tabActive默认索引,加上name属性即可作为标签的索引值 -->
      <van-tabs v-model:active="tabActive" color="#fff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 切换栏对应数据（具体实现看IndexBar索引栏） -->
    <div class="content">
      <!-- group-data父传子 -->
      <city-group :group-data="currentGroup"/>
      <!-- 使用v-show优化渲染 -->
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"/>
      </template>
   </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import CityGroup from "./components/city-group.vue";

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const onCancel = () => {
  // 返回上一级
  router.back()
}

// tab切换
const tabActive = ref(0)

// 从pinia的Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 目的: 获取选中标签后的数据
// 1.获取正确的key: 将tabs中绑定的tabAction正确绑定
// 2.根据key从allCities获取数据, 默认直接获取的数据不是响应式的, 所以必须包裹computed
// const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
.city {
  // 局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
```

#### Pinia 存储

```javascript
// stores/modules/city.js
import { getCityAll } from "@/services"
import { defineStore } from "pinia"

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
```

#### 城市数据接口实现（services）

**封装 axios**

```javascript
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class MyRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    // mainStore.isLoading = true
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new MyRequest(BASE_URL, TIMEOUT)
```

**后台地址配置**

```javascript
// services/request/config.js
export const BASE_URL = "http://123.207.32.32:1888/api"
export const TIMEOUT = 10000
```

**统一导出**

```javascript
// services/index.js
export * from "./modules/city"
export * from './modules/home'
export * from './modules/detail'
```

**实现封装 axios 路径**

```javascript
// services/modules/city.js
import myRequest from '../request'

export function getCityAll() {
  return myRequest.get({
    url: "/city/all"
  })
}
```

### 城市列表索引栏及热门实现

![城市列表索引栏及热门实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_ALrrk9QeGM.png)

使用 Vant 组件库的`<vant-tabs>`组件，将功能封装到`city-group`组件。`index-list`+`computed()`属性实现动态城市列表映射。通过`list.unshif("#")`添加热门索引。

```vue
<!-- city-group.vue -->
<template>
  <div class="city-group" :index-list="indexList">
    <van-index-bar>
      <van-index-anchor index="热门"/>
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
    </template>
    </van-index-bar>
  </div>
</template>

<script setup>
// 从city.vue传参数到city-group.vue
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 城市列表索引动态映射
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  // 在list最前面插入一个#，给热门添加索引
  list.unshift("#")
  return list
})
// ....
</script>

<style lang="less" scoped>
.list {
  display: flex;
  /* 换行 */
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
```

#### 监听城市点击进行首页数据回显

对`template`中的点击事件进行实现，将选中的城市`currentCity`存入`pinia`的`store`

```vue
<!-- city-group.vue -->
<script setup>
  import useCityStore from "@/stores/modules/city";
  // ...
  // 监听城市点击
  const router = useRouter()
  const cityStore = useCityStore()
  const cityClick = (city) => {
    // 选中当前城市
    cityStore.currentCity = city
    // 返回上一级
    router.back()
  }
</script>
```

首页调用`useCityStore()`在`template`中进行回显

```vue
<!-- home-search-box.vue -->
<template>
  <div class="search-box">
    <div class="location bottom-gray-line ">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import useCityStore from '@/stores/modules/city';
  import { storeToRefs } from 'pinia';
  // ....
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)
</script>
```

## 首页日期选择实现

![首页日期选择实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_RYoFN6njZu.png)

### 日期格式化

安装：`npm install dayjs`

使用`dayjs`将日期格式化封装为工具类

```javascript
// format_date.js
import dayjs from 'dayjs'

// 格式化日期（默认MM月DD日）
export function formatMonthDay(date, formatStr = "MM月DD日"){
  return dayjs(date).format(formatStr)
}

// 2个时间相隔的天数
export function getDiffDays(startDate, endDate){
  return dayjs(endDate).diff(startDate, "day")
}
```

### 动态显示日期范围及日历组件

![动态显示日期范围及日历组件](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_8wBOSxCNq-.png)

使用 Vant 中`<van-calendar>`实现日历组件，停留天数计算使用封装工具`getDiffDays`

```vue
<!-- home-search-box.vue -->
<template>
  <div class="search-box">
    <!-- 位置信息 ....-->

    <!-- 日期范围，绑定点击事件打开calendar组件-->
    <div class="section date-range bottom-gray-line" @click="showCalendar =true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
        <div class="end">
          <div class="date">
            <span class="tip">离店</span>
            <span class="time">{{ endDate }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 日历组件 -->
    <van-calendar v-model:show="showCalendar" type="range" :round="false" @confirm="onConfirm" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { formatMonthDay, getDiffDays } from '@/utils/format_date';
  // ...

  // 日期范围处理
  const nowDate = new Date()
  const newDate = new Date().setDate(nowDate.getDate() + 1)

  // 设置初始值
  const startDate = ref(formatMonthDay(nowDate))
  const endDate = ref(formatMonthDay(newDate))
  const stayCount = ref(getDiffDays(nowDate, newDate))

  // 日历组件参数（初始时关闭calendar组件）
  const showCalendar = ref(false)
  const onConfirm = (value) => {
    // 1.设置日期范围
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)
    stayCount.value = getDiffDays(selectStartDate, selectEndDate)
    // 2.确定后隐藏日期
    showCalendar.value = false
  }
</script>

<style lang="less" scoped>
/* calendar组件占满整个高度 */
.search-box {
  --van-calendar-popup-height: 100%;
}

/* 日期范围样式 */
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>
```

### （优化）使用 Pinia 状态管理库存储时间

```vue
<!-- home-search-box.vue -->
<script setup>
  // 日期范围处理
  import { useMainStore } from '@/stores/modules/main';
  import { computed, ref } from 'vue';

  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)

  // 依赖store里的数据故用computed
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayCount = ref(getDiffDays(startDate.value, endDate.value))

  // 日历组件参数
  const showCalendar = ref(false)
  const onConfirm = (value) => {
    // 1.设置日期范围
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    stayCount.value = getDiffDays(selectStartDate, selectEndDate)

    // 2.确定后隐藏日期
    showCalendar.value = false
  }
</script>
```

## 热门建议数据展示

发送网络请求从服务器获取数据，以下有 2 种思路（传统结构和分层结构）

![热门建议数据展示](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_XKJT-kANF8.png)

### 传统结构（不建议）

未使用 pinia 进行数据存储

#### 父组件发送网络请求

```vue
<!-- home.vue -->
<script setup>
  import myRequest from '@/services/request/index';
  import { ref } from 'vue';

  // 热门建议
  const hotSuggests = ref([])
  // 发送网络请求
  myRequest.get({
    url: '/home/hotSuggests'
  }).then(res => {
    hotSuggests.value = res.data
  })
</script>
```

#### 请求数据传递给子组件

```vue
<!-- home.vue -->
<template>
  <div class="home">
    <!-- ... -->
    <home-search-box :hot-suggests="hotSuggests"/>
  </div>
</template>
```

#### 子组件展示

子组件通过`defineProps`接收父组件传递的参数

```vue
<!-- home-search-box.vue -->
<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <!-- 日期范围 -->
    <!-- 日历组件 -->
    <!-- 价格/人数选择 -->
    <!-- ... -->
    <!-- 热门建议  -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  // 定义props(使用了pinia就不需要父传子，直接从pinia中获取数据)
  const props = defineProps({
    hotSuggests: {
      type: Array,
      default: () => []
    }
  })
</script>
```

### 分层结构

- `services`：网络请求层
- `stores`：pinia 状态管理库

#### 封装网络请求

在`services`层封装主页中的热门建议网络请求

```javascript
// services/modules/home.js
import myRequest from '../request'

export function getHomeHotSuggests() {
  return myRequest.get({
    url: "/home/hotSuggests"
  })
}
```

#### 使用 pinia 状态管理库

将网络请求的返回的数据存储在 pinia 中，进一步封装

```javascript
// stores/modules/home.js
import { getHomeHotSuggests } from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
```

#### 子组件获取数据

```vue
<!-- home-search-box.vue -->
<script setup>
  import useHomeStore from '@/stores/modules/home';
  import { storeToRefs } from 'pinia';

  // 热门建议
  const homeStore = useHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)
</script>
```

#### 父组件调用发起请求

需要调用一下`stores`中`actions`定义的网络请求

```vue
<!-- home.vue -->
<template>
  <div class="home">
    <!-- ... -->
    <home-search-box/>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';

// 热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
</script>
```

## 首页搜索按钮实现

![首页搜索按钮实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_cVj1v327jL.png)

### 搜索按钮样式实现

```vue
<!-- home-search-box.vue -->
<template>
  <div class="search-box">
    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 搜索按钮样式 */
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color:#fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
```

### 监听搜索事件（事件路由传参）

```vue
<!-- home-search-box.vue -->
<script setup>
  // 监听搜索事件
  const searchBtnClick = () => {
    router.push({
      path: "/search",
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    })
  }
</script>
```

### 实现初步的 search 页面

使用`$route.query`获取`query`参数

```vue
<!-- search/search.vue -->
<template>
  <div class="search">
    <h2>{{ $route.query.startDate }}</h2>
    <h2>{{ $route.query.endDate }}</h2>
    <h2>{{ $route.query.currentCity }}</h2>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
</style>
```

### 配置点击搜索跳转路由

```javascript
// router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

const router =createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    // ...
    {
      path:"/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTabBar: true
      }

  ]
})
export default router;
```

在`App.vue`中使用`route`隐藏`search`底部导航栏，也可以使用样式`top-page`

```vue
<!-- app.vue -->
<template>
  <div class="app">
    <router-view/>

    <!-- 方法一：隐藏底部导航栏 -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tabbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
</style>
```

## 首页分类菜单实现

![首页分类菜单实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_xMgheAWf-X.png)

### 封装网络请求获取数据

```javascript
// services/modules/home.js
import myRequest from '../request'

// ...getHomeHotSuggests()

export function getHomeCategories() {
  return myRequest.get({
    url: "/home/categories"
  })
}
```

### 使用 Pinia 将数据进行状态管理

```javascript
// stores/modules/home.js
import { getHomeCategories, getHomeHotSuggests } from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
  }),
  actions: {
    // ...fetchHotSuggestData()
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    }
  }
})
export default useHomeStore
```

### 首页子组件数据展示及样式调整

```vue
<!-- home-categories.vue -->
<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  /* 超出的部分滚动条显示(水平滚动) */
  overflow-x: auto;
  /* 取消滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    /* 收缩，默认为1，0为放大 */
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
```

## 热门精选列表不同类型展示

![热门精选列表不同类型展示](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_uS1yVM9to7.png)

### 封装网络请求获取数据

对网络请求进行分页处理，`axios`传参使用`params`

```javascript
// services/home.js
import myRequest from '../request'

export function getHomeHouselist(currentPage) {
  return myRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
```

### Pinia 状态管理

加载更多这里要使用数组的`push`方法，将数据存入 houselist，每次发起网络请求时`currentPage`需要加一（**这里使用按钮手动加载更多**，后续有其它方法详细讲解）

```javascript
// stores/home.js
import { getHomeCategories, getHomeHotSuggests, getHomeHouselist } from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    // ...
    currentPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage)
      // 将数据追加到原有数据后面（加载更多）
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})
export default useHomeStore
```

### 父组件 home 中调用 actions 中的请求

```javascript
// home.vue
<script setup>
  homeStore.fetchHouselistData()

  // 默认加载更多按钮
  const moreBtnClick = () => {
    homeStore.fetchHouselistData()
  }
</script>
```

### 编写 home 下的列表内容子组件

```vue
<!-- home-content.vue -->
<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <house-item-type1
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"/>
        <house-item-type2
          v-else-if="item.discoveryContentType ===3"
          :item-data="item.data"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import houseItemType1 from '@/components/house-item-type1/house-item-type1.vue';
import houseItemType2 from '@/components/house-item-type2/house-item-type2.vue';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    /* 换行 */
    flex-wrap: wrap;
  }
}
</style>
```

### 抽取两个列表中不同类型的组件

类型一

![类型一](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_ARyfBQP4yJ.png)

```vue
<!-- house-item-type1 -->
<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemScore" color="#fff" :size="15" readonly allow-half/>
          <div class="new">¥ {{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})
// 分数计算属性
const itemScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item {
  /* 整个宽度各占一半 */
  width: 50%;

  .item-inner {
    /* 相对定位微调 */
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    /* 把图片超出宽度50%的部分隐藏 */
    overflow: hidden;

    .cover {
      img {
        /* 上面overflow后将图片恢复比例 */
        width: 100%;
      }
    }

    .info {
      /* 绝对定位后将文字信息放在图片底部 */
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        /* 以下4行表示使文字显示2行 */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
```

![类型二](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_ab5bxtuwbs.png)

类型二

```vue
<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <!-- 位置信息 -->
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <!--文本内容 -->
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <!--价格（新、旧、折扣）-->
        <div class="price">
          <div class="new"> ¥ {{ itemData.finalPrice }}</div>
          <div class="old"> ¥ {{ itemData.productPrice }}</div>
          <div class="tip" v-if="itemData.priceTipBadge">
            {{ itemData.priceTipBadge.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.house-item {
  /* 整个宽度各占一半 */
  width: 50%;

  .item-inner {
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    /* 把图片超出宽度50%的部分隐藏 */
    overflow: hidden;

    .cover {
      img {
        /* 上面overflow后将图片恢复比例 */
        width: 100%;
      }
    }

    .info {
      padding: 8px 10px;
      color: #666;
      font-size: 12px;

      .location {
        display: flex;
        /* 上下居中 */
        align-items: center;
        /* 设置地理位置图标 */
        img {
          width: 12px;
          height: 12px;
        }

        .text {
          margin-left: 2px;
          font-size: 12px;
          color: #666;
        }
      }

      .name {
        margin: 5px 0;
        font-size: 14px;
        color: #333;

        /* 以下表示使文字显示2行 */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        display: flex;
        align-items: flex-start;
        margin: 8px 0;

        .new {
          color: #ff9645;
          font-size: 14px;
        }

        .old {
          margin: 0 3px;
          color: #999;
          font-size: 12px;
          /* 中间划线 */
          text-decoration: line-through;
        }

        .tip {
          background-image: linear-gradient(270deg,#f66,#ff9f9f);
          color: #fff;
          padding: 0 6px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
```

## 首页滚动底部加载更多

### 使用窗口滚动事件监听（不推荐）

- `clientHeight`: 这是一个只读属性，表示元素内容区域的高度，包括可见部分和内边距，但不包括滚动条、边框和外边距。
- `scrollTop`: 这是一个可读写属性，表示元素内容垂直方向上被隐藏的像素值。
- `scrollHeight`: 这是一个只读属性，表示元素内容的总高度，包括被隐藏的部分。

**注意：这里不能给该组件设置高度，否则不再是\*\***`window`\***\*对象，从而监听失效**

```vue
<!-- home.vue -->
<script setup>
  // 窗口滚动事件监听
  const scrollListenerHandle = () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight

    if(clientHeight + scrollTop >= scrollHeight) {
      homeStore.fetchHouseListData()
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandle)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandle)
  })
</script>

<style lang="less" scoped>
  .home {
    padding-bottom: 60px;
  }

  .banner {
    img {
      width: 100%;
    }
  }
</style>
```

### 抽取 hooks 滚动事件

使用变量`isReachBottom`记录是否滚动到底部，相比于使用回调简单

```javascript
// hooks/useScroll.js
import { onMounted, onUnmounted, ref } from 'vue';

export default function useScroll(){
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandle = () => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight

    if(clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      isReachBottom.value = true
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandle, false)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandle, false)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
```

主页调用`hooks`函数，使用`watch`监听`isReachBottom`变化（这里可用`computed`，但是监听变化后执行 js 逻辑一般用`watch`）

```javascript
// home.js
<script setup>
  import useScroll from '@/hooks/useScroll';

  const { isReachBottom } = useScroll()
  // 监听是否到底部，若到底部加载更多
  watch(isReachBottom, (newValue) => {
    if (newValue) {
        homeStore.fetchHouseListData().then(() => {
        isReachBottom.value = false
      })
    }
  })
</script>
```

### 使用节流 throttle 优化窗口滚动

安装：`npm install underscore`

使用：`throttle(() ⇒ {}, 100)`

```javascript
  // hooks/useScroll.js
  import { throttle } from 'underscore'

  const scrollListenerHandle = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    console.log("监听到滚动");
    if(clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      isReachBottom.value = true
    }
  }, 100)
```

### （优化）窗口滚动同时监听 window 和 Dom 元素

Dom 元素加了`overflow-y:auto`

```javascript
// hooks/useScroll.js
import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore'

export default function useScroll(elRef){
  // 默认不传参监听的是window的窗口滚动
  let el = window

  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandle = throttle(() => {
    if(el === window){
      // window窗口的滚动
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      // Dom元素上的滚动（加了over-flow）
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }

    if(clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if(elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandle, false)
  })

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandle, false)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
```

## 搜索工具栏的封装和实现

![搜索工具栏的封装和实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_JEJMwuyKUS.png)

### 搜索框滚动显示控制

滚动到窗口的 360 个像素时才显示搜索框

```vue
<!-- home.vue -->
<template>
  <div class="home">
    <home-nav-bar/>
    <!-- ... -->
    <home-search-box/>
    <home-categories/>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar/>
    </div>
    <home-content/>
  </div>
</template>

<script setup>
  import searchBar from '@/components/search-bar/search-bar.vue';
  import { computed, watch } from 'vue';
  import useScroll from '@/hooks/useScroll';

  const { isReachBottom, scrollTop } = useScroll()
  // 定义的可响应式数据, 依赖另外一个可响应式的数据, 那么可以使用计算函数(computed)，computed可以缓存计算结果，只有依赖的响应式数据发生变化才会重新计算
  const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
  })
  // const isShowSearchBar = ref(false)
  // watch(scrollTop, (newTop) => {
  //   isShowSearchBar.value = newTop > 100
  // })
</script>

<style lang="less" scoped>
  /* 搜索工具栏固定定位 */
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
</style>
```

### 将搜索工具栏封装为公共组件

```vue
<!-- src/components/search-bar.vue -->
<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { formatMonthDay } from '@/utils/format_date';

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<style lang="less" scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;
  line-height: 45px;

  padding: 0 10px;
  font-size: 14px;
  color: #999;

  border-radius: 6px;
  background: #f2f4f6;

  .select-time {
    display: flex;
    /* 按列flex布局 */
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      /* 使得行高与默认字体的默认比例保持一致 */
      line-height: normal;
      font-size: 10px;

      .name {
        font-size: 10px;
      }

      .date {
        /* 相对定位微调 */
        position: relative;
        margin: 0 10px 0 3px;
        font-weight: 500;
        color: #333;
      }
    }

    /* 设置一个小角标 */
    .end .date::after {
      content: " ";
      width: 0;
      height: 0;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -12px;
    }
  }

  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      max-width: 155px;
      font-size: 12px;
    }

    .icon-cancel {
      position: absolute;
      top: 30%;
      right: 0;
      display: inline-block;
      background-image: url(../../assets/img/sprite.png);
      background-position: -92px -58.5px;
      width: 14.5px;
      height: 15px;
      background-size: 125px 110px;
    }
  }

  .right {
    display: flex;
    align-items: center;
  }

  .icon-search {
    width: 24px;
    height: 24px;
    display: inline-block;

    background-image: url(../../assets/img/home/home-sprite.png);
    background-position: -29px -151px;
    background-size: 207px 192px;
  }
}
</style>
```

### 将日期存入全局状态管理库 mainStore

```javascript
// store/main.js
import { defineStore } from "pinia";

// 大部分组件都需要共享的状态
const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

export const useMainStore = defineStore("main", {
  state: () => ({
    token: "",

    startDate: startDate,
    endDate: endDate,

    isLoading: false
  })
})
```

## Loding 数据加载实现

![Loding 数据加载实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_65AZFHeNdb.png)

### 搭建 loading 页面组件

```vue
<!-- components/loading/loading.vue -->
<template>
  <div class="loading" v-show="mainStore.isLoading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
</div>
</template>

<script setup>
  import { useMainStore } from '@/stores/modules/main';

  const mainStore = useMainStore()

  // 点击页面时关闭loading
  const loadingClick = () => {
    mainStore.isLoading = false
  }
</script>

<style lang="less" scoped>
  .loading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    background-color: rgba(0, 0, 0, .3);

    .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

      img {
        width: 70px;
        height: 70px;
        margin-bottom: 8px;
      }
    }
  }
</style>
```

### 将 bool 型的 loading 标识符存入 pinia

```javascript
// stores/modules/main.js
import { defineStore } from "pinia";

// 大部分组件都需要共享的状态
const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

export const useMainStore = defineStore("main", {
  state: () => ({
    token: "",

    startDate: startDate,
    endDate: endDate,
    // loading效果标识符
    isLoading: false
  })
})
```

### 使用 axios 拦截器对 loading 标识符进行控制

每次发起请求前显示`loading`，结束请求后隐藏`loading`，对`axios`实例进行拦截

```javascript
// services.request.index.js
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { useMainStore } from '@/stores/modules/main'

const mainStore = useMainStore()

class MyRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 使用axios拦截器实现loading效果
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }
  // .....
}
```

## 列表详情页实现

### 点击主页列表带参数跳转对应详情页

给 2 个不同类型的列表组件上绑定点击事件（点击事件默认传递到子组件的根上，若有多个根需要使用$attrs，详细看组件化开发 props 注意事项），实现路由跳转

```vue
<!-- home-content.vue -->
<template>
  <div class="content">
      <!-- ... -->
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <house-item-type1
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="itemClick(item.data)"/>
        <house-item-type2
          v-else-if="item.discoveryContentType ===3"
          :item-data="item.data"
          @click="itemClick(item.data)"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  // ...
  const router = useRouter()
  const itemClick = (item) => {
    router.push("/detail/" + item.houseId)
  }
</script>
```

配置详情页路由表，创建`detail.vue`页面（后续会讲）

```javascript
// router/index.js
{
  path:"/detail/:id",
  component: () => import("@/views/detail/detail.vue"),
}
```

### 详情页轮播图实现

![详情页轮播图实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_HdVTi_YZMr.png)

使用 Vant 组件库的`<van-swipe>`，并做进一步封装

```vue
<!-- detail/components/detail-swipe.vue -->
<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
// 父组件detail.vue将数据传入子组件
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

  }
}
</style>
```

引入自定义封装的轮播组件到父组件进行调用，导航栏使用 Vant 中的`<van-nav-bar>`，并监听返回按钮点击（这里未使用 pinia 进行状态管理）

```vue
<!-- detail/detail.vue -->
<template>
  <div class="detail top-page">
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow  @click-left="onClickLeft"/>
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>
  </div>
</template>

<script setup>
import DetailSwipe from "./components/detail-swipe.vue"
import { getDetailInfos } from '@/services';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from "vue";

const router = useRouter()
const route = useRoute()
// 获取当前点击的路由参数
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// 监听返回按钮点击
const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>
</style>
```

### 自定义轮播图指示器

![自定义轮播图指示器](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_vgR0Cq8QtL.png)

预处理分类数据，格式如：`{"2": [item1, item2, item3 ...], "4": [itemx, itemy, itemz ...], "9": [itema, itemb, itemc ...]}`，`"2"`代表卧室`id`

```vue
<!-- detail/components/detail-swipe.vue -->
<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <!-- ... -->

      <!-- 默认是圆点，这里是作用域插槽和具名插槽,对props解构（active是选中的指示器） -->
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <!-- 选中的一组动态绑定class样式，显示数字(这里key是字符串类型) -->
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getName(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 对数据进行转换（自定义指示器）
const swipeGroup = {}

// 思路一: 好理解, 两次循环
// for (const item of props.swipeData) {
//   swipeGroup[item.enumPictureCategory] = []
// }
// for (const item of props.swipeData) {
//   const valueArray = swipeGroup[item.enumPictureCategory]
//   valueArray.push(item)
// }
// 思路二: 一次循环
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

// 定义转换数据的方法(非贪婪匹配)
// （【卧室】：【卫生间】：【其他】：）去掉冒号
const nameReg = /【(.*?)】/i
const getName = (name) => {
  // return name.replace("：", "").replace("】", "").replace("【", "")
  const results = nameReg.exec(name)
  return results[1]
}

// 处理在当前类别中的数组索引（如"2"中的item2索引为2）
const getCategoryIndex = (item) => {
  // 获取当前类别的数组
  const valueArray = swipeGroup[item.enumPictureCategory]
  // 使用findIndex查出当前item在数组中的索引
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
```

### 详情页顶部房屋信息展示

![详情页顶部房屋信息展示](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_fQt-F5ARFl.png)

子组件使用`defineProps`从组件中获取数据，父组件`detail.vue`在使用子组件时传值（从`mainPart.topModule`获取值传给`topInfos`）

`<detail-infos :top-infos="mainPart.topModule"/>`

```vue
<!-- detail/detail-infos.vue -->
<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>

    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span class="item" v-if="item.tagText" :style="{ color: item.tagText.color, background: item.tagText.background.color}">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>

    <div class="comment extra">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topInfos.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow"/>
      </div>
    </div>

    <div class="position extra">
      <div class="left address">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">
        地图·周边
        <van-icon name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;

  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;

    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }

  .comment {
    .score {
      font-size: 18px;
      font-weight: 700;
      margin: 0 3px;
    }
    .brief {
      color: #666;
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
```

### 内容详情区域插槽组件封装

![内容详情区域插槽组件封装](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_FXeWN43dHG.png)

使用插槽封装公共组件，以便更多的内容详情区域使用（如房屋设施展示，房东介绍展示，热门评论展示等，这里只写房屋设施展示，主要是 HTML 和 CSS 的搭建）

```vue
<!-- components/detail-section/detail-section.vue -->
<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>

    <div class="content">
      <slot>
        <h3>我是默认插槽内容</h3>
      </slot>
    </div>

    <div class="footer" v-if="moreText.length">
      <span class="more">{{ moreText }}</span>
      <van-icon name="arrow"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  moreText: {
    type: String,
    default: '默认更多'
  }
})
</script>

<style lang="less" scoped>
  .section {
    padding: 0 15px;
    margin-top: 12px;
    background-color: #fff;

    .header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;

      .title {
        font-size: 20px;
        color: #333;
      }
    }

    .content {
      padding: 8px 0;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 44px;
      line-height: 44px;
      color: #ff9645;
      font-size: 14px;
      font-weight: 600;
    }
  }
</style>
```

### 房屋设施内容区域实现

调用内容详情区域插槽组件，组件上传入`title`和`more-text`，父组件`detail.vue`中引入`detail-facility`

```vue
<!-- detail.vue -->
<detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
```

```vue
<!-- detail/components/detail-facility.vue -->
<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
          <!-- 根据facilitySort来显示对应索引下的数据 -->
          <div class="item" v-if="houseFacility.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <!-- 每个groupName下截取4个数据 -->
              <template v-for="(iten, indey) in item.facilitys.slice(0, 4)" :key="indey">
                <div class="iten">
                  <i class="icon_check icon"></i>
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'

defineProps({
  houseFacility: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.facility-inner {
  padding: 5px 0;
  border-radius: 6px;
  background-color: #f7f9fb;
  font-size: 12px;

  .item {
    display: flex;
    margin: 25px 0;

    .head {
      width: 90px;
      text-align: center;

      img {
        width: 20px;
        height: 20px;
      }
      .text {
        margin-top: 5px;
        color: #000;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .iten {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;

        .icon {
          margin: 0 6px;
        }

        .text {
          color: #333;
        }
      }
    }
  }
}
</style>
```

### Detail 详细页面父组件

```vue
<!-- detail.vue -->
<template>
  <div class="detail top-page">
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow  @click-left="onClickLeft"/>
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos :top-infos="mainPart.topModule"/>
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :priceIntro="mainPart.introductionModule"/>
    </div>

    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">Nevermore毓提供技术支持</div>
    </div>
  </div>
</template>

<script setup>
import DetailSwipe from "./components/detail_01-swipe.vue"
import DetailInfos from "./components/detail_02-infos.vue";
import DetailFacility from "./components/detail_03-facility.vue";
import DetailLandlord from "./components/detail_04-landlord.vue";
import DetailComment from "./components/detail_05-comment.vue";
import DetailNotice from "./components/detail_06-notice.vue";
import DetailMap from "./components/detail_07-map.vue";
import DetailIntro from "./components/detail_08-intro.vue";

import { getDetailInfos } from '@/services';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from "vue";

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// 监听返回按钮点击
const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }
  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
```

## 百度地图 SDK 集成和使用

![地图](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_RncVLCrlTy.png)

### 注册百度地图开发者平台

[官网地址](https://lbsyun.baidu.com/)

1. 创建应用获取 AK

   ![创建应用](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_Hvhz1liDSB.png)

2. 在 vue3 的`index.html`中引用百度地图 API 文件

```javascript
<script type="text/javascript" src="https://api.map.baidu.com/getscript?v=3.0&&type=webgl&ak=您的密钥AK"></script>
```

### 百度地图页面子组件实现

从父组件获取经纬度，实现动态中心点坐标，调用百度地图 API 时一定要在 Vue3 的`onMounted`阶段进行挂载，不然会出错。以下是百度地图的基本 API 使用

- `var map = new BMapGL.Map("container")`：创建地图实例
- `var point = new BMapGL.Point(116.404, 39.915)`：设置中心点坐标
- `map.centerAndZoom(point, 15)`：地图初始化，同时设置地图展示级别

```vue
<!-- detail/components/detail-map.vue -->
<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"
import { onMounted, ref } from "vue";

const props = defineProps({
  position: {
    type: Object,
    default: () => {}
  }
})

const mapRef = ref()
// 要确保在setup挂载时渲染
onMounted(() => {
  // 挂载地图实例
  const map = new BMapGL.Map(mapRef.value);
  // 动态设置中心点坐标
  const point = new BMapGL.Point(props.position.longitude, props.position.latitude);
  // 地图初始化，同时设置地图展示级别
  map.centerAndZoom(point, 15);
  const marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  map.enableScrollWheelZoom(true);   //开启鼠标滚轮缩放
})

</script>

<style lang="less" scoped>
.baidu {
  height: 250px;
}
</style>
```

## Tab 标签页滚动和锚点交互实现

![Tab 标签页滚动和锚点交互实现](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_G-5K496l1d.png)

在上文城市分组列表使用过 Vant 组件库中的`<van-tabs>`组件，这里自定义一个标签页组件

### 自定义 Tab 标签页组件（Vue2）

```vue
<!-- tab-control.vue -->
<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-control-item"
           :class="{ active: index === currentIndex }"
           @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ["tabItemClick"],
    methods: {
      itemClick(index) {
        this.currentIndex = index
        // 子传父
        this.$emit("tabItemClick", index)
      },
      setCurrentIndex(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item.active {
    color: var(--primary-color);
    font-weight: 700;
  }

  .tab-control-item.active span {
    border-bottom: 3px solid var(--primary-color);
    padding: 8px;
  }
</style>
```

### Tab 标签页的滚动效果初步实现

需要引入`hooks`下的窗口滚动事件，这里滚动的是父`Dom`元素

```vue
<!-- detail.vue -->
<template>
  <!-- 父dom要挂载detailRef -->
  <div class="detail top-page" ref="detailRef">
    <tab-control v-if="showTabControl" :titles="['aaa', 'bbb', 'ccc', 'ddd' ]" class="tabs"/>
    <!-- ... -->
  </div>
</template>

<script setup>
import TabControl from "@/components/tab-control/tab-control.vue";
import { computed, ref } from "vue";
import useScroll from "@/hooks/useScroll";
// ...

// tabControll标签页的相关操作
const detailRef = ref()
// 传入参数，监听Dom元素的滚动事件，而不是window
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
</style>
```

### Tab 标签页的锚点定位效果实现

**方法一**

使用[`scrollTo()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo)和获取组件根元素的[`offsetTop()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetTop)，`ref`绑定函数实现

- `scrollTo()`：用于将页面滚动到指定的坐标或指定的 `DOM`元素。它是全局对象 `window` 的方法
- `offsetTop()`：用于获取元素相对于其父元素的上边距的距离

```vue
<!-- detail.vue -->
<template>
  <div class="detail top-page" ref="detailRef">
    <!-- 这里的tabItemClick是由子组件定义好传过来的 -->
    <tab-control
      v-if="showTabControl"
      :titles="['描述', '设施', '房东', '评论', '须知' ]"
      @tabItemClick="tabClick"
      class="tabs"
     />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :priceIntro="mainPart.introductionModule"/>
    </div>
  </div>
</template>

<script setup>
// ...
// tabControl标签页锚点定位效果
const sectionEls = []
const getSectionRef = (value) => {
  // 卸载的时候，将对应的组件根dom元素从对象中删除，此时value为null,value.$el会报错
  if(!value) return
  // 将每个组件的根dom元素存入数组
  sectionEls.push(value.$el)
}
const tabClick = (index) => {
  // 获取对应的dom元素距离顶部的距离(每一个dom元素都有一个距离顶部距离的api即offsetTop)
  let instance = sectionEls[index].offsetTop
  // 除了第一个tab，其他的都要减去44px的高度
  if(index !== 0) {
    // 减去tabControl的高度
    instance = instance - 44
  }
  // 滚动到对应的位置
  detailRef.value.scrollTo({
    top: instance,
    behavior: 'smooth'
  })
}
</script>
```

**方法二**

在每一个组件上加上`name`属性，实现动态获取`tab`标签页的`name`

```vue
<!-- detail.vue -->
<template>
  <div class="detail top-page" ref="detailRef">
    <!-- 这里的tabItemClick是由子组件定义好传过来的 -->
    <tab-control
      v-if="showTabControl"
      :titles="names"
      @tabItemClick="tabClick"
      class="tabs"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :priceIntro="mainPart.introductionModule"/>
    </div>
  </div>
</template>

<script setup>
// tabControl标签页锚点定位效果（方法二--name属性动态获取标签页）
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
// key: name属性的值，value: 对应的组件根dom元素
const getSectionRef = (value) => {
  // 卸载的时候，将对应的组件根dom元素从对象中删除，此时value为null,value.$el会报错
  if(!value) return
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}
// 用于处理滚动时产生的bug
let isClick = false
let currentDistance = -1

const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]

  let distance = el.offsetTop
  if(index !== 0) {
    distance = distance - 44
  }

  isClick = true
  currentDistance = distance

  // 滚动到对应的位置
  detailRef.value.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
}
</script>
```

### 页面滚动匹配 Tab 标签页索引

索引匹配算法（应用场景：歌词匹配、锚点定位）

```javascript
    const values = [100, 300, 500, 800, 1000]
    // 核心代码
    let currentIndex = values.length - 1
    let currentValue = 666
    for (let i = 0; i < values.length; i++) {
      const value = values[i]
      if (value > currentValue) {
        currentIndex = i - 1
        break
      }
    }
    console.log("value:", currentValue, "index:", currentIndex)
```

```vue
<!-- detail.vue -->
<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control
      v-if="showTabControl"
      :titles="names"
      @tabItemClick="tabClick"
      class="tabs"
      ref="tabControlRef"
    />
    <!-- ... -->
</template>

<script setup>
  // 页面滚动，滚动时匹配对应的tabControl的index
  const sectionEls = ref({})
  // ...
  // 用于处理滚动时产生的bug
  if (newValue === currentDistance) {
    isClick = false
  }
  if (isClick) return

  const tabControlRef = ref()
  watch(scrollTop, (newValue) => {
    // 1.获取所有区域的offsetTops
    const els = Object.values(sectionEls.value)
    const values = els.map(el => el.offsetTop)

    // 2.根据newValue，匹配对应的index
    let index = values.length - 1
    for(let i= 0; i < values.length; i++){
      if(values[i] > newValue + 44) {
        index = i - 1
        break
      }
    }

    // 3.将index传入tabControl组件
    tabControlRef.value?.setCurrentIndex(index)
  })
</script>
```

## 保持主页面切换状态

### keep-alive+动态组件实现

缓存主页状态，从而在组件切换时保留其状态而不重新渲染，且不再重复发起网络请求（需要在主页里面使用`Vue2`语法绑定组件的`name`属性，Vue3 中没有这样的属性）

```vue
<!-- app.vue -->
<template>
  <div class="app">
    <!-- 绑定组件的name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading/>
  </div>
</template>
```

```javascript
// home.vue
<script>
  // vue2语法使keep-alive绑定name属性
  export default { name: 'home'}
</script>

```

### 返回主页位置记录

首先要取消主页的`window`监听滚动事件，改为`Dom`元素监听，不然切换时会有`bug`。使用`ref`引用`Dom`元素

```vue
<!-- home.vue -->
<template>
  <div class="home" ref="homeRef">
    <!-- ... -->
  </div>
</template>
<script>
  // vue2语法使keep-alive绑定name属性
  export default { name: 'home'}
</script>
<script setup>
// ...
// 取消window监听滚动，用Dom元素监听滚动替代，使用useScroll封装好的hooks
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
// 监听变化后执行js逻辑用watch
watch(isReachBottom, (newValue) => {
  if (newValue) {
      homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>
```

## 移动端适配

### 视口设置

`maximum-scale=1.0, minimum-scale=1.0, user-scalable=no`视口禁止缩放

```html
<!--index.html-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

### 单位统一转换 px 转 vw

Viewport 布局：Vant 默认使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 `(vw, vh, vmin, vmax)`，推荐使用 [`postcss-px-to-viewport`](https://github.com/evrone/postcss-px-to-viewport) 进行转换。

[`postcss-px-to-viewport`](https://github.com/evrone/postcss-px-to-viewport) 是一款 `PostCSS` 插件，用于将 `px` 单位转化为 `vw/vh` 单位。

安装：`npm install postcss-px-to-viewport -D`

配置 PostCss

```json
// vue cli/vite
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 规定设计稿宽度
      viewportWidth: 375,
      // 排除不需要转换的文件
      selectorBlackList: ["favor"]
    }
  }
};
```
