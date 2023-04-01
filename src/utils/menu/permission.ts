import { useUserStore } from "@/store/modules/user"
import { flatArray } from "../index"
import type { RouteRecordRaw } from "vue-router"
/**
 * 根据权限编码过滤路由菜单
 * @param data 路由菜单
 * @param permissionCodes 权限编码数组
 * @returns
 */
export const filterDynamicRoutes = (data: RouteRecordRaw[], permissionCodes: string[]) => {
  const fn = (list: RouteRecordRaw[], codes: string[]) => {
    for (let i = list.length - 1; i >= 0; i--) {
      const item = list[i]
      if (item.children && item.children.length) {
        filterDynamicRoutes(item.children, codes)
      } else if (item.meta?.code && !codes.includes(item.meta.code)) {
        list.splice(i, 1)
      }
    }
  }
  fn(data, permissionCodes)
  return data
}

/**
 * 判断是否有权限
 * @param code 权限编码
 * @returns
 */
export const hasPermission = (code: string) => {
  const userStore = useUserStore()
  const codes: string[] = userStore.permissionCodes || []
  return codes.includes(code)
}

// 将多久路由扁平化成一级路由
export const flatRoutes = (routes: RouteRecordRaw[], newArr: RouteRecordRaw[] = []) => {
  routes.forEach((item) => {
    if (item.children && item.children.length) {
      flatArray(item.children, newArr)
    } else {
      newArr.push(item)
    }
  })
  return newArr
}
/**
 * 重定向处理 根据权限过滤路由后，可能父路由重定向的子路由被过滤掉，所以需要重新处理重定向
 * @param routes 根据权限过滤后的路由
 * @returns 重定向处理后的路由
 */
export const handleRedirect = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  return routes.map((route) => {
    if (route.children && route.children.length > 0) {
      const [child] = route.children
      if (child.path) {
        route.redirect = child.path
      } else {
        throw new Error("Child route must have a path property")
      }
    } else if (route.children) {
      route.children = handleRedirect(route.children)
    }
    return route
  })
}
