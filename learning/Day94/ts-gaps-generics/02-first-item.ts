function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(first<number>([3, 4, 3]));
console.log(first<number>([]));
console.log(first<string>(["dd", "mm", "YYYY"]));
console.log(first<object>([{ name: "ram" }, { name: "dam" }, { name: "rag" }]));
