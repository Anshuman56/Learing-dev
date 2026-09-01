import { useState } from "react";

export default function Counter({
  startAt,
  label,
}: {
  startAt: number;
  label: string;
}) {
  const [count, setCount] = useState<number>(startAt);
  const [add, setAdd] = useState<number>(0);
  return (
    <>
      <h2>{label + count}</h2>
      <input
        type="text"
        value={add}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAdd(+e.target.value)
        }
      />
      <button onClick={() => setCount(count + add)}>add 1</button>
    </>
  );
}
