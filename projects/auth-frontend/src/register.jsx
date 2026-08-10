import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setinfo] = useState(null);

  async function handlerRegister(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      setinfo(data);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      <form action="" onSubmit={handlerRegister}>
        <label htmlFor="">
          Email{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label htmlFor="">
          Password{" "}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
      <div>{info && <h1>{info.error}</h1>}</div>
      <div>{info && <h1>{info.message}</h1>}</div>
    </>
  );
}
