import packageJson from "../../package.json"

// 版本号
export const APP_VERSION: string = packageJson.version
// 名称
export const APP_NAME: string = packageJson.name
// 本地储存前缀
export const APP_PREFIX = `${APP_NAME}-${APP_VERSION}`
//  token
export const TOKEN_KEY = "token"
