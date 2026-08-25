import { useEffect, useState } from "react";

export default function User() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("effect running");
    async function main() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://api.github.com/users/Anshuman56");
        if (!response.ok) throw new Error("Response status " + response.status);
        const data = await response.json();
        console.log(data);
        if (!ignore) setResult(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    let ignore = false;
    main();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {result && <h2>{result.login}</h2>}
    </div>
  );
}
