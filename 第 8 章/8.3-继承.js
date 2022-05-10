/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-10 14:46:18
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-10 16:52:24
 * @FilePath: \study-js\第 8 章\8.3-继承.js
 * @Description:
 */
// function SuperType() {}
// SuperType.prototype.foo = "foo";

// function SubType() {}
// SubType.prototype = new SuperType();
// SubType.prototype.bar = "bar";

// const instance = new SubType();

// console.log(instance.__proto__.hasOwnProperty('constructor'));
// console.log(instance.constructor === SuperType);

// console.log(instance.__proto__.constructor);
// console.log(instance.__proto__.__proto__.__proto__.constructor === Object);

// console.log(instance.__proto__ === SubType.prototype);
// console.log(instance.__proto__.__proto__ === SuperType.prototype);
// console.log(instance.__proto__.__proto__.__proto__ === Object.prototype);

// console.log(instance instanceof SubType);
// console.log(instance instanceof SuperType);
// console.log(instance instanceof Object);

// console.log(Object.prototype.isPrototypeOf(instance));
// console.log(SubType.prototype.isPrototypeOf(instance));
// console.log(SuperType.prototype.isPrototypeOf(instance));

function SuperType() {
  this.names = ["foo", "bar"];
}

function SubType() {}
SubType.prototype = new SuperType();

const s1 = new SubType();
const s2 = new SubType();
console.log(s1.names, s2.names);

s2.names.push("foobar");
console.log(s1.names);
