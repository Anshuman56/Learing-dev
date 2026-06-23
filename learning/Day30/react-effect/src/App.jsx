import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [debouncText, setDebounceText] = useState("");

  useEffect(() => {
    function texthandler() {
      setDebounceText(text);
    }
    const timeoutId = setTimeout(() => texthandler(), 500);
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{debouncText}</h1>
    </>
  );
}
