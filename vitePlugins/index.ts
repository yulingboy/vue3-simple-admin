import createVue from "./plugins/create-vue"
import createAutoElementResolver from "./plugins/auto-element-resolver"
import createAutoImport from "./plugins/auto-imports"
import createCompression from "./plugins/compression"
import createHtml from "./plugins/create-html"
import createSetupExtend from "./plugins/setup-extend"
import createSvgIcons from "./plugins/svg-icon"
import createMock from "./plugins/create-mock"

export default function createVitePlugins(vidteEnv: string, isBuild = false) {
  const vitePlugins = []
  vitePlugins.push(createVue())
  vitePlugins.push(createAutoElementResolver())
  vitePlugins.push(createAutoImport())
  isBuild && vitePlugins.push(createCompression())
  vitePlugins.push(createHtml(vidteEnv))
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcons())
  vitePlugins.push(createMock())
  return vitePlugins
}
