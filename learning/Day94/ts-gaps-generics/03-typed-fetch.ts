async function typedFetch<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Response status" + response.status);
  const data = await response.json();
  return data;
}

async function main() {
  try {
    const result = await typedFetch<{ login: string }>(
      "https://api.github.com/users/Anshuman56",
    );
    console.log(result.login);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
main();
