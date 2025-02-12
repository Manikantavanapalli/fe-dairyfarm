import React, { useState } from "react";
import axios from "axios";

interface Subscription {
  name: string;
  address: string;
  pincode: string;
  deliverySchedule: string;
  subscriptionDuration: string;
  milkQuantity: string;
  customQuantity?: string;
}

const Subscribe: React.FC = () => {
  const [formData, setFormData] = useState<Subscription>({
    name: "",
    address: "",
    pincode: "",
    deliverySchedule: "Morning (6:00 AM - 9:00 AM)",
    subscriptionDuration: "One Day",
    milkQuantity: "250ml",
    customQuantity: "",
  });

  const [cart, setCart] = useState<Subscription[]>([]);
  const [checkout, setCheckout] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.pincode.trim().length === 6 &&
      (formData.milkQuantity !== "Custom" || (formData.customQuantity && Number(formData.customQuantity) > 0))
    );
  };

  const handleAddToCart = async () => {
    if (isFormValid()) {
      try {
        const response = await axios.post("/api/subscriptions", formData);
        setCart([...cart, response.data]);
        setFormData({
          name: "",
          address: "",
          pincode: "",
          deliverySchedule: "Morning (6:00 AM - 9:00 AM)",
          subscriptionDuration: "One Day",
          milkQuantity: "250ml",
          customQuantity: "",
        });
      } catch (error) {
        console.error("Error adding subscription to cart:", error);
      }
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.post("/api/checkout", { subscriptions: cart });
      setCheckout(true);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 py-12 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-300">
        {checkout ? (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h3>
            <p className="text-gray-700 mt-3">
              Your milk subscription(s) have been confirmed! You will receive fresh milk as per your schedule.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg">
              Back to Home
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-extrabold text-gray-900 text-center drop-shadow-md">🥛 Subscribe Now</h2>
            <p className="text-lg text-gray-600 text-center">Fresh Milk Delivered to Your Doorstep!</p>

            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700">👤 Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address and Pincode */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">📍 Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">📌 Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    maxLength={6}
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Delivery Schedule */}
              <div>
                <label className="block text-lg font-medium text-gray-700">⏰ Delivery Schedule</label>
                <select
                  name="deliverySchedule"
                  value={formData.deliverySchedule}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Morning (6:00 AM - 9:00 AM)">Morning (6:00 AM - 9:00 AM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

              {/* Subscription Duration */}
              <div>
                <label className="block text-lg font-medium text-gray-700">📅 Subscription Duration</label>
                <select
                  name="subscriptionDuration"
                  value={formData.subscriptionDuration}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="One Day">One Day</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>

              {/* Milk Quantity Selection */}
              <div>
                <label className="block text-lg font-medium text-gray-700">🥛 Select Milk Quantity</label>
                <select
                  name="milkQuantity"
                  value={formData.milkQuantity}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="250ml">250ml</option>
                  <option value="500ml">500ml</option>
                  <option value="750ml">750ml</option>
                  <option value="1L">1 Litre</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Add to Cart Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-green-700 transition shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </form>

            {/* Cart Section */}
            {cart.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-800">🛒 Your Cart</h3>
                <ul className="mt-4 space-y-2">
                  {cart.map((item, index) => (
                    <li key={index} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                      <strong>{item.subscriptionDuration}</strong> - {item.milkQuantity}
                    </li>
                  ))}
                </ul>
                <button onClick={handleCheckout} className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Subscribe;