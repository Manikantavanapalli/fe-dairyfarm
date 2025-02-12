import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  currentUser: string | null;
}

const Cart: React.FC<CartProps> = ({ currentUser }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartId, setCartId] = useState<number | null>(null);

  useEffect(() => {
    if (!currentUser) return;

    const fetchCart = async () => {
      try {
        // Fetch the user's cart
        const response = await axios.get(`http://localhost:5000/carts?userId=${currentUser}`);
        if (response.data.length > 0) {
          const userCart = response.data[0];
          setCartId(userCart.id); // Set the cart ID
          setCartItems(userCart.items);
        } else {
          // If the user doesn't have a cart, create one
          const newCartResponse = await axios.post("http://localhost:5000/carts", {
            userId: currentUser,
            items: [],
          });
          setCartId(newCartResponse.data.id); // Set the new cart ID
          setCartItems(newCartResponse.data.items);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [currentUser]);

  const handleQuantityChange = async (id: number, change: number) => {
    if (!currentUser || !cartId) return;

    try {
      // Fetch the user's cart
      const cartResponse = await axios.get(`http://localhost:5000/carts/${cartId}`);
      const userCart = cartResponse.data;

      // Find the item to update
      const itemToUpdate = userCart.items.find((item: CartItem) => item.id === id);
      if (!itemToUpdate) return;

      // Calculate the new quantity
      const newQuantity = itemToUpdate.quantity + change;

      if (newQuantity <= 0) {
        // Remove the item if the quantity is 0 or less
        userCart.items = userCart.items.filter((item: CartItem) => item.id !== id);
      } else {
        // Update the item quantity
        userCart.items = userCart.items.map((item: CartItem) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
      }

      // Update the cart on the server
      await axios.put(`http://localhost:5000/carts/${cartId}`, userCart);

      // Refresh the cart
      const updatedCartResponse = await axios.get(`http://localhost:5000/carts/${cartId}`);
      setCartItems(updatedCartResponse.data.items);
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
    }
  };

  const handleRemoveFromCart = async (id: number) => {
    if (!currentUser || !cartId) return;

    try {
      // Fetch the user's cart
      const cartResponse = await axios.get(`http://localhost:5000/carts/${cartId}`);
      const userCart = cartResponse.data;

      // Remove the item from the cart
      userCart.items = userCart.items.filter((item: CartItem) => item.id !== id);

      // Update the cart on the server
      await axios.put(`http://localhost:5000/carts/${cartId}`, userCart);

      // Refresh the cart
      const updatedCartResponse = await axios.get(`http://localhost:5000/carts/${cartId}`);
      setCartItems(updatedCartResponse.data.items);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">🛒 Shopping Cart</h2>
        <p className="text-lg text-gray-600">Review your items before checkout.</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-300">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-12">Your cart is empty. 🛍️</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4 px-3 bg-gray-50 rounded-lg mb-4 shadow-sm"
              >
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                  <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-red-500 text-white px-3 py-2 rounded-full hover:bg-red-600 transition"
                  >
                    −
                  </button>
                  <span className="text-xl font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-gray-500 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <h5 className="text-xl font-bold text-gray-800">Total:</h5>
              <h5 className="text-green-600 font-bold text-2xl">₹{totalPrice}</h5>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-semibold text-lg hover:bg-blue-700 transition"
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