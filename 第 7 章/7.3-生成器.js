// function* generatorFn() {}
// let generatorFn = function* () {};
// let obj = {
//   *generatorFn() {},
// };

// function* generatorFn() {
//   return "foo";
// }
// const g = generatorFn();

// console.log(g.next());

// function* generatorFn() {
//   console.log("foo");
// }
// const g = generatorFn();
// console.log(g.next());

// function* generatorFn() {}
// const g = generatorFn();
// console.log(g[Symbol.iterator]() === g);

// function* generatorFn() {
//   yield;
// }
// const g = generatorFn();
// console.log(g.next());
// console.log(g.next());

// function* generatorFn() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// for (const x of generatorFn()) {
//   console.log(x);
// }

// function* nTimes(n) {
//   while (n--) {
//     yield n;
//   }
// }

// function* generatorFn() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let g = generatorFn();
// // g.next("bar");
// // g.next("baz");
// // g.next("qux");

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// function* generatorFn() {
//   yield "foo";
//   return "bar";
// }
// const g = generatorFn();
// console.log(g.next()); // { value: 'foo', done: false }
// console.log(g.next()); // { value: 'bar', done: true }

// function* generatorFn() {
//   return yield "foo";
// }

// const g = generatorFn();
// console.log(g.next());
// console.log(g.next("bar"));

// function* generatorFn() {
//   yield* [1, 2, 3];
// }

// const g = generatorFn();
// for (const item of g) {
//   console.log(item);
// }

// class Foo {
//   constructor() {
//     this.values = [1, 2, 3];
//   }
//   *[Symbol.iterator]() {
//     yield* this.values;
//   }
// }

// const f = new Foo();
// for (const x of f) {
//   console.log(x);
// }

// function* generatorFn() {}
// const g = generatorFn();
// console.log(g.next);
// console.log(g.return);
// console.log(g.throw);

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }

// const g = generatorFn();

// for (const item of g) {
//   if (item > 1) {
//     g.return(4);
//   }
//   console.log(item);
// }

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }

// const g = generatorFn();

// console.log(g);
// try {
//   g.throw("foo");
// } catch (e) {
//   console.log(e);
// }
// console.log(g);

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }

// const g = generatorFn();

// console.log(g); // Object [Generator] {}
// console.log(g.return(4)); // { value: 4, done: true }
// console.log(g); // Object [Generator] {}

function* generatorFn() {
  for (const item of [1, 2, 3]) {
    try {
      yield item;
    } catch (e) {}
  }
}

const g = generatorFn();
console.log(g.next());
g.throw("foo");
console.log(g.next());
