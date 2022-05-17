// const m = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// console.log(m);

// const m = new Map({
//   [Symbol.iterator]: function* () {
//     yield ["a", 1];
//     yield ["b", 2];
//   },
// });

// console.log(m);

// m.set("c", 3);
// console.log(m);

// const m = new Map().set("a", 1).set("b", 2);
// console.log(m);

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// console.log(m.has('a'));    // true
// console.log(m.has('d'));    // false

// console.log(m.size);

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// console.log(m);     // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// console.log(m.delete("a"));     // true
// console.log(m);     // Map(2) { 'b' => 2, 'c' => 3 }
// console.log(m.delete("a"));

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// console.log(m); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// console.log(m.clear());
// console.log(m); // Map(0) {}

// const func = function () {};
// const obj = {};
// const arr = [];

// const m = new Map().set(func, 1).set(obj, 2).set(arr, 3);
// console.log(m);

// const m = new Map();
// const objKey = {};
// const objVal = {};
// const arrKey = [];
// const arrVal = [];
// m.set(objKey, objVal);
// m.set(arrKey, arrVal);

// console.log(objVal === m.get(objKey)); // true
// console.log(m); // Map(2) { {} => {}, [] => [] }

// objKey.a = 1;
// objVal.b = 2;
// arrKey.push("c");
// arrVal.push("d");
// console.log(m); // Map(2) { { a: 1 } => { b: 2 }, [ 'c' ] => [ 'd' ] }

// const a = {};
// console.log(a === {});

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// // for (const pair of m.entries()) {
// //   console.log(pair);
// // }

// console.log(m.entries === m[Symbol.iterator]);

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// for (const pair of m[Symbol.iterator]()) {
//   console.log(pair);
// }

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// console.log([...m]);

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// m.forEach((key, val) => console.log(key, val));

// const m = new Map().set("a", 1).set("b", 2).set("c", 3);
// for (const val of m.values()) {
//   console.log(val);
// }

// const m = new Map().set("a", 1);
// for (let key of m.keys()) {
//   key = "b";
//   console.log(m.get("a"));
// }
// console.log(m);

// const objKey = { id: 1 };
// const m = new Map([[objKey, "val"]]);
// console.log(m);

// for (let key of m.keys()) {
//   key = "a";
//   console.log(key, m.get(key));
// }

// console.log(m);

// const m = new Map().set("a", 1);
// for (let key of m.keys()) {
//   key = "b";
//   console.log(key, m.get("b"));
// }
// console.log(m);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// for (const [key, val] of map) {
//   console.log(key, val);
// }

const arr = ["a", "b", "c"];
const map = new Map(arr.map((element, index) => [index, element]));
for (const [key, value] of map) {
  console.log(key, value);
}
