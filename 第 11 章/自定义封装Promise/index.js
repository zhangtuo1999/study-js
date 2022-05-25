/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-24 16:18:18
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-25 12:03:03
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

const p = Promise.reject('bar')
const p1 = Promise.resolve(p);
console.log(p1);
