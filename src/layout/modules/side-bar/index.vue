<template>
  <div class="side-container" :style="{ width: isCollapse ? '64px' : '200px' }">
    <!-- logo 区域 -->
    <div class="logo-container">
      {{ isCollapse ? "admin" : "vue-simple-admin" }}
    </div>
    <!-- 导航栏区域 -->
    <el-scrollbar class="menu-container">
      <el-menu unique-opened :default-active="activeMenu" :collapse="isCollapse" style="height: 100%">
        <side-bar-item v-for="item in appMenuList" :key="item.name" :data="item" :icon="item.meta?.icon" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import { useUserStore } from "@/store/modules/user"
import { useAppStore } from "@/store/modules/app"
import SideBarItem from "./side-bar-item.vue"

const route = useRoute()
const userStore = useUserStore()
const appStore = useAppStore()

// 计算侧边栏高亮菜单
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
})
// 计算路由表结构
const appMenuList = computed(() => userStore.appMenuList)
console.log(appMenuList)
// 计算侧边栏是否展开
const isCollapse = computed(() => appStore.isCollapse)
</script>

<style lang="scss" scoped>
.side-container {
  width: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.28s;
  .logo-container {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.28s;
    font-weight: bold;
    white-space: nowrap;
    border-bottom: 1px solid #ebeef5;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .menu-container {
    flex: 1;
  }
}
</style>
<style lang="scss">
.el-menu {
  border-right: none;
}
.el-menu--collapse {
  .el-tooltip__trigger {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .svg-icon {
    margin-right: 0 !important;
  }
  .el-sub-menu__title {
    span {
      display: none !important;
    }
    .el-icon {
      display: none !important;
    }
  }
}
</style>
