"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  function handlePlus() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handlePlus}>Plus 1</button>
    </>
  );
}
