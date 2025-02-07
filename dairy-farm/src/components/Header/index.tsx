import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <a className="navbar-brand" href="/">
          <img src="C:\Users\manik\OneDrive\Desktop\fe-Dairy-farm\dairy-farm\src\assets\images\LV Logo.png" alt="Dairy Farm Logo" style={{ width: '50px', height: 'auto' }} />
          Dairy Farm
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Our Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
