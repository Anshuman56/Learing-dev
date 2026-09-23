type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};
export default async function Meal({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  const data = await response.json();

  return (
    <div>
      {data.meals?.map((meal: Meal) => (
        <p key={meal.idMeal}>{meal.strMeal}</p>
      ))}
    </div>
  );
}
