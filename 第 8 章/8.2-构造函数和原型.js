/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-09 09:10:38
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-09 22:59:42
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

// function Person() {}
// Person.prototype.name = "foo";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// const person1 = new Person();
// const person2 = new Person();

// console.log(person1.name);
// person1.sayName();

// console.log(person2.name);
// person2.sayName();

// console.log('-------');
// console.log(Person.prototype.constructor === Person);

// function Person() {}
// let person = new Person();

// console.log(person.__proto__ === Person.prototype);

// console.log(Person.prototype.__proto__ === Object.prototype);

// console.log(Object.prototype.__proto__ === null);

// function Person() {}
// let p1 = new Person();
// let p2 = new Person();
// console.log(p1.__proto__ === p2.__proto__);

// console.log(p1 instanceof Person);
// console.log(p1 instanceof Object);

// console.log(p1.__proto__ === Person.prototype);
// console.log(p1.__proto__.__proto__ === Object.prototype);

// console.log(Person.prototype.isPrototypeOf(p1));

// console.log(Object.getPrototypeOf(p1) === p1.__proto__);

// function Person() {}
// const p = new Person();

// console.log(Person.prototype.isPrototypeOf(p)); // true

// const obj = {};
// Object.setPrototypeOf(p, obj);
// console.log(Person.prototype.isPrototypeOf(p)); // false
// console.log(obj.isPrototypeOf(p));              // true

// const obj = {
//   name: "foo",
// };

// let person = Object.create(obj);
// console.log(person.name);
// console.log(person.__proto__ === obj);

// function Person() {
//   this.name = "foo";
// }

// Person.prototype.age = 18;
// const person = new Person();

// console.log(person.name);
// console.log(person.age);

// function Person() {}
// Person.prototype.age = 18;
// const person = new Person();
// console.log("age" in person && !person.hasOwnProperty("age"));
