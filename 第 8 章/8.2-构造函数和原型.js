/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-09 09:10:38
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-09 11:12:32
 * @FilePath: \study-js\第 8 章\8.2-构造函数和原型.js
 * @Description:
 */

// function createPerson(name, age) {
//   return (obj = {
//     name,
//     age,
//   });
// }

// const p1 = createPerson("foo", 18);
// const p2 = createPerson("bar", 20);
// console.log(p1, p2);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("foo", 18);
// const p2 = new Person("bar", 20);

// console.log(p1, p2);

// console.log(p1.constructor === Person);
// console.log(p2.constructor === Person);

// console.log(p1 instanceof Person);
// console.log(p1 instanceof Object);

// let Person = function () {
//   this.sayName = function () {
//     console.log("foo");
//   };
// };

// const p1 = new Person();
// const p2 = new Person();
// console.log(p1.sayName === p2.sayName);
// let sayName = function () {
//   console.log("foo");
// };
// let Person = function () {
//   this.sayName = sayName;
// };

// function createPerson(name, age) {
//   return { name, age };
// }
