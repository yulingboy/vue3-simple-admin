import { type App } from "vue"
import { loadElementPlus } from "./modules/load-element-plus"
import { loadElementPlusIcon } from "./modules/load-element-plus-icon"
import { loadSvgIcon } from "./modules/load-svg-icon"

export function loadPlugins(app: App) {
  loadElementPlus(app)
  loadElementPlusIcon(app)
  loadSvgIcon(app)
}
