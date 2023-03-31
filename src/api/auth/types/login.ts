export interface ILoginRequestData {
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
}

export interface IUserInfo {
  // 用户id
  id: string
  // 用户名
  username: string
  // 用户头像
  avatar: string
  // token
  token: string
}

// 获取验证码 返回的数据
export type LoginCodeResponseData = IApiResponseData<string>

// 登录 返回的数据
export type LoginResponseData = IApiResponseData<{ token: string; userInfo: IUserInfo }>

// 获取当前用户信息 返回的数据
export type UserInfoResponseData = IApiResponseData<{ username: string; roles: string[] }>

// 获取当前用户权限列表 返回的数据
export type PermissionCodesResponseData = IApiResponseData<string[]>
