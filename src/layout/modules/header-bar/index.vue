<template>
  <div class="header-bar">
    <div class="left-box">
      <collapse />
      <breadcrumb />
    </div>
    <div class="flex items-center">
      <refresh />
      <screenfull />
      <user />
    </div>
  </div>
</template>

<script lang="ts" setup>
import collapse from "@/layout/components/collapse/index.vue"
import breadcrumb from "@/layout/components/breadcrumb/index.vue"
import refresh from "@/layout/components/refresh/index.vue"
import screenfull from "@/layout/components/screenfull/index.vue"
import user from "@/layout/components/user/index.vue"
</script>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #f4f4f4;
  .left-box {
    display: flex;
    align-items: center;
  }
}

.el-icon--right {
  position: relative;
  top: 2px;
}
</style>
