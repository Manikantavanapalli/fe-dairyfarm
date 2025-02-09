import React, { useState } from "react";
import SubscriptionPlan from "../../components/SubscribePlanComp";

const plans = [
  { name: "Weekly Plan", price: 140, frequency: "week" },
  { name: "Monthly Plan", price: 550, frequency: "month" },
  { name: "3 Months Plan", price: 1500, frequency: "3 months" },
  { name: "6 Months Plan", price: 2900, frequency: "6 months" },
  { name: "1 Year Plan", price: 5500, frequency: "year" },
];

const milkPrices = {
  "250ml": 25,
  "500ml": 50,
  "750ml": 75,
  "1L": 100,
};

const Subscribe: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<keyof typeof milkPrices>("250ml");
  const [customQuantity, setCustomQuantity] = useState<number | null>(null);

  const handleSubscribe = (planName: string) => {
    setSelectedPlan(planName);
    const quantityPrice = customQuantity
      ? (customQuantity / 250) * 25
      : milkPrices[selectedQuantity];

    alert(
      `You have subscribed to the ${planName} plan with ${customQuantity || selectedQuantity} milk per delivery.\nTotal Price: ₹${quantityPrice * plans.find(p => p.name === planName)!.price / 140}`
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose Your Subscription Plan</h2>

      {/* Milk Quantity Selection */}
      <div className="mb-4">
        <h5 className="text-center">Select Milk Quantity per Delivery:</h5>
        <div className="row justify-content-center">
          {Object.entries(milkPrices).map(([size, price]) => (
            <div key={size} className="col-md-3 mb-3">
              <div
                className={`card p-3 text-center ${
                  selectedQuantity === size ? "border-success shadow-lg" : "border-primary"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedQuantity(size as keyof typeof milkPrices);
                  setCustomQuantity(null);
                }}
              >
                <h6 className="fw-bold">{size}</h6>
                <p className="mb-0">₹{price}</p>
              </div>
            </div>
          ))}
          {/* Custom Quantity Input */}
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center border-warning">
              <h6 className="fw-bold">Custom (ml)</h6>
              <input
                type="number"
                className="form-control"
                placeholder="Enter (min 251ml)"
                min="251"
                step="50"
                value={customQuantity || ""}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value > 250) {
                    setCustomQuantity(value);
                    setSelectedQuantity("Custom" as keyof typeof milkPrices);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-3">
            <SubscriptionPlan
              plan={plan}
              quantity={customQuantity || selectedQuantity}
              pricePerUnit={customQuantity ? (customQuantity / 250) * 25 : milkPrices[selectedQuantity]}
              onSubscribe={handleSubscribe}
            />
          </div>
        ))}
      </div>

      {/* Selected Plan Confirmation */}
      {selectedPlan && (
        <div className="alert alert-success mt-4 text-center">
          You have successfully subscribed to the <strong>{selectedPlan}</strong> plan!
        </div>
      )}
    </div>
  );
};

export default Subscribe;
