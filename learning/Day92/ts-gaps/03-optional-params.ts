function greet3(name: string, title?: string): string {
  return name + title;
}

console.log(greet3("kall"));
console.log(greet3("kall", "hlald"));
