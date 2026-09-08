import React, { useState } from "react";

export default function Search() {
  const [text, setText] = useState<string>("");
  return (
    <>
      <input
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.currentTarget.value)
        }
      />
      <h2>Your text {text}</h2>
    </>
  );
}
