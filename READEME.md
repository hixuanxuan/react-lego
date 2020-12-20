### 项目开发

- 本地开发
  - `npm i` 安装依赖
  - `npm run start` 启动项目（走默认后端地址）
  - `npm run start -- --host "127.0.0.1"` 指定后端地址启动项目
- 本地打包：`npm run build`
- 打包分析：`npm run analyze`



### 目录结构

```
├── config 项目webpack配置文件
├── src
    ├── index.tsx 入口文件
    ├── index.less 全局用的样式
    ├── api 封装api接口，按模块划分为不同的文件
        ├── ...
    ├── components 基础组件（如果某个组件需要进行封装但是只在某一个页面用到，那就放在那个页面文件夹下，这里只放多个页面都会用到的组件）
    ├── image 图片文件
    ├── pages 各个页面
        ├── ...
    ├── routes
    		├──index.tsx 定义路由
    ├── utils 实现某功能的函数、定义的变量、不知道放哪里的js文件都放这
    ├── 
├── 
```




### commit规范

- `build`: 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- `ci`: 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
- `docs`: 文档更新
- `feat`: 新增功能
- `merge`: 分支合并 Merge branch ? of ?
- `fix`: bug 修复
- `perf`: 性能, 体验优化
- `refactor`: 重构代码(既没有新增功能，也没有修复 bug)
- `style`: 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
- `test`: 新增测试用例或是更新现有测试
- `revert`: 回滚某个更早之前的提交
- `chore`: 不属于以上类型的其他类型

