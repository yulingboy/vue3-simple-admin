import { request } from "@/service"
import type * as Login from "./types/login"

export const useAuthApi = {
  // 获取验证码
  getCaptcha: () => {
    return request<Login.LoginCodeResponseData>({
      url: "/account/captcha",
      method: "get"
    })
  },
  // 登录
  login: (data: Login.ILoginRequestData) => {
    return request<Login.LoginResponseData>({
      url: "/account/login",
      method: "post",
      data
    })
  },
  // 获取当前用户信息
  current: () => {
    return request({
      url: "/account/current",
      method: "get"
    })
  },
  // 获取当前用户权限列表
  getPermissionCodes: () => {
    return request<Login.PermissionCodesResponseData>({
      url: "/account/getPermission",
      method: "get"
    })
  }
}
