import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  function handleLogin() {
    localStorage.setItem("token", "Fake-token");
    navigate("/dashbord");
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
