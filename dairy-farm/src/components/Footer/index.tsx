import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 text-center text-md-start mb-3">
            <h5>About Us</h5>
            <p className="small">
              Milk Dairy provides fresh and organic dairy products straight from farms to your doorstep.
            </p>
          </div>

          {/* Customer Support */}
          <div className="col-md-4 text-center mb-3">
            <h5>Customer Support</h5>
            <p className="small mb-1">
              <FaPhone className="me-2" /> <Link to="tel:+1234567890" className="text-white text-decoration-none">+1 234 567 890</Link>
            </p>
            <p className="small">
              <FaEnvelope className="me-2" /> <Link to="mailto:support@milkdairy.com" className="text-white text-decoration-none">support@lvmilkdairy.com</Link>
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-center text-md-end mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end">
              <Link to="https://facebook.com" className="text-white me-3"><FaFacebook size={20} /></Link>
              <Link to="https://twitter.com" className="text-white me-3"><FaTwitter size={20} /></Link>
              <Link to="https://instagram.com" className="text-white me-3"><FaInstagram size={20} /></Link>
              <Link to="https://linkedin.com" className="text-white"><FaLinkedin size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3 border-top pt-3">
          <p className="mb-0 small">© {currentYear} Milk Dairy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
