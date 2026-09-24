# Model Scope
魔搭，前辈是HuggingFace，抱抱脸
Hugging Face 是全球知名 AI 开源社区，被称作机器学习界的 GitHub。汇聚海量预训练模型、数据集，配套开发工具，供研究者与开发者共享、调试、部署 AI 项目，推动 AI 技术开源普惠。
- model
开源大模型平台、训练及发布自己的模型
- scope
社区

## 数据服务

## Note Book
如果我们有NLP 实验、算法，python
note book 随时编写，随时运行

python 简洁，特别适合数学运算、
NLP,AI,爬虫
- JS 不太适合做计算
Web 前端脚本，交互 (幻灯片、滚动加载更多) 用户的体验 
JS 数据类型Number 
人生苦短，我用python 

符合语句结尾必须加:,表示下一行是从属代码块，缩进来

## LLM api 调用
- 安装OpenAI sdk
- 实例化client
    api_key
    base_url
    遵守同样的接口标准
- client.chat.completions.create()
    AIGC 文本生成的接口
    model
    prompt
## Prompt 高级设计模式
- 详细且准确的指令
- 一步步去引导llm 工作
- 对返回结果的格式做约束
    json 格式
    - 清晰正确
    - json 适合接下来继续运行