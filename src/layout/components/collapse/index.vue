<template>
  <el-icon :size="20" @click="toggleCollapse" class="icon">
    <component :is="icon" />
  </el-icon>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/modules/app"
import { computed } from "vue"

// 获取appStore
const appStore = useAppStore()
// 计算侧边栏是否展开
const isCollapse = computed(() => appStore.isCollapse)
// 计算侧边栏图标
const icon = computed(() => {
  return isCollapse.value ? "Fold" : "Expand"
})
// 切换侧边栏展开收起
const toggleCollapse = () => {
  appStore.toggleCollapse()
}
</script>
<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
