import type { MockMethod } from "vite-plugin-mock"
import auth from "./modules/auth"

const mock: Array<MockMethod> = [...auth]
export default mock
