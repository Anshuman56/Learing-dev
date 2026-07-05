import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (typeof name !== "number") if (!name.trim()) return;
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
  function randomId() {
    setName(Math.floor(Math.random() * 151));
  }

  const typeColors = {
    fire: "bg-red-100 text-red-600",
    flying: "bg-blue-100 text-blue-600",
    water: "bg-sky-100 text-sky-600",
    grass: "bg-green-100 text-green-600",
    electric: "bg-yellow-100 text-yellow-600",
    poison: "bg-purple-100 text-purple-600",
    bug: "bg-lime-100 text-lime-600",
    normal: "bg-gray-100 text-gray-600",
    ground: "bg-amber-100 text-amber-700",
    fairy: "bg-pink-100 text-pink-600",
    fighting: "bg-orange-100 text-orange-600",
    psychic: "bg-rose-100 text-rose-600",
    rock: "bg-stone-100 text-stone-600",
    ice: "bg-cyan-100 text-cyan-600",
    ghost: "bg-indigo-100 text-indigo-600",
    dragon: "bg-violet-100 text-violet-600",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-800/70">
          Pokédex
        </p>
        <h1 className="mb-5 mt-1 text-center text-xl font-bold text-gray-800">
          Find a pokémon
        </h1>

        <div className="mb-2 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="pikachu"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
          />
          <button
            onClick={handleName}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Search
          </button>
        </div>
        <button
          onClick={randomId}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Random
        </button>

        {isLoding ? (
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-700" />
            <p className="text-sm text-gray-400">Searching...</p>
          </div>
        ) : error ? (
          <p className="mt-6 text-center text-sm text-red-500">{error}</p>
        ) : (
          pokemon && (
            <div className="mt-5 rounded-xl bg-gray-50 p-5">
              <div className="flex flex-col items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white ring-1 ring-gray-100">
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  #{String(pokemon.id).padStart(3, "0")}
                </p>
                <h2 className="text-2xl font-bold capitalize text-gray-800">
                  {pokemon.name}
                </h2>
                <div className="mt-2 flex gap-2">
                  {pokemon.types.map((t) => (
                    <span
                      key={t.type.name}
                      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        typeColors[t.type.name] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="flex justify-around text-center">
                <div>
                  <p className="font-bold text-gray-800">
                    {(pokemon.height / 10).toFixed(1)} m
                  </p>
                  <p className="text-xs text-gray-400">Height</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </p>
                  <p className="text-xs text-gray-400">Weight</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
