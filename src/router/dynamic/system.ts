import type { RouteRecordRaw } from "vue-router"

export default [
  {
    path: "/system",
    name: "System",
    redirect: "/system/user",
    meta: {
      title: "系统管理",
      icon: "home"
    },
    children: [
      {
        name: "User",
        path: "/system/user",
        component: () => import("@/views/system/user/index.vue"),
        meta: {
          title: "用户管理",
          code: "A"
        }
      },
      {
        name: "Role",
        path: "/system/role",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          title: "角色管理",
          code: "B"
        }
      }
    ]
  }
] as RouteRecordRaw[]
