let date = new Date()
console.log(date);

let start = Date.now();
setTimeout(() => {
  let end = Date.now();
  console.log(end - start);
}, 1000);