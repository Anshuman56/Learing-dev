"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const route = useRouter();
  function handleSearch(e: FormEvent) {
    e.preventDefault();
    route.push(`/city/${city}`);
  }
  return (
    <div className="flex">
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          className="border"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
