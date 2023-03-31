import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

export default function autoElementResolver() {
  return Components({
    resolvers: [ElementPlusResolver()],
    dts: "types/components.d.ts"
  })
}
