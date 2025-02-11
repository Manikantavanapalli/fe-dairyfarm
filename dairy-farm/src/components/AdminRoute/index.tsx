import React from "react";
import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AdminRoute;
