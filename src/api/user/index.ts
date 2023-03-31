import { request } from "@/service"
import { IUser } from "./interface"

export const useUserApi = {
  // 获取用户列表
  getUserList: (params: any) => {
    return request<IUser.ResUserList[]>({
      url: "/user",
      method: "get",
      params
    })
  },
  // 添加用户
  addUser: (data: any) => {
    return request({
      url: "/user",
      method: "post",
      data
    })
  },
  // 编辑用户
  editUser: (data: any, id: string) => {
    return request({
      url: `/user/${id}`,
      method: "post",
      data
    })
  },
  // 删除用户
  deleteUser: (id: string) => {
    return request({
      url: `/user/${id}`,
      method: "delete"
    })
  },
  // 获取用户详情
  getUserDetail: (id: string) => {
    return request({
      url: `/user/${id}`,
      method: "get"
    })
  }
}
