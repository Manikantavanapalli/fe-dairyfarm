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
  const totalPrice = (plan.price / 140) * pricePerUnit; // Adjust price dynamically

  return (
    <div className="card shadow h-100 text-center">
      <div className="card-body">
        <h5 className="card-title">{plan.name}</h5>
        <p className="card-text">Get fresh milk delivered every {plan.frequency}.</p>
        <p className="fw-bold text-success">Plan Price: ₹{plan.price}</p>
        <p className="fw-bold text-primary">Milk Quantity: {quantity}</p>
        <p className="fw-bold text-danger">Total Price: ₹{totalPrice.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => onSubscribe(plan.name)}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
