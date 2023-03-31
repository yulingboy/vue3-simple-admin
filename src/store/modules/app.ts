import { defineStore } from "pinia"

export const useAppStore = defineStore({
  id: "app",

  state: () => {
    return {
      // 侧边栏折叠状态
      isCollapse: false
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  },

  actions: {
    // 切换侧边栏折叠状态
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})
