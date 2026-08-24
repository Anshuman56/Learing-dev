async function main() {
  try {
    const response = await fetch(
      "https://api.github.com/users/thisuserdoesnotexist99999",
    );
    if (!response.ok) {
      throw new Error("Response Status " + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}
main();
