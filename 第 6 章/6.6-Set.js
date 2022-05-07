// const s = new Set();
// console.log(s);

// const s = new Set(["a", "b", "c"]);
// console.log(s);

// const s = new Set({
//   [Symbol.iterator]: function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// });
// console.log(s);

// const s = new Set().add("a").add("b").add("c");
// console.log(s.has("a"));
// console.log(s.has("d"));

// const s = new Set().add("a").add("b").add("c");
// console.log(s.size);

// const s = new Set().add("a").add("b").add("c");
// console.log(s.delete("a")); // true
// console.log(s);             // Set(2) { 'b', 'c' }

// const s = new Set().add("a").add("b").add("c");
// s.clear();
// console.log(s);

// const s = new Set().add("a").add("b").add("c");
// console.log(s.values === s.keys);

// const s = new Set().add("a").add("b").add("c");
// for (const value of s[Symbol.iterator]()) {
//   console.log(value);
// }

// const s = new Set().add("a").add("b").add("c");
// console.log([...s]);    // [ 'a', 'b', 'c' ]

// const s = new Set().add("a").add("b").add("c");
// s.forEach(
//   function (val, dupVal) {
//     console.log(val, dupVal, this.a);
//   },
//   { a: 1 }
// );

// const s = new Set(["a"]);

// for (let value of s.values()) {
//   value = "b";
//   console.log(value, s.has(value));
// }

// console.log(s);

const obj = { a: 1 };
const s = new Set([obj]);
console.log(s);

for (let val of s.values()) {
  val = { a: 2 };
}

console.log(s);
