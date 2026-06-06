// function makeCounter() {
//   let count = 0;
//   return function incregeConnt() {
//     count++;
//     console.log(count);
//   };
// }

// let a = makeCounter();
// a();
// a();
// a();
// a();

// function makeMultiplier(x) {
//   return function doMultiply(y) {
//     console.log(x * y);
//   };
// }

// makeMultiplier(5)(10);

function once(fn) {
  let called = false;

  return function (...args) {
    if (called) return undefined;

    called = true;
    return fn(...args);
  };
}

function greet(name) {
  return `Hello, ${name}!`;
}

const greetOnce = once(greet);

console.log(greetOnce("Alice")); // "Hello, Alice!"
console.log(greetOnce("Bob")); // undefined
console.log(greetOnce("John")); // undefined
