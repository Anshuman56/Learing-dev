import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./home";
import About from "./about";
import Dashbord from "./dashbord";
import Login from "./login";
import ProtectedRoute from "./protectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/about" style={{ padding: 20 }}>
          About
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/dashbord" style={{ padding: 20 }}>
          Dashbord
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashbord"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
