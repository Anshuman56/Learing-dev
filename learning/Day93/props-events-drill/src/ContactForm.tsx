import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(name);
    console.log(email);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <input
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
