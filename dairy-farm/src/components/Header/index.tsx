import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingCart, LogOut, LogIn, UserPlus } from "lucide-react";
import logo from "../../assets/images/LV Logo.png";

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userName }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { path: "/products", label: "Products" },
    { path: "/cart", label: "Cart", icon: <ShoppingCart size={18} className="inline-block ml-1" /> },
    { path: "/subscribe", label: "Subscribe" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Milk Dairy Logo" className="h-12" />
          <span className="text-xl font-bold text-gray-800">Milk Dairy</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex items-center space-x-6 ${menuOpen ? "block" : "hidden"} lg:block absolute lg:relative bg-white lg:bg-transparent top-full left-0 w-full lg:w-auto shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-green-500 transition flex items-center"
                >
                  {item.label} {item.icon}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Section */}
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 font-semibold focus:outline-none">
                <User size={20} />
                <span>Hello, {userName}</span>
              </button>
              <div className="hidden group-hover:block absolute right-0 bg-white shadow-lg rounded-lg mt-2 w-40">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                <Link to="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center">
                  <LogOut size={16} className="mr-2" /> Logout
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex space-x-3">
              <Link to="/login" className="btn btn-primary flex items-center px-4 py-2 rounded-lg shadow-md">
                <LogIn size={18} className="mr-2" /> Login
              </Link>
              <Link to="/register" className="btn btn-success flex items-center px-4 py-2 rounded-lg shadow-md">
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
