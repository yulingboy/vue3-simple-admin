<template>
  <el-form ref="loginFormRef" size="large" :model="loginForm" :rules="rules" @keyup.enter="handleLogin(loginFormRef)">
    <!-- 用户名 -->
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" prefix-icon="el-icon-user" clearable placeholder="请输入用户名">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        prefix-icon="el-icon-lock"
        clearable
        show-password
        placeholder="请输入密码"
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- 验证码 -->
    <el-form-item prop="code">
      <el-row style="width: 100%">
        <el-col :span="16">
          <el-input v-model="loginForm.code" clearable placeholder="请输入验证码">
            <template #prefix>
              <el-icon><Iphone /></el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <img class="captcha-img" :src="captchaImg" alt="" @click="handleGetCaptcha" />
        </el-col>
      </el-row>
    </el-form-item>
    <!-- 记住密码 -->
    <el-form-item style="margin-bottom: 10px">
      <el-col :span="12">
        <el-checkbox label="记住密码" v-model="rememberMe" />
      </el-col>
    </el-form-item>
    <!-- 登录 -->
    <el-form-item>
      <el-button type="primary" style="width: 100%" :loading="btnLoading" @click="handleLogin(loginFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from "vue"
import { useRouter } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"
import { ElNotification } from "element-plus"
import type { ILoginRequestData } from "@/api/auth/types/login"
// 图标
import { User, Lock, Iphone } from "@element-plus/icons-vue"
// 引入 store
import { useUserStore } from "@/store/modules/user"
// 引入 api
import { useAuthApi } from "@/api/auth"
// 引入 hooks
import useGetCaptcha from "../hooks/useGetCaptcha"
import useRememberMe from "../hooks/useRememberMe"

const router = useRouter()
const userStore = useUserStore()

// 获取验证码
const { captchaImg, handleGetCaptcha } = useGetCaptcha()

// 表单 ref 实例
const loginFormRef = ref<FormInstance>()
// 登录状态
const btnLoading = ref(false)
// 登录表单
const loginForm = ref<ILoginRequestData>({
  username: "admin",
  password: "123456",
  code: "nmt6"
})
// 记住密码
const { rememberMe, handleRemember, getLocalLoginInfo } = useRememberMe(loginForm)
// 表单验证规则
const rules = reactive<FormRules>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "用户名长度在3 ~ 5之间", trigger: "blur" }
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
})
// 登录
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      const { username, password, code } = loginForm.value
      // 处理是否记住密码
      handleRemember()
      try {
        btnLoading.value = true
        const { data } = await useAuthApi.login({ username, password, code })
        console.log(data)
        userStore.setToken(data.token)
        userStore.setUserInfo(data.userInfo)
        router.push("/")
        ElNotification({
          type: "success",
          title: "登录成功",
          message: `欢迎回来，${data.userInfo.username}`,
          showClose: true,
          offset: 0,
          duration: 3000
        })
      } catch (error) {
        handleGetCaptcha()
        loginForm.value.code = ""
      } finally {
        btnLoading.value = false
      }
    }
  })
}
onBeforeMount(() => {
  handleGetCaptcha()
  getLocalLoginInfo()
})
</script>

<style scoped>
.el-row {
  height: 40px;
}
.el-col {
  height: 100%;
}
.captcha-img {
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin-left: 30px;
}
</style>
