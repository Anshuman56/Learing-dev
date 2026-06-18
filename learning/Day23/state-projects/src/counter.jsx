import { useState } from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Counter() {
  let [number, setNumber] = useState(0);
  function handlePlusOne() {
    console.log("count value is", number);
    return setNumber(number + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      {console.log("count value is", number)}
      <Button onClick={handlePlusOne}>+1</Button>
      <Button onClick={number > 0 ? () => setNumber(number - 1) : ""}>
        -1
      </Button>
      <Button onClick={() => setNumber(0)}>Reset</Button>
    </>
  );
}
