import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState(null);

  const navigate = useNavigate();

  async function handlerRegister(e) {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      setEmail("");
      setPassword("");
      localStorage.setItem("token", data.token);
      navigate("/me");
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}
