import VitePluginCompression from "vite-plugin-compression"

export default function createCompression() {
  return VitePluginCompression({
    threshold: 10240 // 超过10kb进行压缩
  })
}
