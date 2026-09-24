// 全局作用域
{
    // 块级作用域 代码块
    // 声明了变量，属于当前块级
    const name = '张三';
    console.log(name);
}
// console.log(name);
// 退出了循环，才是10
for (let i = 0; i < 10; i ++)
{
    // 同步代码 尽快执行完
    console.log(i);
    // 异步 i -> 10
    setTimeout(function(){
        console.log(`This number is ${i}`);
    }, 1000)
}