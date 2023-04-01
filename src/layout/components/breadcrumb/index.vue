<template>
  <el-breadcrumb separator="/" class="breadcrumb-container">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbList.length - 1" class="no-redirect">
          {{ item?.meta?.title }}
        </span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{ item?.meta?.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { useUserStore } from "@/store/modules/user"

const breadcrumbList = ref<RouteRecordRaw[]>([])
const route = useRoute()
const userStore = useUserStore()

function findAncestorWithPath(
  data: RouteRecordRaw[],
  path: string,
  ancestors: RouteRecordRaw[] = []
): RouteRecordRaw[] | null {
  for (const item of data) {
    if (item.path === path) {
      return [...ancestors, item]
    }

    if (item.children) {
      const result = findAncestorWithPath(item.children, path, [...ancestors, item])
      if (result) {
        return result
      }
    }
  }

  return null
}
// 计算路由表结构
const appMenuList = computed(() => userStore.appMenuList)
// 计算侧边栏高亮菜单
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
})
// 获取路由列表
const getBreadcrumbList = () => {
  breadcrumbList.value = (findAncestorWithPath(appMenuList.value, activeMenu.value) || [])
    .filter((item: RouteRecordRaw) => item.meta && item.meta.title)
    .filter((item: RouteRecordRaw) => !item.children || item.children.length > 1)
  console.log("breadcrumbList", breadcrumbList.value)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbList()
  },
  {
    immediate: true
  }
)

// 处理点击事件

const router = useRouter()
const onLinkClick = (item: RouteRecordRaw) => {
  const { path, redirect } = item
  console.log("redirect", redirect)
  if (redirect) return router.push(redirect as string)
  router.push(path)
}
</script>
<style lang="scss" scoped>
.breadcrumb-container {
  margin-left: 10px;
}
</style>
