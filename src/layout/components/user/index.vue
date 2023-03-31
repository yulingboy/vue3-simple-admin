<template>
  <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
    <div class="avatar-wrapper">
      <!-- 头像 现在是写死的 icon -->
      <svg-icon name="avatar" class-name="fs26" />
      <span>{{ userInfo?.username }}</span>
      <el-icon class="el-icon--right"><caret-bottom /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/user/center">
          <el-dropdown-item>个人中心</el-dropdown-item>
        </router-link>
        <span style="display: block" @click="onLogout">
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </span>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElMessageBox } from "element-plus"
import { computed } from "vue"
import { useUserStore } from "@/store/modules/user"
import { IUserInfo } from "@/api/auth/types/login"

const userStore = useUserStore()
// 获取用户信息
const userInfo = computed(() => userStore.userInfo as IUserInfo)
// 退出登录
const onLogout = () => {
  ElMessageBox.confirm("确定退出当前登录账号吗？", "提示", {
    type: "warning"
  }).then(() => {
    userStore.logout()
  })
}
</script>
<style lang="scss" scoped>
.avatar-container {
  cursor: pointer;
}
</style>
