// const target = {
//   foo: "bar",
// };

// const proxy = new Proxy(target, {});
// console.log(target.foo);
// console.log(proxy.foo);

// proxy.foo = "baz";

// console.log(target.foo);
// console.log(proxy.foo);

// console.log(proxy instanceof Proxy);

// console.log(proxy === target);

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get(trapTarget, property, receiver) {
//     return trapTarget[property] + "!";
//   },
// };
// const proxy = new Proxy(target, handler);

// console.log(proxy.foo);

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get() {
//     return Reflect.get(...arguments);
//   },
// };

// const proxy = new Proxy(target, handler);
// console.log(proxy.foo);

// const target = {
//   foo: "bar",
// };
// const proxy = new Proxy(target, Reflect);
// console.log(proxy.foo);

// const target = {
//   foo: "bar",
// };

// const handler = {
//   get() {
//     return Reflect.get(...arguments) + "!";
//   },
// };

// const proxy = new Proxy(target, handler);
// console.log(proxy.foo);

// const target = {};
// Object.defineProperty(target, "foo", {
//   value: "bar",
// });

// const handler = {
//   get() {
//     return "baz";
//   },
// };

// const proxy = new Proxy(target, handler);
// console.log(proxy.foo);

// const target = {
//   foo: "bar",
// };
// const { proxy, revoke } = Proxy.revocable(target, {});
// console.log(proxy.foo);
// revoke();
// console.log(proxy.foo);

// const obj = {};
// console.log(
//   Object.defineProperty(obj, "foo", {
//     value: "bar",
//   })
// );

// const obj = {};
// try {
//   Object.defineProperty(obj, "foo", "bar");
// } catch (e) {
//   console.log(e);
// }

// const obj = {};
// if (Reflect.defineProperty(obj, "foo", 'bar')) {
//   console.log("success");
// } else {
//   console.log("failure");
// }

// const target = { foo: "bar" };
// const handler1 = {
//   get() {
//     return Reflect.get(...arguments) + "!";
//   },
// };
// const handler2 = {
//   get() {
//     return Reflect.get(...arguments) + ".";
//   },
// };

// const proxy1 = new Proxy(target, handler1);
// const proxy2 = new Proxy(proxy1, handler2);

// console.log(proxy2.foo);

// const target = new Date();
// const proxy = new Proxy(target, {});
// proxy.getDate();
