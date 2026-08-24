async function apiFetch(url, path = "", option = {}) {
  option = {
    ...option,
    headers: { ...option.headers, "Content-Type": "application/json" },
  };
  console.log(option);
  const respons = await fetch(url + path, option);
  if (!respons.ok) {
    const err = new Error("Respons Staturs " + respons.status);
    throw err;
  }
  const data = await respons.json();

  return data;
}
async function main() {
  try {
    const data = await apiFetch(
      "https://note-auth-api.onrender.com",
      "/notes",
      {
        method: "get",
        headers: {
          authorization:
            "Beareb eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTdmZTZkZTdkNDdmZWMyODc0OWQ4NTMiLCJpYXQiOjE3ODc1NTUxNzgsImV4cCI6MTc4NzY0MTU3OH0.7O-IYm6eXIS8aBJ0gYwG8mSmjoavDiiuBQ5zKoQ11eU",
        },
      },
    );
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
main();
