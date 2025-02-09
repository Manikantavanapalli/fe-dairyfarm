import React from "react";

interface SubscriptionPlanProps {
  plan: {
    name: string;
    price: number;
    frequency: string;
  };
  quantity: string | number;
  pricePerUnit: number;
  onSubscribe: (planName: string) => void;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({ plan, quantity, pricePerUnit, onSubscribe }) => {
  const totalPrice = (plan.price / 140) * pricePerUnit; // Dynamic Pricing Calculation

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200">
      <h5 className="text-xl font-semibold text-gray-800">{plan.name}</h5>
      <p className="text-gray-600 mt-2">Fresh milk delivered every {plan.frequency}.</p>
      <p className="text-lg font-bold text-green-600 mt-3">Plan Price: ₹{plan.price}</p>
      <p className="text-lg font-bold text-blue-600">Milk Quantity: {quantity}</p>
      <p className="text-xl font-bold text-red-600">Total Price: ₹{totalPrice.toFixed(2)}</p>
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-5 rounded-lg font-bold hover:bg-blue-700 transition"
        onClick={() => onSubscribe(plan.name)}
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionPlan;
