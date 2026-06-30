import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("Set the Interval " + text);
    const intervalId = setInterval(() => setValue(text), 500);
    return () => {
      console.log("clean the interval " + text);
      clearInterval(intervalId);
    };
  }, [text]);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{value}</h1>
    </>
  );
}
