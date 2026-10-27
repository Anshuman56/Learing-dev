export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const obj = await searchParams;
  console.log(obj);
  return (
    <>
      <form method="get">
        <select name="crop">
          <option>Tomato</option>
          <option>Potato</option>
          <option>Bean</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
