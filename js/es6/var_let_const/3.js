// 常量开始就要赋值
const item = 1;
let a; // undefined;
// 简单数据类型
const key = 'abc123';
// key = 'ABC123'; // Assignment to constant(常量) variable(变量)
let points = 50;
points = 51;
// let 不只是值可以改变，类型也可以改变
// 不要这么干
points = "52";
let winner = false;
winner = 'd';
// 复杂数据类型：对象
// 值可以改变，但是类型不能变
const person = {
    name : 'lyg',
    age : 18
}
person.age ++;
console.log(person.age);