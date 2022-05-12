/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-12 09:27:49
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-12 17:45:13
 * @FilePath: \study-js\第 10 章\10.1-10.9-函数.js
 * @Description:
 */

// function sum(a, b) {
//   return a + b;
// }

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => {
//   return a + b;
// };

// let sum = new Function("a", "b", "return a + b");

// let sum = function (a, b) {
//   return a + b;
// };

// let sum2 = (a, b) => {
//   return a + b;
// };

// const arr = [1, 2, 3];
// console.log(arr.map(x => 2 * x));

// let func = (x) => {
//   return 2 * x;
// };

// let double = (x) => {
//   return 2 * x;
// };
// let triple = (x) => 3 * x;

// let setName = (obj) => {
//   obj.name = "Foo";
// };

// let setName = (obj)=>obj.name ='Foo'

// let multi = (a,b) => return a*b

// function sum(a, b) {
//   return a + b;
// }

// let sum2 = sum;
// sum = null;

// function foo() {}
// let bar = function () {};
// let baz = () => {};

// console.log(foo.name);
// console.log(bar.name);
// console.log(baz.name);
// console.log((() => {}).name);
// console.log(new Function().name);

// let person = {
//   get name() {
//     return this.name_;
//   },
//   set name(newVal) {
//     this.name_ = newVal;
//   },
// };

// const descriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(descriptor);
// console.log(descriptor.set.name);
// console.log(descriptor.get.name);'

// function foo() {}
// console.log(foo.bind(null).name);

// function sum(num1, num2) {
//   console.log(num1, num2);
//   console.log(arguments[0], arguments[1]);
//   arguments[1] = 9;
//   console.log(arguments[1], num2);
// }

// sum(1, 2);
// function sum(num1, num2) {
//   "use strict";
//   console.log(num1, num2);
//   console.log(arguments);
//   num1 = 9;
//   console.log(num1, arguments);
// }
// sum(1, 2);

// function sum(a = "1" + 2, b = 2) {
//   return a + b;
// }
// console.log(sum());

// function getNum() {
//   return 2;
// }
// function sum(a = 1, b = getNum()) {
//   return a + b;
// }
// console.log(sum());
// let doubleNum = (x = 2) => 2 * x;

// function sum(num1 = num2, num2 = 2) {
//   return num1 + num2;
// }
// console.log(sum());

// function sum(num1 = 1, num2 = n) {
//   let n = 2;
//   return num1 + num2;
// }
// console.log(sum());

// function sum() {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
// console.log(sum(...[1, 2, 3]));

// function sum(num1,...values) {}

// sum(1, 2, 3, 4);

// let sum = (...values) => {
//   console.log(values);
// };

// sum(1, 2, 3, 4, 5);

// console.log(sum());
// function sum() {}

// console.log(sum());
// let sum = function () {};

// function foo(bar, baz) {
//   bar(baz);
// }

// function foo(){
//   return function(){}
// }

// function factorial(num) {
//   return num <= 1 ? 1 : num * arguments.callee(num - 1);
// }

// color = "red";
// let obj = {
//   color: "green",
// };

// let sayColor = () => console.log(this.color);

// sayColor();

// obj.sayColor = sayColor;
// obj.sayColor();

// function outer() {
//   inner();
// }

// function inner() {
//   console.log(inner.caller);
// }

// outer();

// function fn() {
//   if (!new.target) {
//     console.log("不是使用 new 调用的");
//     return;
//   }
//   console.log("使用 new 调用的");
// }
// new fn();
// fn();
