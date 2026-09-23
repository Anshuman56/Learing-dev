import Search from "./Search";

export default async function Home() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  console.log(data);
  return (
    <>
      <h1>{data.meals[0].strMeal}</h1>
      <Search />
    </>
  );
}
