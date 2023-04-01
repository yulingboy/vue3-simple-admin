import type { RouteRecordRaw } from "vue-router"

export default [
  {
    path: "/monitor",
    name: "Monitor",
    component: () => import("@/views/monitor/index.vue"),
    meta: {
      title: "系统监控",
      code: "A",
      icon: "home"
    }
  }
] as RouteRecordRaw[]
