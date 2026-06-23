import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Count:${counter}`;
  }, [counter]);

  function handleClick() {
    setCounter(counter + 1);
  }

  return <button onClick={handleClick}>Click me!</button>;
}
