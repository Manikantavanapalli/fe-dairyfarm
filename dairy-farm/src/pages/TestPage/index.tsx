import React from "react";
import OrderSummary from "../../components/OrderSummary";

const TestPage: React.FC = () => {
  const sampleItems = [
    { name: "Milk (1L)", quantity: 2, price: 50 },
    { name: "Butter (500g)", quantity: 1, price: 150 },
    { name: "Cheese (250g)", quantity: 3, price: 80 },
  ];

  const total = sampleItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-200 p-6">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Your Order</h1>
        <OrderSummary items={sampleItems} total={total} />
      </div>
    </div>
  );
};

export default TestPage;
