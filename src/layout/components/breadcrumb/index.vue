<template>
  <el-breadcrumb separator="/" class="breadcrumb-container">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbList.length - 1" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import type { RouteLocationMatched } from "vue-router"

const breadcrumbList = ref<RouteLocationMatched[]>([])
const route = useRoute()

// 获取路由列表
const getBreadcrumbList = () => {
  breadcrumbList.value = route.matched.filter(
    (item: RouteLocationMatched) => item.meta && item.meta.title && item.meta.title !== "首页"
  )
  console.log(breadcrumbList.value)
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
const onLinkClick = (item: RouteLocationMatched) => router.push(item.path)
</script>
<style lang="scss" scoped>
.breadcrumb-container {
  margin-left: 10px;
}
</style>
