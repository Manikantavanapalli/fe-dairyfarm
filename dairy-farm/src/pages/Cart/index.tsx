import React, { useEffect, useState } from "react";
import axios from "axios";

interface Subscription {
  id: number;
  name: string;
  subscriptionDuration: string;
  milkQuantity: string;
  status: "active" | "paused";
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/carts");
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handlePauseSubscription = async (id: number) => {
    try {
      await axios.patch(`http://localhost:5000/carts/${id}`, { status: "paused" });
      setCart(cart.map((item) => (item.id === id ? { ...item, status: "paused" } : item)));
    } catch (error) {
      console.error("Error pausing subscription:", error);
    }
  };

  const handleResumeSubscription = async (id: number) => {
    try {
      await axios.patch(`http://localhost:5000/carts/${id}`, { status: "active" });
      setCart(cart.map((item) => (item.id === id ? { ...item, status: "active" } : item)));
    } catch (error) {
      console.error("Error resuming subscription:", error);
    }
  };

  const handleRemoveFromCart = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/carts/${id}`);
      setCart(cart.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing subscription:", error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-900 text-center">🛒 Your Cart</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {cart.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg flex justify-between">
            <span>
              <strong>{item.subscriptionDuration}</strong> - {item.milkQuantity} ({item.status})
            </span>
            <button onClick={() => (item.status === "active" ? handlePauseSubscription(item.id) : handleResumeSubscription(item.id))} className={`px-3 py-1 ${item.status === "active" ? "bg-red-500" : "bg-green-500"} text-white`}>
              {item.status === "active" ? "Pause" : "Resume"}
            </button>
            <button onClick={() => handleRemoveFromCart(item.id)} className="bg-gray-500 text-white px-3">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
