<template>
  <el-icon class="mr10 pointer" @click="handleRefresh" :size="22">
    <refresh color="#707070" />
  </el-icon>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { useTabsStore } from "@/store/modules/tabs"

const router = useRouter()
const route = useRoute()
const tabsStore = useTabsStore()
// 刷新当前路由页面
const handleRefresh = () => {
  tabsStore.removeKeepAlive(route.name as string)
  router.replace({
    path: "/redirect-to",
    query: {
      ...route.query,
      redirectPath: route.path
    }
  })
}
</script>
<style lang="scss" scoped></style>
