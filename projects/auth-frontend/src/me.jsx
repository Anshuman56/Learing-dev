import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Me() {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  async function handlerRegister(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3000/me", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setInfo(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handlerLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <button onClick={handlerRegister}>Me</button>
      <button onClick={handlerLogout}>Logout</button>
      {info && info.error && <h1> {info.error}</h1>}
      {info && info.userEmail && <h1>You are {info.userEmail}</h1>}
    </>
  );
}
