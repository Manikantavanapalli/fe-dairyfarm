import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Subscription {
  name: string;
  address: string;
  pincode: string;
  deliverySchedule: string;
  subscriptionDuration: string;
  milkQuantity: string;
  customQuantity?: string;
  status?: "active" | "paused";
}

const Subscribe: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Subscription>({
    name: "",
    address: "",
    pincode: "",
    deliverySchedule: "Morning (6:00 AM - 9:00 AM)",
    subscriptionDuration: "One Day",
    milkQuantity: "250ml",
    customQuantity: "",
  });

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
        await axios.post("http://localhost:5000/carts", {
          ...formData,
          status: "active", 
        });

        
        navigate("/cart");
      } catch (error) {
        console.error("Error adding subscription to cart:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 py-12 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-300">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">🥛 Subscribe Now</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">👤 Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg p-3" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">📍 Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">📌 Pincode</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} maxLength={6} required className="w-full border rounded-lg p-3" />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">⏰ Delivery Schedule</label>
            <select name="deliverySchedule" value={formData.deliverySchedule} onChange={handleChange} className="w-full border rounded-lg p-3">
              <option value="Morning (6:00 AM - 9:00 AM)">Morning</option>
              <option value="Evening (5:00 PM - 8:00 PM)">Evening</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">📅 Subscription Duration</label>
            <select name="subscriptionDuration" value={formData.subscriptionDuration} onChange={handleChange} className="w-full border rounded-lg p-3">
              <option value="One Day">One Day</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

          <button type="button" onClick={handleAddToCart} className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-green-700">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
