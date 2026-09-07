async function fetchNumber(): Promise<number> {
  return 42;
}

async function fetchGreeting(name: string): Promise<string> {
  return name;
}

console.log(fetchNumber());
console.log(fetchGreeting("anlk"));
