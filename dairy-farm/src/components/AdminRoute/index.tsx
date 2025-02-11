import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { JSX } from "react";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user && user.role === "admin" ? children : <Navigate to="/" />;
};

export default AdminRoute;
