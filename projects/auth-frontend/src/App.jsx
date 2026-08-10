import { Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Me from "./me";
import Register from "./register";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </>
  );
}
