"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [likes, setLikes] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function main() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("/api/likes");
        if (!response.ok) throw new Error("Response status" + response.status);
        const data = await response.json();
        console.log(data);
        setLikes(data.likes);
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    main();
  }, []);
  async function handleLikes() {
    try {
      const response = await fetch("/api/likes", { method: "post" });

      if (!response.ok) throw new Error("Response status" + response.status);
      const data = await response.json();
      console.log(data);
      setLikes(data.likes);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  }
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <h1>You get likes {likes}</h1>
      <button
        className=" bg-blue-500 py-3 px-1 text-white rounded"
        onClick={handleLikes}
      >
        Likes
      </button>
    </>
  );
}
