import { useState } from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function ColorPicker() {
  let [color, setColor] = useState("");
  return (
    <>
      <div style={{ background: color, width: "100px", height: "100px" }}></div>
      <Button onClick={() => setColor("red")}>Red</Button>
      <Button onClick={() => setColor("Green")}>Green</Button>
      <Button onClick={() => setColor("Blue")}>Blue</Button>
    </>
  );
}
