import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, ShoppingCart, LogOut, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/LV Logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
          <span className="text-xl font-bold text-gray-800">Milk Dairy</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <div className={`lg:flex items-center space-x-6 ${menuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg">
            <li>
              <Link to="/products" className="flex items-center">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center">
                Cart <ShoppingCart size={18} className="ml-1" />
              </Link>
            </li>
            <li>
              <Link to="/subscribe" className="flex items-center">Subscribe</Link>
            </li>
          </ul>

          {/* User Section */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <User size={20} className="mr-2" /> Hello, {user.name}
              </span>
              <Link to="/profile" className="flex items-center">Profile</Link>
              <Link to="/orders" className="flex items-center">Orders</Link>
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
          ) : (
            <div className="flex space-x-3">
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