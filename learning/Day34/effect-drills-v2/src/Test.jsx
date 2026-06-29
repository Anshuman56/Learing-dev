import { useEffect, useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    );
    return () => clearInterval(intervalId);
  }, [time]);

  function getCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={getCount}>Add one</button>
      <h1>Current Time:{time}</h1>
      <h2>
        widht: {window.innerWidth} height: {window.innerHeight}
      </h2>
    </>
  );
}
