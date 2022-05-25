/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-17 21:38:53
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-24 15:52:02
 * @FilePath: \study-js\第 11 章\11.1-异步编程.js
 * @Description:
 */
// let p = new Promise(() => {});
// setTimeout(console.log, 0, p);

// let p1 = new Promise((resolve, reject) => {
//   resolve();
// });

// setTimeout(console.log, 0, p1);

// let p2 = new Promise((resolve, reject) => {
//   reject();
// });

// setTimeout(console.log, 0, p2);

// const p = Promise.reject("foo");
// console.log(p === Promise.resolve(p));
// console.log(Promise.resolve(p));

// const p1 = new Promise((resolve, reject) => {
//   // resolve("foo");
//   reject("bar");
// });

// const p2 = p1.then(
//   (value) => {
//     console.log(value);
//     return value
//   },
//   (reason) => {
//     console.log(reason);
//     return Promise.reject('baz')
//   }
// );

// // const p3 = p2.catch((error) => {
// //   console.log(error);
// // });

// setTimeout(console.log, 0, p2);
// // setTimeout(console.log, 0, p3);

// const p = new Promise(()=>{})
// setTimeout(console.log,0,p)

// const p = new Promise((resolve, reject) => {
//   // resolve();
//   reject();
// });

// setTimeout(console.log, 0, p);

// const p = Promise.reject(1);
// const p1 = Promise.resolve(p);
// setTimeout(console.log, 0, p1);
// const e = new Error('e')
// throw e

// const p = new Promise((resolve, reject) => {
//   reject(new Error("bar"));
// });

// const t = p.then(
//   (value) => {},
//   (reason) => {
//     return reason;
//   }
// );

// setTimeout(console.log, 0, p);
// setTimeout(console.log, 0, t);

// const p1 = Promise.resolve();
// const p2 = Promise.reject();

// p1.then(() => console.log(1));
// p2.then(() => console.log(2));
// p1.catch(() => console.log(3));
// p2.catch(() => console.log(4));

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// p1.then((value) => {
//   return value + "!";
// }).then((value) => {
//   return value + "!";
// });

// const p = Promise.resolve("foo")
//   .then((value) => {
//     return value;
//   })
//   .then((value) => Promise.resolve(value + "bar"));

// setTimeout(console.log, 0, p);

// const p = new Promise((resolve, reject) => {
//   // 同步代码 ...
//   if (false) {
//     // 成功调用
//     resolve("foo");
//   } else {
//     // 失败调用
//     reject("bar");
//   }
// });

// p.then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

// p.catch((reason) => {
//   console.log(reason);
// });

// const p2 = Promise.resolve(Promise.reject("bar"));
// setTimeout(console.log, 0, p2);

// const p1 = Promise.resolve("foo");
// setTimeout(console.log, 0, p1);

// const p2 = Promise.resolve(p1);
// setTimeout(console.log, 0, p2);

// const p3 = Promise.resolve(Promise.reject("bar"));
// setTimeout(console.log, 0, p3);

// const p1 = Promise.reject("foo");
// setTimeout(console.log, 0, p1);

// const p2 = Promise.reject(Promise.resolve("bar"));
// setTimeout(console.log, 0, p2);

// const p3 = Promise.reject(Promise.reject("baz"));
// setTimeout(console.log, 0, p3);
