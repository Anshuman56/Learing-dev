import { useState } from "react";
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
export default function Counter() {
  let [count, setCounter] = useState(0);
  function addOne() {
    setCounter(count + 1);
  }
  function subtractOne() {
    if (count > 0) setCounter(count - 1);
  }
  function reset() {
    setCounter(0);
  }
  return (
    <>
      <Button onClick={addOne}>"+1" button {count}</Button>
      <Button onClick={subtractOne}>"-1" button {count}</Button>
      <Button onClick={reset}>reset</Button>
      <p></p>
    </>
  );
}
