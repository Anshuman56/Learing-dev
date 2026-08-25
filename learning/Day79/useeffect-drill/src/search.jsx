import { useEffect, useState } from "react";

export default function Search() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    let ignore = false;
    async function main() {
      setError("");
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${input}`,
        );
        if (!response.ok) throw new Error("Response status " + response.status);
        const data = await response.json();
        console.log(data);
        if (!ignore) setResult(data.items);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    const timerId = setTimeout(() => {
      if (input) main();
    }, 500);
    return () => {
      clearTimeout(timerId);
      ignore = true;
    };
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {result && result.length === 0 ? (
        <h2>no result</h2>
      ) : (
        <h2>
          {" "}
          <ul>
            {result.map((item) => (
              <li key={item.id}>{item.login}</li>
            ))}
          </ul>
        </h2>
      )}
    </div>
  );
}
