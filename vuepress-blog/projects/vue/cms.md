---
title: 后台管理项目
icon: edit
category:
  - Vue
tag:
  - 前端项目
  - Vue项目
---

## 项目初始化

搭建 vue3 脚手架

`npm init vue@latest`

安装依赖

`npm install`

css 样式重置（略）

配置路由（略）

配置 pinia 状态管理（略）

配置 axios 网络请求 ts 写法

```typescript
// service/request/index.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYInstanceInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInstanceInterceptors<T>
}

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // 全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }

  request<T = any>(config: HYRequestConfig<T>) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err: any) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err)
          }
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
```

```typescript
// service/index.ts
import HYRequest from './request'
import { BASE_URL1, TIME_OUT1 } from './config'
import { localCache } from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
```

```typescript
// service/config/index.ts
export const BASE_URL1 = 'http://152.136.185.210:5000'
export const TIME_OUT1 = 10000
```

配置生产环境和开发环境（略）

## 按需引入 Element-Plus

安装插件`npm install -D unplugin-vue-components unplugin-auto-import`

然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

**Vite**

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

**Webpack**

```typescript
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

## 实现登录页面

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_EgQqzVLzYM.png)

### 设置 App 宽高铺满屏幕

注意这里不能用%号

```css
<style scoped>
.app {
  /* 不能使用%，因为相对于父元素；vh相对于视口 */
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
}
</style>
```

### 搭建后台管理帐号登录页面

#### Login 父组件设置背景及位置

```vue
<!-- Login.vue -->
<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script setup lang="ts">
import loginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: url(../../assets/img/login-bg.svg);
}
</style>

```

#### 全局图标及 ElMessage 组件等样式引入

图标引入安装：`npm install @element-plus/icons-vue`

ElMessage 组件等样式引入安装：

```typescript
// 图标的全局注册
// global/register-icons.ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

function registerIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons

```

main.ts 中进行注册

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'

// 针对ElMessage和ElLoading等组件引入样式(手动按需引入)
import 'element-plus/theme-chalk/el-message.css'

// 全局注册element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 安装vite-plugin-style-import/consola并配置vite.config.ts（自动按需引入样式）

createApp(App).use(router).use(pinia).use(registerIcons).mount('#app')
```

#### 实现登录面板父组件

涉及到的 Element-Plus 组件有`el-tabs(选项卡)`、`el-check(记住密码勾选框)`、`el-button(立即登录)`、`el-link(记住密码/忘记密码)`、`el-icon(选项卡图标)`

tabs 中插入图标需要用到`label`插槽`<template #label>...</template>`

tabs 中通过 v-model 绑定选项卡的 name

```vue
<!-- login-panel.vue -->
<template>
  <div class="login-panel">
    <!-- 顶部标题 -->
    <h1 class="title">后台管理系统</h1>

    <!-- tabs标签页 -->
    <div class="tabs">
      <el-tabs v-model="activeName" type="border-card" stretch="true">
        <el-tab-pane label="帐号登录" name="account">

          <!-- 图标插槽 -->
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>

          <!-- pane-account子组件 -->
          <pane-account ref="accountRef"/>
        </el-tab-pane>

        <el-tab-pane label="手机登录" name="phone">
          <!-- 图标插槽 -->
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <div class="text">手机登录</div>
            </div>
          </template>
          <div>手机登录</div>
          <div>验证码</div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large"></el-checkbox>
      <el-link type="primary" href="">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import paneAccount from './pane-account.vue'

const activeName = ref('account')
const isRemPwd = ref(false)
const accountRef = ref<InstanceType<typeof paneAccount>>()

// 按钮监听
const handleLoginBtnClick = () => {
  if (activeName.value === 'account') {
    // 父组件调用子组件方法
    accountRef.value?.loginAction()
  } else {
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;

  .title {
    text-align: center;
  }

  .label {
    display: flex;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
```

#### 封装面板中登录表单子组件

涉及到的 Element-Plus 组件有`el-form`、`el-input`、`el-message`

`form`的校验规则需要使用到`FormRules`

`form`的通过验证需要使用`formRef.value.validate()`

`defineExpose`将子组件的用户名/密码暴露给父组件，从而实现登录逻辑（涉及 pinia、axios）

```typescript
<!-- pane-account.vue -->
<template>
  <div class="account">
    <el-form :model="account" label-width="60px" size="large" :rules="accountRules" status-icon ref="formRef">
        <el-form-item label="帐号" prop="username">
            <el-input v-model="account.username" placeholder="请输入帐号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="account.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import type { ElForm, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'

// 定义account数据
const account = reactive<IAccount>({
  username: '',
  password: ''
})

// 定义校验规则
const accountRules: FormRules = {
  username: [
    { required: true, message: '必须输入用户名', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6～20位以小写字母或数字开头', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur'},
    { min: 3, max: 11, message: '长度必须在3~11个字符', trigger: 'blur'}
  ]
}

// 执行帐号登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid: any) => {
    if(valid) {
        const username = account.username
        const password = account.password

        loginStore.loginAccountAction({ username, password })
    } else {
        ElMessage.error('Oops, 请输入正确的格式.')
    }
  })
}
// 暴露给父组件
defineExpose({
    loginAction
})

</script>

<style lang="less" scoped>

</style>
```

### 实现点击登录按钮逻辑

#### 封装 IAccount 对象类型

```typescript
// types/login.ts
export interface IAccount {
    username: string,
    password: string
}

// types/index.ts(统一导出)
export * from './login'
```

#### 封装 axios 登录请求

```typescript
import hyRequest from ".."
import type { IAccount } from "@/types"

export function accountLoginRequest(account: IAccount) {
    return hyRequest.post({
        url: '/login',
        data: account
    })
}
```

#### 使用 pinia 存储请求数据(在`pane-account`组件中调用)

```typescript
// store/index.ts
// 初始化pinia
import { createPinia } from "pinia";

const pinia = createPinia()

export default pinia
```

```typescript
// store/login/login.ts
import { defineStore } from "pinia";
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        // token: localStorage.getItem('token') ?? '',
        token: localCache.getCache('token') ?? '',
        username: ''
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            const loginResult = await accountLoginRequest(account)
            console.log("登录成功");
            this.id = loginResult.data.id
            this.token = loginResult.data.token
            this.username = loginResult.data.username

            // 进行本地缓存
            // localStorage.setItem('token', this.token)
            localCache.setCache('token', this.token)
        }
    }
})

export default useLoginStore
```

#### 封装本地缓存 token 工具（localStorage、sessionStorage）

```typescript
// utils/cache.ts
enum CacheType {
  local = 'local',
  session = 'session'
}

class MyCache {
  storage: Storage

  // 判断是localStorage还是sessionStorage
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new MyCache(CacheType.local)
const sessionCache = new MyCache(CacheType.session)

export { localCache, sessionCache }
```

#### 登录拦截（路由导航守卫）

`router.beforeEach(to, from)`

```typescript
// router/index.ts
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // ...
})

router.beforeEach((to, from) => {
  const token = localCache.getCache('token')

  if(to.path === '/main' && !token) {
      return '/login'
  }
})

export default router
```

### 实现记住密码

父组件将`isRemPwd`作为参数传入子组件登录逻辑，判断`isRemPwd`的布尔值，来选择是否存入或删除`LocalStore`本地缓存，再获取本地缓存将值赋值给初始化的`username`和`password`进行回显。将勾选框是否选中也作为`LocalStore`缓存存入。

```typescript
// 父组件login-panel
// ...
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue)
})

// ...
// 按钮监听
const handleLoginBtnClick = () => {
  if (activeName.value === 'account') {
    // 父组件调用子组件方法
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log('手机登录')
  }
}
</script>
```

```typescript

// 定义account数据
const account = reactive<IAccount>({
  username: localCache.getCache('username') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 执行帐号登录逻辑
// ...
function loginAction(isRemPwd: boolean) {
  formRef.value?.validate((valid: any) => {
    if(valid) {
        const username = account.username
        const password = account.password

        // 调用store中的loginAccountAction(pinia)
        loginStore.loginAccountAction({ username, password }).then((res) => {
          // 登录成功后记住密码
          if(isRemPwd) {
            localCache.setCache('username', username)
            localCache.setCache('password', password)
          } else {
            localCache.deleteCache('username')
            localCache.deleteCache('password')
          }
        })
    } else {
        ElMessage.error('错误, 请输入正确的格式！')
    }
  })
}
```

### 实现获取登录用户详细信息（包括角色权限菜单）

#### 封装 axios 接口请求

```typescript
// 获取用户详细信息
export function getUserInfoById(id: number) {
    return hyRequest.get({
        url: `/users/${id}`,
        // headers: {
        //     Authorization: 'Bearer ' + localCache.getCache('token')
        // }
    })
}

// 获取角色权限信息
export function getUserMenusByRoleId(id: number) {
    return hyRequest.get({
        url: `/role/${id}/menu`,
    })
}
```

#### 使用 pinia 存储请求数据

```typescript
interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        token: localCache.getCache('token') ?? '',
        userInfo: {},
        userMenus: {}
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // 1. 帐号登录，axios获取token等信息
            const loginResult = await accountLogin(account)
            const id = loginResult.data.id
            this.token = loginResult.data.token

            // 2. 进行本地缓存（使用封装的cache工具）
            localCache.setCache('token', this.token)

            // 3.获取登录用户的详细信息（role角色信息）
            const userInfoResult = await getUserInfoById(id)
            this.userInfo = userInfoResult.data

            // 4.根据角色请求用户的权限（菜单menus）
            const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
            this.userMenus = userMenusResult.data

            //  页面跳转
            router.push('/main')
        }
    }
})

export default useLoginStore
```

## 实现主页左侧导航栏

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_Omxnqoo1Oj.png)

### 整体容器布局

使用`el-container`包裹侧边栏容器`el-aside`以及包裹`el-header`顶栏容器和`el-main`主要区域容器。

```vue
<template>
  <div class="main">
    <el-container class="main-content">
      // 左侧导航栏
      <el-aside width="210px">
        <main-menu/>
      </el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>
          // 路由占位
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.main {
  color: red;
  height: 100%;

  .main-content {
    height: 100%;

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-main {
      background-color: #f0f2f5;
    }
  }
}
</style>
```

### 实现左侧导航栏静态布局

使用`elementUI`中菜单`menu`组件由`el-menu`、`el-sub-menu`（需要使用插槽）、`el-menu-item`组成。

```vue
<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="图标" />
      <h2 class="title">后台管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultValue"
        :collapse="isFold"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <el-sub-menu index="1">
          <!-- 插槽 -->
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item>用户管理</el-menu-item>
          <el-menu-item>部门管理</el-menu-item>
          <el-menu-item>菜单管理</el-menu-item>
          <el-menu-item>角色管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
```

### 实现左侧导航栏动态展示效果

首先将用户详细信息，权限信息缓存处理（刷新时依然存在），然后使用`<template v-for="">`、`mustache`表达式动态遍历即可。

```typescript
// 登录时store缓存用户权限信息
state: (): ILoginState => ({
    // ...
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? []
}),
actions: {
    async loginAccountAction(account: IAccount) {
        // ....
        // 进行用户权限信息缓存
        localCache.setCache('userInfo', this.userInfo)
        localCache.setCache('userMenus', this.userMenus)

        //  页面跳转
        router.push('/main')
    }
}
```

```vue
<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="图标" />
      <h2 class="title">后台管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultValue"
        :collapse="isFold"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="item in userMenus" :key="item.id">
          <!-- 子菜单 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <span>{{ item.name }}</span>
            </template>

            <!-- 子菜单的每一项 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleItemClick(subItem)">{{ subItem.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login';

const loginStore = useLoginStore();
const userMenus = loginStore.userMenus

function handleItemClick(subItem: any) {
  const url = subItem.url
  router.push(url)
}
</script>
```

### 导航栏图标的动态组件（细节处理）

服务器返回的是字符串`el-icon-monitor`，需要使用动态组件`componet`来处理图标字符串并且使用`split`函数分隔字符串。

```vue
<!-- 子菜单 -->
<el-sub-menu :index="item.id + ''">
  <template #title>
    <el-icon>
      <component :is="item.icon.split('-icon-')[1]"/>
    </el-icon>
    <span>{{ item.name }}</span>
  </template>
  //.......
</el-sub-menu>
```

### 导航栏注册所有静态路由（有缺陷）

当用户没有权限时，可以手动在地址栏输入 url 去访问没有权限的页面。后面使用动态路由。

```typescript
{
  path: '/main',
  component: () => import('../views/main/Main.vue'),
  children: [
    {
      path: '/main/analysis/overview',
      component: () => import('../views/main/analysis/overview/overview.vue')
    },
    {
      path: '/main/analysis/dashboard',
      component: () => import('../views/main/analysis/dashboard/dashboard.vue')
    },
    {
      path: '/main/system/role',
      component: () => import('../views/main/system/role/role.vue')
    },
    {
      path: '/main/system/user',
      component: () => import('../views/main/system/user/user.vue')
    },
    // ...
  ]
},
```

## 实现主页头部面包屑

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_Or2gIT2k8K.png)

### 搭建整体布局

```vue
<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <el-icon><Fold /></el-icon>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="info">个人信息</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
```

### 实现头部左侧图标点击折叠功能

由`main-header`子组件通过`defineEmits`将折叠状态`isFold`传入给父组件`main`中的`el-aside`从而控制其宽度。

```vue
<!-- main-header.vue -->
<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"/>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="info">个人信息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 1.内部自定义事件
const emit = defineEmits(['foldChange'])

// 2.记录折叠状态
const isFold = ref(false)
function handleMenuIconClick() {
  // 3.子组件内部改变状态
  isFold.value = !isFold.value

  // 4.将事件和状态传递给父组件
  emit('foldChange', isFold.value)
}
</script>
```

父组件在定义`main-header`上通过`@fold-change`接收子组件传来的`emit('foldChange', isFold.value)`。

```vue
<!-- main.vue -->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <!-- 父传子（defineProps） -->
        <main-menu :is-fold="isFold"/>
      </el-aside>

      <el-container>
        <el-header height="50px">
          <!-- emit子传父（defineEmits） -->
          <main-header @fold-change="handleFoldChange"/>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue';

const isFold = ref(false)
function handleFoldChange(isFoldValue: boolean) {
  isFold.value = isFoldValue
}
</script>
```

父组件通过子组件的`defineProps`将`:is-fold="isFold"`折叠状态传入到`el-menu`的属性`:collapse`上，从而控制`menu`菜单的折叠。

```vue
<!-- main-menu.vue -->
<template>
  <div class="main-menu">
    // ....
    <div class="menu">
      <el-menu
        // ....
        :collapse="isFold"
      >
      // ....
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
</script>
```

### 实现头部右侧个人信息功能

#### 静态布局搭建（包含注销功能）

使用`el-dropdown`下拉菜单组件，这里要调节下拉框的样式需要加`:global`（原因：它不在 app 父组件下，它在与 app 同级的组件 el-popper-container 下）

```vue
<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon><bell /></el-icon>
      </span>
      <span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><Postcard /></el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" class="avatar" src="https://xumingyu2018.github.io/avatar.png" />
          <span class="name">{{ loginStore.userInfo.name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleCloseFilled /></el-icon>
              注销
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'
import useLoginStore from '@/store/login/login'

const router = useRouter()
function handleExitClick() {
  localCache.deleteCache('token')
  localCache.deleteCache('userInfo')
  localCache.deleteCache('userMenus')
  router.push('/login')
}

// 显示用户名称信息
const loginStore = useLoginStore()
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
}

.operation {
  display: inline-flex;
  margin-right: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    margin-left: 8px;
  }
}

.info {
  // 使用global的原因是因为它不在app父组件下，它在与app同级的组件el-popper-container下
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
```

## 动态路由

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_Or2gIT2k8K.png)

本文采用基于菜单的动态路由管理实现（结合 coderwhy 全局工具）。

### 安装自动化生成路由配置信息和 vue 页面的工具

`npm install coderwhy -g`

### 使用 coderwhy 工具

例：`coderwhy add3page_setup list -d src/views/main/story/list`

`add3page_setup`：针对 vue3 的 setup 语法。

`-d`：生成指定文件的地址。

`list`：生成的路由名字和 vue 页面名字。

### 编写菜单映射路由工具类

1. 根据菜单映射对应的路由。
2. 进入主页匹配第一个菜单的路由。

```typescript
// utils/map-menus.ts
import type { RouteRecordRaw } from "vue-router"

// 自动化加载所有的路由（也可以收到写死）
function loadLocalRoutes() {
  // 1.加载所有的模板
  const modules: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })

  // 2.遍历所有的模板为路由对象
  const routes: RouteRecordRaw[] = []
  for (const key in modules) {
    const route = modules[key].default
    routes.push(route)
  }
  return routes
}

// 记录第一个菜单信息
export let firstMenu: any = null
/**
 * 映射菜单到路由
 * @param menus 菜单
 * @returns 路由
 */
export function mapMenuToRoutes(menus: any[]) {
    // 1.加载所有的路由对象
    const loadRoutes = loadLocalRoutes()

    // 2.根据菜单获取需要添加的路由对象
    const finalRoutes: RouteRecordRaw[] = []
    for(const menu of menus) {
        for(const submenu of menu.children) {
            const route = loadRoutes.find(route => route.path === submenu.url)
            if(route) finalRoutes.push(route)

            // 记录第一个被匹配菜单
            if(!firstMenu && route) firstMenu = submenu
        }
    }

    return finalRoutes
}
```

### (有弊端)登录时调用工具类

在发送登录请求时，使用`router.addRoute('main', route)`将菜单信息`userMenus`里的路由和全部注册进`loadLocalRoutes`匹配时调用。

弊端：刷新时路由注册不了，代码重新执行时，动态路由就加载不了，因为只有点击登录按钮时才会执行该代码。

```typescript
// store/login/login.ts
interface ILoginState {
    // ...
    userMenus: any
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        // ...
        userMenus: localCache.getCache('userMenus') ?? []
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // ...
            // 6.根据菜单menu动态加载路由(使用工具类map-menus.ts)，刷新时这段代码不会重新执行，因为只有点击登录按钮时才会执行该代码。
            const routes = mapMenuToRoutes(this.userMenus)
            // 这里的'main'是根据路由里的name属性来的
            routes.forEach(route => router.addRoute('main', route))

            //  页面跳转
            router.push('/main')
        }
    }
})

export default useLoginStore
```

`router.addRoute('main', route)`里的 main 是需要在路由表中设置`name`属性。

```typescript
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ...
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/Main.vue'),
      // 以下替换成动态注册路由的方法(也可以不使用工具类，在这里全部路由写死)
      // children: [
      //   {
      //     path: '/main/analysis/overview',
      //     component: () => import('../views/main/analysis/overview/overview.vue')
      //   },
      //   {
      //     path: '/main/analysis/dashboard',
      //     component: () => import('../views/main/analysis/dashboard/dashboard.vue')
      //   },
      // ]
    },
    // ....
  ]
})
export default router
```

### (改进)使用全局加载数据方法

不再仅限于在登录时调用`mapMenuToRoutes`工具类，而在全局当刷新页面时调用。

```typescript
const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        token: '',
        userInfo: {},
        userMenus: []
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // ....
            router.push('/main')
        },

        // 解决刷新页面后，动态路由丢失的问题(不再是loginAccountAction登录时才执行)
        loadLocalDataAction() {
            // 用户进行刷新时默认加载数据
            const token = localCache.getCache('token')
            const userInfo = localCache.getCache('userInfo')
            const userMenus = localCache.getCache('userMenus')

            if(token && userInfo && userMenus) {
                this.token = token
                this.userInfo = userInfo
                this.userMenus = userMenus
                // 6.根据菜单menu动态加载路由(使用工具类map-menus.ts)
                const routes = mapMenuToRoutes(userMenus)
                // 这里的'main'是根据路由里的name属性来的
                routes.forEach(route => router.addRoute('main', route))
            }
        }
    }
})
```

在 App 组件中调用`loadLocalDataAction`方法，注意：此方法一定要放在`app.router`之前执行。

```typescript
const app = createApp(App)
app.use(pinia)
const loginStore = useLoginStore()
loginStore.loadLocalDataAction()

app.use(router)
app.use(registerIcons)
app.mount('#app')
```

可以将`loadLocalDataAction`方法封装进`pinia`导出的地方，从而使用`app.use()`方法注册进全局 App 组件。

```typescript
//store/index.js
import { createPinia } from "pinia";
import useLoginStore from "./login/login";

const pinia = createPinia()

function registerStore(app: App<Element>) {
    app.use(pinia)

    // 加载本地缓存数据
    const loginStore = useLoginStore()
    loginStore.loadLocalDataAction()
}

export default registerStore

// App.vue
import store from './store'

app.use(store)
app.use(router)
app.use(registerIcons)
app.mount('#app')
```

### 进入主页时匹配第一个菜单

从`mapMenuToRoutes`工具类中获取`firstMenu`第一个菜单，在路由导航守卫中判断。

```typescript
import { firstMenu } from '@/utils/map-menus'

const router = createRouter({
  history: createWebHashHistory(),
  routes: // ....
})

router.beforeEach((to, from) => {
  // ....
  if(to.path === '/main') {
    return firstMenu.url
  }
})

export default router
```

### 刷新页面时，菜单默认值问题

根据路由的`url`路径，映射对应菜单`menu`（需要一个路由映射菜单的工具类），从而获得`menu`的`id`属性，将`el-menu`组件属性`:default-active="defaultValue"`的`defaultValue`动态绑定给`menu.id`。

```typescript
// utils/map-menus.ts
/**
 * 映射路由到菜单工具类
 * @param path 路由url
 * @param menus 菜单
 * @returns 菜单
 */
export function mapPathToMenu(menus: any[], path: string) {
    for (const menu of menus) {
      for (const submenu of menu.children) {
        if (path === submenu.url) return submenu
      }
    }
}
```

```vue
<!-- main-menu.vue -->
<template>
  <div class="main-menu">
    // ....
    <div class="menu">
      <el-menu
        :default-active="defaultValue"
        // ....
      >
      // .....
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapPathToMenu } from '@/utils/map-menus';
// .....

// 1.存放动态的菜单
const loginStore = useLoginStore();
const userMenus = loginStore.userMenus

// 3.页面刷新时，根据当前的路由地址，设置默认选中的菜单项(默认值问题)
const route = useRoute()
const defaultValue = computed(() => {
  const currentMenu = mapPathToMenu(userMenus, route.path)
  return currentMenu.id + ''
})
</script>
```

## 实现面包屑功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_OrlIEIPhXw.png)

### 搭建面包屑页面

使用`el-breadcrumb`搭建面包屑页面，使用工具类`mapPathToBreadCrumb`将菜单`menu`以及子菜单`submenu`放入`breadcrumb`数组，用于动态遍历`el-breadcrumb`。

```vue
<!-- header-crumb.vue -->
<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
        <template v-for="(item, index) in breadcrumb" :key="index">
            <el-breadcrumb-item :to=item.url>{{ item.name }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { mapPathToBreadCrumb } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import useLoginStore from '@/store/login/login'
import { computed } from 'vue'

const route = useRoute()
const loginStore = useLoginStore()

// 路径改变时，重新计算面包屑
const breadcrumb = computed(() => {
    return mapPathToBreadCrumb(loginStore.userMenus, route.path)
})
</script>
```

### 路由映射面包屑工具类

`mapPathToBreadCrumb`工具类

```typescript
// map-menus.ts
export function mapPathToBreadCrumb(menus: any[], path: string) {
    const breadCrumb: any[] = []

    for (const menu of menus) {
      for (const submenu of menu.children) {
        if (path === submenu.url){
            breadCrumb.push(menu)
            breadCrumb.push(submenu)
            return breadCrumb
        }
      }
    }
}
```

### 解决点击面包屑跳到目录下的第一个子目录问题

`el-breadcrumb`的`:to=item.url`属性问题，修改工具类`mapMenuToRoutes`将根目录路径重定向到根目录下的第一个子目录。

```typescript
export function mapMenuToRoutes(menus: any[]) {
    // ...
    const finalRoutes: RouteRecordRaw[] = []
    for(const menu of menus) {
        for(const submenu of menu.children) {
            // ....
            if(route) {
                // 给route的顶层菜单增加重定向功能（但是只需要添加一次即可）
                if(!finalRoutes.find((item) => item.path === route.path)) {
                    finalRoutes.push({ path: menu.url, redirect: route})
                }
                finalRoutes.push(route)
            }
            // 记录第一个被匹配菜单
            if(!firstMenu && route) firstMenu = submenu
        }
    }

    return finalRoutes
}
```

## 实现主页中部 main 页面

主体页面`main`中包括三个部分表达搜索框`search`、内容部分的头部及表格数据。

### 实现 search 表单搜索框界面

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_8g3h9E3Wpj.png)

#### 搭建静态 search 表单搜索框界面

通过`layout`布局组件中的`el-row`和`el-col`对每行每列做布局，使用`el-form`表单组件包含的`el-input`输入框、`el-select`下拉选择以及`el-date-picker`日期选择器实现。

```vue
<!-- user/cpns/user-search.vue -->
<template>
  <div class="search">
    <el-form label-width="120px" size="large">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="用户名">
                    <el-input placeholder="请输入查询的用户名"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="真实姓名">
                    <el-input placeholder="请输入查询的真实姓名"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="电话号码">
                    <el-input placeholder="请输入查询的电话号码"></el-input>
                </el-form-item>
            </el-col>

            <!-- 另起一行 -->
            <el-col :span="8">
                <el-form-item label="状态">
                    <el-select placeholder="请选择查询的状态" style="width: 100%;">
                        <el-option label="启用" :value="1" />
                        <el-option label="禁用" :value="0" />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="创建时间">
                    <el-date-picker
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                    />
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>

    <div class="btns">
        <el-button icon="Refresh" size="large">重置</el-button>
        <el-button icon="Search" size="large" type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.search {
    background-color: #fff;
    padding: 20px;

    .el-form-item {
        padding: 20px;
        margin-bottom: 0;
    }

    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
}
</style>
```

对日期选择器里的日期实现国际化。[Element Plus](https://element-plus.gitee.io/zh-CN/guide/i18n.html) 提供了一个 Vue 组件 [ConfigProvider](https://element-plus.gitee.io/en-US/component/config-provider.html) （`el-config-provider`）用于全局配置国际化的设置。（需要包裹 App 组件）并在`env.d.ts`中声明`.mjs`文件

```vue
<!-- App.vue -->
<template>
    <div class="app">
      <!-- 国际化配置（将组件中的英文转为中文->日期组件） -->
      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>
    </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

// env.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}

// 声明国际化配置文件mjs
declare module '*.mjs'
```

#### 实现重置功能

`el-form`表单组件要想输入值，需要使用`reactive()`和`:model`绑定值，并且在相应的组件如`el-input`使用`v-model`绑定`reactive`里面对应的值。重置值调用`formRef.value?.resetFields()`方法（`formRef`绑定到`el-form`上，`el-form-item`上添加属性`prop="xxx"`即可实现）

```typescript
<template>
  <div class="search">
    <el-form **:model="searchForm" ref="formRef"** label-width="120px" size="large">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="用户名" prop="name">
                    <el-input **v-model="searchForm.name"** placeholder="请输入查询的用户名"></el-input>
                </el-form-item>
            </el-col>
       </el-row>
    </el-form>
    // ....
    <div class="btns">
        <el-button icon="Refresh" size="large" @click="handleResetClick()">重置</el-button>
        <el-button icon="Search" size="large" type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";

const searchForm = reactive({
    name: '',
    realname: '',
    cellphone: '',
    enable: 1,
    createAt: ''
})

// 重置功能
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
    // 方法一
    // searchForm.name = ''
    // searchForm.realname = ''
    // searchForm.cellphone = ''
    // searchForm.enable = 1
    // searchForm.createAt = ''

    // 方法二
    formRef.value?.resetFields()
}
</script>
```

### 实现展示用户列表功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_QJax7-SQRM.png)

#### 使用 pinia 发起获取用户数据请求

编写`axios`请求接口（使用了`hyRequest`进行了封装，直接调用即可）

```typescript
import hyRequest from "@/service";

// 获取用户列表数据
export function getUserListData() {
    return hyRequest.post({
        url: '/users/list',
        data: {
            offset: 0,
            size: 10
        }
    })
}
```

编写`pinia`进行数据存储

```typescript
import { getUserListData } from "@/service/main/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from "./type";

const useSystemStore = defineStore('system', {
    // 使用typescript进行类型限制
    state: (): **ISystemState** => ({
        usersList: [],
        usersTotalCount: 0
    }),
    actions: {
        async getUsersListAction() {
            // 调用axios请求
            const userListResult = await getUserListData()
            const { totalCount, list } = userListResult.data
            // 存入store中
            this.usersList = list
            this.usersTotalCount = totalCount
        }
    }
})

export default useSystemStore
```

使用`typescript`进行类型限制

```typescript
// type.ts
export interface IUser {
    id: number
    name: string
    realname: string
    cellphone: number
    enable: number
    departmentId: number
    roleId: number
    createAt: string
    updateAt: string
}

export interface ISystemState {
    usersList: IUser[]
    usersTotalCount: number
}
```

用户列表页面（`user-content.vue`）中调用`pinia`中的`getUsersListAction`，从而发起请求。

```typescript
// user-content.vue
<script setup>
import useSystemStore from '@/store/main/system/system';
import { storeToRefs } from 'pinia';

// 1.发起action，请求usersList数据
const systemStore = useSystemStore()
systemStore.getUsersListAction()

// 2.获取usersList数据(响应式数据：上面代码是异步的，当数据还没拿到是，这一句不起作用，需要用storeToRefs)
const { usersList } = storeToRefs(systemStore)
</script>
```

#### 初步搭建表格数据页面

使用`el-table`及`el-table-column`搭建表格数据页面，`prop`对应请求数据中相应的属性，`type`为`selection`展示勾选框，`type`为`index`展示索引值。`el-table-column`可作为插槽传入其它组件，`:data`传入请求返回的数据。

```typescript
<template>
    <div class="content">
      <div class="header">
        <h2 class="title">用户列表</h2>
        <el-button type="primary">新建用户</el-button>
      </div>
      <div class="table">
        <el-table :data="usersList" border style="width: 100%">
            <!-- 勾选框 -->
            <el-table-column align="center" type="selection" width="50px"/>
            <!-- 序号 -->
            <el-table-column align="center" type="index" label="序号" width="60px"/>

            <el-table-column align="center" prop="name" label="用户名" width="150px" />
            <el-table-column align="center" prop="realname" label="真实姓名" width="150px"/>
            <el-table-column align="center" prop="cellphone" label="电话号码" width="150px"/>
            <el-table-column align="center" prop="enable" label="状态" width="100px"/>
            <el-table-column align="center" prop="createAt" label="创建时间" />
            <el-table-column align="center" prop="updateAt" label="更新时间" />

            <el-table-column align="center" label="操作" width="150px">
                <el-button type="primary" icon="Edit" size="small" text>编辑</el-button>
                <el-button type="danger " icon="Delete" size="small" text>删除</el-button>
            </el-table-column>
        </el-table>
      </div>
      <div class="pagination">分页</div>
    </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system';
import { storeToRefs } from 'pinia';

// 1.发起action，请求usersList数据
const systemStore = useSystemStore()
systemStore.getUsersListAction()

// 2.获取usersList数据(响应式数据：上面代码是异步的，当数据还没拿到是，这一句不起作用，需要用storeToRefs)
const { usersList } = storeToRefs(systemStore)
console.log(usersList);
</script>

<style lang="less" scoped>
.content {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title {
        font-size: 22px;
    }
}

.table {
    :deep(.el-table__cell) {
        padding: 12px 0;
    }

    .el-button {
        margin-left: 0;
        padding: 5px 8px;
    }
}

</style>
```

#### 使用作用域插槽处理表格数据中的状态以及时间格式化

科普：作用域插槽（子组件提供内容（数据），在父组件中展示，延伸了子组件的作用域），插槽（父组件提供内容，在子组件中展示）

**处理状态属性**

```typescript
// ....
<el-table-column align="center" prop="enable" label="状态" width="100px">
    <!-- 作用域插槽 -->
    <template #default="{ row }">
        <el-button size="small" :type="row.enable ? 'primary' : 'danger'" plain>
            {{ row.enable ? '启用' : '禁用' }}
        </el-button>
    </template>
    //<template #default="scope">
    //    <el-button size="small" :type="scope.row.enable ? 'primary' : 'danger'" plain>
    //        {{ scope.row.enable ? '启用' : '禁用' }}
    //    </el-button>
    //</template>
</el-table-column>
// ....
```

**处理时间格式**

安装 dayjs：`npm install dayjs`

封装时间格式化工具`format.ts`

```typescript
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatUTC(utcString: string, format = 'YYYY-MM-DD HH:mm:ss') {
    // utcOffset东八区偏移8小时
    return dayjs.utc(utcString).utcOffset(8).format(format)
}
```

在作用域插槽中使用`formatUTC`

```typescript
// ...
<el-table-column align="center" prop="createAt" label="创建时间" >
    <template #default="scope">
        {{ formatUTC(scope.row.createAt) }}
    </template>
</el-table-column>
// ...
<script>
import { formatUTC } from '@/utils/format';
// ...
</script>
```

### 实现分页功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_N1AqUvRrLC.png)

#### 从请求接口中获取`offset`和`size`分页数据。

```typescript
import hyRequest from "@/service";

// 获取用户列表数据
export function getUserListData(queryInfo: any) {
    return hyRequest.post({
        url: '/users/list',
        data: queryInfo
    })
}
```

#### 参数传递

```typescript
const useSystemStore = defineStore('system', {
    // ...
    actions: {
        async getUsersListAction(queryInfo: any) {
            // 调用axios请求
            const userListResult = await getUserListData(queryInfo)
            const { totalCount, list } = userListResult.data
            // ...
        }
    }
})
export default useSystemStore
```

#### 使用`el-pagination`完成页面搭建。

```typescript
// user-content.vue
// ....
<div class="pagination">
  <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30]"
      :small="small"
      layout="sizes, prev, pager, next, jumper, total"
      :total="usersTotalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</div>

<script setup>
import { ref } from 'vue';

// 1.发起action，请求usersList和分页数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchUserListData()

// 2.获取usersList和usersTotalCount数据(响应式数据：上面代码是异步的，当数据还没拿到是，这一句不起作用，需要用storeToRefs)
const { usersList, usersTotalCount } = storeToRefs(systemStore)

// 3.分页功能
function handleSizeChange() {
    fetchUserListData()
}

function handleCurrentChange() {
    fetchUserListData()
}

// 4.定义函数，用于发送网络请求
function fetchUserListData() {
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const info = { size, offset}

    // 发起网络请求
    systemStore.getUsersListAction(info)
}
</script>

<style lang="less" scoped>
.pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
</style>
```

### 实现查询用户功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_-2ElEwJZek.png)

#### 通过事件将表单内容传递给父组件

子传父：使用`const emit = defineEmits('xxx')`，`emit('xxx')`

```typescript
// user-search.vue
<template>
    // ...
    <div class="btns">
        <el-button icon="Refresh" size="large" @click="handleResetClick()">重置</el-button>
        <el-button icon="Search" size="large" type="primary" @click = "handleQueryClick()">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";

const emit = defineEmits(['queryClick', 'resetClick'])

const searchForm = reactive({
    name: '',
    realname: '',
    cellphone: '',
    enable: 1,
    createAt: ''
})
// 重置功能
// ...

// 搜索功能
function handleQueryClick() {
    // 通过事件抛出（子传父）
    emit('queryClick', searchForm)
}
</script>
```

#### 父组件接受事件并调用另一个子组件暴露的函数

子传父也可以用`defineExpose()`，这里`user-content`子组件使用此函数接受父组件（由`user-search`传过来）传过来的`searchForm`信息。

```typescript
// user.vue
<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <user-content ref="contentRef"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userContent from './cpns/user-content.vue'
import userSearch from './cpns/user-search.vue'

const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(searchInfo: any) {
  contentRef.value?.fetchUserListData(searchInfo)
}

function handleResetClick() {
  contentRef.value?.fetchUserListData()
}
</script>

<style lang="less" scoped>

</style>
```

```typescript
<template>
  // ...
</template>

<script setup>
// ...
// 4.定义函数，用于发送网络请求
function fetchUserListData(formData: any = {}) {
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const pageInfo = { size, offset}

    const queryInfo = { ...formData, ...pageInfo }
    // 发起网络请求
    systemStore.getUsersListAction(queryInfo)
}

// 暴露函数给父组件
defineExpose({
    fetchUserListData
})
</script>
```

### 实现删除用户功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_JyyGiGUc-9.png)

通过作用域插槽获取当前点击删除按钮那一行的用户`id`，即`scope.row.id`，将`id`传入用户删除接口。

#### 封装删除用户数据接口

```typescript
import hyRequest from "@/service";
// ...
// 删除用户数据
export function deleteUserData(id: number) {
    return hyRequest.delete({
        url: `/users/${id}`
    })
}
```

#### pinia 中调用接口的 actions

```typescript
const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        // ...
    }),
    actions: {
        // ...
        // 删除用户数据
        async deleteUserDataAction(id: number) {
            // 调用axios请求
            const res = await deleteUserData(id)
            // 重新请求数据刷新页面
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})

export default useSystemStore
```

#### 页面中获取 id 传入 actions

```typescript
<template>
    <div class="content">
      // ...
      <div class="table">
        <el-table :data="usersList" border style="width: 100%">
            // ...
            <el-table-column align="center" label="操作" width="150px">
                <template #default="scope">
                    <el-button type="primary" icon="Edit" size="small" text>编辑</el-button>
                    <el-button type="danger" icon="Delete" size="small" text @click="handleDeleteClick(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system';
// ...
const systemStore = useSystemStore()

// 删除用户数据
function handleDeleteClick(id) {
    systemStore.deleteUserDataAction(id)
}

</script>
```

### 实现新增用户功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_YsaeThWQO2.png)

由于新建用户按钮在`user-content.vue`页面中，与`user-modal.vue`是兄弟组件，需要用到组件通信，由`user-content.vue`发起事件`defineEmits()`

#### 初步搭建模态框页面

使用`el-dialog`组件实现，`v-model`绑定模态框的`dialogVisible`可见值，封装到函数中，将其暴露给父组件。

```typescript
// user-modal.vue
<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
    <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="formData.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="realname">
                <el-input v-model="formData.realname" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formData.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="cellphone">
                <el-input v-model="formData.cellphone" placeholder="请输入电话号码"></el-input>
            </el-form-item>
            <el-form-item label="选择角色" prop="roleId">
                <el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%"></el-select>
            </el-form-item>
            <el-form-item label="选择部门" prop="departmentId">
                <el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%"></el-select>
            </el-form-item>
        </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const dialogVisible = ref(false)
const formData = reactive({
    name: '',
    realname: '',
    password: '',
    cellphone: '',
    roleId: '',
    departmentId: ''
})

function setDialogVisible() {
  dialogVisible.value = true
}

defineExpose({
    setDialogVisible
})
</script>

<style lang="less" scoped>

</style>
```

**点击新建用户按钮发起组件通信**

使用`defineEmits`发起点击事件传递给父组件`user.vue`。

```typescript
// user-content.vue
<template>
    <div class="content">
      <div class="header">
        <h2 class="title">用户列表</h2>
        <el-button type="primary" @click="handleNewData">新建用户</el-button>
      </div>
      <div class="table">
        <el-table :data="usersList" border style="width: 100%">
           // ...
        </el-table>
      </div>
    </div>
</template>

<script setup>
// ...
const emit = defineEmits(['newDataClick'])

// 6.新建用户功能
function handleNewData() {
    emit('newDataClick')
}
</script>
```

**父组件获取事件**

```typescript
// user.vue
<template>
  <div class="user">
    // ...
    <user-content ref="contentRef" @new-data-click="handleNewDataClick"/>
    <user-modal ref="modalRef"/>
  </div>
</template>

<script setup lang="ts">
import userModal from './cpns/user-modal.vue'

const modalRef = ref<InstanceType<typeof userModal>>()

// 新增用户功能
function handleNewDataClick() {
  modalRef.value?.setDialogVisible()
}
</script>
```

#### 全局封装获取角色和部门的请求接口数据

`service`层使用`hyRequest`封装接口。

```typescript
// serivce/main.ts
import hyRequest from "..";

export function getEntireRoles() {
    return hyRequest.post({
        url: "/role/list"
    })
}

export function getEntireDepartments() {
    return hyRequest.post({
        url: "/department/list"
    })
}
```

`pinia`调用接口存储在本地`store`。

```typescript
// store/main.ts
import { getEntireDepartments, getEntireRoles } from "@/service/main/main";
import { defineStore } from "pinia";

interface IMainState {
    entireRoles: any[]
    entireDepartments: any[]
}

const useMainStore = defineStore('main', {
    state: (): IMainState => ({
        entireRoles: [],
        entireDepartments: []
    }),
    actions: {
        async fetchEntireDataAction() {
            const rolesResult = await getEntireRoles()
            const departmentResult = await getEntireDepartments()
            this.entireRoles = rolesResult.data.list
            this.entireDepartments = departmentResult.data.list
        }
    }
})
export default useMainStore
```

在登录`actions`中发起调用。

```typescript
// store/login.ts
import useMainStore from "../main/main";

interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any[]
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        token: '',
        userInfo: {},
        userMenus: []
    }),
    actions: {
        async loginAccountAction(account: IAccount) {
            // ...

            // 6.请求所有roles/department数据(刷新时数据会消失)
            const mainStore = useMainStore()
            mainStore.fetchEntireDataAction()

            //  页面跳转
            router.push('/main')
        },

        // 解决刷新页面后，动态路由丢失的问题(不再是loginAccountAction登录时才执行)
        loadLocalDataAction() {
            // ...
            if(token && userInfo && userMenus) {
                // ...
                // 请求所有roles/department数据(刷新时数据不会消失，经常变化，不放缓存，刷新时请求最新的)
                const mainStore = useMainStore()
                mainStore.fetchEntireDataAction()
                // ...
            }
        }
    }
})

export default useLoginStore
```

#### 处理角色和部门下拉框

在`el-select`中使用`v-for`循环遍历`el-option`，动态回显到`label`属性中。角色和部门数据从`pinia`中获取。

```typescript
<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
    <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
            // ...
            <el-form-item label="选择角色" prop="roleId">
                <el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%">
                    <template v-for="item in entireRoles" :key="item.id">
                        <el-option :label="item.name" :value="item.id"/>
                    </template>
                </el-select>
            </el-form-item>
            <el-form-item label="选择部门" prop="departmentId">
                <el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%">
                    <template v-for="item in entireDepartments" :key="item.id">
                        <el-option :label="item.name" :value="item.id"/>
                    </template>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import useMainStore from "@/store/main/main";
import { storeToRefs } from "pinia";
// ...

// 获取roles/departments数据
const mainStore = useMainStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)
// ...
</script>
```

#### 封装新建用户请求接口并调用

```typescript
//sevice/main/system/system.ts
import hyRequest from "@/service";
// 获取用户列表数据...

// 删除用户数据...

// 新建用户数据
export function newUserData(userInfo: any) {
    return hyRequest.post({
        url: '/users',
        data: userInfo
    })
}
```

```typescript
import { deleteUserData, getUserListData, newUserData } from "@/service/main/system/system";
// ...
const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        usersList: [],
        usersTotalCount: 0
    }),
    actions: {
        // 获取用户数据列表...

        // 删除用户数据...

        // 新增用户数据
        async newUserDataAction(userInfo: any) {
            // 创建新的用户
            const newResult =  await newUserData(userInfo)
            // 重新发送请求数据刷新页面
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})
```

```typescript
<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
        <div class="form">
            // ...
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleConfirmClick">确定</el-button>
            </span>
        </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import useSystemStore from "@/store/main/system/system";

const dialogVisible = ref(false)
const formData = reactive({
    name: '',
    realname: '',
    password: '',
    cellphone: '',
    roleId: '',
    departmentId: ''
})

const systemStore = useSystemStore()
// ...

// dialog点击确定按钮逻辑
function handleConfirmClick() {
    // 关门dialog
    dialogVisible.value = false
    // 发送新建用户请求
    systemStore.newUserDataAction(formData)
}
</script>
```

### 实现编辑用户功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_ONXbS8GUdk.png)

#### 封装修改用户请求接口

```typescript
import hyRequest from "@/service";
// ...
// 编辑用户数据
export function editUserData(id: number, userInfo: any) {
    return hyRequest.patch({
        url: `/users/${id}`,
        data: userInfo
    })
}
```

#### pinia 中调用接口的 actions

```typescript
import { deleteUserData, editUserData, getUserListData, newUserData } from "@/service/main/system/system";

const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        // ...
    }),
    actions: {
        // ...
        // 编辑用户数据
        async editUserDataAction(id: number, userInfo: any) {
            const editResult = await editUserData(id, userInfo)
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})

export default useSystemStore
```

#### 实现点击编辑按钮弹出模态框

使用作用域插槽将子组件`user-content`的点击事件发送给父组件。

```typescript
// user-content.vue
<template>
    <div class="content">
      // ...
      <div class="table">
        <el-table :data="usersList" border style="width: 100%">
            // ...
            <el-table-column align="center" label="操作" width="150px">
                <template #default="scope">
                    <el-button type="primary" icon="Edit" size="small" text @click="handleEditClick(scope.row)">编辑</el-button>
                    <el-button type="danger" icon="Delete" size="small" text @click="handleDeleteClick(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script setup>
// ...
const emit = defineEmits(['newDataClick', 'editDataClick'])
// ...

// 7.编辑用户功能
function handleEditClick(itemData) {
    emit('editDataClick', itemData)
}
</script>
```

父组件接受点击事件。

```typescript
<template>
  <div class="user">
    // ...
    <user-content ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick"/>
    <user-modal ref="modalRef"/>
  </div>
</template>

<script setup lang="ts">
import userModal from './cpns/user-modal.vue'
// ...

const modalRef = ref<InstanceType<typeof userModal>>()
// ...
// 编辑用户功能
function handleEditDataClick(itemData: any) {
  // setDialogVisible由user-modal子组件暴露出来的方法
  modalRef.value?.setDialogVisible(false, itemData)
}
</script>
```

子组件`user-modal`接受父组件传来的方法和参数。对模态框的表单内容进行判断，在编辑数据时除了密码，其它属性都进行回显，`title`变为编辑用户文本。

```typescript
<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef? '新建用户': '编辑用户'" width="30%" center>
        <div class="form">
            <el-form :model="formData" label-width="80px" size="large">
                // 编辑数据时密码不进行回显。
                <el-form-item v-if="isNewRef" label="密码" prop="password">
                    <el-input v-model="formData.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                // ...
            </el-form>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleConfirmClick">确定</el-button>
            </span>
        </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from "@/store/main/system/system";
// ...

const dialogVisible = ref(false)
// 编辑时密码不显示
const isNewRef = ref(false)
const editData = ref()

const formData = reactive<any>({
    name: '',
    realname: '',
    password: '',
    cellphone: '',
    roleId: '',
    departmentId: ''
})

// ...
// 定义设置dialogVisible的方法
function setDialogVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  // 模态框表单回显
  if(!isNew && itemData) {
    // 编辑数据
    for(const key in formData) {
        // key不一定在formData中,所以需要加类型判断any(reactive<any>)
        formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新增数据
    for(const key in formData) {
        formData[key] = ''
    }
    editData.value = null
  }
}

// dialog点击确定按钮逻辑
function handleConfirmClick() {
    // 关门dialog
    dialogVisible.value = false
    // isNewRef为false时，发送编辑用户请求
    if(!isNewRef.value && editData.value) {
        systemStore.editUserDataAction(editData.value.id, formData)
    } else {
        // 否则发送新建用户请求
        systemStore.newUserDataAction(formData)
    }
}

// 暴露给父组件的方法
defineExpose({
    setDialogVisible
})
</script>
```

## 高级复用性代码抽取

**封装抽取成配置文件来实现，增强复用性。**

### 封装网络请求

#### 抽取接口的公共特性

```typescript
/** 抽取公共页面接口 */
// 查询
export function getPageListData(pageName: string, queryInfo: any) {
    return hyRequest.post({
      url: `/${pageName}/list`,
      data: queryInfo
    })
}
// 删除
export function deletePageData(pageName: string, id: number) {
    return hyRequest.delete({
      url: `/${pageName}/${id}`
    })
}
// 新增
export function newPageData(pageName: string, dataInfo: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: dataInfo
  })
}
// 修改
export function editPageData(pageName: string, id: number, dataInfo: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: dataInfo
  })
}
```

#### 抽取 pinia 对应的 actions

```typescript
import { deleteUserData, editUserData, getUserListData, newUserData, deletePageData, editPageData, getPageListData, newPageData } from "@/service/main/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from "./type";

const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        // 抽取公共页面数据
        pageList: [],
        pageTotalCount: 0
    }),
    actions: {
        // 抽取公共页面action
        async getPageListDataAction(pageName: string, queryInfo: any) {
            // 1.请求用户列表数据
            const pageListResult = await getPageListData(pageName, queryInfo)
            const { list, totalCount } = pageListResult.data
            this.pageList = list
            this.pageTotalCount = totalCount
        },
        async deletePageDataAction(pageName: string, id: number) {
            const res = await deletePageData(pageName, id)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        },
        async newPageDataAction(pageName: string, pageData: any) {
            const res = await newPageData(pageName, pageData)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        },
        async editPageDataAction(pageName: string, id: number, pageData: any) {
            const res = await editPageData(pageName, id, pageData)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        }

    }
})

export default useSystemStore
```

```typescript
export interface ISystemState {
    // 抽取公共页面数据
    pageList: any[]
    pageTotalCount: number
}
```

### 封装表单搜索组件

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_9XcwMn65Vo.png)

#### 编写表单搜索配置文件

`search.config.ts`

```typescript
const searchConfig = {
    labelWidth: '120px',
    formItems: [
        {
            type: 'input',
            prop: 'name',
            label: '部门名称',
            placeholder: '请输入查询的部门名称'
        },
        {
            type: 'input',
            prop: 'leader',
            label: '部门领导',
            placeholder: '请输入查询的领导名称',
            initialValue: '张三'
        },
        {
            type: 'select',
            prop: 'enable',
            label: '状态',
            placeholder: '请选择查询的状态',
            options: [
                { label: '启用', value: 1 },
                { label: '禁用', value: 0 }
            ]
        },
        {
            type: 'time',
            prop: 'createAt',
            label: '创建时间'
        }
    ]
}

export default searchConfig
```

#### 重构表单搜索组件

将里面的具体的属性名称通过`search.config.ts`配置文件来动态遍历具体的属性和表单类型。

```typescript
// page-search.vue
<template>
  <div class="search">
    <el-form :model="searchForm" ref="formRef" :label-width="searchConfig.labelWidth ?? '80px'" size="large">
        <el-row :gutter="20">
            <!-- 动态遍历配置config文件 -->
            <template v-for="item in searchConfig.formItems" :key="item.prop">
                <el-col :span="8">
                    <el-form-item :label="item.label" :prop="item.prop">
                        <template v-if="item.type === 'input'">
                            <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder"></el-input>
                        </template>
                        <template v-if="item.type === 'time'">
                            <el-date-picker
                                v-model="searchForm[item.prop]"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                            />
                        </template>
                        <template v-if="item.type === 'select'">
                            <el-select v-model="searchForm[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                                <template v-for="option in item.options" :key="option.value">
                                    <el-option :label="option.label" :value="option.value"></el-option>
                                </template>
                            </el-select>
                        </template>
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
    </el-form>

    <div class="btns">
        <el-button icon="Refresh" size="large" @click="handleResetClick()">重置</el-button>
        <el-button icon="Search" size="large" type="primary" @click = "handleQueryClick()">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";

// 定义的参数需与配置文件中的参数一致
interface IProps {
    searchConfig: {
        labelWidth?: string,
        formItems: any[]
    }
}
// 接受父组件传来的配置参数
const props = defineProps<IProps>()

const emit = defineEmits(['queryClick', 'resetClick'])

const initialForm: any = {}
for(const item of props.searchConfig.formItems) {
    initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive({
    initialForm
})

// 重置功能
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
    formRef.value?.resetFields()
    // 发送请求重置查找
    emit('resetClick')
}

// 搜索功能
function handleQueryClick() {
    // 通过事件抛出（子传父）
    emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
    background-color: #fff;
    padding: 20px;

    .el-form-item {
        padding: 20px;
        margin-bottom: 0;
    }

    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
}
</style>
```

#### 父组件引用配置文件

父组件传递参数为`search-config`给子组件。

```typescript
// department.vue
<template>
  <div class="department">
    <page-search :search-config="searchConfig"/>
    // ...
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
// ...
</script>
```

### 封装表格内容组件

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_V3RocAKr0d.png)

#### 编写表格内容配置文件

`content.config.ts`

针对不同类型的表格数据的作用域插槽，区分不同的`type`。

```typescript
const contentConfig = {
    pageName: 'Department',
    header: {
        title: '部门列表',
        btnTitle: '新建部门'
    },
    propsList:[
        { type: 'selection', label: '选择', width: '80px' },
        { type: 'index', label: '序号', width: '80px' },

        { type: 'normal', prop: 'name', label: '部门名称', width: '150px' },
        { type: 'normal', prop: 'leader', label: '部门领导', width: '150px' },
        { type: 'normal', prop: 'parentId', label: '上级部门', width: '150px' },

        { type: 'time', prop: 'createAt', label: '创建时间' },
        { type: 'time', prop: 'updateAt', label: '更新时间' },

        { type: 'handler', label: '操作', width: '180px' },
    ]
}

export default contentConfig
```

#### 重构表格内容组件

```typescript
// page-content.vue
<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button type="primary" @click="handleNewData">{{ contentConfig?.header?.btnTitle ?? '新建数据' }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" :border="true" style="width: 100%">
        <template v-for="item in contentConfig.propsList" :key="item.prop">

          <!-- 处理带自定义插槽的时间格式类型 -->
          <template v-if="item.type === 'time'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>

          <!-- 处理handle类型 -->
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <el-button type="primary" size="small" icon="EditPen" link @click="handleEditClick(scope.row)">
                  编辑
                </el-button>
                <el-button type="danger" size="small" icon="Delete" link @click="handleDeleteClick(scope.row.id)">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>

          <!-- 处理普通类型 -->
          <template v-else>
            <!-- <el-table-column align="center" :type="item.type" :prop="item.prop" :label="item.label" :width="item.width" /> 相当于下面-->
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="content">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format';
import { ref } from 'vue'

interface IProps {
  contentConfig: {
    // 用于处理接口方法中传入的pageName参数
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[]
  }
}

const props = defineProps<IProps>()

const emit = defineEmits(['newDataClick', 'editDataClick'])

// 1.请求数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
function fetchPageListData(formData: any = {}) {
  // 1.获取offset和size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset}

  // 2.发起网络请求
  const queryInfo = { ...pageInfo, ...formData}
  // 从配置文件中获取pageName
  systemStore.getPageListDataAction(props.contentConfig.pageName, { offset, size, ...queryInfo })
}
fetchPageListData()

// 2.展示数据
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// 3.绑定分页数据
function handleCurrentChange() {
  fetchPageListData()
}
function handleResetClick() {
  currentPage.value = 1
  pageSize.value = 10
  fetchPageListData()
}

// 4.新建数据的处理
function handleNewData() {
  emit('newDataClick')
}

// 5.删除和编辑操作
function handleDeleteClick(id: number) {
  // 从配置文件中获取pageName
  systemStore.deletePageDataAction(props.contentConfig.pageName, id)
}

function handleEditClick(data: any) {
  emit('editDataClick', data)
}

// 暴露函数
defineExpose({
  fetchPageListData,
  handleResetClick
})
</script>

<style scoped lang="less">
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 14px 0;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>
```

#### 父组件引用配置文件（后面统一起来整理）

```typescript
<template>
  <div class="department">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick" :search-config="searchConfig"/>
    <page-content ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick" :content-config="contentConfig"/>
    <page-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from './cpns/page-modal.vue'
import { ref } from 'vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'

const contentRef = ref<InstanceType<typeof PageContent>>()
const modalRef = ref<InstanceType<typeof PageModal>>()
// 搜索功能
function handleQueryClick(searchInfo: any) {
  console.log(searchInfo);
  contentRef.value?.fetchPageListData(searchInfo)
}
// 重置功能
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}
// 新增功能
function handleNewDataClick() {
  modalRef.value?.setDialogVisible()
}
// 编辑功能
function handleEditDataClick(itemData: any) {
  modalRef.value?.setDialogVisible(false, itemData)
}
</script>

<style scoped></style>
```

#### (进阶)封装自定义的定制作用域插槽

以上代码是通过不断的`if`判断 `<template v-else-if="item.type === 'custom'">`，来处理不同类型（带有作用域插槽）的`table`数据，如图片、`el-tag`、`button`等。因此通过编写通用的自定义插槽来预留一个插槽`slot`给父组件，使用户可以定制`table`数据内容。

**配置文件**

```typescript
const contentConfig = {
    // ...
    propsList:[
        // ...
        // 自定义插槽定制（通用）
        { type: 'custom', label: '自定义插槽1', prop: 'leader', width: '150px', slotName: 'leader'},
        { type: 'custom', label: '自定义插槽2', prop: 'parentId', width: '150px', slotName: 'parent'},
    ]
}

export default contentConfig
```

**自定义插槽的组件模版**

```typescript
<template>
  <div class="content">
    // ...
    <div class="table">
      <el-table :data="pageList" :border="true" style="width: 100%">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <!-- 处理带自定义插槽的时间格式类型 -->
          // ...
          <!-- 处理handle类型 -->
          // ....
          <!-- 处理普通类型 -->
          // ....

          <!-- 自定义插槽定制处理(通用) -->
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <!-- 给用户预留定制插槽 -->
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>

        </template>

      </el-table>
    </div>
  </div>
</template>
```

**父组件编写定制插槽**

```typescript
<template>
  <div class="department">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick" :search-config="searchConfig"/>

    <page-content ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick" :content-config="contentConfig">
      <template #leader="scope">
        <span style="color: red;">
          {{ scope.row[scope.prop] }}
        </span>
      </template>
      <template #parent="scope">
        <el-tag>
          {{ scope.row[scope.prop] }}
        </el-tag>
      </template>
    </page-content>

    <page-modal ref="modalRef" />
  </div>
</template>
```

### 封装模态框组件

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_rLSWO79LOv.png)

#### 编写模态框内容配置文件

`motal.config.ts`

这里的`options`应该是由获取接口数据得到的，后续会进行封装，这里先写为静态的。

```typescript
const modalConfig = {
    header: {
        newTitle: '新建部门',
        editTitle: '编辑部门',
    },
    pageName: 'department',
    formItems: [
        {
            type: 'input',
            prop: 'name',
            label: '部门名称',
            placeholder: '请输入部门名称'
        },
        {
            type: 'input',
            prop: 'leader',
            label: '部门领导',
            placeholder: '请输入查询的领导名称',
            initialValue: '张三'
        },
        {
            type: 'select',
            prop: 'parentId',
            label: '上级部门',
            options: [
                // 后面使用动态获取
                // { label: '部门1', value: '1' },
            ]
        }
    ]
}

export default modalConfig
```

#### 重构模态框内容组件

```typescript
// page-modal.vue
<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isEdit ? modalConfig.header.editTitle : modalConfig.header.newTitle" width="30%" center>
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item v-bind="item">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </template>

              <template v-if="item.type === 'select'">
                <el-select v-model="formData[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :value="option.value" :label="option.label" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="modal">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const dialogVisible = ref(false)
const isEdit = ref(false)
const editData = ref()

// 部门和角色的数据
const mainStore = useMainStore()
const { entireDepartments } = storeToRefs(mainStore)

interface IProps {
  modalConfig: {
    header: {
      newTitle: string,
      editTitle: string
    }
    pageName: string,
    formItems: any[]
  }
}

// 定义props
const props = defineProps<IProps>()

// 定义数据绑定
const initialForm: any = {}
for(const item of props.modalConfig.formItems) {
    initialForm[item.prop] = item.initialValue ?? ''
}
const formData = reactive<any>(initialForm)

// 点击确定
const systemStore = useSystemStore()
function handleConfirmClick() {
  dialogVisible.value = false
  if (!isEdit.value) {
    systemStore.newPageDataAction(props.modalConfig.pageName, formData)
  } else {
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, formData)
  }
}

// 新建或者编辑
function setDialogVisible(isNew: boolean = true, data: any = {}) {
  dialogVisible.value = true
  isEdit.value = !isNew
  editData.value = data
  for (const key in formData) {
    if (isNew) {
      formData[key] = ''
    } else {
      formData[key] = data[key]
    }
  }
}

defineExpose({
  setDialogVisible
})
</script>

<style scoped lang="less">
.form {
  padding: 10px 30px;
}
</style>
```

#### 将选择器下拉内容 options 改为动态获取接口数据

在父组件中将要传入的`modalConfig`进行预处理，使用`pinia`将接口数据（`name`, `id`）先映射成`options`需要的参数（`label`, `value`），再将数据推入到`prop`为`parentId`下的`options`数组中。

```typescript
// 父组件deparment.vue
<template>
  <div class="department">
    // ...
    <page-modal ref="modalRef" :modal-config="modalConfigRef"/>
  </div>
</template>

<script setup lang="ts" name="department">
// ...
import PageModal from '@/components/page-modal/page-modal.vue'
import { computed, ref } from 'vue'
import modalConfig from './config/modal.config'
import useMainStore from '@/store/main/main'

// 对modalConfig进行操作，用于select中的options来自于接口数据
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  // 将获取到的name和id映射成option需要的label和value形式
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

// ...
</script>
```

### 页面公共逻辑的 hooks 抽取

#### 抽取表单搜索内容中的搜索功能和重置功能。

```typescript
// hooks/usePageContent.ts
import type PageContent from "@/components/page-content/page-content.vue"
import { ref } from "vue"

export function usePageContent() {
    const contentRef = ref<InstanceType<typeof PageContent>>()
    // 搜索功能
    function handleQueryClick(searchInfo: any) {
        console.log(searchInfo);
        contentRef.value?.fetchPageListData(searchInfo)
    }
    // 重置功能
    function handleResetClick() {
        contentRef.value?.fetchPageListData()
    }

    return {
        contentRef,
        handleQueryClick,
        handleResetClick
    }
}
```

#### 抽取模态框中新增和编辑功能。

```typescript
// hooks/usePageModal.ts
import type PageModal from "@/components/page-modal/page-modal.vue"
import { ref } from "vue"

export function usePageModal() {
    const modalRef = ref<InstanceType<typeof PageModal>>()

    // 新增功能
    function handleNewDataClick() {
        modalRef.value?.setDialogVisible()
    }
    // 编辑功能
    function handleEditDataClick(itemData: any) {
        modalRef.value?.setDialogVisible(false, itemData)
    }

    return {
        modalRef,
        handleEditDataClick,
        handleNewDataClick
    }
}
```

#### 父组件中调用 hooks。

```typescript
<script setup lang="ts" name="department">
import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'
// ...
// 抽取成hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()
</script>
```

## 实现菜单管理功能

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_8C-i5wpqZt.png)

### 实现树形子树的展示

使用`el-table`中的`row-key="id"`来绑定子树的`id`。这里使用配置项来在表格数据中动态绑定。

> [树形数据](https://element-plus.gitee.io/zh-CN/component/table.html#%E6%A0%91%E5%BD%A2%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%87%92%E5%8A%A0%E8%BD%BD)：支持树类型的数据的显示。 当 row 中包含 `children` 字段时，被视为树形数据。 渲染嵌套数据需要 prop 的 `row-key`。 此外，子行数据可以异步加载。 设置 Table 的`lazy`属性为 true 与加载函数 `load` 。 通过指定 row 中的`hasChildren`字段来指定哪些行是包含子节点。 `children` 与`hasChildren`都可以通过 `tree-props` 配置。

```typescript
// page-content.vue
<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button type="primary" @click="handleNewData">{{ contentConfig?.header?.btnTitle ?? '新建数据' }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" :border="true" style="width: 100%" v-bind="contentConfig.childrenTree">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <!-- 处理带自定义插槽的时间格式类型 -->
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>

          <!-- 处理handle类型 -->
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <el-button type="primary" size="small" icon="EditPen" link @click="handleEditClick(scope.row)">
                  编辑
                </el-button>
                <el-button type="danger" size="small" icon="Delete" link @click="handleDeleteClick(scope.row.id)">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>

          <!-- 处理普通类型 -->
          <template v-else>
            <!-- <el-table-column align="center" :type="item.type" :prop="item.prop" :label="item.label" :width="item.width" /> 相当于下面-->
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>

      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="content">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format';
import { ref } from 'vue'

interface IProps {
  contentConfig: {
    // 用于处理接口方法中传入的pageName参数
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[],
    childrenTree: any[]
  }
}

const props = defineProps<IProps>()

const emit = defineEmits(['newDataClick', 'editDataClick'])

// 1.请求数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
function fetchPageListData(formData: any = {}) {
  // 1.获取offset和size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset}

  // 2.发起网络请求
  const queryInfo = { ...pageInfo, ...formData}
  systemStore.getPageListDataAction(props.contentConfig.pageName, { offset, size, ...queryInfo })
}
fetchPageListData()

// 2.展示数据
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// 3.绑定分页数据
function handleCurrentChange() {
  fetchPageListData()
}
function handleResetClick() {
  currentPage.value = 1
  pageSize.value = 10
  fetchPageListData()
}

// 4.新建数据的处理
function handleNewData() {
  emit('newDataClick')
}

// 5.删除和编辑操作
function handleDeleteClick(id: number) {
  systemStore.deletePageDataAction(props.contentConfig.pageName, id)
}

function handleEditClick(data: any) {
  emit('editDataClick', data)
}

// 暴露函数
defineExpose({
  fetchPageListData,
  handleResetClick
})
</script>

<style scoped lang="less">
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 14px 0;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>
```

使用配置项绑定`row-key`属性。

```typescript
// content.config.ts
const contentConfig = {
    pageName: 'menu',
    header: {
      title: '菜单列表',
      btnTitle: '新建菜单'
    },
    propsList: [
      // 若要实现树形数据，就不能加type，会冲突
      { prop: 'name', label: '菜单名称', width: '180px' },
      { prop: 'type', label: '级别', width: '120px' },
      { prop: 'url', label: '菜单url', width: '150px' },
      { prop: 'icon', label: '菜单icon', width: '180px' },
      { prop: 'sort', label: '排序', width: '120px' },
      { prop: 'permission', label: '权限', width: '150px' },
      { type: 'time', prop: 'createAt', label: '创建时间' },
      { type: 'time', prop: 'updateAt', label: '更新时间' },
      { type: 'handler', label: '操作', width: '150px'}
    ],
    childrenTree: {
      rowKey: 'id',
      treeProps: {
        children: 'children'
      }
    }
  }

export default contentConfig
```

### 实现新增、编辑模态框功能以及删除功能

使用配置文件完成。

```typescript
// modal.config.ts
const modalConfig = {
    pageName: 'menu',
    header: {
      newTitle: '新建菜单',
      editTitle: '编辑菜单'
    },
    formItems: [
      {
        type: 'input',
        label: '菜单名称',
        prop: 'name',
        placeholder: '请输入菜单名称'
      },
      {
        type: 'input',
        label: '菜单级别',
        prop: 'type',
        placeholder: '请输入菜单级别'
      },
      {
        type: 'input',
        label: '菜单级别',
        prop: 'type',
        placeholder: '请输入菜单级别'
      },
      {
        type: 'input',
        label: '菜单url',
        prop: 'url',
        placeholder: '请输入菜单url'
      },
      {
        type: 'input',
        label: '菜单icon',
        prop: 'icon',
        placeholder: '请输入菜单icon'
      },
      {
        type: 'input',
        label: '排序',
        prop: 'sort',
        placeholder: '请输入排序'
      },
      {
        type: 'input',
        label: '权限',
        prop: 'permission',
        placeholder: '请输入权限'
      },
      {
        type: 'input',
        label: '创建时间',
        prop: 'createAt',
        placeholder: '请输入创建时间'
      },
      {
        type: 'input',
        label: '更新时间',
        prop: 'updateAt',
        placeholder: '请输入更新时间'
      },
      {
        type: 'custom',
        slotName: 'menulist'
      }
    ]
}
export default modalConfig
```

父组件`menu.vue`传递配置文件中的配置项。

```typescript
<template>
  <div class="menu">
    <page-content :content-config="contentConfig" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick"/>
    <page-modal :modal-config="modalConfig" ref="modalRef"/>
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';

import PageModal from '@/components/page-modal/page-modal.vue';
import modalConfig from './config/modal.config';

import { usePageModal } from '@/hooks/usePageModal';

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()
</script>

<style scoped>
</style>
```

## 实现角色管理中的权限分配（难点）

**在新建角色时使用上文写的自定义作用域插槽定制化树形选择角色权限列表。**

### 创建角色的菜单树展示

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_eZshQ2Ucrq.png)

#### 封装请求接口数据

```typescript
// service/main.ts
// 获取所有菜单
export function getEntireMenus() {
    return hyRequest.post({
        url: "/menu/list"
    })
}
```

```typescript
// store/main.ts
import { getEntireDepartments, getEntireMenus, getEntireRoles } from "@/service/main/main";
import { defineStore } from "pinia";

interface IMainState {
    // ...
    entireMenus: any[]
}
const useMainStore = defineStore('main', {
    state: (): IMainState => ({
        // ...
        entireMenus: []
    }),
    actions: {
        async fetchEntireDataAction() {
            // ...
            const menuResult = await getEntireMenus()
            this.entireMenus = menuResult.data.list
        }
    }

})
export default useMainStore
```

#### 在配置文件中定义自定义类型

因为新建角色在模态框中展现，因此在`modal.config.ts`中定义。

```typescript
const modalConfig = {
    pageName: 'role',
    header: {
      newTitle: '新建角色',
      editTitle: '编辑角色'
    },
    formItems: [
      {
        type: 'input',
        label: '角色名称',
        prop: 'name',
        placeholder: '请输入角色名称'
      },
      {
        type: 'input',
        label: '权限介绍',
        prop: 'intro',
        placeholder: '请输入权限介绍'
      },
      // 自定义类型
      {
        type: 'custom',
        slotName: 'menulist'
      }
    ]
}
export default modalConfig
```

#### 编写自定义插槽

在`page-modal.vue`中编写`type`为`custom`的作用域插槽。

```typescript
<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isEdit ? modalConfig.header.editTitle : modalConfig.header.newTitle" width="30%" center>
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item v-bind="item">
              <template v-if="item.type === 'input'">
                // ...
              </template>

              <template v-if="item.type === 'select'">
                // ...
              </template>

              <!-- 自定义插槽：如角色管理中的权限树形选择 -->
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      // ...
    </el-dialog>
  </div>
</template>
```

#### 在父组件中实现菜单列表的自定义插槽

使用`el-tree`中的树节点选择实现，将请求接口数据`entireMenus`传入给`:data`即可。

```typescript
<template>
  <div class="role">
    <page-search :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <page-content :content-config="contentConfig" ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick"/>
    <page-modal :modal-config="modalConfig" ref="modalRef">
      <!-- 自定义菜单列表 -->
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue';
import searchConfig from './config/search.config'

import pageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';

import pageModal from '@/components/page-modal/page-modal.vue';
import modalConfig from './config/modal.config';

import { usePageContent } from '@/hooks/usePageContent';
import { usePageModal } from '@/hooks/usePageModal';
import useMainStore from '@/store/main/main';
import { storeToRefs } from 'pinia';

// hooks逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()

const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
</script>
```

### 创建角色携带菜单树的权限数据

将菜单树的`menulist`和`formData`绑定一起传递给服务器，使用`el-tree`中`check`属性获取选中值，里面有 2 个参数，第 2 个参数能够获取当前选中的结点`checkedNodes`以及它的父结点`halfCheckedNodes`和它们的`key`。

#### 父组件中获取权限数据并传递给 page-modal 子组件

```typescript
// role.vue
<template>
  <div class="role">
    // ...
    <page-modal :modal-config="modalConfig" ref="modalRef" :other-info="otherInfo">
      <!-- 自定义菜单列表 -->
      <template #menulist>
        <el-tree
          // ...
          @check="handleELTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
// ...
// 获取树形列表的key(id)
const otherInfo = ref({})
function handleELTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>
```

#### 子组件接受数据并将其合并发送给服务器

```typescript
// page-modal.vue
<script setup lang="ts" name="modal">
// ...
interface IProps {
  modalConfig: {
    // ...
  }
  otherInfo?: any
}

// ...

// 点击确定
const systemStore = useSystemStore()
function handleConfirmClick() {
  dialogVisible.value = false

  // 若有其它info进行合并发送给服务器（如：角色管理中新建角色的权限分配菜单树menuList）
  let infoData = formData
  if(props.otherInfo) {
    infoData = { ...formData, ...props.otherInfo}
  }

  if (!isEdit.value) {
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
  } else {
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
  }
}
</script>
```

### 编辑时角色菜单权限回显

#### 封装菜单映射权限 Id 列表的工具

```typescript
// utils/map-menus.ts
/**
 * 菜单映射到id的列表（用于角色管理的权限树分配）
 * @param menuList
 */
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = []

  function recurseGetId(menus: any[]) {
    for(const item of menus) {
      // 如果有子菜单，就递归直到没有子菜单，然后把id添加到ids中
      if(item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menuList)
  return ids
}
```

#### 获取角色权限菜单的数据

在点击编辑按钮触发`usePageModal`事件时，传入的参数`itemData`中可以拿到模态框里的数据（包括菜单树控件`el-tree`），但是因为点击编辑事件封装在`hooks`里面，在`role.vue`中需要传入一个函数`editCallback`来获取。

```typescript
type callbackType = (item: any) => void
export function usePageModal(editCallback?: callbackType) {
    const modalRef = ref<InstanceType<typeof PageModal>>()
    // ...
    // 编辑功能
    function handleEditDataClick(itemData: any) {
        modalRef.value?.setDialogVisible(false, itemData)
        // 回显角色管理中权限菜单树
        if(editCallback) editCallback(itemData)
    }
    return {
        handleEditDataClick,
        // ...
    }
}
```

在 role.vue 中使用`editCallback`函数来接受编辑事件传来的`itemData`（对象），并将其用`mapMenuListToIds`工具处理成`id`数组，在`nextTick()`中调用。

> `nextTick`：当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。`nextTick()` 可以在状态改变后立即使用，以等待 DOM 更新完成。

> Vue 是异步执行 dom 更新的，一旦观察到数据变化，Vue 就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个 watcher 被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和 DOm 操作。而在下一个事件循环时，Vue 会清空队列，并进行必要的 DOM 更新。  
> 当你设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的 DOM 更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) ，这样回调函数在 DOM 更新完成后就会调用。在 Vue3 中是微任务，Vue2 中不断更新变化。

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_gYbI_P1Qvc.png)

```typescript
<template>
  <div class="role">
    // ...
    <page-modal :modal-config="modalConfig" ref="modalRef" :other-info="otherInfo">
      <!-- 自定义菜单列表 -->
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
          @check="handleELTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
// ...
import { ref, nextTick } from 'vue';
import { mapMenuListToIds } from '@/utils/map-menus';
import type { ElTree } from 'element-plus/es/components/index.js';
// ...
const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal(editCallback)

// ...
// 编辑角色菜单权限回显
const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallback(data: any){
  nextTick(() => {
    const menuList = mapMenuListToIds(data.menuList)
    // 只有在nextTick之后才能设置setCheckedKeys
    treeRef.value?.setCheckedKeys(menuList)
  })
}
</script>
```

### 新增时角色菜单权限回显重置

#### 重置角色权限菜单树的数据

```typescript
// role.vue
<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { mapMenuListToIds } from '@/utils/map-menus';
import type { ElTree } from 'element-plus/es/components/index.js';
// ...
const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal(newCallback, editCallback)

// ...
// 新增角色菜单权限重置
function newCallback(){
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
// 编辑角色菜单权限回显...
}
</script>
```

#### hooks 中调用

```typescript
// ...
type callbackType = (item?: any) => void
export function usePageModal(newCallback?: callbackType, editCallback?: callbackType) {
    const modalRef = ref<InstanceType<typeof PageModal>>()
    // 新增功能
    function handleNewDataClick() {
        modalRef.value?.setDialogVisible()
        if(newCallback) newCallback()
    }
    // 编辑功能...
    return {
        modalRef,
        handleEditDataClick,
        handleNewDataClick
    }
}
```

## 实现登录用户的权限功能

通过每个子菜单下增删改查的如`permission:"system:users:create"`字段实现，用于控制按钮权限的展示。

### 封装菜单映射按钮权限工具

```typescript
// map-menus.ts
/**
 * 菜单映射到按钮的权限permissions
 * @param menuList 菜单列表
 * @returns 权限的数组
 */
export function mapMenuListToPermissions(menuList :any) {
  const permissions: string[] = []

  function recurseGetPermission(menus: any[]) {
    for(const item of menus) {
      if(item.type === 3) {
        permissions.push(item.permission)
      } else {
        // 没有子树的话就将menus设置为空数组，否则会null/undefine报错
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)

  return permissions
}
```

### 获取登录用户的所有按钮权限

使用菜单映射按钮权限工具，获取登录用户的所有权限，存入`pinia`中。

```typescript
import { mapMenuListToPermissions, mapMenuToRoutes } from "@/utils/map-menus";

interface ILoginState {
    // ...
    permissions: string[],
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        // ...
        permissions: []
    }),
    actions: {
        async loginAccountAction(account: IAccount) {
            // ...

            // 7.获取登录用户的所有按钮权限
            const permissions = mapMenuListToPermissions(this.userMenus)
            this.permissions = permissions
        },

        // 解决刷新页面后，动态路由丢失的问题(不再是loginAccountAction登录时才执行)
        loadLocalDataAction() {
            // ...
            if(token && userInfo && userMenus) {
                // ...
                // 刷新时缓存按钮权限
                const permissions = mapMenuListToPermissions(userMenus)
                this.permissions = permissions
            }
        }
    }
})

export default useLoginStore
```

### 封装权限 hooks

用于查询某个页面的权限是否在获取到的登录用户所有权限中，如判断`department:create`、`department:update`是否包含在登录用户存入在`pinia`中的`permissions`数组，用`permissions.find`去查找。

```typescript
// hooks/usePermission.ts
import useLoginStore from '@/store/login/login'

function usePermission(pageName: string, handleName: string) {
  const queryPermission = `${pageName}:${handleName}`
  const { permissions } = useLoginStore()

  // !!将字符串转换为布尔值
  return !!permissions.find((item) => item.includes(queryPermission))
}

export default usePermission
```

### 编写 Page-content 组件

调用 hooks，判断每一个按钮是否有有对应的增删改查权限，使用`v-if`控制对应按钮的显示。

```typescript
<template>
  <div class="content">
    <div class="header">
      // ...
      // 增
      <el-button v-if="isCreate" type="primary" @click="handleNewData">{{ contentConfig?.header?.btnTitle ?? '新建数据' }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" :border="true" style="width: 100%" v-bind="contentConfig.childrenTree">
            // ...
          <!-- 处理handle类型 -->
          <template v-else-if="item.type === 'handler'">
            // ...
            // 改
            <el-button v-if="isUpdate" type="primary" size="small" icon="EditPen" link @click="handleEditClick(scope.row)">
              编辑
            </el-button>
            // 删
            <el-button v-if="isDelete" type="danger" size="small" icon="Delete" link @click="handleDeleteClick(scope.row.id)">
              删除
            </el-button>
          </template>
          // ...
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts" name="content">
import usePermission from '@/hooks/usePermission'

interface IProps {
  contentConfig: {
    // 用于处理接口方法中传入的pageName参数
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[],
    childrenTree: any[]
  }
}
const props = defineProps<IProps>()
const emit = defineEmits(['newDataClick', 'editDataClick'])

// 0. 获取是否有对应的增删改查权限
// 增
const isCreate = usePermission(props.contentConfig.pageName, 'create')
// 删
const isDelete = usePermission(props.contentConfig.pageName, 'delete')】
// 改
const isUpdate = usePermission(props.contentConfig.pageName, 'update')
// 查
const isQuery = usePermission(props.contentConfig.pageName, 'query')

// 1.请求数据...
function fetchPageListData(formData: any = {}) {
  // 查
  if(!isQuery) return
  // ...
}
// ...
</script>
```

## (细节处理)新增编辑删除操作重置 current 分页

通过使用`pinia`中的[订阅](https://pinia.vuejs.org/zh/core-concepts/actions.html#subscribing-to-actions)[`action`](https://pinia.vuejs.org/zh/core-concepts/actions.html#subscribing-to-actions)，去监听增删改的`actions`，从而将`current`重置。

> 订阅 `action`：你可以通过 `store.$onAction()` 来监听 `action` 和它们的结果。传递给它的回调函数会在 `action` 本身之前执行。`after` 表示在 promise 解决之后，允许你在 `action` 解决后执行一个回调函数。同样地，`onError` 允许你在 `action` 抛出错误或 `reject` 时执行一个回调函数。

```typescript
// page-content.vue
<script setup lang="ts" name="content">
// ...
// 6.监听systemStore的增删改action,将页面currentPage重置
systemStore.$onAction(({ name, after }) => {
  // after表示在action成功执行之后执行（失败时不执行）
  after(() => {
    if(name === 'editPageDataAction' || name === 'newPageDataAction' || name === 'deletePageDataAction') {
      currentPage.value = 1
    }
  })
})
</script>
```

## 实现数据统计页面

### 实现顶部卡片组件页面

#### 实现子组件数字统计卡片的静态默认展示。

使用了`withDefaults`实现。

```typescript
// cpns/count-card/count-card.vue
<template>
  <div class="count-card">
    <div class="header">
        <span class="title">{{ title }}</span>
        <el-tooltip :content="tips" placement="top-start" effect="dark">
            <el-icon><Warning /></el-icon>
        </el-tooltip>
    </div>
    <div class="content">
        <span class="count">{{ number1 }}</span>
    </div>
    <div class="footer">
        <span>{{ subtitle }}</span>
        <span>{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
    title?: string,
    tips?: string,
    number1?: number,
    number2?: number,
    subtitle?: string
}

// withDefaults默认值
withDefaults(defineProps<IProps>(), {
    title: '商品总销量',
    tips: '所有商品的总销量',
    number1: 509989,
    number2: 509989,
    subtitle: '商品总销量'
})

</script>

<style lang="less" scoped>
.count-card {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 130px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .header {
        display: flex;
        height: 38px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        justify-content: space-between;
        align-items: flex-end
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1;
        margin-left: 0px;
        font-size: 26px;
        color: rgba(0, 0, 0, 0.85);
    }

    .footer {
        display: flex;
        height: 38px;
        line-height: 38px;
        letter-spacing: 1px;
        color: rgba(0, 0, 0, 0.85);
        border-top: 1px solid #f0f0f0;
    }
}
</style>
```

#### 封装网络请求实现动态页面

使用`hyRequest`和`pinia`封装网络请求以及数据。

```typescript
// service/main/analysis.ts
import hyRequest from "@/service";

export function getAmountListData() {
    return hyRequest.get({
        url: '/goods/amount/list'
    })
}
```

```typescript
import { getAmountListData } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    amountList: any[],
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        amountList: [],
    }),
    actions: {
        async fetchAnalysisDataAction() {
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data
        }
    }
})

export default useAnalysisStore
```

#### 父组件获取请求数据并传递给子组件

```typescript
// views/main/analysis.vue
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <count-card v-bind="item"/>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import countCard from "./cpns/count-card/count-card.vue";
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList } = storeToRefs(analysisStore)
</script>
```

### 顶部卡片中的数据递增动画实现

安装`npm install countup.js`

```typescript
<template>
  // ...
  <span ref="count1Ref">{{ number1 }}</span>
  <span ref="count2Ref">{{ number2 }}</span>
</template>
<script setup lang="ts">
// 数字递增动画
import { CountUp } from 'countup.js';
import { onMounted, ref } from 'vue';

interface IProps {
    amount? :string,
    title?: string,
    tips?: string,
    number1?: number,
    number2?: number,
    subtitle?: string
}

// withDefaults默认值
const props = withDefaults(defineProps<IProps>(), {
    title: '商品总销量',
    tips: '所有商品的总销量',
    number1: 509989,
    number2: 509989,
    subtitle: '商品总销量'
})

// 给数字前面加前缀¥
const countOption = {
    prefix: props.amount == 'sale' ? '¥' : ''
}

// 创建CountUp的实例对象
const count1Ref = ref<HTMLElement>()
const count2Ref = ref<HTMLElement>()
// 参数1: 数字动画的元素
// 参数2: 数字增加到多少
// 参数3: 给参数1前面加个前缀，如¥
// 这里使用onMounted是因为setup的时候还没挂载到ref,就会报错
onMounted(() => {
    const countup1 = new CountUp(count1Ref.value!, props.number1, countOption)
    const countup2 = new CountUp(count2Ref.value!, props.number2, countOption)

    countup1.start()
    countup2.start()
})
</script>
```

### 实现顶部卡片响应式布局

使用`el-col`的`xs`，`sm`，`md`，`lg`，`xl`实现。

```typescript
<el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
  // ...
</el-col>
```

## 实现 echart 可视化

安装：[`npm install echarts --save`](https://echarts.apache.org/handbook/zh/get-started/)

### 初步搭建可视化页面

#### 使用 element 封装卡片组件

使用`el-card`卡片，将`echart`可视化图形聚合在卡片容器中展示。

```typescript
// chart-card.vue
<template>
    <div class="chart-card">
      <el-card class="box-card">
        <template #header>
          <div class="cart-header">
            <span>分类商品数量(饼图)</span>
          </div>
        </template>

        <div class="content">
          <slot></slot>
        </div>
      </el-card>
    </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped></style>
```

#### 引入 ECharts 的饼图

```typescript
// dashboard.vue
<template>
  <div class="dashboard">
    // 顶部卡片组件
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"/>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      // echart饼图
      <el-col :span="7">
        <chart-card>
          <div class="echart" ref="echartRef"></div>
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card/>
      </el-col>

      <el-col :span="7">
        <chart-card/>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>折线图</chart-card>
      </el-col>

      <el-col :span="12">
        <chart-card>柱状图</chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// ...
import chartCard from "./cpns/chart-card/chart-card.vue";
import { onMounted, ref } from "vue";

import * as echarts from 'echarts'

// 发起actions封装的网络请求...
// 获取数据...

// 1. 引用dom实例
const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 2. 基于准备好的dom，初始化echart实例
  const echartInstance = echarts.init(echartRef.value!, "light", {
    renderer: 'canvas'
  })

  // 3.设置options(配置)
  echartInstance.setOption({
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 15px;
}

.echart {
  height: 250px;
}
</style>
```

### 三层组件封装 echart

#### 封装 Base-echart 组件

`base-echart`做初始化（基于准备好的`dom`，初始化`echart`实例），用于接收不同`echart`图形的`option`配置。监听`window`的`resize`属性设置`echartInstance.resize()`可以实现`echart`的响应式。

```typescript
// base-echart.vue
<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
// 获取echart的option类型
import type { EChartsOption } from 'echarts'

// 接收每个echart不同配置
interface IProps {
    option: EChartsOption
}
const props = defineProps<IProps>()

// 1. 引用dom实例
const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 2. 基于准备好的dom，初始化echart实例
  const echartInstance = echarts.init(echartRef.value!, "light", {
    renderer: 'canvas'
  })

  // 3.第一次options(配置),动态传入每个图的option
  // watchEffect监听option变化，重新执行
  watchEffect(() => echartInstance.setOption(props.option))

  // 4.监听window缩放实现echart响应式布局
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="less" scoped>
.echart {
  height: 250px;
}
</style>
```

#### 绘制 ECharts 图形

编写`option`配置，将`option`传入子组件`base-echart.vue`，使用`:option`接收。

```typescript
// pie-echart.vue
<template>
  <div class="pie-echart">
    <base-echart :option="option"/>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'

// 只负责传入饼图的option
const option: EChartsOption = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
}
</script>

<style lang="less" scoped>
</style>
```

#### 统一导出

```typescript
// index.ts
import BaseEchart from './src/base-echart.vue'
import PieEchart from './src/pie-echart.vue'
import LineEchart from './src/line-echart.vue'

export { PieEchart, LineEchart }

export default BaseEchart
```

#### 引入 ECharts 图形

```typescript
// dashboard,vue
<template>
  <div class="dashboard">
    <!--顶部卡片组件 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"/>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card>
          <pie-echart/>
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card>
          <line-echart/>
        </chart-card>
      </el-col>
    </el-row>
    // ...
  </div>
</template>

<script setup lang="ts">
// ...
</style>
```

### 获取请求数据用于 ECharts 显示

#### 封装 service 请求接口

```typescript
// service/analysis.ts
// 获取饼图分类商品数量
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: '/goods/category/count'
    })
}
```

#### 封装 pinia 请求数据

```typescript
// store/analysis.ts
import { getAmountListData, getGoodsCategoryCount } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[]
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        amountList: [],
        goodsCategoryCount: []
    }),
    actions: {
        async fetchAnalysisDataAction() {
            // 顶部卡片数据
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data

            // 获取饼图数据
            const goodsResult = await getGoodsCategoryCount()
            this.goodsCategoryCount = goodsResult.data
        },
    }
})
export default useAnalysisStore
```

#### 父组件调用 pinia 中的 actions 发起请求

父组件`dashboard.vue`发起请求获取饼图数据，将数据（`name`，`goodsCount`）通过`map`映射成饼图需要的数据（`name`，`value`），通过`:pie-data="showGoodsCategoryCount`传递给子组件`pie-echart.vue`。

```typescript
// dashboard.vue
<template>
  <div class="dashboard">
    <!--顶部卡片组件 -->
    // ...
    // 饼图
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card>
          <pie-echart :pie-data="showGoodsCategoryCount"/>
        </chart-card>
      </el-col>
     </el-row>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from "vue";
import countCard from "./cpns/count-card/count-card.vue";
import chartCard from "./cpns/chart-card/chart-card.vue";
import useAnalysisStore from '@/store/main/analysis/analysis'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList, goodsCategoryCount } = storeToRefs(analysisStore)

// 获取echart饼图数据
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
</script>
```

#### 子组件动态接收饼图 option 数据

```typescript
<template>
  <div class="pie-echart">
    <base-echart :option="option"/>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

interface IEchartValueType {
  value: number
  name: string
}

interface IProps {
  pieData: IEchartValueType[]
}

const props = defineProps<IProps>()

// 只负责传入饼图的option
const option = computed<EChartsOption>(() => {
    return {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        left: 'left'
      },
      series: [
        {
          name: '访问来问',
          type: 'pie',
          radius: '50%',
          bottom: '-10%',
          data: props.pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
})
</script>
```

### 实现各种 Echart 图动态数据展示

#### 封装请求接口的动态数据

```typescript
// service/analysis.ts
// 获取饼图、玫瑰图分类商品数量
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: '/goods/category/count'
    })
}

// 获取折线图商品销量
export function getGoodsCategorySale() {
    return hyRequest.get({
        url: '/goods/category/sale'
    })
}

// 获取柱状图商品收藏数量
export function getGoodsCategoryFavor() {
    return hyRequest.get({
        url: '/goods/category/favor'
    })
}
```

```typescript
// store/analysis.ts
import { getAmountListData, getGoodsCategoryCount, getGoodsCategoryFavor, getGoodsCategorySale } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[],
    goodsCategorySale: any[],
    goodsCategoryFavor: any[]
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        amountList: [],
        goodsCategoryCount: [],
        goodsCategorySale: [],
        goodsCategoryFavor: []
    }),
    actions: {
        async fetchAnalysisDataAction() {
            // 顶部卡片数据
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data

            // 获取饼图、玫瑰图数据
            const goodsCountResult = await getGoodsCategoryCount()
            this.goodsCategoryCount = goodsCountResult.data

            // 获取折线图数据
            const goodsSaleResult = await getGoodsCategorySale()
            this.goodsCategorySale = goodsSaleResult.data

            // 获取柱状图数据
            const goodsFavorResult = await getGoodsCategoryFavor()
            this.goodsCategoryFavor = goodsFavorResult.data
        },
    }
})

export default useAnalysisStore
```

#### 封装 Type 类型接口

```typescript
// types/index.ts
export interface IEchartValueType {
    value: number
    name: string
}
```

#### 实现玫瑰图数据展示

```typescript
// page-echarts/src/rose-echart.vue
<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'
import type { IEchartValueType } from '../types'
import type { EChartsOption } from 'echarts'

interface IProps {
  roseData: IEchartValueType[]
}

const props = defineProps<IProps>()

// 玫瑰图
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        bottom: '-25%',
        data: props.roseData,
        label: {
            show: false
        }
      }
    ]
  }
})
</script>
<style lang="less" scoped></style>
```

#### 实现折线图数据展示

```typescript
// page-echarts/src/line-echart.vue
<template>
  <div class="line-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'

interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps<IProps>()

// 玫瑰图
const option = computed<EChartsOption>(() => {
  return {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分类销量统计',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
```

#### 实现柱状图数据展示

```typescript
// // page-echarts/src/bar-echart.vue
<template>
  <div class="bar-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'

interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps<IProps>()

// 玫瑰图
const option = computed<EChartsOption>(() => {
  return {
    title: {
      text: '支持鼠标滚动缩放'
    },
    grid: {
      bottom: '5%'
    },
    xAxis: {
      data: props.labels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      z: 10
    },
    yAxis: {
      axisLabel: {
        color: '#999'
      }
    },
    series: [
      {
        type: 'bar',
        showBackground: true,
        data: props.values,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
```

#### 父组件将接口数据映射 Echart 需要的数据进行传递使用

```typescript
// dashboard.vue
<template>
  <div class="dashboard">
    <!--顶部卡片组件 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <count-card v-bind="item"/>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card>
          <pie-echart :pie-data="showGoodsCategoryCount"/>
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card>
          <line-echart/>
        </chart-card>

      </el-col>

      <el-col :span="7">
        <chart-card>
          <rose-echart :rose-data="showGoodsCategoryCount"/>
        </chart-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>
          <line-echart :labels="showGoodsCategorySale.labels" :values="showGoodsCategorySale.values"/>
        </chart-card>
      </el-col>

      <el-col :span="12">
        <chart-card>
          <bar-echart v-bind="showGoodsCategoryFavor"/>
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from "vue";
import countCard from "./cpns/count-card/count-card.vue";
import chartCard from "./cpns/chart-card/chart-card.vue";
import useAnalysisStore from '@/store/main/analysis/analysis'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor } = storeToRefs(analysisStore)

// 获取echart饼图、玫瑰图数据(将接口数据映射成name, value)
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})

// 获取echart折线图数据(将接口数据映射成labels、values)
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsSale)
  return { labels, values }
})

// 获取echart柱状图数据
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 15px;
}
</style>
```

### 实现 echart 地图数据展示

#### 引入地图位置经纬度 json 数据

[阿里云地图 JSON API](https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.769817845138945&lng=104.29901249999999&zoom=4)：[https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json](https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json)

#### 封装坐标信息

```typescript
// utils/coordinate-data.ts
export const coordinateData: any = {
  上海: [121.487899486, 31.24916171],
  临沧: [100.092612914, 23.8878061038],
  丽江: [100.229628399, 26.8753510895],
  保山: [99.1779956133, 25.1204891962],
  大理白族自治州: [100.223674789, 25.5968996394],
  德宏傣族景颇族自治州: [98.5894342874, 24.441239663],
  怒江傈僳族自治州: [98.8599320425, 25.8606769782],
  文山壮族苗族自治州: [104.246294318, 23.3740868504],
  昆明: [102.714601139, 25.0491531005],
  昭通: [103.725020656, 27.3406329636],
  普洱: [100.98005773, 22.7887777801],
  曲靖: [103.782538888, 25.5207581429],
  楚雄彝族自治州: [101.529382239, 25.0663556742],
  玉溪: [102.545067892, 24.3704471344],
  红河哈尼族彝族自治州: [103.384064757, 23.3677175165],
  西双版纳傣族自治州: [100.803038275, 22.0094330022],
  迪庆藏族自治州: [99.7136815989, 27.8310294612],
  乌兰察布: [113.112846391, 41.0223629468],
  乌海: [106.831999097, 39.6831770068],
  兴安盟: [122.048166514, 46.0837570652],
  包头: [109.846238532, 40.6471194257],
  呼伦贝尔: [119.760821794, 49.2016360546],
  呼和浩特: [111.66035052, 40.8283188731],
  巴彦淖尔: [107.42380672, 40.7691799024],
  赤峰: [118.930761192, 42.2971123203],
  通辽: [122.260363263, 43.633756073],
  鄂尔多斯: [109.993706251, 39.8164895606],
  锡林郭勒盟: [116.027339689, 43.9397048423],
  阿拉善盟: [105.695682871, 38.8430752644],
  北京: [116.395645038, 39.9299857781],
  台中: [119.337634104, 26.0911937119],
  台北: [114.130474436, 22.3748329286],
  台南: [121.360525873, 38.9658447898],
  嘉义: [114.246701335, 22.7288657203],
  高雄: [111.590952812, 21.9464822541],
  吉林: [126.564543989, 43.8719883344],
  四平: [124.391382074, 43.1755247011],
  延边朝鲜族自治州: [129.485901958, 42.8964136037],
  松原: [124.832994532, 45.1360489701],
  白城: [122.840776679, 45.6210862752],
  白山: [126.435797675, 41.945859397],
  辽源: [125.133686052, 42.9233026191],
  通化: [125.942650139, 41.7363971299],
  长春: [125.313642427, 43.8983376071],
  乐山: [103.760824239, 29.6009576111],
  内江: [105.073055992, 29.5994615348],
  凉山彝族自治州: [102.259590803, 27.8923929037],
  南充: [106.105553984, 30.8009651682],
  宜宾: [104.633019062, 28.7696747963],
  巴中: [106.757915842, 31.8691891592],
  广元: [105.81968694, 32.4410401584],
  广安: [106.635720331, 30.4639838879],
  德阳: [104.402397818, 31.1311396527],
  成都: [104.067923463, 30.6799428454],
  攀枝花: [101.722423152, 26.5875712571],
  泸州: [105.443970289, 28.8959298039],
  甘孜藏族自治州: [101.969232063, 30.0551441144],
  眉山: [103.841429563, 30.0611150799],
  绵阳: [104.705518975, 31.5047012581],
  自贡: [104.776071339, 29.3591568895],
  资阳: [104.635930302, 30.132191434],
  达州: [107.494973447, 31.2141988589],
  遂宁: [105.564887792, 30.5574913504],
  阿坝藏族羌族自治州: [102.228564689, 31.9057628583],
  雅安: [103.009356466, 29.9997163371],
  天津: [117.210813092, 39.1439299033],
  中卫: [105.196754199, 37.5211241916],
  吴忠: [106.208254199, 37.9935610029],
  固原: [106.285267996, 36.0215234807],
  石嘴山: [106.379337202, 39.0202232836],
  银川: [106.206478608, 38.5026210119],
  亳州: [115.787928245, 33.8712105653],
  六安: [116.505252683, 31.7555583552],
  合肥: [117.282699092, 31.8669422607],
  安庆: [117.058738772, 30.5378978174],
  宣城: [118.752096311, 30.9516423543],
  宿州: [116.988692412, 33.6367723858],
  池州: [117.494476772, 30.6600192482],
  淮北: [116.791447429, 33.9600233054],
  淮南: [117.018638863, 32.6428118237],
  滁州: [118.324570351, 32.3173505954],
  芜湖: [118.384108423, 31.3660197875],
  蚌埠: [117.357079866, 32.9294989067],
  铜陵: [117.819428729, 30.9409296947],
  阜阳: [115.820932259, 32.9012113306],
  马鞍山: [118.515881847, 31.6885281589],
  黄山: [118.293569632, 29.7344348562],
  东营: [118.583926333, 37.4871211553],
  临沂: [118.340768237, 35.0724090744],
  威海: [122.093958366, 37.5287870813],
  德州: [116.328161364, 37.4608259263],
  日照: [119.507179943, 35.4202251931],
  枣庄: [117.279305383, 34.8078830784],
  泰安: [117.089414917, 36.1880777589],
  济南: [117.024967066, 36.6827847272],
  济宁: [116.600797625, 35.4021216643],
  淄博: [118.059134278, 36.8046848542],
  滨州: [117.968292415, 37.4053139418],
  潍坊: [119.142633823, 36.7161148731],
  烟台: [121.30955503, 37.5365615629],
  聊城: [115.986869139, 36.4558285147],
  莱芜: [117.684666912, 36.2336541336],
  菏泽: [115.463359775, 35.2624404961],
  青岛: [120.384428184, 36.1052149013],
  临汾: [111.538787596, 36.0997454436],
  吕梁: [111.143156602, 37.527316097],
  大同: [113.290508673, 40.1137444997],
  太原: [112.550863589, 37.890277054],
  忻州: [112.727938829, 38.461030573],
  晋中: [112.7385144, 37.6933615268],
  晋城: [112.867332758, 35.4998344672],
  朔州: [112.479927727, 39.3376719662],
  运城: [111.006853653, 35.0388594798],
  长治: [113.120292086, 36.2016643857],
  阳泉: [113.569237602, 37.8695294932],
  东莞: [113.763433991, 23.0430238154],
  中山: [113.422060021, 22.5451775145],
  云浮: [112.050945959, 22.9379756855],
  佛山: [113.134025635, 23.0350948405],
  广州: [113.307649675, 23.1200491021],
  惠州: [114.41065808, 23.1135398524],
  揭阳: [116.379500855, 23.5479994669],
  梅州: [116.126403098, 24.304570606],
  汕头: [116.728650288, 23.3839084533],
  汕尾: [115.372924289, 22.7787305002],
  江门: [113.078125341, 22.5751167835],
  河源: [114.713721476, 23.7572508505],
  深圳: [114.025973657, 22.5460535462],
  清远: [113.040773349, 23.6984685504],
  湛江: [110.365067263, 21.2574631038],
  潮州: [116.630075991, 23.6618116765],
  珠海: [113.562447026, 22.2569146461],
  肇庆: [112.47965337, 23.0786632829],
  茂名: [110.931245331, 21.6682257188],
  阳江: [111.977009756, 21.8715173045],
  韶关: [113.594461107, 24.8029603119],
  北海: [109.122627919, 21.472718235],
  南宁: [108.297233556, 22.8064929356],
  崇左: [107.357322038, 22.4154552965],
  来宾: [109.231816505, 23.7411659265],
  柳州: [109.42240181, 24.3290533525],
  桂林: [110.260920147, 25.262901246],
  梧州: [111.30547195, 23.4853946367],
  河池: [108.069947709, 24.6995207829],
  玉林: [110.151676316, 22.6439736084],
  百色: [106.631821404, 23.9015123679],
  贵港: [109.613707557, 23.1033731644],
  贺州: [111.552594179, 24.4110535471],
  钦州: [108.638798056, 21.9733504653],
  防城港: [108.351791153, 21.6173984705],
  乌鲁木齐: [87.5649877411, 43.8403803472],
  伊犁哈萨克自治州: [81.2978535304, 43.9222480963],
  克孜勒苏柯尔克孜自治州: [76.1375644775, 39.7503455778],
  克拉玛依: [84.8811801861, 45.5943310667],
  博尔塔拉蒙古自治州: [82.0524362672, 44.9136513743],
  吐鲁番地区: [89.1815948657, 42.9604700169],
  和田地区: [79.9302386372, 37.1167744927],
  哈密地区: [93.5283550928, 42.8585963324],
  喀什地区: [75.9929732675, 39.4706271887],
  塔城地区: [82.9748805837, 46.7586836297],
  昌吉回族自治州: [87.2960381257, 44.0070578985],
  自治区直辖: [85.6148993383, 42.1270009576],
  阿克苏地区: [80.2698461793, 41.1717309015],
  阿勒泰地区: [88.1379154871, 47.8397444862],
  南京: [118.778074408, 32.0572355018],
  南通: [120.873800951, 32.0146645408],
  宿迁: [118.296893379, 33.9520497337],
  常州: [119.981861013, 31.7713967447],
  徐州: [117.188106623, 34.2715534311],
  扬州: [119.427777551, 32.4085052546],
  无锡: [120.305455901, 31.5700374519],
  泰州: [119.919606016, 32.4760532748],
  淮安: [119.030186365, 33.6065127393],
  盐城: [120.148871818, 33.3798618771],
  苏州: [120.619907115, 31.317987368],
  连云港: [119.173872217, 34.601548967],
  镇江: [119.455835405, 32.2044094436],
  上饶: [117.955463877, 28.4576225539],
  九江: [115.999848022, 29.7196395261],
  南昌: [115.893527546, 28.6895780001],
  吉安: [114.992038711, 27.1138476502],
  宜春: [114.400038672, 27.8111298958],
  抚州: [116.360918867, 27.9545451703],
  新余: [114.947117417, 27.8223215586],
  景德镇: [117.186522625, 29.3035627684],
  萍乡: [113.859917033, 27.639544223],
  赣州: [114.935909079, 25.8452955363],
  鹰潭: [117.035450186, 28.2413095972],
  保定: [115.494810169, 38.886564548],
  唐山: [118.183450598, 39.6505309225],
  廊坊: [116.703602223, 39.5186106251],
  张家口: [114.89378153, 40.8111884911],
  承德: [117.933822456, 40.9925210525],
  沧州: [116.863806476, 38.2976153503],
  石家庄: [114.522081844, 38.0489583146],
  秦皇岛: [119.604367616, 39.9454615659],
  衡水: [115.686228653, 37.7469290459],
  邢台: [114.520486813, 37.0695311969],
  邯郸: [114.482693932, 36.6093079285],
  三门峡: [111.181262093, 34.7833199411],
  信阳: [114.085490993, 32.1285823075],
  南阳: [112.542841901, 33.0114195691],
  周口: [114.654101942, 33.6237408181],
  商丘: [115.641885688, 34.4385886402],
  安阳: [114.351806508, 36.1102667222],
  平顶山: [113.300848978, 33.7453014565],
  开封: [114.351642118, 34.8018541758],
  新乡: [113.912690161, 35.3072575577],
  洛阳: [112.447524769, 34.6573678177],
  漯河: [114.0460614, 33.5762786885],
  濮阳: [115.026627441, 35.7532978882],
  焦作: [113.211835885, 35.234607555],
  许昌: [113.83531246, 34.0267395887],
  郑州: [113.64964385, 34.7566100641],
  驻马店: [114.049153547, 32.9831581541],
  鹤壁: [114.297769838, 35.7554258742],
  丽水: [119.929575843, 28.4562995521],
  台州: [121.440612936, 28.6682832857],
  嘉兴: [120.760427699, 30.7739922396],
  宁波: [121.579005973, 29.8852589659],
  杭州: [120.219375416, 30.2592444615],
  温州: [120.690634734, 28.002837594],
  湖州: [120.137243163, 30.8779251557],
  绍兴: [120.592467386, 30.0023645805],
  舟山: [122.169872098, 30.0360103026],
  衢州: [118.875841652, 28.9569104475],
  金华: [119.652575704, 29.1028991054],
  三亚: [109.522771281, 18.2577759149],
  三沙: [112.350383075, 16.840062894],
  海口: [110.330801848, 20.022071277],
  十堰: [110.801228917, 32.6369943395],
  咸宁: [114.300060592, 29.8806567577],
  孝感: [113.935734392, 30.9279547842],
  宜昌: [111.310981092, 30.732757818],
  恩施土家族苗族自治州: [109.491923304, 30.2858883166],
  武汉: [114.316200103, 30.5810841269],
  省直辖: [112.410562192, 31.2093162501],
  荆州: [112.241865807, 30.332590523],
  荆门: [112.217330299, 31.0426112029],
  襄阳: [112.250092848, 32.2291685915],
  鄂州: [114.895594041, 30.3844393228],
  随州: [113.379358364, 31.7178576082],
  黄冈: [114.906618047, 30.4461089379],
  黄石: [115.050683164, 30.2161271277],
  娄底: [111.996396357, 27.7410733023],
  岳阳: [113.146195519, 29.3780070755],
  常德: [111.653718137, 29.0121488552],
  张家界: [110.481620157, 29.1248893532],
  怀化: [109.986958796, 27.5574829012],
  株洲: [113.131695341, 27.8274329277],
  永州: [111.614647686, 26.4359716468],
  湘潭: [112.935555633, 27.835095053],
  湘西土家族苗族自治州: [109.7457458, 28.3179507937],
  益阳: [112.366546645, 28.5880877799],
  衡阳: [112.583818811, 26.8981644154],
  邵阳: [111.461525404, 27.2368112449],
  郴州: [113.037704468, 25.7822639757],
  长沙: [112.979352788, 28.2134782309],
  无堂区划分区域: [113.557519102, 22.2041179884],
  澳门半岛: [113.566432335, 22.1950041592],
  澳门离岛: [113.557519102, 22.2041179884],
  临夏回族自治州: [103.215249178, 35.5985143488],
  兰州: [103.823305441, 36.064225525],
  嘉峪关: [98.2816345853, 39.8023973267],
  天水: [105.736931623, 34.5843194189],
  定西: [104.626637601, 35.5860562418],
  平凉: [106.688911157, 35.55011019],
  庆阳: [107.644227087, 35.7268007545],
  张掖: [100.459891869, 38.939320297],
  武威: [102.640147343, 37.9331721429],
  甘南藏族自治州: [102.917442486, 34.9922111784],
  白银: [104.171240904, 36.5466817062],
  酒泉: [98.5084145062, 39.7414737682],
  金昌: [102.208126263, 38.5160717995],
  陇南: [104.934573406, 33.3944799729],
  三明: [117.642193934, 26.2708352794],
  南平: [118.181882949, 26.6436264742],
  厦门: [118.103886046, 24.4892306125],
  宁德: [119.54208215, 26.6565274192],
  泉州: [118.600362343, 24.901652384],
  漳州: [117.676204679, 24.5170647798],
  福州: [119.330221107, 26.0471254966],
  莆田: [119.077730964, 25.4484501367],
  龙岩: [117.017996739, 25.0786854335],
  山南地区: [91.7506438744, 29.2290269317],
  拉萨: [91.111890896, 29.6625570621],
  日喀则地区: [88.8914855677, 29.2690232039],
  昌都地区: [97.18558158, 31.1405756319],
  林芝地区: [94.3499854582, 29.6669406258],
  那曲地区: [92.0670183689, 31.4806798301],
  阿里地区: [81.1076686895, 30.4045565883],
  六盘水: [104.85208676, 26.5918660603],
  安顺: [105.928269966, 26.2285945777],
  毕节: [105.333323371, 27.4085621313],
  贵阳: [106.709177096, 26.6299067414],
  遵义: [106.931260316, 27.6999613771],
  铜仁: [109.168558028, 27.6749026906],
  黔东南苗族侗族自治州: [107.985352573, 26.5839917665],
  黔南布依族苗族自治州: [107.52320511, 26.2645359974],
  黔西南布依族苗族自治州: [104.900557798, 25.0951480559],
  丹东: [124.338543115, 40.1290228266],
  大连: [121.593477781, 38.9487099383],
  抚顺: [123.929819767, 41.8773038296],
  朝阳: [120.446162703, 41.5718276679],
  本溪: [123.77806237, 41.3258376266],
  沈阳: [123.432790922, 41.8086447835],
  盘锦: [122.07322781, 41.141248023],
  营口: [122.233391371, 40.6686510665],
  葫芦岛: [120.860757645, 40.7430298813],
  辽阳: [123.172451205, 41.2733392656],
  铁岭: [123.854849615, 42.2997570121],
  锦州: [121.147748738, 41.1308788759],
  阜新: [121.660822129, 42.0192501071],
  鞍山: [123.007763329, 41.1187436822],
  重庆: [106.530635013, 29.5446061089],
  咸阳: [108.707509278, 34.345372996],
  商洛: [109.934208154, 33.8739073951],
  安康: [109.038044563, 32.70437045],
  宝鸡: [107.170645452, 34.3640808097],
  延安: [109.500509757, 36.6033203523],
  榆林: [109.745925744, 38.2794392401],
  汉中: [107.045477629, 33.0815689782],
  渭南: [109.483932697, 34.5023579758],
  西安: [108.953098279, 34.2777998978],
  铜川: [108.968067013, 34.9083676964],
  果洛藏族自治州: [100.223722769, 34.4804845846],
  海东地区: [102.085206987, 36.5176101677],
  海北藏族自治州: [100.879802174, 36.9606541011],
  海南藏族自治州: [100.624066094, 36.2843638038],
  海西蒙古族藏族自治州: [97.3426254153, 37.3737990706],
  玉树藏族自治州: [97.0133161374, 33.0062399097],
  西宁: [101.76792099, 36.640738612],
  黄南藏族自治州: [102.007600308, 35.5228515517],
  九龙: [114.173291988, 22.3072458588],
  新界: [114.146701965, 22.4274312754],
  香港岛: [114.183870524, 22.2721034276],
  七台河: [131.019048047, 45.7750053686],
  伊春: [128.910765978, 47.7346850751],
  佳木斯: [130.284734586, 46.8137796047],
  双鸭山: [131.17140174, 46.6551020625],
  哈尔滨: [126.657716855, 45.7732246332],
  大兴安岭地区: [124.19610419, 51.991788968],
  大庆: [125.02183973, 46.59670902],
  牡丹江: [129.608035396, 44.5885211528],
  绥化: [126.989094572, 46.646063927],
  鸡西: [130.941767273, 45.3215398866],
  鹤岗: [130.292472051, 47.3386659037],
  黑河: [127.500830295, 50.2506900907],
  齐齐哈尔: [123.987288942, 47.3476998134]
}
```

#### 封装转化坐标信息属性为 echart 地图所需属性工具

```typescript
// utils/convert-data.ts
import { coordinateData } from "./coordinate-data"

export function convertData(data: any) {
    const res = []
    for(let i = 0; i < data.length; i++) {
        const geoCoord = coordinateData[data[i].name]
        if(geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res
}
```

#### echart 注册地图

```typescript
// base-echart.vue
<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
// 获取echart的option类型
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'

// echart注册地图
echarts.registerMap('china', ChinaJSON as any)

// 接收每个echart不同配置
interface IProps {
    option: EChartsOption
}
const props = defineProps<IProps>()

// 1. 引用dom实例
const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 2. 基于准备好的dom，初始化echart实例
  const echartInstance = echarts.init(echartRef.value!, "light", {
    renderer: 'canvas'
  })

  // 3.第一次options(配置),动态传入每个图的option
  // watchEffect监听option变化，重新执行
  watchEffect(() => echartInstance.setOption(props.option))

  // 4.监听window缩放实现echart响应式布局
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="less" scoped>
.echart {
  height: 250px;
}
</style>
```

#### 编写 echart 地图组件

```typescript
// map-echart.vue
<template>
  <div class="map-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types'
import { convertData } from '../utils/convert-data'

const props = defineProps<{
    mapData: IEchartValueType[]
}>()

// 只负责传入饼图的option
const option = computed<EChartsOption>(() => {
  return {
    width: '270px',
    height: '250px',
    center: [100, 32],
    backgroundColor: '#fff',
    title: {
        text: '全国销量统计',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params: any) {
            return params.name + ' : ' + params.value[2]
        }
    },
    visualMap: {
        min: 0,
        max: 60000,
        left: 20,
        bottom: 20,
        calculable: true,
        text: ['高', '低'],
        inRange: {
            color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        // 设置使用的地图(注册过的china地址)
        map: 'china',
        // 支持鼠标缩放效果
        // roam: 'scale',
        emphasis: {
            areaColor: '#f4cccc',
            borderColor: 'rgb(9, 54, 95)',
            itemStyle: {
                areaColor: '#f4cccc'
            }
        }
    },
    series: [
        {
            name: '销量',
            // 散点图在地图上展示数据
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(props.mapData),
            // 散点的大小（可以根据数据不同显示不同的大小，设置为一个函数）
            symbolSize: 11,
            emphasis: {
                itemStyle: {
                    borderCap: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            // 会自动生成geo地理坐标系统
            type: 'map',
            // 设置使用的地图名称，复用的是第0个坐标系统
            map: 'china'
        }
    ]
  }
})
</script>

<style lang="less" scoped></style>
```

#### 封装地图商品销量请求数据

```typescript
// service/analysis.ts
// 获取地图数据
export function getGoodsAddressSale() {
    return hyRequest.get({
        url: '/goods/address/sale'
    })
}
```

```typescript
import { getAmountListData, getGoodsAddressSale, getGoodsCategoryCount, getGoodsCategoryFavor, getGoodsCategorySale } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    // ...
    goodsAddressSale: any[]
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        // ....
        goodsAddressSale: []
    }),
    actions: {
        async fetchAnalysisDataAction() {
            // 顶部卡片数据...
            // 获取饼图、玫瑰图数据...
            // 获取折线图数据...
            // 获取柱状图数据...

            // 获取地图数据
            const goodsAddressSaleResult = await getGoodsAddressSale()
            this.goodsAddressSale = goodsAddressSaleResult.data
            console.log(this.goodsAddressSale);
        },
    }
})

export default useAnalysisStore
```

#### 父组件传递数据给地图组件

```typescript
// dashboard.vue
<template>
  <div class="dashboard">
    <!--顶部卡片组件 -->
    // ...
    <el-row :gutter="10">
      <el-col :span="10">
        <chart-card>
          <map-echart :map-data="showGoodsAddressSale"/>
        </chart-card>
      </el-col>
    </el-row>
    // ....
  </div>
</template>

<script setup lang="ts">
import useAnalysisStore from '@/store/main/analysis/analysis'
// ...

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } = storeToRefs(analysisStore)

// 获取echart饼图数据...
// 获取echart折线图数据...
// 获取echart柱状图数据...

// 获取echart地图数据
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
</script>
```
