import { useEffect, useState } from "react";

export default function Repos() {
  const [reposList, setReposList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    async function main() {
      setError("");
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/Anshuman56/repos",
        );
        if (!response.ok) throw new Error("Response status " + response.status);
        const data = await response.json();
        console.log(data);
        if (!ignore) setReposList(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    main();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {reposList && reposList.length === 0 ? (
        <h2>no result</h2>
      ) : (
        <ul>
          {reposList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
