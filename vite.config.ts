import { defineConfig, loadEnv } from "vite"
import { resolve } from "path"
import createPlugins from "./vitePlugins"

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isBuild = command === "build"
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
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
    build: {
      // target: ["edge90", "chrome90", "firefox90", "safari15"],
      /** 消除打包大小超过 500kb 警告 */
      chunkSizeWarningLimit: 2000,
      /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
      minify: "terser",
      /** 在打包代码时移除 console.log、debugger 和 注释 */
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ["console.log"]
        },
        format: {
          /** 删除注释 */
          comments: false
        }
      },
      /** 打包后静态资源目录 */
      assetsDir: "static"
    },
    plugins: createPlugins(mode, isBuild),
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }
  }
})
