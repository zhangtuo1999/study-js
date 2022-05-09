/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-09 11:18:29
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-09 15:01:06
 * @FilePath: \study-js\第 8 章\原型和原型链.js
 * @Description:
 */
/**
 * 对应名称
 * - prototype : 原型
 * - __proto__ : 连接点
 *
 * 从属关系
 * prototype -> 函数的一个属性：对象{}
 * __proto__ -> Object对象的一个属性：对象{}
 * 对象的__proto__保存着该对象的构造函数的prototype
 */

function Test() {
  this.a = 1;
}

console.log(Test.prototype);

Test.prototype.b = 2;

const test = new Test();

console.log(test.__proto__);

// 对象的__proto__保存着该对象构造函数的 prototype
console.log(test.__proto__ === Test.prototype);

// 接着往下看 Test.prototype 这个对象

// Test.prototype 也是一个对象，只要是对象，就一定有 __proto__ 属性

console.log(Test.prototype.__proto__);

// Test.prototype.__proto__ 是 Object 的一个实例
// 这个对象的 __proto__ 保存的是 Object 构造函数的 prototype
console.log(Test.prototype.__proto__ === Object.prototype);

// Object.prototype 也是一个对象，那么它的 __proto__ 是什么呢

console.log(Object.prototype.__proto__); // null

console.log("---------");

console.log(test);
