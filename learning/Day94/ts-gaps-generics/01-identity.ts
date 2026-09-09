function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("kalie"));
console.log(identity<number>(9));
console.log(identity<object>({ name: "ram" }));
