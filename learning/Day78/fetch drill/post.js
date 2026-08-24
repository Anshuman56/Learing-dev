async function main() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify({ title: "hi", body: "test", userId: 1 }),
    });
    if (!response.ok) {
      throw new Error("Response Status" + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}
main();
