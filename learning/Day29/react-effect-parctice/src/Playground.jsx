import { useEffect, useState } from "react";

function Play() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);
    return () => {
      console.log('🟡 Cancel "' + text + '"log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        what to log:{" "}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}

export default function Playground() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "mount"} the componet
      </button>
      {show && <hr />}
      {show && <Play />}
    </>
  );
}
