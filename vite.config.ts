import { defineConfig } from "vite"
import { resolve } from "path"
import createPlugins from "./vitePlugins"

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isBuild = command === "build"
  return {
    base: isBuild ? "./" : "/",
    server: {
      port: 9011, // 本地开发端口
      open: false, // 启动时是否自动打开浏览器
      cors: true // 是否允许跨域
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "/#/": resolve(__dirname, "types")
      }
    },
    proxy: {
      "/api/v1": {
        target: "http://127.0.0.1:7001/api/v1",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path: string) => path.replace("/api/v1", "")
      }
    },
    // 生产环境移除console.log和debugger
    esbuild: {
      pure: ["console.log", "debugger"]
    },
    plugins: createPlugins(mode, isBuild)
  }
})
