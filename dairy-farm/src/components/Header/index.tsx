import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/LV Logo.png";

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userName }) => {
  const menuItems = [
    { path: "/products", label: "Products" },
    { path: "/cart", label: "Cart" },
    { path: "/subscribe", label: "Subscribe" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Milk Dairy Logo" height="60" className="me-2" />
          <span className="fw-bold text-dark">Milk Dairy</span>
        </Link>

        {/* Navbar Toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* User Section */}
          <ul className="navbar-nav ms-3">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link fw-bold">Hello, {userName}</span>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-danger" to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-primary me-2" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
