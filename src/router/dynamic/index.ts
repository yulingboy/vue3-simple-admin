/**
 * 读取当前目录下的所有模块 除了index.ts
 */
const modulesFiles = import.meta.glob("./!(index).ts")

let modules: any[] = []
// 遍历读取到的模块 读取模块中的default内容 并合并到modules中
for (const path in modulesFiles) {
  const module: any = await modulesFiles[path]()
  modules = modules.concat(module.default)
}
console.log(modules)
export default modules
