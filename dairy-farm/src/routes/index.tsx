import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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
const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));
const ManageOrders = lazy(() => import("../pages/Admin/ManageOrders"));
const ManageProducts = lazy(() => import("../pages/Admin/ManageProducts"));
const ManageUsers = lazy(() => import("../pages/Admin/ManageUsers"));

const AppRoutes: React.FC = () => {
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
          <Route path="*" element={<NotFound />} />

          {/* Private Routes (Only accessible after login) */}
          <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />

          {/* Admin Routes (Only accessible for admin users) */}
          <Route path="admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="admin/orders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
          <Route path="admin/products" element={<AdminRoute><ManageProducts /></AdminRoute>} />
          <Route path="admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
