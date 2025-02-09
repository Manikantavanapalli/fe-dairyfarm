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
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>

      {/* Items List */}
      <div className="border-b pb-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold">₹{(item.quantity * item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">₹{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (10%):</span>
          <span className="font-medium">₹{taxAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-2">
          <span>Total:</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
