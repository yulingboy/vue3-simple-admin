<template>
  <div v-if="!data.meta?.hideMenu">
    <!-- 只有一级菜单，没有子项 -->
    <template v-if="lastItem && !lastItem.children">
      <el-menu-item :index="lastItem.path" @click="menuItemClick">
        <svg-icon v-if="icon" :name="icon" />
        <template #title>{{ lastItem.meta?.title }}</template>
      </el-menu-item>
    </template>
    <!-- 有二级菜单 -->
    <template v-else-if="childMenuList.length > 1">
      <el-sub-menu :index="data.path">
        <template #title>
          <svg-icon v-if="icon" :name="icon" />
          <span>{{ data.meta?.title }}</span>
        </template>
        <template v-if="data.children">
          <side-bar-item v-for="child in data.children" :key="child.name" :data="child">
            <template #title>{{ child.meta?.title }}</template>
          </side-bar-item>
        </template>
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import { useRouter } from "vue-router"
import type { RouteItem } from "/#/menu"

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    },
    required: true
  },
  icon: {
    type: String
  }
})

const router = useRouter()

// 过滤掉隐藏的菜单，例如 详情页
const childMenuList = computed(() => {
  let result = []
  if (props.data?.children) {
    result = props.data.children.filter((e: RouteItem) => !e.meta?.hideMenu)
  }
  return result
})
/**
 * 获取菜单 如果chilidren只有一个，将child赋值给自身，这样只有一个子菜单时，不会显示子菜单
 * 如果没有children，直接返回自身
 */
const lastItem = computed(() => {
  let result = null
  if (childMenuList.value.length === 1) {
    result = {
      ...childMenuList.value[0]
    }
  } else if (!props.data.children) {
    result = {
      ...props.data
    }
  }
  return result
})

// 菜单点击事件
const menuItemClick = (m: any) => {
  router.push(m.index)
}
</script>

<style lang="scss">
.is-active {
  > .el-sub-menu__title {
    color: var(--el-color-primary);
  }
}
</style>
