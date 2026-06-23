import { useEffect, useState } from "react";

export default function Timer() {
  const [counter, setConter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setConter((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <h1>{counter}</h1>;
}
