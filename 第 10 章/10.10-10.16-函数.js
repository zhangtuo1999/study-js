/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-12 21:06:05
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-13 21:29:02
 * @FilePath: \study-js\第 10 章\10.10-10.16-函数.js
 * @Description:
 */
// function foo(bar, baz) {}

// console.log(Object.getOwnPropertyDescriptor(foo, "length"));

// console.log(foo.prototype);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// function callSum(num1, num2) {
//   sum.apply(this, arguments);
// }

// callSum(1, 2);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum.call(this, 1, 2);

// function foo() {
//   console.log(this.bar);
// }

// bar = "global";

// const obj = {
//   bar: "obj",
// };

// foo.call(this);
// foo.call(obj);

// const obj = {
//   bar: "obj",
// };
// function foo() {
//   console.log(this.bar);
// }
// const newObj = foo.bind(obj);
// newObj();

// foo()
// function foo() {}

// foo()
// const foo = function(){}

// function factorial(num) {
//   return num <= 1 ? 1 : num * arguments.callee(num - 1);
// }

// console.log(factorial(4));

// function foo() {
//   return Bar();
// }

// function fib(n) {
//   return n < 2 ? n : fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6));
// 1 1 2 3 5 8

// (function () {})();

// function Person(name) {
//   this.getName = function () {
//     return name;
//   };
//   this.setName = function (value) {
//     name = value;
//   };
// }

// let person = new Person("Foo");
// console.log(person.getName());
// person.setName("Bar");
// console.log(person.getName());

// function Person() {}
// console.log(Person.__proto__.__proto__ === Object.prototype);


// console.log(Function.prototype.__proto__);
const obj = {
    bar: "obj",
  };
  function foo() {
    console.log(this.bar);
  }
  const newObj = foo.bind(obj);
  newObj();