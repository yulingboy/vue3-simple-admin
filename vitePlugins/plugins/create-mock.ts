import { viteMockServe } from "vite-plugin-mock"
// import path from "path"

export default function createMockPlugin() {
  return viteMockServe({
    supportTs: false,
    logger: false,
    prodEnabled: true,
    injectCode: ` import { setupProdMockServer } from "../src/mock/mockProdServer"; setupProdMockServer(); `,
    mockPath: "/src/mock"
  })
}
