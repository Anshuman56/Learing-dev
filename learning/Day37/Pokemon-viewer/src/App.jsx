import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!name.trim()) return;
    let isIgnore = false;

    async function getData() {
      setError("");
      setIsLoding(true);
      setPokemon(null);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        );
        if (!response.ok) throw new Error(`Pokemon not found`);
        const data = await response.json();
        if (!isIgnore) setPokemon(data);
        console.log(data);
      } catch (err) {
        if (!isIgnore) {
          setPokemon(null);
          setError(err.message);
        }
      } finally {
        if (!isIgnore) setIsLoding(false);
      }
    }
    getData();
    return () => (isIgnore = true);
  }, [name]);

  function handleName() {
    setName(input);
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleName}>Searching</button>
      {isLoding ? (
        <p>Searching...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        pokemon && (
          <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="img" />
            <p>
              height: {pokemon.height}, weight: {pokemon.weight}, type:{" "}
              {pokemon.types[0].type.name}
            </p>
          </div>
        )
      )}
    </>
  );
}
