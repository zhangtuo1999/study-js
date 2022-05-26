// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   },1000);
// });

// p.then((value) => {
//   console.log(value);
// });

async function foo() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("foo");
    }, 1000);
  });

  try {
    console.log(await p);
  } catch (error) {
    console.log(error);
  }

  console.log("bar");
}

// foo().catch((error) => {
//   console.log(error);
// });

// try {
//   foo();
// } catch (error) {
//   console.log(error);
// }

foo();
