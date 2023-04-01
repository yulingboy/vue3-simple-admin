import { createRouter, createWebHashHistory } from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { useUserStore } from "@/store/modules/user"
import { flatRoutes } from "@/utils/menu/permission"
import { cloneDeep } from "lodash-es"
import constantRoutes, { notFoundRoute } from "./constant"
import Layout from "@/layout/index.vue"
import { useAuthApi } from "@/api/auth"
import { ElMessage } from "element-plus"
import "./dynamic/index"

NProgress.configure({
  easing: "ease",
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes]
})

router.beforeEach(async (to) => {
  NProgress.start()
  const userStore = useUserStore()
  if (userStore.token) {
    if (to.name === "Login") {
      return { name: "Home" }
    }
    if (userStore.permissionCodes.length === 0) {
      const { data: permissionCodes } = await useAuthApi.getPermissionCodes()
      if (permissionCodes.length) {
        userStore.setPermissionCodes(permissionCodes)
        const permissionRoutes = userStore.generatePermissionRoutes()
        const finalRoutes = flatRoutes(cloneDeep(permissionRoutes))
        router.addRoute({
          path: "/layout",
          name: "Layout",
          component: Layout,
          children: finalRoutes
        })
        router.addRoute("Layout", notFoundRoute)
        return to.fullPath
      } else {
        ElMessage.error("系统权限不足，请联系管理员授权后重新登录")
        userStore.logout()
      }
    }
    return true
  } else {
    if (to.meta?.auth !== false) {
      return { name: "Login" }
    }
    return true
  }
})

router.afterEach((to) => {
  NProgress.done()
  // 设置页面标题
  const appTitle = import.meta.env.VITE_APP_TITLE
  const title = to.meta?.title ? `${to.meta.title}-${appTitle}` : appTitle
  document.title = title
})

router.onError(() => {
  NProgress.done()
})

export default router
