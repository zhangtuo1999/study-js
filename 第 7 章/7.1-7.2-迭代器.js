/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-14 14:31:50
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-15 15:30:00
 * @FilePath: \study-js\第 7 章\7.1-迭代器.js
 * @Description:
 */
// const num = 1;
// const obj = {};
// console.log(num[Symbol.iterator]);
// console.log(obj[Symbol.iterator]);

// const arr = [1, 2, 3];
// const set = new Set([1, 2, 3]);

// console.log(arr[Symbol.iterator]());
// console.log(set[Symbol.iterator]());

// const arr = [1, 2, 3];
// for (const item of arr) {
//   console.log(item);
// }

// const [a, b, c] = arr;
// console.log(a, b, c);

// let arr2 = [...arr];

// let arr3 = Array.from(arr);

// let set = new Set(arr);

// let map = new Map(arr.map((x, i) => [i, x]))
// console.log(map);

// const arr = ["foo", "bar"];

// const iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// class Counter {
//   constructor(limit) {
//     this.limit = limit;
//   }
//   [Symbol.iterator]() {
//     let count = 1;
//     let limit = this.limit;
//     return {
//       next() {
//         if (count <= limit) {
//           return { done: false, value: count++ };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//   }
// }

// let counter = new Counter(3);
// for (const item of counter) {
//   console.log(item);
// }

// class Counter {
//   constructor(limit) {
//     this.limit = limit;
//   }
//   [Symbol.iterator]() {
//     let count = 1;
//     let limit = this.limit;
//     return {
//       next() {
//         if (count <= limit) {
//           return { done: false, value: count++ };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//       return() {
//         return { done: true };
//       },
//     };
//   }
// }

// let counter = new Counter(3);
// for (const item of counter) {
//   if (item > 2) break;
//   console.log(item); // 1 2 3
// }

// const arr = [1, 2, 3, 4, 5];
// const iter = arr[Symbol.iterator]();

// iter.return = function () {
//   console.log("Exiting early");
//   return { done: true };
// };

// for (const item of iter) {
//   console.log(item);
//   if (item > 2) {
//     break;
//   }
// }
// for (const item of iter) {
//   console.log(item);
// }

