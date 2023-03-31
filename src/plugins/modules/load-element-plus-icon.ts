import { type App } from "vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

export function loadElementPlusIcon(app: App) {
  // 将 element-plus 的图标库注册到全局
  Object.keys(ElementPlusIconsVue).forEach((key) => {
    app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue])
  })
}
