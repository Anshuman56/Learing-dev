"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch() {
    router.push(`/search/${query}`);
  }

  return (
    <div>
      <input
        value={query}
        className="border rounded"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
