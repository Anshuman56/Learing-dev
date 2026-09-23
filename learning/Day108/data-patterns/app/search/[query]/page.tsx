type Props = {
  params: Promise<{
    query: string;
  }>;
};
type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};

export default async function SearchPage({ params }: Props) {
  const { query } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
  );

  const data = await response.json();

  return (
    <div>
      <h1>Search results for {query}</h1>

      {data.meals?.map((meal: Meal) => (
        <p key={meal.idMeal}>{meal.strMeal}</p>
      ))}
    </div>
  );
}
