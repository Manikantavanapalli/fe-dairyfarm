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

  // User Details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.address && formData.phone) {
      setOrderPlaced(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Page Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🛍️ Checkout</h2>
        <p className="text-gray-500">Complete your order by providing details.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {orderPlaced ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600">🎉 Order Placed Successfully!</h3>
            <p className="text-gray-600 mt-2">Thank you, {formData.name}. Your order will be delivered soon.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-bold hover:bg-blue-700 transition"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Order Summary */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">🛒 Order Summary</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <h5 className="text-lg font-semibold text-gray-700">{item.name}</h5>
                  <p className="text-gray-500">₹{item.price} x {item.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <h5 className="text-xl font-bold text-gray-800">Total:</h5>
                <h5 className="text-green-600 font-bold text-2xl">₹{totalPrice}</h5>
              </div>
            </div>

            {/* User Details Form */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Shipping Details</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="address"
                  placeholder="Shipping Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => navigate("/cart")}
                    className="bg-gray-500 text-white py-2 px-6 rounded-md text-lg font-bold hover:bg-gray-600 transition"
                  >
                    ← Back to Cart
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-6 rounded-md text-lg font-bold hover:bg-green-700 transition"
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
