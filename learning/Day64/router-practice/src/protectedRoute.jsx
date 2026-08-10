import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  return children;
}
