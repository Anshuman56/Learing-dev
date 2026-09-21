"use client";

import { useEffect, useState } from "react";

export default function ClientPage() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function main() {
      try {
        const res = await fetch("https://api.github.com/users/Anshuman56");
        if (!res.ok) throw new Error("Response status" + res.status);
        const data = await res.json();
        setUser(data.name);
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
      }
    }
    main();
  });
  return <h1>{user}</h1>;
}
