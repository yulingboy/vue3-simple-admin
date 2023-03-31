import { ref } from "vue"
import type { Ref } from "vue"
import type { ILoginRequestData } from "@/api/auth/types/login"

// 本地存储
import local from "@/utils/storage/local"

export default function useRememberMe(loginForm: Ref<ILoginRequestData>) {
  const rememberMe = ref(false)
  // 记住密码常量
  const IS_REMEMBER = "isRemember"

  // 是否记住密码 是就保存账号密码信息 否就删除账号密码信息
  const handleRemember = () => {
    const { username, password } = loginForm.value
    if (rememberMe.value) {
      local.set(IS_REMEMBER, { username, password })
    } else {
      local.remove(IS_REMEMBER)
    }
  }

  // 本地存储的登录信息
  const getLocalLoginInfo = () => {
    const isRememberMe = local.get(IS_REMEMBER)
    if (isRememberMe) {
      loginForm.value.username = isRememberMe.username
      loginForm.value.password = isRememberMe.password
      rememberMe.value = true
    }
  }
  return { rememberMe, handleRemember, getLocalLoginInfo }
}
