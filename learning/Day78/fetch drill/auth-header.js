async function main() {
  try {
    const response = await fetch("https://api.github.com/user", {
      method: "get",
      headers: {
        Authorization: "Bearer Fake-Token",
      },
    });
    if (!response.ok) {
      const error = new Error("Response Status " + response.status);
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
    if (err.status === 401) {
      console.log("got 401");
    }
  }
}
main();
