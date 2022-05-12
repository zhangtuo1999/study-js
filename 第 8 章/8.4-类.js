/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-10 20:37:02
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-11 18:16:00
 * @FilePath: \study-js\第 8 章\8.4-类.js
 * @Description:
 */
// class Person {}
// const Person = class {};

// console.log(ClassExpression);
// const ClassExpression = class {};
// console.log(ClassExpression);

// console.log(ClassDeclaration);
// class ClassDeclaration {}
// console.log(ClassDeclaration);

// {
//   function functionDeclaration() {}
//   class ClassDeclaration {}
// }

// console.log(functionDeclaration);   // [Function: functionDeclaration]
// console.log(ClassDeclaration);      // 报错

// class Foo {
//   constructor() {}
//   get Bar() {}
//   static Baz() {}
// }

// let Person = class Foo {
//   bar() {
//     console.log(Person.name, Foo);
//   }
// };

// const p = new Person();
// p.bar()
// console.log(Person.name);
// console.log(Foo);

// const Person = class {
//   constructor(name) {
//     this.name = name;
//   }
// };

// const p = new Person("foo");
// console.log(p);

// class Person {}

// const Person = class {
//   constructor(name) {
//     this.name = name;
//   }
// };

// const p1 = new Person("foo");
// const p2 = new Person();
// console.log(p1, p2); // Person { name: 'foo' }
// console.log(p2);

// class Person{
//     constructor(){
//         return {}
//     }
// }

// const p = new Person()
// console.log(p instanceof Person);   // false

// class Person {}
// console.log(typeof Person);

// class Person {}
// console.log(Person.prototype);
// console.log(Person.prototype.constructor === Person);

// class Person {}
// const p = new Person();
// console.log(p.__proto__ === Person.prototype);
// console.log(p instanceof Person);

// class Person {
//   constructor() {
//     this.name = "Foo";
//   }
// }

// const p = new Person();
// console.log(p instanceof Person);
// console.log(p instanceof Person.constructor);

// const p1 = new Person.constructor();
// console.log(p1 instanceof Person);
// console.log(p1 instanceof Person.constructor);

// class Person {
//   constructor() {
//     this.names = ["foo", "bar"];
//   }
// }

// const p1 = new Person();
// const p2 = new Person();
// console.log(p1.names === p2.names);
// p1.names.pop();
// console.log(p1);
// console.log(p2);

// class Person {
//   constructor() {
//     this.sayName = function () {
//       console.log("instance");
//     };
//   }
//   sayName() {
//     console.log("prototype");
//   }
// }

// const p = new Person();
// p.sayName();
// p.__proto__.sayName();

// class Person {
//   stringKey() {}
//   [Symbol("foo")]() {}
//   ["computed" + "key"]() {}
// }

// class Person {
//   static say() {}

//   static s() {}
//   set name(newName) {
//     this.name_ = newName;
//   }
//   get name() {
//     return this.name_;
//   }
// }

// const p = new Person();
// p.name = "foo";
// console.log(p.name);

// class Person {
//   constructor() {
//     this.foo = function () {
//       console.log("instance");
//     };
//   }
//   foo() {
//     console.log("prototype");
//   }
//   static foo() {
//     console.log("class");
//   }
// }

// const p = new Person();
// p.foo();
// p.__proto__.foo();
// Person.foo();

// class Person {}

// Person.prototype.name = "Foo";
// Person.age = 18;

// class Person{}
// class Teacher extends Person{}
// const t = new Teacher()
// console.log(t instanceof Teacher);
// console.log(t instanceof Person);

// function Person() {}
// class Teacher extends Person {}
// const t = new Teacher()
// console.log(t instanceof Teacher);
// console.log(t instanceof Person);

// class Person {
//   foo() {
//     console.log("foo", this);
//   }
//   static bar() {
//     console.log("bar", this);
//   }
// }

// class Teacher extends Person {}

// const t = new Teacher();
// const p = new Person();

// t.foo();
// p.foo();

// Teacher.bar();
// Person.bar();

// class Person {
//   constructor() {
//     this.name = "foo";
//   }
// }

// class Teacher extends Person {
//   constructor() {
//     super();
//     console.log(this);
//     console.log(this instanceof Person);
//   }
// }

// const t = new Teacher();
// console.log(t.name);

// class Person {
//   static foo() {
//     console.log("Person");
//   }
// }

// class Teacher extends Person {
//   static foo() {
//     super.foo();
//   }
// }

// Teacher.foo();

// class Person {
//   constructor() {
//     this.name = "foo";
//   }
// }

// class Teacher extends Person {
//   constructor() {
//     this.age = 18;
//     super();
//   }
// }

// new Teacher();

// class Person {}
// class Teacher extends Person {
//   constructor() {
//     return {};
//   }
// }
// const t = new Teacher();
// console.log(t instanceof Person);

// class Person {
//   constructor() {
//     if (new.target === Person) {
//       throw new Error("无法实例化 Person ");
//     }
//   }
// }

// const p = new Person();

// class SuperArray extends Array {
//   foo() {
//     console.log(this);
//   }
// }

// const sa = new SuperArray(1, 2, 3, 4);
// console.log(sa);
// sa.foo();

// class Person {}
// function getSuperClass() {
//   return Person;
// }
// class Teacher extends getSuperClass {}

// class Person {}
// let FooMixin = (SuperClass) =>
//   class extends SuperClass {
//     foo() {
//       console.log("foo");
//     }
//   };

// let BarMixin = (SuperClass) =>
//   class extends SuperClass {
//     bar() {
//       console.log("bar");
//     }
//   };

// let BazMixin = (SuperClass) =>
//   class extends SuperClass {
//     baz() {
//       console.log("baz");
//     }
//   };

// function mix(BaseClass, ...Mixins) {
//   return Mixins.reduce(
//     (accumulator, current) => current(accumulator),
//     BaseClass
//   );
// }
// class Teacher extends mix(Person, FooMixin, BarMixin, BazMixin) {}

// const t = new Teacher();
// t.foo();
// t.bar();
// t.baz();

class Person {
  foo() {
    console.log("foo");
  }
}

class Teacher extends Person {
  bar() {
    super.foo();
    console.log("bar");
  }
}

const t = new Teacher();
t.bar();
