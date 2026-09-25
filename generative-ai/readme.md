# Generative AI
英伟达证书

- apiKey 
    - gitignore + .env
- npm init -y
    初始化node 项目  就多了个package.josn 文件
- npm i openai
    安装openai 模块 事实标准 
    - 安装需要花时间，消耗空间
    - pnpm 
    只需要安装一次，不同的项目中软链接

    npm install -g pnpm
- .gitignore 文件
    git 提交可以忽略的文件声明
    apikey 不能提交？
    留在本地
    写在.env文件中，.gitignore 中忽略 .env文件
- apiKey 读取进来的流程
    .dotenv库 默认读取根目录下的.env文件 
    .env 文件有格式要求
    KEY(大写)=value 换行
    读取到process 进程对象中
    .env 文件就是环境变量的配置文件
    .gitignore 中忽略 .env 文件，本地跑，远程不提交、
    process 全局对象
- mjs 后缀
    js后缀
    module js
    es6才推出的最新现代化模块化方案
    .js 后缀？
    package.json 中 添加 type: "module"
- nodemo
    监听文件变化，自动重启进程
    npm install -g nodemon
    nodemon index.mjs
## async/await
es8 新增的异步编程语法
js 代码的编写顺序和执行顺序
变量声明/异步任务(setTimeout, api请求)
async/await 来卡住执行流程
api 返回结果后继续执行后面的代码

## AIGC 工程化流程总结
- AI 项目/Agent项目 几乎都是后端
- npm init -y 初始化为后端项目
- pnpm i openai/dotenv
- 实例化client
- main 单点入口函数
    - main.mjs 单点入口文件
    - main 单点入口函数

- 调用了chat completion api
    同步按顺序执行，很快执行
    100ms 
    - 异步代码 执行慢/等下执行
    耗时长
    控制异步的执行顺序
    async await 代码的可读性更好，控制执行流程