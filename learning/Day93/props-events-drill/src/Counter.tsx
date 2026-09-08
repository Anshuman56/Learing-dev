import { useState } from "react";

export default function Counter({
  startAt,
  label,
  step,
}: {
  startAt: number;
  label: string;
  step?: number;
}) {
  const [num, setNum] = useState<number>(startAt);
  const handleIncrement = () => {
    if (step === undefined) setNum((n) => n + 1);
    else setNum((n) => step + n);
  };
  function handleDecrement() {
    if (step === undefined) setNum((num) => num - 1);
    else setNum((num) => num - step);
  }
  return (
    <>
      <h2>
        {label} {num}
      </h2>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
}
