<template>
  <div class="layout-wrapper">
    <side-bar style="flex: 0 0 auto" />
    <div class="right-wrapper">
      <header-bar />
      <tabs-bar />
      <div class="main-container">
        <main-container />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainContainer from "./modules/main-container/index.vue"
import HeaderBar from "./modules/header-bar/index.vue"
import SideBar from "./modules/side-bar/index.vue"
import TabsBar from "./modules/tabs-bar/index.vue"
</script>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  height: 100vh;
  .right-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main-container {
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
