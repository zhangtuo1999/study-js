/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-24 16:18:18
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-26 09:19:49
 * @FilePath: \study-js\第 11 章\自定义封装Promise\index.js
 * @Description:
 */
// const p = new Promise((resolve, reject) => {
//   resolve("ok");
// });
// const t = p.then(
//   (value) => {
//     return value;
//   },
//   (reason) => {
//     return reason;
//   }
// );

// setTimeout(console.log, 0, t);

// const p = Promise.reject('bar')
// const p1 = Promise.resolve(p);
// console.log(p1);

// const p1 = Promise.resolve("foo");
// const p2 = Promise.reject("bar");

// const p = Promise.all([p1, p2]);
// console.log(p);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 1000);
// });

// const p2 = Promise.resolve('bar');

// const p3 = Promise.resolve();

// const p = Promise.race([p1, p2, p3]);
// console.log(p);

// const p = new Promise((resolve, reject) => {
//   resolve();
//   console.log("foo");
// }, 1000);

// p.then((value) => {
//   console.log("bar");
// });

// console.log("baz");

// const p = new Promise((resolve, reject) => {
//   resolve('foo');
// });
// console.log(p);

// const p = new Promise((resolve, reject) => {
//   reject("bar");
// });
// console.log(p);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("foo");
//   }, 1000);
// });


// setTimeout(console.log,0,p)

