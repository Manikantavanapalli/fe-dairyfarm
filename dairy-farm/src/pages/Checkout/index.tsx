import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: "subscription" | "product";
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems: CartItem[] = location.state?.cartItems || [];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    pincode: "",
    landmark: "",
    paymentMethod: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveOrder = async () => {
    const order = {
      id: `ORD${Math.floor(Math.random() * 1000000)}`,
      userId: "1",
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      total: `₹${totalPrice}`,
      status: "Pending",
      items: cartItems,
      shippingDetails: formData,
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Failed to save order");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.address && formData.phone && formData.pincode) {
      const order = await saveOrder();
      if (order) {
        setOrderPlaced(true);
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">🛍️ Checkout</h2>
        <p className="text-lg text-gray-600">Complete your order by providing your details.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {orderPlaced ? (
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
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🛒 Order Summary</h3>
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b py-3">
                    <h5 className="text-lg font-semibold text-gray-700">{item.name}</h5>
                    <p className="text-gray-500">₹{item.price} x {item.quantity || 1}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-4 border-t pt-4">
                  <h5 className="text-xl font-bold text-gray-800">Total:</h5>
                  <h5 className="text-green-600 font-bold text-2xl">₹{totalPrice}</h5>
                </div>
              </div>
            </div>

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
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="landmark"
                  placeholder="Landmark (Optional)"
                  value={formData.landmark}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

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
                    disabled={!formData.name || !formData.address || !formData.phone || !formData.pincode}
                    className={`py-3 px-6 rounded-lg text-lg font-bold transition shadow-lg ${
                      formData.name && formData.address && formData.phone && formData.pincode
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