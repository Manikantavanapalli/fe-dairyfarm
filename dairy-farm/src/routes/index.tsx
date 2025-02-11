import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";  // Remove Router
import MainLayout from "../layouts/MainLayoutPage";
import Skeleton from "../components/Skeleton";
import PrivateRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

// Lazy-loaded components
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Subscribe = lazy(() => import("../pages/Subscribe"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));
const Orders = lazy(() => import("../pages/Orders"));
const NotFound = lazy(() => import("../pages/NotFound"));
const TestPage = lazy(() => import("../pages/TestPage"));
const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));
const ManageOrders = lazy(() => import("../pages/Admin/ManageOrders"));
const ManageProducts = lazy(() => import("../pages/Admin/ManageProducts"));
const ManageUsers = lazy(() => import("../pages/Admin/ManageUsers"));

const AppRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="*" element={<NotFound />} />

          {/* Private Routes */}
          <Route path="cart" element={<PrivateRoute isAuthenticated={isAuthenticated}><Cart /></PrivateRoute>} />
          <Route path="checkout" element={<PrivateRoute isAuthenticated={isAuthenticated}><Checkout /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute isAuthenticated={isAuthenticated}><Profile /></PrivateRoute>} />
          <Route path="orders" element={<PrivateRoute isAuthenticated={isAuthenticated}><Orders /></PrivateRoute>} />

          {/* Admin Routes */}
          <Route path="admin" element={<AdminRoute isAuthenticated={isAuthenticated}><AdminDashboard /></AdminRoute>} />
          <Route path="admin/orders" element={<AdminRoute isAuthenticated={isAuthenticated}><ManageOrders /></AdminRoute>} />
          <Route path="admin/products" element={<AdminRoute isAuthenticated={isAuthenticated}><ManageProducts /></AdminRoute>} />
          <Route path="admin/users" element={<AdminRoute isAuthenticated={isAuthenticated}><ManageUsers /></AdminRoute>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
