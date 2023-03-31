import { type App } from "vue"
import SvgIcon from "@/components/svg-icon/index.vue"

export function loadSvgIcon(app: App) {
  // svg图标组件
  app.component("svg-icon", SvgIcon)
}
