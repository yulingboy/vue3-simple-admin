import { ref } from "vue"
// api 接口
import { useAuthApi } from "@/api/auth/index"
export default function useGetCaptcha() {
  // 验证码图片
  const captchaImg = ref("")
  // 获取验证码
  const handleGetCaptcha = async () => {
    const { data } = await useAuthApi.getCaptcha()
    captchaImg.value = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(data as any)))
  }
  return { captchaImg, handleGetCaptcha }
}
