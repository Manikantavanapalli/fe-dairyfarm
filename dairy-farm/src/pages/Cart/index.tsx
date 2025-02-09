import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "250ml Buffalo Milk", price: 20, quantity: 1 },
    { id: 2, name: "500ml Buffalo Milk", price: 40, quantity: 2 },
  ]);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-6">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">🛒 Your Cart</h2>
        <p className="text-lg text-gray-600">Review your items before checkout.</p>
      </div>

      {/* Cart Container */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-12">Your cart is empty. 🛍️</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-5 px-3 bg-gray-50 rounded-lg shadow-sm mb-4"
              >
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                  <p className="text-gray-600 font-medium">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition shadow-md"
                  >
                    −
                  </button>
                  <span className="text-xl font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition shadow-md"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="flex justify-between items-center mt-8 border-t pt-6">
              <h5 className="text-2xl font-bold text-gray-800">Total:</h5>
              <h5 className="text-green-700 font-bold text-3xl">₹{totalPrice}</h5>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-orange-500 text-white py-4 rounded-lg mt-6 font-bold text-xl hover:bg-orange-600 transition shadow-lg"
            >
              Proceed to Checkout →
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
