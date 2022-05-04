// let s1 = "string";
// let s2 = s1.substring(2);
// console.log(s2);

// let s1 = new String('string')
// let s2 = s1.substring(2);
// s1 = null

// let s1 = 'string'
// s1.foo = 'bar'
// console.log(s1.foo);

// let obj = new Object('string')
// console.log(obj instanceof String);

// let val = "25";
// let num = Number(val);
// console.log(typeof num);

// let obj = new Number(val);
// console.log(typeof obj);

// let obj = new Boolean(true);
// console.log(obj.valueOf());
// console.log(obj.toString());

// let obj = new Number(10);
// console.log(obj);

// let num = new Number(10)
// console.log(num.toString(2));   // 1010
// console.log(num.toString(8));   // 12
// console.log(num.toString(16));  // a

// let num1 = 12.000000000345;
// let num2 = 12.345;
// console.log(num1.toPrecision(1)); // 1e+1
// console.log(num1.toPrecision(2)); // 12
// console.log(num1.toPrecision(3)); // 12.0
// console.log(num2.toPrecision(3)); // 12.3
// console.log(num2.toPrecision()); // 12.3

// console.log(Number.isInteger(10));      // true
// console.log(Number.isInteger(10.0));    // true
// console.log(Number.isInteger(10.1));    //

// console.log(Number.isSafeInteger(2 ** 53 -1));

// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER

// const obj = new Boolean(true);
// console.log(obj.toLocaleString());
// console.log(obj.toString());

// let obj = new String('string')
// console.log(typeof obj);        // object

// let s1 = "hello ";
// console.log(s1.concat("world"));    // hello world
// console.log(s1);                    // hello

// let s = "hello";
// console.log(s.concat(" ", "world", "!"));

// let

// let s = "hello";
// console.log(s + " " + "world" + "!");

// let s = "12345678";
// let sub = s.slice();
// console.log(sub);   // '23'

// let s = "12345678";
// // let sub = s.substring(1, 4);    // '234'
// let sub = s.slice(1, 4); // '234'
// console.log(sub);

// let s = "12345678";
// let sub = s.substring(1, 3);
// console.log(sub);

// let s = "12345678";
// let sub = s.substr(1, 4);
// console.log(sub);

// let s = "12345678";
// let sub = s.slice(-10, 5);  // 12345
// console.log(sub);

// let s = "12345678";
// let sub = s.substring(1, -6);
// console.log(sub);

// let s = "12345678";
// let sub = s.substr(4, -6);
// console.log(sub); // 56

// let s = "aabcabcd";
// console.log(s.indexOf("bc"));   // 2
// console.log(s.lastIndexOf("bc"));   // 5

// let s = "aabcabcdbc";
// let sub = "bc";
// let posArr = [];
// let pos = s.lastIndexOf(sub);

// while (pos !== -1) {
//   posArr.push(pos);
//   pos = s.lastIndexOf(sub, pos - 1);
// }

// console.log(posArr);

// let s = 'foobarfoo'
// console.log(s.includes('bar'));

// let s1 = "    foobar ";
// let s2 = s1.trim();
// console.log(s1);    // 不改变原字符串
// console.log(s2);    // foobar

// let s = 'foo'
// console.log(s.repeat(1));   // foofoofoofoofoo

// let s = "foo";
// let s1 = s.padStart(10, "bar");
// console.log(s1);                // barbarbfoo
// let s2 = s.padEnd(10, "bar");
// console.log(s2);                // foobarbarb

// let string = "abcde";
// let strIter = string[Symbol.iterator]();
// console.log(strIter.next()); // { value: 'a', done: false }
// console.log(strIter.next()); // { value: 'b', done: false }
// console.log(strIter.next()); // { value: 'c', done: false }
// console.log(strIter.next()); // { value: 'd', done: false }
// console.log(strIter.next()); // { value: 'e', done: false }
// console.log(strIter.next()); // { value: undefined, done: true }

// let string = "abcde";
// for (const s of string) {
//   console.log(s);
// }

// let string = "abcde";
// // console.log([...string]);   // [ 'a', 'b', 'c', 'd', 'e' ]

// console.log(string[1]);

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);     // [ 'T', 'I' ]

// const paragraph = "the Quick brown fox jumps over the lazy dog. It barked.";

// const regex = /[A-Z]/g;

// const found = paragraph.search(regex);

// console.log(found);     // 4

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// // console.log(p.replace('dog', 'monkey'));
// // // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// const regex = /dog/g;
// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// const str = "The quick brown fox";

// const words = str.split(" ");
// console.log(words);             // [ 'The', 'quick', 'brown', 'fox' ]

// const chars = str.split("");
// console.log(chars[8]);          // k

// const strCopy = str.split();
// console.log(strCopy);           // [ 'The quick brown fox' ]

const s1 = 'abcd'
const s2 = 'abc'
console.log(s1.localeCompare(s2));  // 1
