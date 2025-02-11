import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"; // No <Router> here
import MainLayout from "../layouts/MainLayoutPage";
import Skeleton from "../components/Skeleton";
import TestPage from "../pages/TestPage";

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
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;