// let arr = new Array(10);
// console.log(arr); // [ <10 empty items> ]

// let arr = Array("a", "b", "c");
// console.log(arr); // [ 'a', 'b', 'c' ]

// let arr = ["a", "b", "c"];

// let arr = Array.from("abc");
// console.log(arr);

// const m = new Map().set(1, 2).set(3, 4);
// console.log(m);     // Map(2) { 1 => 2, 3 => 4 }
// const arr = Array.from(m);
// console.log(arr);   //[ [ 1, 2 ], [ 3, 4 ] ]

// const s = new Set().add(1).add(2).add(3);
// console.log(s);     // Set(3) { 1, 2, 3 }
// const arr = Array.from(s);
// console.log(arr);   // [ 1, 2, 3 ]

// const a1 = ["a", "b", "c"];
// const a2 = Array.from(a1);
// console.log(a2);            // [ 'a', 'b', 'c' ]
// console.log(a1 === a2);     // false

// function fn() {
//   return Array.from(arguments);
// }
// console.log(fn(1, 2, 3, 4));

// const iter = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// const arr = Array.from(iter);
// console.log(arr);

// const arrLikeObj = {
//   0: "a",
//   1: "b",
//   2: "c",
//   3: "d",
//   length: 4,
// };

// console.log(Array.from(arrLikeObj));    // [ 'a', 'b', 'c', 'd' ]

// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(
//   a1,
//   function (x) {
//     return x * this.num;
//   },
//   { num: 2 }
// );
// console.log(a2); // [ 2, 4, 6, 8 ]

// const arr = Array.of(1, 2, 3);
// console.log(arr);

// function fn() {
//   return Array.of(...arguments);
// }
// console.log(fn(1, 2, 3, 4));

// const arr = [1, , , , 5];

// console.log(arr);

// for (const item of arr) {
//   console.log(item === undefined);
// }

// const arr = [1, , , , 5];
// console.log(arr.map(() => 0));  // [ 0, <3 empty items>, 0 ]
// console.log(arr.join("-"));     // 1----5

// let arr = ["a", "b", "c"];
// console.log(arr.length);    // 3
// arr[4] = "e";
// console.log(arr);           // [ 'a', 'b', 'c', <1 empty item>, 'e' ]
// console.log(arr.length);    // 5

// const arr = [1, 2, 3];
// if (Array.isArray(arr)) {
//   console.log(true); // true
// }

// const arr = ["a", "b", "c"];
// const iter = arr.entries();
// console.log(iter);
// const entries = Array.from(arr.entries());
// console.log(entries);

// const arr = ["a", "b", "c"];
// for (const [k, v] of arr.entries()) {
//   console.log(k, v);
// }

// const arr = [0, 0, 0, 0, 0];
// arr.fill(6, -10, -6);
// console.log(arr);
// arr.fill(6, 6, 10);
// console.log(arr);
// arr.fill(6, 4, 2);
// console.log(arr);
// arr.fill(6, 2, 6);
// console.log(arr);

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.copyWithin(6, 2, 5);
// console.log(arr);

// let arr = ["a", "b", "c"];
// console.log(arr.valueOf(), typeof arr.valueOf());

// console.log(arr.toString(), typeof arr.toString());

// let arr = ["a"];
// console.log(arr.push("b", "c", "d"));
// console.log(arr);

// let arr = ["a", "b", "c"];
// console.log(arr.unshift("1", "2", "3"));
// console.log(arr);

// let arr = [1, 20, 3, 4];
// arr.sort();
// console.log(arr);

// function compare(a, b) {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// let arr = [2, 1, 4, 3, 3];
// // arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// // console.log(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);   // [ 1, 2, 3, 3, 4 ]

// arr.sort((a, b) => b - a);
// console.log(arr);   // [ 4, 3, 3, 2, 1 ]

// let a1 = [1, 2, 3];
// let a = a1.concat(4, 5);
// console.log(a);

// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// a2[Symbol.isConcatSpreadable] = false;
// let a3 = {
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
//   0: 7,
//   1: 8,
// };

// let arr1 = a1.concat(a2);
// let arr2 = a1.concat(a3);

// console.log(arr1);
// console.log(arr2);

// let arr = [1, 2, 3, 4];
// console.log(arr.splice(1, 1, "a", "b")); // [ 2 ]
// console.log(arr);       // [ 1, 'a', 'b', 3, 4 ]

// console.log(arr.indexOf(2)); // 1
// console.log(arr.lastIndexOf(2)); // 3
// console.log(arr.lastIndexOf(4)); // -1

// let arr = [1, 2, 2, 2, 3];
// console.log(arr.includes(3));   // true
// console.log(arr.includes(4));   // false

// const arr = [
//   { a: 3, b: 2 },
//   { a: 15, b: 12 },
//   { a: 23, b: 22 },
// ];

// console.log(arr.findIndex((element, index, array) => element.a % 4 === 0));

// const arr = [1, 3, 2, 4, 5];
// const res = arr.map((element, index, array) => element < 4);
// console.log(res);

const arr = [1, 2, 3, 4];
let sum = arr.reduce((prev, cur, index, array) => prev + cur);
console.log(sum);   // 10
