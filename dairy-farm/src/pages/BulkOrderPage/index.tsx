import React, { useState } from "react";
import axios from "axios";

const BulkOrdersPage: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    bulkOrderDetails: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleBulkOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/bulkorders", orderDetails);
      alert("Bulk order submitted successfully!");
      setOrderDetails({ name: "", email: "", phone: "", bulkOrderDetails: "", notes: "" });
    } catch (error) {
      console.error("Error submitting bulk order:", error);
      alert("Failed to submit bulk order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Bulk Orders</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Enter your bulk order details below. We will get back to you shortly.
        </p>
        <form onSubmit={handleBulkOrderSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={orderDetails.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={orderDetails.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={orderDetails.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="bulkOrderDetails"
            placeholder="Enter your bulk order details here..."
            value={orderDetails.bulkOrderDetails}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Bulk Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BulkOrdersPage;
