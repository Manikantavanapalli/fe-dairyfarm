import React from "react";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  const taxRate = 0.10; // 10% tax
  const taxAmount = total * taxRate;
  const grandTotal = total + taxAmount;

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl p-6 border border-gray-200">
      <h2 className="text-3xl font-bold mb-5 text-center text-blue-700 flex items-center justify-center gap-2">
        🛒 Order Summary
      </h2>

      {/* Items List */}
      <div className="border-b pb-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-gray-700">{item.name}</h3>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold text-gray-800">
              ₹{(item.quantity * item.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium text-gray-800">₹{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (10%):</span>
          <span className="font-medium text-gray-800">₹{taxAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-green-700 mt-3">
          <span>Total:</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-all shadow-lg">
        🛍️ Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
