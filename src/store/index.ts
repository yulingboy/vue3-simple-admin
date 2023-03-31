import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persist"

const store = createPinia()
// 持久化
store.use(piniaPersist)

export default store
