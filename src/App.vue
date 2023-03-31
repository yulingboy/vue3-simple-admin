<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn"

const locale = zhCn
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.main-container {
  background-color: #f0f2f5;
  padding: 10px;
}
</style>
