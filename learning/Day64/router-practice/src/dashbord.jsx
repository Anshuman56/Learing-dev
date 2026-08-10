import { useNavigate } from "react-router";

export default function Dashbord() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      <h2>Wale come to dashbord</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
