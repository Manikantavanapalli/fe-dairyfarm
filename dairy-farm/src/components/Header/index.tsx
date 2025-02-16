// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, ShoppingCart, LogOut, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/LV Logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    // Force update when user state changes
  }, [user]);

  const handleNavigation = (path: string, requiresAuth?: boolean) => {
    if (requiresAuth && !user) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Milk Dairy Logo" className="h-12" />
          <span className="text-xl font-bold text-gray-800">LV Milk Dairy Farm</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links and User Section */}
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${
            menuOpen ? "block" : "hidden"
          } lg:block mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg">
            <li>
              <Link to="/products" className="flex items-center">Products</Link>
            </li>
            <li>
              <button onClick={() => handleNavigation("/cart", true)} className="flex items-center">
                Cart <ShoppingCart size={18} className="ml-1" />
              </button>
            </li>
            <li>
              <Link to="/subscribe" className="flex items-center">Subscribe</Link>
            </li>
          </ul>

          {/* User Section */}
          {user ? (
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
              {/* Profile and Orders on the left */}
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <button onClick={() => handleNavigation("/profile", true)} className="flex items-center">
                  Profile
                </button>
                <button onClick={() => handleNavigation("/orders", true)} className="flex items-center">
                  Orders
                </button>
              </div>

              {/* User name, icon, and logout on the right */}
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                  />
                  <span className="flex items-center">
                    <User size={20} className="mr-2" />{user.name}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="flex items-center text-red-600"
                >
                  <LogOut size={16} className="mr-2" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-3 mt-4 lg:mt-0">
              <Link to="/login" className="flex items-center px-4 py-2 rounded-lg shadow-md">
                <LogIn size={18} className="mr-2" /> Login
              </Link>
              <Link to="/register" className="flex items-center px-4 py-2 rounded-lg shadow-md">
                <UserPlus size={18} className="mr-2" /> Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;