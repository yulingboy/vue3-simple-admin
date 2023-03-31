import { loadEnv } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

export default function createHtml(mode: string) {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const appTitle = env.VITE_APP_TITLE
  return createHtmlPlugin({
    inject: {
      data: {
        title: appTitle
      }
    }
  })
}
