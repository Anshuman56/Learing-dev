import Counter from "./Counter";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/Anshuman56");
  const user = await res.json();
  return (
    <>
      <Counter />
      <h1>{user.name}</h1>
    </>
  );
}
