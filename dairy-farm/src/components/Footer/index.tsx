import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 mt-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us */}
          <div className="text-center md:text-left">
            <h5 className="text-lg font-semibold mb-2">About Us</h5>
            <p className="text-sm text-gray-400">
              Milk Dairy provides fresh and organic dairy products straight from farms to your doorstep.
            </p>
          </div>

          {/* Customer Support */}
          <div className="text-center">
            <h5 className="text-lg font-semibold mb-2">Customer Support</h5>
            <p className="text-sm flex items-center justify-center md:justify-start text-gray-400">
              <FaPhone className="mr-2 text-green-400" /> 
              <Link to="tel:+1234567890" className="hover:text-green-400 transition">+1 234 567 890</Link>
            </p>
            <p className="text-sm flex items-center justify-center md:justify-start text-gray-400">
              <FaEnvelope className="mr-2 text-blue-400" /> 
              <Link to="mailto:support@milkdairy.com" className="hover:text-blue-400 transition">support@lvmilkdairy.com</Link>
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link to="https://facebook.com" className="text-gray-400 hover:text-blue-500 transition">
                <FaFacebook size={20} />
              </Link>
              <Link to="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </Link>
              <Link to="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </Link>
              <Link to="https://linkedin.com" className="text-gray-400 hover:text-blue-600 transition">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">© {currentYear} Milk Dairy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
