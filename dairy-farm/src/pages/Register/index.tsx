import React, { useState } from "react";
import { registerUser } from "../../services/AuthService";
import { Link } from "react-router-dom";
import logo from "../../assets/images/LV Logo.png"; // Import the logo

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await registerUser(
        formData.name,
        formData.email,
        formData.password,
        formData.phone
      );
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-6">
      {/* Register Card */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="LV Logo" className="w-24 h-24" />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-gray-800">Create an Account 🚀</h2>
        <p className="text-gray-500 text-center mt-2">Join us today!</p>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 text-green-600 p-3 my-3 text-sm rounded-md text-center">
            🎉 Registration successful!
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 p-3 my-3 text-sm rounded-md text-center">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-md"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;