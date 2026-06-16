import { useState } from "react";

export default function NameInput() {
  let [value, setValue] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h1>Hello! {value}</h1>
    </>
  );
}
