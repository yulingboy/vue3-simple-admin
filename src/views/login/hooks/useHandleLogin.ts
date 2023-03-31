import { ref } from "vue"
import type { Ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { useRouter } from "vue-router"

import { ElNotification } from "element-plus"
// 引入 store
import { useUserStore } from "@/store/modules/user"
// 引入 api
import { useAuthApi } from "@/api/auth"
import type { ILoginRequestData } from "@/api/auth/types/login"

export default function useHandleLogin(
  loginForm: Ref<ILoginRequestData>,
  handleRemember: () => void,
  handleGetCaptcha: () => void
) {
  const router = useRouter()
  const userStore = useUserStore()
  // 表单 ref 实例
  const loginFormRef = ref<FormInstance>()
  // 登录状态
  const btnLoading = ref(false)
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
  return { loginFormRef, btnLoading, rules, handleLogin }
}
