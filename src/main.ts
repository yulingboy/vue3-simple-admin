import { createApp } from "vue"
import "element-plus/dist/index.css"
import "virtual:svg-icons-register"
import "./assets/styles/reset.css"
import "./assets/styles/index.scss"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import directive from "./directives"
import { loadPlugins } from "@/plugins"

function bootstrap() {
  // 创建应用实例
  const app = createApp(App)
  // 注册全局状态管理
  app.use(store)
  // 注册全局插件
  loadPlugins(app)
  // 注册指令
  app.use(directive)
  // 注册路由
  app.use(router)
  // 挂载应用s
  app.mount("#app")
}
bootstrap()
