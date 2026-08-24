async function apiFetch(url, path = "", option = {}) {
  option = { ...{ headers: { "Content-Type": "application/json" } } };
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
    const data = await apiFetch("https://note-auth-api.onrender.com", "/notes");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
main();
