import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  // Sample Cart Data (Replace with actual state/context)
  const cartItems = [
    { id: 1, name: "250ml Buffalo Milk", price: 20, quantity: 1 },
    { id: 2, name: "500ml Buffalo Milk", price: 40, quantity: 2 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.address && formData.phone) {
      setOrderPlaced(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">🛍️ Checkout</h2>
        <p className="text-lg text-gray-600">Complete your order by providing your details.</p>
      </div>

      {/* Checkout Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {orderPlaced ? (
          // Order Confirmation Section
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h3>
            <p className="text-gray-600 mt-2">Thank you, <span className="font-semibold">{formData.name}</span>. Your order will be delivered soon.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🛒 Order Summary</h3>
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b py-3">
                    <h5 className="text-lg font-semibold text-gray-700">{item.name}</h5>
                    <p className="text-gray-500">₹{item.price} x {item.quantity}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-4 border-t pt-4">
                  <h5 className="text-xl font-bold text-gray-800">Total:</h5>
                  <h5 className="text-green-600 font-bold text-2xl">₹{totalPrice}</h5>
                </div>
              </div>
            </div>

            {/* User Details Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Shipping Details</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="address"
                  placeholder="Shipping Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">💳 Payment Method</h3>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => navigate("/cart")}
                    className="bg-gray-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-gray-600 transition"
                  >
                    ← Back to Cart
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.address || !formData.phone}
                    className={`py-3 px-6 rounded-lg text-lg font-bold transition shadow-lg ${
                      formData.name && formData.email && formData.address && formData.phone
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    Place Order →
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
