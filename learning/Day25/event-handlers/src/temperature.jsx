import FahrenheitDisplay from "./FahrenheitDisplay";
import CelsiusInput from "./CelsiusInput";
import { useState } from "react";

export default function Temperature() {
  const [temp, setTemp] = useState(0);
  let result = temp * 1.8 + 32;
  return (
    <>
      <CelsiusInput value={temp} onChange={(e) => setTemp(e.target.value)} />
      <FahrenheitDisplay celsius={result} />
    </>
  );
}
