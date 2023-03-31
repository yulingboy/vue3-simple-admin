import { APP_PREFIX } from "@/config/constants"

const local = {
  get(key: string) {
    const value = localStorage.getItem(`${APP_PREFIX}-${key}`)
    if (!value) return
    return JSON.parse(value).data
  },
  set(key: string, value: any) {
    // 如果没有值，直接返回
    if (!value) return
    // 如果是对象，转换为字符串
    const data = {
      type: "local",
      data: value
    }
    localStorage.setItem(`${APP_PREFIX}-${key}`, JSON.stringify(data))
  },
  remove(key: string) {
    localStorage.removeItem(`${APP_PREFIX}-${key}`)
  }
}
export default local
