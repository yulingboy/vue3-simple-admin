import { viteMockServe } from "vite-plugin-mock"

export default function createMockPlugin() {
  return viteMockServe({ supportTs: false, logger: false, mockPath: "/src/mock" })
}
