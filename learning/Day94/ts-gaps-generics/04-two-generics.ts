function swap<A, B>(pair: [A, B]): [B, A] {
  let [a, b] = pair;
  return [b, a];
}

console.log(swap<string, number>(["hi", 42]));
