// const obj = new Object();
// obj.a = 1;
// obj.fn = function () {
//   console.log(this.a);
// };
// console.log(obj);

// const obj = {
//   a: 1,
//   fn: function () {
//     console.log(this.a);
//   },
// };

// const obj = {};
// Object.defineProperty(obj, "a", {
//   writable: false,
//   value: 1,
// });
// console.log(obj.a); // 1
// obj.a = 2;
// console.log(obj.a); // 1

// const book = {
//   year_: 2022,
//   edition: 1,
// };
// Object.defineProperty(book, "year", {
//   get() {
//     return this.year_;
//   },
//   set(newVal) {
//     this.year_ = newVal;
//     this.edition += newVal - 2022;
//   },
// });

// book.year = 2030;
// console.log(book.edition);

// const book = {};
// Object.defineProperties(book, {
//   year_: {
//     value: 2022,
//   },
//   edition: {
//     value: 1,
//   },
//   year: {
//     get() {
//       return this.year_;
//     },
//     set(newVal) {
//       this.year_ = newVal;
//       this.edition += newVal - 2022;
//     },
//   },
// });
// const descriptor1 = Object.getOwnPropertyDescriptor(book, "year");
// const descriptor2 = Object.getOwnPropertyDescriptor(book, "year_");
// console.log(descriptor1);
// console.log(descriptor2);

// const descriptors = Object.getOwnPropertyDescriptors(book);
// console.log(descriptors);

// const dest = {};
// const src1 = { a: 1 };
// const src2 = { b: 2 };
// Object.assign(dest, src1, src2);
// console.log(dest);

// const dest = {
//   a_: 1,
//   set a(val) {
//     this.a_ = val;
//     console.log(`setter ${val}`);
//   },
// };
// console.log(dest);
// const src = {
//   get a() {
//     console.log(`getter`);
//     return "foo";
//   },
// };

// Object.assign(dest, src);
// console.log(dest);

// dest = { a: 1 };
// Object.assign(dest, { a: 2 }, { a: 3 });
// console.log(dest);

// const dest = {};
// const obj = { a: {} };
// Object.assign(dest, obj);
// console.log(dest.a === obj.a);

// const dest = {};
// const src = {
//   a: 1,
//   get b() {
//     throw new Error();
//   },
// };
// try {
//   Object.assign(dest, src);
// } catch (e) {}

// console.log(dest);  // { a: 1 }

// console.log(true === 1);
// console.log({} === {});
// console.log("2" === 2);

// console.log(+0 === -0);
// console.log(+0 === 0);
// console.log(-0 === 0);

// console.log(NaN === NaN);
// console.log(isNaN(NaN));

// console.log(Object.is(true, 1));
// console.log(Object.is({}, {}));
// console.log(Object.is("2", 2));

// console.log(Object.is(+0, -0));
// console.log(Object.is(+0, 0));
// console.log(Object.is(-0, 0));

// console.log(Object.is(NaN, NaN));

// console.log(Object.is({ a: 1 }, { a: 1 }));

// function recursivelyCheckEqual(x, ...rest) {
//   return (
//     Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest))
//   );
// }
// console.log(recursivelyCheckEqual({}, {}, {}));

// const name = "foo";
// const obj = {
//   name,
// };
// console.log(obj);

// const a = "a";
// const b = "b";
// const c = "c";
// const obj = {
//   [a]: 1,
//   [b]: 2,
//   [c]: 3,
// };
// console.log(obj);

// let person = {
//   sayName() {
//     console.log("foo");
//   },
// };
// person.sayName();

// const person = {
//   name_: "foo",
//   get name() {
//     return this.name_;
//   },
//   set name(newVal) {
//     this.name_ = newVal;
//   },
//   sayName() {
//     console.log(this.name_);
//   },
// };

// person.name = "bar";
// person.sayName();
// console.log(person);

// let person = {
//   name: "foo",
//   age: 18,
// };
// let { name: personName, age: personAge } = person;
// console.log(personName);
// console.log(personAge);

// let person = {
//   age: 18,
// };
// let { name = "foo", age } = person;
// console.log(name);
// console.log(age);

// let age, name;
// const person = {
//   age: 18,
//   name: "foo",
// };
// ({ age, name } = person);
// console.log(age, name);

// let person = {
//   name: "foo",
//   age: 18,
//   job: {
//     title: "bar",
//   },
// };

// let {
//   job: { title },
// } = person;

// console.log(title); // bar
// console.log(job);   // 报错

// const person = {
//   job: {
//     title: "engineer",
//   },
// };
// let personCopy = { bar: {} };
// ({
//   foo: { bar: personCopy.bar },
// } = person);

// const person = {
//   job: {
//     title: "engineer",
//   },
// };

// let personCopy = {};
// // ({
// //   foo: { bar: personCopy.bar },
// // } = person);

// let person = {
//   name: "Tourry",
//   age: 18,
// };
// function fn(foo, { name, age }, bar) {
//   console.log(arguments);
//   console.log(name, age);
// }
// function fn2(foo, { name: personName, age: personAge }, bar) {
//   console.log(arguments);
//   console.log(personName, personAge);
// }

// fn("a", person, "b");
// fn2("a", person, "b");

// const obj = {};
// Object.defineProperty(obj, "a", {
//   value: 1,
// });

// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
