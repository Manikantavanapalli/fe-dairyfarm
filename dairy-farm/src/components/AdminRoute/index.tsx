import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user } = useAuth(); // Get user authentication status

  return user && user.role === "admin" ? <>{children}</> : <Navigate to="/login" replace />;
};

export default AdminRoute;

