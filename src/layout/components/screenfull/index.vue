<template>
  <svg-icon
    :name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
    class-name="fs22 pointer"
    @click="toggleFullscreen()"
  />
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core"

// 计算是否全屏
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
