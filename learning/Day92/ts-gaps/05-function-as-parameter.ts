function runTwice(fn: (n: number) => void, x: number) {
  fn(x);
  fn(x);
}

function log(n: number) {
  console.log(n);
}

runTwice(log, 3);
