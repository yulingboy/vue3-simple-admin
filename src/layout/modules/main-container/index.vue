<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="keepAliveList" :max="10">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useTabsStore } from "@/store/modules/tabs"

const tabsStore = useTabsStore()
// 获取缓存列表
const keepAliveList = computed<string[]>(() => {
  return tabsStore.keepAliveList || []
})
</script>

<style lang="scss" scoped></style>
