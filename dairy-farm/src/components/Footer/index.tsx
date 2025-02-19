import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div className="text-center md:text-left">
            <h5 className="text-lg font-semibold mb-4 text-green-400 hover:text-green-300 transition duration-300">About Us</h5>
            <p className="text-sm text-gray-400 mb-4">
              Milk Dairy provides fresh and organic dairy products straight from farms to your doorstep.
            </p>
            <Link 
              to="/LearnMore"
              className="text-green-400 hover:text-green-300 hover:underline text-sm transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h5 className="text-lg font-semibold mb-4 text-blue-400 hover:text-blue-300 transition duration-300">Quick Links</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-white hover:underline transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-white hover:underline transition duration-300">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white hover:underline transition duration-300">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="text-center">
            <h5 className="text-lg font-semibold mb-4 text-yellow-400 hover:text-yellow-300 transition duration-300">Customer Support</h5>
            <p className="text-sm flex items-center justify-center md:justify-start text-gray-400 mb-2">
              <FaPhone className="mr-2 text-green-400" /> 
              <a href="tel:+1234567890" className="hover:text-green-400 transition duration-300">+1 234 567 890</a>
            </p>
            <p className="text-sm flex items-center justify-center md:justify-start text-gray-400">
              <FaEnvelope className="mr-2 text-blue-400" /> 
              <a href="mailto:support@milkdairy.com" className="hover:text-blue-400 transition duration-300">support@lvmilkdairy.com</a>
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold mb-4 text-red-400 hover:text-red-300 transition duration-300">Follow Us</h5>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110">
                <FaFacebook size={22} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110">
                <FaTwitter size={22} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110">
                <FaInstagram size={22} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600 transition duration-300 transform hover:scale-110">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-500">© {currentYear} Milk Dairy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;