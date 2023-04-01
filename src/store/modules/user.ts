import { defineStore } from "pinia"
import dynamicRoutes from "@/router/dynamic/index"
import constantRoutes from "@/router/constant"
import { cloneDeep } from "lodash-es"
import { useTabsStore } from "./tabs"
import { IUserInfo } from "@/api/auth/types/login"
import { filterDynamicRoutes, handleRedirect } from "@/utils/menu/permission"

interface UserState {
  token: string
  userInfo: IUserInfo | null
  permissionCodes: string[]
  permissionRoutes: any[]
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => {
    return {
      token: "",
      userInfo: null,
      // 权限编码
      permissionCodes: [],
      // 权限路由
      permissionRoutes: []
    }
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["userInfo", "token"]
      }
    ]
  },
  // 定义 UserStore 的 getters
  getters: {
    // 返回 constantRoutes 和 permissionRoutes 数组的合并结果 合并静态路由和动态路由
    appMenuList: (state) => {
      return [...constantRoutes, ...state.permissionRoutes]
    }
  },

  actions: {
    // 设置token
    setToken(token: string) {
      this.token = token
    },
    // 设置用户信息
    setUserInfo(userInfo: IUserInfo | null) {
      this.userInfo = userInfo
    },
    // 设置权限编码
    setPermissionCodes(codes: string[]) {
      this.permissionCodes = codes || []
    },
    // 设置权限路由
    setPermissionRoutes(routes: any[]) {
      this.permissionRoutes = routes || []
    },
    // 生成权限路由
    generatePermissionRoutes() {
      const data = cloneDeep(dynamicRoutes)
      let res = filterDynamicRoutes(data, this.permissionCodes)
      res = handleRedirect(res)
      console.log("res", res)
      this.setPermissionRoutes(res)
      return res
    },

    // 退出登录
    logout() {
      this.setToken("")
      this.setUserInfo(null)
      this.setPermissionCodes([])
      this.setPermissionRoutes([])
      const tabStore = useTabsStore()
      tabStore.clearTab()
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }
  }
})
